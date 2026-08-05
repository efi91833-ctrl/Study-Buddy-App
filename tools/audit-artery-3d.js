#!/usr/bin/env node
/* =============================================================
   Artery 3D — Geometry Audit
   Run:  node tools/audit-artery-3d.js
         node tools/audit-artery-3d.js --verbose

   Every check here exists because a hand-placed vessel can look
   plausible and still be wrong. The audit is what makes "all 520
   arteries, correctly connected" a verifiable claim rather than a hope.

   Exit code 0 = clean, 1 = failures.
   ============================================================= */

'use strict';

var path = require('path');
var ROOT = path.resolve(__dirname, '..');

global.window = {};
require(path.join(ROOT, 'artery-assembly-data.js'));
require(path.join(ROOT, 'artery-3d-topology.js'));
require(path.join(ROOT, 'artery-3d-geometry.js'));

var T   = global.window.Artery3DTopology;
var G   = global.window.ARTERY_3D_GEOMETRY;
var VERBOSE = process.argv.indexOf('--verbose') !== -1;

var tree = T.buildGlobalTree();
var inst = T.expandInstances(tree);
var VES  = G.vessels;

var fails = [], warns = [], notes = [];
function fail(check, msg) { fails.push('[' + check + '] ' + msg); }
function warn(check, msg) { warns.push('[' + check + '] ' + msg); }

/* ---------- vector helpers ---------- */
function sub(a, b) { return [a[0]-b[0], a[1]-b[1], a[2]-b[2]]; }
function len(a) { return Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2]); }
function dist(a, b) { return len(sub(a, b)); }

/* Shortest distance from point p to the polyline, and the fraction
   along the polyline where that happens (0 = start, 1 = end). */
function distToPolyline(p, poly) {
  var best = Infinity, bestT = 0, acc = 0, total = 0, i;
  for (i = 0; i < poly.length - 1; i++) total += dist(poly[i], poly[i+1]);
  if (total === 0) return { d: dist(p, poly[0]), t: 0 };
  acc = 0;
  for (i = 0; i < poly.length - 1; i++) {
    var a = poly[i], b = poly[i+1];
    var ab = sub(b, a), ap = sub(p, a);
    var L2 = ab[0]*ab[0] + ab[1]*ab[1] + ab[2]*ab[2];
    var t = L2 === 0 ? 0 : (ap[0]*ab[0] + ap[1]*ab[1] + ap[2]*ab[2]) / L2;
    t = Math.max(0, Math.min(1, t));
    var proj = [a[0]+ab[0]*t, a[1]+ab[1]*t, a[2]+ab[2]*t];
    var d = dist(p, proj);
    if (d < best) { best = d; bestT = (acc + t * Math.sqrt(L2)) / total; }
    acc += Math.sqrt(L2);
  }
  return { d: best, t: bestT };
}

/* Radius of a tapered vessel at fraction t along its length. */
function radiusAt(v, t) { return v.r[0] + (v.r[1] - v.r[0]) * t; }

/* =============================================================
   CHECK 1 — COVERAGE
   Every vessel in the source data must eventually have geometry.
   Missing geometry is expected while batches are outstanding, so it
   is reported as progress, not failure. Geometry with no matching
   vessel IS a failure — it means a typo'd key that will never render.
   ============================================================= */
var haveGeom = Object.keys(VES);
var needGeom = Object.keys(inst);
var missing = needGeom.filter(function (k) { return !VES[k]; });
var orphan  = haveGeom.filter(function (k) { return !inst[k]; });

orphan.forEach(function (k) {
  fail('coverage', 'Geometry key "' + k + '" does not exist in the arterial tree. Typo, or a vessel that was renamed.');
});
notes.push('Coverage: ' + (needGeom.length - missing.length) + ' of ' + needGeom.length +
           ' vessel instances have geometry (' +
           Math.round(100 * (needGeom.length - missing.length) / needGeom.length) + '%).');

/* =============================================================
   CHECK 2 — CONNECTIVITY
   A child artery must physically start on the surface of its parent.
   This is the check that catches vessels floating in space, which is
   the single most common way a hand-built model goes wrong.
   ============================================================= */
