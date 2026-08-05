/* =============================================================
   Artery 3D — Topology Layer
   window.Artery3DTopology

   PURPOSE
   -------
   artery-assembly-data.js stores the arterial tree as 22 independent
   teaching modules. That format is correct for the assembly game but
   cannot be rendered directly in 3D, for three reasons:

     1. Module seams. Each module repeats its parent vessel as a local
        root so the module stands alone. 57 ids appear in more than one
        module. These repeats are the seams we stitch on.

     2. Seam id drift. Four vessels were given different ids in
        different modules (e.g. 'thoracic_aorta' vs
        'descending_thoracic_aorta'). ALIASES resolves them.

     3. Side-agnostic storage. Bilateral vessels are stored ONCE with a
        neutral id ('subclavian_artery'), because the assembly game only
        ever asks about one side at a time. A 3D body needs two. We
        expand those into sided instances 'L:<id>' and 'R:<id>'.
        Vessels whose id already begins with left_ / right_ are left
        alone, as are true midline vessels.

   This file contains NO coordinates. Geometry lives in
   artery-3d-geometry.js. Branching truth stays in
   artery-assembly-data.js. Nothing is duplicated.
   ============================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. ALIASES — seam id drift.
     Maps a variant id onto the canonical id for the same vessel.
     Verified by label comparison against artery-assembly-data.js.
     --------------------------------------------------------- */
  var ALIASES = {
    thoracic_aorta:            'descending_thoracic_aorta',
    diaphragm_hiatus:          'aortic_hiatus',
    internal_carotid_arteries: 'internal_carotid_artery',
    vertebral_arteries:        'vertebral_artery',
  };

  /* ---------------------------------------------------------
     1b. SIDED_ALIASES — the left/right split.

     The arch module names sides explicitly ('left_subclavian_artery')
     because the origins genuinely differ: the left subclavian comes off
     the arch, the right off the brachiocephalic trunk. Every other
     module refers to the same vessel by a neutral id
     ('subclavian_artery'). Left unresolved, these are separate nodes
     and the tree fragments into four roots.

     We fold the sided ids onto the neutral canonical id and record the
     side. Instance expansion then produces 'L:subclavian_artery' with
     parent aortic_arch and 'R:subclavian_artery' with parent
     brachiocephalic_trunk — which is the real asymmetry, preserved.
     --------------------------------------------------------- */
  var SIDED_ALIASES = {
    left_subclavian_artery:      ['subclavian_artery',      'L'],
    right_subclavian_artery:     ['subclavian_artery',      'R'],
    left_common_carotid_artery:  ['common_carotid_artery',  'L'],
    right_common_carotid_artery: ['common_carotid_artery',  'R'],
    left_common_iliac_artery:    ['common_iliac_artery',    'L'],
    right_common_iliac_artery:   ['common_iliac_artery',    'R'],
    left_external_iliac_artery:  ['external_iliac_artery',  'L'],
    right_external_iliac_artery: ['external_iliac_artery',  'R'],
    left_internal_iliac_artery:  ['internal_iliac_artery',  'L'],
    right_internal_iliac_artery: ['internal_iliac_artery',  'R'],
  };

  /* Per-side parent, learned from the sided source nodes. Populated
     during the build; consulted when expanding instances so each side
     keeps its own origin. */

  /* ---------------------------------------------------------
     1c. PARENT_OVERRIDE — resolves genuine conflicts where two
     modules disagree about a vessel's parent. In every case here the
     two answers differ only in granularity, and we keep the more
     specific one.
     --------------------------------------------------------- */
  var PARENT_OVERRIDE = {
    /* The Circle of Willis module hangs these off the ICA as a whole;
       the ICA module hangs them off its cerebral (C7) segment. The
       segment is the more precise answer and the ICA segments are
       themselves modelled, so we keep it. */
    anterior_cerebral_artery:       'cerebral_part_ica',
    middle_cerebral_artery:         'cerebral_part_ica',
    posterior_communicating_artery: 'cerebral_part_ica',
    anterior_choroidal_artery:      'cerebral_part_ica',

    /* The abdominal aorta module goes straight to the iliacs; the iliac
       module inserts the bifurcation itself. Keep the bifurcation. */
    common_iliac_artery:            'aortic_bifurcation',
  };

  /* ---------------------------------------------------------
     2. KINDS — not everything in the data is a tube.

     Anything not listed here, and not typed 'anastomosis' in the source
     data, defaults to 'vessel' and must have geometry. Everything else
     is excluded from the geometry coverage audit.

     The 26 source nodes typed 'anastomosis' are cross-links, not
     branches: a tree can only give them one parent, which is why two of
     them showed up as parent conflicts. They are classified
     automatically and handled as links in the anastomoses pass.
     --------------------------------------------------------- */
  var KINDS = {
    left_ventricle:                      'chamber',
    pancreaticoduodenal_anastomosis_note:'note',
    drummond_marginal_artery_note:       'note',

    /* Landmarks and transition points. The source data models these as
       nodes because a vessel changes its name there, which is correct
       teaching. In 3D they have no length and no calibre, so they are
       not drawn; connectivity is routed through them. */
    aortic_hiatus:            'landmark',
    aortic_bifurcation:       'landmark',
    carotid_bifurcation:      'landmark',
    inguinal_ligament:        'landmark',
    adductor_hiatus:          'landmark',
    internal_iliac_territory: 'landmark',

    /* Obliterated in the adult — a fibrous cord, not a patent artery. */
    medial_umbilical_ligament: 'ligament',

    /* Capillary beds. Excluded on instruction: arteries only.
       Note that jejunal and ileal "vasa recta" are NOT listed here —
       in the gut those are true terminal arteries (arteriae rectae).
       Only the renal vasa recta and the glomerulus are capillary. */
    glomerular_capillaries:             'capillary',
    peritubular_capillaries_vasa_recta: 'capillary',
  };

  /* Confluences — vessels formed by the union of two parents rather
     than branching from one. The tree can only record one parent, so
     the second is stated here. */
  var CONFLUENCES = {
    basilar_artery: { from: ['vertebral_artery'], bothSides: true },
  };

  /* Second endpoint for anastomoses whose two ends were recorded in
     different modules. Removes the parent conflict and states the loop
     explicitly. */
  var ANASTOMOSIS_LINKS = {
    pancreaticoduodenal_anastomosis: ['superior_pancreaticoduodenal_arteries', 'inferior_pancreaticoduodenal_artery'],
    marginal_artery_drummond:        ['middle_colic_artery', 'left_colic_artery'],
  };

  /* ---------------------------------------------------------
     3. SIDEDNESS
     MIDLINE       — single vessel on the median plane.
     UNPAIRED_ROOT — this vessel and its whole subtree are unpaired
                     (the abdominal visceral trees and the basilar).
     Explicit left_/right_ prefix — already sided, left as is.
     Everything else — bilateral, expanded to L: and R:.
     --------------------------------------------------------- */
  var MIDLINE = [
    'left_ventricle',
    'ascending_aorta',
    'aortic_arch',
    'descending_thoracic_aorta',
    'aortic_hiatus',
    'abdominal_aorta',
    'brachiocephalic_trunk',
    'median_sacral_artery',
    'anterior_communicating_artery',
    'aortic_bifurcation',
    /* Branches of the thoracic aorta that run to midline structures.
       Not paired vessels — a variable handful of small twigs. */
    'esophageal_arteries',
    'mediastinal_branches',
    'pericardial_branches',
  ];

  var UNPAIRED_ROOT = [
    'celiac_trunk',
    'superior_mesenteric_artery',
    'inferior_mesenteric_artery',
    'basilar_artery',
    /* The coronaries are single vessels, not a left/right pair in the
       bilateral sense: there is one RCA and one LCA, each with its own
       territory. Without this they would be mirrored into four. */
    'right_coronary_artery',
    'left_coronary_artery',
  ];

  /* Vessels inside an unpaired subtree that ARE in fact paired.
     Empty for now; the audit prints the full classification so any
     misclassification here is visible and correctable. */
  var PAIRED_OVERRIDE = [];

  function canonical(id) {
    if (Object.prototype.hasOwnProperty.call(SIDED_ALIASES, id)) return SIDED_ALIASES[id][0];
    if (Object.prototype.hasOwnProperty.call(ALIASES, id)) return ALIASES[id];
    return id;
  }

  /* Side carried by a source id, or null if the id is side-neutral. */
  function sideOfSourceId(id) {
    if (Object.prototype.hasOwnProperty.call(SIDED_ALIASES, id)) return SIDED_ALIASES[id][1];
    return null;
  }

  function kindOf(id, sourceType) {
    if (Object.prototype.hasOwnProperty.call(KINDS, id)) return KINDS[id];
    if (sourceType === 'anastomosis') return 'anastomosis';
    return 'vessel';
  }

  function isExplicitlySided(id) {
    return /^(left|right)_/.test(id);
  }

  function sideOfExplicit(id) {
    return /^left_/.test(id) ? 'L' : 'R';
  }

  /* -----------------------------------------------------------------
     buildGlobalTree()
     Stitches every module into one tree keyed by canonical id, then
     resolves sidedness. Returns:

       nodes    { canonicalId -> { id, label, synonyms, type, kind,
                                   sidedness, parent, children[],
                                   clinicalNote, modules[] } }
       roots    canonical ids with no parent
       errors   [] conflicts found while stitching
       warnings [] non-fatal observations
     ----------------------------------------------------------------- */
  function buildGlobalTree() {
    var MODULES = (typeof window !== 'undefined' && window.ARTERY_ASSEMBLY_MODULES) || {};
    var nodes = {}, errors = [], warnings = [];

    /* Pass 1 — merge every module node under its canonical id. */
    Object.keys(MODULES).forEach(function (mKey) {
      (MODULES[mKey].nodes || []).forEach(function (n) {
        var id = canonical(n.id);
        var parent = n.parent ? canonical(n.parent) : null;
        var srcSide = sideOfSourceId(n.id);

        /* If the SOURCE parent was itself a sided id, the parent link
           belongs to that side only. Record it separately so the two
           sides can keep different origins. */
        var parentSide = n.parent ? sideOfSourceId(n.parent) : null;

        if (!nodes[id]) {
          nodes[id] = {
            id: id,
            label: n.label,
            synonyms: (n.synonyms || []).slice(),
            type: n.type,
            kind: kindOf(id, n.type),
            parent: null,
            sideParents: {},   /* { L: parentId, R: parentId } */
            children: [],
            clinicalNote: n.clinicalNote || null,
            sexSpecific: n.sexSpecific || null,
            modules: [mKey],
            labelFromSided: !!srcSide,
          };
        }

        var ex = nodes[id];
        if (ex.modules.indexOf(mKey) === -1) ex.modules.push(mKey);

        /* A sided source node contributes only to its own side. */
        if (srcSide && parent) {
          if (!ex.sideParents[srcSide]) ex.sideParents[srcSide] = parent;
          else if (ex.sideParents[srcSide] !== parent && !PARENT_OVERRIDE[id]) {
            errors.push('Side-parent conflict for "' + id + '" (' + srcSide + '): ' +
                        ex.sideParents[srcSide] + ' vs ' + parent + ' (from ' + mKey + ')');
          }
          return;
        }
        if (parentSide && parent) {
          if (!ex.sideParents[parentSide]) ex.sideParents[parentSide] = parent;
        }

        /* A module root carries parent=null only because the module
           stands alone. Never let that erase a real parent learned
           from another module. */
        if (parent && !ex.parent) {
          ex.parent = parent;
        } else if (parent && ex.parent && parent !== ex.parent) {
          if (PARENT_OVERRIDE[id]) {
            ex.parent = PARENT_OVERRIDE[id];
          } else if (ex.kind === 'anastomosis') {
            /* Expected: an anastomosis has two ends. Record, do not error. */
            if (!ANASTOMOSIS_LINKS[id]) ANASTOMOSIS_LINKS[id] = [ex.parent, parent];
          } else {
            errors.push(
              'Parent conflict for "' + id + '": ' + ex.parent +
              ' (from ' + ex.modules.join('/') + ') vs ' + parent + ' (from ' + mKey + ')'
            );
          }
        }

        /* Label authority: a neutral source id gives the canonical name
           ("Subclavian artery"). A sided source id gives a side-prefixed
           name ("Left subclavian artery"), which is wrong for a node
           that represents both sides — the side comes from the instance.
           So a neutral label always wins over a sided one. */
        if (ex.label !== n.label) {
          if (ex.labelFromSided && !srcSide) {
            ex.label = n.label;
            ex.labelFromSided = false;
          } else if (!ex.labelFromSided && !srcSide) {
            warnings.push('Label differs for "' + id + '": "' + ex.label + '" vs "' + n.label + '" in ' + mKey);
          }
        }
        (n.synonyms || []).forEach(function (s) {
          if (ex.synonyms.indexOf(s) === -1) ex.synonyms.push(s);
        });
        if (!ex.clinicalNote && n.clinicalNote) ex.clinicalNote = n.clinicalNote;
      });
    });

    /* Pass 1b — apply any override that never surfaced as a conflict,
       and fall back to a side parent when no neutral parent was found
       (true for vessels only ever named with a side, e.g. the
       subclavians, whose two origins genuinely differ). */
    Object.keys(nodes).forEach(function (id) {
      var n = nodes[id];
      if (PARENT_OVERRIDE[id]) {
        n.parent = PARENT_OVERRIDE[id];
        /* The override is the anatomical truth for both sides. */
        Object.keys(n.sideParents).forEach(function (s) { n.sideParents[s] = PARENT_OVERRIDE[id]; });
      }
      if (!n.parent) {
        var sp = n.sideParents.L || n.sideParents.R;
        if (sp) n.parent = sp;
      }
    });

    /* Pass 2 — link children, detect dangling parents. */
    Object.keys(nodes).forEach(function (id) {
      var p = nodes[id].parent;
      if (!p) return;
      if (!nodes[p]) {
        errors.push('Dangling parent: "' + id + '" points at "' + p + '" which does not exist.');
        nodes[id].parent = null;
        return;
      }
      nodes[p].children.push(id);
    });

    /* Pass 3 — sidedness. Walk down from roots so subtree rules inherit. */
    var unpairedSet = {};
    UNPAIRED_ROOT.forEach(function (r) { unpairedSet[r] = true; });

    function classify(id, inheritedUnpaired) {
      var n = nodes[id];
      if (!n) return;
      var unpaired = inheritedUnpaired || !!unpairedSet[id];

      if (isExplicitlySided(id)) {
        n.sidedness = 'sided';
        n.side = sideOfExplicit(id);
      } else if (MIDLINE.indexOf(id) !== -1) {
        n.sidedness = 'midline';
      } else if (unpaired && PAIRED_OVERRIDE.indexOf(id) === -1) {
        n.sidedness = 'unpaired';
      } else {
        n.sidedness = 'bilateral';
      }
      n.children.forEach(function (c) { classify(c, unpaired); });
    }

    var roots = Object.keys(nodes).filter(function (id) { return !nodes[id].parent; });
    roots.forEach(function (r) { classify(r, false); });

    /* Anything unreachable from a root (cycle) never got classified. */
    Object.keys(nodes).forEach(function (id) {
      if (!nodes[id].sidedness) {
        errors.push('Unreachable node (possible cycle): "' + id + '"');
        nodes[id].sidedness = 'bilateral';
      }
    });

    /* Sort children by the order they appear in the source data so
       proximal-to-distal branch order is preserved for the audit. */
    return { nodes: nodes, roots: roots, errors: errors, warnings: warnings };
  }

  /* -----------------------------------------------------------------
     expandInstances(tree)
     Turns the canonical tree into the list of things actually drawn.
     A bilateral vessel yields two instances; midline/unpaired/sided
     yield one. Instance keys:
       bilateral -> 'L:<id>' and 'R:<id>'
       otherwise -> '<id>'
     ----------------------------------------------------------------- */
  function instanceKeys(node) {
    if (node.sidedness === 'bilateral') return ['L:' + node.id, 'R:' + node.id];
    return [node.id];
  }

  function expandInstances(tree) {
    var out = {};

    /* Non-vessel entries (the left ventricle, the aortic hiatus, the
       anastomosis annotations) are not drawn as tubes, but they sit in
       the middle of the chain. Walk past them to the nearest real vessel
       ancestor so connectivity survives. */
    function nearestVesselAncestor(id) {
      var seen = {};
      var cur = id;
      while (cur && tree.nodes[cur]) {
        if (seen[cur]) return null;          /* cycle guard */
        seen[cur] = true;
        if (tree.nodes[cur].kind === 'vessel') return cur;
        cur = tree.nodes[cur].parent;
      }
      return null;
    }

    Object.keys(tree.nodes).forEach(function (id) {
      var n = tree.nodes[id];
      if (n.kind !== 'vessel') return;
      instanceKeys(n).forEach(function (key) {
        /* Keys are 'L:<id>' / 'R:<id>', so the colon is at index 1. */
        var side = key.indexOf(':') === 1 ? key.charAt(0) : (n.side || null);

        /* Prefer a side-specific parent when the source data recorded
           one (the subclavian and common carotid origins genuinely
           differ between sides); otherwise use the shared parent. */
        var parentId = (side && n.sideParents && n.sideParents[side]) || n.parent;
        parentId = parentId ? nearestVesselAncestor(parentId) : null;

        var parentKey = null;
        if (parentId && tree.nodes[parentId]) {
          var p = tree.nodes[parentId];
          if (p.sidedness === 'bilateral' && side) parentKey = side + ':' + p.id;
          else if (p.sidedness === 'bilateral' && !side) {
            /* An unpaired vessel arising from a bilateral one. The only
               true case is a confluence (the basilar from both vertebral
               arteries). Attach to the left instance and record the
               right as a second source. */
            parentKey = 'L:' + p.id;
            if (CONFLUENCES[n.id]) out[key] = null; /* placeholder, set below */
          } else parentKey = p.id;
        }
        var rec = { key: key, id: n.id, side: side, parent: parentKey, node: n };
        if (CONFLUENCES[n.id] && parentKey && parentKey.charAt(0) === 'L') {
          rec.secondParent = 'R' + parentKey.slice(1);
          rec.confluence = true;
        }
        out[key] = rec;
      });
    });
    return out;
  }

  window.Artery3DTopology = {
    ALIASES: ALIASES,
    SIDED_ALIASES: SIDED_ALIASES,
    PARENT_OVERRIDE: PARENT_OVERRIDE,
    ANASTOMOSIS_LINKS: ANASTOMOSIS_LINKS,
    CONFLUENCES: CONFLUENCES,
    KINDS: KINDS,
    MIDLINE: MIDLINE,
    UNPAIRED_ROOT: UNPAIRED_ROOT,
    canonical: canonical,
    kindOf: kindOf,
    buildGlobalTree: buildGlobalTree,
    expandInstances: expandInstances,
    instanceKeys: instanceKeys,
  };
})();
