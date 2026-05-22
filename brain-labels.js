// Brain MRI Labels - validated pixel coordinates for IXI002 reference brain
// Coordinate system: axial JPEG slices (axial_NNN.jpg), 192x256px
// Each label: { id, name, slice, xPx, yPx, category, brief, full }
// Slice range: 0-220 (0=inferior, 220=superior)
// xPx range: 0-191 (21-170 = brain content, 21px black padding each side)
// yPx range: 0-255 (0=superior of image, 255=inferior of image)
// MNI coordinates used for derivation documented in comments

const BRAIN_LABELS = [

  // ===== FRONTAL LOBE =====
  {
    id: "frontal_lobe",
    name: "Frontal Lobe",
    slice: 182, xPx: 96, yPx: 92,   // MNI (0, 40, 50)
    category: "cortex",
    lobe: "frontal",
    brief: "Largest lobe; controls movement, speech, and executive function.",
    full: "The frontal lobe occupies the anterior portion of the cerebrum. It contains the primary motor cortex (precentral gyrus), premotor area, Broca's area (speech production), and prefrontal cortex responsible for planning, judgment, and personality."
  },
  {
    id: "prefrontal_cortex",
    name: "Prefrontal Cortex",
    slice: 149, xPx: 96, yPx: 68,   // MNI (0, 58, 20)
    category: "cortex",
    lobe: "frontal",
    brief: "Executive function, decision-making, and working memory.",
    full: "The prefrontal cortex (PFC) is the anterior part of the frontal lobe. It coordinates executive functions including decision-making, working memory, attention, and social behavior. Damage produces personality changes (Phineas Gage) and difficulty with planning."
  },
  {
    id: "motor_cortex",
    name: "Primary Motor Cortex",
    slice: 197, xPx: 71, yPx: 154,  // MNI (-30, -16, 64)
    category: "cortex",
    lobe: "frontal",
    brief: "Controls voluntary movement; organized as a motor homunculus.",
    full: "Located in the precentral gyrus (Brodmann area 4), the primary motor cortex is the principal origin of the corticospinal tract. Neurons are somatotopically organized as the motor homunculus, with disproportionately large face and hand areas. Lesions cause contralateral spastic paralysis."
  },
  {
    id: "broca_area",
    name: "Broca Area",
    slice: 139, xPx: 58, yPx: 108,  // MNI (-45, 20, 10)
    category: "cortex",
    lobe: "frontal",
    brief: "Speech production area in the left inferior frontal gyrus.",
    full: "Broca's area (BA 44/45) in the left inferior frontal gyrus is critical for speech production. Damage causes Broca's aphasia: non-fluent, effortful speech with relatively preserved comprehension. Named after Paul Broca who described it in 1861."
  },
  {
    id: "orbitofrontal_cortex",
    name: "Orbitofrontal Cortex",
    slice: 111, xPx: 96, yPx: 85,   // MNI (0, 38, -16)
    category: "cortex",
    lobe: "frontal",
    brief: "Reward, emotion regulation, and decision-making.",
    full: "The orbitofrontal cortex (OFC) sits above the orbits of the eyes. It integrates sensory information with emotional value for reward-based decision-making. OFC lesions cause impulsivity and social disinhibition."
  },

  // ===== PARIETAL LOBE =====
  {
    id: "parietal_lobe",
    name: "Parietal Lobe",
    slice: 192, xPx: 96, yPx: 190,  // MNI (0, -50, 60)
    category: "cortex",
    lobe: "parietal",
    brief: "Processes sensory information and spatial awareness.",
    full: "The parietal lobe integrates somatosensory input and spatial processing. It contains the primary somatosensory cortex (postcentral gyrus), superior parietal lobule (spatial attention), and inferior parietal lobule. Lesions cause neglect syndromes, apraxia, and spatial disorientation."
  },
  {
    id: "somatosensory_cortex",
    name: "Somatosensory Cortex",
    slice: 197, xPx: 71, yPx: 167,  // MNI (-30, -28, 64)
    category: "cortex",
    lobe: "parietal",
    brief: "Processes touch, pain, and proprioception; organized as a sensory homunculus.",
    full: "The primary somatosensory cortex (postcentral gyrus, BA 1/2/3) receives sensory input from the thalamus. It is organized somatotopically as a sensory homunculus. Lesions impair contralateral tactile discrimination, proprioception, and two-point discrimination."
  },

  // ===== TEMPORAL LOBE =====
  {
    id: "temporal_lobe",
    name: "Temporal Lobe",
    slice: 112, xPx: 53, yPx: 137,  // MNI (-52, -10, -15)
    category: "cortex",
    lobe: "temporal",
    brief: "Hearing, memory, and language comprehension.",
    full: "The temporal lobe lies inferior to the lateral sulcus. It contains primary auditory cortex (Heschl's gyri), Wernicke's area, the hippocampus and parahippocampal gyrus (memory), and the amygdala (emotion). Bilateral hippocampal damage causes anterograde amnesia."
  },
  {
    id: "wernicke_area",
    name: "Wernicke Area",
    slice: 145, xPx: 53, yPx: 175,  // MNI (-52, -42, 16)
    category: "cortex",
    lobe: "temporal",
    brief: "Language comprehension area in the left superior temporal gyrus.",
    full: "Wernicke's area (BA 22) in the posterior superior temporal gyrus is essential for language comprehension. Damage causes Wernicke's aphasia: fluent but meaningless speech (paraphasias), severely impaired comprehension. Named after Carl Wernicke who described it in 1874."
  },
  {
    id: "auditory_cortex",
    name: "Primary Auditory Cortex",
    slice: 139, xPx: 54, yPx: 153,  // MNI (-50, -22, 10)
    category: "cortex",
    lobe: "temporal",
    brief: "Processes sound; located in Heschl's gyri on the superior temporal plane.",
    full: "The primary auditory cortex (Heschl's gyri, BA 41/42) lies on the superior temporal plane within the lateral sulcus. It performs initial cortical processing of sound: frequency, intensity, and duration. It is tonotopically organized. Bilateral lesions cause cortical deafness."
  },

  // ===== OCCIPITAL LOBE =====
  {
    id: "occipital_lobe",
    name: "Occipital Lobe",
    slice: 144, xPx: 96, yPx: 221,  // MNI (0, -85, 15)
    category: "cortex",
    lobe: "occipital",
    brief: "Primary visual processing center.",
    full: "The occipital lobe contains the primary visual cortex (V1, BA 17) around the calcarine sulcus, and visual association areas (V2-V5). It receives input from the lateral geniculate nucleus via the optic radiations. Lesions cause contralateral homonymous visual field defects."
  },
  {
    id: "visual_cortex",
    name: "Visual Cortex (V1)",
    slice: 139, xPx: 96, yPx: 224,  // MNI (0, -88, 10)
    category: "cortex",
    lobe: "occipital",
    brief: "V1 - processes basic visual features like edges and orientation.",
    full: "The primary visual cortex (V1, striate cortex, BA 17) lines the calcarine sulcus. Each hemisphere receives input from the contralateral visual field. V1 contains a complete retinotopic map. Ocular dominance columns segregate input from each eye. Lesions cause contralateral homonymous hemianopia."
  },

  // ===== LIMBIC =====
  {
    id: "cingulate_cortex",
    name: "Cingulate Cortex",
    slice: 173, xPx: 96, yPx: 134,  // MNI (0, 0, 42)
    category: "limbic",
    lobe: "limbic",
    brief: "Attention, emotion, and pain processing; part of the limbic system.",
    full: "The cingulate cortex wraps around the corpus callosum. The anterior cingulate (ACC) is involved in error monitoring and emotional processing. The posterior cingulate (PCC) is a default mode network hub. The midcingulate participates in pain processing and motor control."
  },
  {
    id: "insula",
    name: "Insula",
    slice: 133, xPx: 64, yPx: 129,  // MNI (-38, 0, 5)
    category: "limbic",
    lobe: "limbic",
    brief: "Visceral sensation, interoception, taste, and empathy.",
    full: "The insula lies deep within the lateral sulcus, hidden beneath the frontal, temporal, and parietal opercula. It processes interoceptive signals, taste, pain, and autonomic function. The anterior insula is involved in empathy and self-awareness; posterior insula in primary interoception."
  },
  {
    id: "left_hippocampus",
    name: "Left Hippocampus",
    slice: 106, xPx: 73, yPx: 143,  // MNI (-28, -16, -20) HO atlas
    category: "limbic",
    lobe: "temporal",
    brief: "Critical for forming new explicit memories; part of the limbic system.",
    full: "The hippocampus lies in the medial temporal lobe, forming the floor of the temporal horn. It is the primary site of episodic and spatial memory formation. The Papez circuit connects hippocampus to fornix, mammillary bodies, thalamus, and cingulate cortex. Bilateral lesions cause anterograde amnesia."
  },
  {
    id: "right_hippocampus",
    name: "Right Hippocampus",
    slice: 106, xPx: 119, yPx: 140, // MNI (28, -14, -20) HO atlas
    category: "limbic",
    lobe: "temporal",
    brief: "Spatial navigation and memory consolidation.",
    full: "The right hippocampus is particularly important for spatial memory and navigation. London taxi drivers show enlarged right hippocampi. Hippocampal sclerosis is the most common pathology in temporal lobe epilepsy and the target of mesial temporal surgery."
  },
  {
    id: "left_amygdala",
    name: "Left Amygdala",
    slice: 104, xPx: 76, yPx: 127,  // MNI (-24, -2, -22) HO atlas
    category: "limbic",
    lobe: "temporal",
    brief: "Fear, emotion, and emotional memory; part of the limbic system.",
    full: "The amygdala is an almond-shaped nucleus in the medial temporal lobe, anterior to the hippocampus. It processes emotionally significant stimuli, especially fear, and modulates consolidation of emotional memories. Bilateral lesions (Kluver-Bucy syndrome) cause hypersexuality, placidity, and visual agnosia."
  },
  {
    id: "right_amygdala",
    name: "Right Amygdala",
    slice: 104, xPx: 118, yPx: 125, // MNI (26, 0, -22) HO atlas
    category: "limbic",
    lobe: "temporal",
    brief: "Fear processing and emotional response.",
    full: "The right amygdala is particularly dominant in processing negative emotional stimuli and autonomic fear responses. The basolateral complex (BLA) receives sensory inputs; the central nucleus generates autonomic and behavioral fear responses via the hypothalamus and brainstem."
  },

  // ===== SUBCORTICAL NUCLEI =====
  {
    id: "left_thalamus",
    name: "Left Thalamus",
    slice: 134, xPx: 88, yPx: 153,  // MNI (-10, -22, 6) HO atlas
    category: "subcortical",
    lobe: "diencephalon",
    brief: "Relay station for sensory and motor signals to the cortex.",
    full: "The thalamus relays almost all sensory information (except olfaction) to the cerebral cortex. Key nuclei: VPL (somatosensory), LGN (visual), MGN (auditory), VA/VL (motor), MD (prefrontal). The thalamus also regulates consciousness and sleep-wake cycles."
  },
  {
    id: "right_thalamus",
    name: "Right Thalamus",
    slice: 134, xPx: 108, yPx: 155, // MNI (14, -24, 6) HO atlas
    category: "subcortical",
    lobe: "diencephalon",
    brief: "Relay station for sensory and motor signals to the cortex.",
    full: "The right thalamus serves the left hemisphere. Its nuclei relay contralateral sensory signals. The pulvinar (largest nucleus) connects with parieto-occipital association cortex. Thalamic strokes cause contralateral hemisensory loss and sometimes thalamic pain syndrome."
  },
  {
    id: "left_caudate",
    name: "Left Caudate Nucleus",
    slice: 137, xPx: 86, yPx: 114,  // MNI (-12, 14, 8) HO atlas
    category: "subcortical",
    lobe: "basal_ganglia",
    brief: "Part of the striatum; involved in learning and voluntary movement.",
    full: "The caudate nucleus is C-shaped, curving alongside the lateral ventricle. Together with the putamen it forms the striatum, the input nucleus of the basal ganglia. Receives dopaminergic input from the substantia nigra. Caudate atrophy is characteristic of Huntington's disease."
  },
  {
    id: "right_caudate",
    name: "Right Caudate Nucleus",
    slice: 141, xPx: 108, yPx: 117, // MNI (14, 12, 12) HO atlas
    category: "subcortical",
    lobe: "basal_ganglia",
    brief: "Part of the striatum; involved in learning and voluntary movement.",
    full: "The right caudate nucleus head lies anterior to the thalamus. In Huntington's disease, caudate atrophy causes characteristic box-car ventricles on imaging. The caudate also plays roles in reward-based learning and OCD pathophysiology."
  },
  {
    id: "left_putamen",
    name: "Left Putamen",
    slice: 124, xPx: 78, yPx: 119,  // MNI (-22, 8, -4) HO atlas
    category: "subcortical",
    lobe: "basal_ganglia",
    brief: "Basal ganglia structure; regulates movement and reward.",
    full: "The putamen is the largest nucleus of the basal ganglia, forming the outer part of the lenticular nucleus. It is the main input target of motor cortex within the basal ganglia. In Parkinson's disease, dopaminergic deafferentation of the putamen causes motor symptoms."
  },
  {
    id: "right_putamen",
    name: "Right Putamen",
    slice: 124, xPx: 114, yPx: 117, // MNI (22, 10, -4) HO atlas
    category: "subcortical",
    lobe: "basal_ganglia",
    brief: "Basal ganglia structure; regulates movement and reward.",
    full: "The right putamen receives motor cortex inputs and sends inhibitory signals via direct and indirect pathways to the globus pallidus. Iron accumulation in the putamen occurs in neurodegeneration with brain iron accumulation (NBIA), visible as T2 hypointensity on MRI."
  },
  {
    id: "hypothalamus",
    name: "Hypothalamus",
    slice: 113, xPx: 96, yPx: 128,  // MNI (0, -2, -14)
    category: "subcortical",
    lobe: "diencephalon",
    brief: "Master regulator of autonomic function, hormones, and homeostasis.",
    full: "The hypothalamus lies below the thalamus, forming the floor of the third ventricle. It controls the pituitary gland, regulating all endocrine axes. It coordinates autonomic responses, body temperature, hunger, thirst, circadian rhythms, and reproductive behavior. Key nuclei: suprachiasmatic (circadian), paraventricular (ADH/oxytocin), arcuate (satiety)."
  },

  // ===== BRAINSTEM =====
  {
    id: "brainstem",
    name: "Brainstem",
    slice: 94, xPx: 98, yPx: 152,   // MNI (2, -26, -32) HO atlas
    category: "brainstem",
    lobe: "brainstem",
    brief: "Controls vital functions: breathing, heart rate, and consciousness.",
    full: "The brainstem consists of midbrain, pons, and medulla oblongata. It contains cranial nerve nuclei (III-XII), the reticular formation, ascending/descending tracts, and vital autonomic centers. It controls breathing, cardiovascular function, and is essential for consciousness via the ARAS."
  },
  {
    id: "midbrain",
    name: "Midbrain",
    slice: 111, xPx: 96, yPx: 150,  // MNI (0, -22, -16)
    category: "brainstem",
    lobe: "brainstem",
    brief: "Contains superior and inferior colliculi; cranial nerves III and IV.",
    full: "The midbrain lies between the pons and diencephalon. Dorsal: superior colliculi (visual reflexes), inferior colliculi (auditory reflexes). Ventral: cerebral peduncles (corticospinal tract), substantia nigra (dopamine; lost in Parkinson's), red nucleus. Cranial nerves III and IV originate here."
  },
  {
    id: "pons",
    name: "Pons",
    slice: 96, xPx: 96, yPx: 154,   // MNI (0, -28, -30)
    category: "brainstem",
    lobe: "brainstem",
    brief: "Connects cerebellum to brainstem; contains cranial nerves V-VIII.",
    full: "The pons connects the cerebellum via the middle cerebellar peduncles. It contains the pontine nuclei, locus coeruleus (norepinephrine), and cranial nerve nuclei V (trigeminal), VI (abducens), VII (facial), VIII (vestibulocochlear). Pontine gliomas are common in children."
  },
  {
    id: "medulla_oblongata",
    name: "Medulla Oblongata",
    slice: 74, xPx: 96, yPx: 159,   // MNI (0, -35, -50)
    category: "brainstem",
    lobe: "brainstem",
    brief: "Vital center for breathing, heart rate, and swallowing.",
    full: "The medulla oblongata is the caudal part of the brainstem. Contains respiratory and cardiovascular centers, cranial nerve nuclei IX-XII, nucleus tractus solitarius, inferior olivary nucleus, and pyramidal decussation. Lateral medullary syndrome (Wallenberg) causes ipsilateral face and contralateral body sensory loss."
  },

  // ===== CEREBELLUM =====
  {
    id: "cerebellum",
    name: "Cerebellum",
    slice: 96, xPx: 96, yPx: 183,   // MNI (0, -55, -30)
    category: "cerebellum",
    lobe: "cerebellum",
    brief: "Coordinates movement, balance, and motor learning.",
    full: "The cerebellum occupies the posterior fossa, connected to the brainstem by three cerebellar peduncles. It contains more neurons than the rest of the brain combined. It fine-tunes movement via the cerebellar-thalamo-cortical loop. Lesions cause ipsilateral ataxia, dysmetria, dysdiadochokinesia, and intention tremor."
  },
  {
    id: "vermis",
    name: "Cerebellar Vermis",
    slice: 104, xPx: 96, yPx: 187,  // MNI (0, -58, -22)
    category: "cerebellum",
    lobe: "cerebellum",
    brief: "Midline cerebellum; controls axial and trunk movements.",
    full: "The vermis is the midline unpaired portion of the cerebellum, controlling axial musculature: posture, gait, and truncal coordination. The flocculonodular lobe regulates vestibulo-ocular reflexes. Midline cerebellar lesions (e.g., medulloblastoma in children) cause truncal ataxia and a wide-based gait."
  },

  // ===== WHITE MATTER =====
  {
    id: "corpus_callosum",
    name: "Corpus Callosum",
    slice: 152, xPx: 96, yPx: 131,  // MNI (0, 0, 22)
    category: "white_matter",
    lobe: "white_matter",
    brief: "Largest white matter tract; connects the two cerebral hemispheres.",
    full: "The corpus callosum contains ~200-300 million axons connecting left and right cerebral hemispheres. From anterior to posterior: rostrum, genu (frontal connections), body, isthmus, splenium (occipital/parietal connections). Surgical section (callosotomy) treats intractable epilepsy but causes disconnection syndrome."
  },
  {
    id: "internal_capsule",
    name: "Internal Capsule",
    slice: 143, xPx: 83, yPx: 136,  // MNI (-16, -6, 14)
    category: "white_matter",
    lobe: "white_matter",
    brief: "Major white matter tract carrying motor and sensory fibers between cortex and spinal cord.",
    full: "The internal capsule is a V-shaped band of fibers between the basal ganglia and thalamus. Anterior limb: frontopontine and thalamofrontal fibers. Genu: corticobulbar tract. Posterior limb: corticospinal tract and thalamocortical sensory fibers. Small capsular strokes cause large motor/sensory deficits due to fiber concentration."
  },
  {
    id: "corona_radiata",
    name: "Corona Radiata",
    slice: 160, xPx: 81, yPx: 145,  // MNI (-18, -12, 30)
    category: "white_matter",
    lobe: "white_matter",
    brief: "Radiating fan of white matter connecting cortex to internal capsule.",
    full: "The corona radiata is the fan-shaped continuation of the internal capsule fibers, spreading out to connect all cortical areas with subcortical structures. It includes corticospinal, corticobulbar, corticothalamic, and thalamocortical fibers. Disruption causes motor deficits and cognitive impairment."
  },
  {
    id: "anterior_commissure",
    name: "Anterior Commissure",
    slice: 124, xPx: 96, yPx: 125,  // MNI (0, 2, -4)
    category: "white_matter",
    lobe: "white_matter",
    brief: "White matter bundle connecting the two temporal lobes.",
    full: "The anterior commissure crosses the midline just anterior to the fornix columns, at the anterior wall of the third ventricle. It connects the olfactory bulbs, anterior temporal lobes, and amygdalae bilaterally. It is smaller than the corpus callosum and is present in all mammals."
  },

  // ===== VENTRICLES =====
  {
    id: "lateral_ventricle",
    name: "Lateral Ventricle",
    slice: 137, xPx: 106, yPx: 127, // MNI (12, 2, 8) - right side body
    category: "ventricles",
    lobe: "ventricles",
    brief: "Largest cerebrospinal fluid cavity; lies within each cerebral hemisphere.",
    full: "The lateral ventricles are the largest of the four CSF-filled ventricles. Each has a body, frontal (anterior) horn, occipital (posterior) horn, and temporal (inferior) horn. They communicate with the third ventricle via the foramen of Monro. CSF is produced by the choroid plexus within the ventricles."
  },
  {
    id: "third_ventricle",
    name: "Third Ventricle",
    slice: 137, xPx: 96, yPx: 131,  // MNI (0, -2, 8) - validated CSF signal
    category: "ventricles",
    lobe: "ventricles",
    brief: "Midline ventricle between the two thalami.",
    full: "The third ventricle is a narrow midline slit between the two thalami. It communicates with the lateral ventricles via the foramina of Monro and with the fourth ventricle via the cerebral aqueduct (aqueduct of Sylvius). The hypothalamus forms its floor. Colloid cysts here can cause acute obstructive hydrocephalus."
  },
  {
    id: "fourth_ventricle",
    name: "Fourth Ventricle",
    slice: 98, xPx: 96, yPx: 168,   // MNI (0, -41, -28) - validated low signal
    category: "ventricles",
    lobe: "ventricles",
    brief: "Diamond-shaped ventricle between cerebellum and brainstem.",
    full: "The fourth ventricle is a diamond-shaped CSF space between the cerebellum (roof) and pons/medulla (floor). It communicates with the subarachnoid space via the lateral foramina of Luschka and median foramen of Magendie. Dandy-Walker malformation involves fourth ventricle cystic dilation with absent vermis."
  }
];

