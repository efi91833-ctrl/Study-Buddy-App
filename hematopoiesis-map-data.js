/* hematopoiesis-map-data.js  V2
   SVG tree fill-in-the-blank map — all cells, keywords, notes, questions
   ─────────────────────────────────────────────────────────────────────── */
(function () {

  /* ── diagram constants (shared with component) ── */
  var R  = 13;   // cell circle radius (SVG units)
  var DW = 870;  // viewBox width
  var DH = 710;  // viewBox height
  var BLOOD_Y  = 490;  // y where Bone Marrow → Blood zone begins
  var TISSUE_Y = 600;  // y where Blood → Tissue zone begins

  window.HEMA_CONSTS = { R: R, DW: DW, DH: DH, BLOOD_Y: BLOOD_Y, TISSUE_Y: TISSUE_Y };

  /* ────────────────────────────────────────────────────────
     CELLS
     par[]   = ids of parent cells (for unlock sequencing)
     kw[]    = keywords — user input must start with one (case-insensitive,
               punctuation stripped, min 4 chars)
     note    = short info shown in popover (stimulus + stage time)
     mitosis = true if cell CAN divide (used after user guesses)
     isFinal = true for terminal blood cells that get a size question
     isTissue= true for tissue-resident cells (name only, no extras)
     q       = notable-change question object (optional)
       .text  = question prompt
       .opts  = array of 4 answer strings
       .ans   = index of correct answer
       .exp   = explanation shown after submit
  ──────────────────────────────────────────────────────── */
  window.HEMA_CELLS = [

    /* ── Stem ── */
    { id:'hsc', name:'Hematopoietic Stem Cell', short:'HSC',
      kw:['hematopoietic stem','hemocytoblast','multipotential stem','hsc'],
      x:450, y:45, zone:'bone_marrow', par:[], mitosis:true,
      note:'Stimulus: SCF, CXCL12, TPO | Self-renews throughout life' },

    /* ── Common progenitors ── */
    { id:'cmp', name:'Common Myeloid Progenitor', short:'CMP',
      kw:['common myeloid','myeloid progenitor','cmp'],
      x:280, y:108, zone:'bone_marrow', par:['hsc'], mitosis:true,
      note:'Stimulus: SCF, IL-3, GM-CSF | Gives rise to all myeloid lineages' },

    { id:'clp', name:'Common Lymphoid Progenitor', short:'CLP',
      kw:['common lymphoid','lymphoid progenitor','clp'],
      x:698, y:108, zone:'bone_marrow', par:['hsc'], mitosis:true,
      note:'Stimulus: SCF, IL-7, Flt3L | Gives rise to all lymphoid lineages' },

    /* ── Thrombopoiesis ── */
    { id:'mkbl', name:'Megakaryoblast', short:'Megakaryoblast',
      kw:['megakaryoblast'],
      x:68, y:178, zone:'bone_marrow', par:['cmp'], mitosis:false, lineage:'thrombopoiesis',
      note:'Stimulus: TPO | ~2 days | First committed megakaryocyte precursor',
      q:{ text:'What unique form of nuclear multiplication occurs in this cell line, causing the cell to become massively polyploid without dividing?',
          opts:['Endomitosis — DNA replicates repeatedly but the cell does not divide, producing a polyploid nucleus (up to 64N)',
                'Meiosis — reduces chromosome number to haploid as in germ cells',
                'Normal mitosis producing two identical daughter cells',
                'Amitosis — direct nuclear fragmentation without a spindle apparatus'],
          ans:0,
          exp:'Endomitosis is unique to the megakaryocyte lineage. DNA replicates but cytokinesis is skipped, allowing the cell to accumulate up to 64 copies of every chromosome. This polyploidy provides the genetic material needed to shed thousands of platelets.' } },

    { id:'promk', name:'Promegakaryocyte', short:'Promegakaryocyte',
      kw:['promegakaryocyte'],
      x:68, y:248, zone:'bone_marrow', par:['mkbl'], mitosis:false, lineage:'thrombopoiesis',
      note:'Stimulus: TPO | ~2-3 days | Cytoplasm expands; demarcation membranes form' },

    { id:'mk', name:'Megakaryocyte', short:'Megakaryocyte',
      kw:['megakaryocyte'],
      x:68, y:318, zone:'bone_marrow', par:['promk'], mitosis:false, lineage:'thrombopoiesis',
      note:'Stimulus: TPO | ~5 days | Extends proplatelets through sinusoids to shed platelets' },

    { id:'plt', name:'Platelet', short:'Platelet',
      kw:['platelet','thrombocyte'],
      x:68, y:510, zone:'blood', par:['mk'], mitosis:false, lineage:'thrombopoiesis',
      isFinal:true, size:'2-4',
      note:'Stimulus: TPO | 7-10 days in blood | Anucleate fragment; mediates clotting' },

    /* ── Erythropoiesis ── */
    { id:'proerythr', name:'Proerythroblast', short:'Proerythroblast',
      kw:['proerythroblast','pronormoblast'],
      x:162, y:178, zone:'bone_marrow', par:['cmp'], mitosis:true, lineage:'erythropoiesis',
      note:'Stimulus: EPO | ~1 day | Largest nucleated RBC precursor' },

    { id:'baso_e', name:'Basophilic Erythroblast', short:'Basophilic Erythroblast',
      kw:['basophilic erythroblast','basophilic normoblast'],
      x:162, y:248, zone:'bone_marrow', par:['proerythr'], mitosis:true, lineage:'erythropoiesis',
      note:'Stimulus: EPO | ~2 days | Dense basophilia from abundant ribosomes' },

    { id:'poly_e', name:'Polychromatic Erythroblast', short:'Polychromatic Erythroblast',
      kw:['polychromatic erythroblast','polychromatophilic','polychromatic normoblast'],
      x:162, y:318, zone:'bone_marrow', par:['baso_e'], mitosis:true, lineage:'erythropoiesis',
      note:'Stimulus: EPO | ~2 days | Haemoglobin accumulating; mixed basophilia + eosinophilia' },

    { id:'ortho_e', name:'Orthochromatic Erythroblast', short:'Orthochromatic Erythroblast',
      kw:['orthochromatic erythroblast','orthochromatic normoblast','orthochromatophilic','normoblast'],
      x:162, y:390, zone:'bone_marrow', par:['poly_e'], mitosis:false, lineage:'erythropoiesis',
      note:'Stimulus: EPO (waning) | ~1 day | Pyknotic nucleus about to be expelled',
      q:{ text:'What defining structural event happens to this erythrocyte precursor that no other nucleated blood cell undergoes?',
          opts:['The nucleus is actively extruded from the cell, producing an anucleate reticulocyte',
                'The nucleus becomes multilobed, connected by thin chromatin strands',
                'The cell undergoes endomitosis, massively increasing DNA content without division',
                'Haemoglobin synthesis ceases completely as the cytoplasm fills with granules'],
          ans:0,
          exp:'Nuclear extrusion is the defining hallmark of the orthochromatic erythroblast. The pyknotic (condensed, dark) nucleus is expelled and phagocytosed by bone marrow macrophages. The resulting anucleate cell is the reticulocyte.' } },

    { id:'retic', name:'Reticulocyte', short:'Reticulocyte',
      kw:['reticulocyte'],
      x:162, y:450, zone:'bone_marrow', par:['ortho_e'], mitosis:false, lineage:'erythropoiesis',
      note:'EPO no longer needed | 1-2 days BM then ~1 day blood | Residual ribosome network visible with supravital stain' },

    { id:'eryth', name:'Erythrocyte', short:'Erythrocyte',
      kw:['erythrocyte','red blood cell','rbc'],
      x:162, y:510, zone:'blood', par:['retic'], mitosis:false, lineage:'erythropoiesis',
      isFinal:true, size:'7.5',
      note:'Circulates ~120 days | Anucleate biconcave disc; no organelles' },

    /* ── Granulopoiesis — shared myeloblast ── */
    { id:'mybl', name:'Myeloblast', short:'Myeloblast',
      kw:['myeloblast'],
      x:348, y:178, zone:'bone_marrow', par:['cmp'], mitosis:true, lineage:'granulopoiesis',
      note:'Stimulus: G-CSF, GM-CSF, IL-3 | <1 day | First recognisable granulocyte precursor; no granules yet' },

    /* ── Basophil branch ── */
    { id:'b_pro', name:'Basophilic Promyelocyte', short:'B. Promyelocyte',
      kw:['basophilic promyelocyte','b promyelocyte'],
      x:255, y:248, zone:'bone_marrow', par:['mybl'], mitosis:true, lineage:'granulopoiesis',
      note:'Stimulus: G-CSF | ~2 days | Azurophilic primary granules appear for the first time' },

    { id:'b_myelo', name:'Basophilic Myelocyte', short:'B. Myelocyte',
      kw:['basophilic myelocyte','b myelocyte'],
      x:255, y:318, zone:'bone_marrow', par:['b_pro'], mitosis:true, lineage:'granulopoiesis',
      note:'Stimulus: G-CSF | ~4 days | Last mitotic stage; basophil-specific granules appear' },

    { id:'b_meta', name:'Basophilic Metamyelocyte', short:'B. Metamyelocyte',
      kw:['basophilic metamyelocyte','b metamyelocyte'],
      x:255, y:388, zone:'bone_marrow', par:['b_myelo'], mitosis:false, lineage:'granulopoiesis',
      note:'Stimulus: G-CSF | ~3-5 days | Kidney-shaped nucleus; no further division' },

    { id:'b_band', name:'Basophilic Band Cell', short:'B. Band',
      kw:['basophilic band','b band'],
      x:255, y:450, zone:'bone_marrow', par:['b_meta'], mitosis:false, lineage:'granulopoiesis',
      note:'Stimulus: G-CSF | ~4 days | Horseshoe (band) nucleus' },

    { id:'basophil', name:'Basophil', short:'Basophil',
      kw:['basophil'],
      x:255, y:510, zone:'blood', par:['b_band'], mitosis:false, lineage:'granulopoiesis',
      isFinal:true, size:'9-11',
      note:'Stimulus: IL-3 | Few days in blood | Rarest granulocyte; role in allergy and antiparasitic responses' },

    /* ── Neutrophil branch ── */
    { id:'n_pro', name:'Neutrophilic Promyelocyte', short:'N. Promyelocyte',
      kw:['neutrophilic promyelocyte','n promyelocyte'],
      x:348, y:248, zone:'bone_marrow', par:['mybl'], mitosis:true, lineage:'granulopoiesis',
      note:'Stimulus: G-CSF | ~2 days | Azurophilic (primary) granules appear; largest promyelocyte',
      q:{ text:'What appears in the cytoplasm for the first time at the promyelocyte stage, shared by ALL three granulocyte lineages?',
          opts:['Azurophilic (primary) granules — non-specific lysosomes containing MPO, defensins and elastase',
                'Specific (secondary) granules that already define the eventual granulocyte subtype',
                'A multilobed nucleus joined by thin chromatin bridges',
                'Demarcation membranes used for fragmentation into cell products'],
          ans:0,
          exp:'Azurophilic primary granules appear first at the promyelocyte stage in ALL granulocyte subtypes. They contain myeloperoxidase (MPO), defensins, and elastase. Specific secondary granules — which define whether the cell becomes a neutrophil, eosinophil, or basophil — appear later at the myelocyte stage.' } },

    { id:'n_myelo', name:'Neutrophilic Myelocyte', short:'N. Myelocyte',
      kw:['neutrophilic myelocyte','n myelocyte'],
      x:348, y:318, zone:'bone_marrow', par:['n_pro'], mitosis:true, lineage:'granulopoiesis',
      note:'Stimulus: G-CSF | ~4 days | Last mitotic stage; neutrophil-specific (secondary) granules appear',
      q:{ text:'What two defining features characterise the myelocyte stage across all granulocyte lineages?',
          opts:['It is the LAST cell capable of mitosis AND specific (secondary) granules appear here for the first time',
                'It is the FIRST anucleate cell AND specific granules disappear at this point',
                'It is the FIRST cell to enter the bloodstream AND the nucleus becomes multilobed',
                'It is the LAST cell with nucleoli AND demarcation membranes begin forming'],
          ans:0,
          exp:'The myelocyte is the final mitotically active granulocyte precursor — beyond this stage cells cannot divide. Specific secondary granules appear at the myelocyte stage and determine the cell\'s identity: neutrophilic, eosinophilic, or basophilic.' } },

    { id:'n_meta', name:'Neutrophilic Metamyelocyte', short:'N. Metamyelocyte',
      kw:['neutrophilic metamyelocyte','n metamyelocyte'],
      x:348, y:388, zone:'bone_marrow', par:['n_myelo'], mitosis:false, lineage:'granulopoiesis',
      note:'Stimulus: G-CSF | ~3-5 days | Kidney-shaped indented nucleus; no further division' },

    { id:'n_band', name:'Neutrophilic Band Cell', short:'N. Band',
      kw:['neutrophilic band','n band','stab cell','band neutrophil'],
      x:348, y:450, zone:'bone_marrow', par:['n_meta'], mitosis:false, lineage:'granulopoiesis',
      note:'Stimulus: G-CSF | ~4 days | Horseshoe nucleus; elevated in infection ("left shift")' },

    { id:'neutrophil', name:'Neutrophil', short:'Neutrophil',
      kw:['neutrophil'],
      x:348, y:510, zone:'blood', par:['n_band'], mitosis:false, lineage:'granulopoiesis',
      isFinal:true, size:'10-12',
      note:'Stimulus: G-CSF | 4-8 hours in blood | Most abundant granulocyte; first responder to bacterial infection' },

    /* ── Eosinophil branch ── */
    { id:'e_pro', name:'Eosinophilic Promyelocyte', short:'E. Promyelocyte',
      kw:['eosinophilic promyelocyte','e promyelocyte'],
      x:440, y:248, zone:'bone_marrow', par:['mybl'], mitosis:true, lineage:'granulopoiesis',
      note:'Stimulus: IL-5 | ~2 days | Azurophilic primary granules appear' },

    { id:'e_myelo', name:'Eosinophilic Myelocyte', short:'E. Myelocyte',
      kw:['eosinophilic myelocyte','e myelocyte'],
      x:440, y:318, zone:'bone_marrow', par:['e_pro'], mitosis:true, lineage:'granulopoiesis',
      note:'Stimulus: IL-5 | ~4 days | Last mitotic stage; large eosinophil-specific granules appear' },

    { id:'e_meta', name:'Eosinophilic Metamyelocyte', short:'E. Metamyelocyte',
      kw:['eosinophilic metamyelocyte','e metamyelocyte'],
      x:440, y:388, zone:'bone_marrow', par:['e_myelo'], mitosis:false, lineage:'granulopoiesis',
      note:'Stimulus: IL-5 | ~3-5 days | Kidney-shaped nucleus; non-dividing' },

    { id:'e_band', name:'Eosinophilic Band Cell', short:'E. Band',
      kw:['eosinophilic band','e band'],
      x:440, y:450, zone:'bone_marrow', par:['e_meta'], mitosis:false, lineage:'granulopoiesis',
      note:'Stimulus: IL-5 | ~4 days | Horseshoe nucleus' },

    { id:'eosinophil', name:'Eosinophil', short:'Eosinophil',
      kw:['eosinophil'],
      x:440, y:510, zone:'blood', par:['e_band'], mitosis:false, lineage:'granulopoiesis',
      isFinal:true, size:'12-14',
      note:'Stimulus: IL-5 | 8-12 days in blood | Anti-parasitic; mediates allergic responses' },

    /* ── Monopoiesis ── */
    { id:'monbl', name:'Monoblast', short:'Monoblast',
      kw:['monoblast'],
      x:535, y:178, zone:'bone_marrow', par:['cmp'], mitosis:true, lineage:'monopoiesis',
      note:'Stimulus: M-CSF, GM-CSF | <1 day | Committed monocyte progenitor' },

    { id:'promono', name:'Promonocyte', short:'Promonocyte',
      kw:['promonocyte'],
      x:535, y:248, zone:'bone_marrow', par:['monbl'], mitosis:true, lineage:'monopoiesis',
      note:'Stimulus: M-CSF | ~1-2 days | Irregular nucleus; lysosomal granules forming' },

    { id:'mono', name:'Monocyte', short:'Monocyte',
      kw:['monocyte'],
      x:535, y:510, zone:'blood', par:['promono'], mitosis:false, lineage:'monopoiesis',
      isFinal:true, size:'12-20',
      note:'Stimulus: M-CSF | 1-3 days in blood | Kidney-shaped nucleus; migrates to tissue as macrophage' },

    /* ── Lymphopoiesis ── */
    { id:'lymphbl', name:'Lymphoblast', short:'Lymphoblast',
      kw:['lymphoblast'],
      x:698, y:178, zone:'bone_marrow', par:['clp'], mitosis:true, lineage:'lymphopoiesis',
      note:'Stimulus: IL-7, SCF | ~1-3 days | Committed lymphoid precursor' },

    { id:'prolymph', name:'Prolymphocyte', short:'Prolymphocyte',
      kw:['prolymphocyte'],
      x:698, y:248, zone:'bone_marrow', par:['lymphbl'], mitosis:true, lineage:'lymphopoiesis',
      note:'Stimulus: IL-7 | ~1-2 days | Condensing chromatin; smaller than lymphoblast' },

    { id:'small_l', name:'Small Lymphocyte', short:'Small Lymphocyte',
      kw:['small lymphocyte'],
      x:698, y:330, zone:'bone_marrow', par:['prolymph'], mitosis:false, lineage:'lymphopoiesis',
      note:'Survival signals | Naive; long-lived in periphery' },

    { id:'nk', name:'Natural Killer Cell', short:'NK Cell',
      kw:['natural killer','nk cell','nk'],
      x:635, y:510, zone:'blood', par:['small_l'], mitosis:false, lineage:'lymphopoiesis',
      isFinal:true, size:'10-15',
      note:'Stimulus: IL-15 | Large granular lymphocyte; kills virus-infected and tumour cells' },

    { id:'b_lymph', name:'B Lymphocyte', short:'B Lymphocyte',
      kw:['b lymphocyte','b-lymphocyte','b cell'],
      x:698, y:510, zone:'blood', par:['small_l'], mitosis:false, lineage:'lymphopoiesis',
      isFinal:true, size:'6-8',
      note:'Stimulus: BAFF, antigen | Matures in bone marrow then lymph nodes; becomes plasma cell or memory B cell' },

    { id:'t_lymph', name:'T Lymphocyte', short:'T Lymphocyte',
      kw:['t lymphocyte','t-lymphocyte','t cell'],
      x:762, y:510, zone:'blood', par:['small_l'], mitosis:false, lineage:'lymphopoiesis',
      isFinal:true, size:'6-8',
      note:'Stimulus: antigen + co-stimulation | Matures in thymus; CD4+ helper or CD8+ cytotoxic' },

    /* ── Tissue cells (name only) ── */
    { id:'mast', name:'Mast Cell', short:'Mast Cell',
      kw:['mast cell','mast'],
      x:185, y:648, zone:'tissue', par:['basophil'], mitosis:false, isTissue:true,
      note:'From basophil-like progenitor; tissue resident; releases histamine on IgE activation' },

    { id:'macrophage', name:'Macrophage', short:'Macrophage',
      kw:['macrophage'],
      x:420, y:648, zone:'tissue', par:['mono'], mitosis:false, isTissue:true,
      note:'From monocyte; long-lived phagocyte — Kupffer cell (liver), microglia (brain), osteoclast (bone)' },

    { id:'myeloid_dc', name:'Myeloid Dendritic Cell', short:'Myeloid DC',
      kw:['myeloid dendritic','myeloid dc'],
      x:535, y:648, zone:'tissue', par:['mono'], mitosis:false, isTissue:true,
      note:'From monocyte; professional antigen-presenting cell; activates naive T cells' },

    { id:'plasma', name:'Plasma Cell', short:'Plasma Cell',
      kw:['plasma cell','plasmacyte','plasma'],
      x:660, y:648, zone:'tissue', par:['b_lymph'], mitosis:false, isTissue:true,
      note:'From B lymphocyte after antigen stimulation; secretes specific antibodies' },

    { id:'lymphoid_dc', name:'Lymphoid Dendritic Cell', short:'Lymphoid DC',
      kw:['lymphoid dendritic','lymphoid dc'],
      x:762, y:648, zone:'tissue', par:['b_lymph'], mitosis:false, isTissue:true,
      note:'Plasmacytoid DC; from lymphoid lineage; produces large amounts of type I interferon' },

  ]; // end HEMA_CELLS


  /* ── LINEAGES
     terminals[] = final cell IDs whose completion triggers the duration quiz
     durRange    = [min, max] acceptable numeric answer in days
  ── */
  window.HEMA_LINEAGES = {
    thrombopoiesis: {
      label:'Thrombopoiesis',
      stimulus:'TPO (Thrombopoietin) — produced by liver and kidneys',
      duration:'~10 days',
      durRange:[8, 12],
      terminals:['plt']
    },
    erythropoiesis: {
      label:'Erythropoiesis',
      stimulus:'EPO (Erythropoietin) — produced by peritubular cells of the kidney in response to hypoxia',
      duration:'~7 days (bone marrow) + 1-2 days (reticulocyte in blood)',
      durRange:[6, 10],
      terminals:['eryth']
    },
    granulopoiesis: {
      label:'Granulopoiesis',
      stimulus:'G-CSF, GM-CSF, IL-3 (all branches); IL-5 (eosinophil); IL-3 (basophil)',
      duration:'~14 days',
      durRange:[12, 16],
      terminals:['basophil', 'neutrophil', 'eosinophil']
    },
    monopoiesis: {
      label:'Monopoiesis',
      stimulus:'M-CSF (Monocyte Colony-Stimulating Factor)',
      duration:'~3-4 days',
      durRange:[2, 5],
      terminals:['mono']
    },
    lymphopoiesis: {
      label:'Lymphopoiesis',
      stimulus:'IL-7, SCF (B cells in marrow); Notch signalling (T cells in thymus)',
      duration:'~1-2 weeks for B cells; weeks for T cells (thymus)',
      durRange:[5, 21],
      terminals:['nk', 'b_lymph', 't_lymph']
    },
  };

})();