var CONNECT_TOL = 3.0;   /* mm of slack beyond the parent's radius */
var connChecked = 0;

needGeom.forEach(function (key) {
  var v = VES[key]; if (!v) return;
  var rec = inst[key];
  if (!rec.parent) return;
  var pv = VES[rec.parent]; if (!pv) return;

  connChecked++;
  var hit = distToPolyline(v.path[0], pv.path);
  var parentR = radiusAt(pv, hit.t);
  var gap = hit.d - parentR;

  /* Only the outward direction is an error. A branch authored ON the
     parent's centreline is correct practice: the child tube then
     emerges from inside the parent and the junction reads cleanly. */
  if (gap > CONNECT_TOL) {
    fail('connectivity', key + ' starts ' + gap.toFixed(1) + ' mm off the surface of ' +
         rec.parent + ' (centreline distance ' + hit.d.toFixed(1) +
         ' mm, parent radius there ' + parentR.toFixed(1) + ' mm).');
  }
});
notes.push('Connectivity: ' + connChecked + ' parent-child junctions checked.');

/* =============================================================
   CHECK 3 — CALIBRE
   No branch may be wider than the trunk it comes off, and no vessel
   may widen along its length (aneurysms are not being modelled).
   ============================================================= */
needGeom.forEach(function (key) {
  var v = VES[key]; if (!v) return;

  if (v.r[1] > v.r[0] + 0.01) {
    fail('calibre', key + ' widens from r=' + v.r[0] + ' to r=' + v.r[1] + ' mm along its course.');
  }
  var rec = inst[key];
  if (!rec.parent) return;
  var pv = VES[rec.parent]; if (!pv) return;

  var hit = distToPolyline(v.path[0], pv.path);
  var parentR = radiusAt(pv, hit.t);
  if (v.r[0] > parentR + 0.15) {
    fail('calibre', key + ' (r=' + v.r[0] + ') is wider than its parent ' +
         rec.parent + ' at the branch point (r=' + parentR.toFixed(2) + ').');
  }
});

/* =============================================================
   CHECK 4 — ORIGIN LEVEL
   The vertebral level of an origin is exam material. Any vessel
   declaring a level must actually sit at it.
   ============================================================= */
var VY = {};
G.vertebrae.forEach(function (vt) { VY[vt.id] = vt.y; });
var levelChecked = 0;

needGeom.forEach(function (key) {
  var v = VES[key]; if (!v || !v.level) return;
  if (VY[v.level] === undefined) {
    fail('level', key + ' declares unknown vertebral level "' + v.level + '".');
    return;
  }
  levelChecked++;
  var dy = Math.abs(v.path[0][1] - VY[v.level]);
  if (dy > G.levelTolerance) {
    fail('level', key + ' claims to arise at ' + v.level + ' (y=' + VY[v.level] +
         ') but its origin is at y=' + v.path[0][1] + ' — off by ' + dy.toFixed(0) + ' mm.');
  }
});
notes.push('Origin levels: ' + levelChecked + ' vertebral-level assertions checked.');

/* =============================================================
   CHECK 5 — BILATERAL SYMMETRY
   Paired vessels should mirror in x. Genuine asymmetries exist and
   are the interesting part of the anatomy, so a mismatch is a warning
   that asks for a human decision, not an automatic failure.
   ============================================================= */
var ASYMMETRIC_BY_DESIGN = {
  'common_carotid_artery': 'Right arises from the brachiocephalic trunk, left from the arch.',
  'subclavian_artery':     'Right arises from the brachiocephalic trunk, left from the arch.',
  'renal_arteries':        'The right is longer, passing behind the inferior vena cava.',
  'posterior_intercostal_arteries': 'The right are longer, crossing the vertebral bodies.',
  'bronchial_arteries': 'Usually two on the left arising from the aorta directly, and a single right one that commonly arises from the third posterior intercostal artery. The courses are genuinely different.',
};
var SYM_TOL = 6.0;
var symChecked = 0;

