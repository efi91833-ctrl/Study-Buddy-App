/* =============================================================
   Artery 3D — Engine
   window.Artery3D  (renderer)   window.Artery3DAtlas  (React view)

   This file contains NO anatomy. It knows how to draw a tapered tube
   along a centreline, how to build the skeletal reference from a
   vertebral table, how to orbit a camera and how to pick a vessel.
   Which vessels exist comes from artery-3d-topology.js; where they are
   comes from artery-3d-geometry.js.

   Written as plain ES5 with React.createElement, matching the pattern
   of artery-game.js, because index.html loads data and engine scripts
   before Babel runs.
   ============================================================= */

(function () {
  'use strict';

  /* Scene units are centimetres: geometry is authored in mm and scaled
     by 0.1 so that camera near/far planes and lighting behave. */
  var MM = 0.1;

  var PALETTE = {
    aorta:     0xc0392b,
    systemic:  0xd94f45,
    coronary:  0xb03a2e,
    visceral:  0xcf5c4e,
    stub:      0x9b6b66,
    bone:      0xd9d2c5,
    level:     0x7a8b99,
    highlight: 0xffc400,
    correct:   0x2e9e5b,
    wrong:     0xc0392b,
  };

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
     Tapered tube. THREE.TubeGeometry has a constant radius, so the
     vertices are displaced along their own normals to produce the
     taper. Radius varies linearly from r0 to r1 along the length,
     which is how arteries actually behave over a single named segment.
     --------------------------------------------------------------- */
  function taperedTube(centreline, r0, r1, radialSegments) {
    var curve = new THREE.CatmullRomCurve3(centreline, false, 'catmullrom', 0.5);
    var tubular = Math.max(6, centreline.length - 1);
    var rs = radialSegments || 8;
    var geo = new THREE.TubeGeometry(curve, tubular, 1, rs, false);

    var pos = geo.attributes.position;
    var frames = curve.computeFrenetFrames(tubular, false);
    var v = new THREE.Vector3(), c = new THREE.Vector3(), n = new THREE.Vector3();

    for (var i = 0; i <= tubular; i++) {
      var t = i / tubular;
      var radius = (r0 + (r1 - r0) * t) * MM;
      curve.getPointAt(t, c);
      for (var j = 0; j <= rs; j++) {
        var idx = i * (rs + 1) + j;
        v.fromBufferAttribute(pos, idx);
        n.copy(v).sub(c).normalize();
        v.copy(c).addScaledVector(n, radius);
        pos.setXYZ(idx, v.x, v.y, v.z);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
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
    this.meshes = {};        /* instanceKey -> Mesh */
    this.baseColor = {};
    this.skeletonGroup = null;
    this.disposed = false;

    var w = container.clientWidth || 800;
    var h = container.clientHeight || 600;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf4f2ee);

    this.camera = new THREE.PerspectiveCamera(38, w / h, 0.5, 4000);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(w, h);
    container.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.62));
    var key = new THREE.DirectionalLight(0xffffff, 0.72);
    key.position.set(1, 1.4, 1.6);
    this.scene.add(key);
    var fill = new THREE.DirectionalLight(0xffffff, 0.3);
    fill.position.set(-1.2, -0.4, -1);
    this.scene.add(fill);

    this.vesselGroup = new THREE.Group();
    this.scene.add(this.vesselGroup);

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    /* Orbit state. Written here rather than pulled from OrbitControls
       so the app stays offline with a single vendored file. */
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

  Artery3D.prototype._updateCamera = function () {
    var s = this.spherical;
    s.phi = Math.max(0.08, Math.min(Math.PI - 0.08, s.phi));
    s.radius = Math.max(8, Math.min(600, s.radius));
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

    /* Touch: one finger orbits, two fingers pinch to zoom. */
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
    var self = this;
    Object.keys(vessels).forEach(function (key) {
      if (instances && !instances[key]) return;   /* orphan geometry: audit reports it */
      var v = vessels[key];
      var line = resample(v.path, 10);
      var region = regionOf(key, v);
      var colour = PALETTE[region] || PALETTE.systemic;

      /* Small vessels get fewer radial segments. With ~720 vessels to
         come, this is the difference between smooth and unusable. */
      var rs = v.r[0] > 6 ? 16 : v.r[0] > 2 ? 10 : 6;
      var geo = taperedTube(line, v.r[0], v.r[1], rs);
      var mat = new THREE.MeshLambertMaterial({
        color: colour,
        transparent: !!v.stub,
        opacity: v.stub ? 0.45 : 1,
      });
      var mesh = new THREE.Mesh(geo, mat);
      mesh.userData.key = key;
      self.meshes[key] = mesh;
      self.baseColor[key] = colour;
      self.vesselGroup.add(mesh);
    });
  };

  /* ---------------------------------------------------------------
     Skeletal reference, generated from the vertebral table.
     --------------------------------------------------------------- */
  Artery3D.prototype.buildSkeleton = function (skel) {
    var g = new THREE.Group();
    var boneMat = new THREE.MeshLambertMaterial({ color: PALETTE.bone, transparent: true, opacity: 0.34 });
    var i;

    /* Vertebral bodies. */
    for (i = 0; i < skel.vertebrae.length; i++) {
      var vt = skel.vertebrae[i];
      var next = skel.vertebrae[i + 1];
      var height = next ? Math.abs(vt.y - next.y) * 0.72 : 26;
      var box = new THREE.BoxGeometry(vt.w * MM, height * MM, vt.d * MM);
      var m = new THREE.Mesh(box, boneMat);
      /* z in the table is the ANTERIOR surface, so the body centre sits
         half a depth behind it. */
      m.position.set(0, vt.y * MM, (vt.z - vt.d / 2) * MM);
      m.userData.level = vt.id;
      g.add(m);

      /* Spinous process, as a short bar pointing backwards. */
      var sp = new THREE.Mesh(new THREE.BoxGeometry(5 * MM, 7 * MM, 34 * MM), boneMat);
      sp.position.set(0, (vt.y - 6) * MM, (vt.z - vt.d - 24) * MM);
      g.add(sp);
    }

    /* Ribs, as elliptical arcs from the vertebral body to the sternum. */
    var vByLevel = {};
    skel.vertebrae.forEach(function (v) { vByLevel[v.id] = v; });
    var ribMat = new THREE.MeshLambertMaterial({ color: PALETTE.bone, transparent: true, opacity: 0.22 });
    skel.ribs.forEach(function (rib) {
      var v = vByLevel[rib.level]; if (!v) return;
      [1, -1].forEach(function (sign) {
        var pts = [];
        for (var a = 0; a <= 14; a++) {
          var t = a / 14;
          var ang = t * Math.PI * 0.86;
          pts.push(new THREE.Vector3(
            sign * Math.sin(ang) * rib.spread * MM,
            (v.y - rib.drop * t) * MM,
            (v.z - v.d - 18 + (1 - Math.cos(ang)) * 0.5 * rib.reach + Math.sin(ang) * 12) * MM
          ));
        }
        var curve = new THREE.CatmullRomCurve3(pts);
        g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 3.4 * MM, 5, false), ribMat));
      });
    });

    /* Sternum. */
    var st = skel.sternum;
    var man = new THREE.Mesh(
      new THREE.BoxGeometry(st.width.manubrium * MM, (st.jugularNotch.y - st.sternalAngle.y) * MM, st.thickness * MM), boneMat);
    man.position.set(0, (st.jugularNotch.y + st.sternalAngle.y) / 2 * MM, (st.sternalAngle.z + st.thickness / 2) * MM);
    g.add(man);
    var body = new THREE.Mesh(
      new THREE.BoxGeometry(st.width.body * MM, (st.sternalAngle.y - st.xiphoid.y) * MM, st.thickness * MM), boneMat);
    body.position.set(0, (st.sternalAngle.y + st.xiphoid.y) / 2 * MM, ((st.sternalAngle.z + st.xiphoid.z) / 2 + st.thickness / 2) * MM);
    g.add(body);

    /* Pelvis and skull, as wireframe hints only. */
    var p = skel.pelvis;
    var hintMat = new THREE.MeshLambertMaterial({ color: PALETTE.bone, transparent: true, opacity: 0.2 });
    [1, -1].forEach(function (sign) {
      var pts = [
        new THREE.Vector3(0, p.sacrumTop.y * MM, p.sacrumTop.z * MM),
        new THREE.Vector3(sign * p.iliacCrest.x * MM, p.iliacCrest.y * MM, p.iliacCrest.z * MM),
        new THREE.Vector3(sign * p.asis.x * MM, p.asis.y * MM, p.asis.z * MM),
        new THREE.Vector3(sign * p.acetabulum.x * MM, p.acetabulum.y * MM, p.acetabulum.z * MM),
        new THREE.Vector3(sign * 18 * MM, p.pubicSymph.y * MM, p.pubicSymph.z * MM),
      ];
      g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 5 * MM, 5, false), hintMat));
    });
    var sacrum = new THREE.Mesh(new THREE.BoxGeometry(46 * MM, 108 * MM, 22 * MM), boneMat);
    sacrum.position.set(0, (p.sacrumTop.y + p.sacrumTip.y) / 2 * MM, (p.sacrumTop.z + p.sacrumTip.z) / 2 * MM);
    sacrum.rotation.x = 0.35;
    g.add(sacrum);

    var sk = skel.skull;
    var cranium = new THREE.Mesh(new THREE.SphereGeometry(78 * MM, 18, 14), hintMat);
    cranium.position.set(0, (sk.vertex.y - 72) * MM, (sk.glabella.z + sk.occiput.z) / 2 * MM);
    cranium.scale.set(0.92, 1.06, 1.14);
    g.add(cranium);

    g.visible = false;
    this.skeletonGroup = g;
    this.scene.add(g);
    return g;
  };

  /* Level markers: a thin disc and a label anchor at each tested level. */
  Artery3D.prototype.buildLevelMarkers = function (vertebrae, levelNotes) {
    var g = new THREE.Group();
    var mat = new THREE.MeshBasicMaterial({ color: PALETTE.level, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
    vertebrae.forEach(function (v) {
      if (!levelNotes[v.id]) return;
      var plane = new THREE.Mesh(new THREE.PlaneGeometry(260 * MM, 1.4 * MM), mat);
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

  Artery3D.prototype.highlight = function (key) {
    var self = this;
    Object.keys(this.meshes).forEach(function (k) {
      self.meshes[k].material.color.setHex(
        k === key ? PALETTE.highlight : self.baseColor[k]
      );
      self.meshes[k].material.emissive && self.meshes[k].material.emissive.setHex(0x000000);
    });
  };

  Artery3D.prototype.frameAll = function () {
    var box = new THREE.Box3().setFromObject(this.vesselGroup);
    if (box.isEmpty()) return;
    var c = box.getCenter(new THREE.Vector3());
    var size = box.getSize(new THREE.Vector3());
    this.target.copy(c);
    this.spherical.radius = Math.max(size.x, size.y, size.z) * 1.5;
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
    this.spherical.radius = Math.max(4, Math.max(size.x, size.y, size.z) * 3.2);
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
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  };

  window.Artery3D = Artery3D;
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
    var sel = React.useState(null);
    var selected = sel[0], setSelected = sel[1];
    var sk = React.useState(true);
    var showSkeleton = sk[0], setShowSkeleton = sk[1];
    var lv = React.useState(true);
    var showLevels = lv[0], setShowLevels = lv[1];
    var st = React.useState(null);
    var stats = st[0], setStats = st[1];

    React.useEffect(function () {
      if (!window.THREE) { setStats({ error: 'three.js did not load. Run download-vendor.py, or check the network.' }); return; }
      var G = window.ARTERY_3D_GEOMETRY, T = window.Artery3DTopology;
      if (!G || !T) { setStats({ error: 'Geometry or topology data is missing.' }); return; }

      var tree = T.buildGlobalTree();
      var inst = T.expandInstances(tree);
      var eng = new window.Artery3D(hostRef.current, { onPick: function (k) { setSelected(k); } });
      eng.buildVessels(G.vessels, inst);
      eng.buildSkeleton(G.skeleton);
      eng.buildLevelMarkers(G.vertebrae, G.skeleton.levelNotes);
      eng.setSkeletonVisible(true);
      eng.setLevelsVisible(true);
      eng.frameAll();
      engineRef.current = eng;

      setStats({
        drawn: Object.keys(eng.meshes).length,
        total: Object.keys(inst).length,
        batch: G.meta.batch,
        batchName: G.meta.batchName,
        tree: tree, inst: inst,
      });
      return function () { eng.dispose(); };
    }, []);

    React.useEffect(function () {
      if (engineRef.current) engineRef.current.setSkeletonVisible(showSkeleton);
    }, [showSkeleton]);
    React.useEffect(function () {
      if (engineRef.current) engineRef.current.setLevelsVisible(showLevels);
    }, [showLevels]);
    React.useEffect(function () {
      if (engineRef.current) engineRef.current.highlight(selected);
    }, [selected]);

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

    return e('div', { style: { display: 'flex', flexDirection: 'column', height: '100vh', background: '#f4f2ee' } },
      /* toolbar */
      e('div', { style: { padding: '10px 14px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 } },
        e('button', { onClick: props.onBack, style: btn(false) }, '← Subjects'),
        e('button', { onClick: function () { setShowSkeleton(!showSkeleton); }, style: btn(showSkeleton) }, 'Skeleton'),
        e('button', { onClick: function () { setShowLevels(!showLevels); }, style: btn(showLevels) }, 'Vertebral levels'),
        e('button', { onClick: function () { engineRef.current && engineRef.current.frameAll(); setSelected(null); }, style: btn(false) }, 'Reset view'),
        stats && e('span', { style: { marginLeft: 'auto', fontSize: 11, color: '#777' } },
          'Batch ' + stats.batch + ': ' + stats.batchName + ' · ' +
          stats.drawn + ' of ' + stats.total + ' vessels placed')
      ),
      /* canvas + panel */
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
