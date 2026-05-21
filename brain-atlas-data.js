/* ============================================================
   Study Buddy — Brain Atlas Data  v2
   Sources: Gilroy Atlas of Anatomy 4th ed, imaios.com MRI atlas,
            MNI152 standard space coordinates
   3D coordinate system:
     x: left(-) / right(+)
     y: inferior(-) / superior(+)   [MNI z / 80]
     z: posterior(-) / anterior(+)  [MNI y / 80]
   ============================================================ */

window.BRAIN_ATLAS_DATA = {

  /* ═══════ FRONTAL LOBE ══════════════════════════════════════ */

  prefrontal_cortex: {
    name: 'Prefrontal Cortex',
    lobe: 'Frontal Lobe',
    color: '#4A90D9',
    pos3d:   { x: 0,     y:  0.31, z:  0.63 },
    scale3d: { x: 0.80,  y:  0.60, z:  0.50 },
    mriLevels: [10,11,12,13,14,15],
    brief: 'Executive center — planning, decision-making, working memory, and personality expression.',
    full: `The prefrontal cortex (PFC, BA 9/10/11/12/46/47) occupies the anterior third of the frontal lobe. In Gilroy's Atlas it is described as the highest-order association cortex — the region that integrates sensory, motor, and limbic information to guide goal-directed behaviour.

Cytoarchitecturally it is granular (six-layered isocortex) in the dorsolateral portion and agranular in the orbital and medial sectors. The dorsolateral PFC (dlPFC, BA 9/46) is the core of working memory, connected to parietal areas via the superior longitudinal fasciculus. The orbitofrontal cortex (OFC) encodes reward value and is densely connected to the amygdala. The ventromedial PFC (vmPFC) integrates emotion and decision-making.

Lesions cause the dysexecutive syndrome: perseveration (inability to switch tasks), impaired planning (poor Tower-of-London test), disinhibition or apathy, and defective utilisation behaviour (reflexive use of objects without intent). The OFC lesion specifically impairs reversal learning — patients continue responding to a previously rewarded stimulus after the contingency has reversed (Iowa Gambling Task).

Classic case: Phineas Gage (1848) — a tamping iron through his left frontal lobe transformed him from a responsible foreman into an impulsive, unreliable individual, providing the first evidence that personality resides in the frontal lobes.`
  },

  motor_cortex: {
    name: 'Primary Motor Cortex (M1)',
    lobe: 'Frontal Lobe',
    color: '#2E86DE',
    pos3d:   { x: 0,     y:  0.81, z: -0.19 },
    scale3d: { x: 0.90,  y:  0.28, z:  0.22 },
    mriLevels: [13,14,15,16,17],
    brief: 'Precentral gyrus — origin of the corticospinal tract. Body mapped as motor homunculus: hands and face disproportionately large.',
    full: `The primary motor cortex (M1, BA 4) occupies the precentral gyrus, bounded anteriorly by the precentral sulcus and posteriorly by the central sulcus. It contains the largest pyramidal (Betz) cells in the cortex — fast-conducting upper motor neurons (UMN) that project via the corticospinal and corticobulbar tracts.

Gilroy emphasises the motor homunculus (Penfield, 1950): the medial wall controls the foot/perineum; the dorsal convexity controls leg, trunk, and arm; the lateral convexity controls hand, face, and tongue. The hand representation is enormous (~40% of M1), reflecting the fine motor control required for manipulation.

Fibres descend through the corona radiata → posterior limb of internal capsule → cerebral peduncle → pyramid → pyramidal decussation (85% cross). A lateral corticospinal tract then synapses on spinal ventral horn cells.

Upper motor neuron signs after M1 or internal capsule lesion: contralateral spastic hemiplegia, hyperreflexia, increased tone (clasp-knife), Babinski sign (extensor plantar response), and clonus. The face and hand usually recover less well than the leg (because the leg has a larger ipsilateral component via the anterior corticospinal tract).`
  },

  premotor_cortex: {
    name: 'Premotor Cortex',
    lobe: 'Frontal Lobe',
    color: '#1E6EC8',
    pos3d:   { x: 0,     y:  0.75, z:  0.00 },
    scale3d: { x: 0.85,  y:  0.30, z:  0.22 },
    mriLevels: [13,14,15,16],
    brief: 'Lateral premotor area — programs movements guided by external sensory cues; contains mirror neurons.',
    full: `The premotor cortex (PMC, BA 6 lateral) lies anterior to M1 on the lateral surface of the frontal lobe. It is part of the lateral premotor circuit, which selects and programs movements in response to external triggers (visual or auditory cues).

It contains mirror neurons — cells that fire both during action execution and during observation of the same action in another individual. First described in macaques by Rizzolatti (1992), human mirror neuron analogues in BA 6 and BA 44 are thought to underlie action understanding, imitation, and social cognition.

The PMC projects to M1, contributing approximately 30% of corticospinal fibres. It is connected to posterior parietal cortex (area 7) via the superior longitudinal fasciculus, forming the dorsal visuomotor stream for visually guided reaching.

Damage causes limb-kinetic apraxia: the patient can understand and plan an action but performs it clumsily, losing the fine automaticity of learned movements. This is distinct from ideomotor apraxia (parietal) and ideational apraxia (frontal-parietal).`
  },

  sma: {
    name: 'Supplementary Motor Area (SMA)',
    lobe: 'Frontal Lobe',
    color: '#1558A8',
    pos3d:   { x: 0,     y:  0.75, z: -0.06 },
    scale3d: { x: 0.45,  y:  0.26, z:  0.18 },
    mriLevels: [14,15,16],
    brief: 'Medial premotor — internally generated movements, bimanual coordination; active before you decide to move.',
    full: `The supplementary motor area (SMA, BA 6 medial) lies on the medial surface of the hemisphere, anterior to the paracentral lobule's motor representation. It is the core of the medial premotor circuit — activated for self-initiated, internally generated movements rather than externally cued ones.

The Bereitschaftspotential (readiness potential) recorded by EEG begins ~500 ms before a voluntary movement, originating in SMA, providing physiological evidence that motor preparation precedes conscious intention. This was central to Libet's neuroscience-of-free-will experiments.

The SMA has dense connections with the basal ganglia (via thalamus) and is critical for the initiation and sequencing of complex motor programmes. It sends fibres to M1 and to the spinal cord.

Unilateral SMA lesions cause the alien hand syndrome (medial type): the contralateral hand performs complex purposeful movements that the patient does not feel are under their control. Bilateral lesions initially cause akinetic mutism: the patient lies awake with eyes open but neither moves nor speaks, recovering over weeks.`
  },

  brocas_area: {
    name: "Broca's Area",
    lobe: 'Frontal Lobe',
    color: '#0D48A0',
    pos3d:   { x: -0.63, y:  0.13, z:  0.19 },
    scale3d: { x: 0.22,  y:  0.22, z:  0.22 },
    mriLevels: [11,12,13,14],
    brief: "Left inferior frontal gyrus (BA 44/45) — speech production and syntactic processing. Damage: non-fluent Broca's aphasia.",
    full: `Broca's area (pars opercularis BA 44 + pars triangularis BA 45) occupies the posterior inferior frontal gyrus of the left hemisphere in ~97% of right-handers. It was identified by Paul Broca in 1861 through two patients — Leborgne ("Tan") and Lelong — whose only verbal output was a single syllable, yet who understood speech normally.

It encodes the phonological and syntactic structure of spoken output, programmes the articulatory motor sequences, and sends commands to the face/larynx representation in M1 via the corticobulbar tract. Broca's area is connected to Wernicke's area by two white matter pathways: the arcuate fasciculus (long segment, for phonological repetition) and the extreme capsule/uncinate fasciculus (for semantic processing).

Broca's aphasia: non-fluent, effortful, telegraphic speech ("walk… dog… park") with relatively preserved comprehension. Patients are aware of their deficit and often frustrated. Reading and writing are also impaired for function words and grammatical morphemes.

Broca's area is also active during action observation and sentence comprehension — its role in language may reflect a broader capacity for hierarchical sequential processing, shared with music and tool use.`
  },

  frontal_eye_fields: {
    name: 'Frontal Eye Fields (FEF)',
    lobe: 'Frontal Lobe',
    color: '#0A3D8F',
    pos3d:   { x: 0,     y:  0.63, z:  0.31 },
    scale3d: { x: 0.60,  y:  0.22, z:  0.18 },
    mriLevels: [13,14,15],
    brief: 'Controls voluntary saccades — rapid eye movements toward locations of interest regardless of where stimuli appear.',
    full: `The frontal eye fields (FEF, BA 8, posterior middle frontal gyrus) are the cortical command centre for voluntary saccadic eye movements. Unlike the superior colliculus (reflexive orienting), the FEF mediates top-down, goal-directed gaze control: looking where you intend rather than where a stimulus suddenly appeared.

FEF neurons code target location in oculomotor coordinates (eye-centred). They project to the superior colliculus (for saccade generation), caudate nucleus (via corticostriatal fibres), and directly to brainstem saccade premotor areas (PPRF/riMLF). Sub-threshold FEF stimulation shifts spatial attention without moving the eyes, demonstrating that attention and gaze control are tightly linked.

An acute FEF lesion causes ipsilateral conjugate gaze deviation ("the patient looks toward the lesion") because the contralateral FEF is no longer balanced by the ipsilateral one. This is transient (unlike a pontine gaze centre lesion which is persistent and opposite in direction).

FEF is also involved in covert spatial attention, visual search, and working memory for spatial locations. It forms the core of the frontoparietal attention network, disrupted in hemispatial neglect.`
  },

  /* ═══════ PARIETAL LOBE ════════════════════════════════════ */

  somatosensory_cortex: {
    name: 'Primary Somatosensory Cortex (S1)',
    lobe: 'Parietal Lobe',
    color: '#27AE60',
    pos3d:   { x: 0,     y:  0.81, z: -0.31 },
    scale3d: { x: 0.90,  y:  0.28, z:  0.22 },
    mriLevels: [13,14,15,16,17],
    brief: 'Postcentral gyrus (BA 3a/3b/1/2) — processes touch, pressure, vibration, proprioception; mapped as sensory homunculus.',
    full: `The primary somatosensory cortex (S1, BA 3a/3b/1/2) occupies the postcentral gyrus, immediately posterior to the central sulcus. It receives thalamic input from the ventral posterior lateral nucleus (VPL, for body) and ventral posterior medial nucleus (VPM, for face), which relay from the medial lemniscus and trigeminothalamic tract.

Gilroy distinguishes four parallel maps within S1: BA 3a (proprioception from muscle spindles), BA 3b (texture/form via Merkel cells and Ruffini endings), BA 1 (texture via Meissner corpuscles), BA 2 (size/shape). Each contains a complete sensory homunculus; the finger/lip/tongue representations are enormously expanded relative to body surface area because of their high receptor density.

S1 does not work alone: it receives efference copies of motor commands from M1, allowing it to distinguish self-generated touch from external stimuli (explaining why you can't tickle yourself).

Damage causes contralateral hemisensory loss — impaired two-point discrimination, graphesthesia (recognising numbers written on skin), and stereognosis (recognising objects by touch alone). Pain and temperature may be relatively preserved because they are also processed in the insula and anterior cingulate.`
  },

  superior_parietal: {
    name: 'Superior Parietal Lobule (SPL)',
    lobe: 'Parietal Lobe',
    color: '#219A52',
    pos3d:   { x: 0,     y:  0.69, z: -0.69 },
    scale3d: { x: 0.70,  y:  0.32, z:  0.32 },
    mriLevels: [14,15,16,17],
    brief: 'Encodes body-in-space; integrates vision and proprioception for visually guided reaching (dorsal stream).',
    full: `The superior parietal lobule (SPL, BA 5/7) lies posterior to S1, above the intraparietal sulcus. BA 5 (somatosensory association area) integrates information across S1 subregions to build a representation of body configuration (body schema). BA 7 (visuo-spatial) integrates this with visual input from V5/MT and V3a to code the spatial position of limbs and targets for reaching.

The SPL is the key node of the dorsal visual stream ("where/how"), projecting forward to premotor areas to guide hand actions. Neurons here code target location in multiple reference frames (gaze-centred, body-centred, arm-centred) — a transformation essential for visually guided reaching.

Damage causes optic ataxia (Bálint's syndrome when bilateral): the patient reaches incorrectly for a visually presented object despite normal visual acuity and normal strength — a selective deficit in visually guided action. Associated with posterior cortical atrophy (variant Alzheimer's disease).

The right SPL is particularly involved in global spatial processing and is implicated in hemispatial neglect when damaged. The left SPL contributes to praxis (skilled tool use) and body representation.`
  },

  inferior_parietal: {
    name: 'Inferior Parietal Lobule (IPL)',
    lobe: 'Parietal Lobe',
    color: '#1D8045',
    pos3d:   { x: 0,     y:  0.44, z: -0.56 },
    scale3d: { x: 0.80,  y:  0.33, z:  0.33 },
    mriLevels: [12,13,14,15],
    brief: 'Multimodal hub: language (angular/supramarginal gyri), spatial attention, body schema, number processing.',
    full: `The inferior parietal lobule (IPL) consists of the supramarginal gyrus (SMG, BA 40) and the angular gyrus (AG, BA 39), located below the intraparietal sulcus. It is one of the most recently evolved and heavily connected regions of the human brain — a convergence zone for auditory, visual, somatosensory, and limbic inputs.

The left AG is critical for reading (grapheme-phoneme conversion), semantic processing, and arithmetic. Gerstmann syndrome from left AG/posterior parietal damage: finger agnosia (inability to identify own fingers), agraphia, acalculia, and left-right confusion — the four A's. The left SMG is involved in phonological processing and forms part of the phonological loop.

The right IPL is the heart of the spatial attention system. Damage causes hemispatial neglect — the most dramatic neurological phenomenon of inattention. Patients eat from only the right side of the plate, shave only the right side of the face, and may deny their left-sided paralysis (anosognosia). The right hemisphere is dominant for spatial attention because it attends to both hemifields, while the left only attends to the right hemifield.

The IPL contains human mirror neuron systems (action understanding, empathy), is a key default-mode network node (mentalising, theory of mind), and contributes to number representation.`
  },

  wernickes_area: {
    name: "Wernicke's Area",
    lobe: 'Temporal-Parietal Junction',
    color: '#16A085',
    pos3d:   { x: -0.69, y:  0.13, z: -0.56 },
    scale3d: { x: 0.22,  y:  0.22, z:  0.22 },
    mriLevels: [10,11,12,13],
    brief: "Left posterior STG (BA 22) — language comprehension. Damage: fluent but meaningless 'word salad' with poor comprehension.",
    full: `Wernicke's area (posterior BA 22, left hemisphere) lies in the posterior third of the superior temporal gyrus (STG), at the temporoparietal junction. Named after Carl Wernicke who in 1874 described patients who spoke fluently but incomprehensibly, with impaired comprehension.

It receives processed auditory input from the primary auditory cortex (Heschl's gyri) and matches incoming sound patterns to stored phonological representations, extracting word identity. It is connected to Broca's area by the arcuate fasciculus, and to the anterior temporal lobe (semantic hub) via the extreme capsule and uncinate fasciculus.

Wernicke's aphasia: fluent, effortless speech with normal rhythm and prosody, but the content is meaningless — paraphasias (substituting words: "the spoon is on the table" → "the clock is on the window"), neologisms (invented words), and jargon. Comprehension is severely impaired and the patient typically has no insight into their deficit (unlike Broca's aphasia). Repetition is also impaired.

Conduction aphasia from arcuate fasciculus damage: intact comprehension, fluent speech, but impaired repetition — the patient hears and understands normally but cannot copy what they hear exactly. This is the predicted "disconnection" syndrome.`
  },

  /* ═══════ TEMPORAL LOBE ════════════════════════════════════ */

  auditory_cortex: {
    name: 'Primary Auditory Cortex (A1)',
    lobe: 'Temporal Lobe',
    color: '#F39C12',
    pos3d:   { x: 0,     y:  0.13, z: -0.19 },
    scale3d: { x: 0.85,  y:  0.18, z:  0.18 },
    mriLevels: [11,12,13],
    brief: "Heschl's gyri on the superior temporal plane (BA 41/42) — tonotopically organised first cortical stage of hearing.",
    full: `The primary auditory cortex (A1, BA 41, Heschl's gyri) lies on the superior temporal plane within the lateral sulcus, buried from lateral view. It receives input from the medial geniculate nucleus (MGN) of the thalamus, which relays from the inferior colliculus via the lateral lemniscus.

A1 is tonotopically organised (high frequencies posterolaterally, low frequencies anteromedially), preserving the cochlear frequency map. Neurons respond to onset, duration, intensity, and binaural disparity (interaural time and level differences for sound localisation).

Two parallel auditory processing streams project from A1: an anterior (ventral) stream to the temporal pole for "what" processing (sound identity, speech perception), and a posterior (dorsal) stream to the parietal cortex for "where" processing (sound localisation, auditory-motor integration).

Bilateral A1 destruction causes cortical deafness: pure tones can still activate subcortical reflexes (startle, orienting), but the patient cannot consciously perceive or identify sounds. Unilateral A1 damage causes subtle deficits in sound discrimination and localisation in the contralateral ear but not true deafness, because each ear projects bilaterally.`
  },

  superior_temporal: {
    name: 'Superior Temporal Gyrus (STG)',
    lobe: 'Temporal Lobe',
    color: '#E67E22',
    pos3d:   { x: 0,     y:  0.06, z: -0.19 },
    scale3d: { x: 0.85,  y:  0.18, z:  0.35 },
    mriLevels: [10,11,12,13],
    brief: 'Auditory association cortex — voice recognition, speech prosody, and multisensory social integration.',
    full: `The superior temporal gyrus (STG, BA 22/42) surrounds the primary auditory cortex and extends onto the lateral surface of the temporal lobe. It is the core auditory association cortex and a crucial component of the social brain.

The posterior STG/left hemisphere is Wernicke's area proper. The anterior STG is a multimodal area that responds strongly to human voices (superior to other sounds), faces, biological motion, and emotional prosody. The right STG is dominant for prosody — the melodic, rhythmic, and emotional components of speech; right STG damage impairs recognition of emotional tone in voices (receptive aprosody).

The STG also performs audio-visual integration: it receives visual lip-movement signals and combines them with auditory signals for speech perception. This is the neural substrate of the McGurk effect — an auditory illusion in which visual mouth movements alter perceived speech sounds.

In schizophrenia, reduced grey matter volume and abnormal activation in the left STG correlates with auditory verbal hallucinations ("hearing voices"). The STG is also involved in theory of mind (particularly the temporoparietal junction) and is a key node for processing socially meaningful stimuli.`
  },

  middle_temporal: {
    name: 'Middle & Inferior Temporal Gyri',
    lobe: 'Temporal Lobe',
    color: '#D35400',
    pos3d:   { x: 0,     y: -0.13, z: -0.25 },
    scale3d: { x: 0.85,  y:  0.25, z:  0.50 },
    mriLevels: [9,10,11,12],
    brief: 'Object recognition and semantic memory — the ventral visual stream ("what pathway") endpoint.',
    full: `The middle temporal gyrus (MTG, BA 21) and inferior temporal gyrus (ITG, BA 20) form the lateral and inferior temporal cortex. They are the endpoint of the ventral visual stream from V1 → V2 → V4 → TEO → TE (the "what pathway"), which processes object identity independent of size, viewpoint, and illumination.

MTG contains abstract semantic representations of objects, animals, and tools — conceptual knowledge about what things are, including motor knowledge (how to use them). Left MTG lesions cause anomic aphasia: profound difficulty finding words (tip-of-the-tongue state) for nouns and verbs. The patient understands the word when told it but cannot produce it voluntarily.

ITG contains high-level visual representations with invariant object recognition. It includes category-selective areas: the fusiform face area (FFA in fusiform gyrus) for faces, the parahippocampal place area (PPA) for scenes, and object-selective lateral occipital complex.

In semantic dementia (a frontotemporal dementia variant), anterior temporal cortex atrophies bilaterally, causing progressive loss of semantic knowledge — the patient gradually loses the meaning of words and concepts across all modalities, while episodic memory (what they did yesterday) is initially spared.`
  },

  fusiform_gyrus: {
    name: 'Fusiform Gyrus (BA 37)',
    lobe: 'Temporal Lobe',
    color: '#BA4A00',
    pos3d:   { x: 0,     y: -0.25, z: -0.38 },
    scale3d: { x: 0.70,  y:  0.18, z:  0.42 },
    mriLevels: [8,9,10,11],
    brief: 'Expert visual recognition — fusiform face area (FFA) for faces; visual word form area (VWFA) on left for reading.',
    full: `The fusiform gyrus (BA 37) runs along the ventral temporal lobe between the parahippocampal and inferior temporal sulci. It contains functionally specialised sub-regions identified by fMRI.

The fusiform face area (FFA, right > left, mid-fusiform) responds selectively to faces — far more than to any other visual category. It is not exclusively for faces: it is activated by any category of objects for which the person has developed perceptual expertise (bird experts, car experts). This suggests it is a general expert-level visual discrimination area that has been "captured" by faces across human development.

Damage to right FFA causes prosopagnosia: inability to recognise familiar faces, including one's own in a mirror, despite normal object recognition and vision. Patients develop compensatory strategies (recognising people by voice, hairstyle, or gait). Congenital prosopagnosia (~2% of population) has normal anatomy but functional hypoconnectivity of the FFA.

The visual word form area (VWFA, left fusiform) is sometimes called the "letterbox" — it responds preferentially to strings of letters (words) and is critical for rapid, automatic, parallel reading. Damage causes pure alexia (letter-by-letter reading): the patient reads words one letter at a time, losing reading fluency despite intact writing and comprehension.`
  },

  /* ═══════ OCCIPITAL LOBE ═══════════════════════════════════ */

  primary_visual: {
    name: 'Primary Visual Cortex (V1)',
    lobe: 'Occipital Lobe',
    color: '#C0392B',
    pos3d:   { x: 0,     y:  0.06, z: -1.13 },
    scale3d: { x: 0.60,  y:  0.45, z:  0.28 },
    mriLevels: [10,11,12,13,14],
    brief: 'Calcarine cortex (BA 17) — first cortical stage of vision. Retinotopically mapped; fovea at occipital pole.',
    full: `The primary visual cortex (V1, striate cortex, BA 17) is located in the depths and lips of the calcarine sulcus on the medial occipital surface. It receives topographically organised (retinotopic) input from the lateral geniculate nucleus (LGN), layers 2,3,5,6 of LGN → V1 layers 4Cα and 4Cβ respectively.

V1 has a massive cortical magnification factor: the central 10 degrees of vision (the fovea) occupies ~50% of V1's surface despite covering only 2% of the retina. This is why lesions at the occipital pole cause central scotomas while posterior parietal lesions spare central vision (macular sparing — also partly due to dual MCA/PCA blood supply at the tip).

Layer 4 of V1 has a distinctly dark appearance (the stria of Gennari, visible to the naked eye) from dense myelinated horizontal fibres in layer 4B — hence "striate cortex." Ocular dominance columns and orientation columns in V1 were discovered by Hubel and Wiesel (Nobel Prize 1981), establishing the columnar organisation of visual cortex.

Damage causes contralateral homonymous hemianopia (same visual field quadrant or half lost in both eyes). Patients with total V1 destruction may show blindsight — unconscious responses to visual stimuli they deny seeing, mediated by the superior colliculus pathway.`
  },

  visual_association: {
    name: 'Visual Association Cortex (V2–V5)',
    lobe: 'Occipital Lobe',
    color: '#A93226',
    pos3d:   { x: 0,     y:  0.19, z: -1.00 },
    scale3d: { x: 0.75,  y:  0.42, z:  0.28 },
    mriLevels: [11,12,13,14,15],
    brief: 'V2 (BA 18), V3, V4 (colour), V5/MT (motion) — progressive extraction of form, colour, and motion from V1 output.',
    full: `Beyond V1, a hierarchy of extrastriate visual areas processes increasingly complex visual attributes. Each area has its own complete retinotopic map and functional specialisation.

V2 (BA 18) surrounds V1 and receives direct V1 input. V3 processes global form and depth. V4 is specialised for colour and shape — it receives M and P pathway inputs and computes colour constancy (stable colour perception despite changing illumination). Selective V4 damage causes cerebral achromatopsia: the world is seen in shades of grey despite normal cone function; patients often lose colour imagery as well.

V5/MT (middle temporal area, dorsal occipitotemporal cortex) is specialised for motion detection. Neurons in MT respond to moving stimuli with preferred directions and speeds, providing the neural basis for coherent motion perception. Selective MT damage causes akinetopsia: the world appears as a series of frozen snapshots — pouring tea looks like a solid frozen arc, and traffic cannot be tracked.

These areas bifurcate into two streams: the dorsal stream (V1→V3→V5/MT→parietal) for spatial processing and action guidance, and the ventral stream (V1→V4→fusiform→temporal) for object identity. The double dissociation between these streams is demonstrated by patients who can accurately grasp objects they cannot identify (dorsal intact, ventral damaged) and vice versa.`
  },

  /* ═══════ LIMBIC SYSTEM ════════════════════════════════════ */

  cingulate_cortex: {
    name: 'Cingulate Cortex',
    lobe: 'Limbic System',
    color: '#8E44AD',
    pos3d:   { x: 0,     y:  0.50, z:  0.19 },
    scale3d: { x: 0.22,  y:  0.52, z:  0.90 },
    mriLevels: [11,12,13,14,15,16],
    brief: 'Anterior cingulate: conflict monitoring, pain affect, autonomic control. Posterior cingulate: DMN hub, episodic memory.',
    full: `The cingulate cortex arches over the corpus callosum on the medial hemisphere. Gilroy divides it into: anterior cingulate cortex (ACC, BA 24/32), mid-cingulate (MCC, BA 24'), posterior cingulate cortex (PCC, BA 23/31), and retrosplenial cortex (RSC, BA 29/30).

The ACC has two divisions: affective (subgenual, below the genu) and cognitive (pregenual/dorsal). The affective ACC is part of the pain neuromatrix — it processes the emotional distress component of pain without the sensory-discriminative aspect. Cingulotomy (surgical ACC lesion) reduces suffering from chronic pain without eliminating pain sensation. The cognitive ACC monitors for response conflict and error (anterior cingulate is activated on incongruent Stroop trials), recruiting cognitive control when needed.

The PCC is the metabolically most active region at rest (highest glucose uptake) and is a central hub of the default mode network (DMN) — the network active during rest, mind-wandering, autobiographical memory, and self-referential thought. It is among the first regions to accumulate amyloid plaques in Alzheimer's disease and shows early metabolic decline in preclinical AD.

The MCC bridges motor and emotional systems and contains nociceptive neurons that project to the spinal cord, modulating pain transmission. The RSC is critical for spatial navigation and forms part of the "scene-selective" network with the parahippocampal cortex.`
  },

  insula: {
    name: 'Insula',
    lobe: 'Limbic System',
    color: '#7D3C98',
    pos3d:   { x: 0,     y:  0.19, z:  0.06 },
    scale3d: { x: 0.82,  y:  0.48, z:  0.30 },
    mriLevels: [10,11,12,13],
    brief: 'Hidden in the lateral sulcus — interoception (body state), disgust, pain affect, empathy; anterior insula is primary gustatory cortex.',
    full: `The insula (insular cortex) is folded within the lateral (Sylvian) sulcus, covered by the frontal, parietal, and temporal opercula. It has a distinct cytoarchitectural gradient: the posterior insula is granular (like sensory cortex), while the anterior insula is agranular (like limbic cortex).

The posterior insula receives interoceptive signals from the body — pain, temperature, itch, visceral sensations, cardiovascular state, and respiratory effort — via the thalamus (VPL, VMpo nuclei). These are the raw "body state" signals. The anterior insula integrates these with emotional context to create the subjective felt quality of bodily states — a process Damasio calls "somatic markers," and Craig calls the neural substrate of feelings.

The anterior insula is consistently activated across a remarkable range of subjective states: pain empathy, hunger, thirst, social rejection, disgust, romantic love, craving, and aesthetic pleasure. The right anterior insula is considered the substrate of the sense of self as an embodied entity.

The anterior insula is primary gustatory cortex — the first cortical taste area, receiving from the thalamic VPMpc nucleus (which relays from the nucleus tractus solitarius). Taste information then projects forward to the OFC for flavour integration.

Insular lesions contribute to: anosognosia (denial of illness), impaired recognition of disgust, pain asymbolia (pain sensation without distress), and reduced cardiac interoception.`
  },

  hippocampus: {
    name: 'Hippocampus',
    lobe: 'Limbic System',
    color: '#6C3483',
    pos3d:   { x: 0,     y: -0.15, z: -0.31 },
    scale3d: { x: 0.78,  y:  0.18, z:  0.38 },
    mriLevels: [7,8,9,10],
    brief: 'Essential for forming new declarative (episodic + semantic) memories. Contains place cells for spatial navigation.',
    full: `The hippocampus (Latin for seahorse) is a curved structure in the medial temporal lobe, constituting the most medial part of the temporal cortex. It has three subdivisions: the dentate gyrus (DG), Cornu Ammonis (CA1-CA4), and subiculum. The perforant path (from entorhinal cortex → DG) is the main input; the fornix is the major output (to mammillary bodies and septal nuclei).

The trisynaptic circuit (EC → DG via perforant path → CA3 via mossy fibres → CA1 via Schaffer collaterals → subiculum → EC) is essential for memory encoding. Long-term potentiation (LTP) at CA3 and CA1 synapses — discovered by Bliss and Lømo (1973) — is the primary synaptic model of memory consolidation.

Patient H.M. (Henry Molaison), whose bilateral hippocampectomy in 1953 caused profound anterograde amnesia, established that the hippocampus is necessary for forming new declarative memories (both episodic and semantic) but not for procedural learning, working memory, or immediate recall. He could not remember anything from 1953 onward, yet could learn new motor skills.

The hippocampus contains place cells (O'Keefe, Nobel Prize 2014) — neurons that fire in specific locations — providing the neural substrate for the cognitive map of space. The London taxi driver study (Maguire, 2000) showed structural enlargement of the posterior hippocampus in drivers who memorised ~25,000 streets.`
  },

  amygdala: {
    name: 'Amygdala',
    lobe: 'Limbic System',
    color: '#5B2C6F',
    pos3d:   { x: 0,     y: -0.22, z: -0.06 },
    scale3d: { x: 0.68,  y:  0.19, z:  0.22 },
    mriLevels: [7,8,9,10],
    brief: 'Fear processing and emotional memory — attaches emotional significance to stimuli; danger signals bypass cortex via thalamo-amygdala shortcut.',
    full: `The amygdala (Greek for almond) is a nuclear complex in the anterior temporal lobe, just anterior and superior to the hippocampal head. Gilroy divides it into three main groups: the basolateral complex (BLA — lateral, basal, accessory basal nuclei), the centromedial group, and the cortical nuclei.

The BLA receives sensory input from all modalities — including a fast "low road" directly from the thalamus (bypassing cortical processing) for rapid threat responses. It evaluates stimuli for emotional significance and projects to the orbitofrontal and cingulate cortex to influence decision-making. The central nucleus is the main output nucleus — it coordinates the autonomic (via hypothalamus/brainstem), endocrine (via hypothalamus), and behavioural (via BNST/basal forebrain) components of the fear response.

Amygdala activation is critical for fear conditioning (learning that a neutral stimulus predicts danger). It modulates hippocampal memory consolidation via noradrenergic and cholinergic projections — explaining why emotionally arousing events are remembered better (amygdala tags them as important).

Patient S.M. (Urbach-Wiethe disease, bilateral amygdala calcification): cannot feel fear, approaches snakes and spiders without hesitation, rates neutral faces as more approachable, cannot recognise fearful facial expressions, and failed to acquire conditioned fear responses. Yet she is not reckless — all other emotions are intact.`
  },

  parahippocampal: {
    name: 'Parahippocampal Gyrus',
    lobe: 'Limbic System',
    color: '#4A235A',
    pos3d:   { x: 0,     y: -0.28, z: -0.31 },
    scale3d: { x: 0.70,  y:  0.18, z:  0.40 },
    mriLevels: [6,7,8,9],
    brief: 'Entorhinal cortex + parahippocampal place area — the gateway to the hippocampus and scene recognition.',
    full: `The parahippocampal gyrus wraps around the hippocampus on the inferior temporal surface. Its anterior portion is the entorhinal cortex (EC, BA 28) and perirhinal cortex (BA 35/36); its posterior portion contains the parahippocampal place area (PPA).

The entorhinal cortex is the primary input/output gateway to the hippocampus: ~70% of hippocampal input arrives via the perforant path from EC layer II (to dentate gyrus and CA3) and layer III (to CA1). EC layer II neurons contain grid cells (Moser & Moser, Nobel Prize 2014) — neurons that fire in a hexagonal spatial grid across an environment, providing metric spatial information to hippocampal place cells.

The perirhinal cortex is critical for object recognition memory (familiarity-based recognition) and may allow objects to be recognised as familiar without full recollection of when/where they were encountered. This dissociation maps onto the Remember/Know distinction in cognitive psychology.

The PPA (posterior parahippocampal gyrus) responds selectively to places and scenes — more than to any other category. It is a critical node of the "scene-selective" network together with the retrosplenial cortex. PPA lesions cause topographical disorientation: patients cannot navigate by landmarks despite recognising individual buildings.`
  },

  /* ═══════ SUBCORTICAL ══════════════════════════════════════ */

  thalamus: {
    name: 'Thalamus',
    lobe: 'Diencephalon',
    color: '#E74C3C',
    pos3d:   { x: 0,     y:  0.06, z: -0.25 },
    scale3d: { x: 0.52,  y:  0.33, z:  0.44 },
    mriLevels: [7,8,9,10,11],
    brief: 'Grand relay station — all sensory modalities except olfaction pass through specific thalamic nuclei on the way to cortex.',
    full: `The thalamus is a paired egg-shaped diencephalic structure flanking the third ventricle (inter-thalamic adhesion often connects the two across the midline). Gilroy divides thalamic nuclei by function: specific relay, association, non-specific, and reticular (TRN).

Specific relay nuclei: VPL → somatosensory cortex (body touch/proprioception via medial lemniscus); VPM → somatosensory cortex (face, taste); MGN → A1 (auditory, via lateral lemniscus and inferior brachium); LGN → V1 (visual, via optic radiation/Meyer's loop); VL/VA → motor cortex (motor output from cerebellum via dentato-rubro-thalamic tract, and basal ganglia).

Association nuclei: pulvinar (largest thalamic nucleus — visual and language association, implicated in neglect); mediodorsal nucleus (MD) → prefrontal cortex (emotion, memory — damaged in Wernicke-Korsakoff syndrome); anterior nucleus → cingulate cortex (part of Papez circuit for memory).

The thalamic reticular nucleus (TRN) is a sheet of GABAergic neurons wrapping the thalamus — all thalamocortical and corticothalamic fibres pass through it. TRN gates sensory information based on attentional state and is critical for the alpha rhythms of sleep and the sleep spindles of NREM sleep.

Bilateral paramedian thalamic infarcts cause thalamic amnesia (disproportionate difficulty with episodic memory, similar to medial temporal amnesia) and disorders of arousal.`
  },

  hypothalamus: {
    name: 'Hypothalamus',
    lobe: 'Diencephalon',
    color: '#CB4335',
    pos3d:   { x: 0,     y: -0.13, z:  0.06 },
    scale3d: { x: 0.33,  y:  0.19, z:  0.28 },
    mriLevels: [7,8,9],
    brief: 'Master homeostasis regulator — hunger, thirst, temperature, circadian rhythm; controls pituitary hormone release.',
    full: `The hypothalamus (4g, <1% of brain weight) forms the floor and lateral walls of the third ventricle. Despite its tiny size, it is the master regulator of autonomic function, endocrine output, and homeostatic behaviour. Gilroy emphasises its two-way communication with the pituitary gland.

Hypothalamo-hypophysial tract: large magnocellular neurons in the paraventricular nucleus (PVN) and supraoptic nucleus (SON) synthesise ADH (vasopressin) and oxytocin, which travel down axons to the posterior pituitary for direct release. Parvocellular PVN neurons release CRH (stress), TRH (thyroid), GnRH (reproductive), GHRH/somatostatin (growth) into the hypothalamo-hypophysial portal system → anterior pituitary.

Key nuclei (mnemonic: four F's of the hypothalamus): Feeding (lateral — hunger; ventromedial — satiety; arcuate — leptin/ghrelin sensing), Fighting/Fleeing (dorsomedial, posterior), F*cking (preoptic area, sexually dimorphic nucleus), and Fever/thermoregulation (anterior — heat dissipation; posterior — heat conservation).

Suprachiasmatic nucleus (SCN): master circadian clock, ~20,000 neurons, entrained by retinal light input via retinohypothalamic tract. Ablation of SCN destroys all circadian rhythmicity. It expresses molecular clockwork (CLOCK/BMAL1/PER/CRY feedback loop), serving as the pacemaker for all peripheral tissue clocks.`
  },

  mammillary_bodies: {
    name: 'Mammillary Bodies',
    lobe: 'Diencephalon',
    color: '#B03A2E',
    pos3d:   { x: 0,     y: -0.22, z:  0.10 },
    scale3d: { x: 0.28,  y:  0.14, z:  0.16 },
    mriLevels: [7,8],
    brief: 'Papez circuit relay — receive hippocampal output via fornix; project to anterior thalamus for episodic memory.',
    full: `The mammillary bodies are paired spherical structures on the inferior hypothalamic surface, visible on the brain's ventral surface. They are a critical relay in the Papez circuit (Papez, 1937), the classic limbic loop for memory: hippocampus → fornix → mammillary bodies → mammillothalamic tract → anterior thalamic nucleus → cingulate cortex → entorhinal cortex → hippocampus.

The mammillary bodies receive the bulk of hippocampal output via the fornix. Medial mammillary neurons project strongly to the anterior thalamic nucleus (ATN) via the mammillothalamic tract of Vicq d'Azyr — one of the most prominent white matter tracts in the diencephalon, visible on MRI. Lateral mammillary neurons project to the tegmental nuclei.

The mammillary bodies are selectively vulnerable to thiamine (vitamin B1) deficiency. In Wernicke's encephalopathy, petechial haemorrhages occur in the mammillary bodies and periaqueductal grey — the classic pathological finding. Atrophy of the mammillary bodies on MRI is a sensitive marker for Wernicke-Korsakoff syndrome. The resulting amnesia (Korsakoff syndrome) is characterised by severe anterograde and retrograde amnesia with confabulation, attributed to disruption of the Papez circuit.

In temporal lobe epilepsy, the mammillary bodies and hippocampus atrophy together, reflecting repeated seizure-induced excitotoxicity through the circuit.`
  },

  caudate: {
    name: 'Caudate Nucleus',
    lobe: 'Basal Ganglia',
    color: '#F0A500',
    pos3d:   { x: 0,     y:  0.19, z:  0.13 },
    scale3d: { x: 0.62,  y:  0.23, z:  0.44 },
    mriLevels: [9,10,11,12],
    brief: 'Part of the striatum — receives prefrontal input; mediates goal-directed learning, cognitive flexibility, and reward.',
    full: `The caudate nucleus (CN) is a C-shaped structure with a head (bulging into the frontal horn of the lateral ventricle anteriorly), body (along the lateral ventricle), and tail (curving into the temporal lobe near the amygdala). Together with the putamen, it forms the striatum (neostriatum) — the main input nucleus of the basal ganglia.

The head of the caudate is strongly connected to the prefrontal cortex (dorsolateral → dorsal head; orbitofrontal → ventral head) via the corticostriatal pathway. This cortico-striato-thalamo-cortical loop regulates cognitive control, habit formation, and reward-based learning. Dopamine from the substantia nigra (D1 receptors: direct pathway, movement facilitation) and VTA (D1/D2: reward signalling) modulates striatal activity.

Caudate dysfunction is implicated in OCD (hyperactivity of the OFC-caudate loop — excessive checking is a stuck "error detection" signal), ADHD (hypoactive caudate-prefrontal loop), and Tourette syndrome (tic generation via striatal-thalamo-cortical disinhibition).

In Huntington's disease (HD), caudate head atrophy is the earliest and most dramatic structural change visible on MRI — the normally concave medial border of the frontal horn straightens and then bulges outward ("boxing glove" appearance). HD results from mutant huntingtin protein toxic to striatal medium spiny neurons (MSNs), particularly those expressing enkephalin (indirect pathway), explaining early chorea from selective indirect pathway loss.`
  },

  putamen: {
    name: 'Putamen',
    lobe: 'Basal Ganglia',
    color: '#D4A017',
    pos3d:   { x: 0,     y:  0.06, z:  0.06 },
    scale3d: { x: 0.68,  y:  0.33, z:  0.38 },
    mriLevels: [9,10,11,12],
    brief: 'Largest striatal nucleus — receives motor cortex input; essential for habitual motor learning and automatisation.',
    full: `The putamen is the largest component of the basal ganglia and the lateral part of the lenticular nucleus (putamen + globus pallidus). It receives massive input from the sensorimotor cortex (precentral, postcentral, premotor) via the corticostriatal pathway. This circuit is the "habit learning" loop: repeated sensorimotor experience gradually transfers motor control from the prefrontal/caudate circuit (deliberate, flexible) to the sensorimotor/putamen circuit (automatic, efficient).

The putamen projects via two parallel pathways: the direct pathway (striatum → GPi → thalamus, via D1 MSNs expressing substance P) facilitates desired movements; the indirect pathway (striatum → GPe → STN → GPi → thalamus, via D2 MSNs expressing enkephalin) suppresses competing movements. Dopamine facilitates the direct and inhibits the indirect pathway, biasing the system toward movement.

The putamen is preferentially affected in Parkinson's disease: dopaminergic fibres from the substantia nigra pars compacta first lose their projections to the caudal putamen (the motor territory), explaining why motor symptoms predominate early while cognitive symptoms emerge later as the disease progresses to the caudate and VTA.

On MRI (susceptibility-weighted imaging), the putamen normally appears dark due to iron accumulation — this increases with age. In multiple system atrophy (MSA), abnormal iron deposition produces the characteristic "hot cross bun sign" in the pons and a hypointense putaminal rim.`
  },

  globus_pallidus: {
    name: 'Globus Pallidus (GPe/GPi)',
    lobe: 'Basal Ganglia',
    color: '#B8860B',
    pos3d:   { x: 0,     y:  0.00, z:  0.00 },
    scale3d: { x: 0.47,  y:  0.28, z:  0.28 },
    mriLevels: [9,10,11],
    brief: 'Main output nucleus of basal ganglia — tonically inhibits thalamus; must be released (disinhibited) to allow movement.',
    full: `The globus pallidus (pale globe) is the medial component of the lenticular nucleus, divided into an external (GPe) and internal (GPi) segment by the medial medullary lamina. On cross-section it appears paler than the putamen due to dense myelinated fibres.

The GPi is the principal basal ganglia output nucleus. Its neurons fire tonically at ~60-80 Hz at rest, continuously inhibiting the motor thalamus (VA/VL nuclei). To generate a movement, the striatum (via the direct pathway) inhibits GPi neurons, releasing the thalamus from inhibition — a "disinhibition" mechanism. GPi output also reaches the pedunculopontine nucleus (PPN) and superior colliculus.

The GPe is part of the indirect pathway, receiving striatal inhibition and inhibiting the subthalamic nucleus in turn. GPe acts as a gating mechanism modulating the strength of indirect pathway inhibition.

Deep brain stimulation (DBS) of GPi is a standard treatment for Parkinson's disease (improving all cardinal motor symptoms), dystonia (often dramatically effective), and Tourette syndrome. The mechanism is controversial — high-frequency stimulation (~130 Hz) may functionally silence GPi, mimic the therapeutic effect of pallidotomy, or alter pathological oscillatory patterns (exaggerated beta rhythms in Parkinson's disease).

Hemiballismus — violent flinging movements of the contralateral arm — results from acute GPi disinhibition after lacunar infarct of the subthalamic nucleus (ipsilateral STN destroys the excitatory drive to GPi, releasing thalamus from inhibition).`
  },

  subthalamic_nucleus: {
    name: 'Subthalamic Nucleus (STN)',
    lobe: 'Basal Ganglia',
    color: '#A0522D',
    pos3d:   { x: 0,     y: -0.06, z: -0.06 },
    scale3d: { x: 0.40,  y:  0.14, z:  0.22 },
    mriLevels: [8,9,10],
    brief: 'The only excitatory (glutamatergic) nucleus in the basal ganglia — amplifies inhibition via the indirect pathway; DBS target for Parkinson\'s.',
    full: `The subthalamic nucleus (STN) is a lens-shaped nucleus lying beneath the thalamus and above the substantia nigra, at the junction of the diencephalon and mesencephalon. It is the only excitatory (glutamatergic) nucleus within the basal ganglia proper.

In the classic basal ganglia model, the STN is the key relay of the indirect pathway: striatum (indirect, D2/enkephalin MSNs) → GPe → STN (disinhibited) → GPi (excited) → thalamus (inhibited). This circuit ultimately suppresses unwanted movements. The STN also receives a "hyperdirect" pathway directly from prefrontal cortex, which can stop actions rapidly without going through the striatum.

The STN shows synchronised beta oscillations (13-30 Hz) in Parkinson's disease, a pathological rhythmic "braking" signal that correlates with motor slowness (bradykinesia). DBS of the STN at 130 Hz suppresses these oscillations, allowing more normal thalamic throughput. STN-DBS is now the standard surgical therapy for advanced Parkinson's disease, producing dramatic, levodopa-like improvements in all motor symptoms.

Lesion: hemiballismus (contralateral, as described under GPi). Small lacunar infarcts of the STN from posterior cerebral artery perforating branches are the most common cause.`
  },

  substantia_nigra: {
    name: 'Substantia Nigra',
    lobe: 'Midbrain',
    color: '#1a1008',
    pos3d:   { x: 0,     y: -0.19, z: -0.25 },
    scale3d: { x: 0.58,  y:  0.13, z:  0.22 },
    mriLevels: [5,6,7],
    brief: 'Midbrain dopamine nucleus — degeneration causes Parkinson\'s disease. Appears dark on MRI due to neuromelanin pigment.',
    full: `The substantia nigra (SN, Latin: black substance) is a midbrain nucleus appearing dark macroscopically due to neuromelanin — a byproduct of dopamine synthesis — in its pars compacta (SNc) neurons. It is divided into the pars compacta (SNc, dorsal, dopaminergic neurons) and pars reticulata (SNr, ventral, GABAergic output neurons similar to GPi).

The SNc is the origin of the nigrostriatal pathway — projecting to the caudate and putamen (striatum). Dopamine from SNc modulates basal ganglia circuits: via D1 receptors it facilitates the direct pathway; via D2 receptors it inhibits the indirect pathway. Net effect: dopamine promotes movement initiation and vigour. A separate mesocortical pathway (SNc/VTA → prefrontal cortex) modulates working memory, and the mesolimbic pathway (VTA → nucleus accumbens) mediates reward.

Parkinson's disease (PD): loss of >80% of SNc neurons produces the cardinal features: resting tremor ("pill-rolling"), rigidity (cogwheel, lead pipe), bradykinesia, and postural instability. The substantia nigra appears pale on post-mortem examination (neuromelanin lost). Lewy bodies (alpha-synuclein aggregates) are the pathological hallmark. Levodopa (L-DOPA) replenishes striatal dopamine, dramatically improving motor symptoms.

On MRI, the normal SNc appears dark on T2* images (neuromelanin/iron signal). Reduced T2* signal ("nigrosome-1 loss") is now an established imaging marker for PD. Neuromelanin-sensitive MRI directly visualises SNc pigmented neurons and shows ~20% volume reduction in PD.`
  },

  /* ═══════ WHITE MATTER ═════════════════════════════════════ */

  corpus_callosum: {
    name: 'Corpus Callosum',
    lobe: 'White Matter',
    color: '#BDC3C7',
    pos3d:   { x: 0,     y:  0.31, z:  0.00 },
    scale3d: { x: 0.18,  y:  0.14, z:  0.95 },
    mriLevels: [11,12,13,14,15],
    brief: '200-300 million axons connecting both hemispheres — four parts: rostrum, genu (prefrontal), body (parietal), splenium (occipito-temporal).',
    full: `The corpus callosum (CC) is the largest white matter commissure in the human brain, containing ~200-300 million myelinated axons connecting homotopic and heterotopic cortical areas across hemispheres. It has four parts from anterior to posterior: rostrum (connects orbitofrontal cortices), genu (prefrontal), body (parietal and motor/sensory), splenium (occipital, temporal, and parietal association cortices).

The CC is essential for interhemispheric integration: visual information from each half-field is processed in the contralateral hemisphere, and the CC allows this to be unified into a single percept. It also enables the dominant (left) hemisphere's language system to name stimuli processed by the right hemisphere.

Split-brain patients (callosotomy for intractable epilepsy, studied by Sperry and Gazzaniga): each hemisphere functions independently. An object shown to the left visual field (processed by right hemisphere) can be picked up by the left hand but cannot be named — because language is in the left hemisphere which has no access to the right hemisphere's perception. Two independent "conscious" agents appear to coexist.

Agenesis of the corpus callosum (ACC, congenital absence) occurs in ~1/4000 births. Surprisingly, many individuals appear cognitively normal — the brain compensates via enlarged anterior and posterior commissures and strengthened ipsilateral connections. However, subtle deficits in processing complex social and linguistic information emerge on detailed testing.`
  },

  internal_capsule: {
    name: 'Internal Capsule',
    lobe: 'White Matter',
    color: '#ABB2B9',
    pos3d:   { x: 0,     y:  0.13, z:  0.06 },
    scale3d: { x: 0.58,  y:  0.48, z:  0.38 },
    mriLevels: [9,10,11,12],
    brief: 'White matter highway — all cortical motor (descending) and sensory (ascending) fibres converge here between lenticular nucleus and thalamus.',
    full: `The internal capsule (IC) is a compact band of white matter between the lenticular nucleus (putamen + GP) laterally and the caudate nucleus and thalamus medially. It carries virtually all ascending and descending fibres connecting the cerebral cortex to subcortical structures.

On axial MRI at basal ganglia level, the IC has a distinctive V-shaped (or boomerang) appearance: the anterior limb (between caudate and lenticular nucleus) contains frontothalamic and frontopontine fibres; the genu (at the bend) contains corticobulbar fibres for voluntary facial, pharyngeal, and laryngeal muscles; the posterior limb (between thalamus and lenticular nucleus) contains the corticospinal tract (CST), thalamocortical somatosensory radiations, and visual/auditory radiations.

Somatotopic arrangement in the posterior limb (anterior to posterior): face → arm → leg representations of the CST.

The posterior limb is supplied by the lenticulostriate arteries — small perforating branches of the MCA vulnerable to hypertension. Hypertensive lacunar infarcts and intracerebral haemorrhage classically occur here, producing contralateral dense hemiplegia. A 1cm3 lesion here can paralyse an entire side of the body — the highest density of motor fibres anywhere in the brain.`
  },

  lateral_ventricles: {
    name: 'Lateral Ventricles',
    lobe: 'Ventricular System',
    color: '#5DADE2',
    pos3d:   { x: 0,     y:  0.25, z:  0.06 },
    scale3d: { x: 0.62,  y:  0.32, z:  0.78 },
    mriLevels: [10,11,12,13,14],
    brief: 'CSF-filled cavities within each hemisphere — C-shaped, with frontal horn, body, occipital horn, and temporal horn.',
    full: `The lateral ventricles are paired C-shaped cavities within the cerebral hemispheres, reflecting the C-shaped rotation of the telencephalon during development. Each consists of a frontal horn (anterior to interventricular foramen), body, occipital horn, and temporal horn (extending into the temporal lobe, alongside the hippocampus).

CSF is produced by the choroid plexus at ~500 ml/day (total volume ~150 ml). Flow: lateral ventricles → interventricular foramen (of Monro) → third ventricle → cerebral aqueduct (of Sylvius) → fourth ventricle → foramina of Luschka (lateral) and Magendie (medial) → subarachnoid space → absorbed by arachnoid granulations into the dural venous sinuses. Disturbance at any point causes hydrocephalus.

On axial MRI: at the level of the basal ganglia, the frontal horns appear as two butterfly-shaped CSF spaces flanked medially by the septum pellucidum and laterally by the caudate head. Higher up, the ventricular bodies enlarge; the corpus callosum forms the roof.

Ventriculomegaly: enlargement may indicate (1) obstructive hydrocephalus (blocked CSF flow → raised ICP → papilloedema, headache, vomiting), (2) communicating hydrocephalus (impaired absorption at arachnoid granulations — after SAH or meningitis), or (3) hydrocephalus ex vacuo (passive enlargement as brain tissue is lost — Alzheimer's, Huntington's, ageing). Distinguishing these requires clinical and radiological correlation.`
  },

  /* ═══════ CEREBELLUM ════════════════════════════════════════ */

  cerebellar_hemispheres: {
    name: 'Cerebellar Hemispheres',
    lobe: 'Cerebellum',
    color: '#1ABC9C',
    pos3d:   { x: 0,     y: -0.31, z: -0.81 },
    scale3d: { x: 0.90,  y:  0.42, z:  0.48 },
    mriLevels: [3,4,5,6,7],
    brief: 'Neocerebellum — coordinates timing and precision of voluntary limb movements; damage causes ipsilateral limb ataxia.',
    full: `The cerebellar hemispheres (neocerebellum or pontocerebellum) are the largest part of the cerebellum and the most recently evolved. Their characteristic folded surface (folia) is separated by fissures, giving enormously increased surface area. Each hemisphere is connected to the brainstem by three peduncles: inferior (restiform body, to medulla), middle (brachium pontis, largest, from pontine nuclei), and superior (brachium conjunctivum, to midbrain, carrying output).

The cerebellar cortex has a uniform three-layer structure: molecular layer (sparse stellate and basket cells, Purkinje cell dendrites), Purkinje cell layer (large inhibitory Purkinje neurons — the sole output of the cortex), and granule cell layer (the most numerous neurons in the brain — ~50 billion). Information arrives via mossy fibres (from pontine nuclei, relaying cortical signals) and climbing fibres (from inferior olivary nucleus, providing error signals).

The neocerebellum implements internal models of movement dynamics — a "forward model" predicting sensory consequences of motor commands and a "inverse model" computing motor commands from desired trajectories. It compares intended and actual movement in real time, sending corrective signals back to motor cortex via dentate nucleus → superior cerebellar peduncle → contralateral red nucleus → thalamus (VL) → motor cortex.

Neocerebellum lesions cause ipsilateral limb ataxia (DANISH mnemonic: Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Scanning dysarthria, Hypotonia). Because the circuit crosses twice (cortex → pons → contralateral cerebellum → contralateral SCP → recross → ipsilateral VL → ipsilateral cortex), cerebellar lesions produce ipsilateral signs.`
  },

  vermis: {
    name: 'Vermis & Flocculonodular Lobe',
    lobe: 'Cerebellum',
    color: '#17A589',
    pos3d:   { x: 0,     y: -0.31, z: -0.81 },
    scale3d: { x: 0.18,  y:  0.42, z:  0.48 },
    mriLevels: [3,4,5,6,7],
    brief: 'Midline cerebellum — controls trunk/gait (spinocerebellum); flocculonodular lobe controls eye movements and balance (vestibulocerebellum).',
    full: `The vermis (Latin: worm) is the midline strip of the cerebellum connecting the two hemispheres. Together with the paravermis (intermediate zone), it constitutes the spinocerebellum, which receives somatotopic input from the spinal cord (dorsal and ventral spinocerebellar tracts), trigeminal nuclei, and some visual/auditory input. It projects via the fastigial nucleus to the vestibular nuclei and reticular formation, controlling axial (trunk and proximal limb) muscles and gait.

The flocculonodular lobe (vestibulocerebellum) is the oldest part of the cerebellum phylogenetically. It receives input from the vestibular nuclei (direct, without thalamic relay) and controls balance, eye movements (smooth pursuit, VOR adaptation), and postural adjustments.

Vermal lesions produce truncal ataxia and gait ataxia — wide-based, staggering "drunken sailor" gait with difficulty walking in tandem. This is the pattern of alcoholic cerebellar degeneration: preferential anterior vermis atrophy from thiamine deficiency causes isolated gait ataxia with relatively spared limb coordination — a clinical hallmark.

Flocculonodular lobe lesions (typically medulloblastoma in children, arising from the roof of the fourth ventricle) produce cerebellar-type nystagmus, dysequilibrium, and truncal ataxia, often with obstructive hydrocephalus from fourth ventricular compression.`
  },

  /* ═══════ BRAINSTEM ════════════════════════════════════════ */

  midbrain: {
    name: 'Midbrain (Mesencephalon)',
    lobe: 'Brainstem',
    color: '#E91E63',
    pos3d:   { x: 0,     y: -0.06, z: -0.31 },
    scale3d: { x: 0.33,  y:  0.28, z:  0.33 },
    mriLevels: [4,5,6],
    brief: 'CN III/IV, substantia nigra, red nucleus, superior/inferior colliculi, cerebral aqueduct, cerebral peduncles.',
    full: `The midbrain (mesencephalon) is the most superior part of the brainstem, ~2cm long, connecting the diencephalon to the pons. On axial MRI it has a characteristic "Mickey Mouse" appearance: the two cerebral peduncles form the "ears" and the tegmentum forms the "head." The cerebral aqueduct (of Sylvius) traverses its centre.

Tectum (dorsal): superior colliculi control reflexive orienting to visual stimuli (turning eyes/head toward sudden movement, targeting saccades via the superior colliculus-FEF pathway) and mediate the pupillary light reflex (optic nerve → pretectal nucleus → bilateral Edinger-Westphal → ciliary ganglion → constrictor pupillae). Inferior colliculi are obligatory auditory relay stations.

Tegmentum: contains the periaqueductal grey (PAG), the brain's endogenous pain control centre — stimulation produces opioid-independent analgesia by activating descending serotonergic/noradrenergic pathways to the spinal dorsal horn. Also contains the red nucleus (rubrospinal tract, mainly active in infancy), cranial nerve nuclei (CN III — oculomotor, CN IV — trochlear), and the decussation of the superior cerebellar peduncle.

Classic midbrain vascular syndromes: Weber (CN III palsy + contralateral hemiplegia — basal/peduncular lesion); Benedikt (CN III palsy + contralateral tremor — tegmental, red nucleus damage); Parinaud (upgaze paralysis, light-near dissociation, convergence-retraction nystagmus — dorsal lesion at superior colliculus/posterior commissure, typical of pineal region tumours).`
  },

  pons: {
    name: 'Pons',
    lobe: 'Brainstem',
    color: '#C2185B',
    pos3d:   { x: 0,     y: -0.31, z: -0.38 },
    scale3d: { x: 0.44,  y:  0.28, z:  0.33 },
    mriLevels: [2,3,4,5],
    brief: 'CN V-VIII, pontine respiratory centres, locus coeruleus; relay to cerebellum via middle cerebellar peduncle.',
    full: `The pons is the bulging central part of the brainstem. Its ventral surface bulges prominently due to the transverse pontocerebellar fibres (pontine nuclei → middle cerebellar peduncle → cerebellum) — the largest cerebellar peduncle, relaying corticopontocerebellar signals for the neocerebellum.

Cranial nerve nuclei in the pons: CN V (trigeminal — main sensory nucleus for tactile sensation; motor nucleus for jaw muscles); CN VI (abducens — lateral rectus, medial to the floor of the fourth ventricle); CN VII (facial — motor: facial expression; parasympathetic: lacrimal/salivary; taste: anterior 2/3 tongue); CN VIII (vestibulocochlear — cochlear nuclei at pontomedullary junction, vestibular nuclei).

Locus coeruleus (LC): compact nucleus in the dorsal pontine tegmentum containing ~15,000 noradrenergic neurons, the largest noradrenergic nucleus in the brain. It projects diffusely to virtually all brain regions (cortex, cerebellum, spinal cord) and is the brain's primary noradrenaline source. The LC is critical for arousal, stress response, and attentional modulation. It degenerates early in Parkinson's disease (Braak stage 2) and Alzheimer's disease.

Locked-in syndrome from bilateral ventral pontine infarct (basilar artery occlusion): destruction of all motor pathways (pyramidal, corticobulbar) renders the patient tetraplegic and anarthric, while preserving the reticular activating system in the tegmentum. The patient is fully conscious, can hear and understand everything, but can only communicate by voluntary vertical eye movements (midbrain-controlled upgaze is spared).`
  },

  medulla: {
    name: 'Medulla Oblongata',
    lobe: 'Brainstem',
    color: '#AD1457',
    pos3d:   { x: 0,     y: -0.56, z: -0.44 },
    scale3d: { x: 0.28,  y:  0.32, z:  0.28 },
    mriLevels: [0,1,2,3],
    brief: 'Controls vital functions — breathing, heart rate, blood pressure. Site of corticospinal decussation. CN IX–XII nuclei.',
    full: `The medulla oblongata is continuous with the spinal cord at the foramen magnum. It is indispensable for life — containing the cardiovascular and respiratory control centres whose bilateral destruction is immediately fatal.

Critical control centres in the reticular formation: dorsal respiratory group (nucleus tractus solitarius — inspiration); ventral respiratory group (nucleus ambiguus, pre-Bötzinger complex — rhythmic breathing pattern generation and forced expiration); cardiac centre (nucleus ambiguus via vagus — heart rate slowing); vasomotor centre (rostral ventrolateral medulla — sympathetic tone to blood vessels for blood pressure).

Cranial nerve nuclei: CN IX (glossopharyngeal — pharyngeal sensation, carotid body/sinus afferents, stylopharyngeus); CN X (vagus — parasympathetic to thorax and abdomen, pharyngeal/laryngeal muscles, visceral afferents); CN XI (accessory — sternomastoid and trapezius); CN XII (hypoglossal — tongue movements, in hypoglossal canal).

The pyramidal decussation occurs in the lower medulla: ~85% of corticospinal fibres cross, forming the lateral corticospinal tract of the spinal cord. This anatomical crossing explains why cortical lesions cause contralateral paralysis.

Lateral medullary syndrome (Wallenberg syndrome, posterior inferior cerebellar artery occlusion): ipsilateral Horner's, ipsilateral facial hemianalgesia (trigeminal), ipsilateral palatal/vocal cord/pharyngeal palsy (CN IX/X), ipsilateral ataxia (inferior cerebellar peduncle), contralateral body hemianalgesia (spinothalamic) — due to crossed sensory loss. One of the most recognisable vascular syndromes in neurology.`
  },

  /* ═══════ ADDITIONAL STRUCTURES ════════════════════════════ */

  pineal_gland: {
    name: 'Pineal Gland',
    lobe: 'Diencephalon',
    color: '#E8A020',
    pos3d:   { x: 0,     y:  0.03, z: -0.40 },
    scale3d: { x: 0.12,  y:  0.10, z:  0.12 },
    mriLevels: [7,8],
    brief: 'Neuroendocrine organ secreting melatonin — entrains circadian rhythm to light-dark cycles; calcifies with age.',
    full: `The pineal gland (epiphysis cerebri) is a small unpaired midline structure attached to the posterior third ventricle roof, lying in the quadrigeminal cistern above the superior colliculi. It is a circumventricular organ (outside the blood-brain barrier) and the brain's primary melatonin secretory gland.

The retinohypothalamic tract → suprachiasmatic nucleus (SCN) → paraventricular nucleus → spinal cord intermediolateral column → superior cervical ganglion → postganglionic sympathetic fibres → pineal gland. In darkness, noradrenaline from sympathetic terminals activates beta-adrenergic receptors, stimulating N-acetyltransferase (rate-limiting enzyme) → melatonin synthesis and secretion into CSF and blood. Light suppresses melatonin. Melatonin coordinates peripheral circadian clocks (liver, kidney, fat) and promotes sleep onset by lowering core body temperature.

Pineal calcification (acervuli, "brain sand") begins in puberty and is present in >90% of adults by age 30. It is a normal MRI/CT finding. Excessive calcification (pinealoma/pineocytoma) can cause obstructive hydrocephalus (blocking CSF flow at the aqueduct) and Parinaud syndrome (tectal plate compression).

Melatonin is used clinically for jet lag, circadian rhythm sleep disorders, and as an adjunct for sleep-onset insomnia. Melatonin receptors (MT1, MT2) are targets for ramelteon and tasimelteon (approved circadian rhythm disorder treatments).`
  },

  fornix: {
    name: 'Fornix',
    lobe: 'White Matter',
    color: '#C0C8D0',
    pos3d:   { x: 0,     y:  0.22, z: -0.06 },
    scale3d: { x: 0.16,  y:  0.14, z:  0.75 },
    mriLevels: [9,10,11,12],
    brief: 'C-shaped white matter tract — main output of the hippocampus to the mammillary bodies and septal nuclei (Papez circuit).',
    full: `The fornix is a C-shaped white matter bundle that is the principal output tract of the hippocampus, carrying fibres from the subiculum and CA1 to subcortical targets. It mirrors the embryological rotation of the hippocampus, arching over the thalamus on both sides and joining at the midline as the hippocampal commissure.

Anatomy: hippocampal fimbria → crura fornicis (beneath splenium of CC) → body of fornix (under the corpus callosum) → columns of fornix (descending anterior to interventricular foramen) → precommissural fornix (to septal nuclei and basal forebrain) and postcommissural fornix (to mammillary bodies via mammillothalamic tract).

The postcommissural fornix is the critical memory limb — carrying the hippocampal output that enters the Papez circuit. Bilateral fornix lesions cause anterograde amnesia comparable to hippocampal lesions. Unilateral fornix lesions produce mild, often transient amnesia due to bilateral hippocampal projections.

The fornix is visible on midsagittal MRI as a thin white arc beneath the corpus callosum. Fornix volume measured on structural MRI is a sensitive biomarker of hippocampal atrophy and is reduced early in Alzheimer's disease, temporal lobe epilepsy, and after transient global amnesia. It is an important surgical landmark — damage during third ventricular surgery can cause severe amnesia.`
  },

  anterior_commissure: {
    name: 'Anterior Commissure',
    lobe: 'White Matter',
    color: '#A0A8B0',
    pos3d:   { x: 0,     y: -0.06, z:  0.22 },
    scale3d: { x: 0.55,  y:  0.10, z:  0.12 },
    mriLevels: [10,11],
    brief: 'Connects anterior temporal lobes and olfactory cortices; visible as a small round white matter bundle at the base of the septum pellucidum.',
    full: `The anterior commissure (AC) is a compact bundle of white matter crossing the midline at the base of the septum pellucidum, just anterior to the columns of the fornix. It connects homologous areas of both temporal lobes (olfactory cortex, anterior temporal pole, middle and inferior temporal gyri) and the olfactory bulbs.

On axial MRI at the level of the globus pallidus/basal forebrain, the anterior commissure appears as a small round white matter "dot" at the midline — a reliable neuroanatomical landmark used in MRI-space stereotactic surgery (the AC-PC line, connecting anterior commissure to posterior commissure, defines the standard axial plane for deep brain stimulation targeting).

The anterior commissure is enlarged (by ~10%) in individuals who underwent corpus callosum agenesis, suggesting compensatory expansion for interhemispheric transfer. In split-brain patients with callosotomy sparing the anterior commissure, some non-verbal interhemispheric transfer persists via this route.

The AC is much smaller in humans than in most mammals — reflecting the evolutionary expansion of the corpus callosum as the neocortex enlarged, taking over most interhemispheric communication. In humans, the AC primarily serves the older olfactory and limbic temporal connections.`
  },
};

