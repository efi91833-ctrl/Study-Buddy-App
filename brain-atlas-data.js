/* ============================================================
   Study Buddy — Brain Atlas Data
   36 structures with 3D positions, MRI levels, and descriptions
   Coordinate system: x left(-)/right(+), y inferior(-)/superior(+), z posterior(-)/anterior(+)
   ============================================================ */

window.BRAIN_ATLAS_DATA = {

  // ── FRONTAL LOBE ──────────────────────────────────────────
  prefrontal_cortex: {
    name: 'Prefrontal Cortex',
    lobe: 'Frontal Lobe',
    color: '#3A7BD5',
    pos3d: { x: 0, y: 0.15, z: 1.15 },
    scale3d: { x: 0.75, y: 0.6, z: 0.5 },
    mriLevels: [10, 11, 12, 13, 14, 15, 16],
    brief: 'Executive center of the brain — handles planning, decision-making, working memory, and impulse control.',
    full: `The prefrontal cortex (PFC) occupies the anterior third of the frontal lobe and is the most recently evolved part of the human brain. It is the seat of executive function — the cognitive processes that allow us to plan, reason, maintain working memory, and control impulses.

Key functions: working memory (holding information temporarily in mind), cognitive flexibility (switching between tasks), inhibitory control (suppressing inappropriate responses), and value-based decision-making.

The PFC has dense reciprocal connections with virtually all cortical and subcortical regions, acting as the brain's coordinator. It is especially connected to the amygdala (emotion regulation), basal ganglia (reward and motivation), and parietal/temporal association areas (sensory integration).

Lesions produce the dysexecutive syndrome: impaired planning, perseveration (getting stuck on one behavior), personality change (disinhibition or apathy), and poor social judgment. The classic case is Phineas Gage (1848), whose left frontal lobe was destroyed by an iron rod — transforming a responsible foreman into someone impulsive and socially inappropriate, providing the first evidence of the PFC's role in personality.`
  },

  motor_cortex: {
    name: 'Primary Motor Cortex',
    lobe: 'Frontal Lobe',
    color: '#2E86DE',
    pos3d: { x: 0, y: 0.95, z: 0.3 },
    scale3d: { x: 0.9, y: 0.3, z: 0.25 },
    mriLevels: [13, 14, 15, 16, 17],
    brief: 'Controls voluntary movement. Body parts are mapped along a strip (motor homunculus) — hands and face get the most space.',
    full: `The primary motor cortex (M1) occupies the precentral gyrus, the gyrus immediately anterior to the central sulcus. It is the primary origin of the corticospinal tract, which descends to motor neurons in the spinal cord to control skeletal muscle.

The body is represented in a precise somatotopic map called the motor homunculus. The most lateral portion controls facial muscles, progressing medially through the hand, arm, trunk, and leg, to the medial surface controlling the foot and perineum. The face and hand have disproportionately large representations because fine motor control requires more neurons.

Upper motor neurons (UMN) in M1 synapse on lower motor neurons in the anterior horn of the spinal cord. UMN lesions (stroke, tumor) cause spastic paralysis — increased tone, hyperreflexia, and a positive Babinski sign — while LMN lesions cause flaccid paralysis with muscle wasting and fasciculations.

M1 does not act alone: it receives preparatory signals from the premotor and supplementary motor areas and refined timing from the cerebellum via the thalamus.`
  },

  premotor_cortex: {
    name: 'Premotor Cortex',
    lobe: 'Frontal Lobe',
    color: '#1E6EC8',
    pos3d: { x: 0, y: 0.75, z: 0.55 },
    scale3d: { x: 0.85, y: 0.35, z: 0.25 },
    mriLevels: [13, 14, 15, 16],
    brief: 'Prepares and coordinates complex movements, especially those guided by external cues.',
    full: `The premotor cortex (PMC) lies anterior to the primary motor cortex and is involved in the planning and coordination of movement, particularly movements guided by sensory cues from the environment.

It contains a large number of "mirror neurons" — cells that fire both when an animal performs an action and when it observes the same action performed by another. Mirror neurons are thought to underlie action understanding, imitation learning, and possibly empathy.

The PMC projects directly to M1 and also sends corticospinal fibers of its own. It is especially active during tasks that require selecting a movement based on an external stimulus (e.g., reaching for a specific object in response to a visual cue).

Damage to the lateral PMC impairs the ability to use external cues to guide movement. Patients may struggle with learned, tool-use movements despite intact basic motor function — a condition known as apraxia.`
  },

  sma: {
    name: 'Supplementary Motor Area',
    lobe: 'Frontal Lobe',
    color: '#1558A8',
    pos3d: { x: 0, y: 0.85, z: 0.45 },
    scale3d: { x: 0.5, y: 0.3, z: 0.2 },
    mriLevels: [14, 15, 16],
    brief: 'Plans self-initiated movements and coordinates bilateral movements — especially active just before you decide to move.',
    full: `The supplementary motor area (SMA) is located on the medial surface of the hemisphere, anterior to the leg representation of M1. It is critical for internally generated (self-initiated) movements — the kind where you decide to act without an external prompt.

Neuroimaging shows the SMA becomes active 1-2 seconds before a voluntary movement begins, even before M1 shows activity. This corresponds to the "readiness potential" observed in EEG. The SMA plays a key role in the famous Libet experiments on the neuroscience of free will.

The SMA is essential for bimanual coordination (using both hands together), complex sequential movements, and the initiation of speech. Stimulation of the SMA can produce the subjective urge to move without actual movement.

Lesions of the SMA cause the "SMA syndrome": initial akinesia (inability to initiate movement) and mutism (inability to speak), which typically recover over weeks as premotor areas compensate.`
  },

  brocas_area: {
    name: "Broca's Area",
    lobe: 'Frontal Lobe',
    color: '#0D48A0',
    pos3d: { x: -0.75, y: 0.25, z: 0.75 },
    scale3d: { x: 0.25, y: 0.25, z: 0.25 },
    mriLevels: [11, 12, 13, 14],
    brief: "Located in the left frontal lobe — controls speech production. Damage causes Broca's aphasia: halting, effortful speech but intact comprehension.",
    full: `Broca's area (BA44 and BA45) is located in the posterior part of the inferior frontal gyrus of the left hemisphere in ~95% of right-handed people. It was identified by Paul Broca in 1861 through his patient "Tan" (Louis Leborgne), who could only say the syllable "tan" despite understanding speech perfectly.

It is essential for speech production, grammatical processing, and the motor programming of articulation. It sends signals to the primary motor cortex face area to coordinate the muscles of speech.

Broca's aphasia (expressive aphasia): non-fluent, effortful, telegraphic speech with preserved comprehension. Patients may say "walk... dog... park" instead of "I walked the dog to the park." They are often frustrated because they know what they want to say.

Broca's area is also involved in understanding the syntactic structure of sentences (not just producing it), processing music, and hand gestures — suggesting its role extends beyond speech to general sequencing of complex actions. It is connected to Wernicke's area via the arcuate fasciculus.`
  },

  frontal_eye_fields: {
    name: 'Frontal Eye Fields',
    lobe: 'Frontal Lobe',
    color: '#0A3D8F',
    pos3d: { x: 0, y: 0.55, z: 0.75 },
    scale3d: { x: 0.6, y: 0.25, z: 0.2 },
    mriLevels: [13, 14, 15],
    brief: 'Controls voluntary eye movements. Allows you to intentionally direct your gaze regardless of where a stimulus appears.',
    full: `The frontal eye fields (FEF) are located in the posterior part of the middle frontal gyrus (BA8). They are a key cortical area for controlling voluntary (saccadic) eye movements — rapid, ballistic movements that shift the fovea from one point to another.

Unlike the superior colliculus (which mediates reflexive eye movements toward a new stimulus), the FEF mediates top-down, intentional gaze control. When you read a page or search for a face in a crowd, the FEF is directing your eyes according to your goals.

The FEF has direct projections to the superior colliculus and brainstem gaze centers. Stimulation of the FEF produces contralateral eye deviation. Lesions cause ipsilateral gaze deviation ("the patient looks toward the lesion") because the damaged FEF no longer inhibits the ipsilateral gaze center.

The FEF is also involved in spatial attention — directing not just the eyes but the "spotlight" of attention in visual space.`
  },

  // ── PARIETAL LOBE ─────────────────────────────────────────
  somatosensory_cortex: {
    name: 'Primary Somatosensory Cortex',
    lobe: 'Parietal Lobe',
    color: '#27AE60',
    pos3d: { x: 0, y: 0.95, z: 0.05 },
    scale3d: { x: 0.9, y: 0.3, z: 0.25 },
    mriLevels: [13, 14, 15, 16, 17],
    brief: 'Processes touch, pain, temperature, and proprioception. Body parts are mapped as the sensory homunculus.',
    full: `The primary somatosensory cortex (S1) occupies the postcentral gyrus, immediately posterior to the central sulcus. It receives sensory information (touch, pressure, vibration, pain, temperature, proprioception) from the contralateral side of the body via the thalamus (VPL nucleus).

Like M1, it contains a somatotopic map — the sensory homunculus — with the face and hands represented by disproportionately large areas reflecting their high density of sensory receptors (especially Meissner's corpuscles and Pacinian corpuscles for fine touch).

S1 contains four distinct areas (3a, 3b, 1, 2) each with their own complete body map, processing different modalities. Area 3a receives proprioceptive input; 3b and 1 process tactile information; area 2 integrates size and shape perception.

Damage causes contralateral hemisensory loss — the patient may have normal strength but cannot feel touch or localize stimuli on the opposite side. Complex tasks like recognizing objects by touch alone (stereognosis) are particularly impaired.`
  },

  superior_parietal: {
    name: 'Superior Parietal Lobule',
    lobe: 'Parietal Lobe',
    color: '#219A52',
    pos3d: { x: 0, y: 0.75, z: -0.25 },
    scale3d: { x: 0.7, y: 0.35, z: 0.35 },
    mriLevels: [14, 15, 16, 17],
    brief: 'Integrates sensory information to create spatial awareness and guide goal-directed movements.',
    full: `The superior parietal lobule (SPL) is a key node in the dorsal visual stream ("where/how" pathway) that processes spatial information and guides action. It integrates input from S1, visual cortex, and proprioceptive systems to construct a real-time model of the body in space.

The SPL is critical for visuomotor transformation — converting visual information about object location into motor commands for reaching and grasping. It contains neurons that code target positions in eye-centered, head-centered, and body-centered coordinates.

It also plays a role in spatial attention and is part of the network that maintains the ability to orient to stimuli in the environment. The right SPL is particularly important for global spatial processing.

Damage to the SPL can cause optic ataxia (difficulty reaching for objects under visual guidance despite intact vision), ideomotor apraxia (difficulty performing learned gestures on command), and spatial disorientation.`
  },

  inferior_parietal: {
    name: 'Inferior Parietal Lobule',
    lobe: 'Parietal Lobe',
    color: '#1D8045',
    pos3d: { x: 0, y: 0.5, z: -0.1 },
    scale3d: { x: 0.8, y: 0.35, z: 0.35 },
    mriLevels: [12, 13, 14, 15],
    brief: 'A multimodal hub for language, attention, and body representation. Damage on the right causes neglect of the left side of space.',
    full: `The inferior parietal lobule (IPL) consists of the supramarginal gyrus (BA40) and the angular gyrus (BA39). It is a late-developing, multimodal association area that integrates auditory, visual, and somatosensory information.

The left IPL is critical for language: the angular gyrus is involved in reading (grapheme-phoneme conversion) and semantic processing, while the supramarginal gyrus is involved in phonological processing. The left angular gyrus is part of Wernicke's area in the broad sense.

The right IPL is critical for spatial attention and body schema. Lesions of the right IPL cause hemispatial neglect — the patient ignores everything on the left side of space (visual, auditory, tactile) even without sensory or motor deficits. They may eat from only the right side of the plate, shave only the right side of the face, or fail to draw the left half of objects.

The IPL also contains mirror neuron systems and is involved in theory of mind (understanding others' mental states) and numerical cognition.`
  },

  wernickes_area: {
    name: "Wernicke's Area",
    lobe: 'Parietal/Temporal Junction',
    color: '#16A085',
    pos3d: { x: -0.8, y: 0.3, z: -0.1 },
    scale3d: { x: 0.25, y: 0.25, z: 0.25 },
    mriLevels: [10, 11, 12, 13],
    brief: "Left hemisphere area for language comprehension. Damage causes fluent but meaningless speech ('word salad') with poor comprehension.",
    full: `Wernicke's area is located in the posterior part of the superior temporal gyrus (BA22), at the temporoparietal junction of the left hemisphere. It was identified by Carl Wernicke in 1874 through patients who spoke fluently but incomprehensibly.

It is essential for language comprehension — understanding both heard and read speech. It stores the "sound forms" of words and links them to meaning. Incoming auditory language from the primary auditory cortex is processed here for semantic content.

Wernicke's aphasia (receptive aphasia): fluent, effortless speech with normal rhythm, but the content is filled with semantic paraphasias (wrong words: "the spoon is on the table" becomes "the clock is on the window"), neologisms (invented words), and jargon. Crucially, comprehension is severely impaired — patients cannot reliably follow commands.

Wernicke's area is connected to Broca's area via the arcuate fasciculus (a white matter tract running through the superior longitudinal fasciculus). Damage to this connection causes conduction aphasia: intact comprehension and fluent speech, but inability to repeat sentences exactly.`
  },

  // ── TEMPORAL LOBE ─────────────────────────────────────────
  auditory_cortex: {
    name: 'Primary Auditory Cortex',
    lobe: 'Temporal Lobe',
    color: '#F39C12',
    pos3d: { x: 0, y: 0.2, z: 0.05 },
    scale3d: { x: 0.85, y: 0.2, z: 0.2 },
    mriLevels: [11, 12, 13],
    brief: 'First cortical area to process sound. Organized tonotopically — different neurons respond to different frequencies.',
    full: `The primary auditory cortex (A1) is located in the Heschl's gyri on the superior temporal plane, buried within the lateral sulcus. It receives input from the medial geniculate nucleus (MGN) of the thalamus, which relays signals from the cochlear nuclei and inferior colliculus.

A1 is organized tonotopically: high-frequency sounds activate posterior regions, low-frequency sounds activate anterior regions. This map preserves the tonotopic organization of the cochlea across multiple relay stations.

It performs basic sound analysis: frequency, intensity, and duration. It does not perform complex sound recognition — that requires the surrounding auditory association cortex (belt and parabelt regions). Bilateral destruction of A1 causes cortical deafness: pure tones can still activate subcortical pathways, but the patient cannot recognize environmental sounds or speech.

The right auditory cortex is dominant for music and prosody (the emotional tone of speech), while the left is dominant for speech phoneme processing. Together, they extract complementary features: the right extracts coarse spectral patterns (melody), the left extracts rapid temporal patterns (phonemes).`
  },

  superior_temporal: {
    name: 'Superior Temporal Gyrus',
    lobe: 'Temporal Lobe',
    color: '#E67E22',
    pos3d: { x: 0, y: 0.1, z: -0.1 },
    scale3d: { x: 0.85, y: 0.2, z: 0.35 },
    mriLevels: [10, 11, 12, 13],
    brief: 'Auditory association area — recognizes voices, processes speech sounds, and integrates multisensory social information.',
    full: `The superior temporal gyrus (STG) surrounds the primary auditory cortex and forms the core auditory association area. Its posterior portion on the left forms most of Wernicke's area. The STG is crucial for processing complex sounds including speech, music, and environmental sounds.

The STG is part of the "social brain" — it responds strongly to human voices, faces, and biological motion, and it is consistently activated during social cognition tasks. The temporal-parietal junction (where STG meets parietal cortex) is critical for mentalizing (theory of mind).

The right STG processes prosody — the emotional and intentional cues carried by the rhythm and melody of speech. Damage to the right STG causes the patient to sound monotone and to misinterpret the emotional tone in others' speech.

The STG also receives visual input (lip movements during speech) and integrates it with auditory signals — the basis of the McGurk effect, where visual lip movements alter the perceived sound.`
  },

  temporal_gyri: {
    name: 'Middle & Inferior Temporal Gyri',
    lobe: 'Temporal Lobe',
    color: '#D35400',
    pos3d: { x: 0, y: -0.1, z: -0.15 },
    scale3d: { x: 0.85, y: 0.25, z: 0.5 },
    mriLevels: [9, 10, 11, 12],
    brief: 'Object recognition, semantic memory (word meaning), and visual categorization — the brain\'s "what" pathway.',
    full: `The middle temporal gyrus (MTG) and inferior temporal gyrus (ITG) form the lateral temporal cortex. They are the endpoint of the ventral visual stream ("what" pathway), which processes object identity regardless of size, position, or illumination (object constancy).

The ITG contains "grandmother cells" — neurons that respond to specific complex visual categories such as faces, bodies, and objects. The face-selective regions (including the fusiform face area) are crucial for facial recognition; their damage causes prosopagnosia (inability to recognize familiar faces).

The left MTG/ITG stores lexical-semantic knowledge — the meaning of words and concepts. Lesions in this region cause anomic aphasia: word-finding difficulty (tip-of-the-tongue state) and semantic paraphasias.

The temporal cortex as a whole is sometimes called the "semantic hub" of the brain — damage here can impair knowledge about objects, animals, and concepts across multiple sensory modalities (semantic dementia).`
  },

  fusiform_gyrus: {
    name: 'Fusiform Gyrus',
    lobe: 'Temporal Lobe',
    color: '#BA4A00',
    pos3d: { x: 0, y: -0.3, z: -0.2 },
    scale3d: { x: 0.7, y: 0.2, z: 0.45 },
    mriLevels: [8, 9, 10, 11],
    brief: 'Expert object recognition — contains the fusiform face area (FFA) for face recognition and similar regions for reading words.',
    full: `The fusiform gyrus runs along the inferior temporal lobe and contains several specialized regions for expert visual recognition. Most famous is the fusiform face area (FFA), consistently activated by faces more than any other category.

The FFA is not exclusively for faces — it activates for any category of objects the person has developed perceptual expertise with (car experts, bird experts). This suggests it is a general expert object recognition region that is "captured" by faces due to their evolutionary importance.

Damage to the right FFA causes prosopagnosia: the patient cannot recognize faces, including their own in a mirror, though they can recognize voices and identify objects normally. Some patients develop compensatory strategies (recognizing people by voice, hair, or gait).

Nearby on the left fusiform is the visual word form area (VWFA), sometimes called the "letterbox area" — it responds to written words and is critical for rapid, automatic reading. Damage causes pure alexia (difficulty reading despite normal writing and speech).`
  },

  // ── OCCIPITAL LOBE ────────────────────────────────────────
  primary_visual: {
    name: 'Primary Visual Cortex (V1)',
    lobe: 'Occipital Lobe',
    color: '#C0392B',
    pos3d: { x: 0, y: 0.05, z: -1.1 },
    scale3d: { x: 0.6, y: 0.5, z: 0.3 },
    mriLevels: [10, 11, 12, 13, 14],
    brief: 'First cortical processing stage for vision. Receives raw visual information from the eyes via the thalamus (LGN).',
    full: `The primary visual cortex (V1, striate cortex, BA17) is located in the calcarine sulcus on the medial surface of the occipital lobe. It receives topographically organized (retinotopic) input from the lateral geniculate nucleus (LGN) of the thalamus.

V1 is organized retinotopically: the central visual field (fovea) is represented at the occipital pole and occupies a disproportionately large cortical area (cortical magnification), while the peripheral field is represented more anteriorly. The upper visual field maps to below the calcarine sulcus, the lower field above it.

V1 neurons respond to basic visual features: orientation (edges), spatial frequency, color, and motion direction. They are organized in columns sharing these preferences. V1 performs the initial decomposition of the visual image into elementary features that higher areas combine into objects and scenes.

Damage to V1 causes contralateral homonymous hemianopia — blindness in the opposite visual field. A small region may be spared at the occipital tip (macular sparing) due to dual blood supply. V1 lesions cause a "cortical blindness" — patients genuinely cannot see, but some may show "blindsight" (unconscious responses to visual stimuli they deny seeing).`
  },

  visual_association: {
    name: 'Visual Association Areas (V2–V5)',
    lobe: 'Occipital Lobe',
    color: '#A93226',
    pos3d: { x: 0, y: 0.2, z: -0.9 },
    scale3d: { x: 0.75, y: 0.45, z: 0.3 },
    mriLevels: [11, 12, 13, 14, 15],
    brief: 'Process progressively complex visual features: V4 for color, V5/MT for motion, leading to object and spatial perception.',
    full: `Beyond V1, multiple extrastriate visual areas (V2, V3, V4, V5/MT) process progressively more complex aspects of the visual scene, arranged in a hierarchy.

V4 is specialized for color constancy — perceiving consistent color despite changes in illumination. Selective damage to V4 causes achromatopsia: the world appears in shades of gray. Interestingly, patients may lose all color imagery too (they can no longer imagine colors).

V5 (also called MT, middle temporal area) is specialized for motion perception. Its neurons fire in response to moving stimuli, with preferred directions and speeds. Damage causes akinetopsia: the patient cannot perceive motion — traffic appears as a series of frozen positions, pouring tea looks like a solid frozen arc.

These areas split into two processing streams: the dorsal stream (V1 → V5 → parietal) processes spatial location and guides action ("where/how"), while the ventral stream (V1 → V4 → temporal) processes object identity ("what"). This dissociation explains patients who can "use" objects without recognizing them, and vice versa.`
  },

  // ── LIMBIC SYSTEM ─────────────────────────────────────────
  cingulate_cortex: {
    name: 'Cingulate Cortex',
    lobe: 'Limbic System',
    color: '#8E44AD',
    pos3d: { x: 0, y: 0.45, z: 0.0 },
    scale3d: { x: 0.25, y: 0.55, z: 0.9 },
    mriLevels: [11, 12, 13, 14, 15, 16],
    brief: 'Anterior cingulate: conflict monitoring and pain affect. Posterior cingulate: self-referential thought and memory retrieval.',
    full: `The cingulate cortex arches over the corpus callosum on the medial surface of each hemisphere. It is divided into the anterior cingulate cortex (ACC) and posterior cingulate cortex (PCC) with very different functions.

The ACC is part of the salience network and is activated by cognitive conflict (when you have to override an automatic response), pain (the emotional/suffering component, not the sensory location), and error detection. It monitors for conflicts and recruits the prefrontal cortex to apply cognitive control. The ACC is consistently implicated in depression and anxiety.

The PCC is a major hub of the default mode network (DMN) — a set of regions active during rest, self-referential thought, mind-wandering, and autobiographical memory retrieval. It is one of the most metabolically active regions at rest and is among the first to accumulate amyloid plaques in Alzheimer's disease.

The midcingulate cortex bridges motor and emotional processing, integrating pain with avoidance behavior. Cingulotomy (surgical lesion of the ACC) was historically used for intractable pain and OCD — reducing emotional suffering without eliminating the sensory perception of pain.`
  },

  insula: {
    name: 'Insula',
    lobe: 'Limbic System',
    color: '#7D3C98',
    pos3d: { x: 0, y: 0.2, z: 0.3 },
    scale3d: { x: 0.75, y: 0.5, z: 0.35 },
    mriLevels: [10, 11, 12, 13],
    brief: 'Hidden deep in the lateral sulcus — integrates body state signals into conscious feelings (interoception), disgust, and empathy.',
    full: `The insula (insular cortex) lies hidden within the lateral sulcus, covered by the frontal, parietal, and temporal opercula. It is a complex region with distinct anterior and posterior portions.

The posterior insula receives raw interoceptive signals from the body — pain, temperature, itch, visceral sensations, cardiovascular state, and breathing. These signals arrive via the thalamus (VPL and VMpo nuclei).

The anterior insula integrates these body signals with emotional and cognitive context to create the subjective "feeling" of body state — the basis of all felt emotions according to interoceptive theories. It is active during pain empathy (watching others in pain), disgust, craving (addiction), and romantic love.

The right anterior insula is critical for the "sense of self" as a bodily entity. Damage can impair the ability to feel emotions, recognize facial expressions of disgust, and may contribute to disorders of body awareness (anosognosia — denial of paralysis; anorexia nervosa — distorted body perception).

The insula also plays a role in taste (anterior insula is primary gustatory cortex), language (especially speech articulation), and salience detection.`
  },

  hippocampus: {
    name: 'Hippocampus',
    lobe: 'Limbic System',
    color: '#6C3483',
    pos3d: { x: 0, y: -0.25, z: -0.3 },
    scale3d: { x: 0.8, y: 0.2, z: 0.4 },
    mriLevels: [7, 8, 9, 10],
    brief: 'Essential for forming new declarative memories. Without it, you cannot create new long-term memories (anterograde amnesia).',
    full: `The hippocampus is a curved structure in the medial temporal lobe, resembling a seahorse (Greek: hippos = horse, kampos = sea monster). It consists of the dentate gyrus, CA fields (Cornu Ammonis 1-4), and subiculum.

Its essential role is in the formation of new declarative (explicit) memories — both episodic memories (personal events: "what I did yesterday") and semantic memories (facts: "Paris is in France"). It "binds" elements of an experience together across the cortex and consolidates them into long-term memory during sleep.

The famous patient H.M. had his hippocampus bilaterally removed for epilepsy in 1953. He developed profound anterograde amnesia — he could not form any new long-term memories, living permanently in 1953. Yet his procedural memory (skills) and working memory were intact, revealing that different memory systems exist in different brain regions.

The hippocampus also contains place cells (neurons that fire in specific locations) and is essential for spatial navigation — the famous "London taxi driver study" showed structural enlargement of the posterior hippocampus in drivers who memorized the city's streets. It is one of the primary sites of neurogenesis in adults.`
  },

  amygdala: {
    name: 'Amygdala',
    lobe: 'Limbic System',
    color: '#5B2C6F',
    pos3d: { x: 0, y: -0.2, z: 0.2 },
    scale3d: { x: 0.7, y: 0.2, z: 0.25 },
    mriLevels: [7, 8, 9, 10],
    brief: 'Fear and emotional learning center. Attaches emotional significance to experiences, especially threats.',
    full: `The amygdala is an almond-shaped cluster of nuclei (Latin: amygdala = almond) located in the anterior temporal lobe, just anterior to the hippocampus. It consists of multiple nuclei, the most important being the basolateral complex and central nucleus.

Its primary role is emotional learning and fear conditioning. It receives sensory input (including a fast, crude "low road" directly from the thalamus bypassing the cortex) and evaluates stimuli for emotional significance, especially threat. When danger is detected, the central nucleus triggers the fear response via the hypothalamus and brainstem: heart rate increase, cortisol release, freezing, and heightened attention.

The amygdala also modulates memory consolidation in the hippocampus — emotionally arousing events are remembered better because the amygdala signals "this is important, consolidate this." This explains why you remember where you were during shocking news but not routine conversations.

Patient S.M. (amygdala bilaterally destroyed by disease) cannot feel fear — she approached a snake, voluntarily watched horror films unfazed, and cannot recognize fearful facial expressions. Yet she is not reckless; she feels other emotions normally, suggesting the amygdala is selective for fear-relevant signals.`
  },

  // ── SUBCORTICAL ───────────────────────────────────────────
  thalamus: {
    name: 'Thalamus',
    lobe: 'Diencephalon',
    color: '#E74C3C',
    pos3d: { x: 0, y: -0.1, z: -0.15 },
    scale3d: { x: 0.5, y: 0.35, z: 0.45 },
    mriLevels: [7, 8, 9, 10, 11],
    brief: 'The grand relay station — every sensory modality except olfaction passes through the thalamus on its way to the cortex.',
    full: `The thalamus is a paired egg-shaped structure forming the dorsal part of the diencephalon, flanking the third ventricle. It consists of many distinct nuclei, each serving as a relay for specific functions between the cortex, subcortical structures, and brainstem.

Major sensory relays: the lateral geniculate nucleus (LGN) relays visual information to V1; the medial geniculate nucleus (MGN) relays auditory information to A1; the ventral posterolateral nucleus (VPL) relays somatosensory information from the body to S1; the ventral posteromedial nucleus (VPM) relays somatosensory input from the face.

Motor relays: the ventral anterior (VA) and ventral lateral (VL) nuclei relay output from the cerebellum and basal ganglia to the motor cortex — allowing these structures to influence movement without directly contacting motor neurons.

The thalamus is the gateway to consciousness. It gates sensory information based on arousal state (during sleep, sensory signals are blocked). The intralaminar nuclei are part of the ascending reticular activating system and maintain wakefulness. Bilateral thalamic damage causes severe amnesia (thalamic amnesia) and impaired consciousness.`
  },

  hypothalamus: {
    name: 'Hypothalamus',
    lobe: 'Diencephalon',
    color: '#CB4335',
    pos3d: { x: 0, y: -0.45, z: 0.15 },
    scale3d: { x: 0.35, y: 0.2, z: 0.3 },
    mriLevels: [7, 8, 9],
    brief: 'Controls body homeostasis: hunger, thirst, temperature, sleep-wake cycle, and hormonal release via the pituitary gland.',
    full: `The hypothalamus lies below the thalamus (hypo = below), forming the floor and lower walls of the third ventricle. Despite being only 4 grams (less than 1% of brain weight), it is the master regulator of homeostasis and the link between the nervous and endocrine systems.

Through direct neural connections to the pituitary gland (neurohypophysis for ADH and oxytocin; tuberoinfundibular pathway for releasing hormones controlling the anterior pituitary), the hypothalamus controls growth, metabolism, stress response (CRH → ACTH → cortisol), reproduction (GnRH), and thyroid function.

Key nuclei and functions: suprachiasmatic nucleus (SCN) — the body's master circadian clock, synchronized by light; ventromedial nucleus — satiety center (damage causes hyperphagia and obesity); lateral hypothalamus — hunger center (damage causes anorexia); anterior hypothalamus — heat dissipation (cooling); posterior hypothalamus — heat conservation and arousal.

The hypothalamus integrates signals from blood (glucose, osmolarity, hormones), visceral afferents, limbic inputs, and the cortex to coordinate behavioral (feeding, drinking, mating) and autonomic (heart rate, blood pressure) responses.`
  },

  caudate: {
    name: 'Caudate Nucleus',
    lobe: 'Basal Ganglia',
    color: '#F0A500',
    pos3d: { x: 0, y: 0.2, z: 0.4 },
    scale3d: { x: 0.6, y: 0.25, z: 0.45 },
    mriLevels: [9, 10, 11, 12],
    brief: 'Part of the basal ganglia — involved in reward-based learning, habit formation, and cognitive flexibility.',
    full: `The caudate nucleus is a C-shaped structure consisting of a head (anterior, near the frontal horn of the lateral ventricle), body, and tail (curving into the temporal lobe near the amygdala). Together with the putamen, it forms the striatum, the main input structure of the basal ganglia.

The caudate receives massive input from the prefrontal cortex and is involved in goal-directed behavior — especially learning which actions lead to rewards. It is a key node in the cortico-striato-thalamo-cortical loops that regulate cognitive control and action selection.

The head of the caudate is specifically connected to the prefrontal cortex and is involved in executive function. Damage or dysfunction in this circuit is implicated in OCD (hyperactivity of caudate-orbitofrontal loops), ADHD, and Tourette syndrome.

In Huntington's disease, the caudate and putamen are selectively destroyed (preferentially GABAergic medium spiny neurons). This releases the thalamus from inhibition, causing involuntary movements (chorea), dementia, and psychiatric symptoms. The caudate atrophy is visible on MRI as widening of the frontal horns of the lateral ventricles.`
  },

  putamen: {
    name: 'Putamen',
    lobe: 'Basal Ganglia',
    color: '#D4A017',
    pos3d: { x: 0, y: 0.1, z: 0.3 },
    scale3d: { x: 0.65, y: 0.35, z: 0.4 },
    mriLevels: [9, 10, 11, 12],
    brief: 'Controls habitual motor learning and automatic movements. Most active when a skill becomes automatic.',
    full: `The putamen lies lateral to the caudate nucleus, separated from it by the internal capsule (except anteriorly where they join in the striatum). Together with the caudate, it forms the striatum, the primary input nucleus of the basal ganglia.

While the caudate is more connected to prefrontal/cognitive circuits, the putamen is more connected to sensorimotor cortex and is the primary basal ganglia structure for motor learning and the automatization of movements. As a motor skill is learned, activity shifts from prefrontal/caudate circuits (deliberate, effortful) to sensorimotor/putamen circuits (automatic, habitual).

The putamen is most affected in Parkinson's disease. Dopaminergic neurons from the substantia nigra pars compacta (SNc) project to the putamen (nigrostriatal pathway). When >80% of these dopaminergic neurons die, the characteristic motor symptoms emerge: resting tremor, rigidity, bradykinesia (slowness), and postural instability.

Treatment with levodopa (a dopamine precursor) restores dopamine in the striatum, dramatically improving motor symptoms in early Parkinson's disease.`
  },

  globus_pallidus: {
    name: 'Globus Pallidus',
    lobe: 'Basal Ganglia',
    color: '#B8860B',
    pos3d: { x: 0, y: 0.05, z: 0.2 },
    scale3d: { x: 0.45, y: 0.3, z: 0.3 },
    mriLevels: [9, 10, 11],
    brief: 'The main output nucleus of the basal ganglia — tonically inhibits the thalamus and is released to allow movement.',
    full: `The globus pallidus (pale globe in Latin) is the principal output nucleus of the basal ganglia, divided into an internal segment (GPi) and external segment (GPe). It lies medial to the putamen.

The GPi sends inhibitory (GABAergic) projections to the motor thalamus (VA/VL nuclei) and brainstem. At rest, GPi neurons fire tonically at high rates, continuously suppressing the thalamus and preventing movement. When you want to move, the striatum inhibits the GPi ("indirect disinhibition"), releasing the thalamus and allowing movement initiation.

This basal ganglia circuit is the basis for deep brain stimulation (DBS) therapy — high-frequency stimulation of the GPi or subthalamic nucleus effectively silences the overactive inhibition in Parkinson's disease, dramatically improving symptoms without destroying tissue.

In hemiballismus — violent flinging movements of the arm — the contralateral subthalamic nucleus is damaged (usually by lacunar infarct), releasing GPi from STN excitation, leading to thalamic disinhibition and uncontrolled movement.`
  },

  subthalamic_nucleus: {
    name: 'Subthalamic Nucleus',
    lobe: 'Basal Ganglia',
    color: '#A0522D',
    pos3d: { x: 0, y: -0.25, z: 0.05 },
    scale3d: { x: 0.4, y: 0.15, z: 0.25 },
    mriLevels: [8, 9, 10],
    brief: 'A key modulator in the basal ganglia indirect pathway. Its damage causes hemiballismus; its stimulation treats Parkinson\'s disease.',
    full: `The subthalamic nucleus (STN) is a small lens-shaped nucleus located below the thalamus, between the cerebral peduncle and the zona incerta. Despite its small size, it is critical for basal ganglia function.

The STN is the only excitatory (glutamatergic) nucleus in the basal ganglia. It forms part of the "indirect pathway" — the pathway that enhances inhibition of unwanted movements. In the indirect pathway: striatum (inhibits GPe) → GPe (stops inhibiting STN) → STN (excites GPi) → GPi (inhibits thalamus). This leads to movement suppression.

In Parkinson's disease, the loss of dopaminergic input to the striatum leads to overactivity of the STN, which over-excites the GPi, which over-inhibits the thalamus — resulting in the bradykinesia and rigidity of Parkinson's disease.

Deep brain stimulation (DBS) of the STN at 130+ Hz effectively silences it, restoring balance. STN-DBS is now standard treatment for advanced Parkinson's disease and is being investigated for OCD, depression, and Tourette syndrome.`
  },

  substantia_nigra: {
    name: 'Substantia Nigra',
    lobe: 'Midbrain',
    color: '#2C1810',
    pos3d: { x: 0, y: -0.75, z: -0.15 },
    scale3d: { x: 0.6, y: 0.15, z: 0.25 },
    mriLevels: [5, 6, 7],
    brief: 'Midbrain nucleus that produces dopamine for the striatum. Its degeneration causes Parkinson\'s disease.',
    full: `The substantia nigra (Latin: black substance) is a midbrain nucleus that appears dark on gross examination due to melanin pigment in dopaminergic neurons (neuromelanin, a byproduct of dopamine synthesis). It is divided into the pars compacta (SNc) and pars reticulata (SNr).

The SNc is the origin of the nigrostriatal dopaminergic pathway — projecting to the caudate and putamen (striatum). These dopaminergic neurons modulate the basal ganglia circuitry: dopamine via D1 receptors facilitates the direct pathway (movement enabling), and via D2 receptors inhibits the indirect pathway (movement suppressing). Net effect: dopamine promotes movement.

The SNr serves as an additional output nucleus of the basal ganglia alongside the GPi, projecting to the superior colliculus (for eye movements) and the thalamus.

Parkinson's disease is defined pathologically by loss of >80% of SNc dopaminergic neurons and the presence of Lewy bodies (intraneuronal inclusions of alpha-synuclein). The substantia nigra appears pale in post-mortem examination of Parkinson's patients. The "lost" substantia nigra has been visible on MRI as reduced T2* signal (loss of neuromelanin) in advanced Parkinson's.`
  },

  // ── WHITE MATTER ──────────────────────────────────────────
  corpus_callosum: {
    name: 'Corpus Callosum',
    lobe: 'White Matter',
    color: '#BDC3C7',
    pos3d: { x: 0, y: 0.4, z: 0.1 },
    scale3d: { x: 0.2, y: 0.15, z: 0.95 },
    mriLevels: [11, 12, 13, 14, 15],
    brief: 'The largest white matter tract — 200-300 million axons connecting the two hemispheres so they can share information.',
    full: `The corpus callosum is the largest white matter commissure in the brain, containing approximately 200-300 million myelinated axons connecting corresponding and non-corresponding regions of the two cerebral hemispheres. It has four parts: rostrum (most anterior), genu (knee — connects prefrontal cortices), body (connects parietal cortices), and splenium (most posterior — connects occipital and temporal cortices).

The corpus callosum allows the two hemispheres to share information, coordinate activity, and maintain a unified conscious experience despite functional specialization. Visual information from each half-field is processed in the contralateral hemisphere, and the corpus callosum integrates this into a single visual percept.

Split-brain patients (corpus callosotomy performed for intractable epilepsy) have been studied extensively by Sperry and Gazzaniga. With the callosum severed, each hemisphere operates independently — an object shown to the left visual field can be picked up by the left hand but cannot be named, because language is in the left hemisphere which has no access to the right hemisphere's perception.

Agenesis of the corpus callosum can occur as a congenital anomaly — surprisingly, many individuals with this condition appear cognitively normal, suggesting remarkable neural compensation occurs.`
  },

  internal_capsule: {
    name: 'Internal Capsule',
    lobe: 'White Matter',
    color: '#ABB2B9',
    pos3d: { x: 0, y: 0.15, z: 0.2 },
    scale3d: { x: 0.55, y: 0.5, z: 0.4 },
    mriLevels: [9, 10, 11, 12],
    brief: 'The white matter highway carrying all descending motor and ascending sensory fibers between cortex and brainstem/spinal cord.',
    full: `The internal capsule is a compact band of white matter lying between the lenticular nucleus (putamen + globus pallidus) laterally and the thalamus and caudate medially. It carries virtually all ascending and descending fibers connecting the cerebral cortex to subcortical structures.

It is divided into an anterior limb (between caudate and globus pallidus — carries frontothalamic and frontopontine fibers), a genu (contains corticobulbar fibers for voluntary control of face, head, and neck muscles), and a posterior limb (between thalamus and globus pallidus — carries the corticospinal tract and thalamocortical sensory fibers).

The posterior limb carries the corticospinal tract (voluntary movement), the corticobulbar tract (motor to cranial nerves), and somatosensory thalamocortical projections. These fibers are compactly arranged, making the posterior limb an extremely high-stakes location — a small lacunar infarct here can cause contralateral hemiplegia and hemisensory loss.

The internal capsule is supplied by the lenticulostriate arteries, small perforating branches of the MCA that are highly vulnerable to hypertension. Hypertensive intracerebral hemorrhage classically occurs here, causing devastating contralateral motor and sensory deficits.`
  },

  lateral_ventricles: {
    name: 'Lateral Ventricles',
    lobe: 'Ventricular System',
    color: '#85C1E9',
    pos3d: { x: 0, y: 0.3, z: 0.05 },
    scale3d: { x: 0.65, y: 0.35, z: 0.8 },
    mriLevels: [10, 11, 12, 13, 14],
    brief: 'CSF-filled spaces within the cerebral hemispheres. Produced by choroid plexus, they cushion and nourish the brain.',
    full: `The lateral ventricles are paired C-shaped cavities within the cerebral hemispheres, one in each hemisphere. They communicate with the third ventricle via the interventricular foramina (foramina of Monro). Each lateral ventricle has a frontal horn, body, occipital horn, and temporal horn.

Cerebrospinal fluid (CSF) is produced by the choroid plexus (a vascular structure in the lateral, third, and fourth ventricles) at a rate of ~500 ml/day, with a total volume of ~150 ml at any time. CSF flows from the lateral ventricles → third ventricle → cerebral aqueduct → fourth ventricle → subarachnoid space → absorbed by arachnoid granulations into the dural venous sinuses.

On MRI, the lateral ventricles appear as bright signal on T2-weighted images. The size of the ventricles is diagnostically important: enlargement (ventriculomegaly) can indicate hydrocephalus (obstructed CSF flow causing increased pressure) or cortical atrophy (ex vacuo enlargement as brain tissue is lost — seen in Alzheimer's, Huntington's, and aging).

The caudate head bulges into the frontal horn — in Huntington's disease, caudate atrophy causes the frontal horns to look "boxy" rather than curved, a characteristic MRI finding.`
  },

  // ── CEREBELLUM ────────────────────────────────────────────
  cerebellar_hemispheres: {
    name: 'Cerebellar Hemispheres',
    lobe: 'Cerebellum',
    color: '#1ABC9C',
    pos3d: { x: 0, y: -0.65, z: -0.85 },
    scale3d: { x: 0.9, y: 0.45, z: 0.5 },
    mriLevels: [3, 4, 5, 6, 7],
    brief: 'Coordinates movement timing and precision. Damage causes ipsilateral limb ataxia — clumsy, inaccurate movements.',
    full: `The cerebellar hemispheres consist of three lobes: the anterior lobe, posterior lobe (largest, also called neocerebellum or pontocerebellum), and flocculonodular lobe. The cortex is arranged in fine parallel folds (folia), giving the cerebellum a distinctive appearance.

The neocerebellum (lateral hemispheres) receives input from the ipsilateral pontine nuclei (which relay from the contralateral cerebral cortex) and sends output via the dentate nucleus → contralateral red nucleus → thalamus → motor and premotor cortex. This circuit coordinates voluntary, skilled movements — especially those involving sequential, precise movements of the limbs.

The cerebellum computes "motor error" — the difference between the intended movement and the actual movement — and sends corrective signals to adjust ongoing and future movements. It is essential for timing, rate, force, and direction of movements.

Lesions of the cerebellar hemisphere cause ipsilateral limb ataxia (cerebellar disease causes ipsilateral signs — because the circuit crosses twice): dysmetria (past-pointing on finger-nose test), dysdiadochokinesia (inability to perform rapid alternating movements), intention tremor (tremor that worsens as the target is approached), and rebound (failure of check reflex). Speech is dysarthric with scanning quality.`
  },

  vermis: {
    name: 'Vermis',
    lobe: 'Cerebellum',
    color: '#17A589',
    pos3d: { x: 0, y: -0.65, z: -0.85 },
    scale3d: { x: 0.2, y: 0.45, z: 0.5 },
    mriLevels: [3, 4, 5, 6, 7],
    brief: 'Midline cerebellum — controls trunk and gait stability. Damage causes truncal ataxia and a wide-based, "drunken" gait.',
    full: `The vermis (worm in Latin) is the midline portion of the cerebellum connecting the two hemispheres. It receives input from the spinal cord (spinocerebellar tracts), vestibular system, and some visual input, and projects via the fastigial nucleus to the vestibular nuclei and reticular formation.

The vermis controls axial (trunk and proximal limb) muscles and gait stability. It integrates proprioceptive information from the spine with vestibular balance signals to maintain posture during movement.

Vermal lesions cause truncal ataxia and gait ataxia — the characteristic wide-based, staggering "drunken" gait with difficulty walking in tandem (heel-to-toe). Sitting balance may be impaired. Unlike hemispheric lesions, limb coordination may be relatively preserved.

This pattern is especially seen in alcohol-related cerebellar degeneration, which preferentially affects the anterior vermis. Chronic alcoholics may develop pure gait ataxia with intact limb coordination — a clinical hallmark of alcoholic cerebellar degeneration that reflects the topographic vulnerability of the anterior vermis to thiamine deficiency and alcohol toxicity.`
  },

  // ── BRAINSTEM ─────────────────────────────────────────────
  midbrain: {
    name: 'Midbrain (Mesencephalon)',
    lobe: 'Brainstem',
    color: '#E91E63',
    pos3d: { x: 0, y: -0.65, z: -0.35 },
    scale3d: { x: 0.35, y: 0.3, z: 0.35 },
    mriLevels: [4, 5, 6],
    brief: 'Contains CN III and IV nuclei, the substantia nigra, red nucleus, and major ascending/descending tracts.',
    full: `The midbrain (mesencephalon) is the most superior part of the brainstem, connecting the diencephalon above to the pons below. It is divided into the tectum (dorsal: superior and inferior colliculi), tegmentum (central core), and cerebral peduncles (large ventral fiber bundles).

The tectum: the superior colliculi control reflexive eye movements and visual orienting (turning head/eyes toward a sudden stimulus); the inferior colliculi are key relay stations in the auditory pathway.

The tegmentum contains: the red nucleus (motor coordination, receives cerebellar output via the superior cerebellar peduncle); the periaqueductal gray (PAG, critical for pain modulation and defensive behavior); the nuclei of CN III (oculomotor) and CN IV (trochlear); the decussation of the superior cerebellar peduncle.

The cerebral peduncles carry the corticospinal and corticobulbar tracts. Midbrain lesions cause specific "crossed" syndromes: Weber syndrome (CN III palsy + contralateral hemiplegia — lesion in cerebral peduncle damaging CN III and corticospinal tract) and Parinaud syndrome (dorsal lesion at superior colliculi — paralysis of upward gaze).`
  },

  pons: {
    name: 'Pons',
    lobe: 'Brainstem',
    color: '#C2185B',
    pos3d: { x: 0, y: -0.9, z: -0.2 },
    scale3d: { x: 0.45, y: 0.3, z: 0.35 },
    mriLevels: [2, 3, 4, 5],
    brief: 'Contains CN V, VI, VII, VIII nuclei. The major relay between cortex and cerebellum. Houses critical respiratory centers.',
    full: `The pons (Latin: bridge) is the bulging central part of the brainstem, named for the prominent transverse fibers on its ventral surface that form the middle cerebellar peduncle — the largest cerebellar peduncle, carrying corticopontocerebellar fibers.

The pons contains nuclei for cranial nerves V (trigeminal — face sensation and jaw muscles), VI (abducens — lateral gaze), VII (facial — facial expression and taste), and VIII (vestibulocochlear — hearing and balance). It is a relay station for all cortical motor signals destined for the cerebellum (via pontine nuclei → middle cerebellar peduncle).

The dorsal pons contains important respiratory centers: the pneumotaxic center (controls breathing rate) and apneustic center. The reticular formation here contains the locus coeruleus (the brain's main noradrenaline source — important in attention, alertness, and stress response) and nuclei involved in REM sleep.

Pontine lesions are famous for "locked-in syndrome" — bilateral ventral pontine injury destroys all motor pathways while sparing the reticular activating system. The patient is fully conscious and aware but cannot move or speak, and can only communicate by voluntary vertical eye movements (which are spared because their control is in the midbrain).`
  },

  medulla: {
    name: 'Medulla Oblongata',
    lobe: 'Brainstem',
    color: '#AD1457',
    pos3d: { x: 0, y: -1.1, z: -0.1 },
    scale3d: { x: 0.3, y: 0.35, z: 0.3 },
    mriLevels: [0, 1, 2, 3],
    brief: 'Controls vital functions: breathing, heart rate, blood pressure. Contains CN IX-XII nuclei. Site of corticospinal decussation.',
    full: `The medulla oblongata is the lowest part of the brainstem, continuous with the spinal cord at the foramen magnum. It is indispensable for life, containing the cardiovascular and respiratory control centers in the reticular formation.

Critical centers: the dorsal respiratory group (inspiration) and ventral respiratory group (expiration and forced breathing), cardiac center (heart rate and contractility), and vasomotor center (blood pressure via sympathetic tone). Bilateral damage → immediate death.

The medulla contains nuclei for cranial nerves IX (glossopharyngeal — pharyngeal sensation/gag reflex), X (vagus — parasympathetic control of thorax/abdomen), XI (accessory — sternomastoid/trapezius), and XII (hypoglossal — tongue movement). The nucleus gracilis and cuneatus relay fine touch and proprioception from the body.

Most importantly, the medulla is where the corticospinal tract decussates: ~85% of fibers cross to form the lateral corticospinal tract in the spinal cord — explaining why cortical lesions cause contralateral paralysis. The lateral medullary syndrome (Wallenberg syndrome) from PICA occlusion is the most common brainstem stroke: crossed sensory loss (ipsilateral face, contralateral body), ataxia, dysphagia, Horner syndrome, and hiccups.`
  }
};

