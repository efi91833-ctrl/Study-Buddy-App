/* =============================================================
   Artery 3D — Engine
   window.Artery3D  (renderer)   window.Artery3DAtlas  (React view)

   This file contains NO anatomy. It knows how to draw a tapered tube
   along a centreline, how to build the skeletal reference from a
   vertebral table, how to orbit a camera and how to pick a vessel.
   Which vessels exist comes from artery-3d-topology.js; where they are
   comes from artery-3d-geometry.js.

   RENDERING NOTES
   ---------------
   The flat "computer graphics" look comes from four things, all fixed
   here:

     1. No tone mapping and linear output. Colours clipped and went
        plasticky. Now ACES filmic tone mapping with sRGB output.
     2. No environment. A surface only looks wet if it has something to
        reflect. A small studio scene is built in code and prefiltered
        through PMREMGenerator, so every vessel picks up real specular
        highlights without shipping an HDRI file.
     3. Lambert materials, which have no specular term at all. Now
        MeshPhysicalMaterial with a clearcoat layer standing in for the
        wet serosal sheen.
     4. Perfect cylinders. Real vessels undulate, flare at their ostia
        and have a fibrous adventitial surface. All three are now
        generated procedurally.

   Everything is drawn from code — no texture or HDRI files — so the
   app stays offline with only three.min.js vendored.

   Written as plain ES5 with React.createElement, matching the pattern
   of artery-game.js, because index.html loads data and engine scripts
   before Babel runs.
   ============================================================= */

