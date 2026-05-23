// brain-labels.js
// Coordinates validated against IXI002-Guys-0828-T1.nii.gz using:
//   - Intensity-guided voxel centroid refinement (NIfTI raw values)
//   - NCC patch similarity for sliceMin/sliceMax, capped at anatomical maxima
// Coordinate space: axial JPEG slices (axial_NNN.jpg)
//   slice  = NIfTI j-axis index (inferior=0, superior=255)
//   xPx    = horizontal pixel in 192x256 JPEG (21px left padding + brain content)
//   yPx    = vertical pixel in 192x256 JPEG (0=top/anterior, 255=bottom/posterior)

const BRAIN_LABELS = [

  // -- Subcortical / Deep grey matter ------------------------------------
  {
    id: "left_thalamus", name: "Left Thalamus",
    slice: 133, xPx: 87, yPx: 153, sliceMin: 115, sliceMax: 151,
    category: "subcortical", lobe: "diencephalon",
    brief: "Sensory relay hub",
    full: "The thalamus relays nearly all sensory and motor signals to the cerebral cortex and is essential for consciousness and alertness. The left thalamus primarily serves the right side of the body."
  },
  {
    id: "right_thalamus", name: "Right Thalamus",
    slice: 131, xPx: 107, yPx: 153, sliceMin: 113, sliceMax: 149,
    category: "subcortical", lobe: "diencephalon",
    brief: "Sensory relay hub",
    full: "Mirror of the left thalamus. The right thalamus relays signals serving the left body and right hemisphere, and plays a key role in regulating sleep-wake transitions."
  },
  {
    id: "left_caudate", name: "Left Caudate",
    slice: 141, xPx: 93, yPx: 127, sliceMin: 121, sliceMax: 161,
    category: "subcortical", lobe: "basal_ganglia",
    brief: "Voluntary movement planning",
    full: "The caudate nucleus is a C-shaped structure forming part of the striatum. It integrates cortical input for planning voluntary movement and also plays a role in learning and memory."
  },
  {
    id: "right_caudate", name: "Right Caudate",
    slice: 140, xPx: 102, yPx: 127, sliceMin: 120, sliceMax: 160,
    category: "subcortical", lobe: "basal_ganglia",
    brief: "Voluntary movement planning",
    full: "The right caudate nucleus mirrors the left. Together they form the heads of the striatum, visible in axial sections as comma-shaped structures flanking the lateral ventricles."
  },
  {
    id: "left_putamen", name: "Left Putamen",
    slice: 135, xPx: 80, yPx: 130, sliceMin: 119, sliceMax: 151,
    category: "subcortical", lobe: "basal_ganglia",
    brief: "Motor and reward processing",
    full: "The putamen, together with the caudate, forms the striatum. It regulates motor activity through the direct and indirect basal ganglia pathways and plays a role in reinforcement learning."
  },
  {
    id: "right_putamen", name: "Right Putamen",
    slice: 134, xPx: 115, yPx: 128, sliceMin: 118, sliceMax: 150,
    category: "subcortical", lobe: "basal_ganglia",
    brief: "Motor and reward processing",
    full: "The right putamen mirrors the left structure. Damage here is associated with Parkinson disease motor symptoms and disorders of habit learning."
  },
  {
    id: "left_globus_pallidus", name: "Left Globus Pallidus",
    slice: 133, xPx: 85, yPx: 136, sliceMin: 123, sliceMax: 143,
    category: "subcortical", lobe: "basal_ganglia",
    brief: "Basal ganglia output gate",
    full: "The globus pallidus is the main output nucleus of the basal ganglia. It receives inhibitory input from the striatum and sends inhibitory projections to the thalamus via the internal pallidum."
  },
  {
    id: "right_globus_pallidus", name: "Right Globus Pallidus",
    slice: 132, xPx: 111, yPx: 134, sliceMin: 122, sliceMax: 142,
    category: "subcortical", lobe: "basal_ganglia",
    brief: "Basal ganglia output gate",
    full: "Mirror of the left globus pallidus. In Parkinson disease, overactivity of the globus pallidus interna drives the hypokinetic motor features; deep brain stimulation targeting it provides relief."
  },
  {
    id: "left_hippocampus", name: "Left Hippocampus",
    slice: 105, xPx: 77, yPx: 166, sliceMin: 93, sliceMax: 117,
    category: "limbic", lobe: "temporal",
    brief: "Memory encoding",
    full: "The hippocampus is crucial for converting short-term memories to long-term ones. The left hippocampus is especially important for verbal and declarative memory. Atrophy is an early marker of Alzheimer disease."
  },
  {
    id: "right_hippocampus", name: "Right Hippocampus",
    slice: 105, xPx: 114, yPx: 157, sliceMin: 93, sliceMax: 116,
    category: "limbic", lobe: "temporal",
    brief: "Spatial and episodic memory",
    full: "The right hippocampus is particularly involved in spatial navigation and episodic memory. In London taxi drivers, the posterior right hippocampus was enlarged relative to controls, reflecting experience-dependent plasticity."
  },
  {
    id: "left_amygdala", name: "Left Amygdala",
    slice: 117, xPx: 79, yPx: 154, sliceMin: 107, sliceMax: 127,
    category: "limbic", lobe: "temporal",
    brief: "Fear and emotion processing",
    full: "The amygdala processes emotional memories, especially fear conditioning. It receives sensory information and projects to the hypothalamus and brainstem to coordinate autonomic and endocrine fear responses."
  },
  {
    id: "right_amygdala", name: "Right Amygdala",
    slice: 116, xPx: 115, yPx: 153, sliceMin: 106, sliceMax: 126,
    category: "limbic", lobe: "temporal",
    brief: "Fear and emotion processing",
    full: "The right amygdala contributes to processing facial expressions and implicit emotional learning. Bilateral amygdala damage abolishes fear responses while leaving most cognitive functions intact."
  },

  // -- White matter / Commissures ----------------------------------------
  {
    id: "corpus_callosum_body", name: "Corpus Callosum (body)",
    slice: 115, xPx: 96, yPx: 127, sliceMin: 107, sliceMax: 123,
    category: "white_matter", lobe: "midline",
    brief: "Main interhemispheric bridge",
    full: "The corpus callosum body carries axons connecting corresponding cortical areas of the two hemispheres. It is the largest white matter commissure in the brain. Agenesis results in characteristic Probst bundles running anteroposteriorly."
  },
  {
    id: "corpus_callosum_genu", name: "Corpus Callosum (genu)",
    slice: 115, xPx: 99, yPx: 121, sliceMin: 107, sliceMax: 123,
    category: "white_matter", lobe: "midline",
    brief: "Frontal lobe commissure",
    full: "The genu (Latin: knee) is the anterior-curving part of the corpus callosum connecting the prefrontal cortices. It carries fibres important for higher cognition and is preferentially thinned in normal ageing."
  },
  {
    id: "corpus_callosum_splenium", name: "Corpus Callosum (splenium)",
    slice: 116, xPx: 93, yPx: 128, sliceMin: 108, sliceMax: 124,
    category: "white_matter", lobe: "midline",
    brief: "Occipital/parietal commissure",
    full: "The splenium is the thickened posterior end of the corpus callosum, connecting occipital and posterior parietal cortices. It carries visual interhemispheric fibres and is often spared longest in callosal degeneration."
  },
  {
    id: "internal_capsule", name: "Internal Capsule",
    slice: 134, xPx: 89, yPx: 136, sliceMin: 116, sliceMax: 152,
    category: "white_matter", lobe: "deep",
    brief: "Corticospinal highway",
    full: "The internal capsule is a V-shaped band of white matter carrying fibres between the cortex and lower structures. The posterior limb contains the corticospinal tract; a small stroke here causes contralateral hemiplegia."
  },
  {
    id: "anterior_commissure", name: "Anterior Commissure",
    slice: 94, xPx: 95, yPx: 128, sliceMin: 88, sliceMax: 100,
    category: "white_matter", lobe: "midline",
    brief: "Olfactory/temporal commissure",
    full: "The anterior commissure connects the olfactory bulbs and parts of the temporal lobes across the midline. It is a landmark used to define the AC-PC line, the standard reference axis for stereotaxic brain atlases."
  },

  // -- Ventricles --------------------------------------------------------
  {
    id: "left_lateral_ventricle", name: "Left Lateral Ventricle",
    slice: 122, xPx: 88, yPx: 118, sliceMin: 106, sliceMax: 138,
    category: "ventricles", lobe: "deep",
    brief: "CSF-filled cavity (left)",
    full: "The lateral ventricles are the largest brain ventricles, filled with cerebrospinal fluid produced by the choroid plexus. The left lateral ventricle communicates with the third ventricle via the foramen of Monro."
  },
  {
    id: "right_lateral_ventricle", name: "Right Lateral Ventricle",
    slice: 121, xPx: 103, yPx: 116, sliceMin: 105, sliceMax: 137,
    category: "ventricles", lobe: "deep",
    brief: "CSF-filled cavity (right)",
    full: "Enlargement of the lateral ventricles (ventriculomegaly) can indicate hydrocephalus, cerebral atrophy, or developmental anomalies. Ventricular volume increases about 1-2 ml per year in normal ageing."
  },
  {
    id: "third_ventricle", name: "Third Ventricle",
    slice: 132, xPx: 96, yPx: 143, sliceMin: 118, sliceMax: 146,
    category: "ventricles", lobe: "deep",
    brief: "Midline diencephalic cavity",
    full: "The third ventricle is a narrow midline cavity flanked by the two thalami. It connects to the lateral ventricles via the foramina of Monro, and to the fourth ventricle via the cerebral aqueduct."
  },

  // -- Brainstem ---------------------------------------------------------
  {
    id: "brainstem", name: "Brainstem",
    slice: 93, xPx: 98, yPx: 156, sliceMin: 75, sliceMax: 111,
    category: "brainstem", lobe: "brainstem",
    brief: "Vital functions centre",
    full: "The brainstem (midbrain, pons, medulla) controls fundamental survival functions: breathing, heart rate, blood pressure, and consciousness. It also carries all ascending and descending tracts between cortex and spinal cord."
  },
  {
    id: "substantia_nigra", name: "Substantia Nigra",
    slice: 108, xPx: 93, yPx: 154, sliceMin: 98, sliceMax: 118,
    category: "brainstem", lobe: "midbrain",
    brief: "Dopamine production site",
    full: "The substantia nigra pars compacta produces dopamine released into the striatum, enabling smooth coordinated movement. Selective loss of these dopaminergic neurons is the hallmark pathology of Parkinson disease."
  },
  {
    id: "red_nucleus", name: "Red Nucleus",
    slice: 109, xPx: 97, yPx: 145, sliceMin: 101, sliceMax: 117,
    category: "brainstem", lobe: "midbrain",
    brief: "Motor coordination relay",
    full: "The red nucleus in the midbrain tegmentum relays signals between the cerebellum and the spinal cord via the rubrospinal tract. It appears slightly reddish in fresh specimens due to iron content and vascularity."
  },
  {
    id: "pons", name: "Pons",
    slice: 82, xPx: 96, yPx: 155, sliceMin: 66, sliceMax: 98,
    category: "brainstem", lobe: "pons",
    brief: "Cranial nerve relay, breathing",
    full: "The pons contains cranial nerve nuclei V-VIII, the pneumotaxic and apneustic respiratory centres, and the basis pontis which relays cortical signals to the cerebellum. Locked-in syndrome results from bilateral ventral pontine infarction."
  },
  {
    id: "medulla_oblongata", name: "Medulla Oblongata",
    slice: 70, xPx: 96, yPx: 153, sliceMin: 52, sliceMax: 88,
    category: "brainstem", lobe: "medulla",
    brief: "Vital reflexes centre",
    full: "The medulla contains the cardiovascular centre, the respiratory rhythm generator, and nuclei for cranial nerves IX-XII. The pyramidal decussation, where most corticospinal fibres cross, occurs in the lower medulla."
  },

  // -- Cerebellum --------------------------------------------------------
  {
    id: "left_cerebellum", name: "Left Cerebellum",
    slice: 80, xPx: 77, yPx: 177, sliceMin: 65, sliceMax: 95,
    category: "cerebellum", lobe: "cerebellum",
    brief: "Motor coordination (right body)",
    full: "The cerebellum coordinates and fine-tunes movement, balance, and motor learning. The left cerebellar hemisphere primarily influences the right side of the body. It contains more neurons than the rest of the brain combined."
  },
  {
    id: "right_cerebellum", name: "Right Cerebellum",
    slice: 79, xPx: 114, yPx: 177, sliceMin: 65, sliceMax: 95,
    category: "cerebellum", lobe: "cerebellum",
    brief: "Motor coordination (left body)",
    full: "The right cerebellum coordinates the left side of the body. Lateral cerebellar lesions cause limb ataxia; vermis lesions cause truncal ataxia. The cerebellum also participates in cognitive and affective processing."
  },

  // -- Cerebral cortex --------------------------------------------------
  {
    id: "frontal_lobe", name: "Frontal Lobe",
    slice: 166, xPx: 96, yPx: 114, sliceMin: 146, sliceMax: 186,
    category: "cortex", lobe: "frontal",
    brief: "Planning, personality, motor control",
    full: "The frontal lobe houses the primary motor cortex (precentral gyrus), premotor areas, prefrontal cortex for executive function and working memory, and Broca's area for language production in the dominant hemisphere."
  },
  {
    id: "parietal_lobe", name: "Parietal Lobe",
    slice: 148, xPx: 96, yPx: 85, sliceMin: 132, sliceMax: 166,
    category: "cortex", lobe: "parietal",
    brief: "Sensory integration, spatial processing",
    full: "The parietal lobe processes somatosensory information and integrates spatial awareness. The superior parietal lobule handles visuospatial tasks; the angular gyrus is involved in language. Damage causes neglect and apraxia."
  },
  {
    id: "temporal_lobe", name: "Temporal Lobe",
    slice: 114, xPx: 71, yPx: 145, sliceMin: 96, sliceMax: 132,
    category: "cortex", lobe: "temporal",
    brief: "Auditory processing, language, memory",
    full: "The temporal lobe processes auditory information, language comprehension (Wernicke's area), visual object recognition in the inferior temporal cortex, and memory via the hippocampal formation."
  },
  {
    id: "occipital_lobe", name: "Occipital Lobe",
    slice: 96, xPx: 103, yPx: 82, sliceMin: 78, sliceMax: 114,
    category: "cortex", lobe: "occipital",
    brief: "Primary visual processing",
    full: "The occipital lobe houses the primary visual cortex (V1) around the calcarine sulcus, which receives input from the lateral geniculate nucleus. Destruction of V1 causes cortical blindness; partial lesions produce scotomas."
  },
  {
    id: "insula", name: "Insula",
    slice: 128, xPx: 70, yPx: 137, sliceMin: 110, sliceMax: 146,
    category: "cortex", lobe: "temporal",
    brief: "Interoception, pain, autonomic",
    full: "The insular cortex, hidden within the lateral sulcus, integrates interoceptive signals such as hunger, thirst, pain, and autonomic state. It plays a role in emotional awareness, taste, and the experience of disgust."
  },
  {
    id: "cingulate_cortex", name: "Cingulate Cortex",
    slice: 140, xPx: 96, yPx: 103, sliceMin: 120, sliceMax: 160,
    category: "cortex", lobe: "frontal",
    brief: "Attention, emotion, pain modulation",
    full: "The cingulate cortex arches above the corpus callosum. The anterior cingulate is involved in attention and error monitoring; the posterior cingulate in self-referential cognition. Both are active in pain perception and empathy."
  },
  {
    id: "primary_motor_cortex", name: "Primary Motor Cortex",
    slice: 161, xPx: 83, yPx: 85, sliceMin: 143, sliceMax: 179,
    category: "cortex", lobe: "frontal",
    brief: "Voluntary movement execution",
    full: "The primary motor cortex (precentral gyrus, area 4) contains Betz cells whose axons form the corticospinal tract. It is somatotopically organised as the motor homunculus: face lateral, leg medial, hand with the largest representation."
  },
  {
    id: "primary_somatosensory", name: "Primary Somatosensory Cortex",
    slice: 157, xPx: 83, yPx: 84, sliceMin: 139, sliceMax: 175,
    category: "cortex", lobe: "parietal",
    brief: "Touch and proprioception",
    full: "The primary somatosensory cortex (postcentral gyrus, areas 1, 2, 3) receives tactile, proprioceptive, and pain signals from the contralateral body via the thalamus, arranged as the sensory homunculus."
  },
  {
    id: "brocas_area", name: "Broca's Area",
    slice: 149, xPx: 73, yPx: 120, sliceMin: 131, sliceMax: 167,
    category: "cortex", lobe: "frontal",
    brief: "Speech production (left hemisphere)",
    full: "Broca's area (areas 44-45, left inferior frontal gyrus) is responsible for speech production and grammatical processing. Damage causes Broca's aphasia: effortful, non-fluent speech with relatively preserved comprehension."
  },
  {
    id: "wernickes_area", name: "Wernicke's Area",
    slice: 120, xPx: 68, yPx: 120, sliceMin: 109, sliceMax: 128,
    category: "cortex", lobe: "temporal",
    brief: "Language comprehension (left hemisphere)",
    full: "Wernicke's area (area 22, left posterior superior temporal gyrus) is essential for language comprehension. Damage causes Wernicke's aphasia: fluent but nonsensical speech with poor comprehension."
  },
  {
    id: "olfactory_bulb", name: "Olfactory Bulb",
    slice: 155, xPx: 102, yPx: 84, sliceMin: 145, sliceMax: 165,
    category: "cortex", lobe: "frontal",
    brief: "First olfactory relay",
    full: "The olfactory bulb is a small neural structure on the inferior frontal lobe that receives direct input from olfactory receptor neurons via the cribriform plate. Olfaction is the only sensory system that bypasses the thalamus to project directly to cortex."
  }

];

// Category colour palette
const LABEL_CATEGORY_COLORS = {
  subcortical:  "#9c27b0",
  limbic:       "#ff7043",
  white_matter: "#ff9800",
  ventricles:   "#00bcd4",
  brainstem:    "#795548",
  cerebellum:   "#009688",
  cortex:       "#4a9eff",
};

const LABEL_LOBES = [
  "diencephalon", "basal_ganglia", "temporal", "midline",
  "deep", "brainstem", "midbrain", "pons", "medulla",
  "cerebellum", "frontal", "parietal", "occipital"
];