Object.keys(VES).forEach(function (key) {
  if (key.slice(0, 2) !== 'L:') return;
  var id = key.slice(2);
  var rKey = 'R:' + id;
  var lv = VES[key], rv = VES[rKey];
  if (!rv) { fail('symmetry', key + ' has geometry but ' + rKey + ' does not.'); return; }
  if (ASYMMETRIC_BY_DESIGN[id]) return;
  if (lv.path.length !== rv.path.length) {
    warn('symmetry', id + ': left has ' + lv.path.length + ' points, right has ' + rv.path.length + '.');
    return;
  }
  symChecked++;

  /* Do NOT mirror about x=0. Many paired branches arise from a parent
     that is itself off the midline — the aorta sits to the left of the
     median plane for its whole course — so their origins are not
     mirror images about x=0 and never should be. What must match is
     the SHAPE: the course each vessel takes away from its own origin.
     So compare paths relative to their own first point. */
  var worst = 0, worstIdx = 0;
  for (var i = 0; i < lv.path.length; i++) {
    var lRel = sub(lv.path[i], lv.path[0]);
    var rRel = sub(rv.path[i], rv.path[0]);
    var d = dist([-lRel[0], lRel[1], lRel[2]], rRel);
    if (d > worst) { worst = d; worstIdx = i; }
  }
  if (worst > SYM_TOL) {
    warn('symmetry', id + ' left and right courses differ by up to ' + worst.toFixed(1) +
         ' mm (at point ' + worstIdx + ') once each is measured from its own origin. ' +
         'Intentional? If so add it to ASYMMETRIC_BY_DESIGN with the reason.');
  }

  /* Separately: the two origins should straddle the parent's axis. */
  var lRec = inst[key], rRec = inst[rKey];
  if (lRec && rRec && lRec.parent && VES[lRec.parent] && lRec.parent === rRec.parent) {
    var pvv = VES[lRec.parent];
    var lt = distToPolyline(lv.path[0], pvv.path).t;
    var rt = distToPolyline(rv.path[0], pvv.path).t;
    if (Math.abs(lt - rt) > 0.08) {
      warn('symmetry', id + ' left and right arise at noticeably different points along ' +
           lRec.parent + ' (' + lt.toFixed(2) + ' vs ' + rt.toFixed(2) + ').');
    }
  }
});
notes.push('Symmetry: ' + symChecked + ' bilateral pairs compared; ' +
           Object.keys(ASYMMETRIC_BY_DESIGN).length + ' known asymmetries exempted.');

/* =============================================================
   CHECK 6 — BRANCH ORDER
   Branches must meet their parent in the same proximal-to-distal
   order in which the source data lists them. This is what catches a
   vessel placed at the right level but on the wrong segment.
   ============================================================= */
var orderChecked = 0;
Object.keys(tree.nodes).forEach(function (pid) {
  var pnode = tree.nodes[pid];
  if (pnode.kind !== 'vessel' || pnode.children.length < 2) return;

  ['L', 'R', null].forEach(function (side) {
    var pKey = pnode.sidedness === 'bilateral' ? (side ? side + ':' + pid : null) : (side ? null : pid);
    if (!pKey || !VES[pKey]) return;
    var pv = VES[pKey];

    /* Where the source data lists branches in a non-anatomical order,
       ANATOMICAL_ORDER in the geometry file supplies the corrected
       sequence and records why. */
    var override = (G.anatomicalOrder || {})[pid] || null;
    var ordering = pnode.children.slice();
    if (override) {
      ordering.sort(function (a, b) {
        var ia = override.indexOf(a), ib = override.indexOf(b);
        if (ia === -1) ia = 999;
        if (ib === -1) ib = 999;
        return ia - ib;
      });
    }

    var placed = [];
    ordering.forEach(function (cid, idx) {
      var cnode = tree.nodes[cid];
      if (cnode.kind !== 'vessel') return;
      var cKey = cnode.sidedness === 'bilateral' ? (side || 'L') + ':' + cid : cid;
      if (!VES[cKey]) return;
      if (inst[cKey] && inst[cKey].parent !== pKey) return;
      placed.push({ key: cKey, sourceIdx: idx, t: distToPolyline(VES[cKey].path[0], pv.path).t });
    });
    if (placed.length < 2) return;
    orderChecked++;

    for (var i = 1; i < placed.length; i++) {
      if (placed[i].t < placed[i-1].t - 0.04) {
        fail('branch-order', 'On ' + pKey + ', ' + placed[i].key + ' is listed after ' +
             placed[i-1].key + ' in the source data but is placed more proximally (' +
             placed[i].t.toFixed(2) + ' vs ' + placed[i-1].t.toFixed(2) + ' along the parent).');
      }
    }
  });
});
notes.push('Branch order: ' + orderChecked + ' trunks with multiple placed branches checked.');