(function () {
  'use strict';

  /* Scene units are centimetres: geometry is authored in mm and scaled
     by 0.1 so that camera near/far planes and lighting behave. */
  var MM = 0.1;

  /* ---------------------------------------------------------------
     LOOKS
     'specimen' is what a fresh prosection actually looks like: the
     aortic wall is thick pale tissue, not a red tube, and only the
     smaller muscular arteries read as red.
     'atlas' is Gilroy/Netter convention, where red means artery at a
     glance. Both are lit identically; only the palette changes.
     --------------------------------------------------------------- */
  var LOOKS = {
    /* Matches the medical-illustration convention used by Visible Body
       and 3D4Medical: pure white ground, opaque warm ivory bone with
       blue-grey costal cartilage, deep crimson vessels, and soft even
       lighting with almost no cast shadow. Depth comes from the
       environment and from bone occluding vessels, not from shadows. */
    illustration: {
      name: 'Illustration',
      aorta:    0x9c2028,
      systemic: 0xa62630,
      coronary: 0x8e1b23,
      visceral: 0xa93038,
      stub:     0x9a5c5f,
      bone:     0xece2cd,
      cartilage:0xc3cdd2,
      roughness: 0.52,
      clearcoat: 0.35,
      clearcoatRoughness: 0.4,
      normalScale: 0.16,      /* surfaces read smooth, not fibrous */
      background: '#ffffff',
      env: 'bright',
      exposure: 1.18,
      ambient: 0.52,
      keyIntensity: 0.55,
      rimIntensity: 0.22,
      shadows: false,
      boneSolid: true,
      boneOpacity: 1,
      envMapIntensity: 1.05,
    },
    specimen: {
      name: 'Specimen',
      aorta:    0xd6c3b0,
      systemic: 0xc4907f,
      coronary: 0xb0574c,
      visceral: 0xc98a74,
      stub:     0xa89086,
      bone:     0xe6dac2,
      cartilage:0xd7d2c4,
      roughness: 0.44,
      clearcoat: 0.9,
      clearcoatRoughness: 0.3,
      normalScale: 0.55,
      background: ['#e9e5df', '#cdc7bf', '#a8a29a'],
      env: 'studio',
      exposure: 1.05,
      ambient: 0.16,
      keyIntensity: 1.15,
      rimIntensity: 0.35,
      shadows: true,
      boneSolid: false,
      boneOpacity: 0.62,
      envMapIntensity: 1.0,
    },
    atlas: {
      name: 'Atlas',
      aorta:    0xc0392b,
      systemic: 0xcf4436,
      coronary: 0xa93226,
      visceral: 0xd05a44,
      stub:     0xa1685f,
      bone:     0xeee3cc,
      cartilage:0xccd4d8,
      roughness: 0.36,
      clearcoat: 0.7,
      clearcoatRoughness: 0.22,
      normalScale: 0.42,
      background: ['#f2efe9', '#ddd8d0', '#bdb7ae'],
      env: 'studio',
      exposure: 1.0,
      ambient: 0.22,
      keyIntensity: 0.95,
      rimIntensity: 0.3,
      shadows: true,
      boneSolid: false,
      boneOpacity: 0.7,
      envMapIntensity: 1.0,
    },
  };
  var LOOK_ORDER = ['illustration', 'specimen', 'atlas'];

  var PALETTE = { highlight: 0xffc400, correct: 0x2e9e5b, wrong: 0xc0392b, level: 0x7a8b99 };

  /* =================================================================
     PROCEDURAL NOISE
     A small value-noise implementation. Used for the surface textures
     and for the organic variation in vessel calibre. Seeded so the
     model looks identical every time it loads.
     ================================================================= */
  function makeNoise(seed) {
    var p = new Uint8Array(512), i;
    var s = seed || 1;
    function rnd() { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; }
    var perm = [];
    for (i = 0; i < 256; i++) perm[i] = i;
    for (i = 255; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = perm[i]; perm[i] = perm[j]; perm[j] = t; }
    for (i = 0; i < 512; i++) p[i] = perm[i & 255];

    function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    function lerp(a, b, t) { return a + (b - a) * t; }
    function grad(h, x, y) {
      switch (h & 3) {
        case 0: return  x + y;
        case 1: return -x + y;
        case 2: return  x - y;
        default: return -x - y;
      }
    }
    return function (x, y) {
      var X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
      x -= Math.floor(x); y -= Math.floor(y);
      var u = fade(x), v = fade(y);
      var a = p[X] + Y, b = p[X + 1] + Y;
      return lerp(
        lerp(grad(p[a], x, y),     grad(p[b], x - 1, y),     u),
        lerp(grad(p[a + 1], x, y - 1), grad(p[b + 1], x - 1, y - 1), u),
        v
      ) * 0.7;
    };
  }
  var noise2 = makeNoise(20260805);

  function fbm(x, y, octaves) {
    var v = 0, amp = 0.5, f = 1;
    for (var i = 0; i < (octaves || 4); i++) { v += amp * noise2(x * f, y * f); f *= 2; amp *= 0.5; }
    return v;
  }

  /* =================================================================
     PROCEDURAL TEXTURES
     u runs along the vessel, v around its circumference — so streaks
     drawn along u become longitudinal adventitial fibres, which is how
     the outer coat of an artery actually reads.
     ================================================================= */
  function vesselTextures() {
    var S = 512;
    var cv = document.createElement('canvas'); cv.width = cv.height = S;
    var ctx = cv.getContext('2d');
    var img = ctx.createImageData(S, S);
    var height = new Float32Array(S * S);
    var x, y, i;

    for (y = 0; y < S; y++) {
      for (x = 0; x < S; x++) {
        i = y * S + x;
        var u = x / S, v = y / S;

        /* Longitudinal fibres: stretched hard along u, tight across v. */
        var fibre = fbm(u * 3.0, v * 44.0, 4);
        /* Broad mottling of the wall itself. */
        var mottle = fbm(u * 7.0, v * 7.0, 4);
        /* Fine vasa vasorum speckle. */
        var speck = fbm(u * 60.0, v * 60.0, 2);

        var h = fibre * 0.55 + mottle * 0.35 + speck * 0.10;
        height[i] = h;

        /* Near-white base so the material colour still governs hue. */
        var shade = 1 + h * 0.30 + speck * 0.06;
        var r = Math.max(0, Math.min(255, 236 * shade));
        var g = Math.max(0, Math.min(255, 226 * shade * (1 - mottle * 0.05)));
        var b = Math.max(0, Math.min(255, 222 * shade * (1 - mottle * 0.09)));
        img.data[i * 4] = r; img.data[i * 4 + 1] = g; img.data[i * 4 + 2] = b; img.data[i * 4 + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);

    /* Normal map from the same height field, by finite differences. */
    var nv = document.createElement('canvas'); nv.width = nv.height = S;
    var nctx = nv.getContext('2d');
    var nimg = nctx.createImageData(S, S);
    var STRENGTH = 2.6;
    for (y = 0; y < S; y++) {
      for (x = 0; x < S; x++) {
        i = y * S + x;
        var hl = height[y * S + ((x - 1 + S) % S)];
        var hr = height[y * S + ((x + 1) % S)];
        var hd = height[((y - 1 + S) % S) * S + x];
        var hu = height[((y + 1) % S) * S + x];
        var dx = (hl - hr) * STRENGTH, dy = (hd - hu) * STRENGTH;
        var len = Math.sqrt(dx * dx + dy * dy + 1);
        nimg.data[i * 4]     = ((dx / len) * 0.5 + 0.5) * 255;
        nimg.data[i * 4 + 1] = ((dy / len) * 0.5 + 0.5) * 255;
        nimg.data[i * 4 + 2] = ((1 / len) * 0.5 + 0.5) * 255;
        nimg.data[i * 4 + 3] = 255;
      }
    }
    nctx.putImageData(nimg, 0, 0);

    var map = new THREE.CanvasTexture(cv);
    var nrm = new THREE.CanvasTexture(nv);
    [map, nrm].forEach(function (t) {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.anisotropy = 4;
    });
    map.encoding = THREE.sRGBEncoding;
    return { map: map, normalMap: nrm };
  }

  function boneTexture() {
    var S = 256;
    var cv = document.createElement('canvas'); cv.width = cv.height = S;
    var ctx = cv.getContext('2d');
    var img = ctx.createImageData(S, S);
    for (var y = 0; y < S; y++) {
      for (var x = 0; x < S; x++) {
        var i = y * S + x;
        /* Trabecular pitting plus broad staining. */
        var pit = fbm(x / S * 40, y / S * 40, 3);
        var stain = fbm(x / S * 5, y / S * 5, 3);
        var sh = 1 + pit * 0.16 + stain * 0.14;
        img.data[i * 4]     = Math.min(255, 238 * sh);
        img.data[i * 4 + 1] = Math.min(255, 228 * sh);
        img.data[i * 4 + 2] = Math.min(255, 205 * sh);
        img.data[i * 4 + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    var t = new THREE.CanvasTexture(cv);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.encoding = THREE.sRGBEncoding;
    return t;
  }

  /* =================================================================
     STUDIO ENVIRONMENT
     Built as a scene of emissive panels and prefiltered by
     PMREMGenerator. This is what gives the wet highlights; without it
     a clearcoat has nothing to reflect and still looks like plastic.
     ================================================================= */
  function buildStudioEnv(renderer, preset) {
    var bright = preset === 'bright';
    var env = new THREE.Scene();
    /* The illustration look needs an almost uniformly bright surround —
       a white cyclorama — so that shading is gentle and nothing falls
       into deep shadow. The studio preset is much darker, which is what
       gives the specimen look its wet contrast. */
    var box = new THREE.Mesh(
      new THREE.BoxGeometry(120, 120, 120),
      new THREE.MeshBasicMaterial({ color: bright ? 0xdfe3e6 : 0x9aa0a6, side: THREE.BackSide })
    );
    env.add(box);

    function panel(w, h, colour, intensity, pos, rot) {
      var m = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(colour).multiplyScalar(intensity) })
      );
      m.position.set(pos[0], pos[1], pos[2]);
      if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
      env.add(m);
      return m;
    }

    if (bright) {
      /* Wraparound soft light from every direction: the illustration
         style has no single obvious light source. */
      panel(110, 110, 0xffffff, 2.2, [0, 55, 0],  [-Math.PI / 2, 0, 0]);
      panel(110, 90,  0xffffff, 1.5, [0, 0, 55],  [0, 0, 0]);
      panel(90, 90,   0xf4f7fa, 1.2, [-55, 0, 0], [0, Math.PI / 2, 0]);
      panel(90, 90,   0xf4f7fa, 1.2, [55, 0, 0],  [0, -Math.PI / 2, 0]);
      panel(110, 90,  0xffffff, 1.1, [0, 0, -55], [0, Math.PI, 0]);
      panel(110, 110, 0xfdfbf7, 1.0, [0, -55, 0], [Math.PI / 2, 0, 0]);
    } else {
      /* Large soft key from above and in front — a dissection lamp. */
      panel(70, 70, 0xffffff, 3.4, [10, 45, 30], [-Math.PI / 2.3, 0, 0]);
      /* Cool fill from the left, so shaded sides do not go dead. */
      panel(60, 90, 0xcddcf0, 1.1, [-55, 5, 0], [0, Math.PI / 2, 0]);
      /* Warm bounce from below, which is what makes tissue read as wet. */
      panel(80, 50, 0xffd9bc, 0.7, [0, -45, 10], [Math.PI / 2, 0, 0]);
      /* Rim from behind. */
      panel(50, 60, 0xffffff, 1.5, [20, 20, -55], [0, 0, 0]);
    }

    var pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    var rt = pmrem.fromScene(env, bright ? 0.06 : 0.03);
    pmrem.dispose();
    env.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
    return rt.texture;
  }

  /* A look may specify a flat colour string or a three-stop gradient. */
  function makeBackground(spec) {
    if (typeof spec === 'string') return new THREE.Color(spec);
    return gradientBackground(spec);
  }

  function gradientBackground(stops) {
    var cv = document.createElement('canvas'); cv.width = 8; cv.height = 256;
    var ctx = cv.getContext('2d');
    var g = ctx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, stops[0]); g.addColorStop(0.55, stops[1]); g.addColorStop(1, stops[2]);
    ctx.fillStyle = g; ctx.fillRect(0, 0, 8, 256);
    var t = new THREE.CanvasTexture(cv);
    t.encoding = THREE.sRGBEncoding;
    return t;
  }

  /* ---------------------------------------------------------------
     Catmull-Rom resampling. Authored paths have few points; tubes need
     a smooth centreline or the taper steps visibly at each junction.
     --------------------------------------------------------------- */
  function resample(points, perSegment) {
    if (points.length < 2) return points.slice();
    var pts = points.map(function (p) { return new THREE.Vector3(p[0] * MM, p[1] * MM, p[2] * MM); });
    var curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
    var n = Math.max(8, (points.length - 1) * perSegment);
    return curve.getPoints(n);
  }

  /* ---------------------------------------------------------------
     Tapered tube with organic variation.

     THREE.TubeGeometry has a constant radius, so vertices are displaced
     along their own normals. On top of the linear taper we add:

       ostial flare  — a branch is funnel-shaped where it leaves its
                       parent, not a cylinder butted against a wall.
                       This is the single change that stops junctions
                       looking welded together.
       undulation    — low-frequency variation along the length, so no
                       vessel is a perfect machined cylinder.
       cross-section — slight ellipticity that rotates slowly along the
                       vessel, since arteries are not exactly round.
     --------------------------------------------------------------- */
  function taperedTube(centreline, r0, r1, radialSegments, opts) {
    opts = opts || {};
    var curve = new THREE.CatmullRomCurve3(centreline, false, 'catmullrom', 0.5);
    var tubular = Math.max(10, (centreline.length - 1) * 2);
    var rs = radialSegments || 8;
    var geo = new THREE.TubeGeometry(curve, tubular, 1, rs, false);

    var pos = geo.attributes.position;
    var c = new THREE.Vector3(), v = new THREE.Vector3(), n = new THREE.Vector3();
    var seed = opts.seed || 0;
    var flare = opts.flare === undefined ? 1 : opts.flare;

    for (var i = 0; i <= tubular; i++) {
      var t = i / tubular;
      var radius = (r0 + (r1 - r0) * t);

      /* Ostial flare over the first 12 percent of the vessel. */
      if (flare) {
        var f = Math.max(0, 1 - t / 0.12);
        radius *= 1 + 0.42 * f * f * flare;
      }
      /* Undulation: gentle, scaled to the vessel so big vessels do not
         look lumpy and small ones do not look dead straight. */
      radius *= 1 + 0.05 * fbm(t * 4 + seed, seed * 0.7, 2);
      radius *= MM;

      curve.getPointAt(t, c);
      for (var j = 0; j <= rs; j++) {
        var idx = i * (rs + 1) + j;
        v.fromBufferAttribute(pos, idx);
        n.copy(v).sub(c).normalize();
        /* Slowly rotating ellipticity. */
        var ang = (j / rs) * Math.PI * 2;
        var ell = 1 + 0.05 * Math.cos(2 * (ang + t * 2.2 + seed));
        v.copy(c).addScaledVector(n, radius * ell);
        pos.setXYZ(idx, v.x, v.y, v.z);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    /* Repeat the surface texture along the length in proportion to how
       long the vessel actually is, so fibre density stays constant
       instead of stretching on long vessels. */
    var lengthCm = curve.getLength();
    var uv = geo.attributes.uv;
    var repeats = Math.max(1, Math.round(lengthCm / Math.max(0.6, r0 * MM * 6)));
    for (var k = 0; k < uv.count; k++) uv.setX(k, uv.getX(k) * repeats);
    uv.needsUpdate = true;

    return geo;
  }

  function regionOf(key, v) {
    var id = key.replace(/^[LR]:/, '');
    if (v.stub) return 'stub';
    if (/aorta|aortic_arch|brachiocephalic/.test(id)) return 'aorta';
    if (/coronar|interventricular|circumflex|marginal|nodal|diagonal|septal/.test(id)) return 'coronary';
    if (/celiac|mesenteric|renal|gonadal|suprarenal|phrenic|hepatic|splenic|gastric/.test(id)) return 'visceral';
    return 'systemic';
  }

  /* =================================================================
     RENDERER
     ================================================================= */
  function Artery3D(container, opts) {
    opts = opts || {};
    this.container = container;
    this.onPick = opts.onPick || function () {};
    this.lookName = opts.look || 'illustration';
    this.look = LOOKS[this.lookName];
    this.meshes = {};
    this.baseColor = {};
    this.skeletonGroup = null;
    this.disposed = false;

    var w = container.clientWidth || 800;
    var h = container.clientHeight || 600;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(w, h);
    /* The three settings that most affect how "computer generated"
       this looks. Without them, colour is clipped and everything reads
       as plastic. */
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = this.look.exposure;
    this.renderer.shadowMap.enabled = this.look.shadows !== false;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = makeBackground(this.look.background);
    this.envCache = {};
    this.envTexture = this._env(this.look.env);
    this.scene.environment = this.envTexture;

    this.camera = new THREE.PerspectiveCamera(34, w / h, 0.5, 4000);

    /* Lights are deliberately restrained: most of the illumination is
       coming from the environment. These add direction and shadows. */
    this.ambient = new THREE.AmbientLight(0xffffff, this.look.ambient);
    this.scene.add(this.ambient);
    var key = new THREE.DirectionalLight(0xfff4e8, this.look.keyIntensity);
    key.position.set(28, 46, 40);
    key.castShadow = this.look.shadows !== false;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.bias = -0.0012;
    key.shadow.normalBias = 0.02;
    var cam = key.shadow.camera;
    cam.left = -110; cam.right = 110; cam.top = 130; cam.bottom = -130;
    cam.near = 1; cam.far = 320;
    cam.updateProjectionMatrix();
    this.scene.add(key);
    this.keyLight = key;

    var rim = new THREE.DirectionalLight(0xcfe0f2, this.look.rimIntensity);
    rim.position.set(-34, 10, -40);
    this.scene.add(rim);
    this.rimLight = rim;

    this.textures = vesselTextures();
    this.boneTex = boneTexture();

    this.vesselGroup = new THREE.Group();
    this.scene.add(this.vesselGroup);

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    this.target = new THREE.Vector3(0, -20, 0);
    this.spherical = { radius: 130, phi: Math.PI / 2, theta: 0 };
    this._bindControls();
    this._updateCamera();

    var self = this;
    this._onResize = function () { self.resize(); };
    window.addEventListener('resize', this._onResize);

    this._animate = function () {
      if (self.disposed) return;
      requestAnimationFrame(self._animate);
      self.renderer.render(self.scene, self.camera);
    };
    this._animate();
  }

  /* Environment maps are expensive to prefilter, so each preset is
     built once and reused when the look is switched. */
  Artery3D.prototype._env = function (preset) {
    preset = preset || 'studio';
    if (!this.envCache[preset]) this.envCache[preset] = buildStudioEnv(this.renderer, preset);
    return this.envCache[preset];
  };

  Artery3D.prototype._updateCamera = function () {
    var s = this.spherical;
    s.phi = Math.max(0.08, Math.min(Math.PI - 0.08, s.phi));
    s.radius = Math.max(3, Math.min(600, s.radius));
    this.camera.position.set(
      this.target.x + s.radius * Math.sin(s.phi) * Math.sin(s.theta),
      this.target.y + s.radius * Math.cos(s.phi),
      this.target.z + s.radius * Math.sin(s.phi) * Math.cos(s.theta)
    );
    this.camera.lookAt(this.target);
  };

  Artery3D.prototype._bindControls = function () {
    var self = this, el = this.renderer.domElement;
    var dragging = false, moved = 0, lastX = 0, lastY = 0, panning = false;

    function down(e) {
      dragging = true; moved = 0;
      panning = e.shiftKey || e.button === 2;
      lastX = e.clientX; lastY = e.clientY;
    }
    function move(e) {
      if (!dragging) return;
      var dx = e.clientX - lastX, dy = e.clientY - lastY;
      moved += Math.abs(dx) + Math.abs(dy);
      lastX = e.clientX; lastY = e.clientY;
      if (panning) {
        var scale = self.spherical.radius * 0.0016;
        var right = new THREE.Vector3().setFromMatrixColumn(self.camera.matrix, 0);
        var up = new THREE.Vector3().setFromMatrixColumn(self.camera.matrix, 1);
        self.target.addScaledVector(right, -dx * scale);
        self.target.addScaledVector(up, dy * scale);
      } else {
        self.spherical.theta -= dx * 0.006;
        self.spherical.phi   -= dy * 0.006;
      }
      self._updateCamera();
    }
    function up(e) {
      if (dragging && moved < 5 && !panning) self._pick(e);
      dragging = false;
    }

    el.addEventListener('mousedown', down);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    el.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    el.addEventListener('wheel', function (e) {
      e.preventDefault();
      self.spherical.radius *= (1 + Math.sign(e.deltaY) * 0.09);
      self._updateCamera();
    }, { passive: false });

    var pinch = 0;
    el.addEventListener('touchstart', function (e) {
      if (e.touches.length === 1) { dragging = true; moved = 0; panning = false; lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; }
      else if (e.touches.length === 2) { dragging = false; pinch = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); }
    }, { passive: true });
    el.addEventListener('touchmove', function (e) {
      if (e.touches.length === 1 && dragging) {
        move({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
      } else if (e.touches.length === 2) {
        var d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        if (pinch) { self.spherical.radius *= pinch / d; self._updateCamera(); }
        pinch = d;
      }
    }, { passive: true });
    el.addEventListener('touchend', function () { dragging = false; pinch = 0; });

    this._el = el;
  };

  Artery3D.prototype._pick = function (e) {
    var rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    var hits = this.raycaster.intersectObjects(this.vesselGroup.children, false);
    this.onPick(hits.length ? hits[0].object.userData.key : null);
  };

  /* ---------------------------------------------------------------
     Build every vessel that has geometry.
     --------------------------------------------------------------- */
  Artery3D.prototype.buildVessels = function (vessels, instances) {
    var self = this, L = this.look;
    var seedCounter = 0;

    Object.keys(vessels).forEach(function (key) {
      if (instances && !instances[key]) return;   /* orphan geometry: audit reports it */
      var v = vessels[key];
      var line = resample(v.path, 12);
      var region = regionOf(key, v);
      var colour = L[region] || L.systemic;

      /* Radial segments scale with calibre. With ~720 vessels to come,
         this is the difference between smooth and unusable. */
      var rs = v.r[0] > 6 ? 26 : v.r[0] > 2 ? 16 : 9;
      var isTrunk = /aorta|aortic_arch/.test(key);
      var geo = taperedTube(line, v.r[0], v.r[1], rs, {
        seed: (seedCounter++) * 3.7,
        flare: isTrunk ? 0 : 1,
      });

      var mat = new THREE.MeshPhysicalMaterial({
        color: colour,
        map: self.textures.map,
        normalMap: self.textures.normalMap,
        normalScale: new THREE.Vector2(L.normalScale, L.normalScale),
        roughness: L.roughness,
        metalness: 0.0,
        clearcoat: L.clearcoat,
        clearcoatRoughness: L.clearcoatRoughness,
        envMapIntensity: L.envMapIntensity,
        transparent: !!v.stub,
        opacity: v.stub ? 0.55 : 1,
      });

      var mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.key = key;
      self.meshes[key] = mesh;
      self.baseColor[key] = colour;
      self.vesselGroup.add(mesh);
    });
  };

  /* ---------------------------------------------------------------
     Skeletal reference, generated from the vertebral table.
     Vertebral bodies are lathed with the concave waist real vertebrae
     have, rather than drawn as boxes.
     --------------------------------------------------------------- */
  Artery3D.prototype.buildSkeleton = function (skel, opts) {
    opts = opts || {};
    var L = this.look;
    var g = new THREE.Group();
    var solid = opts.solid === undefined ? !!L.boneSolid : !!opts.solid;

    var boneMat = new THREE.MeshPhysicalMaterial({
      color: L.bone,
      map: this.boneTex,
      roughness: 0.72,
      metalness: 0.0,
      clearcoat: 0.18,
      clearcoatRoughness: 0.5,
      transparent: !solid,
      opacity: solid ? 1 : L.boneOpacity,
      envMapIntensity: 0.85,
      depthWrite: solid,
    });

    /* Costal cartilage is visibly different tissue — pale blue-grey,
       smoother and slightly translucent. Drawing it separately is a
       large part of why an illustrated thorax reads correctly. */
    var cartMat = new THREE.MeshPhysicalMaterial({
      color: L.cartilage,
      roughness: 0.42,
      metalness: 0.0,
      clearcoat: 0.4,
      clearcoatRoughness: 0.35,
      transparent: !solid,
      opacity: solid ? 1 : L.boneOpacity,
      envMapIntensity: 0.9,
      depthWrite: solid,
    });
    var i;

    /* Vertebral body profile: widest at the endplates, waisted in the
       middle. Lathed, then squashed to the body's width and depth. */
    function vertebralBody(w, d, h) {
      var rw = 1;
      var pts = [
        new THREE.Vector2(0, -h / 2),
        new THREE.Vector2(rw * 0.99, -h / 2),
        new THREE.Vector2(rw * 0.93, -h * 0.26),
        new THREE.Vector2(rw * 0.87, 0),
        new THREE.Vector2(rw * 0.93, h * 0.26),
        new THREE.Vector2(rw * 0.99, h / 2),
        new THREE.Vector2(0, h / 2),
      ];
      var geo = new THREE.LatheGeometry(pts, 20);
      geo.scale(w / 2, 1, d / 2);
      return geo;
    }

    for (i = 0; i < skel.vertebrae.length; i++) {
      var vt = skel.vertebrae[i];
      var next = skel.vertebrae[i + 1];
      var height = (next ? Math.abs(vt.y - next.y) * 0.74 : 26) * MM;

      var body = new THREE.Mesh(vertebralBody(vt.w * MM, vt.d * MM, height), boneMat);
      body.position.set(0, vt.y * MM, (vt.z - vt.d / 2) * MM);
      body.castShadow = solid; body.receiveShadow = true;
      body.userData.level = vt.id;
      g.add(body);

      /* Pedicles and laminae, as a coarse arch behind the body.
         archR is already in scene units, so it is not scaled again. */
      var archR = vt.d * 0.42 * MM;
      var arch = new THREE.Mesh(new THREE.TorusGeometry(archR, 3.2 * MM, 6, 14, Math.PI * 1.15), boneMat);
      arch.position.set(0, vt.y * MM, (vt.z - vt.d) * MM - archR * 0.5);
      arch.rotation.set(Math.PI / 2, 0, Math.PI);
      g.add(arch);

      /* Spinous process, angled downwards in the thoracic region as it
         truly is — that steep overlap is why thoracic spines are hard
         to count. */
      var isThoracic = vt.id.charAt(0) === 'T';
      var spLen = (isThoracic ? 36 : 26) * MM;
      var sp = new THREE.Mesh(new THREE.CylinderGeometry(2.0 * MM, 3.4 * MM, spLen, 6), boneMat);
      sp.position.set(0, (vt.y - (isThoracic ? 13 : 5)) * MM, (vt.z - vt.d - 26) * MM);
      sp.rotation.x = isThoracic ? Math.PI / 2 + 0.72 : Math.PI / 2 + 0.18;
      g.add(sp);

      /* Transverse processes. */
      [1, -1].forEach(function (s) {
        var tp = new THREE.Mesh(new THREE.CylinderGeometry(2.2 * MM, 3.0 * MM, vt.w * 0.55 * MM, 6), boneMat);
        tp.position.set(s * vt.w * 0.5 * MM, vt.y * MM, (vt.z - vt.d - 8) * MM);
        tp.rotation.z = Math.PI / 2;
        g.add(tp);
      });
    }

    /* Ribs, as elliptical arcs from the vertebral body to the sternum. */
    var vByLevel = {};
    skel.vertebrae.forEach(function (v) { vByLevel[v.id] = v; });
    skel.ribs.forEach(function (rib) {
      var v = vByLevel[rib.level]; if (!v) return;
      [1, -1].forEach(function (sign) {
        var pts = [];
        for (var a = 0; a <= 20; a++) {
          var t = a / 20;
          var ang = t * Math.PI * 0.86;
          pts.push(new THREE.Vector3(
            sign * Math.sin(ang) * rib.spread * MM,
            (v.y - rib.drop * t) * MM,
            (v.z - v.d - 18 + (1 - Math.cos(ang)) * 0.5 * rib.reach + Math.sin(ang) * 12) * MM
          ));
        }

        /* The osseous rib runs from the vertebra to the costochondral
           junction; the remainder is cartilage. Ribs 11 and 12 are
           floating, so they get no cartilage at all. */
        var floating = rib.n >= 11;
        var split = floating ? pts.length : Math.round(pts.length * 0.74);

        function blade(points, mat) {
          if (points.length < 2) return;
          var geo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 26, 3.6 * MM, 6, false);
          var m = new THREE.Mesh(geo, mat);
          m.scale.y = 1.45;              /* ribs are flat blades, not rods */
          m.castShadow = solid; m.receiveShadow = true;
          g.add(m);
        }
        blade(pts.slice(0, split + 1), boneMat);
        if (!floating) blade(pts.slice(split), cartMat);
      });
    });

    /* Sternum. */
    var st = skel.sternum;
    function slab(w, hTop, hBot, zTop, zBot) {
      var shape = new THREE.BoxGeometry(w * MM, Math.abs(hTop - hBot) * MM, st.thickness * MM);
      var m = new THREE.Mesh(shape, boneMat);
      m.position.set(0, (hTop + hBot) / 2 * MM, ((zTop + zBot) / 2 + st.thickness / 2) * MM);
      m.castShadow = solid; m.receiveShadow = true;
      return m;
    }
    g.add(slab(st.width.manubrium, st.jugularNotch.y, st.sternalAngle.y, st.jugularNotch.z, st.sternalAngle.z));
    g.add(slab(st.width.body, st.sternalAngle.y, st.xiphoid.y, st.sternalAngle.z, st.xiphoid.z));

    /* Pelvis: iliac blades as lathed plates, plus the sacrum. */
    var p = skel.pelvis;
    [1, -1].forEach(function (sign) {
      var pts = [
        new THREE.Vector3(0, p.sacrumTop.y * MM, p.sacrumTop.z * MM),
        new THREE.Vector3(sign * p.iliacCrest.x * MM, p.iliacCrest.y * MM, p.iliacCrest.z * MM),
        new THREE.Vector3(sign * p.asis.x * MM, p.asis.y * MM, p.asis.z * MM),
        new THREE.Vector3(sign * p.acetabulum.x * MM, p.acetabulum.y * MM, p.acetabulum.z * MM),
        new THREE.Vector3(sign * 18 * MM, p.pubicSymph.y * MM, p.pubicSymph.z * MM),
      ];
      var m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 30, 7 * MM, 7, false), boneMat);
      m.castShadow = solid; m.receiveShadow = true;
      g.add(m);

      /* Iliac fossa, as a thin curved blade filling the arc. */
      var blade = new THREE.Mesh(new THREE.SphereGeometry(52 * MM, 14, 10, 0, Math.PI * 0.9, 0, Math.PI * 0.55), boneMat);
      blade.position.set(sign * 74 * MM, -368 * MM, 24 * MM);
      blade.rotation.set(-0.5, sign > 0 ? -0.7 : 0.7 + Math.PI, sign > 0 ? 0.5 : -0.5);
      blade.scale.set(1, 1.1, 0.45);
      g.add(blade);
    });
    var sacrum = new THREE.Mesh(new THREE.CylinderGeometry(28 * MM, 15 * MM, 108 * MM, 10), boneMat);
    sacrum.position.set(0, (p.sacrumTop.y + p.sacrumTip.y) / 2 * MM, (p.sacrumTop.z + p.sacrumTip.z) / 2 * MM);
    sacrum.rotation.x = 0.35;
    sacrum.scale.z = 0.55;
    sacrum.castShadow = solid; sacrum.receiveShadow = true;
    g.add(sacrum);

    /* Cranium, as a coarse outline only. */
    var sk = skel.skull;
    var cranium = new THREE.Mesh(new THREE.SphereGeometry(78 * MM, 24, 18), boneMat);
    cranium.position.set(0, (sk.vertex.y - 72) * MM, (sk.glabella.z + sk.occiput.z) / 2 * MM);
    cranium.scale.set(0.92, 1.06, 1.14);
    g.add(cranium);

    g.visible = false;
    this.skeletonGroup = g;
    this.skeletonMaterial = boneMat;
    this.cartilageMaterial = cartMat;
    this.scene.add(g);
    return g;
  };

  Artery3D.prototype.buildLevelMarkers = function (vertebrae, levelNotes) {
    var g = new THREE.Group();
    var mat = new THREE.MeshBasicMaterial({
      color: PALETTE.level, transparent: true, opacity: 0.26, side: THREE.DoubleSide,
      depthWrite: false,
    });
    vertebrae.forEach(function (v) {
      if (!levelNotes[v.id]) return;
      var plane = new THREE.Mesh(new THREE.PlaneGeometry(260 * MM, 1.2 * MM), mat);
      plane.position.set(0, v.y * MM, (v.z - 10) * MM);
      plane.userData.level = v.id;
      g.add(plane);
    });
    g.visible = false;
    this.levelGroup = g;
    this.scene.add(g);
    return g;
  };

  Artery3D.prototype.setSkeletonVisible = function (on) { if (this.skeletonGroup) this.skeletonGroup.visible = !!on; };
  Artery3D.prototype.setLevelsVisible   = function (on) { if (this.levelGroup) this.levelGroup.visible = !!on; };

  Artery3D.prototype.setBoneSolid = function (solid) {
    var self = this;
    [this.skeletonMaterial, this.cartilageMaterial].forEach(function (m) {
      if (!m) return;
      m.transparent = !solid;
      m.opacity = solid ? 1 : self.look.boneOpacity;
      m.depthWrite = solid;
      m.needsUpdate = true;
    });
    if (this.skeletonGroup) {
      this.skeletonGroup.traverse(function (o) { if (o.isMesh) o.castShadow = solid && self.renderer.shadowMap.enabled; });
    }
  };

  Artery3D.prototype.setShadows = function (on) {
    this.renderer.shadowMap.enabled = !!on;
    var self = this;
    Object.keys(this.meshes).forEach(function (k) {
      self.meshes[k].castShadow = !!on;
      self.meshes[k].material.needsUpdate = true;
    });
  };

  /* Switch look without rebuilding any geometry. Palette, lighting,
     environment, exposure and shadow policy all move together — they
     are what distinguish an illustration from a specimen photograph. */
  Artery3D.prototype.setLook = function (name) {
    var L = LOOKS[name]; if (!L) return;
    this.lookName = name; this.look = L;

    this.renderer.toneMappingExposure = L.exposure;
    if (this.scene.background && this.scene.background.dispose) this.scene.background.dispose();
    this.scene.background = makeBackground(L.background);
    this.scene.environment = this._env(L.env);

    if (this.ambient) this.ambient.intensity = L.ambient;
    if (this.keyLight) { this.keyLight.intensity = L.keyIntensity; this.keyLight.castShadow = L.shadows !== false; }
    if (this.rimLight) this.rimLight.intensity = L.rimIntensity;
    this.renderer.shadowMap.enabled = L.shadows !== false;

    var self = this;
    Object.keys(this.meshes).forEach(function (k) {
      var region = self._regionCache && self._regionCache[k];
      var colour = L[region] || L.systemic;
      self.baseColor[k] = colour;
      var m = self.meshes[k].material;
      if (self._selectedKey !== k) m.color.setHex(colour);
      m.roughness = L.roughness;
      m.clearcoat = L.clearcoat;
      m.clearcoatRoughness = L.clearcoatRoughness;
      m.envMapIntensity = L.envMapIntensity;
      if (m.normalScale) m.normalScale.set(L.normalScale, L.normalScale);
      m.needsUpdate = true;
      self.meshes[k].castShadow = L.shadows !== false;
    });
    if (this.skeletonMaterial) { this.skeletonMaterial.color.setHex(L.bone); this.skeletonMaterial.needsUpdate = true; }
    if (this.cartilageMaterial) { this.cartilageMaterial.color.setHex(L.cartilage); this.cartilageMaterial.needsUpdate = true; }
    this.setBoneSolid(!!L.boneSolid);
    return L;
  };

  Artery3D.prototype.highlight = function (key) {
    var self = this;
    this._selectedKey = key;
    Object.keys(this.meshes).forEach(function (k) {
      var m = self.meshes[k].material;
      if (k === key) {
        m.color.setHex(PALETTE.highlight);
        m.emissive.setHex(0x3a2a00);
      } else {
        m.color.setHex(self.baseColor[k]);
        m.emissive.setHex(0x000000);
      }
    });
  };

  Artery3D.prototype.frameAll = function () {
    var box = new THREE.Box3().setFromObject(this.vesselGroup);
    if (box.isEmpty()) return;
    var c = box.getCenter(new THREE.Vector3());
    var size = box.getSize(new THREE.Vector3());
    this.target.copy(c);
    this.spherical.radius = Math.max(size.x, size.y, size.z) * 1.6;
    this.spherical.phi = Math.PI / 2;
    this.spherical.theta = 0;
    this._updateCamera();
  };

  Artery3D.prototype.focusOn = function (key) {
    var m = this.meshes[key]; if (!m) return;
    var box = new THREE.Box3().setFromObject(m);
    var c = box.getCenter(new THREE.Vector3());
    var size = box.getSize(new THREE.Vector3());
    this.target.copy(c);
    this.spherical.radius = Math.max(2.5, Math.max(size.x, size.y, size.z) * 3.2);
    this._updateCamera();
  };

  Artery3D.prototype.resize = function () {
    var w = this.container.clientWidth, h = this.container.clientHeight;
    if (!w || !h) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  };

  Artery3D.prototype.dispose = function () {
    this.disposed = true;
    window.removeEventListener('resize', this._onResize);
    var self = this;
    Object.keys(this.meshes).forEach(function (k) {
      self.meshes[k].geometry.dispose();
      self.meshes[k].material.dispose();
    });
    if (this.skeletonGroup) {
      this.skeletonGroup.traverse(function (o) { if (o.geometry) o.geometry.dispose(); });
    }
    if (this.textures) { this.textures.map.dispose(); this.textures.normalMap.dispose(); }
    if (this.boneTex) this.boneTex.dispose();
    if (this.envTexture) this.envTexture.dispose();
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  };

  window.Artery3D = Artery3D;
  window.ARTERY_3D_LOOKS = LOOKS;
  window.ARTERY_3D_PALETTE = PALETTE;

  /* =================================================================
     REACT VIEW — atlas mode.
     Quiz and path-tracing modes attach to the same renderer and arrive
     with batch 8, once the whole tree has geometry to test on.
     ================================================================= */
  function Atlas(props) {
    var e = React.createElement;
    var hostRef = React.useRef(null);
    var engineRef = React.useRef(null);
    var sel = React.useState(null);           var selected = sel[0], setSelected = sel[1];
    var sk = React.useState(true);            var showSkeleton = sk[0], setShowSkeleton = sk[1];
    var bs = React.useState(true);            var boneSolid = bs[0], setBoneSolid = bs[1];
    var lv = React.useState(false);           var showLevels = lv[0], setShowLevels = lv[1];
    var lk = React.useState('illustration');  var look = lk[0], setLook = lk[1];
    var sh = React.useState(false);           var shadows = sh[0], setShadows = sh[1];
    var st = React.useState(null);            var stats = st[0], setStats = st[1];

    React.useEffect(function () {
      if (!window.THREE) { setStats({ error: 'three.js did not load. Run download-vendor.py, or check the network.' }); return; }
      var G = window.ARTERY_3D_GEOMETRY, T = window.Artery3DTopology;
      if (!G || !T) { setStats({ error: 'Geometry or topology data is missing.' }); return; }

      var eng;
      try {
        var tree = T.buildGlobalTree();
        var inst = T.expandInstances(tree);
        eng = new window.Artery3D(hostRef.current, {
          look: 'illustration',
          onPick: function (k) { setSelected(k); },
        });
        /* Cache each vessel's region so the palette can be swapped
           later without recomputing it. */
        eng._regionCache = {};
        Object.keys(G.vessels).forEach(function (k) {
          if (inst[k]) eng._regionCache[k] = regionOf(k, G.vessels[k]);
        });
        eng.buildVessels(G.vessels, inst);
        eng.buildSkeleton(G.skeleton);
        eng.buildLevelMarkers(G.vertebrae, G.skeleton.levelNotes);
        eng.setSkeletonVisible(true);
        eng.setLevelsVisible(false);
        eng.frameAll();
        engineRef.current = eng;

        setStats({
          drawn: Object.keys(eng.meshes).length,
          total: Object.keys(inst).length,
          batch: G.meta.batch,
          batchName: G.meta.batchName,
          tree: tree, inst: inst,
        });
      } catch (err) {
        setStats({ error: 'Could not build the 3D scene: ' + (err && err.message ? err.message : err) });
      }
      return function () { if (eng) eng.dispose(); };
    }, []);

    React.useEffect(function () { if (engineRef.current) engineRef.current.setSkeletonVisible(showSkeleton); }, [showSkeleton]);
    React.useEffect(function () { if (engineRef.current) engineRef.current.setBoneSolid(boneSolid); }, [boneSolid]);
    React.useEffect(function () { if (engineRef.current) engineRef.current.setLevelsVisible(showLevels); }, [showLevels]);
    React.useEffect(function () { if (engineRef.current) engineRef.current.setShadows(shadows); }, [shadows]);
    /* Switching look also resets shadows and bone opacity to whatever
       that look calls for, so the toggles follow it. */
    React.useEffect(function () {
      if (!engineRef.current) return;
      var L = engineRef.current.setLook(look);
      if (L) { setShadows(L.shadows !== false); setBoneSolid(!!L.boneSolid); }
      engineRef.current.highlight(selected);
    }, [look]);
    React.useEffect(function () { if (engineRef.current) engineRef.current.highlight(selected); }, [selected]);

    var G = window.ARTERY_3D_GEOMETRY;
    var info = null;
    if (selected && stats && stats.inst && stats.inst[selected]) {
      var rec = stats.inst[selected];
      var geo = G.vessels[selected];
      var parentRec = rec.parent && stats.inst[rec.parent];
      info = {
        label: (rec.side === 'L' ? 'Left ' : rec.side === 'R' ? 'Right ' : '') +
               (rec.side ? rec.node.label.charAt(0).toLowerCase() + rec.node.label.slice(1) : rec.node.label),
        latin: geo && geo.latin,
        parent: parentRec ? parentRec.node.label : 'Origin of the systemic circulation',
        level: geo && geo.level,
        note: (geo && geo.note) || rec.node.clinicalNote,
        stub: geo && geo.stub,
        children: (rec.node.children || []).length,
      };
    }

    var btn = function (active) {
      return {
        padding: '7px 12px', marginRight: 8, borderRadius: 7, cursor: 'pointer',
        border: '1px solid ' + (active ? '#333' : '#ccc'),
        background: active ? '#333' : '#fff', color: active ? '#fff' : '#333',
        fontSize: 12, fontWeight: 600,
      };
    };

    if (stats && stats.error) {
      return e('div', { style: { padding: 40 } },
        e('button', { onClick: props.onBack, style: btn(false) }, '← Back'),
        e('p', { style: { marginTop: 20, color: '#c0392b' } }, stats.error));
    }

    return e('div', { style: { display: 'flex', flexDirection: 'column', height: '100vh', background: '#efece7' } },
      e('div', { style: { padding: '10px 14px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6, background: '#fff' } },
        e('button', { onClick: props.onBack, style: btn(false) }, '← Subjects'),
        e('button', {
          onClick: function () { setLook(LOOK_ORDER[(LOOK_ORDER.indexOf(look) + 1) % LOOK_ORDER.length]); },
          style: btn(false),
          title: 'Illustration, Specimen or Atlas',
        }, LOOKS[look].name + ' look'),
        e('button', { onClick: function () { setShowSkeleton(!showSkeleton); }, style: btn(showSkeleton) }, 'Skeleton'),
        showSkeleton && e('button', { onClick: function () { setBoneSolid(!boneSolid); }, style: btn(boneSolid) }, 'Solid bone'),
        e('button', { onClick: function () { setShowLevels(!showLevels); }, style: btn(showLevels) }, 'Levels'),
        e('button', { onClick: function () { setShadows(!shadows); }, style: btn(shadows) }, 'Shadows'),
        e('button', { onClick: function () { engineRef.current && engineRef.current.frameAll(); setSelected(null); }, style: btn(false) }, 'Reset view'),
        stats && e('span', { style: { marginLeft: 'auto', fontSize: 11, color: '#777' } },
          'Batch ' + stats.batch + ': ' + stats.batchName + ' · ' + stats.drawn + ' of ' + stats.total + ' vessels placed')
      ),
      e('div', { style: { flex: 1, display: 'flex', minHeight: 0 } },
        e('div', { ref: hostRef, style: { flex: 1, minWidth: 0, cursor: 'grab' } }),
        e('div', { style: { width: 300, borderLeft: '1px solid #ddd', background: '#fff', padding: 16, overflowY: 'auto', fontSize: 13 } },
          info
            ? e('div', null,
                e('div', { style: { fontSize: 16, fontWeight: 700, marginBottom: 2 } }, info.label),
                info.latin && e('div', { style: { fontStyle: 'italic', color: '#777', marginBottom: 12 } }, info.latin),
                info.stub && e('div', { style: { background: '#fff4e0', border: '1px solid #f0d9a8', padding: 8, borderRadius: 6, marginBottom: 12, fontSize: 11 } },
                  'Origin and initial direction only. The full course arrives in a later batch.'),
                e('div', { style: { marginBottom: 8 } }, e('b', null, 'Arises from: '), info.parent),
                info.level && e('div', { style: { marginBottom: 8 } }, e('b', null, 'Vertebral level: '), info.level),
                e('div', { style: { marginBottom: 12 } }, e('b', null, 'Named branches: '), info.children),
                info.note && e('div', { style: { marginTop: 12, paddingTop: 12, borderTop: '1px solid #eee', lineHeight: 1.5 } }, info.note)
              )
            : e('div', { style: { color: '#888', lineHeight: 1.6 } },
                e('p', { style: { marginTop: 0 } }, 'Click any vessel to identify it.'),
                e('p', null, 'Drag to orbit. Scroll to zoom. Shift-drag or right-drag to pan.'),
                e('p', null, 'The look button cycles three styles. Illustration is the clean textbook render: white ground, opaque ivory bone with blue-grey costal cartilage, deep crimson vessels. Specimen is what a fresh prosection looks like, where the aortic wall is thick pale tissue rather than a red tube. Atlas is the saturated red convention.'),
                e('p', null, 'Faded vessels are stubs: their origin is placed and verified, their full course is not yet drawn.'),
                e('p', { style: { fontSize: 11, color: '#aaa', marginTop: 24, lineHeight: 1.5 } },
                  'Coordinates are hand-authored from vertebral levels and bony landmarks, not from segmented imaging. ' +
                  'Branching order and origin levels are machine-verified; exact courses are idealised.')
              )
        )
      )
    );
  }

  window.Artery3DAtlas = Atlas;
})();
