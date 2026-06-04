/* ============================================================
   Vein Formation Data
   tributaries = only the direct forming veins (union or
   continuation) — not tributaries received along the course.
   ============================================================ */

window.VEIN_FORMATION_DATA = [

  /* ── Upper Body ─────────────────────────────────────────── */
  {
    id: 'svc',
    name: 'Superior Vena Cava (SVC)',
    section: 'Upper Body',
    description: 'The SVC returns blood from the head, neck, upper limbs, and thorax to the right atrium. It is formed by the union of the right and left brachiocephalic veins behind the right first costal cartilage. It descends about 7 cm to pierce the pericardium at the level of the third costal cartilage, where it enters the right atrium. The SVC has no valves.',
    tributaries: ['Right Brachiocephalic', 'Left Brachiocephalic']
  },
  {
    id: 'right_brachio',
    name: 'Right Brachiocephalic',
    section: 'Upper Body',
    description: 'The right brachiocephalic vein is formed behind the right sternoclavicular joint by the union of the right internal jugular and right subclavian veins. It is shorter and more vertical than the left brachiocephalic vein. It descends to join the left brachiocephalic vein and form the SVC. It drains the right side of the head, neck, and upper limb.',
    tributaries: ['Right Internal Jugular', 'Right Subclavian']
  },
  {
    id: 'left_brachio',
    name: 'Left Brachiocephalic',
    section: 'Upper Body',
    description: 'The left brachiocephalic vein is formed behind the left sternoclavicular joint by the union of the left internal jugular and left subclavian veins. It is considerably longer than the right, passing obliquely across the superior mediastinum anterior to the great vessels of the aortic arch. It crosses the midline to unite with the right brachiocephalic vein and form the SVC.',
    tributaries: ['Left Internal Jugular', 'Left Subclavian']
  },
  {
    id: 'internal_jugular',
    name: 'Internal Jugular',
    section: 'Upper Body',
    description: 'The internal jugular vein is a direct continuation of the sigmoid dural venous sinus, beginning at the jugular foramen at the skull base. It descends within the carotid sheath alongside the common carotid artery and vagus nerve. At the base of the neck it unites with the subclavian vein to form the brachiocephalic vein. It is the principal venous drainage channel of the brain, face, and neck.',
    tributaries: ['Sigmoid Sinus']
  },
  {
    id: 'subclavian',
    name: 'Subclavian Vein',
    section: 'Upper Body',
    description: 'The subclavian vein is the direct continuation of the axillary vein as it crosses the outer border of the first rib. It runs anterior to the anterior scalene muscle and posterior to the clavicle. It joins the internal jugular vein behind the sternoclavicular joint to form the brachiocephalic vein. The subclavian vein is a common site for central venous catheter placement.',
    tributaries: ['Axillary Vein']
  },
  {
    id: 'axillary',
    name: 'Axillary Vein',
    section: 'Upper Body',
    description: 'The axillary vein is formed at the lower border of teres major by the union of the basilic and brachial veins. It runs medial to the axillary artery through the axilla and becomes the subclavian vein as it crosses the outer border of the first rib. It lies on the medial side of the axillary artery, separated from it by the medial cord of the brachial plexus.',
    tributaries: ['Basilic Vein', 'Brachial Vein']
  },

  /* ── Thorax ─────────────────────────────────────────────── */
  {
    id: 'azygos',
    name: 'Azygos',
    section: 'Thorax',
    description: 'The azygos vein is formed at the level of T12 by the union of the right ascending lumbar and right subcostal veins. It ascends in the right side of the posterior mediastinum and at T4 arches over the root of the right lung to drain into the SVC. It is the main right-sided drainage channel of the posterior thorax and provides a crucial collateral pathway when the SVC or IVC is obstructed.',
    tributaries: ['Right Ascending Lumbar', 'Right Subcostal']
  },
  {
    id: 'hemiazygos',
    name: 'Hemiazygos',
    section: 'Thorax',
    description: 'The hemiazygos vein is formed from the left ascending lumbar vein at approximately T12 and ascends on the left side of the vertebral column. At around T9 it crosses the midline to drain into the azygos vein. It is the inferior left-sided counterpart of the azygos system, draining the lower left posterior thorax.',
    tributaries: ['Left Ascending Lumbar']
  },
  {
    id: 'accessory_hemiazygos',
    name: 'Accessory Hemiazygos',
    section: 'Thorax',
    description: 'The accessory hemiazygos vein runs on the left side of the vertebral column above the hemiazygos, between approximately T5 and T8. It is formed by the upper left posterior intercostal veins (IV-VIII) and crosses the midline to join the azygos vein at approximately T7-T8. Superiorly it may communicate with the left superior intercostal vein, and inferiorly with the hemiazygos.',
    tributaries: ['Upper Left Posterior Intercostal Veins (IV-VIII)']
  },

  /* ── Portal System ──────────────────────────────────────── */
  {
    id: 'portal',
    name: 'Portal Vein',
    section: 'Portal System',
    description: 'The portal vein is formed posterior to the neck of the pancreas by the union of the superior mesenteric and splenic veins. It carries nutrient-rich blood from the gastrointestinal tract and spleen to the liver. It ascends about 8 cm in the free edge of the lesser omentum before dividing into right and left branches at the porta hepatis. It has no valves.',
    tributaries: ['Superior Mesenteric Vein', 'Splenic Vein']
  },

  /* ── Lower Body ─────────────────────────────────────────── */
  {
    id: 'ivc',
    name: 'Inferior Vena Cava (IVC)',
    section: 'Lower Body',
    description: 'The IVC is the largest vein in the body, formed at the level of L5 by the union of the right and left common iliac veins just to the right of the midline. It ascends on the right side of the aorta, pierces the central tendon of the diaphragm at T8, and immediately enters the right atrium. It returns blood from the lower limbs, pelvis, and abdominal viscera.',
    tributaries: ['Right Common Iliac', 'Left Common Iliac']
  },
  {
    id: 'common_iliac',
    name: 'Common Iliac Vein',
    section: 'Lower Body',
    description: 'The common iliac vein is formed at the level of the sacroiliac joint by the union of the external and internal iliac veins. The right and left common iliac veins converge at L5 to form the IVC. The left common iliac vein is longer and crosses the midline posterior to the right common iliac artery, a site of potential compression causing May-Thurner syndrome.',
    tributaries: ['External Iliac Vein', 'Internal Iliac Vein']
  },
  {
    id: 'external_iliac',
    name: 'External Iliac Vein',
    section: 'Lower Body',
    description: 'The external iliac vein is the direct continuation of the femoral vein as it passes beneath the inguinal ligament. It ascends medial to the external iliac artery and joins the internal iliac vein at the sacroiliac joint to form the common iliac vein. It is the principal venous return channel from the lower limb.',
    tributaries: ['Femoral Vein']
  },
  {
    id: 'femoral',
    name: 'Femoral Vein',
    section: 'Lower Body',
    description: 'The femoral vein is the direct continuation of the popliteal vein as it passes through the adductor hiatus (opening in adductor magnus) into the femoral triangle. It accompanies the femoral artery in the femoral sheath, lying medial to it. As it passes deep to the inguinal ligament it becomes the external iliac vein.',
    tributaries: ['Popliteal Vein']
  },
  {
    id: 'popliteal',
    name: 'Popliteal Vein',
    section: 'Lower Body',
    description: 'The popliteal vein is formed at the lower border of the popliteus muscle by the union of the anterior and posterior tibial veins. It accompanies the popliteal artery through the popliteal fossa and passes upward through the adductor hiatus to become the femoral vein. It is a common site of deep vein thrombosis, particularly after lower limb surgery.',
    tributaries: ['Anterior Tibial Vein', 'Posterior Tibial Vein']
  },

  /* ── Superficial Lower Limb ─────────────────────────────── */
  {
    id: 'great_saphenous',
    name: 'Great Saphenous Vein',
    section: 'Superficial Lower Limb',
    description: 'The great saphenous vein is the longest superficial vein in the body, arising from the medial end of the dorsal venous arch of the foot. It ascends anterior to the medial malleolus, along the medial aspect of the leg and thigh, and drains into the femoral vein at the saphenofemoral junction approximately 4 cm inferolateral to the pubic tubercle. It is commonly harvested for coronary artery bypass grafting.',
    tributaries: ['Medial Dorsal Venous Arch']
  },
  {
    id: 'small_saphenous',
    name: 'Small Saphenous Vein',
    section: 'Superficial Lower Limb',
    description: 'The small saphenous vein arises from the lateral end of the dorsal venous arch of the foot, passing posterior to the lateral malleolus. It ascends along the posterior midline of the leg and pierces the deep fascia of the popliteal fossa to drain into the popliteal vein. Its termination level is variable and it is a common site of varicose veins.',
    tributaries: ['Lateral Dorsal Venous Arch']
  }
];

/* All unique vein/structure names — the full pool for the searchable dropdown */
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