// Category colors for markers
const LABEL_CATEGORY_COLORS = {
  cortex:       "#4a9eff",
  limbic:       "#ff7043",
  subcortical:  "#9c27b0",
  brainstem:    "#795548",
  cerebellum:   "#009688",
  white_matter: "#ff9800",
  ventricles:   "#00bcd4"
};

// Lobe groupings for filtering
const LABEL_LOBES = {
  frontal:      ["frontal_lobe", "prefrontal_cortex", "motor_cortex", "broca_area", "orbitofrontal_cortex"],
  parietal:     ["parietal_lobe", "somatosensory_cortex"],
  temporal:     ["temporal_lobe", "wernicke_area", "auditory_cortex", "left_hippocampus", "right_hippocampus", "left_amygdala", "right_amygdala"],
  occipital:    ["occipital_lobe", "visual_cortex"],
  limbic:       ["cingulate_cortex", "insula"],
  subcortical:  ["left_thalamus", "right_thalamus", "left_caudate", "right_caudate", "left_putamen", "right_putamen", "hypothalamus"],
  brainstem:    ["brainstem", "midbrain", "pons", "medulla_oblongata"],
  cerebellum:   ["cerebellum", "vermis"],
  white_matter: ["corpus_callosum", "internal_capsule", "corona_radiata", "anterior_commissure"],
  ventricles:   ["lateral_ventricle", "third_ventricle", "fourth_ventricle"]
};