// Lobe groupings for the sidebar filter
window.BRAIN_LOBES = [
  { id: 'Frontal Lobe',    color: '#3A7BD5' },
  { id: 'Parietal Lobe',   color: '#27AE60' },
  { id: 'Temporal Lobe',   color: '#E67E22' },
  { id: 'Occipital Lobe',  color: '#C0392B' },
  { id: 'Limbic System',   color: '#8E44AD' },
  { id: 'Diencephalon',    color: '#E74C3C' },
  { id: 'Basal Ganglia',   color: '#F0A500' },
  { id: 'White Matter',    color: '#BDC3C7' },
  { id: 'Ventricular System', color: '#85C1E9' },
  { id: 'Cerebellum',      color: '#1ABC9C' },
  { id: 'Brainstem',       color: '#E91E63' },
  { id: 'Midbrain',        color: '#E91E63' },
  { id: 'Parietal/Temporal Junction', color: '#16A085' }
];

// MRI axial slice level labels (inferior to superior)
window.MRI_LEVELS = [
  { label: 'Level of Medulla', structures: ['medulla'] },
  { label: 'Medulla / Pons Junction', structures: ['medulla', 'pons'] },
  { label: 'Level of Pons', structures: ['pons'] },
  { label: 'Pons / Cerebellum', structures: ['pons', 'cerebellar_hemispheres', 'vermis'] },
  { label: 'Midbrain / Cerebellum', structures: ['midbrain', 'cerebellar_hemispheres', 'vermis', 'substantia_nigra'] },
  { label: 'Level of Midbrain', structures: ['midbrain', 'substantia_nigra', 'cerebellar_hemispheres'] },
  { label: 'Midbrain / Thalamus', structures: ['midbrain', 'substantia_nigra', 'thalamus'] },
  { label: 'Amygdala / Hippocampus', structures: ['amygdala', 'hippocampus', 'hypothalamus', 'thalamus'] },
  { label: 'Temporal Horn / Hippocampus', structures: ['hippocampus', 'amygdala', 'thalamus', 'subthalamic_nucleus', 'fusiform_gyrus'] },
  { label: 'Basal Ganglia — Inferior', structures: ['caudate', 'putamen', 'globus_pallidus', 'thalamus', 'temporal_gyri'] },
  { label: 'Basal Ganglia — Main Level', structures: ['caudate', 'putamen', 'globus_pallidus', 'thalamus', 'internal_capsule', 'lateral_ventricles', 'insula'] },
  { label: 'Basal Ganglia — Superior', structures: ['caudate', 'putamen', 'thalamus', 'lateral_ventricles', 'insula', 'superior_temporal', 'auditory_cortex', 'wernickes_area'] },
  { label: 'Lateral Ventricles Body', structures: ['caudate', 'lateral_ventricles', 'corpus_callosum', 'cingulate_cortex', 'insula'] },
  { label: 'Level of Corpus Callosum', structures: ['corpus_callosum', 'lateral_ventricles', 'cingulate_cortex', 'prefrontal_cortex', 'somatosensory_cortex', 'motor_cortex'] },
  { label: 'Corona Radiata', structures: ['corpus_callosum', 'lateral_ventricles', 'cingulate_cortex', 'prefrontal_cortex', 'premotor_cortex', 'somatosensory_cortex', 'visual_association'] },
  { label: 'Semi-oval Centre', structures: ['cingulate_cortex', 'frontal_eye_fields', 'motor_cortex', 'sma', 'superior_parietal', 'primary_visual'] },
  { label: 'Superior Cortex', structures: ['sma', 'motor_cortex', 'somatosensory_cortex', 'superior_parietal', 'prefrontal_cortex'] },
  { label: 'Vertex', structures: ['motor_cortex', 'somatosensory_cortex', 'superior_parietal'] },
];
