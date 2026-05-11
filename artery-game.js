/* ============================================================
   Arterial Pathway Builder — Comprehensive Game Data v2
   ============================================================ */

window.ARTERY_GAMES = {

  /* ── Lower Limb ─────────────────────────────────────────── */
  lowerLimb: {
    title: 'Lower Limb',
    subtitle: 'Arterial Supply of the Lower Limb',
    nodes: [
      { id:'ll_1',  label:'Abdominal Aorta',                     parentId:null,    isBranch:false },
      { id:'ll_2',  label:'Common Iliac Artery',                 parentId:'ll_1',  isBranch:false },
      { id:'ll_i',  label:'Internal Iliac Artery',               parentId:'ll_2',  isBranch:true  },
      { id:'ll_3',  label:'External Iliac Artery',               parentId:'ll_2',  isBranch:false },
      { id:'ll_e1', label:'Inferior Epigastric Artery',          parentId:'ll_3',  isBranch:true  },
      { id:'ll_e2', label:'Deep Circumflex Iliac Artery',        parentId:'ll_3',  isBranch:true  },
      { id:'ll_4',  label:'Femoral Artery',                      parentId:'ll_3',  isBranch:false },
      { id:'ll_5',  label:'Profunda Femoris Artery',             parentId:'ll_4',  isBranch:true  },
      { id:'ll_6',  label:'Medial Circumflex Femoral Artery',    parentId:'ll_5',  isBranch:true  },
      { id:'ll_7',  label:'Lateral Circumflex Femoral Artery',   parentId:'ll_5',  isBranch:true  },
      { id:'ll_p1', label:'Perforating Arteries (1st-4th)',      parentId:'ll_5',  isBranch:true  },
      { id:'ll_dg', label:'Descending Genicular Artery',         parentId:'ll_4',  isBranch:true  },
      { id:'ll_8',  label:'Popliteal Artery',                    parentId:'ll_4',  isBranch:false },
      { id:'ll_g1', label:'Superior Lateral Genicular Artery',   parentId:'ll_8',  isBranch:true  },
      { id:'ll_g2', label:'Superior Medial Genicular Artery',    parentId:'ll_8',  isBranch:true  },
      { id:'ll_g3', label:'Middle Genicular Artery',             parentId:'ll_8',  isBranch:true  },
      { id:'ll_g4', label:'Inferior Lateral Genicular Artery',   parentId:'ll_8',  isBranch:true  },
      { id:'ll_g5', label:'Inferior Medial Genicular Artery',    parentId:'ll_8',  isBranch:true  },
      { id:'ll_9',  label:'Anterior Tibial Artery',              parentId:'ll_8',  isBranch:false },
      { id:'ll_10', label:'Posterior Tibial Artery',             parentId:'ll_8',  isBranch:false },
      { id:'ll_11', label:'Fibular (Peroneal) Artery',           parentId:'ll_10', isBranch:true  },
      { id:'ll_f1', label:'Perforating Branch of Fibular',       parentId:'ll_11', isBranch:true  },
      { id:'ll_f2', label:'Communicating Branch of Fibular',     parentId:'ll_11', isBranch:true  },
      { id:'ll_12', label:'Medial Plantar Artery',               parentId:'ll_10', isBranch:false },
      { id:'ll_m1', label:'Superficial Medial Plantar Branch',   parentId:'ll_12', isBranch:true  },
      { id:'ll_m2', label:'Deep Medial Plantar Branch',          parentId:'ll_12', isBranch:true  },
      { id:'ll_13', label:'Lateral Plantar Artery',              parentId:'ll_10', isBranch:false },
      { id:'ll_14', label:'Plantar Arch',                        parentId:'ll_13', isBranch:false },
      { id:'ll_pb', label:'Perforating Branches (plantar arch)', parentId:'ll_14', isBranch:true  },
      { id:'ll_15', label:'Plantar Metatarsal Arteries',         parentId:'ll_14', isBranch:false },
      { id:'ll_20', label:'Common Plantar Digital Arteries',     parentId:'ll_15', isBranch:false },
      { id:'ll_21', label:'Proper Plantar Digital Arteries',     parentId:'ll_20', isBranch:false },
      { id:'ll_16', label:'Dorsalis Pedis Artery',               parentId:'ll_9',  isBranch:false },
      { id:'ll_t1', label:'Medial Tarsal Arteries',              parentId:'ll_16', isBranch:true  },
      { id:'ll_t2', label:'Lateral Tarsal Artery',               parentId:'ll_16', isBranch:true  },
      { id:'ll_fd', label:'1st Dorsal Metatarsal Artery',        parentId:'ll_16', isBranch:true  },
      { id:'ll_17', label:'Arcuate Artery of Foot',              parentId:'ll_16', isBranch:false },
      { id:'ll_18', label:'Dorsal Metatarsal Arteries (2nd-4th)',parentId:'ll_17', isBranch:false },
      { id:'ll_19', label:'Dorsal Digital Arteries',             parentId:'ll_18', isBranch:false },
    ],
    explanation:
`Abdominal aorta bifurcates at L4 into common iliac arteries. Each common iliac gives an internal iliac (pelvis) and external iliac (lower limb). The external iliac gives the inferior epigastric and deep circumflex iliac before passing under the inguinal ligament to become the femoral artery.

Femoral artery: gives profunda femoris ~4 cm below the inguinal ligament. Profunda femoris is the main thigh supply — gives medial and lateral circumflex femoral arteries (femoral head + cruciate anastomosis) and 4 perforating arteries. Descending genicular leaves femoral before adductor hiatus. Femoral passes through adductor canal to become popliteal artery.

Popliteal artery: 5 genicular arteries + middle genicular (cruciate ligaments), then splits into anterior tibial and posterior tibial.

Anterior tibial → dorsalis pedis → medial/lateral tarsal arteries (branches), 1st dorsal metatarsal (branch), arcuate artery → dorsal metatarsal arteries 2-4 → dorsal digital arteries.

Posterior tibial → fibular/peroneal artery (branch; lateral compartment + perforating + communicating branches) → medial plantar (superficial + deep branches) → lateral plantar → plantar arch (perforating branches to dorsum) → plantar metatarsal arteries → common plantar digital → proper plantar digital arteries.`,
  },

  /* ── Upper Limb ──────────────────────────────────────────── */
  upperLimb: {
    title: 'Upper Limb',
    subtitle: 'Arterial Supply of the Upper Limb',
    nodes: [
      { id:'ul_1',  label:'Subclavian Artery',                   parentId:null,    isBranch:false },
      { id:'ul_v',  label:'Vertebral Artery',                    parentId:'ul_1',  isBranch:true  },
      { id:'ul_it', label:'Internal Thoracic Artery',            parentId:'ul_1',  isBranch:true  },
      { id:'ul_tc', label:'Thyrocervical Trunk',                 parentId:'ul_1',  isBranch:true  },
      { id:'ul_t1', label:'Inferior Thyroid Artery',             parentId:'ul_tc', isBranch:false },
      { id:'ul_t2', label:'Suprascapular Artery',                parentId:'ul_tc', isBranch:true  },
      { id:'ul_t3', label:'Transverse Cervical Artery',          parentId:'ul_tc', isBranch:true  },
      { id:'ul_cc', label:'Costocervical Trunk',                 parentId:'ul_1',  isBranch:true  },
      { id:'ul_c1', label:'Supreme Intercostal Artery',          parentId:'ul_cc', isBranch:false },
      { id:'ul_c2', label:'Deep Cervical Artery',                parentId:'ul_cc', isBranch:true  },
      { id:'ul_2',  label:'Axillary Artery',                     parentId:'ul_1',  isBranch:false },
      { id:'ul_a1', label:'Superior Thoracic Artery',            parentId:'ul_2',  isBranch:true  },
      { id:'ul_a2', label:'Thoracoacromial Artery',              parentId:'ul_2',  isBranch:true  },
      { id:'ul_a3', label:'Lateral Thoracic Artery',             parentId:'ul_2',  isBranch:true  },
      { id:'ul_a4', label:'Subscapular Artery',                  parentId:'ul_2',  isBranch:true  },
      { id:'ul_a5', label:'Circumflex Scapular Artery',          parentId:'ul_a4', isBranch:false },
      { id:'ul_a6', label:'Thoracodorsal Artery',                parentId:'ul_a4', isBranch:true  },
      { id:'ul_a7', label:'Anterior Circumflex Humeral Artery',  parentId:'ul_2',  isBranch:true  },
      { id:'ul_a8', label:'Posterior Circumflex Humeral Artery', parentId:'ul_2',  isBranch:true  },
      { id:'ul_4',  label:'Brachial Artery',                     parentId:'ul_2',  isBranch:false },
      { id:'ul_5',  label:'Profunda Brachii Artery',             parentId:'ul_4',  isBranch:true  },
      { id:'ul_b1', label:'Radial Collateral Artery',            parentId:'ul_5',  isBranch:false },
      { id:'ul_b2', label:'Middle Collateral Artery',            parentId:'ul_5',  isBranch:true  },
      { id:'ul_b3', label:'Superior Ulnar Collateral Artery',    parentId:'ul_4',  isBranch:true  },
      { id:'ul_b4', label:'Inferior Ulnar Collateral Artery',    parentId:'ul_4',  isBranch:true  },
      { id:'ul_6',  label:'Radial Artery',                       parentId:'ul_4',  isBranch:false },
      { id:'ul_r1', label:'Radial Recurrent Artery',             parentId:'ul_6',  isBranch:true  },
      { id:'ul_r2', label:'Superficial Palmar Branch of Radial', parentId:'ul_6',  isBranch:true  },
      { id:'ul_8',  label:'Dorsal Carpal Arch',                  parentId:'ul_6',  isBranch:true  },
      { id:'ul_9',  label:'Dorsal Metacarpal Arteries',          parentId:'ul_8',  isBranch:false },
      { id:'ul_d1', label:'Dorsal Digital Arteries (hand)',      parentId:'ul_9',  isBranch:false },
      { id:'ul_10', label:'Deep Palmar Arch',                    parentId:'ul_6',  isBranch:false },
      { id:'ul_p1', label:'Palmar Metacarpal Arteries',          parentId:'ul_10', isBranch:false },
      { id:'ul_p2', label:'Princeps Pollicis Artery',            parentId:'ul_10', isBranch:true  },
      { id:'ul_p3', label:'Radialis Indicis Artery',             parentId:'ul_10', isBranch:true  },
      { id:'ul_7',  label:'Ulnar Artery',                        parentId:'ul_4',  isBranch:false },
      { id:'ul_u1', label:'Ulnar Recurrent Artery',              parentId:'ul_7',  isBranch:true  },
      { id:'ul_u2', label:'Dorsal Carpal Branch of Ulnar',       parentId:'ul_7',  isBranch:true  },
      { id:'ul_11', label:'Common Interosseous Artery',          parentId:'ul_7',  isBranch:true  },
      { id:'ul_12', label:'Anterior Interosseous Artery',        parentId:'ul_11', isBranch:false },
      { id:'ul_13', label:'Posterior Interosseous Artery',       parentId:'ul_11', isBranch:true  },
      { id:'ul_i1', label:'Interosseous Recurrent Artery',       parentId:'ul_13', isBranch:true  },
      { id:'ul_14', label:'Superficial Palmar Arch',             parentId:'ul_7',  isBranch:false },
      { id:'ul_15', label:'Common Palmar Digital Arteries',      parentId:'ul_14', isBranch:false },
      { id:'ul_16', label:'Proper Palmar Digital Arteries',      parentId:'ul_15', isBranch:false },
    ],
    explanation:
`Subclavian artery gives 4 branches: vertebral artery, internal thoracic artery, thyrocervical trunk (inferior thyroid, suprascapular, transverse cervical), costocervical trunk (supreme intercostal, deep cervical). Continues as axillary artery (outer border 1st rib), divided into 3 parts by pectoralis minor. 1st part: superior thoracic. 2nd part: thoracoacromial (pectoral/deltoid/acromial/clavicular) + lateral thoracic. 3rd part: subscapular (circumflex scapular + thoracodorsal) + anterior and posterior circumflex humeral.

Brachial artery: profunda brachii (radial nerve in spiral groove; radial + middle collateral arteries). Superior and inferior ulnar collateral arteries form cubital anastomosis. Divides at cubital fossa into:

Radial artery: radial recurrent (branch), superficial palmar branch (branch), dorsal carpal arch (branch) → dorsal metacarpal → dorsal digital; deep palmar arch (main) → palmar metacarpal arteries, princeps pollicis, radialis indicis.

Ulnar artery: ulnar recurrent (branch), dorsal carpal branch (branch), common interosseous artery (branch) → anterior interosseous (main) + posterior interosseous (+ interosseous recurrent); superficial palmar arch → common palmar digital → proper palmar digital arteries.`,
  },

  /* ── Head & Neck: External Carotid ──────────────────────── */
  headNeckExternal: {
    title: 'Head & Neck — External Carotid',
    subtitle: 'External Carotid Artery and its Branches',
    nodes: [
      { id:'hn_1',  label:'Common Carotid Artery',               parentId:null,    isBranch:false },
      { id:'hn_ic', label:'Internal Carotid Artery',             parentId:'hn_1',  isBranch:true  },
      { id:'hn_2',  label:'External Carotid Artery',             parentId:'hn_1',  isBranch:false },
      { id:'hn_3',  label:'Superior Thyroid Artery',             parentId:'hn_2',  isBranch:true  },
      { id:'hn_s1', label:'Superior Laryngeal Artery',           parentId:'hn_3',  isBranch:false },
      { id:'hn_s2', label:'Cricothyroid Branch',                 parentId:'hn_3',  isBranch:true  },
      { id:'hn_4',  label:'Lingual Artery',                      parentId:'hn_2',  isBranch:true  },
      { id:'hn_l1', label:'Dorsal Lingual Branches',             parentId:'hn_4',  isBranch:true  },
      { id:'hn_l2', label:'Sublingual Artery',                   parentId:'hn_4',  isBranch:true  },
      { id:'hn_l3', label:'Deep Lingual Artery',                 parentId:'hn_4',  isBranch:false },
      { id:'hn_5',  label:'Facial Artery',                       parentId:'hn_2',  isBranch:true  },
      { id:'hn_f1', label:'Ascending Palatine Artery',           parentId:'hn_5',  isBranch:true  },
      { id:'hn_f2', label:'Tonsillar Branch (facial)',           parentId:'hn_5',  isBranch:true  },
      { id:'hn_f3', label:'Submental Artery',                    parentId:'hn_5',  isBranch:true  },
      { id:'hn_f4', label:'Inferior Labial Artery',              parentId:'hn_5',  isBranch:true  },
      { id:'hn_f5', label:'Superior Labial Artery',              parentId:'hn_5',  isBranch:false },
      { id:'hn_f6', label:'Angular Artery',                      parentId:'hn_5',  isBranch:false },
      { id:'hn_6',  label:'Ascending Pharyngeal Artery',         parentId:'hn_2',  isBranch:true  },
      { id:'hn_ap1',label:'Pharyngeal Branches',                 parentId:'hn_6',  isBranch:true  },
      { id:'hn_ap2',label:'Inferior Tympanic Artery',            parentId:'hn_6',  isBranch:true  },
      { id:'hn_ap3',label:'Posterior Meningeal Artery',          parentId:'hn_6',  isBranch:true  },
      { id:'hn_7',  label:'Occipital Artery',                    parentId:'hn_2',  isBranch:true  },
      { id:'hn_o1', label:'Sternocleidomastoid Branches',        parentId:'hn_7',  isBranch:true  },
      { id:'hn_o2', label:'Meningeal Branch of Occipital',       parentId:'hn_7',  isBranch:true  },
      { id:'hn_o3', label:'Occipital Branches (scalp)',          parentId:'hn_7',  isBranch:false },
      { id:'hn_8',  label:'Posterior Auricular Artery',          parentId:'hn_2',  isBranch:true  },
      { id:'hn_pa1',label:'Stylomastoid Artery',                 parentId:'hn_8',  isBranch:false },
      { id:'hn_pa2',label:'Auricular Branch (post. auricular)',  parentId:'hn_8',  isBranch:true  },
      { id:'hn_9',  label:'Superficial Temporal Artery',         parentId:'hn_2',  isBranch:false },
      { id:'hn_st1',label:'Transverse Facial Artery',            parentId:'hn_9',  isBranch:true  },
      { id:'hn_st2',label:'Middle Temporal Artery',              parentId:'hn_9',  isBranch:true  },
      { id:'hn_st3',label:'Zygomaticotemporal Branch (STA)',     parentId:'hn_9',  isBranch:true  },
      { id:'hn_st4',label:'Frontal Branch (STA)',                parentId:'hn_9',  isBranch:false },
      { id:'hn_st5',label:'Parietal Branch (STA)',               parentId:'hn_9',  isBranch:true  },
      { id:'hn_10', label:'Maxillary Artery',                    parentId:'hn_2',  isBranch:false },
      { id:'hn_m1', label:'Deep Auricular Artery',               parentId:'hn_10', isBranch:true  },
      { id:'hn_m2', label:'Anterior Tympanic Artery',            parentId:'hn_10', isBranch:true  },
      { id:'hn_m3', label:'Middle Meningeal Artery',             parentId:'hn_10', isBranch:true  },
      { id:'hn_mm1',label:'Frontal Branch of Middle Meningeal',  parentId:'hn_m3', isBranch:false },
      { id:'hn_mm2',label:'Parietal Branch of Middle Meningeal', parentId:'hn_m3', isBranch:true  },
      { id:'hn_m4', label:'Accessory Meningeal Artery',          parentId:'hn_10', isBranch:true  },
      { id:'hn_m5', label:'Inferior Alveolar Artery',            parentId:'hn_10', isBranch:true  },
      { id:'hn_ia1',label:'Mylohyoid Branch',                    parentId:'hn_m5', isBranch:true  },
      { id:'hn_ia2',label:'Inferior Dental Branches',            parentId:'hn_m5', isBranch:true  },
      { id:'hn_ia3',label:'Mental Branch',                       parentId:'hn_m5', isBranch:false },
      { id:'hn_m6', label:'Masseteric Artery',                   parentId:'hn_10', isBranch:true  },
      { id:'hn_m7', label:'Deep Temporal Arteries (ant.+post.)', parentId:'hn_10', isBranch:true  },
      { id:'hn_m8', label:'Pterygoid Branches',                  parentId:'hn_10', isBranch:true  },
      { id:'hn_m9', label:'Buccal Artery',                       parentId:'hn_10', isBranch:true  },
      { id:'hn_m10',label:'Posterior Superior Alveolar Artery',  parentId:'hn_10', isBranch:true  },
      { id:'hn_m11',label:'Infraorbital Artery',                 parentId:'hn_10', isBranch:false },
      { id:'hn_io1',label:'Anterior Superior Alveolar Artery',   parentId:'hn_m11',isBranch:false },
      { id:'hn_m12',label:'Greater Palatine Artery',             parentId:'hn_10', isBranch:true  },
      { id:'hn_gp1',label:'Lesser Palatine Arteries',            parentId:'hn_m12',isBranch:true  },
      { id:'hn_m13',label:'Pharyngeal Branch (pterygopalatine)', parentId:'hn_10', isBranch:true  },
      { id:'hn_m14',label:'Artery of Pterygoid Canal',           parentId:'hn_10', isBranch:true  },
      { id:'hn_m15',label:'Sphenopalatine Artery',               parentId:'hn_10', isBranch:false },
      { id:'hn_sp1',label:'Posterior Lateral Nasal Arteries',    parentId:'hn_m15',isBranch:false },
      { id:'hn_sp2',label:'Posterior Septal Arteries',           parentId:'hn_m15',isBranch:true  },
    ],
    explanation:
`External carotid artery — 8 branches in 4 groups:

ANTERIOR: Superior thyroid (superior laryngeal, cricothyroid branch). Lingual (dorsal lingual, sublingual, deep lingual terminal). Facial (ascending palatine, tonsillar, submental, inferior labial, superior labial, angular terminal — anastomoses with dorsal nasal from ophthalmic artery).

MEDIAL: Ascending pharyngeal (pharyngeal branches, inferior tympanic, posterior meningeal).

POSTERIOR: Occipital (SCM branches, meningeal branch, scalp terminal). Posterior auricular (stylomastoid — facial nerve canal, auricular branch).

TERMINAL: Superficial temporal (transverse facial, middle temporal, zygomaticotemporal, frontal + parietal scalp branches). Maxillary artery (3 parts): 1st (mandibular): deep auricular, anterior tympanic, middle meningeal (frontal + parietal branches — ruptured in extradural haematoma), accessory meningeal, inferior alveolar (mylohyoid branch, dental branches, mental branch). 2nd (pterygoid): masseteric, deep temporals, pterygoid branches, buccal. 3rd (pterygopalatine): posterior superior alveolar, infraorbital (anterior superior alveolar), greater palatine (lesser palatine), pharyngeal branch, artery of pterygoid canal, sphenopalatine (posterior lateral nasal + posterior septal — Kiesselbach's area epistaxis).`,
  },

  /* ── Head & Neck: Internal Carotid + Orbit ───────────────── */
  headNeckInternal: {
    title: 'Head & Neck — Internal Carotid & Orbit',
    subtitle: 'Internal Carotid Artery and Ophthalmic Branches',
    nodes: [
      { id:'ic_1',  label:'Internal Carotid Artery',             parentId:null,    isBranch:false },
      { id:'ic_2',  label:'Ophthalmic Artery',                   parentId:'ic_1',  isBranch:true  },
      { id:'ic_o1', label:'Central Retinal Artery',              parentId:'ic_2',  isBranch:false },
      { id:'ic_o2', label:'Lacrimal Artery',                     parentId:'ic_2',  isBranch:true  },
      { id:'ic_l1', label:'Lateral Palpebral Arteries',          parentId:'ic_o2', isBranch:false },
      { id:'ic_l2', label:'Zygomatic Branches (lacrimal)',       parentId:'ic_o2', isBranch:true  },
      { id:'ic_o3', label:'Short Posterior Ciliary Arteries',    parentId:'ic_2',  isBranch:true  },
      { id:'ic_o4', label:'Long Posterior Ciliary Arteries',     parentId:'ic_2',  isBranch:true  },
      { id:'ic_o5', label:'Anterior Ciliary Arteries',           parentId:'ic_2',  isBranch:true  },
      { id:'ic_o6', label:'Supraorbital Artery',                 parentId:'ic_2',  isBranch:true  },
      { id:'ic_o7', label:'Anterior Ethmoidal Artery',           parentId:'ic_2',  isBranch:true  },
      { id:'ic_e1', label:'Anterior Meningeal Branch',           parentId:'ic_o7', isBranch:true  },
      { id:'ic_e2', label:'Anterior Nasal Branches',             parentId:'ic_o7', isBranch:false },
      { id:'ic_o8', label:'Posterior Ethmoidal Artery',          parentId:'ic_2',  isBranch:true  },
      { id:'ic_o9', label:'Medial Palpebral Arteries',           parentId:'ic_2',  isBranch:true  },
      { id:'ic_o10',label:'Supratrochlear Artery',               parentId:'ic_2',  isBranch:true  },
      { id:'ic_o11',label:'Dorsal Nasal Artery',                 parentId:'ic_2',  isBranch:false },
      { id:'ic_3',  label:'Posterior Communicating Artery (ICA)',parentId:'ic_1',  isBranch:true  },
      { id:'ic_4',  label:'Anterior Choroidal Artery',           parentId:'ic_1',  isBranch:true  },
      { id:'ic_ac1',label:'Choroid Plexus Branches',             parentId:'ic_4',  isBranch:false },
      { id:'ic_5',  label:'Anterior Cerebral Artery (A1)',       parentId:'ic_1',  isBranch:false },
      { id:'ic_6',  label:'Middle Cerebral Artery (M1)',         parentId:'ic_1',  isBranch:false },
    ],
    explanation:
`Internal carotid artery has no cervical branches. Intracranially (supraclinoid):

Ophthalmic artery (enters orbit via optic canal): central retinal artery (occlusion = sudden painless monocular blindness, cherry-red spot), lacrimal artery (lateral palpebral + zygomatic branches), short posterior ciliary arteries (choroid), long posterior ciliary arteries (iris/ciliary body), anterior ciliary arteries, supraorbital artery, anterior ethmoidal artery (anterior meningeal branch + anterior nasal branches), posterior ethmoidal artery, medial palpebral arteries, supratrochlear artery, dorsal nasal artery (terminal — anastomoses with angular artery from facial artery).

Posterior communicating artery: connects ICA to PCA. Aneurysm at this site compresses CN III (oculomotor) → painful fixed dilated pupil + ptosis + down-and-out eye.

Anterior choroidal artery: posterior limb internal capsule, hippocampus, amygdala, choroid plexus. Occlusion → contralateral hemiplegia + hemisensory loss + hemianopia.

ICA terminal bifurcation: ACA (A1) + MCA (M1).`,
  },

  /* ── Brain: Cerebral Arteries ────────────────────────────── */
  brain: {
    title: 'Brain — Cerebral Arteries',
    subtitle: 'Anterior and Posterior Cerebral Circulation',
    nodes: [
      { id:'br_1',  label:'Anterior Cerebral Artery (A1)',       parentId:null,    isBranch:false },
      { id:'br_ac', label:'Anterior Communicating Artery',       parentId:'br_1',  isBranch:true  },
      { id:'br_2',  label:'Anterior Cerebral Artery (A2)',       parentId:'br_1',  isBranch:false },
      { id:'br_a1', label:'Recurrent Artery of Heubner',         parentId:'br_2',  isBranch:true  },
      { id:'br_a2', label:'Orbitofrontal Artery (ACA)',          parentId:'br_2',  isBranch:true  },
      { id:'br_a3', label:'Frontopolar Artery',                  parentId:'br_2',  isBranch:true  },
      { id:'br_3',  label:'Callosomarginal Artery',              parentId:'br_2',  isBranch:false },
      { id:'br_c1', label:'Anterior Internal Frontal Artery',    parentId:'br_3',  isBranch:true  },
      { id:'br_c2', label:'Middle Internal Frontal Artery',      parentId:'br_3',  isBranch:true  },
      { id:'br_c3', label:'Posterior Internal Frontal Artery',   parentId:'br_3',  isBranch:true  },
      { id:'br_c4', label:'Paracentral Artery (ACA)',            parentId:'br_3',  isBranch:true  },
      { id:'br_4',  label:'Pericallosal Artery',                 parentId:'br_2',  isBranch:false },
      { id:'br_p1', label:'Superior Internal Parietal Artery',   parentId:'br_4',  isBranch:false },
      { id:'br_p2', label:'Inferior Internal Parietal Artery',   parentId:'br_4',  isBranch:true  },
      { id:'br_p3', label:'Precuneal Artery',                    parentId:'br_4',  isBranch:true  },
      { id:'br_5',  label:'Middle Cerebral Artery (M1)',         parentId:null,    isBranch:false },
      { id:'br_ls', label:'Lenticulostriate Arteries',           parentId:'br_5',  isBranch:true  },
      { id:'br_6',  label:'Middle Cerebral Artery (M2)',         parentId:'br_5',  isBranch:false },
      { id:'br_sd', label:'Superior Division (MCA)',             parentId:'br_6',  isBranch:false },
      { id:'br_s1', label:'Lateral Orbitofrontal Artery',        parentId:'br_sd', isBranch:true  },
      { id:'br_s2', label:'Prefrontal Artery',                   parentId:'br_sd', isBranch:true  },
      { id:'br_s3', label:'Precentral (Prerolandic) Artery',     parentId:'br_sd', isBranch:false },
      { id:'br_s4', label:'Central (Rolandic) Artery',           parentId:'br_sd', isBranch:false },
      { id:'br_s5', label:'Anterior Parietal Artery',            parentId:'br_sd', isBranch:false },
      { id:'br_id', label:'Inferior Division (MCA)',             parentId:'br_6',  isBranch:true  },
      { id:'br_i1', label:'Posterior Parietal Artery',           parentId:'br_id', isBranch:false },
      { id:'br_i2', label:'Angular Artery',                      parentId:'br_id', isBranch:false },
      { id:'br_i3', label:'Posterior Temporal Artery',           parentId:'br_id', isBranch:false },
      { id:'br_i4', label:'Middle Temporal Artery',              parentId:'br_id', isBranch:true  },
      { id:'br_i5', label:'Anterior Temporal Artery',            parentId:'br_id', isBranch:true  },
      { id:'br_vt', label:'Vertebral Artery (intracranial)',     parentId:null,    isBranch:false },
      { id:'br_pi', label:'Posterior Inferior Cerebellar Artery (PICA)',parentId:'br_vt',isBranch:true },
      { id:'br_as', label:'Anterior Spinal Artery',              parentId:'br_vt', isBranch:true  },
      { id:'br_ps', label:'Posterior Spinal Artery',             parentId:'br_vt', isBranch:true  },
      { id:'br_7',  label:'Basilar Artery',                      parentId:'br_vt', isBranch:false },
      { id:'br_ai', label:'Anterior Inferior Cerebellar Artery (AICA)',parentId:'br_7',isBranch:true },
      { id:'br_lab',label:'Labyrinthine (Internal Auditory) Artery',parentId:'br_7',isBranch:true },
      { id:'br_po', label:'Pontine Arteries',                    parentId:'br_7',  isBranch:true  },
      { id:'br_sc', label:'Superior Cerebellar Artery (SCA)',    parentId:'br_7',  isBranch:true  },
      { id:'br_8',  label:'Posterior Cerebral Artery (P1)',      parentId:'br_7',  isBranch:false },
      { id:'br_pc', label:'Posterior Communicating Artery (PCA)',parentId:'br_8',  isBranch:true  },
      { id:'br_9',  label:'Posterior Cerebral Artery (P2)',      parentId:'br_8',  isBranch:false },
      { id:'br_th', label:'Thalamoperforating Arteries',         parentId:'br_9',  isBranch:true  },
      { id:'br_tg', label:'Thalamogeniculate Arteries',          parentId:'br_9',  isBranch:true  },
      { id:'br_pch',label:'Posterior Choroidal Arteries',        parentId:'br_9',  isBranch:true  },
      { id:'br_tb', label:'Temporal Branches (PCA)',             parentId:'br_9',  isBranch:true  },
      { id:'br_ca', label:'Calcarine Artery',                    parentId:'br_9',  isBranch:false },
      { id:'br_po2',label:'Parieto-occipital Artery',            parentId:'br_9',  isBranch:true  },
      { id:'br_sp', label:'Splenial (Posterior Pericallosal) Artery',parentId:'br_9',isBranch:true },
    ],
    explanation:
`ANTERIOR CIRCULATION — ACA: A1 gives anterior communicating artery (connects both ACAs; aneurysm rupture = bifrontal SAH). A2 gives: recurrent artery of Heubner (head of caudate, anterior internal capsule), orbitofrontal, frontopolar, then callosomarginal (anterior/middle/posterior internal frontal, paracentral — leg motor area) + pericallosal (superior/inferior internal parietal, precuneal — ACA territory = medial frontal + parietal).

MCA: M1 gives lenticulostriate arteries (penetrating to putamen, caudate, posterior limb internal capsule — occlusion = contralateral hemiplegia/hemianesthesia + aphasia if dominant). M2 divides into superior division (lateral orbitofrontal, prefrontal, precentral/prerolandic, central/rolandic [hand-face motor], anterior parietal) and inferior division (posterior parietal, angular artery [Wernicke's area], posterior temporal, middle temporal, anterior temporal).

POSTERIOR CIRCULATION: Vertebral artery (intracranial) gives PICA (lateral medulla + inferior cerebellum; occlusion = Wallenberg syndrome), anterior spinal artery, posterior spinal artery, then joins to form basilar artery. Basilar gives: AICA (lateral pons + anterior inferior cerebellum), labyrinthine/internal auditory artery (inner ear), pontine arteries, SCA (superior cerebellum + midbrain). Basilar terminates as PCAs: P1 gives PCoA (connects to ICA). P2 gives: thalamoperforating (medial thalamus), thalamogeniculate (lateral thalamus + geniculate bodies), posterior choroidal, temporal branches, calcarine artery (primary visual cortex — occlusion = contralateral homonymous hemianopia with macular sparing), parieto-occipital, splenial.`,
  },

  /* ── Thorax ──────────────────────────────────────────────── */
  thorax: {
    title: 'Thorax',
    subtitle: 'Thoracic Aorta, Chest Wall, and Internal Thoracic Branches',
    nodes: [
      { id:'th_1',  label:'Aortic Arch',                         parentId:null,    isBranch:false },
      { id:'th_bc', label:'Brachiocephalic Trunk',               parentId:'th_1',  isBranch:false },
      { id:'th_rs', label:'Right Common Carotid Artery',         parentId:'th_bc', isBranch:false },
      { id:'th_rv', label:'Right Subclavian Artery',             parentId:'th_bc', isBranch:true  },
      { id:'th_lc', label:'Left Common Carotid Artery',          parentId:'th_1',  isBranch:true  },
      { id:'th_ls', label:'Left Subclavian Artery',              parentId:'th_1',  isBranch:true  },
      { id:'th_2',  label:'Descending Thoracic Aorta',           parentId:'th_1',  isBranch:false },
      { id:'th_pi', label:'Posterior Intercostal Arteries (3-11)',parentId:'th_2',  isBranch:true  },
      { id:'th_d1', label:'Dorsal Branch (intercostal)',         parentId:'th_pi', isBranch:true  },
      { id:'th_d2', label:'Lateral Cutaneous Branch (intercostal)',parentId:'th_pi',isBranch:true  },
      { id:'th_sub',label:'Subcostal Artery (T12)',              parentId:'th_2',  isBranch:true  },
      { id:'th_sp', label:'Superior Phrenic Arteries',           parentId:'th_2',  isBranch:true  },
      { id:'th_br', label:'Bronchial Arteries',                  parentId:'th_2',  isBranch:true  },
      { id:'th_oe', label:'Oesophageal Arteries',                parentId:'th_2',  isBranch:true  },
      { id:'th_pe', label:'Pericardial Arteries',                parentId:'th_2',  isBranch:true  },
      { id:'th_me', label:'Mediastinal Branches (thoracic aorta)',parentId:'th_2',  isBranch:true  },
      { id:'th_it', label:'Internal Thoracic Artery',            parentId:null,    isBranch:false },
      { id:'th_p',  label:'Pericardiophrenic Artery',            parentId:'th_it', isBranch:true  },
      { id:'th_an', label:'Anterior Intercostal Branches (1-6)', parentId:'th_it', isBranch:true  },
      { id:'th_per',label:'Perforating Branches (ITA)',          parentId:'th_it', isBranch:true  },
      { id:'th_ms', label:'Mediastinal Branches (ITA)',          parentId:'th_it', isBranch:true  },
      { id:'th_3',  label:'Musculophrenic Artery',               parentId:'th_it', isBranch:false },
      { id:'th_mp1',label:'Lower Intercostal Branches (7th-9th)',parentId:'th_3',  isBranch:true  },
      { id:'th_4',  label:'Superior Epigastric Artery',          parentId:'th_it', isBranch:false },
      { id:'th_se1',label:'Anastomosis with Inferior Epigastric',parentId:'th_4',  isBranch:false },
    ],
    explanation:
`Aortic arch (3 branches left to right): brachiocephalic trunk (right common carotid + right subclavian), left common carotid, left subclavian. Ligamentum arteriosum connects arch to left pulmonary artery (ductus arteriosus remnant — coarctation occurs just distal).

Descending thoracic aorta (T4-T12): posterior intercostal arteries 3-11 (1st + 2nd from supreme intercostal of costocervical trunk), each giving dorsal branch (spinal cord, back muscles) and lateral cutaneous branch. Also: subcostal artery (T12), superior phrenic arteries, bronchial arteries (2 left, 1 right), oesophageal arteries, pericardial and mediastinal branches.

Internal thoracic artery (from subclavian, lateral to sternum): pericardiophrenic artery (with phrenic nerve), anterior intercostal branches 1-6 (anastomose with posterior intercostals), perforating branches (breast, pectoralis major), mediastinal branches. Divides at 6th intercostal space into musculophrenic artery (intercostal branches 7-9 + diaphragm) and superior epigastric artery (enters rectus sheath, anastomoses with inferior epigastric — key collateral in aortic coarctation; also used in CABG).`,
  },

  /* ── Abdomen ─────────────────────────────────────────────── */
  abdomen: {
    title: 'Abdomen',
    subtitle: 'Abdominal Aorta and its Branches',
    nodes: [
      { id:'ab_1',  label:'Abdominal Aorta',                     parentId:null,    isBranch:false },
      { id:'ab_2',  label:'Coeliac Trunk',                       parentId:'ab_1',  isBranch:true  },
      { id:'ab_c1', label:'Left Gastric Artery',                 parentId:'ab_2',  isBranch:true  },
      { id:'ab_c2', label:'Splenic Artery',                      parentId:'ab_2',  isBranch:false },
      { id:'ab_sp1',label:'Short Gastric Arteries',              parentId:'ab_c2', isBranch:true  },
      { id:'ab_sp2',label:'Left Gastroomental Artery',           parentId:'ab_c2', isBranch:true  },
      { id:'ab_sp3',label:'Dorsal Pancreatic Artery',            parentId:'ab_c2', isBranch:true  },
      { id:'ab_sp4',label:'Pancreatic Branches (splenic)',       parentId:'ab_c2', isBranch:true  },
      { id:'ab_c3', label:'Common Hepatic Artery',               parentId:'ab_2',  isBranch:false },
      { id:'ab_h5', label:'Right Gastric Artery',                parentId:'ab_c3', isBranch:true  },
      { id:'ab_h6', label:'Gastroduodenal Artery',               parentId:'ab_c3', isBranch:true  },
      { id:'ab_g1', label:'Right Gastroomental Artery',          parentId:'ab_h6', isBranch:false },
      { id:'ab_g2', label:'Superior Pancreaticoduodenal Artery', parentId:'ab_h6', isBranch:true  },
      { id:'ab_h1', label:'Proper Hepatic Artery',               parentId:'ab_c3', isBranch:false },
      { id:'ab_h2', label:'Right Hepatic Artery',                parentId:'ab_h1', isBranch:false },
      { id:'ab_h3', label:'Cystic Artery',                       parentId:'ab_h2', isBranch:true  },
      { id:'ab_h4', label:'Left Hepatic Artery',                 parentId:'ab_h1', isBranch:true  },
      { id:'ab_3',  label:'Superior Mesenteric Artery',          parentId:'ab_1',  isBranch:true  },
      { id:'ab_sm1',label:'Inferior Pancreaticoduodenal Artery', parentId:'ab_3',  isBranch:true  },
      { id:'ab_sm2',label:'Intestinal Arteries (Jejunal/Ileal)', parentId:'ab_3',  isBranch:true  },
      { id:'ab_sm3',label:'Ileocolic Artery',                    parentId:'ab_3',  isBranch:false },
      { id:'ab_ic1',label:'Appendicular Artery',                 parentId:'ab_sm3',isBranch:true  },
      { id:'ab_ic2',label:'Caecal Arteries (ant. + post.)',      parentId:'ab_sm3',isBranch:true  },
      { id:'ab_ic4',label:'Ileal Branch (ileocolic)',            parentId:'ab_sm3',isBranch:false },
      { id:'ab_sm4',label:'Right Colic Artery',                  parentId:'ab_3',  isBranch:true  },
      { id:'ab_sm5',label:'Middle Colic Artery',                 parentId:'ab_3',  isBranch:true  },
      { id:'ab_4',  label:'Inferior Mesenteric Artery',          parentId:'ab_1',  isBranch:true  },
      { id:'ab_im1',label:'Left Colic Artery',                   parentId:'ab_4',  isBranch:false },
      { id:'ab_im2',label:'Sigmoidal Arteries',                  parentId:'ab_4',  isBranch:true  },
      { id:'ab_im3',label:'Superior Rectal Artery',              parentId:'ab_4',  isBranch:false },
      { id:'ab_sr1',label:'Right Branch (superior rectal)',      parentId:'ab_im3',isBranch:false },
      { id:'ab_sr2',label:'Left Branch (superior rectal)',       parentId:'ab_im3',isBranch:true  },
      { id:'ab_5',  label:'Renal Arteries',                      parentId:'ab_1',  isBranch:true  },
      { id:'ab_r1', label:'Inferior Suprarenal Artery',          parentId:'ab_5',  isBranch:true  },
      { id:'ab_r2', label:'Anterior Division (renal)',           parentId:'ab_5',  isBranch:false },
      { id:'ab_r7', label:'Posterior Division (renal)',          parentId:'ab_5',  isBranch:true  },
      { id:'ab_r8', label:'Interlobar Arteries',                 parentId:'ab_r2', isBranch:false },
      { id:'ab_r9', label:'Arcuate Arteries (renal)',            parentId:'ab_r8', isBranch:false },
      { id:'ab_r10',label:'Interlobular Arteries',               parentId:'ab_r9', isBranch:false },
      { id:'ab_r11',label:'Afferent Glomerular Arterioles',      parentId:'ab_r10',isBranch:false },
      { id:'ab_6',  label:'Middle Suprarenal Arteries',          parentId:'ab_1',  isBranch:true  },
      { id:'ab_7',  label:'Gonadal Arteries',                    parentId:'ab_1',  isBranch:true  },
      { id:'ab_8',  label:'Lumbar Arteries (1st-4th)',           parentId:'ab_1',  isBranch:true  },
      { id:'ab_lu1',label:'Dorsal Branch (lumbar)',              parentId:'ab_8',  isBranch:true  },
      { id:'ab_lu2',label:'Spinal Branch (lumbar)',              parentId:'ab_8',  isBranch:true  },
      { id:'ab_9',  label:'Median Sacral Artery',                parentId:'ab_1',  isBranch:true  },
      { id:'ab_10', label:'Common Iliac Artery',                 parentId:'ab_1',  isBranch:false },
    ],
    explanation:
`Abdominal aorta (T12-L4) branches:

UNPAIRED ANTERIOR (VISCERAL): Coeliac trunk (T12): left gastric (lesser curve), splenic artery (short gastrics, left gastroomental, dorsal pancreatic, pancreatic branches), common hepatic (right gastric, gastroduodenal [right gastroomental + superior pancreaticoduodenal], proper hepatic [right hepatic + cystic + left hepatic]).

SMA (L1, behind pancreatic neck): inferior pancreaticoduodenal, intestinal arteries (jejunal/ileal arcades), ileocolic (appendicular + caecal arteries + ileal branch), right colic, middle colic. Marginal artery of Drummond links SMA-IMA territories.

IMA (L3): left colic (ascending + descending branches), sigmoidal arteries, superior rectal artery (right + left branches — anastomoses with middle rectal from internal iliac and inferior rectal from pudendal; Sudeck's point = critical anastomosis near rectosigmoid junction).

PAIRED LATERAL: Middle suprarenals, renal arteries (inferior suprarenal, anterior + posterior divisions; interlobar -> arcuate -> interlobular -> afferent glomerular arterioles), gonadal arteries.

PARIETAL: Lumbar arteries 1-4 (dorsal + spinal branches), median sacral artery (terminal).

Terminal bifurcation (L4): common iliac arteries.`,
  },

  /* ── Pelvis: Male ────────────────────────────────────────── */
  pelvisMale: {
    title: 'Pelvis — Male',
    subtitle: 'Internal Iliac Artery: Male Pelvic Branches',
    nodes: [
      { id:'pm_1',  label:'Internal Iliac Artery',               parentId:null,    isBranch:false },
      { id:'pm_ad', label:'Anterior Division',                   parentId:'pm_1',  isBranch:false },
      { id:'pm_ob', label:'Obturator Artery',                    parentId:'pm_ad', isBranch:true  },
      { id:'pm_o1', label:'Anterior Branch (obturator)',         parentId:'pm_ob', isBranch:true  },
      { id:'pm_o2', label:'Posterior Branch (obturator)',        parentId:'pm_ob', isBranch:false },
      { id:'pm_o3', label:'Acetabular Branch (obturator)',       parentId:'pm_ob', isBranch:true  },
      { id:'pm_um', label:'Umbilical Artery',                    parentId:'pm_ad', isBranch:true  },
      { id:'pm_sv', label:'Superior Vesical Artery',             parentId:'pm_um', isBranch:false },
      { id:'pm_iv', label:'Inferior Vesical Artery',             parentId:'pm_ad', isBranch:true  },
      { id:'pm_i1', label:'Prostatic Branches',                  parentId:'pm_iv', isBranch:false },
      { id:'pm_i2', label:'Vesical Branches',                    parentId:'pm_iv', isBranch:true  },
      { id:'pm_dr', label:'Deferential Artery (Artery to Vas)',  parentId:'pm_ad', isBranch:true  },
      { id:'pm_mr', label:'Middle Rectal Artery',                parentId:'pm_ad', isBranch:true  },
      { id:'pm_pu', label:'Internal Pudendal Artery',            parentId:'pm_ad', isBranch:false },
      { id:'pm_p1', label:'Inferior Rectal Artery',              parentId:'pm_pu', isBranch:true  },
      { id:'pm_p2', label:'Perineal Artery',                     parentId:'pm_pu', isBranch:true  },
      { id:'pm_p3', label:'Posterior Scrotal Branches',          parentId:'pm_p2', isBranch:false },
      { id:'pm_p4', label:'Artery of the Bulb of Penis',         parentId:'pm_pu', isBranch:true  },
      { id:'pm_p5', label:'Urethral Artery',                     parentId:'pm_pu', isBranch:true  },
      { id:'pm_p6', label:'Deep Artery of Penis',                parentId:'pm_pu', isBranch:false },
      { id:'pm_p7', label:'Dorsal Artery of Penis',              parentId:'pm_pu', isBranch:false },
      { id:'pm_ig', label:'Inferior Gluteal Artery',             parentId:'pm_ad', isBranch:true  },
      { id:'pm_pd', label:'Posterior Division',                  parentId:'pm_1',  isBranch:true  },
      { id:'pm_sg', label:'Superior Gluteal Artery',             parentId:'pm_pd', isBranch:false },
      { id:'pm_s1', label:'Superficial Branch (sup. gluteal)',   parentId:'pm_sg', isBranch:true  },
      { id:'pm_s2', label:'Deep Branch (sup. gluteal)',          parentId:'pm_sg', isBranch:false },
      { id:'pm_il', label:'Iliolumbar Artery',                   parentId:'pm_pd', isBranch:true  },
      { id:'pm_il1',label:'Lumbar Branch (iliolumbar)',          parentId:'pm_il', isBranch:true  },
      { id:'pm_il2',label:'Iliac Branch (iliolumbar)',           parentId:'pm_il', isBranch:false },
      { id:'pm_ls', label:'Lateral Sacral Arteries',             parentId:'pm_pd', isBranch:true  },
      { id:'pm_ls1',label:'Spinal Branches (lateral sacral)',    parentId:'pm_ls', isBranch:false },
    ],
    explanation:
`Internal iliac (hypogastric) artery divides into anterior and posterior divisions.

ANTERIOR DIVISION: Obturator artery (anterior branch to adductors, posterior branch to adductors/hamstrings, acetabular branch via ligamentum teres to femoral head). Umbilical artery (patent proximal part → superior vesical artery to bladder dome; obliterated distally = medial umbilical ligament). Inferior vesical artery (prostatic branches to prostate + seminal vesicles, vesical branches). Deferential artery (vas deferens + seminal vesicle). Middle rectal artery (rectum, anastomoses with superior rectal from IMA + inferior rectal from pudendal). Internal pudendal artery (exits via greater sciatic foramen, enters lesser sciatic foramen, travels in Alcock's canal on obturator internus): inferior rectal (external anal sphincter), perineal (posterior scrotal branches), artery of bulb of penis (corpus spongiosum), urethral artery, deep artery of penis (corpora cavernosa — erectile function), dorsal artery of penis (glans + prepuce). Inferior gluteal artery.

POSTERIOR DIVISION: Superior gluteal (superficial branch to gluteus maximus, deep branch to gluteus medius/minimus/TFL). Iliolumbar (lumbar branch + iliac branch). Lateral sacral arteries (spinal branches through sacral foramina).`,
  },

  /* ── Pelvis: Female ──────────────────────────────────────── */
  pelvisFemale: {
    title: 'Pelvis — Female',
    subtitle: 'Internal Iliac Artery: Female Pelvic Branches',
    nodes: [
      { id:'pf_1',  label:'Internal Iliac Artery',               parentId:null,    isBranch:false },
      { id:'pf_ad', label:'Anterior Division',                   parentId:'pf_1',  isBranch:false },
      { id:'pf_ob', label:'Obturator Artery',                    parentId:'pf_ad', isBranch:true  },
      { id:'pf_o1', label:'Anterior Branch (obturator)',         parentId:'pf_ob', isBranch:true  },
      { id:'pf_o2', label:'Posterior Branch (obturator)',        parentId:'pf_ob', isBranch:false },
      { id:'pf_um', label:'Umbilical Artery',                    parentId:'pf_ad', isBranch:true  },
      { id:'pf_sv', label:'Superior Vesical Artery',             parentId:'pf_um', isBranch:false },
      { id:'pf_iv', label:'Inferior Vesical Artery',             parentId:'pf_ad', isBranch:true  },
      { id:'pf_ut', label:'Uterine Artery',                      parentId:'pf_ad', isBranch:false },
      { id:'pf_u4', label:'Tubal Branch (uterine)',              parentId:'pf_ut', isBranch:true  },
      { id:'pf_u5', label:'Ovarian Branch (uterine)',            parentId:'pf_ut', isBranch:true  },
      { id:'pf_u6', label:'Vaginal Branch (uterine)',            parentId:'pf_ut', isBranch:true  },
      { id:'pf_u1', label:'Arcuate Arteries (uterine)',          parentId:'pf_ut', isBranch:false },
      { id:'pf_u2', label:'Radial Arteries (uterine)',           parentId:'pf_u1', isBranch:false },
      { id:'pf_u3', label:'Spiral Arteries',                     parentId:'pf_u2', isBranch:false },
      { id:'pf_va', label:'Vaginal Artery',                      parentId:'pf_ad', isBranch:true  },
      { id:'pf_v1', label:'Anterior Vaginal Branch',             parentId:'pf_va', isBranch:false },
      { id:'pf_v2', label:'Posterior Vaginal Branch',            parentId:'pf_va', isBranch:true  },
      { id:'pf_mr', label:'Middle Rectal Artery',                parentId:'pf_ad', isBranch:true  },
      { id:'pf_pu', label:'Internal Pudendal Artery',            parentId:'pf_ad', isBranch:false },
      { id:'pf_p1', label:'Inferior Rectal Artery',              parentId:'pf_pu', isBranch:true  },
      { id:'pf_p2', label:'Perineal Artery',                     parentId:'pf_pu', isBranch:true  },
      { id:'pf_p3', label:'Posterior Labial Branches',           parentId:'pf_p2', isBranch:false },
      { id:'pf_p4', label:'Artery of the Bulb of Vestibule',     parentId:'pf_pu', isBranch:true  },
      { id:'pf_p5', label:'Urethral Artery',                     parentId:'pf_pu', isBranch:true  },
      { id:'pf_p6', label:'Deep Artery of Clitoris',             parentId:'pf_pu', isBranch:false },
      { id:'pf_p7', label:'Dorsal Artery of Clitoris',           parentId:'pf_pu', isBranch:false },
      { id:'pf_ig', label:'Inferior Gluteal Artery',             parentId:'pf_ad', isBranch:true  },
      { id:'pf_pd', label:'Posterior Division',                  parentId:'pf_1',  isBranch:true  },
      { id:'pf_sg', label:'Superior Gluteal Artery',             parentId:'pf_pd', isBranch:false },
      { id:'pf_s1', label:'Superficial Branch (sup. gluteal)',   parentId:'pf_sg', isBranch:true  },
      { id:'pf_s2', label:'Deep Branch (sup. gluteal)',          parentId:'pf_sg', isBranch:false },
      { id:'pf_il', label:'Iliolumbar Artery',                   parentId:'pf_pd', isBranch:true  },
      { id:'pf_ls', label:'Lateral Sacral Arteries',             parentId:'pf_pd', isBranch:true  },
    ],
    explanation:
`ANTERIOR DIVISION: Obturator artery (anterior + posterior + acetabular branches). Umbilical artery (superior vesical). Inferior vesical artery. Uterine artery — crosses ureter at pelvic brim ("water under the bridge" — ligated in hysterectomy near ureter); gives tubal branch, ovarian branch (anastomoses with ovarian artery from aorta), vaginal branch; intramurally forms arcuate arteries → radial arteries → spiral arteries (remodel in pregnancy; failure → IUGR; shed in menstruation). Vaginal artery (anterior + posterior branches). Middle rectal artery. Internal pudendal artery (in Alcock's canal): inferior rectal, perineal (posterior labial branches), artery of vestibular bulb, urethral artery, deep artery of clitoris, dorsal artery of clitoris. Inferior gluteal artery.

POSTERIOR DIVISION: Superior gluteal (superficial + deep branches). Iliolumbar. Lateral sacral (spinal branches).

Key clinical: Uterine artery ligation for postpartum haemorrhage. Ureteric injury risk during hysterectomy. Spiral artery failure = placental insufficiency + IUGR.`,
  },

};