/* ── Lobe groupings ─────────────────────────────────────────── */
window.BRAIN_LOBES = [
  { id: 'Frontal Lobe',                   color: '#3A7BD5' },
  { id: 'Parietal Lobe',                  color: '#27AE60' },
  { id: 'Temporal Lobe',                  color: '#E67E22' },
  { id: 'Occipital Lobe',                 color: '#C0392B' },
  { id: 'Limbic System',                  color: '#8E44AD' },
  { id: 'Diencephalon',                   color: '#E74C3C' },
  { id: 'Basal Ganglia',                  color: '#F0A500' },
  { id: 'White Matter',                   color: '#BDC3C7' },
  { id: 'Ventricular System',             color: '#5DADE2' },
  { id: 'Cerebellum',                     color: '#1ABC9C' },
  { id: 'Brainstem',                      color: '#E91E63' },
  { id: 'Midbrain',                       color: '#E91E63' },
  { id: 'Temporal-Parietal Junction',     color: '#16A085' },
];

/* ── MRI axial slice level definitions ──────────────────────── */
window.MRI_LEVELS = [
  { label: 'Foramen Magnum / Medulla',             structures: ['medulla'] },
  { label: 'Lower Medulla + Cerebellar Tonsils',   structures: ['medulla', 'cerebellar_hemispheres'] },
  { label: 'Pons + Cerebellum + 4th Ventricle',    structures: ['pons', 'cerebellar_hemispheres', 'vermis'] },
  { label: 'Mid-Pons + Cerebellum',                structures: ['pons', 'cerebellar_hemispheres', 'vermis'] },
  { label: 'Upper Pons + Sup. Cerebellar Peduncles', structures: ['pons', 'cerebellar_hemispheres'] },
  { label: 'Inferior Colliculus Level',            structures: ['midbrain', 'cerebellar_hemispheres'] },
  { label: 'Superior Colliculus + Substantia Nigra', structures: ['midbrain', 'substantia_nigra'] },
  { label: 'Mammillary Bodies + Amygdala + Hippocampus', structures: ['mammillary_bodies', 'amygdala', 'hippocampus', 'thalamus', 'parahippocampal'] },
  { label: 'Lower Thalamus + Amygdala + Hippocampus', structures: ['thalamus', 'amygdala', 'hippocampus', 'hypothalamus', 'subthalamic_nucleus'] },
  { label: 'Basal Ganglia (Inferior) + Thalamus',  structures: ['caudate', 'putamen', 'globus_pallidus', 'thalamus', 'internal_capsule', 'insula'] },
  { label: 'Basal Ganglia (Main Level) + Internal Capsule', structures: ['caudate', 'putamen', 'globus_pallidus', 'thalamus', 'internal_capsule', 'lateral_ventricles', 'insula', 'anterior_commissure'] },
  { label: 'Upper Basal Ganglia + Lateral Ventricles', structures: ['caudate', 'lateral_ventricles', 'corpus_callosum', 'cingulate_cortex', 'fornix', 'insula', 'auditory_cortex', 'wernickes_area'] },
  { label: 'Lateral Ventricle Bodies + Corpus Callosum', structures: ['lateral_ventricles', 'corpus_callosum', 'cingulate_cortex', 'fornix'] },
  { label: 'Corona Radiata + Corpus Callosum Body', structures: ['corpus_callosum', 'cingulate_cortex', 'motor_cortex', 'somatosensory_cortex', 'prefrontal_cortex'] },
  { label: 'Centrum Semiovale',                    structures: ['motor_cortex', 'sma', 'premotor_cortex', 'somatosensory_cortex', 'superior_parietal', 'prefrontal_cortex'] },
  { label: 'Superior Corona Radiata',              structures: ['motor_cortex', 'sma', 'somatosensory_cortex', 'superior_parietal'] },
  { label: 'Paracentral Lobule',                   structures: ['motor_cortex', 'somatosensory_cortex', 'superior_parietal'] },
  { label: 'Vertex',                               structures: ['motor_cortex', 'somatosensory_cortex'] },
];
