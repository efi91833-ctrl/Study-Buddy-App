/* ============================================================
   Vein Formation Data
   For each vein: name, section, and its tributaries (the veins
   that drain into it / form it). Used by VeinFormationGame.
   ============================================================ */

window.VEIN_FORMATION_DATA = [

  /* ── Upper Body ─────────────────────────────────────────── */
  {
    id: 'svc',
    name: 'Superior Vena Cava (SVC)',
    section: 'Upper Body',
    tributaries: ['Right Brachiocephalic', 'Left Brachiocephalic', 'Azygos']
  },
  {
    id: 'right_brachio',
    name: 'Right Brachiocephalic',
    section: 'Upper Body',
    tributaries: ['Right Internal Jugular', 'Right Subclavian']
  },
  {
    id: 'left_brachio',
    name: 'Left Brachiocephalic',
    section: 'Upper Body',
    tributaries: ['Left Internal Jugular', 'Left Subclavian']
  },
  {
    id: 'internal_jugular',
    name: 'Internal Jugular',
    section: 'Upper Body',
    tributaries: [
      'Sigmoid Sinus',
      'Facial Vein',
      'Lingual Vein',
      'Pharyngeal Vein',
      'Superior Thyroid Vein',
      'Middle Thyroid Vein'
    ]
  },
  {
    id: 'subclavian',
    name: 'Subclavian Vein',
    section: 'Upper Body',
    tributaries: ['Axillary Vein', 'External Jugular']
  },
  {
    id: 'axillary',
    name: 'Axillary Vein',
    section: 'Upper Body',
    tributaries: ['Basilic Vein', 'Brachial Vein', 'Cephalic Vein', 'Subscapular Vein']
  },

  /* ── Thorax ─────────────────────────────────────────────── */
  {
    id: 'azygos',
    name: 'Azygos',
    section: 'Thorax',
    tributaries: [
      'Right Ascending Lumbar',
      'Right Subcostal',
      'Right Posterior Intercostal Veins',
      'Hemiazygos',
      'Accessory Hemiazygos'
    ]
  },
  {
    id: 'hemiazygos',
    name: 'Hemiazygos',
    section: 'Thorax',
    tributaries: [
      'Left Ascending Lumbar',
      'Lower Left Posterior Intercostal Veins (IX-XI)'
    ]
  },
  {
    id: 'accessory_hemiazygos',
    name: 'Accessory Hemiazygos',
    section: 'Thorax',
    tributaries: ['Upper Left Posterior Intercostal Veins (IV-VIII)']
  },

  /* ── Portal System ──────────────────────────────────────── */
  {
    id: 'portal',
    name: 'Portal Vein',
    section: 'Portal System',
    tributaries: ['Superior Mesenteric Vein', 'Splenic Vein']
  },
  {
    id: 'splenic',
    name: 'Splenic Vein',
    section: 'Portal System',
    tributaries: [
      'Short Gastric Veins',
      'Left Gastro-omental Vein',
      'Inferior Mesenteric Vein',
      'Pancreatic Veins'
    ]
  },

  /* ── Lower Body ─────────────────────────────────────────── */
  {
    id: 'ivc',
    name: 'Inferior Vena Cava (IVC)',
    section: 'Lower Body',
    tributaries: [
      'Right Common Iliac',
      'Left Common Iliac',
      'Lumbar Veins',
      'Renal Veins',
      'Right Gonadal Vein',
      'Right Suprarenal Vein',
      'Right Inferior Phrenic Vein',
      'Hepatic Veins'
    ]
  },
  {
    id: 'left_renal',
    name: 'Left Renal Vein',
    section: 'Lower Body',
    tributaries: ['Left Gonadal Vein', 'Left Suprarenal Vein', 'Left Inferior Phrenic Vein']
  },
  {
    id: 'common_iliac',
    name: 'Common Iliac Vein',
    section: 'Lower Body',
    tributaries: ['External Iliac Vein', 'Internal Iliac Vein']
  },
  {
    id: 'external_iliac',
    name: 'External Iliac Vein',
    section: 'Lower Body',
    tributaries: ['Femoral Vein', 'Inferior Epigastric Vein', 'Deep Circumflex Iliac Vein']
  },
  {
    id: 'femoral',
    name: 'Femoral Vein',
    section: 'Lower Body',
    tributaries: ['Popliteal Vein', 'Great Saphenous Vein', 'Profunda Femoris']
  },
  {
    id: 'popliteal',
    name: 'Popliteal Vein',
    section: 'Lower Body',
    tributaries: [
      'Anterior Tibial Vein',
      'Posterior Tibial Vein',
      'Small Saphenous Vein',
      'Fibular (Peroneal) Vein'
    ]
  },

  /* ── Superficial Lower Limb ─────────────────────────────── */
  {
    id: 'great_saphenous',
    name: 'Great Saphenous Vein',
    section: 'Superficial Lower Limb',
    tributaries: ['Medial Dorsal Venous Arch']
  },
  {
    id: 'small_saphenous',
    name: 'Small Saphenous Vein',
    section: 'Superficial Lower Limb',
    tributaries: ['Lateral Dorsal Venous Arch']
  }
];

/* All unique vein/structure names — the full pool for the dropdown */
window.ALL_VEIN_NAMES = [
  'Accessory Hemiazygos',
  'Anterior Tibial Vein',
  'Axillary Vein',
  'Azygos',
  'Basilic Vein',
  'Brachial Vein',
  'Cephalic Vein',
  'Deep Circumflex Iliac Vein',
  'External Iliac Vein',
  'External Jugular',
  'Facial Vein',
  'Femoral Vein',
  'Fibular (Peroneal) Vein',
  'Great Saphenous Vein',
  'Hemiazygos',
  'Hepatic Veins',
  'Inferior Epigastric Vein',
  'Inferior Mesenteric Vein',
  'Internal Iliac Vein',
  'Lateral Dorsal Venous Arch',
  'Left Ascending Lumbar',
  'Left Brachiocephalic',
  'Left Common Iliac',
  'Left Gastro-omental Vein',
  'Left Gonadal Vein',
  'Left Inferior Phrenic Vein',
  'Left Internal Jugular',
  'Left Subclavian',
  'Left Suprarenal Vein',
  'Lingual Vein',
  'Lower Left Posterior Intercostal Veins (IX-XI)',
  'Lumbar Veins',
  'Medial Dorsal Venous Arch',
  'Middle Thyroid Vein',
  'Pancreatic Veins',
  'Pharyngeal Vein',
  'Popliteal Vein',
  'Posterior Tibial Vein',
  'Profunda Femoris',
  'Renal Veins',
  'Right Ascending Lumbar',
  'Right Brachiocephalic',
  'Right Common Iliac',
  'Right Gonadal Vein',
  'Right Inferior Phrenic Vein',
  'Right Internal Jugular',
  'Right Posterior Intercostal Veins',
  'Right Subclavian',
  'Right Subcostal',
  'Right Suprarenal Vein',
  'Short Gastric Veins',
  'Sigmoid Sinus',
  'Small Saphenous Vein',
  'Splenic Vein',
  'Subscapular Vein',
  'Superior Mesenteric Vein',
  'Superior Thyroid Vein',
  'Upper Left Posterior Intercostal Veins (IV-VIII)'
];
