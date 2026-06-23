/* histology-slide-ids.js
   Slide ID cards — key structures and descriptions for each virtual slide.
   Content derived from the department slide reference guide (PDF) and
   standard histology knowledge.
   Integrated into VirtualSlidesQuiz as a post-submit info card.
*/

var SLIDE_IDS = {

  // ── CONNECTIVE TISSUE / BONE / MUSCLE (A slides) ──────────────────────────

  'A5': {
    location: 'Tendon — dense regular connective tissue',
    structures: [
      'Bundles of collagen fibres arranged strictly in parallel',
      'Nuclei of fibroblasts (tenocytes) — flattened, between fibre bundles',
      'Endotenon — thin connective tissue between fascicles',
      'Peritenon — outer connective tissue sheath'
    ]
  },

  'A11': {
    location: 'Fibrocartilage',
    structures: [
      'Chondrocytes in lacunae (often in rows)',
      'Extracellular matrix with abundant thick type I collagen fibres',
      'Matrix appears fibrous — unlike hyaline or elastic cartilage',
      'No perichondrium'
    ]
  },

  'A12': {
    location: 'Endochondral ossification — epiphyseal plate (bones of extremities)',
    structures: [
      'Zone of reserve cartilage (resting — small scattered chondrocytes)',
      'Zone of cell proliferation (chondrocyte columns — isogenous groups)',
      'Zone of cell hypertrophy (enlarged chondrocytes)',
      'Zone of provisional calcification (matrix mineralizes)',
      'Zone of resorption — primary ossification (vascular invasion)',
      'Osteoblasts depositing bone matrix on calcified cartilage spicules',
      'Primary bone marrow cavity forming'
    ],
    description: 'Periosteal activity builds bone from outside; endochondral ossification proceeds internally through the plate.'
  },

  'A14': {
    location: 'Intramembranous ossification — flat bones (skull, face, mandible, clavicle)',
    structures: [
      'Condensed mesenchyme (future periosteum)',
      'Bone trabeculae (woven bone forming)',
      'Osteoblasts — lining trabeculae, producing osteoid',
      'Osteocytes — trapped in lacunae within bone matrix',
      'Bone matrix (osteoid — pink, uncalcified; blue/basophilic when calcified)',
      'Osteoclast in Howship\'s lacuna (large, multinucleated, resorbing bone)'
    ],
    description: 'No cartilage precursor — mesenchyme cells differentiate directly into osteoblasts.'
  },

  'A15': {
    location: 'Haversian compact bone — diaphysis of long bones',
    structures: [
      'Periosteum (outer fibrous + inner cellular layer)',
      'Outer circumferential lamellae',
      'Osteon / Haversian system — concentric lamellae around canal',
      'Haversian canal — contains vessel and nerve',
      'Osteocyte in lacuna (with canaliculi)',
      'Volkmann\'s (perforating) canals — link Haversian canals',
      'Interstitial lamellae (remnants of old osteons)',
      'Inner circumferential lamellae (near endosteum)'
    ]
  },

  'A16': {
    location: 'Lamellar spongy bone',
    structures: [
      'Trabeculae composed of lamellae',
      'Osteocytes in lacunae within trabeculae',
      'Osteoblasts on trabecula surface',
      'Bone marrow (haematopoietic red marrow or adipose yellow marrow)',
      'Adipocytes in yellow marrow'
    ]
  },

  'A17': {
    location: 'Smooth muscle — Myometrium of Uterus',
    structures: [
      'Smooth muscle cells (myocytes) — spindle-shaped',
      'Centrally placed elongated cigar-shaped nucleus',
      'Longitudinal section: thin parallel cells, varying width',
      'Cross section: cells cut at different levels — variable size',
      'Endomysium — fine connective tissue between cells',
      'No cross-striations'
    ]
  },

  'A18': {
    location: 'Skeletal muscle — cross and longitudinal sections',
    structures: [
      'Cross-striations (A and I bands) in longitudinal section',
      'Peripheral nuclei (beneath sarcolemma)',
      'Endomysium (around individual fibres)',
      'Perimysium (around fascicles)',
      'Cross section: myofibrils appear as dots; sarcolemma visible',
      'Polygonal fibre profiles in cross section'
    ]
  },

  'A19': {
    location: 'Skeletal muscle — longitudinal section',
    structures: [
      'A band (anisotropic — dark, contains myosin + actin overlap)',
      'I band (isotropic — light, actin only)',
      'H band (within A band — myosin only)',
      'Z line / Z disc (bisects I band)',
      'Sarcomere = Z line to Z line (functional unit)',
      'Peripheral nucleus beneath sarcolemma',
      'Mitochondria between myofibrils'
    ]
  },

  // ── CIRCULATORY SYSTEM (F slides) ─────────────────────────────────────────

  'F1': {
    location: 'Heart — ventricular wall',
    structures: [
      'Myocardium — cardiomyocytes with centrally placed nuclei',
      'Intercalated discs — step-like junctions (fascia adherens, desmosomes, gap junctions)',
      'Branching and anastomosing fibres',
      'Endomysium with capillaries',
      'Endocardium (inner layer — endothelium + subendothelial CT)',
      'Epicardium (outer layer — mesothelium + CT + fat)'
    ]
  },

  'F2': {
    location: 'Large elastic artery (aorta) — cross section',
    structures: [
      'Tunica intima — endothelium + subendothelial connective tissue',
      'Internal elastic lamina (thickened)',
      'Tunica media — many elastic lamellae + smooth muscle + collagen',
      'External elastic lamina',
      'Tunica adventitia — connective tissue, vasa vasorum, nervi vasorum'
    ]
  },

  'F3': {
    location: 'Large elastic artery (aorta) — longitudinal section',
    structures: [
      'Elastic lamellae — stained dark purple/red by resorcin-fuchsin or orcein',
      'Smooth muscle cells between lamellae',
      'Tunica media dominated by elastic elements',
      'Tunica intima (inner) and adventitia (outer) visible'
    ]
  },

  'F4': {
    location: 'Small muscular arteries and veins',
    structures: [
      'Artery: thicker wall, rounder lumen, prominent internal elastic lamina',
      'Vein: thinner wall, irregular collapsed lumen',
      'Tunica intima — endothelium',
      'Tunica media — smooth muscle (artery has many more layers)',
      'Tunica adventitia — connective tissue'
    ]
  },

  'F5': {
    location: 'Small muscular arteries and veins — elastin stain',
    structures: [
      'Internal elastic lamina highlighted by elastin stain',
      'Elastic fibres in tunica media',
      'Contrast between artery (thick, elastic-rich) and vein (thin, few elastic fibres)'
    ]
  },

  'F6': {
    location: 'Large vein — Vena cava inferior',
    structures: [
      'Tunica intima — endothelium + subendothelial connective tissue',
      'Tunica media — thin, smooth muscle cells (less than arteries)',
      'Tunica adventitia — thick, longitudinal smooth muscle bundles (distinctive for large veins)',
      'Vasa vasorum in adventitia'
    ]
  },

  // ── LYMPHOID SYSTEM (G slides) ─────────────────────────────────────────────

  'G1': {
    location: 'Lymph node',
    structures: [
      'Fibrous capsule',
      'Subcapsular (marginal) sinus',
      'Cortex — lymphoid follicles (B-cell zone)',
      'Primary follicles (uniform small lymphocytes)',
      'Secondary follicles with germinal centres',
      'Paracortex (T-cell zone) — high endothelial venules (HEV)',
      'Medullary cords (plasma cells + macrophages)',
      'Medullary sinuses',
      'Hilum — artery, vein, efferent lymphatic'
    ]
  },

  'G2': {
    location: 'Spleen',
    structures: [
      'Fibrous capsule with trabeculae',
      'White pulp — lymphoid tissue around central artery',
      'Periarteriolar lymphoid sheath (PALS) — T-cell zone',
      'Lymphoid follicle — B-cell zone',
      'Marginal zone',
      'Red pulp — splenic sinusoids + splenic cords (Billroth cords)',
      'Central artery (eccentrically placed in PALS)'
    ]
  },

  'G3': {
    location: 'Spleen — silver impregnation',
    structures: [
      'Reticular fibres (type III collagen) — stained black',
      'Reticular cell bodies',
      'Network supporting red pulp cords and white pulp'
    ]
  },

  'G4': {
    location: 'Thymus — child',
    structures: [
      'Fibrous capsule',
      'Fibrous septa dividing into lobules',
      'Cortex — densely packed T lymphocytes (thymocytes) — dark staining',
      'Medulla — fewer lymphocytes, reticular epithelial cells — lighter staining',
      'Hassall corpuscles (concentric whorls of keratinized epithelial cells)',
      'Reticular epithelial cells (network supporting thymocytes)',
      'No germinal centres',
      'No afferent lymphatics'
    ]
  },

  'G5': {
    location: 'Thymus — adult (involuted)',
    structures: [
      'Lobules largely replaced by adipose tissue',
      'Residual cortex and medulla (islands)',
      'Hassall corpuscles (often enlarged or calcified)',
      'Fatty infiltration throughout',
      'Fibrous tissue increase'
    ]
  },

  // ── ENDOCRINE SYSTEM (E slides) ────────────────────────────────────────────

  'E1': {
    location: 'Pituitary gland (Hypophysis)',
    structures: [
      'Adenohypophysis (anterior lobe): acidophils (GH, PRL), basophils (TSH, FSH, LH, ACTH), chromophobes',
      'Pars intermedia — colloid cysts, melanotrophs',
      'Neurohypophysis (posterior lobe) — pituicytes, axon terminals, Herring bodies',
      'Rich sinusoidal capillary network'
    ]
  },

  'E2': {
    location: 'Thyroid gland',
    structures: [
      'Spherical follicles filled with colloid (thyroglobulin — pink, homogeneous)',
      'Follicular cells (principal cells) — cuboidal to columnar; height reflects activity',
      'Resorption vacuoles at colloid-cell border (active gland)',
      'Parafollicular cells (C cells) — pale, between follicles (calcitonin)',
      'Fibrous capsule with septa'
    ]
  },

  'E3': {
    location: 'Parathyroid gland',
    structures: [
      'Chief (principal) cells — small, pale, polygonal, most numerous (PTH)',
      'Oxyphilic cells — larger, granular eosinophilic cytoplasm (in adults)',
      'Adipose cells (increase with age, may be >50%)',
      'Fibrous capsule and internal septa',
      'Rich capillary network'
    ]
  },

  'E4': {
    location: 'Suprarenal (adrenal) gland',
    structures: [
      'Fibrous capsule',
      'Zona glomerulosa — curved cell clusters, mineralocorticoids (aldosterone)',
      'Zona fasciculata — radial columns of spongiocytes (pale, lipid-rich), glucocorticoids',
      'Zona reticularis — irregular cords of compact cells, androgens',
      'Medulla — chromaffin cells (epinephrine + norepinephrine), ganglion cells'
    ]
  },

  'E5': {
    location: 'Pancreas — exocrine + endocrine',
    structures: [
      'Exocrine: serous acini (basal basophilia, apical eosinophilic zymogen granules)',
      'Centroacinar cells (pale, within acinus lumen)',
      'Intercalated ducts',
      'Intralobular and interlobular ducts',
      'Islets of Langerhans — lighter-staining, scattered clusters (endocrine)'
    ]
  },

  'E6': {
    location: 'Pancreas — Islets of Langerhans',
    structures: [
      'Beta cells (B cells) — central, stained dark by aldehyde fuchsine (insulin)',
      'Alpha cells (A cells) — peripheral, lighter (glucagon)',
      'Delta cells (D cells) — somatostatin',
      'Rich intra-islet capillary network',
      'Surrounding exocrine acini'
    ]
  },

  // ── DIGESTIVE SYSTEM (B slides) ────────────────────────────────────────────

  'B1': {
    location: 'Lip',
    structures: [
      'Skin surface: keratinized stratified squamous epithelium, hair follicles, sebaceous glands, eccrine sweat glands',
      'Vermilion zone: thin keratinized epithelium, no glands, tall vascular papillae (reddish appearance)',
      'Oral mucosa surface: non-keratinized stratified squamous epithelium',
      'Orbicularis oris muscle (skeletal — core)',
      'Minor salivary glands (labial glands) in submucosa'
    ]
  },

  'B2': {
    location: 'Tooth — ground (undecalcified) section',
    structures: [
      'Enamel — outer crown layer; prismatic structure (enamel rods)',
      'Dentino-enamel junction (DEJ)',
      'Dentin — main body; dentinal tubules radiating from pulp',
      'Pulp cavity — connective tissue, vessels, nerves',
      'Cementum — covers root; no canals',
      'Incremental lines of Retzius (enamel) and Owen (dentin)'
    ]
  },

  'B3': {
    location: 'Tongue — anterior body, dorsum',
    structures: [
      'Stratified squamous keratinized epithelium (dorsum)',
      'Filiform papillae — most numerous, pointed, no taste buds (mechanical)',
      'Fungiform papillae — mushroom-shaped, scattered, have taste buds',
      'Taste buds — oval clusters of gustatory + supporting cells in epithelium',
      'Intrinsic skeletal muscle (three orientations — longitudinal, transverse, vertical)',
      'Minor salivary glands (anterior lingual / glands of Blandin-Nuhn)'
    ]
  },

  'B4': {
    location: 'Tongue — root (radix)',
    structures: [
      'Non-keratinized stratified squamous epithelium',
      'Lingual tonsil — lymphoid follicles with germinal centres',
      'Tonsillar crypts',
      'Mucous minor salivary glands (posterior lingual glands)'
    ]
  },

  'B5': {
    location: 'Palatine tonsil',
    structures: [
      'Non-keratinized stratified squamous epithelium',
      'Deep crypts (tonsillar crypts) lined by epithelium',
      'Lymphoid follicles with germinal centres (B-cell zone)',
      'Diffuse lymphoid tissue (T-cell zone)',
      'Partial fibrous capsule',
      'Minor salivary glands (deep to capsule)'
    ]
  },

  'B6': {
    location: 'Parotid gland — purely serous',
    structures: [
      'Serous acini — pyramidal cells, basal basophilia, apical eosinophilic zymogen granules',
      'Intercalated ducts (narrow, cuboidal)',
      'Striated ducts — columnar cells with basal striations (ion transport)',
      'Interlobular excretory duct (stratified columnar)',
      'Adipose cells increasing with age',
      'Fibrous septa between lobules'
    ]
  },

  'B7': {
    location: 'Submandibular gland — mixed sero-mucous',
    structures: [
      'Serous acini (majority — dark, granular)',
      'Mucous acini (pale, flat nuclei at base)',
      'Serous demilunes (Giannuzzi crescents) capping mucous acini',
      'Striated ducts (prominent)',
      'Intercalated ducts (shorter than parotid)',
      'Interlobular excretory ducts'
    ]
  },

  'B8': {
    location: 'Sublingual gland — predominantly mucous',
    structures: [
      'Predominantly mucous acini — pale, foamy cytoplasm, flattened basal nuclei',
      'Serous demilunes (less common than submandibular)',
      'Short intercalated ducts',
      'Short striated ducts (poorly developed)',
      'Fibrous septa'
    ]
  },

  'B9': {
    location: 'Pancreas — exocrine portion',
    structures: [
      'Serous acini — basal basophilia (rER), apical zymogen granules',
      'Centroacinar cells — pale, within acinus lumen (begin intercalated duct)',
      'Intercalated ducts',
      'Intralobular and interlobular ducts',
      'Islets of Langerhans — lighter clusters of endocrine cells'
    ]
  },

  'B10': {
    location: 'Oesophagus',
    structures: [
      'Mucosa: stratified squamous non-keratinized epithelium',
      'Lamina propria with oesophageal cardiac glands (lower third)',
      'Muscularis mucosae — longitudinal smooth muscle (unique to oesophagus)',
      'Submucosa — oesophageal glands proper (mucous, in upper/middle)',
      'Tunica muscularis: inner circular + outer longitudinal',
      '  - Upper 1/3: skeletal muscle',
      '  - Middle 1/3: mixed skeletal and smooth',
      '  - Lower 1/3: smooth muscle only',
      'Adventitia (no serosa)'
    ]
  },

  'B11': {
    location: 'Stomach — cardia',
    structures: [
      'Surface mucous cells — columnar, apical mucin',
      'Gastric pits (shallow)',
      'Cardiac glands — coiled, mucous, short',
      'Lamina propria',
      'Muscularis mucosae',
      'Submucosa'
    ]
  },

  'B12': {
    location: 'Stomach — fundus',
    structures: [
      'Surface mucous cells (columnar)',
      'Gastric pits (shallow, ~1/4 gland length)',
      'Fundic glands — straight tubular, extend full mucosal depth',
      'Parietal (oxyntic) cells — large, eosinophilic, central nucleus, produce HCl + intrinsic factor',
      'Chief (peptic/zymogenic) cells — basophilic base, apical zymogen granules, produce pepsinogen',
      'Mucous neck cells (between parietal cells)',
      'Muscularis mucosae (two layers)',
      'Oblique smooth muscle layer (innermost of muscularis externa)'
    ]
  },

  'B13': {
    location: 'Stomach — pylorus',
    structures: [
      'Deep gastric pits (~1/2 mucosal depth)',
      'Pyloric glands — coiled, branched, mucous (no chief cells, few parietal)',
      'G cells (enteroendocrine — gastrin production)',
      'Thick pyloric sphincter — inner circular smooth muscle thickening',
      'Transition to duodenal mucosa'
    ]
  },

  'B14': {
    location: 'Duodenum',
    structures: [
      'Plicae circulares (permanent folds)',
      'Villi — tall, leaf or tongue-shaped',
      'Enterocytes — tall columnar, brush border (microvilli)',
      'Goblet cells',
      'Crypts of Lieberkühn',
      'Brunner\'s glands in submucosa — mucous, produce alkaline secretion',
      'Smooth muscle (Meissner\'s plexus in submucosa; Auerbach\'s between muscle layers)',
      'Duodenal lymphoid tissue'
    ]
  },

  'B15': {
    location: 'Jejunum — small intestine',
    structures: [
      'Plicae circulares (tallest and most numerous in jejunum)',
      'Tall finger-like villi',
      'Enterocytes with brush border',
      'Goblet cells',
      'Crypts of Lieberkühn',
      'Paneth cells at crypt base (eosinophilic apical granules — antimicrobial)',
      'Muscularis mucosae',
      'No Brunner\'s glands (duodenum only)'
    ]
  },

  'B16': {
    location: 'Large intestine — colon',
    structures: [
      'No villi (flat luminal surface)',
      'Simple columnar epithelium with abundant goblet cells',
      'Straight crypts of Lieberkühn (long, numerous)',
      'Lamina propria with lymphoid nodules',
      'Muscularis externa — taeniae coli (incomplete outer longitudinal layer)',
      'Epiploic appendages (peritoneal fat tags on serosa)'
    ]
  },

  'B17': {
    location: 'Appendix',
    structures: [
      'Narrow irregular lumen (often obliterated by lymphoid tissue)',
      'Simple columnar epithelium with goblet cells',
      'Crypts of Lieberkühn (poorly developed)',
      'Abundant lymphoid follicles — may span mucosa + submucosa',
      'Germinal centres in secondary follicles',
      'Complete muscularis externa (no taeniae)',
      'Serosa'
    ]
  },

  'B18': {
    location: 'Liver',
    structures: [
      'Hepatic lobules — hexagonal, central vein at centre, portal triads at corners',
      'Hepatocytes — polygonal, eosinophilic, often binucleate',
      'Hepatic sinusoids — between plates of hepatocytes',
      'Kupffer cells — macrophages lining sinusoids (phagocytic)',
      'Space of Disse — between hepatocytes and sinusoidal endothelium',
      'Portal triads — portal vein branch, hepatic artery branch, bile duct',
      'Central (hepatic) vein'
    ]
  },

  'B19': {
    location: 'Liver — PAS stain',
    structures: [
      'Glycogen in hepatocytes — magenta/purple PAS-positive granules',
      'Basement membranes — PAS-positive (sinusoidal walls, bile ducts)',
      'Perisinusoidal distribution of glycogen',
      'Zone 1 hepatocytes (periportal) richest in glycogen',
      'Bile canaliculi not directly visible but can be inferred'
    ]
  },

  'B20': {
    location: 'Gallbladder',
    structures: [
      'Simple columnar epithelium — tall cells with microvilli (concentration function)',
      'Rokitansky-Aschoff sinuses — epithelial invaginations into muscularis',
      'Lamina propria — no submucosa (distinct from GI tract)',
      'Muscularis — oblique smooth muscle bundles (no distinct layers)',
      'Perimuscular connective tissue',
      'Serosa (peritoneal surface) or adventitia (hepatic surface)'
    ]
  },

  'B21': {
    location: 'Anus',
    structures: [
      'Zona columnaris: simple columnar epithelium, anal columns of Morgagni',
      'Pectinate (dentate) line — mucocutaneous junction',
      'Zona alba: stratified squamous non-keratinized epithelium',
      'Zona cutanea: stratified squamous keratinized epithelium (skin)',
      'Internal anal sphincter — smooth muscle',
      'External anal sphincter — skeletal muscle',
      'Anal sinuses, valves, and glands'
    ]
  },

  // ── RESPIRATORY SYSTEM (D slides) ──────────────────────────────────────────

  'D1': {
    location: 'Epiglottis',
    structures: [
      'Elastic cartilage — core (elastic fibres visible in special stains)',
      'Lingual (anterior) surface: stratified squamous non-keratinized epithelium',
      'Laryngeal (posterior) surface: pseudostratified ciliated columnar (respiratory) epithelium',
      'Seromucous glands in lamina propria',
      'Taste buds on lingual surface (some)'
    ]
  },

  'D2': {
    location: 'Larynx',
    structures: [
      'True vocal cord (plica vocalis): stratified squamous epithelium, vocalis muscle, elastic ligament',
      'False vocal cord (plica vestibularis): respiratory epithelium, seromucous glands',
      'Hyaline cartilage (thyroid, cricoid) and elastic cartilage (arytenoid tip, epiglottis)',
      'Pseudostratified ciliated columnar epithelium in non-vibrating regions',
      'Ventricle between true and false cords'
    ]
  },

  'D3': {
    location: 'Trachea',
    structures: [
      'Pseudostratified ciliated columnar (respiratory) epithelium',
      'Goblet cells — mucus secretion',
      'Basement membrane (prominent)',
      'Lamina propria',
      '16–20 C-shaped hyaline cartilage rings',
      'Trachealis muscle — smooth muscle bridging the open posterior end',
      'Seromucous glands in submucosa',
      'Adventitia'
    ]
  },

  'D4': {
    location: 'Lung',
    structures: [
      'Bronchi — cartilage plates, goblet cells, smooth muscle, submucosal glands',
      'Bronchioles — no cartilage, club (Clara) cells, smooth muscle',
      'Alveoli — thin walls: type I pneumocytes (flat, gas exchange) + type II pneumocytes (cuboidal, surfactant)',
      'Alveolar macrophages (dust cells) — in alveoli and interstitium',
      'Pulmonary capillaries in alveolar walls',
      'Visceral pleura (outer surface)'
    ]
  },

  // ── URINARY SYSTEM (C slides) ───────────────────────────────────────────────

  'C1': {
    location: 'Kidney',
    structures: [
      'Cortex: renal corpuscles (glomerulus + Bowman\'s capsule)',
      'Proximal convoluted tubules — large, eosinophilic, brush border, indistinct lumen',
      'Distal convoluted tubules — smaller, paler, no brush border, clear lumen',
      'Macula densa (DCT cells abutting juxtaglomerular apparatus)',
      'Juxtaglomerular (granular) cells in afferent arteriole wall',
      'Medullary rays in cortex',
      'Medulla: collecting ducts, thin and thick limbs of loop of Henle',
      'Fibrous capsule'
    ]
  },

  'C2': {
    location: 'Kidney — WvG / Alkaline phosphatase stain',
    structures: [
      'Proximal tubule brush border stained dark (high alkaline phosphatase activity)',
      'Distal tubules negative (contrast with PCT)',
      'Glomeruli — weakly positive or negative',
      'Collecting ducts — negative',
      'Method distinguishes proximal from distal tubules clearly'
    ]
  },

  'C3': {
    location: 'Ureter',
    structures: [
      'Transitional epithelium (urothelium) — umbrella cells on surface',
      'Lamina propria — dense connective tissue',
      'Muscularis: inner longitudinal + outer circular smooth muscle (proximal ureter)',
      'Add outer longitudinal layer (distal/pelvic ureter)',
      'Adventitia'
    ]
  },

  'C4': {
    location: 'Urinary bladder',
    structures: [
      'Transitional epithelium (urothelium) — 6–7 layers when empty; 2–3 when distended',
      'Umbrella (facet) cells — dome-shaped apical cells with asymmetric unit membrane',
      'Lamina propria',
      'Detrusor muscle — three interlacing smooth muscle layers (no clear separation)',
      'Serosa (superior) or adventitia (inferior/posterior)'
    ]
  },

  'C5': {
    location: 'Urethra',
    structures: [
      'Epithelium varies by region: transitional (proximal) → pseudostratified → stratified squamous (distal)',
      'Lamina propria',
      'Smooth muscle layers',
      'Glands of Littré — mucous glands opening into urethral lumen',
      'Lacunae of Morgagni (epithelial recesses)'
    ]
  },

  // ── MALE REPRODUCTIVE (C6–C10) ─────────────────────────────────────────────

  'C6': {
    location: 'Testis',
    structures: [
      'Tunica albuginea — thick dense fibrous capsule',
      'Seminiferous tubules — spermatogenic epithelium + Sertoli cells',
      'Spermatogonia — basal layer (stem cells)',
      'Primary spermatocytes — large, in meiosis I',
      'Secondary spermatocytes, spermatids, spermatozoa (towards lumen)',
      'Sertoli cells — tall, pale nucleus with prominent nucleolus; nurse/support cells',
      'Interstitial Leydig cells — clusters between tubules, eosinophilic, produce testosterone',
      'Reinke crystals in Leydig cells (adults)'
    ]
  },

  'C7': {
    location: 'Epididymis',
    structures: [
      'Pseudostratified columnar epithelium with long stereocilia (non-motile microvilli)',
      'Principal cells — tall, with stereocilia (secretion and absorption)',
      'Basal cells — small, round, at base (stem cells)',
      'Spermatozoa in lumen (maturing)',
      'Thin inner circular smooth muscle',
      'Dense connective tissue stroma between tubules'
    ]
  },

  'C8': {
    location: 'Seminal vesicle',
    structures: [
      'Highly folded mucosa — pseudostratified columnar secretory epithelium',
      'Secretory cells — pale cytoplasm (secrete fructose-rich fluid)',
      'Inner circular + outer longitudinal smooth muscle',
      'Fibromuscular stroma',
      'Yellow-brown lipochrome pigment granules (older specimens)'
    ]
  },

  'C9': {
    location: 'Spermatic cord',
    structures: [
      'Ductus (vas) deferens — pseudostratified columnar epithelium + stereocilia; thick 3-layer smooth muscle',
      'Pampiniform venous plexus (thin-walled veins, multiple)',
      'Testicular artery (thick wall)',
      'Lymphatic vessels',
      'Cremasteric muscle (skeletal)',
      'Connective tissue fasciae'
    ]
  },

  'C10': {
    location: 'Prostate',
    structures: [
      'Tubuloalveolar glands — variable size and shape, irregular folded lumen',
      'Tall columnar secretory cells',
      'Basal cells (beneath secretory cells)',
      'Corpora amylacea — lamellated concentric bodies in gland lumen',
      'Fibromuscular stroma — abundant smooth muscle + collagen',
      'Fibrous capsule'
    ]
  },

  // ── FEMALE REPRODUCTIVE (C11–C16) ──────────────────────────────────────────

  'C11': {
    location: 'Ovary',
    structures: [
      'Germinal epithelium — modified peritoneum (cuboidal)',
      'Tunica albuginea — dense fibrous layer',
      'Cortex: primordial follicles (oocyte + flat follicular cells)',
      'Primary follicles (cuboidal granulosa cells)',
      'Secondary follicles (multi-layered granulosa + theca)',
      'Graafian (mature) follicle — large antrum, cumulus oophorus, zona pellucida',
      'Atretic follicles',
      'Medulla — fibrovascular stroma'
    ]
  },

  'C12': {
    location: 'Ovary — corpus luteum',
    structures: [
      'Granulosa lutein cells — large, pale, abundant cytoplasm, central nucleus (progesterone)',
      'Theca lutein cells — smaller, darker, peripherally located (estrogen)',
      'Ingrowth of connective tissue septa with capillaries',
      'Central coagulum (fibrin/blood clot)',
      'Lipid droplets in luteal cells'
    ]
  },

  'C13': {
    location: 'Uterine tube — isthmus (fallopian tube)',
    structures: [
      'Simple columnar epithelium with cilia (ciliated cells) and secretory (peg/intercalated) cells',
      'Ciliated cells: transport ovum toward uterus',
      'Secretory cells: nourish ovum',
      'Thin lamina propria',
      'Inner circular + outer longitudinal smooth muscle',
      'Serosa'
    ]
  },

  'C14': {
    location: 'Uterus — body (fundus)',
    structures: [
      'Endometrium: simple columnar epithelium + uterine glands (straight in proliferative; coiled in secretory)',
      'Stratum functionale (shed during menstruation)',
      'Stratum basale (permanent, regenerates)',
      'Spiral arteries in functional layer',
      'Myometrium — thick smooth muscle (3 ill-defined layers)',
      'Perimetrium (serosa)'
    ]
  },

  'C15': {
    location: 'Uterus — cervix (exocervix)',
    structures: [
      'Exocervix: stratified squamous non-keratinized epithelium',
      'Squamocolumnar junction (transformation zone)',
      'Endocervix: simple columnar mucus-secreting epithelium',
      'Cervical crypts (branched glands)',
      'Dense fibrous stroma (little smooth muscle)',
      'Nabothian cysts (mucus-filled retention cysts)'
    ]
  },

  'C16': {
    location: 'Vagina',
    structures: [
      'Stratified squamous non-keratinized epithelium (thick — varies with cycle)',
      'Glycogen-rich cells (pale, particularly mid-cycle)',
      'Lamina propria — dense CT, rich in elastic fibres and venous plexus',
      'Muscularis — inner circular + outer longitudinal smooth muscle',
      'Adventitia',
      'No glands (lubrication by cervical secretion + transudation)'
    ]
  },

  // ── SKIN (H slides) ────────────────────────────────────────────────────────

  'H1': {
    location: 'Thick skin — palm / sole',
    structures: [
      'Stratum basale (germinativum) — mitotically active, melanocytes',
      'Stratum spinosum — prickle cells with desmosomes',
      'Stratum granulosum — keratohyaline granules (prominent)',
      'Stratum lucidum — clear homogeneous layer (ONLY in thick skin)',
      'Stratum corneum — very thick, anucleate cornified cells',
      'Meissner\'s corpuscles — in dermal papillae (touch)',
      'Eccrine sweat glands — coiled secretory, straight duct',
      'No hair follicles or sebaceous glands'
    ]
  },

  'H2': {
    location: 'Thin hairy skin',
    structures: [
      'Epidermis — thin (4 layers, no stratum lucidum)',
      'Hair follicle with hair shaft (root sheath, bulb, papilla)',
      'Arrector pili muscle — smooth muscle (goose bumps)',
      'Sebaceous gland — holocrine, associated with follicle',
      'Eccrine sweat glands',
      'Dermis: papillary layer (loose CT) and reticular layer (dense irregular CT)',
      'Meissner\'s corpuscles (papillary dermis) and Pacinian corpuscles (deep dermis/hypodermis)'
    ]
  },

  'H3': {
    location: 'Skin of the axilla — apocrine sweat glands',
    structures: [
      'Apocrine sweat glands — large lumen, tall columnar/cuboidal cells, eosinophilic cytoplasm',
      'Myoepithelial cells around apocrine glands',
      'Eccrine sweat glands — smaller, paler cells',
      'Hair follicles',
      'Sebaceous glands',
      'Dense dermis'
    ]
  },

  'H4': {
    location: 'Mammary gland — non-lactating',
    structures: [
      'Mostly fibrous stroma and adipose tissue',
      'Sparse, inactive lobules (few small alveoli)',
      'Interlobular fibrous (dense) septa',
      'Intralobular loose connective tissue',
      'Lactiferous ducts (stratified cuboidal/columnar)'
    ]
  },

  'H5': {
    location: 'Mammary gland — lactating',
    structures: [
      'Numerous distended alveoli (secretory cells, abundant)',
      'Columnar secretory cells with lipid vacuoles (apocrine secretion)',
      'Lumen filled with milk / colostrum',
      'Myoepithelial cells around alveoli',
      'Reduced fibrous stroma',
      'Intralobular and interlobular ducts'
    ]
  },

  'H6': {
    location: 'Nipple',
    structures: [
      'Stratified squamous keratinized epithelium (areola/nipple surface)',
      'Smooth muscle bundles — multiple orientations (erection)',
      'Lactiferous sinuses and ducts (converging)',
      'Dense irregular connective tissue',
      'Sebaceous glands (Montgomery\'s glands / tubercles)',
      'Meissner\'s and Pacinian corpuscles'
    ]
  },

  // ── NERVOUS SYSTEM (L slides) ──────────────────────────────────────────────

  'L1': {
    location: 'Brain — cerebral cortex',
    structures: [
      'Six cortical layers (I molecular → VI multiform)',
      'Pyramidal neurons (layers III, V) — large, triangular perikaryon, prominent nucleolus',
      'Granule (stellate) cells (layers II, IV)',
      'Nissl bodies (rough ER) in neuronal cytoplasm',
      'Glial cells — astrocytes, oligodendrocytes (smaller, darker nuclei)',
      'Pia mater at cortical surface'
    ]
  },

  'L2': {
    location: 'Brain — cerebral cortex, Nissl method',
    structures: [
      'Nissl substance (rER + free ribosomes) — deep blue in neuronal soma',
      'Neuronal cell bodies of varying size in different layers',
      'Nucleolus clearly visible',
      'Axon hillock — Nissl-free region',
      'Glial cells — smaller, rounder, darker nuclei (Nissl-negative)'
    ]
  },

  'L3': {
    location: 'Cerebellum',
    structures: [
      'Molecular layer — outer, sparse cells (basket cells, stellate cells, parallel fibres)',
      'Purkinje cell layer — single row of large flask-shaped neurons, elaborate dendritic arbors',
      'Granular layer — densely packed small granule cells, cerebellar glomeruli',
      'White matter — myelinated axons',
      'Folia (cortical folds)'
    ]
  },

  'L4': {
    location: 'Cerebellum — silver impregnation (Cajal)',
    structures: [
      'Purkinje cell dendritic tree — extensive fan-shaped branching (highlighted by silver)',
      'Granule cell parallel fibres (perpendicular to Purkinje dendrites)',
      'Basket cell axons surrounding Purkinje soma',
      'Climbing fibres on Purkinje dendrites'
    ]
  },

  'L5': {
    location: 'Spinal cord',
    structures: [
      'Gray matter — H (butterfly) shaped central core',
      'Anterior (ventral) horn — large alpha motor neurons',
      'Posterior (dorsal) horn — sensory interneurons',
      'Lateral horn — autonomic (preganglionic) neurons (thoracic/lumbar)',
      'Central canal with ependymal cells',
      'White matter — surrounding myelinated tracts',
      'Pia mater at surface'
    ]
  },

  'L6': {
    location: 'Choroid plexus',
    structures: [
      'Simple cuboidal to low columnar epithelium (modified ependyma)',
      'Microvilli (brush border) — for CSF secretion',
      'Vascular connective tissue core — fenestrated capillaries',
      'Psammoma bodies (calcifications, in adults)',
      'Stroma — collagen, macrophages'
    ]
  },

  'L7': {
    location: 'Peripheral nerve — longitudinal section',
    structures: [
      'Myelinated nerve fibres — parallel, slightly wavy',
      'Nodes of Ranvier — gaps in myelin sheath',
      'Schmidt-Lanterman incisures (in thick myelin)',
      'Schwann cell nuclei — along fibres',
      'Endoneurium (around individual fibres)',
      'Perineurium (around fascicles)',
      'Epineurium (around whole nerve, with blood vessels)'
    ]
  },

  'L8': {
    location: 'Peripheral nerve — cross section',
    structures: [
      'Nerve fascicles (bundles of fibres)',
      'Myelinated fibres — pale myelin ring around dark axon',
      'Unmyelinated fibres — Remak bundles (axons embedded in Schwann cell)',
      'Endoneurium — around each fibre',
      'Perineurium — concentric lamellae around fascicle',
      'Epineurium — dense CT around nerve, with vessels'
    ]
  },

  'L9': {
    location: 'Sympathetic ganglion (autonomic ganglion)',
    structures: [
      'Multipolar neurons — large, pale, eccentric nucleus with prominent nucleolus',
      'Satellite cells — small, surrounding each neuron (support)',
      'Myelinated preganglionic axons entering ganglion',
      'Unmyelinated postganglionic axons leaving',
      'Fibrous capsule',
      'Blood vessels'
    ]
  },

  'L10': {
    location: 'Spinal (dorsal root) ganglion',
    structures: [
      'Large pseudounipolar neurons — round, pale, eccentric nucleus, prominent nucleolus',
      'Satellite cells — ring of small cells around each neuron',
      'Myelinated nerve fibres between neuronal clusters',
      'Fibrous capsule',
      'No synapses (purely sensory — afferent neurons)'
    ]
  },

  // ── SENSORY ORGANS (S slides) ──────────────────────────────────────────────

  'S1': {
    location: 'Eye — anterior segment (cornea, iris, lens)',
    structures: [
      'Cornea: stratified squamous epithelium → Bowman\'s membrane → stroma (keratocytes) → Descemet\'s membrane → endothelium',
      'Iris: anterior border layer, stroma (melanocytes), sphincter pupillae (smooth), dilator pupillae (smooth), posterior pigmented epithelium',
      'Ciliary body: ciliary processes (aqueous production), ciliary muscle (accommodation), pars plana',
      'Lens: anterior epithelium, lens fibres, lens capsule (basement membrane)',
      'Canal of Schlemm / trabecular meshwork (drainage of aqueous)',
      'Anterior chamber (aqueous humor)'
    ]
  },

  'S2': {
    location: 'Eye — posterior segment (retina)',
    structures: [
      'Sclera — dense fibrous outer coat',
      'Choroid — vascular (Bruch\'s membrane, choriocapillaris)',
      'Retinal pigment epithelium (RPE) — simple cuboidal',
      'Photoreceptor outer and inner segments (rods and cones)',
      'Outer nuclear layer (photoreceptor nuclei)',
      'Outer plexiform layer (synapses)',
      'Inner nuclear layer (bipolar, horizontal, amacrine, Müller cells)',
      'Inner plexiform layer (synapses)',
      'Ganglion cell layer',
      'Nerve fibre layer (axons to optic nerve)'
    ]
  },

  'S3': {
    location: 'Lacrimal gland',
    structures: [
      'Serous acini (larger than parotid, pale secretory granules)',
      'Myoepithelial cells around acini',
      'Intercalated and excretory ducts',
      'Fibrous septa with lymphocytic infiltration (normal)',
      'Dense connective tissue stroma'
    ]
  },

  'S4': {
    location: 'Eyelid',
    structures: [
      'Skin surface: thin epidermis, eyelash follicles, sebaceous glands of Zeiss, apocrine glands of Moll',
      'Orbicularis oculi muscle (skeletal — beneath skin)',
      'Tarsal plate — dense fibrous connective tissue (structural support)',
      'Meibomian glands (tarsal glands) — modified sebaceous, in tarsal plate',
      'Conjunctival epithelium — stratified columnar with goblet cells (inner surface)'
    ]
  },

  'S5': {
    location: 'Olfactory epithelium / nasal mucosa',
    structures: [
      'Olfactory epithelium (pseudostratified, tall): olfactory receptor neurons, sustentacular (supporting) cells, basal cells',
      'Olfactory cilia — non-motile, on dendrite knobs of receptor neurons',
      'Bowman\'s glands — serous glands in lamina propria (wash odorants)',
      'Olfactory nerve bundles (unmyelinated axons in lamina propria)',
      'Respiratory mucosa on remainder of nasal cavity'
    ]
  },

  'S6': {
    location: 'Inner ear — cochlea and vestibular apparatus',
    structures: [
      'Bony labyrinth, membranous labyrinth',
      'Cochlea: scala vestibuli (perilymph), scala media (endolymph), scala tympani',
      'Organ of Corti — inner and outer hair cells, supporting cells, tectorial membrane, basilar membrane',
      'Stria vascularis — ion-pumping epithelium producing endolymph',
      'Spiral ganglion (bipolar neurons, CN VIII)',
      'Vestibular apparatus: maculae (saccule, utricle) with otoconia',
      'Crista ampullaris in semicircular canal ampullae'
    ]
  },

  'S7': {
    location: 'Optic nerve',
    structures: [
      'Myelinated axons — ganglion cell axons (CNS myelination by oligodendrocytes)',
      'Oligodendrocytes (not Schwann cells — this is CNS tissue)',
      'Fibrous septa from pia mater (glial septa)',
      'Three meningeal layers: dura mater (outer), arachnoid, pia mater',
      'Central retinal artery and vein (in central tissue)',
      'Subarachnoid space with CSF'
    ]
  },

  // ── EMBRYOLOGY (X slides) ──────────────────────────────────────────────────

  'X1': {
    location: 'Decidua — endometrium of pregnancy',
    structures: [
      'Decidual cells — large, rounded, pale, polygonal (transformed stromal cells)',
      'Distorted exhausted uterine glands',
      'Extravillous trophoblast cells (if near implantation site)',
      'Dilated blood vessels',
      'Stromal oedema'
    ]
  },

  'X2': {
    location: 'Chorion frondosum',
    structures: [
      'Chorionic villi — branching tree structure',
      'Syncytiotrophoblast — outer multinucleated layer (no cell borders)',
      'Cytotrophoblast (Langhans cells) — inner single layer (prominent early pregnancy)',
      'Villous stroma — loose CT with Hofbauer cells (fetal macrophages)',
      'Fetal capillaries within villous stroma',
      'Intervillous space — maternal blood (lacunae)'
    ]
  },

  'X3': {
    location: 'Placenta',
    structures: [
      'Stem villi, intermediate villi, terminal villi (branching hierarchy)',
      'Syncytiotrophoblast (outer — continuous)',
      'Cytotrophoblast (reduced in mature placenta)',
      'Hofbauer cells in villous stroma',
      'Fetal capillaries very near syncytium at term (thin blood-placenta barrier)',
      'Intervillous space with maternal blood',
      'Fibrinoid deposits (Nitabuch\'s layer at basal plate)'
    ]
  },

  'X4': {
    location: 'Umbilical cord',
    structures: [
      'Two umbilical arteries — thick muscular walls, no internal elastic lamina',
      'One umbilical vein — larger lumen, thinner wall',
      'Wharton\'s jelly — myxoid connective tissue (hyaluronic acid-rich)',
      'Mesenchymal cells (sparse) within jelly',
      'Amnion — outer covering (simple cuboidal/squamous)',
      'No nerves, lymphatics, or vasa vasorum'
    ]
  },

  'X5': {
    location: 'Development of the tooth (odontogenesis)',
    structures: [
      'Dental lamina — epithelial ingrowth from oral ectoderm',
      'Enamel organ — outer enamel epithelium, stellate reticulum, inner enamel epithelium',
      'Dental papilla — ectomesenchyme (future pulp and odontoblasts)',
      'Dental sac / follicle (future periodontium — cementum, PDL, alveolar bone)',
      'Ameloblasts — differentiated inner enamel epithelium; produce enamel matrix',
      'Odontoblasts — differentiated from dental papilla; produce predentin/dentin',
      'Enamel matrix (forming — eosinophilic)',
      'Predentin / dentin (forming)'
    ]
  }

};
