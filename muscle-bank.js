/* ============================================================
   muscle-bank.js — Study Buddy Muscle Lab data
   Add one object per muscle. image path is relative to index.html.
   ============================================================ */

window.MUSCLE_BANK = [

  /* ── Pelvic floor ───────────────────────────────────────────── */
  {
    id: "puborectalis",
    name: "Puborectalis",
    region: "Pelvic floor",
    group: "Pelvic diaphragm · Levator ani",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Superior pubic ramus, on both sides of the pubic symphysis.",
    insertion: "Anococcygeal ligament.",
    innervation: "Nerve to levator ani (S4) and inferior rectal nerve.",
    function: "Part of the pelvic diaphragm; supports pelvic viscera."
  },
  {
    id: "pubococcygeus",
    name: "Pubococcygeus",
    region: "Pelvic floor",
    group: "Pelvic diaphragm · Levator ani",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Pubis, lateral to the origin of puborectalis.",
    insertion: "Anococcygeal ligament and coccyx.",
    innervation: "Nerve to levator ani (S4) and inferior rectal nerve.",
    function: "Part of the pelvic diaphragm; supports pelvic viscera."
  },
  {
    id: "iliococcygeus",
    name: "Iliococcygeus",
    region: "Pelvic floor",
    group: "Pelvic diaphragm · Levator ani",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Internal obturator fascia of levator ani, also called the tendinous arch.",
    insertion: "Anococcygeal ligament and coccyx.",
    innervation: "Nerve to levator ani (S4) and inferior rectal nerve.",
    function: "Part of the pelvic diaphragm; supports pelvic viscera."
  },
  {
    id: "coccygeus",
    name: "Coccygeus",
    region: "Pelvic floor",
    group: "Pelvic diaphragm",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Ischial spine.",
    insertion: "Lateral surface of coccyx and S5 segment.",
    innervation: "Direct branches from sacral plexus (S4–S5).",
    function: "Supports pelvic viscera and flexes the coccyx."
  },
  {
    id: "piriformis",
    name: "Piriformis",
    region: "Pelvic floor",
    group: "Pelvic wall · Parietal",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Sacrum, pelvic surface.",
    insertion: "Femur, apex of greater trochanter.",
    innervation: "Direct branches from sacral plexus (S1–S2).",
    function: "External rotation and stabilization of the hip joint; abducts the flexed hip."
  },
  {
    id: "obturator-internus",
    name: "Obturator internus",
    region: "Pelvic floor",
    group: "Pelvic wall · Parietal",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Obturator membrane and bony boundaries, inner surface.",
    insertion: "Femur, medial surface of greater trochanter.",
    innervation: "Direct branches from sacral plexus (L5–S1).",
    function: "External rotation of the hip joint; abducts the flexed hip."
  }
,
  /* ── Lower limb · Hip / anterior hip ───────────────────────────────── */
  {
    id: "iliopsoas",
    name: "Iliopsoas",
    region: "Lower limb",
    group: "Hip · Anterior hip muscle",
    image: "images/muscles/gluteal-region.jpg",
    origin: "Psoas major: lateral surfaces of T12–L4 vertebral bodies and intervertebral discs (superficial part); costal processes of L1–L5 (deep part). Iliacus: iliac fossa.",
    insertion: "Lesser trochanter of femur.",
    innervation: "Psoas major: lumbar plexus L1–L3. Iliacus: femoral nerve L2–L3.",
    function: "Flexes and externally rotates the hip. With femur fixed: unilateral contraction flexes trunk laterally; bilateral contraction raises trunk from supine."
  },

  /* ── Lower limb · Gluteal region ───────────────────────────────────── */
  {
    id: "gluteus-maximus",
    name: "Gluteus maximus",
    region: "Lower limb",
    group: "Gluteal region",
    image: "images/muscles/gluteal-region.jpg",
    origin: "Dorsal surface of sacrum, posterior gluteal surface of ilium, thoracolumbar fascia, and sacrotuberous ligament.",
    insertion: "Upper fibers: iliotibial tract. Lower fibers: gluteal tuberosity of femur.",
    innervation: "Inferior gluteal nerve L5–S2.",
    function: "Extends and externally rotates the hip. Upper fibers: abduct the hip. Lower fibers: adduct the hip."
  },
  {
    id: "gluteus-medius",
    name: "Gluteus medius",
    region: "Lower limb",
    group: "Gluteal region",
    image: "images/muscles/gluteal-region.jpg",
    origin: "Gluteal surface of ilium below the iliac crest, between anterior and posterior gluteal lines.",
    insertion: "Lateral surface of greater trochanter of femur.",
    innervation: "Superior gluteal nerve L4–S1.",
    function: "Abducts the hip and stabilizes pelvis in coronal plane. Anterior part: flexion and internal rotation. Posterior part: extension and external rotation."
  },
  {
    id: "gluteus-minimus",
    name: "Gluteus minimus",
    region: "Lower limb",
    group: "Gluteal region",
    image: "images/muscles/gluteal-region.jpg",
    origin: "Gluteal surface of ilium below origin of gluteus medius.",
    insertion: "Anterolateral surface of greater trochanter of femur.",
    innervation: "Superior gluteal nerve L4–S1.",
    function: "Abducts the hip and stabilizes pelvis. Anterior part: flexion and internal rotation. Posterior part: extension and external rotation."
  },
  {
    id: "tensor-fasciae-latae",
    name: "Tensor fasciae latae",
    region: "Lower limb",
    group: "Gluteal region",
    image: "images/muscles/gluteal-region.jpg",
    origin: "Anterior superior iliac spine.",
    insertion: "Iliotibial tract.",
    innervation: "Superior gluteal nerve L4–S1.",
    function: "Tenses the fascia lata; abducts, flexes, and internally rotates the hip."
  },

  /* ── Lower limb · Deep gluteal muscles ─────────────────────────────── */
  {
    id: "piriformis-ll",
    name: "Piriformis",
    region: "Lower limb",
    group: "Deep gluteal muscle",
    image: "images/muscles/gluteal-region.jpg",
    origin: "Pelvic surface of sacrum.",
    insertion: "Apex of greater trochanter of femur.",
    innervation: "Direct branches from sacral plexus S1–S2.",
    function: "Externally rotates, abducts, and extends the hip; stabilizes the hip joint."
  },
  {
    id: "obturator-internus-ll",
    name: "Obturator internus",
    region: "Lower limb",
    group: "Deep gluteal muscle",
    image: "images/muscles/gluteal-region.jpg",
    origin: "Inner surface of obturator membrane and its bony boundaries.",
    insertion: "Medial surface of greater trochanter of femur.",
    innervation: "Nerve to obturator internus / sacral plexus L5–S1.",
    function: "Externally rotates and extends the hip; assists abduction depending on hip position."
  },
  {
    id: "gemelli",
    name: "Gemelli",
    region: "Lower limb",
    group: "Deep gluteal muscle",
    image: "images/muscles/gluteal-region.jpg",
    origin: "Gemellus superior: ischial spine. Gemellus inferior: ischial tuberosity.",
    insertion: "Together with obturator internus tendon onto the medial surface of greater trochanter of femur.",
    innervation: "Gemellus superior: nerve to obturator internus L5–S1. Gemellus inferior: nerve to quadratus femoris L4–S1.",
    function: "Assist obturator internus in external rotation of the hip; stabilize the hip joint."
  },
  {
    id: "quadratus-femoris",
    name: "Quadratus femoris",
    region: "Lower limb",
    group: "Deep gluteal muscle",
    image: "images/muscles/gluteal-region.jpg",
    origin: "Lateral border of ischial tuberosity.",
    insertion: "Intertrochanteric crest of femur.",
    innervation: "Nerve to quadratus femoris L4–S1.",
    function: "Externally rotates the hip joint."
  },

  /* ── Lower limb · Medial thigh ──────────────────────────────────────── */
  {
    id: "obturator-externus",
    name: "Obturator externus",
    region: "Lower limb",
    group: "Medial thigh · deep external rotator",
    image: "images/muscles/medial-thigh-deep.jpg",
    origin: "Outer surface of obturator membrane and its bony boundaries.",
    insertion: "Trochanteric fossa of femur.",
    innervation: "Obturator nerve L3–L4.",
    function: "Adducts and externally rotates the hip; stabilizes pelvis in sagittal plane."
  },
  {
    id: "pectineus",
    name: "Pectineus",
    region: "Lower limb",
    group: "Medial thigh · adductor group",
    image: "images/muscles/medial-thigh-superficial.jpg",
    origin: "Pecten pubis and superior pubic ramus.",
    insertion: "Pectineal line of femur.",
    innervation: "Femoral nerve L2–L3; may receive obturator nerve contribution.",
    function: "Adducts and flexes the hip; assists external rotation."
  },
  {
    id: "adductor-longus",
    name: "Adductor longus",
    region: "Lower limb",
    group: "Medial thigh · adductor group",
    image: "images/muscles/medial-thigh-superficial.jpg",
    origin: "Body of pubis near the pubic symphysis.",
    insertion: "Middle third of linea aspera of femur.",
    innervation: "Obturator nerve L2–L4.",
    function: "Adducts the hip; assists hip flexion and stabilizes the pelvis."
  },
  {
    id: "adductor-brevis",
    name: "Adductor brevis",
    region: "Lower limb",
    group: "Medial thigh · adductor group",
    image: "images/muscles/medial-thigh-superficial.jpg",
    origin: "Inferior pubic ramus.",
    insertion: "Pectineal line and proximal linea aspera of femur.",
    innervation: "Obturator nerve L2–L4.",
    function: "Adducts the hip; assists hip flexion and external rotation."
  },
  {
    id: "adductor-magnus",
    name: "Adductor magnus",
    region: "Lower limb",
    group: "Medial thigh · adductor group",
    image: "images/muscles/medial-thigh-deep.jpg",
    origin: "Adductor part: inferior pubic ramus and ischial ramus. Hamstring part: ischial tuberosity.",
    insertion: "Adductor part: medial lip of linea aspera. Hamstring part: adductor tubercle of femur.",
    innervation: "Adductor part: obturator nerve L2–L4. Hamstring part: tibial division of sciatic nerve L4.",
    function: "Adducts the hip. Adductor part assists slight flexion; hamstring part assists extension. Stabilizes the pelvis."
  },
  {
    id: "gracilis",
    name: "Gracilis",
    region: "Lower limb",
    group: "Medial thigh · adductor group",
    image: "images/muscles/medial-thigh-superficial.jpg",
    origin: "Inferior pubic ramus.",
    insertion: "Medial surface of proximal tibia; part of pes anserinus.",
    innervation: "Obturator nerve L2–L3.",
    function: "Adducts the hip; flexes the knee and internally rotates the flexed knee."
  },

  /* ── Lower limb · Anterior thigh ────────────────────────────────────── */
  {
    id: "sartorius",
    name: "Sartorius",
    region: "Lower limb",
    group: "Anterior thigh",
    image: "images/muscles/anterior-thigh.jpg",
    origin: "Anterior superior iliac spine.",
    insertion: "Medial surface of proximal tibia; part of pes anserinus.",
    innervation: "Femoral nerve L2–L3.",
    function: "Hip: flexion, abduction, and external rotation. Knee: flexion and internal rotation."
  },
  {
    id: "quadriceps-femoris",
    name: "Quadriceps femoris",
    region: "Lower limb",
    group: "Anterior thigh",
    image: "images/muscles/anterior-thigh.jpg",
    origin: "Rectus femoris: anterior inferior iliac spine and acetabular roof. Vastus medialis: medial lip of linea aspera and distal intertrochanteric line. Vastus lateralis: greater trochanter and lateral lip of linea aspera. Vastus intermedius: anterior and lateral surfaces of femoral shaft.",
    insertion: "Tibial tuberosity via quadriceps tendon, patella, and patellar ligament.",
    innervation: "Femoral nerve L2–L4.",
    function: "Extends the knee. Rectus femoris also flexes the hip."
  },
  {
    id: "articularis-genus",
    name: "Articularis genus",
    region: "Lower limb",
    group: "Anterior thigh",
    image: "images/muscles/anterior-thigh.jpg",
    origin: "Distal anterior surface of femur.",
    insertion: "Suprapatellar bursa and knee joint capsule.",
    innervation: "Femoral nerve L2–L4.",
    function: "Pulls the suprapatellar bursa superiorly during knee extension to prevent impingement."
  },

  /* ── Lower limb · Posterior thigh / hamstrings ──────────────────────── */
  {
    id: "biceps-femoris",
    name: "Biceps femoris",
    region: "Lower limb",
    group: "Posterior thigh · hamstrings",
    image: "images/muscles/posterior-thigh.jpg",
    origin: "Long head: ischial tuberosity. Short head: linea aspera and lateral supracondylar line of femur.",
    insertion: "Head of fibula.",
    innervation: "Long head: tibial division of sciatic nerve L5–S2. Short head: common fibular division L5–S2.",
    function: "Flexes the knee and externally rotates the flexed knee. Long head also extends the hip."
  },
  {
    id: "semitendinosus",
    name: "Semitendinosus",
    region: "Lower limb",
    group: "Posterior thigh · hamstrings",
    image: "images/muscles/posterior-thigh.jpg",
    origin: "Ischial tuberosity.",
    insertion: "Medial surface of proximal tibia; part of pes anserinus.",
    innervation: "Tibial division of sciatic nerve L5–S2.",
    function: "Extends the hip; flexes the knee; internally rotates the flexed knee."
  },
  {
    id: "semimembranosus",
    name: "Semimembranosus",
    region: "Lower limb",
    group: "Posterior thigh · hamstrings",
    image: "images/muscles/posterior-thigh.jpg",
    origin: "Ischial tuberosity.",
    insertion: "Posterior part of medial condyle of tibia.",
    innervation: "Tibial division of sciatic nerve L5–S2.",
    function: "Extends the hip; flexes the knee; internally rotates the flexed knee."
  },

  /* ── Lower limb · Anterior compartment of leg ──────────────────────── */
  {
    id: "tibialis-anterior",
    name: "Tibialis anterior",
    region: "Lower limb",
    group: "Anterior compartment of leg",
    image: "images/muscles/anterior-leg.jpg",
    origin: "Upper two thirds of lateral surface of tibia, interosseous membrane, and superficial crural fascia.",
    insertion: "Medial cuneiform and base of first metatarsal.",
    innervation: "Deep fibular nerve L4–L5.",
    function: "Dorsiflexes the ankle and inverts the foot."
  },
  {
    id: "extensor-hallucis-longus",
    name: "Extensor hallucis longus",
    region: "Lower limb",
    group: "Anterior compartment of leg",
    image: "images/muscles/anterior-leg.jpg",
    origin: "Middle third of medial surface of fibula and interosseous membrane.",
    insertion: "Dorsal aponeurosis / base of distal phalanx of great toe.",
    innervation: "Deep fibular nerve L4–L5.",
    function: "Dorsiflexes the ankle; extends MTP and IP joints of great toe; assists inversion / eversion."
  },
  {
    id: "extensor-digitorum-longus",
    name: "Extensor digitorum longus",
    region: "Lower limb",
    group: "Anterior compartment of leg",
    image: "images/muscles/anterior-leg.jpg",
    origin: "Head and medial surface of fibula, lateral condyle of tibia, and interosseous membrane.",
    insertion: "Dorsal aponeuroses of toes 2–5 at bases of distal phalanges.",
    innervation: "Deep fibular nerve L4–L5.",
    function: "Dorsiflexes the ankle; everts the foot; extends MTP and IP joints of toes 2–5."
  },
  {
    id: "fibularis-tertius",
    name: "Fibularis tertius",
    region: "Lower limb",
    group: "Anterior compartment of leg",
    image: "images/muscles/anterior-leg.jpg",
    origin: "Distal anterior border of fibula.",
    insertion: "Base of fifth metatarsal.",
    innervation: "Deep fibular nerve L4–L5.",
    function: "Dorsiflexes the ankle and everts the foot."
  },

  /* ── Lower limb · Lateral compartment of leg ───────────────────────── */
  {
    id: "fibularis-longus",
    name: "Fibularis longus",
    region: "Lower limb",
    group: "Lateral compartment of leg",
    image: "images/muscles/lateral-leg.jpg",
    origin: "Head of fibula and upper lateral surface of fibula.",
    insertion: "Base of first metatarsal and medial cuneiform on the plantar surface.",
    innervation: "Superficial fibular nerve L5–S2.",
    function: "Everts the foot and plantarflexes the ankle; supports the transverse arch."
  },
  {
    id: "fibularis-brevis",
    name: "Fibularis brevis",
    region: "Lower limb",
    group: "Lateral compartment of leg",
    image: "images/muscles/lateral-leg.jpg",
    origin: "Distal lateral surface of fibula.",
    insertion: "Tuberosity / base of fifth metatarsal.",
    innervation: "Superficial fibular nerve L5–S2.",
    function: "Everts the foot and assists plantarflexion."
  },

  /* ── Lower limb · Posterior leg · superficial ───────────────────────── */
  {
    id: "gastrocnemius",
    name: "Gastrocnemius",
    region: "Lower limb",
    group: "Posterior compartment of leg · superficial",
    image: "images/muscles/posterior-leg-superficial.jpg",
    origin: "Medial head: medial femoral condyle. Lateral head: lateral femoral condyle.",
    insertion: "Calcaneal tuberosity via calcaneal (Achilles) tendon.",
    innervation: "Tibial nerve S1–S2.",
    function: "Plantarflexes the ankle; flexes the knee. Most powerful plantarflexor when the knee is extended."
  },
  {
    id: "soleus",
    name: "Soleus",
    region: "Lower limb",
    group: "Posterior compartment of leg · superficial",
    image: "images/muscles/posterior-leg-superficial.jpg",
    origin: "Posterior head and proximal shaft of fibula, soleal line and medial border of tibia, and tendinous arch of soleus.",
    insertion: "Calcaneal tuberosity via calcaneal (Achilles) tendon.",
    innervation: "Tibial nerve S1–S2.",
    function: "Plantarflexes the ankle regardless of knee position; important postural muscle for standing."
  },
  {
    id: "plantaris",
    name: "Plantaris",
    region: "Lower limb",
    group: "Posterior compartment of leg · superficial",
    image: "images/muscles/posterior-leg-superficial.jpg",
    origin: "Lateral supracondylar line of femur near the lateral femoral condyle.",
    insertion: "Calcaneus, often via or near the calcaneal tendon.",
    innervation: "Tibial nerve S1–S2.",
    function: "Weakly plantarflexes the ankle and weakly flexes the knee."
  },

  /* ── Lower limb · Posterior leg · deep ─────────────────────────────── */
  {
    id: "popliteus",
    name: "Popliteus",
    region: "Lower limb",
    group: "Posterior compartment of leg · deep",
    image: "images/muscles/posterior-leg-deep.jpg",
    origin: "Lateral femoral condyle and lateral meniscus.",
    insertion: "Posterior surface of tibia superior to the soleal line.",
    innervation: "Tibial nerve L4–S1.",
    function: "Unlocks the knee by rotating femur laterally on fixed tibia (or tibia medially on fixed femur); weakly flexes the knee."
  },
  {
    id: "tibialis-posterior",
    name: "Tibialis posterior",
    region: "Lower limb",
    group: "Posterior compartment of leg · deep",
    image: "images/muscles/posterior-leg-deep.jpg",
    origin: "Posterior surfaces of tibia and fibula and interosseous membrane.",
    insertion: "Navicular tuberosity, cuneiforms, cuboid, and bases of metatarsals 2–4.",
    innervation: "Tibial nerve L4–L5.",
    function: "Inverts the foot and plantarflexes the ankle; supports the medial longitudinal arch."
  },
  {
    id: "flexor-digitorum-longus",
    name: "Flexor digitorum longus",
    region: "Lower limb",
    group: "Posterior compartment of leg · deep",
    image: "images/muscles/posterior-leg-deep.jpg",
    origin: "Posterior surface of tibia.",
    insertion: "Bases of distal phalanges of toes 2–5.",
    innervation: "Tibial nerve L5–S2.",
    function: "Flexes toes 2–5; plantarflexes the ankle; supports the longitudinal arches."
  },
  {
    id: "flexor-hallucis-longus",
    name: "Flexor hallucis longus",
    region: "Lower limb",
    group: "Posterior compartment of leg · deep",
    image: "images/muscles/posterior-leg-deep.jpg",
    origin: "Inferior posterior surface of fibula and interosseous membrane.",
    insertion: "Base of distal phalanx of great toe.",
    innervation: "Tibial nerve S2–S3.",
    function: "Flexes the great toe; plantarflexes the ankle; supports the medial longitudinal arch."
  },

  /* ── Lower limb · Dorsum of foot ────────────────────────────────────── */
  {
    id: "extensor-digitorum-brevis",
    name: "Extensor digitorum brevis",
    region: "Lower limb",
    group: "Dorsum of foot",
    image: "images/muscles/dorsal-foot.jpg",
    origin: "Superolateral surface of calcaneus.",
    insertion: "Dorsal aponeuroses of toes 2–4.",
    innervation: "Deep fibular nerve L5–S1.",
    function: "Extends toes 2–4 at MTP and IP joints."
  },
  {
    id: "extensor-hallucis-brevis",
    name: "Extensor hallucis brevis",
    region: "Lower limb",
    group: "Dorsum of foot",
    image: "images/muscles/dorsal-foot.jpg",
    origin: "Superolateral surface of calcaneus.",
    insertion: "Base of proximal phalanx of great toe.",
    innervation: "Deep fibular nerve L5–S1.",
    function: "Extends the great toe at the MTP joint."
  },

  /* ── Lower limb · Sole · first layer ────────────────────────────────── */
  {
    id: "abductor-hallucis",
    name: "Abductor hallucis",
    region: "Lower limb",
    group: "Sole of foot · first layer",
    image: "images/muscles/sole-layer1.jpg",
    origin: "Medial process of calcaneal tuberosity, flexor retinaculum, and plantar aponeurosis.",
    insertion: "Medial side of base of proximal phalanx of great toe.",
    innervation: "Medial plantar nerve S1–S3.",
    function: "Abducts and flexes the great toe; supports the medial longitudinal arch."
  },
  {
    id: "flexor-digitorum-brevis",
    name: "Flexor digitorum brevis",
    region: "Lower limb",
    group: "Sole of foot · first layer",
    image: "images/muscles/sole-layer1.jpg",
    origin: "Medial process of calcaneal tuberosity and plantar aponeurosis.",
    insertion: "Sides of middle phalanges of toes 2–5.",
    innervation: "Medial plantar nerve S1–S3.",
    function: "Flexes toes 2–5 at PIP joints; assists flexion at MTP joints."
  },
  {
    id: "abductor-digiti-minimi-foot",
    name: "Abductor digiti minimi",
    region: "Lower limb",
    group: "Sole of foot · first layer",
    image: "images/muscles/sole-layer1.jpg",
    origin: "Medial and lateral processes of calcaneal tuberosity and plantar aponeurosis.",
    insertion: "Lateral side of base of proximal phalanx of fifth toe.",
    innervation: "Lateral plantar nerve S1–S3.",
    function: "Abducts and flexes the fifth toe; supports the lateral longitudinal arch."
  },

  /* ── Lower limb · Sole · second layer ───────────────────────────────── */
  {
    id: "quadratus-plantae",
    name: "Quadratus plantae",
    region: "Lower limb",
    group: "Sole of foot · second layer",
    image: "images/muscles/sole-deep-layers.jpg",
    origin: "Medial and lateral surfaces of calcaneus.",
    insertion: "Lateral border of flexor digitorum longus tendon.",
    innervation: "Lateral plantar nerve S1–S3.",
    function: "Assists flexor digitorum longus in flexing toes 2–5; corrects its oblique pull."
  },
  {
    id: "lumbricals-foot",
    name: "Lumbricals (foot)",
    region: "Lower limb",
    group: "Sole of foot · second layer",
    image: "images/muscles/sole-deep-layers.jpg",
    origin: "1st lumbrical: medial side of FDL tendon to 2nd toe. 2nd–4th lumbricals: adjacent sides of FDL tendons.",
    insertion: "Medial sides of extensor expansions of toes 2–5.",
    innervation: "1st lumbrical: medial plantar nerve. 2nd–4th lumbricals: lateral plantar nerve.",
    function: "Flex MTP joints and extend IP joints of toes 2–5."
  },

  /* ── Lower limb · Sole · third layer ────────────────────────────────── */
  {
    id: "flexor-hallucis-brevis",
    name: "Flexor hallucis brevis",
    region: "Lower limb",
    group: "Sole of foot · third layer",
    image: "images/muscles/sole-deep-layers.jpg",
    origin: "Plantar surfaces of cuboid and lateral cuneiform; tendon of tibialis posterior.",
    insertion: "Medial and lateral sides of base of proximal phalanx of great toe, via sesamoid bones.",
    innervation: "Medial plantar nerve S1–S3.",
    function: "Flexes the great toe at the MTP joint."
  },
  {
    id: "adductor-hallucis",
    name: "Adductor hallucis",
    region: "Lower limb",
    group: "Sole of foot · third layer",
    image: "images/muscles/sole-deep-layers.jpg",
    origin: "Oblique head: bases of metatarsals 2–4 and sheath of fibularis longus. Transverse head: plantar MTP ligaments of toes 3–5.",
    insertion: "Lateral side of base of proximal phalanx of great toe.",
    innervation: "Lateral plantar nerve S2–S3.",
    function: "Adducts the great toe; assists maintenance of the transverse arch."
  },
  {
    id: "flexor-digiti-minimi-brevis-foot",
    name: "Flexor digiti minimi brevis",
    region: "Lower limb",
    group: "Sole of foot · third layer",
    image: "images/muscles/sole-deep-layers.jpg",
    origin: "Base of fifth metatarsal and sheath of fibularis longus.",
    insertion: "Base of proximal phalanx of fifth toe.",
    innervation: "Lateral plantar nerve S2–S3.",
    function: "Flexes the fifth toe at the MTP joint."
  },

  /* ── Lower limb · Sole · fourth layer ───────────────────────────────── */
  {
    id: "plantar-interossei",
    name: "Plantar interossei",
    region: "Lower limb",
    group: "Sole of foot · fourth layer",
    image: "images/muscles/sole-deep-layers.jpg",
    origin: "Medial sides of metatarsals 3–5.",
    insertion: "Medial sides of bases of proximal phalanges and extensor expansions of toes 3–5.",
    innervation: "Lateral plantar nerve S2–S3.",
    function: "Adduct toes 3–5 toward the second toe; flex MTP joints and extend IP joints."
  },
  {
    id: "dorsal-interossei-foot",
    name: "Dorsal interossei (foot)",
    region: "Lower limb",
    group: "Sole of foot · fourth layer",
    image: "images/muscles/sole-deep-layers.jpg",
    origin: "Adjacent sides of metatarsals 1–5.",
    insertion: "Bases of proximal phalanges and extensor expansions of toes 2–4.",
    innervation: "Lateral plantar nerve S2–S3.",
    function: "Abduct toes 2–4 away from second toe; flex MTP joints and extend IP joints."
  }
,
  /* ── Upper limb ─────────────────────────────────────────────────────── */

  /* Superficial back / shoulder girdle */
  {
    id: "trapezius",
    name: "Trapezius",
    region: "Upper limb",
    group: "Superficial back / shoulder girdle",
    image: "images/muscles/trapezius-levator-rhomboids.jpg",
    origin: "Medial third of superior nuchal line, external occipital protuberance, nuchal ligament, and spinous processes of C7–T12.",
    insertion: "Lateral third of clavicle, acromion, and spine of scapula.",
    innervation: "Accessory nerve CN XI; proprioceptive fibers from C3–C4.",
    function: "Descending part elevates scapula; transverse part retracts scapula; ascending part depresses scapula. Together, the upper and lower fibers rotate the scapula upward."
  },
  {
    id: "latissimus-dorsi",
    name: "Latissimus dorsi",
    region: "Upper limb",
    group: "Superficial back / shoulder girdle",
    image: "images/muscles/latissimus-teres-major.jpg",
    origin: "Spinous processes of T7–T12, thoracolumbar fascia, iliac crest, inferior ribs, and sometimes inferior angle of scapula.",
    insertion: "Floor of intertubercular sulcus of humerus.",
    innervation: "Thoracodorsal nerve C6–C8.",
    function: "Extends, adducts, and internally rotates the arm; raises the trunk during climbing."
  },

  /* Shoulder girdle */
  {
    id: "levator-scapulae",
    name: "Levator scapulae",
    region: "Upper limb",
    group: "Shoulder girdle",
    image: "images/muscles/trapezius-levator-rhomboids.jpg",
    origin: "Transverse processes of C1–C4.",
    insertion: "Superior part of medial border of scapula.",
    innervation: "Dorsal scapular nerve C5 and cervical nerves C3–C4.",
    function: "Elevates scapula and rotates it downward; helps laterally flex the neck."
  },
  {
    id: "rhomboids",
    name: "Rhomboids",
    region: "Upper limb",
    group: "Shoulder girdle",
    image: "images/muscles/trapezius-levator-rhomboids.jpg",
    origin: "Rhomboid minor: nuchal ligament and spinous processes of C7–T1. Rhomboid major: spinous processes of T2–T5.",
    insertion: "Medial border of scapula from root of spine to inferior angle.",
    innervation: "Dorsal scapular nerve C4–C5.",
    function: "Retract scapula, rotate scapula downward, and fix scapula to thoracic wall."
  },
  {
    id: "serratus-anterior",
    name: "Serratus anterior",
    region: "Upper limb",
    group: "Shoulder girdle",
    image: "images/muscles/subclavius-pec-minor-serratus.jpg",
    origin: "External surfaces of ribs 1–8 or 1–9.",
    insertion: "Anterior surface of medial border of scapula.",
    innervation: "Long thoracic nerve C5–C7.",
    function: "Protracts scapula and holds it against thoracic wall; inferior fibers rotate scapula upward."
  },

  /* Anterior thoracoappendicular */
  {
    id: "pectoralis-major",
    name: "Pectoralis major",
    region: "Upper limb",
    group: "Anterior thoracoappendicular muscle",
    image: "images/muscles/pec-major-coracobrachialis.jpg",
    origin: "Clavicular head: medial half of clavicle. Sternocostal head: sternum, superior costal cartilages, and aponeurosis of external oblique.",
    insertion: "Lateral lip of intertubercular sulcus of humerus.",
    innervation: "Lateral and medial pectoral nerves C5–T1.",
    function: "Adducts and internally rotates arm. Clavicular head flexes arm; sternocostal head extends arm from flexed position."
  },
  {
    id: "pectoralis-minor",
    name: "Pectoralis minor",
    region: "Upper limb",
    group: "Anterior thoracoappendicular muscle",
    image: "images/muscles/subclavius-pec-minor-serratus.jpg",
    origin: "Ribs 3–5 near their costal cartilages.",
    insertion: "Coracoid process of scapula.",
    innervation: "Medial pectoral nerve C8–T1.",
    function: "Stabilizes scapula by drawing it anteriorly and inferiorly against the thoracic wall."
  },
  {
    id: "subclavius",
    name: "Subclavius",
    region: "Upper limb",
    group: "Anterior thoracoappendicular muscle",
    image: "images/muscles/subclavius-pec-minor-serratus.jpg",
    origin: "First rib and its costal cartilage.",
    insertion: "Inferior surface of middle third of clavicle.",
    innervation: "Nerve to subclavius C5–C6.",
    function: "Anchors and depresses clavicle."
  },

  /* Shoulder */
  {
    id: "deltoid",
    name: "Deltoid",
    region: "Upper limb",
    group: "Shoulder",
    image: "images/muscles/deltoid.jpg",
    origin: "Clavicular part: lateral third of clavicle. Acromial part: acromion. Spinal part: spine of scapula.",
    insertion: "Deltoid tuberosity of humerus.",
    innervation: "Axillary nerve C5–C6.",
    function: "Clavicular part: flexes and internally rotates arm. Acromial part: abducts arm, especially from about 15° to 90°. Spinal part: extends and externally rotates arm."
  },

  /* Rotator cuff */
  {
    id: "supraspinatus",
    name: "Supraspinatus",
    region: "Upper limb",
    group: "Rotator cuff",
    image: "images/muscles/rotator-cuff.jpg",
    origin: "Supraspinous fossa of scapula.",
    insertion: "Superior facet of greater tubercle of humerus.",
    innervation: "Suprascapular nerve C5–C6.",
    function: "Initiates abduction of arm and stabilizes glenohumeral joint."
  },
  {
    id: "infraspinatus",
    name: "Infraspinatus",
    region: "Upper limb",
    group: "Rotator cuff",
    image: "images/muscles/rotator-cuff.jpg",
    origin: "Infraspinous fossa of scapula.",
    insertion: "Middle facet of greater tubercle of humerus.",
    innervation: "Suprascapular nerve C5–C6.",
    function: "Externally rotates arm and stabilizes glenohumeral joint."
  },
  {
    id: "teres-minor",
    name: "Teres minor",
    region: "Upper limb",
    group: "Rotator cuff",
    image: "images/muscles/rotator-cuff.jpg",
    origin: "Middle part of lateral border of scapula.",
    insertion: "Inferior facet of greater tubercle of humerus.",
    innervation: "Axillary nerve C5–C6.",
    function: "Externally rotates arm and stabilizes glenohumeral joint."
  },
  {
    id: "subscapularis",
    name: "Subscapularis",
    region: "Upper limb",
    group: "Rotator cuff",
    image: "images/muscles/rotator-cuff.jpg",
    origin: "Subscapular fossa of scapula.",
    insertion: "Lesser tubercle of humerus.",
    innervation: "Upper and lower subscapular nerves C5–C7.",
    function: "Internally rotates and adducts arm; stabilizes glenohumeral joint."
  },

  /* Posterior shoulder */
  {
    id: "teres-major",
    name: "Teres major",
    region: "Upper limb",
    group: "Posterior shoulder",
    image: "images/muscles/latissimus-teres-major.jpg",
    origin: "Posterior surface of inferior angle of scapula.",
    insertion: "Medial lip of intertubercular sulcus of humerus.",
    innervation: "Lower subscapular nerve C5–C6.",
    function: "Adducts, extends, and internally rotates arm."
  },

  /* Anterior arm */
  {
    id: "biceps-brachii",
    name: "Biceps brachii",
    region: "Upper limb",
    group: "Anterior arm",
    image: "images/muscles/biceps-brachialis.jpg",
    origin: "Long head: supraglenoid tubercle of scapula. Short head: coracoid process of scapula.",
    insertion: "Radial tuberosity and bicipital aponeurosis.",
    innervation: "Musculocutaneous nerve C5–C6.",
    function: "Supinates forearm and flexes elbow; weakly flexes shoulder."
  },
  {
    id: "brachialis",
    name: "Brachialis",
    region: "Upper limb",
    group: "Anterior arm",
    image: "images/muscles/biceps-brachialis.jpg",
    origin: "Distal half of anterior surface of humerus.",
    insertion: "Tuberosity of ulna and coronoid process of ulna.",
    innervation: "Musculocutaneous nerve C5–C6; small lateral part may receive radial nerve contribution.",
    function: "Primary flexor of elbow."
  },
  {
    id: "coracobrachialis",
    name: "Coracobrachialis",
    region: "Upper limb",
    group: "Anterior arm",
    image: "images/muscles/pec-major-coracobrachialis.jpg",
    origin: "Coracoid process of scapula.",
    insertion: "Middle third of medial surface of humerus.",
    innervation: "Musculocutaneous nerve C5–C7.",
    function: "Flexes and adducts arm at shoulder."
  },

  /* Posterior arm */
  {
    id: "triceps-brachii",
    name: "Triceps brachii",
    region: "Upper limb",
    group: "Posterior arm",
    image: "images/muscles/triceps-anconeus.jpg",
    origin: "Long head: infraglenoid tubercle of scapula. Lateral head: posterior humerus superior to radial groove. Medial head: posterior humerus inferior to radial groove.",
    insertion: "Olecranon of ulna.",
    innervation: "Radial nerve C6–C8.",
    function: "Extends elbow. Long head also extends and adducts arm at shoulder."
  },

  /* Posterior arm / elbow */
  {
    id: "anconeus",
    name: "Anconeus",
    region: "Upper limb",
    group: "Posterior arm / elbow",
    image: "images/muscles/triceps-anconeus.jpg",
    origin: "Lateral epicondyle of humerus.",
    insertion: "Lateral surface of olecranon and superior posterior ulna.",
    innervation: "Radial nerve C7–T1.",
    function: "Assists elbow extension; stabilizes elbow joint."
  },

  /* Anterior forearm - superficial */
  {
    id: "pronator-teres",
    name: "Pronator teres",
    region: "Upper limb",
    group: "Anterior forearm · superficial layer",
    image: "images/muscles/anterior-forearm.jpg",
    origin: "Humeral head: medial epicondyle of humerus. Ulnar head: coronoid process of ulna.",
    insertion: "Lateral surface of radius, distal to supinator insertion.",
    innervation: "Median nerve C6–C7.",
    function: "Pronates forearm; weakly flexes elbow."
  },
  {
    id: "flexor-carpi-radialis",
    name: "Flexor carpi radialis",
    region: "Upper limb",
    group: "Anterior forearm · superficial layer",
    image: "images/muscles/anterior-forearm.jpg",
    origin: "Medial epicondyle of humerus.",
    insertion: "Base of 2nd metacarpal, sometimes also base of 3rd metacarpal.",
    innervation: "Median nerve C6–C7.",
    function: "Flexes and abducts wrist."
  },
  {
    id: "palmaris-longus",
    name: "Palmaris longus",
    region: "Upper limb",
    group: "Anterior forearm · superficial layer",
    image: "images/muscles/anterior-forearm.jpg",
    origin: "Medial epicondyle of humerus.",
    insertion: "Palmar aponeurosis.",
    innervation: "Median nerve C7–C8.",
    function: "Weakly flexes wrist and tightens palmar aponeurosis."
  },
  {
    id: "flexor-carpi-ulnaris",
    name: "Flexor carpi ulnaris",
    region: "Upper limb",
    group: "Anterior forearm · superficial layer",
    image: "images/muscles/anterior-forearm.jpg",
    origin: "Humeral head: medial epicondyle of humerus. Ulnar head: olecranon and posterior border of ulna.",
    insertion: "Pisiform, hook of hamate, and base of 5th metacarpal.",
    innervation: "Ulnar nerve C7–T1.",
    function: "Flexes and adducts wrist."
  },

  /* Anterior forearm - intermediate */
  {
    id: "flexor-digitorum-superficialis",
    name: "Flexor digitorum superficialis",
    region: "Upper limb",
    group: "Anterior forearm · intermediate layer",
    image: "images/muscles/anterior-forearm.jpg",
    origin: "Humeroulnar head: medial epicondyle of humerus and coronoid process of ulna. Radial head: proximal anterior border of radius.",
    insertion: "Sides of middle phalanges of digits 2–5.",
    innervation: "Median nerve C8–T1.",
    function: "Flexes PIP joints of digits 2–5; also assists flexion of MCP joints and wrist."
  },

  /* Anterior forearm - deep */
  {
    id: "flexor-digitorum-profundus",
    name: "Flexor digitorum profundus",
    region: "Upper limb",
    group: "Anterior forearm · deep layer",
    image: "images/muscles/anterior-forearm.jpg",
    origin: "Proximal two thirds of anterior and medial ulna and interosseous membrane.",
    insertion: "Bases of distal phalanges of digits 2–5.",
    innervation: "Lateral half to digits 2–3: anterior interosseous nerve from median nerve C8–T1. Medial half to digits 4–5: ulnar nerve C8–T1.",
    function: "Flexes DIP joints of digits 2–5; assists flexion of PIP, MCP, and wrist joints."
  },
  {
    id: "flexor-pollicis-longus",
    name: "Flexor pollicis longus",
    region: "Upper limb",
    group: "Anterior forearm · deep layer",
    image: "images/muscles/anterior-forearm.jpg",
    origin: "Anterior surface of radius and interosseous membrane.",
    insertion: "Base of distal phalanx of thumb.",
    innervation: "Anterior interosseous nerve from median nerve C8–T1.",
    function: "Flexes IP joint of thumb; assists flexion of MCP and CMC joints of thumb."
  },
  {
    id: "pronator-quadratus",
    name: "Pronator quadratus",
    region: "Upper limb",
    group: "Anterior forearm · deep layer",
    image: "images/muscles/anterior-forearm.jpg",
    origin: "Distal anterior surface of ulna.",
    insertion: "Distal anterior surface of radius.",
    innervation: "Anterior interosseous nerve from median nerve C8–T1.",
    function: "Pronates forearm and stabilizes distal radioulnar joint."
  },

  /* Posterior forearm - radial group */
  {
    id: "brachioradialis",
    name: "Brachioradialis",
    region: "Upper limb",
    group: "Posterior forearm · radial group",
    image: "images/muscles/posterior-forearm-radialis.jpg",
    origin: "Distal lateral supracondylar ridge of humerus and lateral intermuscular septum.",
    insertion: "Styloid process of radius.",
    innervation: "Radial nerve C5–C6.",
    function: "Flexes elbow, especially when forearm is in mid-pronated position."
  },
  {
    id: "extensor-carpi-radialis-longus",
    name: "Extensor carpi radialis longus",
    region: "Upper limb",
    group: "Posterior forearm · radial group",
    image: "images/muscles/posterior-forearm-radialis.jpg",
    origin: "Lateral supracondylar ridge of humerus and lateral intermuscular septum.",
    insertion: "Base of 2nd metacarpal.",
    innervation: "Radial nerve C6–C7.",
    function: "Extends and abducts wrist; weakly flexes elbow."
  },
  {
    id: "extensor-carpi-radialis-brevis",
    name: "Extensor carpi radialis brevis",
    region: "Upper limb",
    group: "Posterior forearm · radial group",
    image: "images/muscles/posterior-forearm-radialis.jpg",
    origin: "Lateral epicondyle of humerus.",
    insertion: "Base of 3rd metacarpal.",
    innervation: "Deep branch of radial nerve C7–C8.",
    function: "Extends and abducts wrist."
  },

  /* Posterior forearm - superficial layer */
  {
    id: "extensor-digitorum",
    name: "Extensor digitorum",
    region: "Upper limb",
    group: "Posterior forearm · superficial layer",
    image: "images/muscles/posterior-forearm-extensors.jpg",
    origin: "Lateral epicondyle of humerus via common extensor tendon.",
    insertion: "Dorsal digital expansions of digits 2–5.",
    innervation: "Posterior interosseous nerve from radial nerve C7–C8.",
    function: "Extends digits 2–5 at MCP and IP joints; assists wrist extension."
  },
  {
    id: "extensor-digiti-minimi",
    name: "Extensor digiti minimi",
    region: "Upper limb",
    group: "Posterior forearm · superficial layer",
    image: "images/muscles/posterior-forearm-extensors.jpg",
    origin: "Lateral epicondyle of humerus via common extensor tendon.",
    insertion: "Dorsal digital expansion of digit 5.",
    innervation: "Posterior interosseous nerve from radial nerve C7–C8.",
    function: "Extends little finger; assists wrist extension."
  },
  {
    id: "extensor-carpi-ulnaris",
    name: "Extensor carpi ulnaris",
    region: "Upper limb",
    group: "Posterior forearm · superficial layer",
    image: "images/muscles/posterior-forearm-extensors.jpg",
    origin: "Lateral epicondyle of humerus and posterior border of ulna.",
    insertion: "Base of 5th metacarpal.",
    innervation: "Posterior interosseous nerve from radial nerve C7–C8.",
    function: "Extends and adducts wrist."
  },

  /* Posterior forearm - deep layer */
  {
    id: "supinator",
    name: "Supinator",
    region: "Upper limb",
    group: "Posterior forearm · deep layer",
    image: "images/muscles/posterior-forearm-extensors.jpg",
    origin: "Lateral epicondyle of humerus, radial collateral ligament, annular ligament, and supinator crest of ulna.",
    insertion: "Proximal lateral, posterior, and anterior surfaces of radius.",
    innervation: "Deep branch of radial nerve C6–C7.",
    function: "Supinates forearm."
  },
  {
    id: "abductor-pollicis-longus",
    name: "Abductor pollicis longus",
    region: "Upper limb",
    group: "Posterior forearm · deep layer",
    image: "images/muscles/posterior-forearm-extensors.jpg",
    origin: "Posterior surfaces of radius and ulna and interosseous membrane.",
    insertion: "Base of 1st metacarpal.",
    innervation: "Posterior interosseous nerve from radial nerve C7–C8.",
    function: "Abducts and extends thumb at CMC joint."
  },
  {
    id: "extensor-pollicis-brevis",
    name: "Extensor pollicis brevis",
    region: "Upper limb",
    group: "Posterior forearm · deep layer",
    image: "images/muscles/posterior-forearm-extensors.jpg",
    origin: "Posterior surface of radius and interosseous membrane.",
    insertion: "Base of proximal phalanx of thumb.",
    innervation: "Posterior interosseous nerve from radial nerve C7–C8.",
    function: "Extends thumb at MCP joint and assists extension at CMC joint."
  },
  {
    id: "extensor-pollicis-longus",
    name: "Extensor pollicis longus",
    region: "Upper limb",
    group: "Posterior forearm · deep layer",
    image: "images/muscles/posterior-forearm-extensors.jpg",
    origin: "Posterior surface of ulna and interosseous membrane.",
    insertion: "Base of distal phalanx of thumb.",
    innervation: "Posterior interosseous nerve from radial nerve C7–C8.",
    function: "Extends thumb at IP joint; also extends MCP and CMC joints of thumb."
  },
  {
    id: "extensor-indicis",
    name: "Extensor indicis",
    region: "Upper limb",
    group: "Posterior forearm · deep layer",
    image: "images/muscles/posterior-forearm-extensors.jpg",
    origin: "Posterior surface of ulna and interosseous membrane.",
    insertion: "Dorsal digital expansion of index finger.",
    innervation: "Posterior interosseous nerve from radial nerve C7–C8.",
    function: "Extends index finger; assists wrist extension."
  },

  /* Thenar */
  {
    id: "abductor-pollicis-brevis",
    name: "Abductor pollicis brevis",
    region: "Upper limb",
    group: "Thenar muscles",
    image: "images/muscles/thenar-hypothenar.jpg",
    origin: "Flexor retinaculum and tubercles of scaphoid and trapezium.",
    insertion: "Lateral side of base of proximal phalanx of thumb.",
    innervation: "Recurrent branch of median nerve C8–T1.",
    function: "Abducts thumb."
  },
  {
    id: "flexor-pollicis-brevis",
    name: "Flexor pollicis brevis",
    region: "Upper limb",
    group: "Thenar muscles",
    image: "images/muscles/thenar-hypothenar.jpg",
    origin: "Superficial head: flexor retinaculum and trapezium. Deep head: trapezoid and capitate.",
    insertion: "Base of proximal phalanx of thumb.",
    innervation: "Superficial head: recurrent branch of median nerve C8–T1. Deep head: deep branch of ulnar nerve C8–T1.",
    function: "Flexes thumb at MCP joint."
  },
  {
    id: "opponens-pollicis",
    name: "Opponens pollicis",
    region: "Upper limb",
    group: "Thenar muscles",
    image: "images/muscles/thenar-hypothenar.jpg",
    origin: "Flexor retinaculum and tubercle of trapezium.",
    insertion: "Lateral side of 1st metacarpal.",
    innervation: "Recurrent branch of median nerve C8–T1.",
    function: "Opposes thumb by flexion, abduction, and medial rotation at the CMC joint."
  },

  /* Deep palm / adductor */
  {
    id: "adductor-pollicis",
    name: "Adductor pollicis",
    region: "Upper limb",
    group: "Deep palm / adductor compartment",
    image: "images/muscles/deep-hand.jpg",
    origin: "Oblique head: bases of 2nd and 3rd metacarpals, capitate, and adjacent carpal bones. Transverse head: anterior shaft of 3rd metacarpal.",
    insertion: "Medial side of base of proximal phalanx of thumb.",
    innervation: "Deep branch of ulnar nerve C8–T1.",
    function: "Adducts thumb; assists pinch grip."
  },

  /* Hypothenar */
  {
    id: "abductor-digiti-minimi-hand",
    name: "Abductor digiti minimi",
    region: "Upper limb",
    group: "Hypothenar muscles",
    image: "images/muscles/thenar-hypothenar.jpg",
    origin: "Pisiform.",
    insertion: "Medial side of base of proximal phalanx of little finger.",
    innervation: "Deep branch of ulnar nerve C8–T1.",
    function: "Abducts little finger."
  },
  {
    id: "flexor-digiti-minimi-brevis-hand",
    name: "Flexor digiti minimi brevis",
    region: "Upper limb",
    group: "Hypothenar muscles",
    image: "images/muscles/thenar-hypothenar.jpg",
    origin: "Hook of hamate and flexor retinaculum.",
    insertion: "Medial side of base of proximal phalanx of little finger.",
    innervation: "Deep branch of ulnar nerve C8–T1.",
    function: "Flexes little finger at MCP joint."
  },
  {
    id: "opponens-digiti-minimi",
    name: "Opponens digiti minimi",
    region: "Upper limb",
    group: "Hypothenar muscles",
    image: "images/muscles/thenar-hypothenar.jpg",
    origin: "Hook of hamate and flexor retinaculum.",
    insertion: "Medial border of 5th metacarpal.",
    innervation: "Deep branch of ulnar nerve C8–T1.",
    function: "Opposes little finger by drawing 5th metacarpal anteriorly and rotating it."
  },

  /* Superficial palm */
  {
    id: "palmaris-brevis",
    name: "Palmaris brevis",
    region: "Upper limb",
    group: "Superficial palm",
    image: "images/muscles/thenar-hypothenar.jpg",
    origin: "Palmar aponeurosis and flexor retinaculum.",
    insertion: "Skin of medial palm.",
    innervation: "Superficial branch of ulnar nerve C8–T1.",
    function: "Wrinkles skin of medial palm and deepens hollow of palm."
  },

  /* Middle compartment of hand */
  {
    id: "lumbricals-hand",
    name: "Lumbricals",
    region: "Upper limb",
    group: "Middle compartment of hand",
    image: "images/muscles/deep-hand.jpg",
    origin: "Tendons of flexor digitorum profundus. 1st and 2nd lumbricals: lateral two tendons. 3rd and 4th lumbricals: medial three tendons.",
    insertion: "Lateral sides of extensor expansions of digits 2–5.",
    innervation: "1st and 2nd lumbricals: median nerve C8–T1. 3rd and 4th lumbricals: deep branch of ulnar nerve C8–T1.",
    function: "Flex MCP joints and extend IP joints of digits 2–5."
  },

  /* Deep hand muscles */
  {
    id: "palmar-interossei",
    name: "Palmar interossei",
    region: "Upper limb",
    group: "Deep hand muscles",
    image: "images/muscles/deep-hand.jpg",
    origin: "Palmar surfaces of metacarpals 2, 4, and 5.",
    insertion: "Bases of proximal phalanges and extensor expansions of digits 2, 4, and 5.",
    innervation: "Deep branch of ulnar nerve C8–T1.",
    function: "Adduct digits toward the middle finger; assist MCP flexion and IP extension."
  },
  {
    id: "dorsal-interossei-hand",
    name: "Dorsal interossei",
    region: "Upper limb",
    group: "Deep hand muscles",
    image: "images/muscles/deep-hand.jpg",
    origin: "Adjacent sides of metacarpals 1–5.",
    insertion: "Bases of proximal phalanges and extensor expansions of digits 2–4.",
    innervation: "Deep branch of ulnar nerve C8–T1.",
    function: "Abduct digits away from the middle finger; assist MCP flexion and IP extension."
  }

,
  /* ── Back ───────────────────────────────────────────────────────────── */

  /* Short nuchal muscles */
  {
    id: "rectus-capitis-posterior-major",
    name: "Rectus capitis posterior major",
    region: "Back",
    group: "Short nuchal muscles",
    image: "images/muscles/short-nuchal-muscles.jpg",
    origin: "Spinous process of axis (C2).",
    insertion: "Occipital bone, middle third of inferior nuchal line.",
    innervation: "Posterior ramus of C1 — suboccipital nerve.",
    function: "Bilateral: extends the head. Unilateral: rotates the head to the same side."
  },
  {
    id: "rectus-capitis-posterior-minor",
    name: "Rectus capitis posterior minor",
    region: "Back",
    group: "Short nuchal muscles",
    image: "images/muscles/short-nuchal-muscles.jpg",
    origin: "Posterior tubercle of atlas (C1).",
    insertion: "Occipital bone, inner third of inferior nuchal line.",
    innervation: "Posterior ramus of C1 — suboccipital nerve.",
    function: "Bilateral: extends the head."
  },
  {
    id: "obliquus-capitis-superior",
    name: "Obliquus capitis superior",
    region: "Back",
    group: "Short nuchal muscles",
    image: "images/muscles/short-nuchal-muscles.jpg",
    origin: "Transverse process of atlas (C1).",
    insertion: "Occipital bone, middle third of inferior nuchal line, above rectus capitis posterior major.",
    innervation: "Posterior ramus of C1 — suboccipital nerve.",
    function: "Bilateral: extends the head. Unilateral: flexes the head to the same side and rotates the head to the opposite side."
  },
  {
    id: "obliquus-capitis-inferior",
    name: "Obliquus capitis inferior",
    region: "Back",
    group: "Short nuchal muscles",
    image: "images/muscles/short-nuchal-muscles.jpg",
    origin: "Spinous process of axis (C2).",
    insertion: "Transverse process of atlas (C1).",
    innervation: "Posterior ramus of C1 — suboccipital nerve.",
    function: "Bilateral: extends the head. Unilateral: rotates the head to the same side."
  },

  /* Superficial intrinsic / intermediate extrinsic back muscles */
  {
    id: "serratus-posterior-superior",
    name: "Serratus posterior superior",
    region: "Back",
    group: "Superficial intrinsic / intermediate extrinsic back muscle",
    image: "images/muscles/serratus-posterior.jpg",
    origin: "Nuchal ligament and spinous processes of C7–T3.",
    insertion: "Superior borders of ribs 2–4.",
    innervation: "Anterior rami of spinal nerves T2–T5.",
    function: "Elevates ribs."
  },
  {
    id: "serratus-posterior-inferior",
    name: "Serratus posterior inferior",
    region: "Back",
    group: "Superficial intrinsic / intermediate extrinsic back muscle",
    image: "images/muscles/serratus-posterior.jpg",
    origin: "Spinous processes of T11–L2.",
    insertion: "Inferior borders of ribs 8–12 near their angles.",
    innervation: "Anterior rami of spinal nerves T9–T12.",
    function: "Depresses ribs."
  },

  /* Superficial intrinsic back muscles */
  {
    id: "splenius-capitis",
    name: "Splenius capitis",
    region: "Back",
    group: "Superficial intrinsic back muscle",
    image: "images/muscles/splenius-muscles.jpg",
    origin: "Nuchal ligament and spinous processes of C7–T3 or T4.",
    insertion: "Lateral third of superior nuchal line of occipital bone and mastoid process of temporal bone.",
    innervation: "Posterior rami of spinal nerves C1–C6, lateral branches.",
    function: "Bilateral: extends cervical spine and head. Unilateral: laterally flexes and rotates head to the same side."
  },
  {
    id: "splenius-cervicis",
    name: "Splenius cervicis",
    region: "Back",
    group: "Superficial intrinsic back muscle",
    image: "images/muscles/splenius-muscles.jpg",
    origin: "Spinous processes of T3–T6 or T7.",
    insertion: "Transverse processes of C1–C3 or C4.",
    innervation: "Posterior rami of spinal nerves C1–C6, lateral branches.",
    function: "Bilateral: extends cervical spine. Unilateral: laterally flexes and rotates neck to the same side."
  },

  /* Intermediate intrinsic back muscles - Erector spinae */
  {
    id: "iliocostalis",
    name: "Iliocostalis",
    region: "Back",
    group: "Intermediate intrinsic back muscles · Erector spinae",
    image: "images/muscles/erector-spinae.jpg",
    origin: "Iliocostalis cervicis: ribs 3–7. Iliocostalis thoracis: ribs 7–12. Iliocostalis lumborum: sacrum, iliac crest, and posterior layer of thoracolumbar fascia.",
    insertion: "Iliocostalis cervicis: transverse processes of C4–C6. Iliocostalis thoracis: ribs 1–6. Iliocostalis lumborum: ribs 6–12, posterior layer of thoracolumbar fascia, and transverse processes of upper lumbar vertebrae.",
    innervation: "Posterior rami of spinal nerves C8–L1, lateral branches.",
    function: "Bilateral: extends the spine. Unilateral: laterally flexes the spine to the same side."
  },
  {
    id: "longissimus",
    name: "Longissimus",
    region: "Back",
    group: "Intermediate intrinsic back muscles · Erector spinae",
    image: "images/muscles/erector-spinae.jpg",
    origin: "Longissimus capitis: transverse processes of T1–T3 and transverse/articular processes of C4–C7. Longissimus cervicis: transverse processes of T1–T6. Longissimus thoracis: sacrum, iliac crest, lumbar spinous processes, and lower thoracic transverse processes.",
    insertion: "Longissimus capitis: mastoid process of temporal bone. Longissimus cervicis: transverse processes of C2–C5. Longissimus thoracis: ribs 2–12 and transverse processes of thoracic and lumbar vertebrae.",
    innervation: "Posterior rami of spinal nerves C1–L5, lateral branches.",
    function: "Bilateral: extends head and spine. Unilateral: laterally flexes the spine and may rotate the head to the same side."
  },
  {
    id: "spinalis",
    name: "Spinalis",
    region: "Back",
    group: "Intermediate intrinsic back muscles · Erector spinae",
    image: "images/muscles/erector-spinae.jpg",
    origin: "Spinalis cervicis: spinous processes of C5–T2. Spinalis thoracis: spinous processes and lateral surfaces of T10–L3.",
    insertion: "Spinalis cervicis: spinous processes of C2–C5. Spinalis thoracis: spinous processes and lateral surfaces of T2–T8.",
    innervation: "Posterior rami of spinal nerves.",
    function: "Bilateral: extends cervical and thoracic spine. Unilateral: laterally flexes cervical and thoracic spine to the same side."
  },

  /* Deep intrinsic back muscles - Transversospinalis */
  {
    id: "rotatores",
    name: "Rotatores",
    region: "Back",
    group: "Deep intrinsic back muscles · Transversospinalis",
    image: "images/muscles/transversospinalis.jpg",
    origin: "Rotatores breves: transverse processes of T1–T12, passing to adjacent vertebrae. Rotatores longi: transverse processes of T1–T12, skipping one vertebra.",
    insertion: "Spinous processes of thoracic vertebrae.",
    innervation: "Posterior rami of spinal nerves.",
    function: "Bilateral: extends thoracic spine. Unilateral: rotates thoracic spine to the opposite side."
  },
  {
    id: "multifidus",
    name: "Multifidus",
    region: "Back",
    group: "Deep intrinsic back muscles · Transversospinalis",
    image: "images/muscles/transversospinalis.jpg",
    origin: "Sacrum, ilium, mammillary processes of L1–L5, transverse and articular processes of T1–T4 and C4–C7.",
    insertion: "Spinous processes, passing superomedially and skipping two to four vertebrae.",
    innervation: "Posterior rami of spinal nerves.",
    function: "Bilateral: extends the spine. Unilateral: laterally flexes spine to the same side and rotates it to the opposite side."
  },
  {
    id: "semispinalis",
    name: "Semispinalis",
    region: "Back",
    group: "Deep intrinsic back muscles · Transversospinalis",
    image: "images/muscles/transversospinalis.jpg",
    origin: "Semispinalis capitis: transverse and articular processes of C4–T7. Semispinalis cervicis: transverse processes of T1–T6. Semispinalis thoracis: transverse processes of T6–T12.",
    insertion: "Semispinalis capitis: occipital bone between superior and inferior nuchal lines. Semispinalis cervicis: spinous processes of C2–C5. Semispinalis thoracis: spinous processes of C6–T4.",
    innervation: "Posterior rami of spinal nerves.",
    function: "Bilateral: extends thoracic and cervical spine and head; stabilizes craniovertebral joints. Unilateral: laterally flexes head, cervical spine, and thoracic spine to the same side and rotates to the opposite side."
  },

  /* Deep segmental back muscles */
  {
    id: "interspinales",
    name: "Interspinales",
    region: "Back",
    group: "Deep segmental back muscles",
    image: "images/muscles/deep-segmental-back.jpg",
    origin: "Interspinales cervicis: between spinous processes of adjacent cervical vertebrae C1–C7. Interspinales lumborum: between spinous processes of adjacent lumbar vertebrae L1–L5.",
    insertion: "Adjacent spinous processes in the cervical and lumbar regions.",
    innervation: "Posterior rami of spinal nerves.",
    function: "Extends cervical and lumbar spine."
  },
  {
    id: "intertransversarii",
    name: "Intertransversarii",
    region: "Back",
    group: "Deep segmental back muscles",
    image: "images/muscles/deep-segmental-back.jpg",
    origin: "Anterior intertransversarii cervicis: between anterior tubercles of adjacent cervical vertebrae C2–C7. Posterior intertransversarii cervicis: between posterior tubercles of adjacent cervical vertebrae C2–C7. Medial intertransversarii lumborum: between mammillary processes of adjacent lumbar vertebrae L1–L5. Lateral intertransversarii lumborum: between transverse processes of adjacent lumbar vertebrae L1–L5.",
    insertion: "Adjacent transverse processes or related tubercles/mammillary processes depending on region.",
    innervation: "Anterior intertransversarii cervicis: anterior rami of spinal nerves. Posterior intertransversarii cervicis: posterior rami. Medial intertransversarii lumborum: posterior rami. Lateral intertransversarii lumborum: anterior rami.",
    function: "Bilateral: stabilizes and extends cervical and lumbar spine. Unilateral: laterally flexes cervical and lumbar spine to the same side."
  },
  {
    id: "levatores-costarum",
    name: "Levatores costarum",
    region: "Back",
    group: "Deep segmental back muscles",
    image: "images/muscles/deep-segmental-back.jpg",
    origin: "Transverse processes of C7–T11.",
    insertion: "Levatores costarum breves: costal angle of next lower rib. Levatores costarum longi: costal angle of rib two vertebrae below.",
    innervation: "Posterior rami of spinal nerves.",
    function: "Bilateral: extends thoracic spine. Unilateral: laterally flexes thoracic spine to the same side and rotates to the opposite side."
  }

,
  /* ── Thorax & Abdomen ───────────────────────────────────────────────── */

  /* Thoracic wall */
  {
    id: "external-intercostals",
    name: "External intercostals",
    region: "Thorax",
    group: "Thoracic wall",
    image: "images/muscles/thoracic-wall.jpg",
    origin: "Inferior border of the rib above.",
    insertion: "Superior border of the rib below.",
    innervation: "Intercostal nerves T1–T11.",
    function: "Elevate ribs during inspiration and help maintain the intercostal spaces."
  },
  {
    id: "internal-intercostals",
    name: "Internal intercostals",
    region: "Thorax",
    group: "Thoracic wall",
    image: "images/muscles/thoracic-wall.jpg",
    origin: "Superior border of the rib below and costal cartilage.",
    insertion: "Inferior border of the rib above.",
    innervation: "Intercostal nerves T1–T11.",
    function: "Interosseous part depresses ribs during forced expiration. Interchondral part can assist rib elevation."
  },
  {
    id: "innermost-intercostals",
    name: "Innermost intercostals",
    region: "Thorax",
    group: "Thoracic wall",
    image: "images/muscles/thoracic-wall.jpg",
    origin: "Inner surface of the rib above, near the costal groove region.",
    insertion: "Inner surface of the rib below.",
    innervation: "Intercostal nerves T1–T11.",
    function: "Assist internal intercostals in depressing ribs and supporting the intercostal spaces."
  },
  {
    id: "subcostals",
    name: "Subcostals",
    region: "Thorax",
    group: "Thoracic wall",
    image: "images/muscles/thoracic-wall.jpg",
    origin: "Inner surface of lower ribs near their angles.",
    insertion: "Inner surface of the second or third rib below.",
    innervation: "Intercostal nerves.",
    function: "Depress ribs; assist forced expiration."
  },
  {
    id: "transversus-thoracis",
    name: "Transversus thoracis",
    region: "Thorax",
    group: "Thoracic wall",
    image: "images/muscles/thoracic-wall.jpg",
    origin: "Posterior surface of lower sternum and xiphoid process.",
    insertion: "Internal surfaces of costal cartilages, mainly ribs 2–6.",
    innervation: "Intercostal nerves.",
    function: "Weakly depresses costal cartilages and assists expiration."
  },

  /* Respiratory muscle */
  {
    id: "diaphragm",
    name: "Diaphragm",
    region: "Thorax / Abdomen",
    group: "Respiratory muscle",
    image: "images/muscles/diaphragm.jpg",
    origin: "Sternal part: posterior surface of xiphoid process. Costal part: internal surfaces of lower ribs and costal cartilages. Lumbar part: right and left crura and arcuate ligaments.",
    insertion: "Central tendon of diaphragm.",
    innervation: "Phrenic nerve C3–C5 provides motor innervation. Sensory innervation: phrenic nerve centrally; lower intercostal nerves peripherally.",
    function: "Primary muscle of inspiration. Contraction lowers the central tendon, increases thoracic volume, and assists abdominal pressure during straining."
  },

  /* Anterolateral abdominal wall */
  {
    id: "external-oblique",
    name: "External oblique",
    region: "Abdomen",
    group: "Anterolateral abdominal wall",
    image: "images/muscles/abdominal-wall.jpg",
    origin: "External surfaces of ribs 5–12.",
    insertion: "Linea alba, pubic tubercle, anterior half of iliac crest, and inguinal ligament via aponeurosis.",
    innervation: "Thoracoabdominal nerves T7–T11 and subcostal nerve T12.",
    function: "Bilateral: flexes trunk and compresses abdominal contents. Unilateral: laterally flexes trunk to the same side and rotates trunk to the opposite side."
  },
  {
    id: "internal-oblique",
    name: "Internal oblique",
    region: "Abdomen",
    group: "Anterolateral abdominal wall",
    image: "images/muscles/abdominal-wall.jpg",
    origin: "Thoracolumbar fascia, anterior two thirds of iliac crest, and lateral half of inguinal ligament.",
    insertion: "Inferior borders of ribs 10–12, linea alba, and pubis via conjoint tendon.",
    innervation: "Thoracoabdominal nerves T7–T11, subcostal nerve T12, and L1 branches including iliohypogastric and ilioinguinal nerves.",
    function: "Bilateral: flexes trunk and compresses abdominal contents. Unilateral: laterally flexes and rotates trunk to the same side."
  },
  {
    id: "transversus-abdominis",
    name: "Transversus abdominis",
    region: "Abdomen",
    group: "Anterolateral abdominal wall",
    image: "images/muscles/abdominal-wall.jpg",
    origin: "Internal surfaces of costal cartilages 7–12, thoracolumbar fascia, iliac crest, and lateral third of inguinal ligament.",
    insertion: "Linea alba, pubic crest, and pecten pubis via conjoint tendon.",
    innervation: "Thoracoabdominal nerves T7–T11, subcostal nerve T12, and L1 branches including iliohypogastric and ilioinguinal nerves.",
    function: "Compresses and supports abdominal viscera; increases intra-abdominal pressure."
  },

  /* Anterior abdominal wall */
  {
    id: "rectus-abdominis",
    name: "Rectus abdominis",
    region: "Abdomen",
    group: "Anterior abdominal wall",
    image: "images/muscles/abdominal-wall.jpg",
    origin: "Pubic symphysis and pubic crest.",
    insertion: "Xiphoid process and costal cartilages of ribs 5–7.",
    innervation: "Thoracoabdominal nerves T6/T7–T12.",
    function: "Flexes trunk, compresses abdominal contents, stabilizes pelvis, and helps control tilt of the pelvis."
  },
  {
    id: "pyramidalis",
    name: "Pyramidalis",
    region: "Abdomen",
    group: "Anterior abdominal wall",
    image: "images/muscles/abdominal-wall.jpg",
    origin: "Pubic crest and pubic symphysis.",
    insertion: "Linea alba.",
    innervation: "Subcostal nerve T12.",
    function: "Tenses the linea alba."
  },

  /* Posterior abdominal wall */
  {
    id: "quadratus-lumborum",
    name: "Quadratus lumborum",
    region: "Abdomen",
    group: "Posterior abdominal wall",
    image: "images/muscles/posterior-abdominal-wall.jpg",
    origin: "Iliolumbar ligament and internal lip of iliac crest.",
    insertion: "Inferior border of rib 12 and transverse processes of L1–L4.",
    innervation: "Anterior rami of T12–L4 spinal nerves.",
    function: "Unilateral: laterally flexes vertebral column. Bilateral: extends lumbar spine and fixes rib 12 during inspiration."
  },

  /* Posterior abdominal wall / hip flexor */
  {
    id: "psoas-major",
    name: "Psoas major",
    region: "Abdomen",
    group: "Posterior abdominal wall / hip flexor",
    image: "images/muscles/posterior-abdominal-wall.jpg",
    origin: "Lateral surfaces of T12–L4 vertebral bodies and intervertebral discs; transverse processes of L1–L5.",
    insertion: "Lesser trochanter of femur.",
    innervation: "Anterior rami of lumbar nerves L1–L3.",
    function: "Flexes hip and externally rotates thigh. With the femur fixed, flexes trunk; unilateral contraction laterally flexes trunk."
  },
  {
    id: "psoas-minor",
    name: "Psoas minor",
    region: "Abdomen",
    group: "Posterior abdominal wall",
    image: "images/muscles/posterior-abdominal-wall.jpg",
    origin: "Bodies of T12–L1 vertebrae and intervening intervertebral disc.",
    insertion: "Pectineal line and iliopubic eminence.",
    innervation: "Anterior ramus of L1.",
    function: "Weak flexor of lumbar spine; often absent."
  },

  /* Posterior abdominal wall / iliopsoas */
  {
    id: "iliacus",
    name: "Iliacus",
    region: "Abdomen / Lower limb",
    group: "Posterior abdominal wall / iliopsoas",
    image: "images/muscles/posterior-abdominal-wall.jpg",
    origin: "Iliac fossa and inner lip of iliac crest.",
    insertion: "Lesser trochanter of femur together with psoas major tendon.",
    innervation: "Femoral nerve L2–L3.",
    function: "Flexes hip and externally rotates thigh as part of iliopsoas."
  }

,
  /* ── Head and neck · Facial expression ─────────────────────────────── */

  /* Calvaria / scalp */
  {
    id: "occipitofrontalis",
    name: "Occipitofrontalis",
    region: "Head and neck",
    group: "Facial expression · Calvaria / scalp",
    image: "images/muscles/facial-expression.jpg",
    origin: "Frontal belly: epicranial aponeurosis. Occipital belly: lateral part of superior nuchal line of occipital bone and mastoid region of temporal bone.",
    insertion: "Frontal belly: skin and subcutaneous tissue of eyebrows and forehead. Occipital belly: epicranial aponeurosis.",
    innervation: "Facial nerve CN VII. Frontal belly mainly by temporal branches; occipital belly by posterior auricular branch.",
    function: "Frontal belly elevates eyebrows and wrinkles forehead. Occipital belly retracts the scalp."
  },

  /* Nose / glabella */
  {
    id: "procerus",
    name: "Procerus",
    region: "Head and neck",
    group: "Facial expression · Nose / glabella",
    image: "images/muscles/facial-expression.jpg",
    origin: "Nasal bone and upper part of lateral nasal cartilage.",
    insertion: "Skin of lower forehead between the eyebrows.",
    innervation: "Facial nerve CN VII, mainly temporal and zygomatic branches.",
    function: "Pulls the medial angle of the eyebrows inferiorly, producing transverse wrinkles over the bridge of the nose."
  },

  /* Eyebrow */
  {
    id: "corrugator-supercilii",
    name: "Corrugator supercilii",
    region: "Head and neck",
    group: "Facial expression · Eyebrow",
    image: "images/muscles/facial-expression.jpg",
    origin: "Medial end of superciliary arch.",
    insertion: "Skin of eyebrow, especially the medial eyebrow.",
    innervation: "Facial nerve CN VII, mainly temporal branches.",
    function: "Draws eyebrows medially and inferiorly, producing vertical wrinkles between the eyebrows."
  },

  /* Palpebral fissure */
  {
    id: "orbicularis-oculi",
    name: "Orbicularis oculi",
    region: "Head and neck",
    group: "Facial expression · Palpebral fissure",
    image: "images/muscles/facial-expression.jpg",
    origin: "Medial orbital margin, medial palpebral ligament, and lacrimal bone.",
    insertion: "Skin around the margin of the orbit and superior and inferior tarsal plates.",
    innervation: "Facial nerve CN VII, mainly temporal and zygomatic branches.",
    function: "Acts as the sphincter of the eyelids. Palpebral part gently closes the eyelids; orbital part tightly closes the eyelids, as in winking or squinting; lacrimal part assists tear drainage."
  },

  /* Nose */
  {
    id: "nasalis",
    name: "Nasalis",
    region: "Head and neck",
    group: "Facial expression · Nose",
    image: "images/muscles/facial-expression.jpg",
    origin: "Maxilla, superior region of the canine ridge.",
    insertion: "Nasal cartilages.",
    innervation: "Facial nerve CN VII, mainly buccal branches.",
    function: "Transverse part compresses the nasal aperture. Alar part helps flare the nostrils by drawing the ala of the nose toward the nasal septum."
  },
  {
    id: "depressor-septi-nasi",
    name: "Depressor septi nasi",
    region: "Head and neck",
    group: "Facial expression · Nose",
    image: "images/muscles/facial-expression.jpg",
    origin: "Maxilla above the medial incisor region.",
    insertion: "Nasal septum and posterior part of the ala of the nose.",
    innervation: "Facial nerve CN VII, mainly buccal branches.",
    function: "Pulls the nasal septum inferiorly and assists narrowing of the nostrils."
  },

  /* Nose and upper lip */
  {
    id: "levator-labii-superioris-alaeque-nasi",
    name: "Levator labii superioris alaeque nasi",
    region: "Head and neck",
    group: "Facial expression · Nose and upper lip",
    image: "images/muscles/facial-expression.jpg",
    origin: "Frontal process of maxilla.",
    insertion: "Alar cartilage of nose and upper lip.",
    innervation: "Facial nerve CN VII, mainly zygomatic and buccal branches.",
    function: "Elevates the upper lip and opens the nostril."
  },

  /* Upper lip */
  {
    id: "levator-labii-superioris",
    name: "Levator labii superioris",
    region: "Head and neck",
    group: "Facial expression · Upper lip",
    image: "images/muscles/facial-expression.jpg",
    origin: "Frontal process of maxilla and infraorbital region.",
    insertion: "Skin of upper lip and alar cartilages of nose.",
    innervation: "Facial nerve CN VII, mainly zygomatic and buccal branches.",
    function: "Elevates the upper lip, dilates the nostril, and raises the angle of the mouth."
  },

  /* Mouth */
  {
    id: "zygomaticus-major",
    name: "Zygomaticus major",
    region: "Head and neck",
    group: "Facial expression · Mouth",
    image: "images/muscles/facial-expression.jpg",
    origin: "Lateral surface of zygomatic bone, posterior part.",
    insertion: "Skin at corner of the mouth.",
    innervation: "Facial nerve CN VII, mainly zygomatic and buccal branches.",
    function: "Pulls the corner of the mouth superiorly and laterally, as in smiling."
  },
  {
    id: "zygomaticus-minor",
    name: "Zygomaticus minor",
    region: "Head and neck",
    group: "Facial expression · Mouth",
    image: "images/muscles/facial-expression.jpg",
    origin: "Zygomatic bone.",
    insertion: "Upper lip just medial to the corner of the mouth.",
    innervation: "Facial nerve CN VII, mainly zygomatic and buccal branches.",
    function: "Pulls the upper lip superiorly."
  },
  {
    id: "levator-anguli-oris",
    name: "Levator anguli oris",
    region: "Head and neck",
    group: "Facial expression · Mouth",
    image: "images/muscles/facial-expression.jpg",
    origin: "Maxilla below the infraorbital foramen.",
    insertion: "Skin at the corner of the mouth.",
    innervation: "Facial nerve CN VII, mainly buccal branches.",
    function: "Raises the angle of the mouth and helps form the nasolabial furrow."
  },
  {
    id: "risorius",
    name: "Risorius",
    region: "Head and neck",
    group: "Facial expression · Mouth",
    image: "images/muscles/facial-expression.jpg",
    origin: "Fascia over masseter.",
    insertion: "Skin of the corner of the mouth.",
    innervation: "Facial nerve CN VII, mainly buccal branches.",
    function: "Retracts the corner of the mouth, as in grimacing."
  },
  {
    id: "depressor-anguli-oris",
    name: "Depressor anguli oris",
    region: "Head and neck",
    group: "Facial expression · Mouth",
    image: "images/muscles/facial-expression.jpg",
    origin: "Oblique line of mandible below canine, premolar, and first molar teeth.",
    insertion: "Skin at the corner of the mouth; blends with orbicularis oris.",
    innervation: "Facial nerve CN VII, mainly marginal mandibular branch.",
    function: "Pulls the angle of the mouth inferiorly and laterally."
  },
  {
    id: "depressor-labii-inferioris",
    name: "Depressor labii inferioris",
    region: "Head and neck",
    group: "Facial expression · Mouth",
    image: "images/muscles/facial-expression.jpg",
    origin: "Anterior portion of oblique line of mandible.",
    insertion: "Lower lip at midline; blends with muscle from opposite side.",
    innervation: "Facial nerve CN VII, mainly marginal mandibular branch.",
    function: "Pulls the lower lip inferiorly and laterally."
  },

  /* Chin */
  {
    id: "mentalis",
    name: "Mentalis",
    region: "Head and neck",
    group: "Facial expression · Chin",
    image: "images/muscles/facial-expression.jpg",
    origin: "Incisive fossa of mandible.",
    insertion: "Skin of chin.",
    innervation: "Facial nerve CN VII, mainly marginal mandibular branch.",
    function: "Elevates and protrudes the lower lip; wrinkles skin of chin."
  },

  /* Cheek */
  {
    id: "buccinator",
    name: "Buccinator",
    region: "Head and neck",
    group: "Facial expression · Cheek",
    image: "images/muscles/facial-expression.jpg",
    origin: "Mandible, alveolar processes of maxilla and mandible, and pterygomandibular raphe.",
    insertion: "Angle of mouth and orbicularis oris.",
    innervation: "Facial nerve CN VII, mainly buccal branches.",
    function: "Presses cheek against molar teeth, keeps food between occlusal surfaces and out of the oral vestibule, expels air from oral cavity, and resists distension when blowing. Unilateral action draws mouth to one side."
  },

  /* Mouth sphincter */
  {
    id: "orbicularis-oris",
    name: "Orbicularis oris",
    region: "Head and neck",
    group: "Facial expression · Mouth sphincter",
    image: "images/muscles/facial-expression.jpg",
    origin: "Deep surface of skin; superiorly from maxilla in the median plane; inferiorly from mandible.",
    insertion: "Mucous membrane of lips.",
    innervation: "Facial nerve CN VII, mainly buccal and marginal mandibular branches.",
    function: "Acts as oral sphincter. Compresses and protrudes lips, as in whistling, sucking, and kissing; resists distension when blowing."
  },

  /* Neck */
  {
    id: "platysma",
    name: "Platysma",
    region: "Head and neck",
    group: "Facial expression · Neck",
    image: "images/muscles/facial-expression.jpg",
    origin: "Skin over lower neck and upper lateral thorax.",
    insertion: "Inferior border of mandible, skin over lower face, and angle of mouth.",
    innervation: "Facial nerve CN VII, cervical branch.",
    function: "Depresses and wrinkles skin of lower face and mouth, tenses skin of neck, and aids forced depression of the mandible."
  },

  /* Ear */
  {
    id: "anterior-auricular",
    name: "Anterior auricular muscle",
    region: "Head and neck",
    group: "Facial expression · Ear",
    image: "images/muscles/facial-expression.jpg",
    origin: "Anterior portion of temporal fascia.",
    insertion: "Helix of the ear.",
    innervation: "Facial nerve CN VII, mainly temporal branches.",
    function: "Pulls ear superiorly and anteriorly."
  },
  {
    id: "superior-auricular",
    name: "Superior auricular muscle",
    region: "Head and neck",
    group: "Facial expression · Ear",
    image: "images/muscles/facial-expression.jpg",
    origin: "Epicranial aponeurosis on the side of the head.",
    insertion: "Upper portion of auricle.",
    innervation: "Facial nerve CN VII, mainly temporal branches.",
    function: "Elevates ear."
  },
  {
    id: "posterior-auricular",
    name: "Posterior auricular muscle",
    region: "Head and neck",
    group: "Facial expression · Ear",
    image: "images/muscles/facial-expression.jpg",
    origin: "Mastoid process.",
    insertion: "Convexity of concha of ear.",
    innervation: "Facial nerve CN VII, posterior auricular branch.",
    function: "Pulls ear superiorly and posteriorly."
  }

,
  /* ── Head and neck ──────────────────────────────────────────────────── */

  /* Muscles of mastication */
  {
    id: "temporalis",
    name: "Temporalis",
    region: "Head and neck",
    group: "Muscles of mastication",
    image: "images/muscles/mastication-muscles.jpg",
    origin: "Temporal fossa and deep temporal fascia.",
    insertion: "Coronoid process and anterior border of ramus of mandible.",
    innervation: "Deep temporal nerves from mandibular nerve V3.",
    function: "Elevates mandible; posterior fibers retract mandible."
  },
  {
    id: "masseter",
    name: "Masseter",
    region: "Head and neck",
    group: "Muscles of mastication",
    image: "images/muscles/mastication-muscles.jpg",
    origin: "Zygomatic arch.",
    insertion: "Lateral surface of ramus and angle of mandible.",
    innervation: "Masseteric nerve from mandibular nerve V3.",
    function: "Elevates mandible; superficial fibers assist protrusion, deep fibers assist retrusion."
  },
  {
    id: "medial-pterygoid",
    name: "Medial pterygoid",
    region: "Head and neck",
    group: "Muscles of mastication",
    image: "images/muscles/mastication-muscles.jpg",
    origin: "Deep head: medial surface of lateral pterygoid plate and pyramidal process of palatine bone. Superficial head: maxillary tuberosity.",
    insertion: "Medial surface of ramus and angle of mandible.",
    innervation: "Nerve to medial pterygoid from mandibular nerve V3.",
    function: "Elevates and protrudes mandible; unilateral action moves mandible side to side."
  },
  {
    id: "lateral-pterygoid",
    name: "Lateral pterygoid",
    region: "Head and neck",
    group: "Muscles of mastication",
    image: "images/muscles/mastication-muscles.jpg",
    origin: "Superior head: infratemporal surface and crest of greater wing of sphenoid. Inferior head: lateral surface of lateral pterygoid plate.",
    insertion: "Pterygoid fovea on neck of mandible, articular disc, and capsule of temporomandibular joint.",
    innervation: "Nerve to lateral pterygoid from mandibular nerve V3.",
    function: "Protrudes and depresses mandible; unilateral action produces side-to-side grinding movements."
  },

  /* Suprahyoid muscles */
  {
    id: "digastric",
    name: "Digastric",
    region: "Head and neck",
    group: "Suprahyoid muscles",
    image: "images/muscles/suprahyoid-infrahyoid.jpg",
    origin: "Anterior belly: digastric fossa of mandible. Posterior belly: mastoid notch of temporal bone.",
    insertion: "Both bellies attach to the hyoid bone through an intermediate tendon held by a fibrous loop.",
    innervation: "Anterior belly: mylohyoid nerve from mandibular nerve V3. Posterior belly: facial nerve CN VII.",
    function: "Elevates hyoid bone during swallowing and assists opening the mandible."
  },
  {
    id: "stylohyoid",
    name: "Stylohyoid",
    region: "Head and neck",
    group: "Suprahyoid muscles",
    image: "images/muscles/suprahyoid-infrahyoid.jpg",
    origin: "Styloid process of temporal bone.",
    insertion: "Body of hyoid bone via a split tendon around the intermediate tendon of digastric.",
    innervation: "Facial nerve CN VII.",
    function: "Elevates and retracts hyoid bone during swallowing."
  },
  {
    id: "mylohyoid",
    name: "Mylohyoid",
    region: "Head and neck",
    group: "Suprahyoid muscles / oral floor",
    image: "images/muscles/tongue-oral-floor.jpg",
    origin: "Mylohyoid line of mandible.",
    insertion: "Mylohyoid raphe and body of hyoid bone.",
    innervation: "Mylohyoid nerve from inferior alveolar nerve, branch of mandibular nerve V3.",
    function: "Elevates floor of mouth and hyoid bone during swallowing; assists depression of mandible."
  },
  {
    id: "geniohyoid",
    name: "Geniohyoid",
    region: "Head and neck",
    group: "Suprahyoid muscles / oral floor",
    image: "images/muscles/tongue-oral-floor.jpg",
    origin: "Inferior mental spine of mandible.",
    insertion: "Body of hyoid bone.",
    innervation: "Anterior ramus of C1 carried by hypoglossal nerve CN XII.",
    function: "Draws hyoid bone anteriorly and superiorly during swallowing; assists opening mandible."
  },

  /* Infrahyoid muscles */
  {
    id: "sternohyoid",
    name: "Sternohyoid",
    region: "Head and neck",
    group: "Infrahyoid muscles",
    image: "images/muscles/suprahyoid-infrahyoid.jpg",
    origin: "Posterior surface of manubrium and medial end of clavicle.",
    insertion: "Body of hyoid bone.",
    innervation: "Ansa cervicalis C1–C3.",
    function: "Depresses hyoid bone after swallowing."
  },
  {
    id: "omohyoid",
    name: "Omohyoid",
    region: "Head and neck",
    group: "Infrahyoid muscles",
    image: "images/muscles/suprahyoid-infrahyoid.jpg",
    origin: "Superior border of scapula near the suprascapular notch.",
    insertion: "Inferior border of body of hyoid bone via superior belly; inferior and superior bellies are connected by an intermediate tendon.",
    innervation: "Ansa cervicalis C1–C3.",
    function: "Depresses, retracts, and stabilizes hyoid bone."
  },
  {
    id: "sternothyroid",
    name: "Sternothyroid",
    region: "Head and neck",
    group: "Infrahyoid muscles",
    image: "images/muscles/suprahyoid-infrahyoid.jpg",
    origin: "Posterior surface of manubrium.",
    insertion: "Oblique line of thyroid cartilage.",
    innervation: "Ansa cervicalis C2–C3.",
    function: "Depresses larynx after swallowing."
  },
  {
    id: "thyrohyoid",
    name: "Thyrohyoid",
    region: "Head and neck",
    group: "Infrahyoid muscles",
    image: "images/muscles/suprahyoid-infrahyoid.jpg",
    origin: "Oblique line of thyroid cartilage.",
    insertion: "Body and greater horn of hyoid bone.",
    innervation: "Anterior ramus of C1 carried by hypoglossal nerve CN XII.",
    function: "Depresses hyoid bone; elevates larynx when hyoid is fixed."
  },

  /* Superficial neck */
  {
    id: "sternocleidomastoid",
    name: "Sternocleidomastoid",
    region: "Head and neck",
    group: "Superficial neck muscles",
    image: "images/muscles/superficial-neck.jpg",
    origin: "Sternal head: anterior surface of manubrium. Clavicular head: superior surface of medial third of clavicle.",
    insertion: "Mastoid process of temporal bone and lateral part of superior nuchal line.",
    innervation: "Accessory nerve CN XI for motor innervation; C2–C3 for proprioception and pain.",
    function: "Unilateral: laterally flexes neck to same side and rotates head to opposite side. Bilateral: flexes neck and can assist forced inspiration."
  },

  /* Lateral neck */
  {
    id: "anterior-scalene",
    name: "Anterior scalene",
    region: "Head and neck",
    group: "Lateral neck muscles",
    image: "images/muscles/deep-neck-prevertebral.jpg",
    origin: "Anterior tubercles of transverse processes of C3–C6.",
    insertion: "Scalene tubercle and superior surface of first rib.",
    innervation: "Anterior rami of cervical spinal nerves C4–C6.",
    function: "Elevates first rib during forced inspiration; flexes and laterally flexes neck."
  },
  {
    id: "middle-scalene",
    name: "Middle scalene",
    region: "Head and neck",
    group: "Lateral neck muscles",
    image: "images/muscles/deep-neck-prevertebral.jpg",
    origin: "Posterior tubercles of transverse processes of C2–C7.",
    insertion: "Superior surface of first rib, posterior to groove for subclavian artery.",
    innervation: "Anterior rami of cervical spinal nerves C3–C8.",
    function: "Elevates first rib; laterally flexes neck."
  },
  {
    id: "posterior-scalene",
    name: "Posterior scalene",
    region: "Head and neck",
    group: "Lateral neck muscles",
    image: "images/muscles/deep-neck-prevertebral.jpg",
    origin: "Posterior tubercles of transverse processes of C4–C6.",
    insertion: "External surface of second rib.",
    innervation: "Anterior rami of cervical spinal nerves C6–C8.",
    function: "Elevates second rib; laterally flexes neck."
  },

  /* Prevertebral muscles */
  {
    id: "longus-capitis",
    name: "Longus capitis",
    region: "Head and neck",
    group: "Prevertebral muscles",
    image: "images/muscles/deep-neck-prevertebral.jpg",
    origin: "Anterior tubercles of transverse processes of C3–C6.",
    insertion: "Basilar part of occipital bone.",
    innervation: "Anterior rami of cervical spinal nerves C1–C3.",
    function: "Flexes head at atlanto-occipital joints."
  },
  {
    id: "longus-colli",
    name: "Longus colli",
    region: "Head and neck",
    group: "Prevertebral muscles",
    image: "images/muscles/deep-neck-prevertebral.jpg",
    origin: "Anterior surfaces of vertebral bodies and transverse processes of cervical and upper thoracic vertebrae.",
    insertion: "Anterior arch of atlas, vertebral bodies, and transverse processes of cervical vertebrae.",
    innervation: "Anterior rami of cervical spinal nerves C2–C6.",
    function: "Flexes cervical spine; unilateral action laterally flexes neck."
  },
  {
    id: "rectus-capitis-anterior",
    name: "Rectus capitis anterior",
    region: "Head and neck",
    group: "Prevertebral muscles",
    image: "images/muscles/deep-neck-prevertebral.jpg",
    origin: "Anterior surface of lateral mass and transverse process of atlas C1.",
    insertion: "Basilar part of occipital bone anterior to foramen magnum.",
    innervation: "Anterior rami of cervical spinal nerves C1–C2.",
    function: "Flexes head at atlanto-occipital joint."
  },
  {
    id: "rectus-capitis-lateralis",
    name: "Rectus capitis lateralis",
    region: "Head and neck",
    group: "Prevertebral / lateral craniovertebral muscle",
    image: "images/muscles/deep-neck-prevertebral.jpg",
    origin: "Transverse process of atlas C1.",
    insertion: "Jugular process of occipital bone.",
    innervation: "Anterior rami of cervical spinal nerves C1–C2.",
    function: "Laterally flexes head and stabilizes atlanto-occipital joint."
  },

  /* Tongue - extrinsic */
  {
    id: "genioglossus",
    name: "Genioglossus",
    region: "Head and neck",
    group: "Tongue · extrinsic muscles",
    image: "images/muscles/tongue-oral-floor.jpg",
    origin: "Superior mental spine of mandible.",
    insertion: "Body of hyoid bone and entire length of tongue.",
    innervation: "Hypoglossal nerve CN XII.",
    function: "Protrudes tongue and depresses central tongue. Unilateral action deviates tongue to the opposite side."
  },
  {
    id: "hyoglossus",
    name: "Hyoglossus",
    region: "Head and neck",
    group: "Tongue · extrinsic muscles",
    image: "images/muscles/tongue-oral-floor.jpg",
    origin: "Body and greater horn of hyoid bone.",
    insertion: "Side of tongue.",
    innervation: "Hypoglossal nerve CN XII.",
    function: "Depresses and retracts tongue."
  },
  {
    id: "styloglossus",
    name: "Styloglossus",
    region: "Head and neck",
    group: "Tongue · extrinsic muscles",
    image: "images/muscles/tongue-oral-floor.jpg",
    origin: "Styloid process of temporal bone and stylohyoid ligament.",
    insertion: "Side of tongue.",
    innervation: "Hypoglossal nerve CN XII.",
    function: "Retracts tongue and elevates sides of tongue."
  },
  {
    id: "palatoglossus",
    name: "Palatoglossus",
    region: "Head and neck",
    group: "Tongue · extrinsic muscle / soft palate",
    image: "images/muscles/soft-palate.jpg",
    origin: "Palatine aponeurosis of soft palate.",
    insertion: "Side of tongue.",
    innervation: "Vagus nerve CN X via pharyngeal plexus.",
    function: "Elevates posterior tongue and depresses soft palate; helps close the oropharyngeal isthmus."
  },

  /* Tongue - intrinsic */
  {
    id: "superior-longitudinal-tongue",
    name: "Superior longitudinal muscle of tongue",
    region: "Head and neck",
    group: "Tongue · intrinsic muscles",
    image: "images/muscles/tongue-oral-floor.jpg",
    origin: "Submucosal fibrous tissue near the posterior tongue and median fibrous septum.",
    insertion: "Margins and apex of tongue.",
    innervation: "Hypoglossal nerve CN XII.",
    function: "Shortens tongue and curls apex and sides of tongue superiorly."
  },
  {
    id: "inferior-longitudinal-tongue",
    name: "Inferior longitudinal muscle of tongue",
    region: "Head and neck",
    group: "Tongue · intrinsic muscles",
    image: "images/muscles/tongue-oral-floor.jpg",
    origin: "Root of tongue and body of hyoid bone.",
    insertion: "Apex of tongue.",
    innervation: "Hypoglossal nerve CN XII.",
    function: "Shortens tongue and curls apex of tongue inferiorly."
  },
  {
    id: "transverse-tongue",
    name: "Transverse muscle of tongue",
    region: "Head and neck",
    group: "Tongue · intrinsic muscles",
    image: "images/muscles/tongue-oral-floor.jpg",
    origin: "Median fibrous septum of tongue.",
    insertion: "Lateral margins of tongue.",
    innervation: "Hypoglossal nerve CN XII.",
    function: "Narrows and elongates tongue."
  },
  {
    id: "vertical-tongue",
    name: "Vertical muscle of tongue",
    region: "Head and neck",
    group: "Tongue · intrinsic muscles",
    image: "images/muscles/tongue-oral-floor.jpg",
    origin: "Superior surface of tongue.",
    insertion: "Inferior surface of tongue.",
    innervation: "Hypoglossal nerve CN XII.",
    function: "Flattens and broadens tongue."
  },

  /* Soft palate */
  {
    id: "tensor-veli-palatini",
    name: "Tensor veli palatini",
    region: "Head and neck",
    group: "Soft palate",
    image: "images/muscles/soft-palate.jpg",
    origin: "Scaphoid fossa of medial pterygoid plate, spine of sphenoid, and cartilage of pharyngotympanic tube.",
    insertion: "Palatine aponeurosis.",
    innervation: "Medial pterygoid nerve from mandibular nerve V3.",
    function: "Tenses soft palate and opens pharyngotympanic tube."
  },
  {
    id: "levator-veli-palatini",
    name: "Levator veli palatini",
    region: "Head and neck",
    group: "Soft palate",
    image: "images/muscles/soft-palate.jpg",
    origin: "Petrous part of temporal bone and cartilage of pharyngotympanic tube.",
    insertion: "Palatine aponeurosis.",
    innervation: "Vagus nerve CN X via pharyngeal plexus.",
    function: "Elevates soft palate during swallowing and yawning."
  },
  {
    id: "musculus-uvulae",
    name: "Musculus uvulae",
    region: "Head and neck",
    group: "Soft palate",
    image: "images/muscles/soft-palate.jpg",
    origin: "Posterior nasal spine and palatine aponeurosis.",
    insertion: "Mucosa of uvula.",
    innervation: "Vagus nerve CN X via pharyngeal plexus.",
    function: "Shortens and elevates uvula; helps close nasopharynx during swallowing."
  },
  {
    id: "palatopharyngeus",
    name: "Palatopharyngeus",
    region: "Head and neck",
    group: "Soft palate / pharynx",
    image: "images/muscles/soft-palate.jpg",
    origin: "Hard palate and palatine aponeurosis.",
    insertion: "Thyroid cartilage and pharyngeal wall.",
    innervation: "Vagus nerve CN X via pharyngeal plexus.",
    function: "Elevates pharynx and larynx during swallowing; helps close nasopharynx."
  },

  /* Pharynx */
  {
    id: "superior-pharyngeal-constrictor",
    name: "Superior pharyngeal constrictor",
    region: "Head and neck",
    group: "Pharynx",
    image: "images/muscles/pharyngeal-muscles.jpg",
    origin: "Pterygomandibular raphe, pterygoid hamulus, mandible, and posterior end of mylohyoid line.",
    insertion: "Pharyngeal raphe and pharyngeal tubercle of occipital bone.",
    innervation: "Vagus nerve CN X via pharyngeal plexus.",
    function: "Constricts pharyngeal wall during swallowing."
  },
  {
    id: "middle-pharyngeal-constrictor",
    name: "Middle pharyngeal constrictor",
    region: "Head and neck",
    group: "Pharynx",
    image: "images/muscles/pharyngeal-muscles.jpg",
    origin: "Greater and lesser horns of hyoid bone and stylohyoid ligament.",
    insertion: "Pharyngeal raphe.",
    innervation: "Vagus nerve CN X via pharyngeal plexus.",
    function: "Constricts pharyngeal wall during swallowing."
  },
  {
    id: "inferior-pharyngeal-constrictor",
    name: "Inferior pharyngeal constrictor",
    region: "Head and neck",
    group: "Pharynx",
    image: "images/muscles/pharyngeal-muscles.jpg",
    origin: "Oblique line of thyroid cartilage and lateral surface of cricoid cartilage.",
    insertion: "Pharyngeal raphe.",
    innervation: "Vagus nerve CN X via pharyngeal plexus; recurrent laryngeal nerve contribution to lower fibers.",
    function: "Constricts pharyngeal wall during swallowing; cricopharyngeal part acts as upper esophageal sphincter."
  },
  {
    id: "stylopharyngeus",
    name: "Stylopharyngeus",
    region: "Head and neck",
    group: "Pharynx",
    image: "images/muscles/pharyngeal-muscles.jpg",
    origin: "Styloid process of temporal bone.",
    insertion: "Pharyngeal wall and posterior border of thyroid cartilage.",
    innervation: "Glossopharyngeal nerve CN IX.",
    function: "Elevates pharynx and larynx during swallowing and speaking."
  },
  {
    id: "salpingopharyngeus",
    name: "Salpingopharyngeus",
    region: "Head and neck",
    group: "Pharynx",
    image: "images/muscles/pharyngeal-muscles.jpg",
    origin: "Cartilaginous part of pharyngotympanic tube.",
    insertion: "Blends with palatopharyngeus in pharyngeal wall.",
    innervation: "Vagus nerve CN X via pharyngeal plexus.",
    function: "Elevates pharynx and opens pharyngotympanic tube during swallowing."
  },

  /* Larynx - intrinsic */
  {
    id: "cricothyroid",
    name: "Cricothyroid",
    region: "Head and neck",
    group: "Larynx · intrinsic muscles",
    image: "images/muscles/laryngeal-muscles.jpg",
    origin: "Anterolateral arch of cricoid cartilage.",
    insertion: "Inferior border and inferior horn of thyroid cartilage.",
    innervation: "External branch of superior laryngeal nerve from vagus nerve CN X.",
    function: "Tenses and lengthens vocal folds, increasing pitch."
  },
  {
    id: "posterior-cricoarytenoid",
    name: "Posterior cricoarytenoid",
    region: "Head and neck",
    group: "Larynx · intrinsic muscles",
    image: "images/muscles/laryngeal-muscles.jpg",
    origin: "Posterior surface of lamina of cricoid cartilage.",
    insertion: "Muscular process of arytenoid cartilage.",
    innervation: "Recurrent laryngeal nerve from vagus nerve CN X.",
    function: "Abducts vocal folds and opens the rima glottidis."
  },
  {
    id: "lateral-cricoarytenoid",
    name: "Lateral cricoarytenoid",
    region: "Head and neck",
    group: "Larynx · intrinsic muscles",
    image: "images/muscles/laryngeal-muscles.jpg",
    origin: "Superior border of arch of cricoid cartilage.",
    insertion: "Muscular process of arytenoid cartilage.",
    innervation: "Recurrent laryngeal nerve from vagus nerve CN X.",
    function: "Adducts vocal folds and closes the rima glottidis."
  },
  {
    id: "transverse-arytenoid",
    name: "Transverse arytenoid",
    region: "Head and neck",
    group: "Larynx · intrinsic muscles",
    image: "images/muscles/laryngeal-muscles.jpg",
    origin: "Posterior surface of one arytenoid cartilage.",
    insertion: "Posterior surface of opposite arytenoid cartilage.",
    innervation: "Recurrent laryngeal nerve from vagus nerve CN X.",
    function: "Adducts arytenoid cartilages and closes posterior rima glottidis."
  },
  {
    id: "oblique-arytenoid",
    name: "Oblique arytenoid",
    region: "Head and neck",
    group: "Larynx · intrinsic muscles",
    image: "images/muscles/laryngeal-muscles.jpg",
    origin: "Muscular process of arytenoid cartilage.",
    insertion: "Apex of opposite arytenoid cartilage; continues into aryepiglottic fold.",
    innervation: "Recurrent laryngeal nerve from vagus nerve CN X.",
    function: "Adducts arytenoid cartilages and helps close laryngeal inlet."
  },
  {
    id: "thyroarytenoid-vocalis",
    name: "Thyroarytenoid / Vocalis",
    region: "Head and neck",
    group: "Larynx · intrinsic muscles",
    image: "images/muscles/laryngeal-muscles.jpg",
    origin: "Posterior surface of thyroid cartilage near the laryngeal prominence.",
    insertion: "Arytenoid cartilage and vocal ligament.",
    innervation: "Recurrent laryngeal nerve from vagus nerve CN X.",
    function: "Relaxes vocal folds. Vocalis fine-tunes tension of the vocal ligament during phonation."
  }

,
  /* ── Pelvis / Perineum ──────────────────────────────────────────────── */

  /* Superficial perineal pouch */
  {
    id: "bulbospongiosus",
    name: "Bulbospongiosus",
    region: "Pelvis / Perineum",
    group: "Superficial perineal pouch",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Male: perineal body and median raphe on the ventral surface of bulb of penis. Female: perineal body.",
    insertion: "Male: perineal membrane, corpus spongiosum, and dorsal aspect of penis. Female: corpus cavernosum of clitoris and perineal membrane.",
    innervation: "Deep branch of perineal nerve from pudendal nerve S2–S4.",
    function: "Male: compresses bulb of penis and corpus spongiosum, assists emptying of urethra, and contributes to erection and ejaculation. Female: constricts vaginal orifice, compresses vestibular bulb, and contributes to clitoral erection."
  },
  {
    id: "ischiocavernosus",
    name: "Ischiocavernosus",
    region: "Pelvis / Perineum",
    group: "Superficial perineal pouch",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Ischial tuberosity and ischiopubic ramus.",
    insertion: "Crus of penis or crus of clitoris.",
    innervation: "Deep branch of perineal nerve from pudendal nerve S2–S4.",
    function: "Compresses crus of penis or clitoris and helps maintain erection by reducing venous return."
  },
  {
    id: "superficial-transverse-perineal",
    name: "Superficial transverse perineal",
    region: "Pelvis / Perineum",
    group: "Superficial perineal pouch",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Ischial tuberosity.",
    insertion: "Perineal body.",
    innervation: "Deep branch of perineal nerve from pudendal nerve S2–S4.",
    function: "Stabilizes and fixes the perineal body."
  },

  /* Deep perineal pouch */
  {
    id: "deep-transverse-perineal",
    name: "Deep transverse perineal",
    region: "Pelvis / Perineum",
    group: "Deep perineal pouch",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Ischiopubic ramus.",
    insertion: "Perineal body and median raphe.",
    innervation: "Deep branch of perineal nerve from pudendal nerve S2–S4.",
    function: "Supports pelvic floor and stabilizes the perineal body."
  },
  {
    id: "external-urethral-sphincter",
    name: "External urethral sphincter",
    region: "Pelvis / Perineum",
    group: "Deep perineal pouch",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Pubic arch and surrounding connective tissue of the deep perineal pouch.",
    insertion: "Encircles membranous urethra; fibers blend with surrounding perineal structures.",
    innervation: "Deep branch of perineal nerve from pudendal nerve S2–S4.",
    function: "Voluntary compression of urethra; maintains urinary continence."
  },

  /* Anal triangle */
  {
    id: "external-anal-sphincter",
    name: "External anal sphincter",
    region: "Pelvis / Perineum",
    group: "Anal triangle",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Perineal body and anococcygeal ligament/coccyx region.",
    insertion: "Encircles anal canal and blends with surrounding perineal tissues.",
    innervation: "Inferior rectal nerve from pudendal nerve S2–S4; contribution from nerve to levator ani.",
    function: "Voluntary constriction of anal canal; maintains fecal continence."
  },

  /* Deep perineal pouch - female */
  {
    id: "compressor-urethrae",
    name: "Compressor urethrae",
    region: "Pelvis / Perineum",
    group: "Deep perineal pouch · female",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Ischiopubic ramus.",
    insertion: "Passes anteriorly across urethra to blend with fibers from the opposite side.",
    innervation: "Deep branch of perineal nerve from pudendal nerve S2–S4.",
    function: "Compresses urethra and assists urinary continence."
  },
  {
    id: "sphincter-urethrovaginalis",
    name: "Sphincter urethrovaginalis",
    region: "Pelvis / Perineum",
    group: "Deep perineal pouch · female",
    image: "images/muscles/pelvic-floor.jpg",
    origin: "Perineal body and surrounding connective tissue.",
    insertion: "Encircles urethra and vagina.",
    innervation: "Deep branch of perineal nerve from pudendal nerve S2–S4.",
    function: "Compresses urethra and vagina; assists urinary continence."
  },

  /* Larynx - intrinsic (additional) */
  {
    id: "aryepiglottic",
    name: "Aryepiglottic",
    region: "Head and neck",
    group: "Larynx · intrinsic muscles",
    image: "images/muscles/laryngeal-muscles.jpg",
    origin: "Apex of arytenoid cartilage; continuation of oblique arytenoid fibers.",
    insertion: "Lateral margin of epiglottis within the aryepiglottic fold.",
    innervation: "Recurrent laryngeal nerve from vagus nerve CN X.",
    function: "Narrows the laryngeal inlet by drawing the aryepiglottic folds together; helps close the laryngeal inlet during swallowing."
  },
  {
    id: "thyroepiglottic",
    name: "Thyroepiglottic",
    region: "Head and neck",
    group: "Larynx · intrinsic muscles",
    image: "images/muscles/laryngeal-muscles.jpg",
    origin: "Inner surface of thyroid cartilage; continuation of thyroarytenoid fibers.",
    insertion: "Lateral margin of epiglottis and aryepiglottic fold.",
    innervation: "Recurrent laryngeal nerve from vagus nerve CN X.",
    function: "Widens the laryngeal inlet by pulling the aryepiglottic fold laterally; assists opening of the laryngeal inlet."
  }

,
  /* ── Head and neck · Extraocular muscles ───────────────────────────── */
  {
    id: "superior-rectus",
    name: "Superior rectus",
    region: "Head and neck",
    group: "Extraocular muscles",
    image: "images/muscles/extraocular-muscles.jpg",
    origin: "Common tendinous ring at the apex of the orbit.",
    insertion: "Superior anterior sclera of the eyeball, anterior to the equator.",
    innervation: "Oculomotor nerve CN III, superior division.",
    function: "Primarily elevates the eyeball. Also adducts and medially rotates/intorts the eyeball."
  },
  {
    id: "inferior-rectus",
    name: "Inferior rectus",
    region: "Head and neck",
    group: "Extraocular muscles",
    image: "images/muscles/extraocular-muscles.jpg",
    origin: "Common tendinous ring at the apex of the orbit.",
    insertion: "Inferior anterior sclera of the eyeball, anterior to the equator.",
    innervation: "Oculomotor nerve CN III, inferior division.",
    function: "Primarily depresses the eyeball. Also adducts and laterally rotates/extorts the eyeball."
  },
  {
    id: "medial-rectus",
    name: "Medial rectus",
    region: "Head and neck",
    group: "Extraocular muscles",
    image: "images/muscles/extraocular-muscles.jpg",
    origin: "Common tendinous ring at the apex of the orbit.",
    insertion: "Medial anterior sclera of the eyeball, anterior to the equator.",
    innervation: "Oculomotor nerve CN III, inferior division.",
    function: "Adducts the eyeball."
  },
  {
    id: "lateral-rectus",
    name: "Lateral rectus",
    region: "Head and neck",
    group: "Extraocular muscles",
    image: "images/muscles/extraocular-muscles.jpg",
    origin: "Common tendinous ring at the apex of the orbit.",
    insertion: "Lateral anterior sclera of the eyeball, anterior to the equator.",
    innervation: "Abducens nerve CN VI.",
    function: "Abducts the eyeball."
  },
  {
    id: "superior-oblique",
    name: "Superior oblique",
    region: "Head and neck",
    group: "Extraocular muscles",
    image: "images/muscles/extraocular-muscles.jpg",
    origin: "Body of sphenoid bone, superior and medial to the common tendinous ring.",
    insertion: "Posterior superior lateral sclera of the eyeball after passing through the trochlea.",
    innervation: "Trochlear nerve CN IV.",
    function: "Primarily medially rotates/intorts the eyeball. Also depresses and abducts the eyeball."
  },
  {
    id: "inferior-oblique",
    name: "Inferior oblique",
    region: "Head and neck",
    group: "Extraocular muscles",
    image: "images/muscles/extraocular-muscles.jpg",
    origin: "Anterior floor of orbit, from the orbital surface of maxilla lateral to the lacrimal groove.",
    insertion: "Posterior inferior lateral sclera of the eyeball.",
    innervation: "Oculomotor nerve CN III, inferior division.",
    function: "Primarily laterally rotates/extorts the eyeball. Also elevates and abducts the eyeball."
  },
  {
    id: "levator-palpebrae-superioris",
    name: "Levator palpebrae superioris",
    region: "Head and neck",
    group: "Extraocular / eyelid muscle",
    image: "images/muscles/extraocular-muscles.jpg",
    origin: "Lesser wing of sphenoid bone, superior to the optic canal.",
    insertion: "Superior tarsal plate and skin of upper eyelid via levator aponeurosis.",
    innervation: "Skeletal part: oculomotor nerve CN III, superior division. Smooth muscle part, the superior tarsal muscle: sympathetic fibers.",
    function: "Elevates the upper eyelid."
  }

,
  /* ── Head and neck · Middle ear muscles ────────────────────────────── */
  {
    id: "tensor-tympani",
    name: "Tensor tympani",
    region: "Head and neck",
    group: "Middle ear muscles",
    image: "images/muscles/middle-ear-muscles.jpg",
    origin: "Cartilaginous part of the pharyngotympanic tube, greater wing of sphenoid, and walls of its own bony canal.",
    insertion: "Handle (manubrium) of malleus.",
    innervation: "Nerve to medial pterygoid from mandibular nerve V3.",
    function: "Tenses the tympanic membrane by pulling the malleus medially; dampens vibrations and reduces transmission of loud sounds."
  },
  {
    id: "stapedius",
    name: "Stapedius",
    region: "Head and neck",
    group: "Middle ear muscles",
    image: "images/muscles/middle-ear-muscles.jpg",
    origin: "Pyramidal eminence on the posterior wall of the tympanic cavity.",
    insertion: "Neck of stapes.",
    innervation: "Nerve to stapedius from facial nerve CN VII.",
    function: "Pulls the stapes posteriorly and stabilizes it at the oval window; dampens oscillations of the stapes and reduces transmission of loud sounds."
  }

,
  /* ── Inguinal / scrotal ─────────────────────────────────────────────── */
  {
    id: "cremaster",
    name: "Cremaster",
    region: "Testis",
    group: "Inguinal / scrotal",
    image: "images/muscles/abdominal-wall.jpg",
    origin: "Middle of the inguinal ligament and inferior free margin of internal oblique.",
    insertion: "Pubic tubercle and crest; loops over the spermatic cord and testis.",
    innervation: "Genital branch of genitofemoral nerve L1–L2.",
    function: "Draws the testis superiorly toward the superficial inguinal ring; cremasteric reflex. Absent or vestigial in females."
  }

];
