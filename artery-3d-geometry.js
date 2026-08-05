/* =============================================================
   Artery 3D — Geometry Data
   window.ARTERY_3D_GEOMETRY

   BATCH 1 of 8: skeletal reference frame + the aorta and every
   vessel arising directly from it.

   COORDINATE FRAME
   ----------------
   Units: millimetres. Subject: adult male, 175 cm, anatomical position.

     Origin  x=0  median plane
             y=0  level of the T4/T5 intervertebral disc
             z=0  anterior surface of the T4 vertebral body

     +X  patient's LEFT          -X  patient's RIGHT
     +Y  superior                -Y  inferior
     +Z  anterior                -Z  posterior

   The origin is the sternal angle level, chosen because it is a real
   palpable landmark, it is where the aortic arch begins and ends, and
   it is the reference for the T4/T5 plane. In this frame the vertex of
   the skull is y=+355 and the sole of the foot is y=-1395, giving the
   175 cm stature.

   ACCURACY BASIS — read this before trusting a coordinate
   -------------------------------------------------------
   These coordinates are hand-authored from standard anatomical
   landmarks, vertebral levels and adult body proportions. They are NOT
   derived from segmented angiography. No open-licensed whole-body
   labelled arterial centreline dataset was retrievable; the published
   models that come closest (ADAN, ADAN-56) give vessel lengths and
   radii but not distributable 3D coordinates.

   What that means in practice:
     - TOPOLOGY is exact. Which vessel arises from which, in what order,
       comes from artery-assembly-data.js and is machine-verified.
     - ORIGIN LEVELS are reliable. Every origin is pinned to a vertebral
       level or bony landmark and asserted in the audit.
     - EXACT COURSE is representative, not patient-specific. A vessel's
       path between its origin and its destination is a smooth
       idealisation of the textbook course.

   Radii are true adult lumen radii in mm (radius, not diameter).

   VESSEL KEYS
   -----------
   Keys match artery-3d-topology.js instance keys:
     'L:<id>' / 'R:<id>'  for bilateral vessels
     '<id>'               for midline and unpaired vessels
   Any key not present in artery-assembly-data.js, or any vessel there
   without a key here, is reported by tools/audit-artery-3d.js.
   ============================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------------
     VERTEBRAL LEVEL TABLE
     y  = centre of the vertebral body
     z  = anterior surface of the vertebral body (drives the aorta's
          course, since the aorta lies directly on the column)
     w  = body width (coronal), d = body depth (AP)
     The z values encode the cervical lordosis, thoracic kyphosis and
     lumbar lordosis. They are why the abdominal aorta swings forward
     as it descends rather than running down a straight line.
     --------------------------------------------------------------- */
  var VERTEBRAE = [
    { id: 'C1',  y:  215,   z:   8, w: 26, d: 16 },
    { id: 'C2',  y:  193,   z:  14, w: 26, d: 17 },
    { id: 'C3',  y:  171,   z:  19, w: 25, d: 17 },
    { id: 'C4',  y:  151.5, z:  21, w: 25, d: 17 },
    { id: 'C5',  y:  132,   z:  19, w: 26, d: 17 },
    { id: 'C6',  y:  112.5, z:  14, w: 27, d: 18 },
    { id: 'C7',  y:   93,   z:   7, w: 28, d: 18 },
    { id: 'T1',  y:   73.5, z:   2, w: 30, d: 22 },
    { id: 'T2',  y:   52.5, z:   0, w: 31, d: 23 },
    { id: 'T3',  y:   31.5, z:  -1, w: 32, d: 24 },
    { id: 'T4',  y:   10.5, z:   0, w: 33, d: 25 },
    { id: 'T5',  y:  -11.5, z:  -4, w: 34, d: 26 },
    { id: 'T6',  y:  -34.5, z:  -9, w: 35, d: 27 },
    { id: 'T7',  y:  -57.5, z: -14, w: 36, d: 28 },
    { id: 'T8',  y:  -80.5, z: -16, w: 37, d: 29 },
    { id: 'T9',  y: -105.5, z: -15, w: 39, d: 30 },
    { id: 'T10', y: -130.5, z: -11, w: 41, d: 31 },
    { id: 'T11', y: -157,   z:  -4, w: 43, d: 32 },
    { id: 'T12', y: -184.5, z:   5, w: 45, d: 33 },
    { id: 'L1',  y: -222,   z:  14, w: 46, d: 33 },
    { id: 'L2',  y: -260,   z:  21, w: 48, d: 34 },
    { id: 'L3',  y: -298,   z:  25, w: 50, d: 35 },
    { id: 'L4',  y: -336,   z:  23, w: 51, d: 35 },
    { id: 'L5',  y: -374,   z:  14, w: 52, d: 36 },
    { id: 'S1',  y: -412,   z:   0, w: 52, d: 34 },
  ];

  /* Levels an exam will ask about, drawn as labelled markers. */
  var LEVEL_NOTES = {
    T4:  'Sternal angle plane. Arch of aorta begins and ends here.',
    T8:  'Caval opening of the diaphragm.',
    T10: 'Oesophageal hiatus.',
    T12: 'Aortic hiatus. Coeliac trunk arises at this level.',
    L1:  'Superior mesenteric artery. Transpyloric plane.',
    L2:  'Renal arteries. Termination of the spinal cord.',
    L3:  'Inferior mesenteric artery.',
    L4:  'Aortic bifurcation. Level of the iliac crests.',
  };

  /* ---------------------------------------------------------------
     SKELETAL REFERENCE
     Off by default. Its only job is to let you confirm that a vessel
     sits where it should. Generated procedurally from VERTEBRAE plus
     the few extra landmarks below.
     --------------------------------------------------------------- */
  var SKELETON = {
    vertebrae: VERTEBRAE,
    levelNotes: LEVEL_NOTES,

    /* Sternum: manubrium from the jugular notch down to the sternal
       angle (y=0 by definition), then the body. z is the posterior
       surface; thickness is added by the renderer. */
    sternum: {
      jugularNotch: { x: 0, y: 45,   z: 92 },
      sternalAngle: { x: 0, y: 0,    z: 95 },
      xiphoid:      { x: 0, y: -105, z: 78 },
      thickness: 11,
      width: { manubrium: 52, body: 34 },
    },

    /* Ribs 1-12. Each is an arc from the vertebral body round to the
       costal cartilage. 'drop' is how far the anterior end lies below
       the posterior end — this is what makes an anterior sternal
       landmark correspond to a vertebral level several segments lower,
       and it is worth seeing when checking the arch branches. */
    ribs: [
      { n: 1,  level: 'T1',  drop: 18, spread: 62,  reach: 74 },
      { n: 2,  level: 'T2',  drop: 26, spread: 78,  reach: 92 },
      { n: 3,  level: 'T3',  drop: 34, spread: 90,  reach: 104 },
      { n: 4,  level: 'T4',  drop: 42, spread: 100, reach: 112 },
      { n: 5,  level: 'T5',  drop: 50, spread: 107, reach: 118 },
      { n: 6,  level: 'T6',  drop: 58, spread: 112, reach: 120 },
      { n: 7,  level: 'T7',  drop: 66, spread: 115, reach: 118 },
      { n: 8,  level: 'T8',  drop: 72, spread: 116, reach: 112 },
      { n: 9,  level: 'T9',  drop: 76, spread: 114, reach: 102 },
      { n: 10, level: 'T10', drop: 78, spread: 110, reach: 90 },
      { n: 11, level: 'T11', drop: 70, spread: 100, reach: 62 },
      { n: 12, level: 'T12', drop: 58, spread: 84,  reach: 40 },
    ],

    /* Pelvis, as the ring the iliac vessels run on. */
    pelvis: {
      sacrumTop:    { x: 0,   y: -412, z: 0 },
      sacrumTip:    { x: 0,   y: -520, z: -40 },
      iliacCrest:   { x: 128, y: -330, z: 10 },
      asis:         { x: 118, y: -382, z: 62 },
      pubicSymph:   { x: 0,   y: -505, z: 58 },
      acetabulum:   { x: 82,  y: -470, z: 12 },
      ischialTuber: { x: 62,  y: -540, z: -28 },
    },

    /* Skull, as a coarse outline only — enough to place the carotids
       and the circle of Willis in batch 2. */
    skull: {
      vertex:       { x: 0,   y: 355,  z: 10 },
      glabella:     { x: 0,   y: 285,  z: 92 },
      occiput:      { x: 0,   y: 250,  z: -95 },
      foramenMagnum:{ x: 0,   y: 232,  z: -18 },
      mastoid:      { x: 62,  y: 236,  z: -22 },
      orbit:        { x: 32,  y: 278,  z: 78 },
      mandibleAngle:{ x: 52,  y: 205,  z: 22 },
    },

    clavicle: { sternalEnd: { x: 14, y: 42, z: 88 }, acromialEnd: { x: 152, y: 52, z: 6 } },
  };

  /* ---------------------------------------------------------------
     VESSELS
     path   centreline, proximal to distal, [[x,y,z], ...]
     r      [radiusAtStart, radiusAtEnd] in mm
     latin  Terminologia Anatomica
     level  vertebral level of origin, asserted by the audit
     stub   true = origin and initial direction only; the full course
            arrives in a later batch. Stubs are drawn faded.
     --------------------------------------------------------------- */
  var V = {};

  /* ===== AORTA ===================================================== */

  V['ascending_aorta'] = {
    latin: 'Aorta ascendens',
    path: [[8, -42, 60], [4, -28, 66], [-6, -10, 71], [-16, 4, 72]],
    r: [17, 15.5],
    note: 'Begins at the aortic valve behind the left half of the sternum at the level of the third left costal cartilage. The sinuses of Valsalva give the widened root.',
  };

  V['aortic_arch'] = {
    latin: 'Arcus aortae',
    path: [[-16, 4, 72], [-13, 17, 68], [-4, 25, 56], [6, 26, 38], [13, 21, 23], [16, 11, 15], [17, 3, 12]],
    r: [15.5, 11.5],
    level: 'T4',
    note: 'Begins and ends at the plane of the sternal angle (T4/T5). Arches superiorly, posteriorly and to the left, passing in front of then to the left of the trachea.',
  };

  V['descending_thoracic_aorta'] = {
    latin: 'Aorta thoracica',
    path: [[17, 3, 12], [15, -35, 2], [13, -80, -4], [10, -130, 0], [7, -160, 6], [6, -184, 15]],
    r: [11.5, 9.5],
    note: 'Descends on the left of the vertebral bodies and moves towards the median plane as it goes, so that it reaches the aortic hiatus in the midline.',
  };

  V['abdominal_aorta'] = {
    latin: 'Aorta abdominalis',
    path: [[6, -184, 15], [5, -200, 20], [4, -222, 24], [3, -260, 31], [3, -298, 34], [2, -330, 32], [2, -336, 31]],
    r: [9.5, 7.5],
    level: 'T12',
    note: 'Enters through the aortic hiatus at T12 and ends by bifurcating at L4. Note that it swings forward as it descends — that is the lumbar lordosis, not an error.',
  };

  /* ===== CORONARY ARTERIES ========================================= */

  V['right_coronary_artery'] = {
    latin: 'Arteria coronaria dextra',
    path: [[-4, -46, 64], [-25, -52, 60], [-40, -70, 45], [-38, -90, 25]],
    r: [2.0, 1.4],
    note: 'Arises from the right aortic sinus and runs in the right atrioventricular groove to the crux of the heart.',
  };

  V['left_coronary_artery'] = {
    latin: 'Arteria coronaria sinistra',
    path: [[16, -44, 58], [28, -50, 56], [35, -54, 52]],
    r: [2.3, 2.1],
    note: 'Arises from the left aortic sinus, whose ostium sits marginally higher than the right. The left main stem is short — typically 10 to 15 mm — before it divides.',
  };

  V['anterior_interventricular_artery'] = {
    latin: 'Ramus interventricularis anterior',
    path: [[35, -54, 52], [32, -75, 55], [25, -100, 50], [15, -118, 40]],
    r: [1.8, 0.8],
    note: 'The LAD. Runs in the anterior interventricular groove towards the apex.',
  };

  V['circumflex_artery'] = {
    latin: 'Ramus circumflexus',
    path: [[35, -54, 52], [45, -60, 42], [48, -72, 25], [42, -88, 10]],
    r: [1.8, 1.0],
    note: 'Runs in the left atrioventricular groove round to the posterior surface.',
  };

  V['left_marginal_artery'] = {
    latin: 'Ramus marginalis sinister',
    path: [[48, -72, 25], [48, -92, 20], [44, -110, 14]],
    r: [1.0, 0.6],
  };

  V['diagonal_branches'] = {
    latin: 'Rami diagonales',
    path: [[32, -75, 55], [44, -85, 46], [50, -98, 38]],
    r: [0.9, 0.5],
  };

  V['septal_branches'] = {
    latin: 'Rami interventriculares septales',
    path: [[30, -85, 53], [28, -92, 42], [26, -98, 32]],
    r: [0.7, 0.4],
  };

  V['right_marginal_artery'] = {
    latin: 'Ramus marginalis dexter',
    path: [[-40, -70, 45], [-38, -88, 38], [-30, -105, 30]],
    r: [1.1, 0.6],
  };

  V['posterior_interventricular_artery'] = {
    latin: 'Ramus interventricularis posterior',
    path: [[-38, -90, 25], [-25, -100, 10], [-12, -115, 2]],
    r: [1.3, 0.7],
    note: 'Arises from the right coronary artery in about 80 percent of hearts — right dominance. From the circumflex in about 10 percent, and from both in the rest.',
  };

  V['sinoatrial_nodal_artery'] = {
    latin: 'Ramus nodi sinuatrialis',
    path: [[-25, -52, 60], [-30, -40, 50], [-28, -32, 40]],
    r: [0.7, 0.4],
    note: 'From the right coronary artery in about 60 percent, from the circumflex in about 40 percent.',
  };

  V['atrioventricular_nodal_artery'] = {
    latin: 'Ramus nodi atrioventricularis',
    path: [[-38, -90, 25], [-32, -88, 15], [-28, -86, 8]],
    r: [0.6, 0.35],
    note: 'Arises at the crux, from whichever vessel supplies the posterior interventricular artery.',
  };

  /* ===== BRANCHES OF THE ARCH ====================================== */

  V['brachiocephalic_trunk'] = {
    latin: 'Truncus brachiocephalicus',
    path: [[-7, 25, 52], [-13, 40, 49], [-19, 52, 45], [-23, 62, 42]],
    r: [6.5, 5.5],
    level: 'T4',
    note: 'First and largest branch of the arch. Divides behind the right sternoclavicular joint. There is no left brachiocephalic trunk — the left carotid and subclavian arise separately.',
  };

  V['R:common_carotid_artery'] = {
    latin: 'Arteria carotis communis dextra',
    path: [[-23, 62, 42], [-27, 110, 34], [-30, 155, 28]],
    r: [4.0, 3.5], stub: true,
    note: 'Arises from the brachiocephalic trunk, so it has no thoracic part — unlike the left.',
  };

  V['L:common_carotid_artery'] = {
    latin: 'Arteria carotis communis sinistra',
    path: [[1, 26, 42], [8, 55, 40], [16, 95, 35], [28, 155, 28]],
    r: [4.2, 3.5], stub: true,
    note: 'Arises directly from the arch, second branch. It therefore has a thoracic part before it enters the neck.',
  };

  V['R:subclavian_artery'] = {
    latin: 'Arteria subclavia dextra',
    path: [[-23, 62, 42], [-45, 68, 35], [-70, 66, 25], [-90, 58, 12]],
    r: [5.0, 4.5], stub: true,
  };

  V['L:subclavian_artery'] = {
    latin: 'Arteria subclavia sinistra',
    path: [[9, 24, 31], [16, 45, 28], [40, 62, 25], [65, 66, 20], [90, 58, 12]],
    r: [5.0, 4.5], stub: true,
    note: 'Third branch of the arch. Arises further back and more to the left than the right subclavian, which comes off the brachiocephalic trunk.',
  };

  /* ===== BRANCHES OF THE THORACIC AORTA ============================ */

  V['L:bronchial_arteries'] = {
    latin: 'Rami bronchiales',
    path: [[14, -36, 0], [8, -38, 14], [2, -40, 26]],
    r: [1.0, 0.7], stub: true, level: 'T6',
    note: 'Usually two on the left, arising directly from the aorta.',
  };
  V['R:bronchial_arteries'] = {
    latin: 'Rami bronchiales',
    path: [[11, -36, 0], [2, -38, 12], [-8, -40, 20]],
    r: [1.0, 0.7], stub: true, level: 'T6',
    note: 'Usually a single right bronchial artery, and it commonly arises from the third posterior intercostal artery rather than from the aorta directly.',
  };

  V['esophageal_arteries'] = {
    latin: 'Rami oesophageales',
    path: [[13, -70, -2], [6, -72, 8], [-2, -74, 16]],
    r: [1.0, 0.6], stub: true, level: 'T7',
  };

  V['mediastinal_branches'] = {
    latin: 'Rami mediastinales',
    path: [[13, -55, 0], [7, -56, 8], [2, -57, 14]],
    r: [0.6, 0.4], stub: true,
  };

  V['pericardial_branches'] = {
    latin: 'Rami pericardiaci',
    path: [[14, -50, 2], [8, -50, 12], [3, -51, 20]],
    r: [0.6, 0.4], stub: true,
  };

  V['L:posterior_intercostal_arteries'] = {
    latin: 'Arteriae intercostales posteriores',
    path: [[15, -58, -12], [40, -62, -24], [70, -70, -30]],
    r: [1.2, 0.8], stub: true,
    note: 'Nine pairs, third to eleventh intercostal spaces. The first two spaces are supplied by the supreme intercostal artery from the costocervical trunk, not by the aorta.',
  };

  V['R:posterior_intercostal_arteries'] = {
    latin: 'Arteriae intercostales posteriores',
    path: [[11, -58, -12], [-20, -62, -26], [-55, -70, -32]],
    r: [1.2, 0.8], stub: true,
    note: 'The right arteries are longer than the left, because they must cross the vertebral bodies to reach the right side.',
  };

  V['L:dorsal_branches']                 = { latin: 'Ramus dorsalis',        path: [[40, -62, -24], [48, -60, -40], [54, -58, -54]], r: [0.6, 0.4], stub: true };
  V['R:dorsal_branches']                 = { latin: 'Ramus dorsalis',        path: [[-20, -62, -26], [-28, -60, -42], [-34, -58, -56]], r: [0.6, 0.4], stub: true };
  V['L:spinal_branches']                 = { latin: 'Rami spinales',         path: [[40, -62, -24], [30, -62, -34], [18, -62, -38]], r: [0.4, 0.25], stub: true };
  V['R:spinal_branches']                 = { latin: 'Rami spinales',         path: [[-20, -62, -26], [-12, -62, -36], [-2, -62, -39]], r: [0.4, 0.25], stub: true };
  V['L:collateral_intercostal_branches'] = { latin: 'Ramus collateralis',    path: [[55, -66, -28], [64, -78, -26], [70, -88, -22]], r: [0.5, 0.3], stub: true };
  V['R:collateral_intercostal_branches'] = { latin: 'Ramus collateralis',    path: [[-38, -66, -29], [-48, -78, -27], [-55, -88, -23]], r: [0.5, 0.3], stub: true };
  V['L:lateral_cutaneous_branches']      = { latin: 'Rami cutanei laterales',path: [[70, -70, -30], [86, -74, -14], [95, -76, 2]],  r: [0.4, 0.25], stub: true };
  V['R:lateral_cutaneous_branches']      = { latin: 'Rami cutanei laterales',path: [[-55, -70, -32], [-72, -74, -16], [-81, -76, 0]], r: [0.4, 0.25], stub: true };

  V['L:subcostal_arteries'] = {
    latin: 'Arteria subcostalis',
    path: [[8, -180, 4], [35, -186, -6], [65, -195, -14]],
    r: [1.0, 0.7], stub: true, level: 'T12',
    note: 'Runs below the twelfth rib — the last branch of the thoracic aorta.',
  };
  V['R:subcostal_arteries'] = {
    latin: 'Arteria subcostalis',
    path: [[4, -180, 4], [-25, -186, -6], [-55, -195, -14]],
    r: [1.0, 0.7], stub: true, level: 'T12',
  };

  V['L:superior_phrenic_arteries'] = {
    latin: 'Arteriae phrenicae superiores',
    path: [[8, -176, 8], [28, -172, 4], [48, -170, -4]],
    r: [0.9, 0.6], stub: true,
  };
  V['R:superior_phrenic_arteries'] = {
    latin: 'Arteriae phrenicae superiores',
    path: [[4, -176, 8], [-18, -172, 4], [-38, -170, -4]],
    r: [0.9, 0.6], stub: true,
  };

  /* ===== BRANCHES OF THE ABDOMINAL AORTA ===========================
     Origin levels here are the ones exams test. Each is asserted
     against the vertebral table by the audit.
     ================================================================= */

  V['L:inferior_phrenic_arteries'] = {
    latin: 'Arteria phrenica inferior',
    path: [[6, -190, 20], [25, -180, 18], [45, -175, 10]],
    r: [1.8, 1.2], stub: true, level: 'T12',
    note: 'First branch below the diaphragm. Gives the superior suprarenal arteries.',
  };
  V['R:inferior_phrenic_arteries'] = {
    latin: 'Arteria phrenica inferior',
    path: [[3, -190, 20], [-18, -180, 18], [-38, -175, 10]],
    r: [1.8, 1.2], stub: true, level: 'T12',
  };

  V['L:superior_suprarenal_arteries'] = {
    latin: 'Arteriae suprarenales superiores',
    path: [[25, -180, 18], [32, -196, 14], [38, -210, 10]],
    r: [0.7, 0.4], stub: true,
  };
  V['R:superior_suprarenal_arteries'] = {
    latin: 'Arteriae suprarenales superiores',
    path: [[-18, -180, 18], [-25, -196, 14], [-31, -210, 10]],
    r: [0.7, 0.4], stub: true,
  };

  V['celiac_trunk'] = {
    latin: 'Truncus coeliacus',
    path: [[4, -198, 26], [3, -198, 42], [2, -197, 55]],
    r: [4.5, 4.0], level: 'T12',
    note: 'Short and wide, about 15 mm long. Arises at T12, immediately below the aortic hiatus, and divides into left gastric, splenic and common hepatic arteries.',
  };

  V['superior_mesenteric_artery'] = {
    latin: 'Arteria mesenterica superior',
    path: [[3, -220, 29], [2, -218, 45], [0, -225, 60], [-2, -245, 68]],
    r: [4.0, 3.2], level: 'L1',
    note: 'Arises at L1, about 10 mm below the coeliac trunk. The third part of the duodenum passes between it and the aorta — the site of superior mesenteric artery syndrome.',
  };

  V['L:middle_suprarenal_arteries'] = {
    latin: 'Arteria suprarenalis media',
    path: [[5, -224, 28], [25, -222, 22], [40, -220, 16]],
    r: [1.2, 0.8], stub: true, level: 'L1',
  };
  V['R:middle_suprarenal_arteries'] = {
    latin: 'Arteria suprarenalis media',
    path: [[1, -224, 28], [-20, -222, 22], [-34, -220, 16]],
    r: [1.2, 0.8], stub: true, level: 'L1',
  };

  V['L:renal_arteries'] = {
    latin: 'Arteria renalis sinistra',
    path: [[5, -242, 29], [30, -244, 26], [55, -246, 20]],
    r: [2.8, 2.4], stub: true, level: 'L2',
    note: 'The left renal artery is shorter than the right, and the left kidney sits higher than the right.',
  };
  V['R:renal_arteries'] = {
    latin: 'Arteria renalis dextra',
    path: [[-1, -242, 29], [-30, -247, 22], [-58, -250, 14]],
    r: [2.8, 2.4], stub: true, level: 'L2',
    note: 'Longer than the left because it must pass behind the inferior vena cava to reach the right kidney.',
  };

  V['L:gonadal_arteries'] = {
    latin: 'Arteria testicularis / ovarica',
    path: [[4, -262, 32], [12, -300, 30], [20, -340, 26]],
    r: [1.5, 1.1], stub: true, level: 'L2',
    note: 'Arises high, at L2, because the gonad develops on the posterior abdominal wall and descends. The artery is left behind, marking its origin.',
  };
  V['R:gonadal_arteries'] = {
    latin: 'Arteria testicularis / ovarica',
    path: [[1, -262, 32], [-9, -300, 30], [-17, -340, 26]],
    r: [1.5, 1.1], stub: true, level: 'L2',
  };

  V['inferior_mesenteric_artery'] = {
    latin: 'Arteria mesenterica inferior',
    path: [[5, -300, 36], [10, -310, 42], [16, -330, 42], [20, -352, 38]],
    r: [2.5, 2.0], level: 'L3',
    note: 'Arises at L3, from the left anterolateral wall of the aorta, and runs down and to the left. Supplies the hindgut, from the distal third of the transverse colon to the upper rectum.',
  };

  /* Lumbar arteries leave the POSTERIOR wall of the aorta, so their
     origins sit on the back of the vessel: aorta centre z=31 at L2,
     radius 8.5, hence posterior surface at z=22.5. */
  V['L:lumbar_arteries'] = {
    latin: 'Arteriae lumbales',
    path: [[5, -260, 23], [26, -262, 4], [44, -264, -12]],
    r: [1.3, 0.9], stub: true,
    note: 'Four pairs, running backwards around the lumbar vertebral bodies. Segmental, like the posterior intercostals.',
  };
  V['R:lumbar_arteries'] = {
    latin: 'Arteriae lumbales',
    path: [[1, -260, 23], [-20, -262, 4], [-38, -264, -12]],
    r: [1.3, 0.9], stub: true,
  };

  V['median_sacral_artery'] = {
    latin: 'Arteria sacralis mediana',
    path: [[2, -334, 24], [1, -370, 12], [0, -410, -2], [0, -450, -18]],
    r: [1.2, 0.7], level: 'L4',
    note: 'Arises from the back of the aorta just above the bifurcation. It is the continuation of the embryonic dorsal aorta — the true midline vessel.',
  };

  V['L:common_iliac_artery'] = {
    latin: 'Arteria iliaca communis',
    path: [[2, -336, 31], [14, -352, 29], [26, -372, 26], [36, -392, 22]],
    r: [6.5, 5.5], stub: true, level: 'L4',
  };
  V['R:common_iliac_artery'] = {
    latin: 'Arteria iliaca communis',
    path: [[2, -336, 31], [-10, -352, 29], [-22, -372, 26], [-32, -392, 22]],
    r: [6.5, 5.5], stub: true, level: 'L4',
  };

  /* ---------------------------------------------------------------
     Origin-level assertions consumed by tools/audit-artery-3d.js.
     Tolerance is generous in y because a vessel's ostium spans a few
     millimetres, but tight enough to catch a wrong vertebral level:
     lumbar segments are 38 mm apart, so 18 mm cannot silently pass.
     --------------------------------------------------------------- */
  var LEVEL_TOLERANCE_MM = 18;

  /* ---------------------------------------------------------------
     ANATOMICAL BRANCH ORDER

     The audit checks that branches meet their trunk in the same order
     the source data lists them. Building batch 1 showed that for three
     trunks the source order is NOT anatomical — artery-assembly-data.js
     groups branches by category rather than by position along the
     vessel. That is harmless for the assembly game but wrong for a
     model in space, and it is arguably wrong for study too.

     Where an entry appears below, the audit uses THIS order instead.
     Each is a discrepancy worth fixing in artery-assembly-data.js.
     --------------------------------------------------------------- */
  var ANATOMICAL_ORDER = {
    /* Source lists: right marginal, posterior interventricular,
       sinuatrial nodal, atrioventricular nodal.
       The sinuatrial nodal artery actually arises within the first
       centimetre or two of the RCA, well before the marginal branch,
       and the AV nodal artery arises at the crux alongside the
       posterior interventricular artery. */
    right_coronary_artery: [
      'sinoatrial_nodal_artery',
      'right_marginal_artery',
      'posterior_interventricular_artery',
      'atrioventricular_nodal_artery',
    ],

    /* Source lists the paired and midline branches in category order.
       True order from the aortic hiatus downwards is by vertebral
       level: T12 to L4. */
    abdominal_aorta: [
      'inferior_phrenic_arteries',      /* T12, immediately below the hiatus */
      'celiac_trunk',                   /* T12 */
      'superior_mesenteric_artery',     /* L1 */
      'middle_suprarenal_arteries',     /* L1 */
      'renal_arteries',                 /* L2 */
      'gonadal_arteries',               /* L2 */
      'lumbar_arteries',                /* L1 to L4, segmental */
      'inferior_mesenteric_artery',     /* L3 */
      'median_sacral_artery',           /* L4, just above the bifurcation */
      'common_iliac_artery',            /* L4, the termination */
    ],

    /* Source lists the visceral branches before the segmental ones.
       Along the vessel they interleave from T4 down to T12. */
    descending_thoracic_aorta: [
      'bronchial_arteries',             /* T5 to T6 */
      'pericardial_branches',
      'mediastinal_branches',
      'posterior_intercostal_arteries', /* segmental, T4 to T11 */
      'esophageal_arteries',            /* T6 to T8 */
      'superior_phrenic_arteries',      /* T12, on the diaphragm */
      'subcostal_arteries',             /* below the twelfth rib */
    ],
  };

  window.ARTERY_3D_GEOMETRY = {
    meta: {
      batch: 1,
      batchName: 'Skeletal reference frame and the aorta',
      units: 'mm',
      subject: 'Adult male, 175 cm, anatomical position',
      origin: 'Median plane, T4/T5 disc level, anterior surface of the T4 vertebral body',
      axes: { x: 'left positive', y: 'superior positive', z: 'anterior positive' },
      accuracy: 'Hand-authored from anatomical landmarks and vertebral levels. Topology machine-verified against artery-assembly-data.js. Not derived from segmented imaging.',
    },
    skeleton: SKELETON,
    vertebrae: VERTEBRAE,
    levelTolerance: LEVEL_TOLERANCE_MM,
    anatomicalOrder: ANATOMICAL_ORDER,
    vessels: V,
  };
})();
