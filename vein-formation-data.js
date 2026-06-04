/* ============================================================
   Vein Formation Data
   For each vein: name, section, tributaries, and a short
   anatomical description. Used by VeinFormationGame.
   ============================================================ */

window.VEIN_FORMATION_DATA = [

  /* ── Upper Body ─────────────────────────────────────────── */
  {
    id: 'svc',
    name: 'Superior Vena Cava (SVC)',
    section: 'Upper Body',
    description: 'The SVC returns blood from the head, neck, upper limbs, and thorax to the right atrium. It is formed by the union of the right and left brachiocephalic veins behind the right first costal cartilage. The azygos vein arches over the root of the right lung to drain into the SVC just before it enters the pericardium. The SVC has no valves and descends about 7 cm to pierce the pericardium at the level of the third costal cartilage.',
    tributaries: ['Right Brachiocephalic', 'Left Brachiocephalic', 'Azygos']
  },
  {
    id: 'right_brachio',
    name: 'Right Brachiocephalic',
    section: 'Upper Body',
    description: 'The right brachiocephalic vein is a short vessel formed behind the right sternoclavicular joint by the union of the right internal jugular and right subclavian veins. It descends almost vertically to join the left brachiocephalic vein and form the SVC. Unlike the left side, it receives no additional tributaries of significance. Its short oblique course means it contributes less to SVC length than the longer left brachiocephalic vein.',
    tributaries: ['Right Internal Jugular', 'Right Subclavian']
  },
  {
    id: 'left_brachio',
    name: 'Left Brachiocephalic',
    section: 'Upper Body',
    description: 'The left brachiocephalic vein is considerably longer than the right, passing obliquely across the superior mediastinum anterior to the great arteries of the aortic arch. It is formed by the union of the left internal jugular and left subclavian veins behind the left sternoclavicular joint. It crosses the midline to unite with the right brachiocephalic vein and form the SVC. It also receives the left superior intercostal vein, which drains the upper left intercostal spaces.',
    tributaries: ['Left Internal Jugular', 'Left Subclavian']
  },
  {
    id: 'internal_jugular',
    name: 'Internal Jugular',
    section: 'Upper Body',
    description: 'The internal jugular vein begins as a continuation of the sigmoid dural venous sinus at the jugular foramen of the skull base. It descends within the carotid sheath alongside the common carotid artery and vagus nerve, collecting blood from the brain, face, and neck. Along its course it receives the facial, lingual, pharyngeal, and superior and middle thyroid veins. At the base of the neck it unites with the subclavian vein to form the brachiocephalic vein.',
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
    description: 'The subclavian vein is the continuation of the axillary vein as it crosses the outer border of the first rib. It runs anterior to the anterior scalene muscle and posterior to the clavicle, separated from the subclavian artery by that muscle. It receives the external jugular vein before joining the internal jugular vein behind the sternoclavicular joint to form the brachiocephalic vein. The subclavian vein is a common site for central venous catheter insertion.',
    tributaries: ['Axillary Vein', 'External Jugular']
  },
  {
    id: 'axillary',
    name: 'Axillary Vein',
    section: 'Upper Body',
    description: 'The axillary vein is formed at the lower border of teres major by the union of the basilic and brachial veins. It runs medial to the axillary artery through the axilla, receiving the cephalic vein near the clavicle and the subscapular veins along its course. As it crosses the outer border of the first rib it becomes the subclavian vein. The axillary vein lies on the medial side of the axillary artery and is separated from it by the medial cord of the brachial plexus.',
    tributaries: ['Basilic Vein', 'Brachial Vein', 'Cephalic Vein', 'Subscapular Vein']
  },

  /* ── Thorax ─────────────────────────────────────────────── */
  {
    id: 'azygos',
    name: 'Azygos',
    section: 'Thorax',
    description: 'The azygos vein ascends in the right side of the posterior mediastinum, formed by the union of the right ascending lumbar and right subcostal veins at the level of T12. It receives the right posterior intercostal veins and accepts the hemiazygos and accessory hemiazygos veins that cross the midline from the left. At the level of T4 it arches over the root of the right lung to drain into the superior vena cava. The azygos system provides a critical collateral pathway when the SVC or IVC is obstructed.',
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
    description: 'The hemiazygos vein ascends on the left side of the vertebral column, formed from the left ascending lumbar vein at approximately T12. It drains the lower left posterior intercostal spaces (IX-XI) and crosses the vertebral column at around T9 to drain into the azygos vein. It is the inferior counterpart to the accessory hemiazygos vein and together they account for all left-sided posterior thoracic venous drainage. It communicates inferiorly with the left renal vein.',
    tributaries: [
      'Left Ascending Lumbar',
      'Lower Left Posterior Intercostal Veins (IX-XI)'
    ]
  },
  {
    id: 'accessory_hemiazygos',
    name: 'Accessory Hemiazygos',
    section: 'Thorax',
    description: 'The accessory hemiazygos vein lies on the left side of the vertebral column above the hemiazygos, typically between T5 and T8. It collects the upper left posterior intercostal veins (IV-VIII) and crosses the midline to join the azygos vein at approximately T7-T8. Superiorly it may communicate with the left superior intercostal vein, and inferiorly it connects with the hemiazygos. Together with the hemiazygos it forms the left counterpart of the azygos system.',
    tributaries: ['Upper Left Posterior Intercostal Veins (IV-VIII)']
  },

  /* ── Portal System ──────────────────────────────────────── */
  {
    id: 'portal',
    name: 'Portal Vein',
    section: 'Portal System',
    description: 'The portal vein carries nutrient-rich, oxygen-poor blood from the gastrointestinal tract and spleen to the liver for processing. It is formed posterior to the neck of the pancreas by the union of the superior mesenteric and splenic veins. The portal vein ascends about 8 cm in the free edge of the lesser omentum (hepatoduodenal ligament) before dividing into right and left branches at the porta hepatis. It has no valves, and portal hypertension due to liver disease causes clinically important portosystemic anastomoses.',
    tributaries: ['Superior Mesenteric Vein', 'Splenic Vein']
  },
  {
    id: 'splenic',
    name: 'Splenic Vein',
    section: 'Portal System',
    description: 'The splenic vein drains the spleen and runs along the posterior surface of the pancreas, receiving numerous pancreatic tributaries along its course. From the stomach it receives the short gastric veins and the left gastro-omental (gastroepiploic) vein. The inferior mesenteric vein, draining the left colon and rectum, typically joins the splenic vein before it unites with the superior mesenteric vein to form the portal vein. Splenic vein thrombosis can cause isolated gastric varices due to impaired drainage.',
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
    description: 'The IVC is the largest vein in the body, returning blood from the lower limbs, pelvis, and abdominal viscera to the right atrium. It is formed at the level of L5 by the union of the right and left common iliac veins, just to the right of the midline. As it ascends on the right side of the aorta it receives the lumbar, renal, right gonadal, right suprarenal, right inferior phrenic, and hepatic veins. The IVC pierces the central tendon of the diaphragm at T8 and immediately enters the right atrium.',
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
    description: 'The left renal vein is notably longer than the right because it must cross the midline anterior to the aorta to reach the IVC. Along this longer course it receives the left gonadal, left suprarenal, and left inferior phrenic veins, unlike the right renal vein which drains these via separate vessels directly into the IVC. This asymmetry means left-sided gonadal vein drainage is more susceptible to compression, predisposing to left varicocele in men. It passes between the aorta and the superior mesenteric artery, a site of potential nutcracker compression.',
    tributaries: ['Left Gonadal Vein', 'Left Suprarenal Vein', 'Left Inferior Phrenic Vein']
  },
  {
    id: 'common_iliac',
    name: 'Common Iliac Vein',
    section: 'Lower Body',
    description: 'The common iliac veins are formed at the level of the sacroiliac joint by the union of the external and internal iliac veins. The right and left common iliac veins join at the level of L5 to form the IVC just to the right of the midline. The left common iliac vein is longer and crosses the midline posterior to the right common iliac artery, which can compress it and predispose to left-sided deep vein thrombosis (May-Thurner syndrome). Neither common iliac vein has valves.',
    tributaries: ['External Iliac Vein', 'Internal Iliac Vein']
  },
  {
    id: 'external_iliac',
    name: 'External Iliac Vein',
    section: 'Lower Body',
    description: 'The external iliac vein is the continuation of the femoral vein as it passes beneath the inguinal ligament, representing the main venous return channel from the lower limb. It ascends medial to the external iliac artery and receives the inferior epigastric and deep circumflex iliac veins near the inguinal ligament. At the sacroiliac joint it joins the internal iliac vein to form the common iliac vein. The external iliac vein has one or two valves, unlike the common iliac veins above it.',
    tributaries: ['Femoral Vein', 'Inferior Epigastric Vein', 'Deep Circumflex Iliac Vein']
  },
  {
    id: 'femoral',
    name: 'Femoral Vein',
    section: 'Lower Body',
    description: 'The femoral vein is the continuation of the popliteal vein as it passes through the adductor hiatus (opening in adductor magnus) into the femoral triangle. It accompanies the femoral artery in the femoral sheath, lying medial to it, and receives the great saphenous vein at the saphenofemoral junction just below the inguinal ligament. The profunda femoris (deep femoral) vein drains into it in the proximal thigh. As it passes deep to the inguinal ligament it becomes the external iliac vein.',
    tributaries: ['Popliteal Vein', 'Great Saphenous Vein', 'Profunda Femoris']
  },
  {
    id: 'popliteal',
    name: 'Popliteal Vein',
    section: 'Lower Body',
    description: 'The popliteal vein is formed at the lower border of the popliteus muscle by the union of the anterior and posterior tibial veins. In the popliteal fossa it receives the small saphenous vein and the fibular (peroneal) vein, lying superficial and posterior to the popliteal artery. It passes upward through the adductor hiatus to become the femoral vein. The popliteal vein contains valves and is a common site of deep vein thrombosis, particularly after lower limb surgery.',
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
    description: 'The great saphenous vein is the longest superficial vein in the body, arising from the medial end of the dorsal venous arch of the foot. It ascends anterior to the medial malleolus, then along the medial aspect of the leg and thigh, accompanied by the saphenous nerve below the knee. It drains into the femoral vein at the saphenofemoral junction, approximately 4 cm inferolateral to the pubic tubercle. It is commonly harvested as a conduit for coronary artery bypass grafting and lower limb revascularisation.',
    tributaries: ['Medial Dorsal Venous Arch']
  },
  {
    id: 'small_saphenous',
    name: 'Small Saphenous Vein',
    section: 'Superficial Lower Limb',
    description: 'The small saphenous vein arises from the lateral end of the dorsal venous arch of the foot, passing posterior to the lateral malleolus. It ascends along the posterior midline of the leg, accompanied by the sural nerve, and pierces the deep fascia of the popliteal fossa to drain into the popliteal vein. Its termination level is variable and it may drain partly or wholly into the great saphenous system or deep femoral tributaries. It is a common site of varicose veins and can be harvested as a bypass graft.',
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