/* =============================================================
   CHECK 7 — TOPOLOGY INTEGRITY
   ============================================================= */
tree.errors.forEach(function (e) { fail('topology', e); });
var broken = Object.keys(inst).filter(function (k) { return inst[k].parent && !inst[inst[k].parent]; });
broken.forEach(function (k) { fail('topology', 'Instance "' + k + '" points at parent "' + inst[k].parent + '" which is not drawn.'); });
var instRoots = Object.keys(inst).filter(function (k) { return !inst[k].parent; });
if (instRoots.length !== 1) {
  fail('topology', 'Expected exactly one root (the ascending aorta) but found ' +
       instRoots.length + ': ' + instRoots.join(', '));
}

/* =============================================================
   CHECK 8 — DEGENERATE GEOMETRY
   ============================================================= */
Object.keys(VES).forEach(function (key) {
  var v = VES[key];
  if (!v.path || v.path.length < 2) { fail('geometry', key + ' has fewer than two path points.'); return; }
  if (!v.r || v.r.length !== 2) { fail('geometry', key + ' has no [start, end] radius pair.'); return; }
  if (v.r[1] <= 0) fail('geometry', key + ' has a non-positive end radius.');
  var total = 0;
  for (var i = 0; i < v.path.length - 1; i++) {
    var d = dist(v.path[i], v.path[i+1]);
    if (d < 0.5) warn('geometry', key + ' has near-duplicate consecutive points (' + d.toFixed(2) + ' mm apart).');
    total += d;
  }
  if (total < v.r[0]) {
    warn('geometry', key + ' is shorter (' + total.toFixed(1) + ' mm) than its own starting radius (' + v.r[0] + ' mm).');
  }
  if (!v.latin) warn('naming', key + ' has no Latin name.');
});

/* =============================================================
   REPORT
   ============================================================= */
function hr() { console.log('-'.repeat(72)); }
console.log('');
console.log('ARTERY 3D GEOMETRY AUDIT — batch ' + G.meta.batch + ': ' + G.meta.batchName);
hr();
notes.forEach(function (n) { console.log('  ' + n); });
hr();

if (fails.length) {
  console.log('FAILURES (' + fails.length + ')');
  fails.forEach(function (f) { console.log('  ' + f); });
  hr();
}
if (warns.length) {
  console.log('WARNINGS (' + warns.length + ')');
  (VERBOSE ? warns : warns.slice(0, 20)).forEach(function (w) { console.log('  ' + w); });
  if (!VERBOSE && warns.length > 20) console.log('  ... and ' + (warns.length - 20) + ' more (use --verbose)');
  hr();
}

if (missing.length) {
  var byBatch = {};
  missing.forEach(function (k) {
    var mods = (inst[k].node.modules || ['?']);
    var m = mods[0];
    (byBatch[m] = byBatch[m] || []).push(k);
  });
  console.log('AWAITING GEOMETRY — ' + missing.length + ' vessels, by source module');
  Object.keys(byBatch).sort().forEach(function (m) {
    console.log('  ' + m + ': ' + byBatch[m].length);
  });
  hr();
}

console.log(fails.length === 0 ? 'RESULT: PASS' : 'RESULT: FAIL (' + fails.length + ' failures)');
console.log('');
process.exit(fails.length === 0 ? 0 : 1);
