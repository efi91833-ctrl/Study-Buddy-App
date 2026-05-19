/* ============================================================
   Study Buddy — Embryology Timeline Data
   Based on: Langman's Medical Embryology, 13th Edition
   Structure: window.TIMELINE_DATA[systemName] = [ ...events ]
   Each event: { id, system, week, event, shortLabel,
                 explanation, clinicalNote, order }
   ============================================================ */
(function () {

  window.TIMELINE_DATA = {

    /* ── Cardiac Development (10 events) ── */
    'Cardiac Development': [
      {
        id: 'cd-001',
        system: 'Cardiac Development',
        week: 'Week 3 (Day 15–16)',
        event: 'Cardiac progenitor cells specified in the cardiogenic crescent',
        shortLabel: 'Cardiac progenitors specified',
        explanation: 'BMP and FGF signals from the adjacent endoderm induce cardiogenic mesoderm in the splanchnic lateral plate mesoderm. Two populations are established: the first heart field (FHF), which gives rise to the left ventricle and parts of the atria, and the second heart field (SHF), which later contributes the right ventricle and outflow tract. The transcription factors NKX2-5, GATA4, and TBX5 are activated in these cells. This crescent-shaped cardiogenic zone is positioned at the cranial end of the embryonic disc, anterior to the oropharyngeal membrane.',
        clinicalNote: 'Mutations in NKX2-5, GATA4, and TBX5 underlie familial congenital heart defects including atrial septal defect and congenital AV block.',
        order: 1
      },
      {
        id: 'cd-002',
        system: 'Cardiac Development',
        week: 'Week 3 (Day 18–20)',
        event: 'Two endocardial heart tubes form and fuse into a single primitive heart tube',
        shortLabel: 'Single heart tube forms',
        explanation: 'Angioblastic cords in the bilateral cardiogenic crescents canalize to form two parallel endocardial tubes. As lateral body folding occurs, these two tubes are brought together at the midline and fuse into one primitive heart tube. The tube is surrounded by cardiac jelly (an acellular extracellular matrix) and is enclosed by an outer myocardial mantle. From caudal to cranial, the tube regions are the sinus venosus, primitive atrium, primitive ventricle, bulbus cordis, and truncus arteriosus.',
        clinicalNote: 'Failure of complete fusion produces cor triatriatum dexter or left-sided anomalies; ectopia cordis results when the heart fails to shift into the thoracic cavity during folding.',
        order: 2
      },
      {
        id: 'cd-003',
        system: 'Cardiac Development',
        week: 'Week 3 (Day 21–22)',
        event: 'Heart tube begins beating — first functional organ of the embryo',
        shortLabel: 'Heart begins beating',
        explanation: 'The primary cardiac pacemaker is located in the sinus venosus region, which drives peristaltic-like contractions along the heart tube. By day 22–23, the heart is already pumping blood in a unidirectional pattern before septation is complete. These early contractions are critical for inducing blood flow, which in turn provides the hemodynamic signals needed for further cardiac morphogenesis. The cardiac beat is detectable by ultrasound as early as 6 weeks of gestational age.',
        clinicalNote: 'The sinus venosus gives rise to the sinoatrial (SA) node of the adult heart; abnormalities in this region underlie sick sinus syndrome and other pacemaker dysfunction.',
        order: 3
      },
      {
        id: 'cd-004',
        system: 'Cardiac Development',
        week: 'Week 3–4 (Day 23–28)',
        event: 'Cardiac looping — heart tube bends rightward forming the D-loop',
        shortLabel: 'Cardiac D-loop forms',
        explanation: 'The straight heart tube undergoes rightward (dextral) bending to form a C-shape and then an S-shape. This looping is the first morphological sign of left–right asymmetry in the embryo and is controlled by Nodal and Lefty signaling from the left lateral plate mesoderm. The future right ventricle (from the bulbus cordis) is carried anteriorly and rightward, while the primitive left ventricle stays posterior and leftward. The atria come to lie dorsal and cranial to the ventricles.',
        clinicalNote: 'Abnormal looping, including L-looping (leftward), causes situs inversus or heterotaxy syndromes. Kartagener syndrome combines dextrocardia with situs inversus and bronchiectasis.',
        order: 4
      },
      {
        id: 'cd-005',
        system: 'Cardiac Development',
        week: 'Week 4–5',
        event: 'Endocardial cushions form in the AV canal and outflow tract',
        shortLabel: 'Endocardial cushions develop',
        explanation: 'Endocardial cells overlying the AV canal and conotruncal region undergo epithelial-to-mesenchymal transformation (EMT), stimulated by TGF-beta signals from the myocardium, to populate the cardiac jelly and form paired endocardial cushions. The superior and inferior AV cushions grow toward each other and will eventually fuse to divide the common AV canal into left and right channels. These structures also contribute to the formation of the mitral and tricuspid valves and the membranous portions of both septa.',
        clinicalNote: 'Failure of endocardial cushion fusion causes an atrioventricular septal defect (AVSD), which is the most common cardiac malformation in trisomy 21 (Down syndrome).',
        order: 5
      },
      {
        id: 'cd-006',
        system: 'Cardiac Development',
        week: 'Week 4–6',
        event: 'Atrial septation — septum primum and septum secundum form sequentially',
        shortLabel: 'Atrial septation',
        explanation: 'Atrial septation proceeds in two overlapping steps. First, the septum primum grows downward from the roof of the common atrium toward the fusing endocardial cushions, leaving the foramen primum open for blood flow. As foramen primum closes, apoptosis creates the foramen secundum in the upper septum primum. Then the septum secundum grows from the atrial roof on the right side, partially overlapping the foramen secundum and creating the foramen ovale. This arrangement allows oxygenated blood from the placenta to bypass the pulmonary circulation in the fetus.',
        clinicalNote: 'An ostium secundum ASD (the most common) results from excessive apoptosis in the septum primum or underdevelopment of the septum secundum, leaving the foramen ovale persistently open after birth.',
        order: 6
      },
      {
        id: 'cd-007',
        system: 'Cardiac Development',
        week: 'Week 4–8',
        event: 'Ventricular septation — muscular and membranous components develop',
        shortLabel: 'Ventricular septation',
        explanation: 'The muscular interventricular septum (IVS) appears as an upward ridge growing from the floor of the primitive ventricle, driven by differential ventricular expansion. The muscular IVS grows cranially but initially leaves the interventricular foramen open between the two ventricles. Closure of this foramen is completed in week 7 when the fused AV cushions and the conotruncal ridges contribute the membranous IVS. This is the last portion of the ventricular septum to close and the most common site for ventricular septal defects (VSDs).',
        clinicalNote: 'VSDs are the most common congenital cardiac malformations overall; the membranous VSD (perimembranous) is the most frequent subtype and accounts for approximately 70% of all VSDs.',
        order: 7
      },
      {
        id: 'cd-008',
        system: 'Cardiac Development',
        week: 'Week 5–8',
        event: 'Outflow tract septation — truncoconal ridges divide the aorta from the pulmonary trunk',
        shortLabel: 'Outflow tract septation',
        explanation: 'The bulbus cordis and truncus arteriosus are divided by two spiraling ridges of neural crest-derived mesenchyme: the truncal ridges and the conal ridges. These ridges spiral 180° around each other as they grow toward one another and fuse, creating a twisted septum (the aorticopulmonary septum) that separates the aorta on the left-posterior side from the pulmonary trunk on the right-anterior side. Neural crest cells from the posterior rhombencephalon migrate into the pharyngeal arches and conotruncal cushions and are essential for this process.',
        clinicalNote: 'Abnormal neural crest migration causes conotruncal defects: transposition of the great arteries (TGA), tetralogy of Fallot, truncus arteriosus, and double-outlet right ventricle. DiGeorge syndrome (22q11 deletion) affects conotruncal development.',
        order: 8
      },
      {
        id: 'cd-009',
        system: 'Cardiac Development',
        week: 'Week 8–Birth',
        event: 'Fetal cardiac maturation — coronary arteries, valves, and conduction system complete',
        shortLabel: 'Fetal cardiac maturation',
        explanation: 'Coronary arteries grow from a pericoronary vascular plexus that invades the aortic root; they do not bud from the aorta. Cardiac valves mature through remodeling of the endocardial cushions into thin leaflets, with fibrous rings (annuli fibrosus) forming around each valve orifice. The atrioventricular conduction system — AV node, bundle of His, and bundle branches — differentiates from specialized myocardial cells. The fetal heart relies on the foramen ovale and ductus arteriosus to bypass the fluid-filled lungs.',
        clinicalNote: 'Anomalous coronary artery origin (e.g., left coronary from the pulmonary artery — ALCAPA) is life-threatening; understanding coronary development is key to surgical correction strategies.',
        order: 9
      },
      {
        id: 'cd-010',
        system: 'Cardiac Development',
        week: 'Birth',
        event: 'Neonatal circulatory transition — foramen ovale and ductus arteriosus close',
        shortLabel: 'Neonatal circulation begins',
        explanation: 'At birth, the first breath dramatically reduces pulmonary vascular resistance and increases pulmonary blood flow. Rising left atrial pressure functionally closes the foramen ovale by pressing the septum primum against the septum secundum. Rising oxygen tension causes the ductus arteriosus to constrict (mediated by decreased prostaglandin E2), with functional closure within hours and anatomical closure within weeks, forming the ligamentum arteriosum. The umbilical vessels also close: umbilical arteries become medial umbilical ligaments and the umbilical vein becomes the ligamentum teres hepatis.',
        clinicalNote: 'Patent ductus arteriosus (PDA) is common in premature infants due to insufficient oxygen-triggered vasoconstriction; indomethacin (a prostaglandin inhibitor) promotes pharmacological closure.',
        order: 10
      }
    ],

    /* ── Vascular Development (9 events) ── */
    'Vascular Development': [
      {
        id: 'vd-001',
        system: 'Vascular Development',
        week: 'Week 3 (Day 17–18)',
        event: 'Vasculogenesis begins — blood islands form in the yolk sac wall',
        shortLabel: 'Yolk sac blood islands',
        explanation: 'The first blood vessels arise by vasculogenesis: mesodermal cells (angioblasts) differentiate in situ into endothelial cells that coalesce into blood islands in the extraembryonic yolk sac splanchnic mesoderm. The peripheral cells of blood islands become endothelial cells, while central cells become primitive blood cells (erythroblasts). VEGF and its receptor VEGFR2 (Flk-1/KDR) are the master regulators of this process. This extraembryonic vasculogenesis slightly precedes intraembryonic vascular formation.',
        clinicalNote: 'VEGF signaling is critical for all subsequent angiogenesis; VEGF is a major target in anti-tumor therapy (bevacizumab), and its developmental role explains why anti-VEGF drugs are teratogenic.',
        order: 1
      },
      {
        id: 'vd-002',
        system: 'Vascular Development',
        week: 'Week 3 (Day 20–21)',
        event: 'Intraembryonic vasculogenesis — paired dorsal aortae form as first intraembryonic vessels',
        shortLabel: 'Dorsal aortae form',
        explanation: 'Angioblasts in the intraembryonic lateral plate mesoderm coalesce to form the paired dorsal aortae, which run alongside the notochord in the paraxial plane. These bilateral vessels later fuse in the trunk region to form the single definitive dorsal aorta caudal to the heart. Simultaneously, the first blood vessels begin connecting to the endocardial heart tube via the aortic arches. The dorsal aortae give off intersegmental, lateral, and ventral branches that will supply the body wall, urogenital ridge, and gut derivatives, respectively.',
        clinicalNote: 'Coarctation of the aorta is most common at the site where the ductus arteriosus joins the aorta (juxtaductal); this may reflect abnormal smooth muscle migration from the ductus into the aortic wall.',
        order: 2
      },
      {
        id: 'vd-003',
        system: 'Vascular Development',
        week: 'Week 3–4',
        event: 'Cardinal veins establish the primary embryonic venous system',
        shortLabel: 'Cardinal veins form',
        explanation: 'The primitive venous return system forms from three paired vein sets: anterior cardinal veins drain the cranial region, posterior cardinal veins drain the trunk and lower body, and these two sets meet at the common cardinal veins (ducts of Cuvier) before draining into the sinus venosus. Vitelline veins carry blood from the yolk sac, and umbilical veins carry oxygenated blood from the placenta back to the embryo. The right and left sides remodel asymmetrically: the right-sided veins become dominant due to differential growth and anastomosis formation.',
        clinicalNote: 'Persistent left superior vena cava results from failure of the left common cardinal vein to regress; it usually drains harmlessly into the coronary sinus but can complicate pacemaker lead placement.',
        order: 3
      },
      {
        id: 'vd-004',
        system: 'Vascular Development',
        week: 'Week 4–5',
        event: 'Aortic arch arteries develop alongside pharyngeal arches 1–6',
        shortLabel: 'Aortic arch arteries',
        explanation: 'Six pairs of aortic arch arteries form sequentially within the pharyngeal arches, connecting the aortic sac (at the truncus arteriosus) to the paired dorsal aortae. They do not all coexist simultaneously; cranial arches regress as caudal arches appear. Arch 1 gives rise to part of the maxillary artery; Arch 2 contributes to the stapedial artery; Arch 3 forms the common and internal carotid arteries; the left Arch 4 persists as the arch of the aorta while the right Arch 4 becomes the right subclavian artery; Arch 6 forms the pulmonary arteries and the ductus arteriosus (left side).',
        clinicalNote: 'Interrupted aortic arch type B (between left carotid and subclavian) corresponds to failure of left arch 4 development and is strongly associated with 22q11 deletion (DiGeorge syndrome).',
        order: 4
      },
      {
        id: 'vd-005',
        system: 'Vascular Development',
        week: 'Week 5–7',
        event: 'Vitelline vein remodeling forms the portal vein and hepatic sinusoids',
        shortLabel: 'Portal vein forms',
        explanation: 'The paired vitelline veins that initially drain the yolk sac undergo extensive remodeling as the liver grows into the septum transversum. The vitelline veins form a plexus around the duodenum, creating the portal vein. Within the liver, the vitelline veins give rise to the hepatic sinusoids through which fetal blood percolates. The right vitelline vein cranial to the liver persists as the right hepatic vein; the left vitelline vein regresses. The ductus venosus forms as a shunt connecting the umbilical vein directly to the inferior vena cava, bypassing the hepatic sinusoids.',
        clinicalNote: 'Extrahepatic portal hypertension in children is often caused by portal vein thrombosis or cavernous transformation — a reminder of the complex remodeling this vessel undergoes.',
        order: 5
      },
      {
        id: 'vd-006',
        system: 'Vascular Development',
        week: 'Week 6–8',
        event: 'Inferior vena cava forms from multiple venous segments',
        shortLabel: 'IVC assembles from segments',
        explanation: 'The IVC is assembled from four embryonic venous segments that become linked end-to-end: the hepatic segment (from the right vitelline vein hepatic portion), the prerenal segment (from the right subcardinal vein), the renal segment (from the subcardinal-supracardinal anastomosis), and the postrenal segment (from the right supracardinal vein). The posterior cardinal veins largely regress, persisting only as the azygos and hemiazygos venous system. This complex origin explains why IVC anomalies are common — including interrupted IVC with azygos continuation, seen in left atrial isomerism.',
        clinicalNote: 'Azygos continuation of the IVC (absent infrarenal and/or intrahepatic IVC) is seen in 0.6% of patients and is important to identify before major cardiac or abdominal surgery.',
        order: 6
      },
      {
        id: 'vd-007',
        system: 'Vascular Development',
        week: 'Week 8–10',
        event: 'Coronary arteries develop from epicardial progenitors, not from the aorta',
        shortLabel: 'Coronary arteries develop',
        explanation: 'The epicardium arises from a cell cluster at the venous pole called the proepicardial organ (PEO). Epicardial cells spread over the heart surface and then undergo EMT to migrate into the myocardium, forming epicardial-derived cells (EPDCs). EPDCs differentiate into smooth muscle cells of coronary vessels and cardiac fibroblasts. The coronary vascular plexus forms by vasculogenesis and angiogenesis in the subepicardium and then invades the aortic root — it does not bud from the aorta. VEGF-C and PDGF-BB guide this invasion.',
        clinicalNote: 'Anomalous origin of a coronary artery from the pulmonary artery (ALCAPA) can cause myocardial ischemia in infants; understanding coronary development clarifies why this anomaly requires surgical re-implantation.',
        order: 7
      },
      {
        id: 'vd-008',
        system: 'Vascular Development',
        week: 'Week 10–Birth',
        event: 'Fetal circulation — three shunts maintain oxygen delivery around fluid-filled lungs',
        shortLabel: 'Fetal shunts functional',
        explanation: 'Fetal circulation uses three specialized shunts to maximize oxygen delivery from the placenta to the brain and heart. The ductus venosus connects the umbilical vein to the IVC, directing oxygenated blood past the hepatic sinusoids. The foramen ovale directs this oxygenated IVC blood from the right atrium across to the left atrium (guided by the crista dividens and valve of the IVC). The ductus arteriosus shunts mixed venous blood from the pulmonary artery to the descending aorta, bypassing the high-resistance fetal lung circulation.',
        clinicalNote: 'All three shunts must close at birth; failure of the ductus arteriosus to close (PDA) leads to left-to-right shunting and volume overload of the left heart and pulmonary vasculature.',
        order: 8
      },
      {
        id: 'vd-009',
        system: 'Vascular Development',
        week: 'Birth',
        event: 'Neonatal vascular transition — shunts close and pulmonary circulation is established',
        shortLabel: 'Vascular transition at birth',
        explanation: 'With the first breath, lung expansion dramatically drops pulmonary vascular resistance. Increased pulmonary blood flow raises left atrial pressure above right atrial pressure, functionally closing the foramen ovale. Rising arterial PO2 reduces prostaglandin production, causing the ductus arteriosus to constrict and close within hours to days. The ductus venosus closes when umbilical venous flow ceases at cord clamping. These three closures convert the parallel fetal circulation into the series neonatal circulation, with full separation of oxygenated and deoxygenated blood.',
        clinicalNote: 'In persistent pulmonary hypertension of the newborn (PPHN), the pulmonary vascular resistance fails to fall, causing the ductus arteriosus to remain open with right-to-left shunting and severe hypoxemia.',
        order: 9
      }
    ],

    /* ── Gut Development (11 events) ── */
    'Gut Development': [
      {
        id: 'gs-001',
        system: 'Gut Development',
        week: 'Week 3–4 (Day 18–25)',
        event: 'Gut tube forms from endoderm by cranial and caudal folding of the embryonic disc',
        shortLabel: 'Primitive gut tube forms',
        explanation: 'During lateral and cranial–caudal folding of the trilaminar embryonic disc, the endoderm is incorporated into the embryo as a closed tube. The cranial portion of this tube, the foregut, is bounded anteriorly by the buccopharyngeal membrane; the caudal portion, the hindgut, ends at the cloacal membrane. The intervening midgut remains open to the yolk sac via the vitello-intestinal duct. Each gut region is supplied by a specific artery: celiac trunk (foregut), superior mesenteric artery (midgut), and inferior mesenteric artery (hindgut). The splanchnic mesoderm surrounding the tube will form smooth muscle, connective tissue, and serosa.',
        clinicalNote: 'Failure to separate foregut from the trachea (due to abnormal tracheoesophageal septum) causes tracheoesophageal fistula (TEF), presenting with polyhydramnios and inability to swallow after birth.',
        order: 1
      },
      {
        id: 'gs-002',
        system: 'Gut Development',
        week: 'Week 4 (Day 25–28)',
        event: 'Stomach forms as a fusiform dilation of the foregut and begins to rotate',
        shortLabel: 'Stomach forms and rotates',
        explanation: 'The stomach becomes visible as a local dilation of the foregut at approximately day 25. It undergoes a 90-degree clockwise rotation around its longitudinal axis, bringing the original dorsal wall (which grows faster) to the left — forming the greater curvature — and the original ventral wall to the right — forming the lesser curvature. Simultaneously, the stomach rotates around its anteroposterior axis so that the pylorus moves cranially and to the right while the cardia remains caudal and to the left. This rotation explains why the left vagus nerve (originally ventral) ends up on the anterior gastric surface.',
        clinicalNote: 'Hypertrophic pyloric stenosis (HPS) occurs in ~3/1000 births when the pyloric sphincter muscle hypertrophies after birth; it presents at 3–6 weeks with projectile non-bilious vomiting and is treated by pyloromyotomy.',
        order: 2
      },
      {
        id: 'gs-003',
        system: 'Gut Development',
        week: 'Week 4–5',
        event: 'Liver and gallbladder arise from the hepatic diverticulum of the foregut',
        shortLabel: 'Liver bud appears',
        explanation: 'The hepatic diverticulum (liver bud) is an endodermal outgrowth from the caudal part of the foregut into the septum transversum, appearing at the end of week 3. It rapidly proliferates to form hepatic cords interspersed with vitelline venous sinusoids. The cranial part of the diverticulum forms the liver parenchyma, while the caudal part forms the common bile duct and gallbladder. The liver grows so rapidly that by week 10 it occupies most of the abdominal cavity. Hematopoiesis begins in the liver by week 6 and the organ is the principal hematopoietic site until birth.',
        clinicalNote: 'Biliary atresia, the most common cause of neonatal cholestasis requiring liver transplantation, may arise from abnormal hepatic diverticulum development or postnatal immune-mediated destruction of the biliary epithelium.',
        order: 3
      },
      {
        id: 'gs-004',
        system: 'Gut Development',
        week: 'Week 5',
        event: 'Dorsal and ventral pancreatic buds form; rotate and fuse to create the pancreas',
        shortLabel: 'Pancreatic buds fuse',
        explanation: 'The dorsal pancreatic bud arises directly from the dorsal duodenum and grows into the dorsal mesentery; the ventral pancreatic bud arises adjacent to the hepatic diverticulum. As the duodenum rotates to the right along with the stomach, the ventral bud is carried posteriorly and fuses with the dorsal bud. The dorsal bud forms the body and tail of the pancreas plus the accessory (Santorini) duct; the ventral bud forms the head, uncinate process, and main (Wirsung) duct. The main duct and accessory duct normally communicate at the junction of the fused buds.',
        clinicalNote: 'Annular pancreas results when the ventral bud bifurcates and encircles the duodenum; it can cause duodenal obstruction. Pancreas divisum (incomplete duct fusion) is the most common pancreatic variant, found in 5–10% of the population.',
        order: 4
      },
      {
        id: 'gs-005',
        system: 'Gut Development',
        week: 'Week 5–6',
        event: 'Physiological umbilical herniation — midgut loop herniates into the umbilical cord',
        shortLabel: 'Midgut herniation',
        explanation: 'Between weeks 5 and 10, the rapidly growing midgut loop herniates through the umbilical ring into the extraembryonic coelom within the umbilical cord. This normal physiological herniation occurs because the liver and mesonephros occupy so much abdominal space that the intestines cannot fit. The midgut loop has a cranial (prearterial) limb that forms the small intestine, and a caudal (postarterial) limb that forms the large intestine. While herniated, the midgut loop rotates 90 degrees counterclockwise (viewed from the front) around the superior mesenteric artery.',
        clinicalNote: 'Gastroschisis (herniation through a lateral abdominal wall defect) and omphalocele (herniation through the umbilical ring with peritoneal covering) are distinguished by their relationship to the cord insertion and peritoneal covering.',
        order: 5
      },
      {
        id: 'gs-006',
        system: 'Gut Development',
        week: 'Week 6–7',
        event: 'Duodenal lumen transiently obliterates then recanalizes',
        shortLabel: 'Duodenal recanalization',
        explanation: 'During weeks 5–6, rapid endodermal proliferation temporarily obliterates the duodenal lumen, creating a solid cord stage similar to that seen in the esophagus. Recanalization (reopening of the lumen) occurs through vacuolation and cell death by week 8–9. The duodenum also becomes secondarily retroperitoneal as the dorsal mesoduodenum fuses with the posterior parietal peritoneum. The second part of the duodenum receives the bile duct and pancreatic ducts via the major duodenal papilla (of Vater), which forms from the ampullary region.',
        clinicalNote: 'Duodenal atresia or stenosis results from failure of recanalization and is the most common cause of neonatal duodenal obstruction; it is associated with trisomy 21 in approximately 30% of cases and presents with the double bubble sign on X-ray.',
        order: 6
      },
      {
        id: 'gs-007',
        system: 'Gut Development',
        week: 'Week 10',
        event: 'Midgut returns to abdominal cavity with further 180-degree counterclockwise rotation',
        shortLabel: 'Intestines return and rotate',
        explanation: 'By week 10, as the liver growth plateaus and the abdominal cavity enlarges, the herniated intestinal loops return to the abdominal cavity. As they return, the midgut undergoes a further 180-degree counterclockwise rotation (total 270 degrees since herniation began), so that the cecum passes from upper right to upper left and finally comes to rest in the lower right quadrant. The ascending and descending colon become fixed to the posterior peritoneal wall (secondarily retroperitoneal). The small intestine mesentery fixes from the ligament of Treitz to the ileocecal junction.',
        clinicalNote: 'Malrotation of the gut (failure to complete 270-degree rotation) leaves the cecum high in the abdomen, allowing Ladd bands to obstruct the duodenum and predisposing to volvulus around the superior mesenteric artery root.',
        order: 7
      },
      {
        id: 'gs-008',
        system: 'Gut Development',
        week: 'Week 5–8',
        event: 'Urorectal septum divides the cloaca into the rectum and urogenital sinus',
        shortLabel: 'Cloaca divided',
        explanation: 'The cloaca is the common terminal expansion of the hindgut that receives the allantois anteriorly and the hindgut posteriorly. A wedge of mesoderm called the urorectal septum grows caudally between the allantois and the hindgut, fusing with the cloacal membrane by week 7–8. This division creates the urogenital sinus anteriorly and the anorectal canal posteriorly. The urogenital membrane and anal membrane form from the respective halves of the cloacal membrane; the anal membrane breaks down at week 8 to open the anal canal.',
        clinicalNote: 'Failure of the urorectal septum to fuse with the cloacal membrane causes anorectal malformations (imperforate anus) and rectourethral or rectovaginal fistulas, depending on the extent of the cloacal division defect.',
        order: 8
      },
      {
        id: 'gs-009',
        system: 'Gut Development',
        week: 'Week 9–12',
        event: 'Intestinal villi and crypts develop; gut epithelium differentiates into specialized cell types',
        shortLabel: 'Gut epithelium differentiates',
        explanation: 'Beginning week 9, the intestinal mucosa begins forming villi — finger-like projections that dramatically increase absorptive surface area. The epithelial lining of the gut is entirely endodermal in origin, while the lamina propria, muscularis mucosae, and muscular layers derive from surrounding splanchnic mesoderm. Four main epithelial cell types differentiate: absorptive enterocytes, mucus-secreting goblet cells, hormone-secreting enteroendocrine cells, and Paneth cells. The Wnt, Notch, BMP, and Hedgehog pathways all coordinate the allocation of progenitor cells to these fates.',
        clinicalNote: 'Hirschsprung disease results from failure of enteric neural crest cells to colonize the distal colon; the aganglionic bowel remains contracted, causing functional obstruction — typically presenting as failure to pass meconium in the first 48 hours.',
        order: 9
      },
      {
        id: 'gs-010',
        system: 'Gut Development',
        week: 'Week 16–Birth',
        event: 'Meconium accumulates; fetal swallowing and gut motility established',
        shortLabel: 'Fetal gut function begins',
        explanation: 'By week 16, the fetus actively swallows amniotic fluid; this is essential both for gut development and for regulating amniotic fluid volume. Swallowed fluid contributes to meconium, which also contains bile, mucus, vernix, and shed epithelial cells. Intestinal peristalsis is present from mid-gestation. The enteric nervous system (the intrinsic gut nervous system derived from neural crest) matures progressively, achieving adult-like organization by late gestation. Suckling and swallowing reflexes coordinate to allow independent feeding after birth.',
        clinicalNote: 'Polyhydramnios (excess amniotic fluid) often signals gut obstruction preventing normal fetal swallowing; conversely, meconium ileus (caused by thick meconium in cystic fibrosis) can cause neonatal intestinal obstruction.',
        order: 10
      },
      {
        id: 'gs-011',
        system: 'Gut Development',
        week: 'Birth',
        event: 'Transition to independent digestion — gut colonization by microbiota begins',
        shortLabel: 'Gut colonization at birth',
        explanation: 'At birth the neonatal gut transitions from sterile intrauterine conditions to colonization by microorganisms encountered during delivery and feeding. Vaginal delivery colonizes the gut primarily with maternal vaginal and fecal flora (Lactobacillus, Bifidobacterium), while cesarean delivery leads to a different early microbiota profile. The neonatal gut is highly permeable, allowing passage of maternal IgA from breast milk to provide immune protection until the infant\'s own immune system matures. The gut barrier tightens progressively over the first weeks of life.',
        clinicalNote: 'Necrotizing enterocolitis (NEC) is the most common severe GI emergency in premature infants; immaturity of the gut barrier, altered colonization, and formula feeding all increase risk compared with breast-fed term neonates.',
        order: 11
      }
    ],

    /* ── Respiratory Development (8 events) ── */
    'Respiratory Development': [
      {
        id: 'rs-001',
        system: 'Respiratory Development',
        week: 'Week 4 (Day 26–28)',
        event: 'Respiratory diverticulum appears as a ventral outgrowth of the foregut endoderm',
        shortLabel: 'Lung bud appears',
        explanation: 'At approximately day 26, a groove (the laryngotracheal groove) appears in the ventral floor of the caudal foregut. This deepens into the respiratory diverticulum, the primordium of the entire respiratory system below the epiglottis. The diverticulum is surrounded by splanchnic mesenchyme that will direct its subsequent branching. Separation of the respiratory diverticulum from the esophagus is accomplished by tracheoesophageal folds that grow from the lateral walls of the foregut, fusing in the midline to create the tracheoesophageal septum. Epithelium and glands of the airways derive from this endodermal bud.',
        clinicalNote: 'Tracheoesophageal fistula (TEF) with or without esophageal atresia results from incomplete or abnormal formation of the tracheoesophageal septum; the most common type (type C) has a proximal esophageal pouch and a distal fistula, presenting with choking on feeds and air in the stomach.',
        order: 1
      },
      {
        id: 'rs-002',
        system: 'Respiratory Development',
        week: 'Week 5',
        event: 'Primary bronchial buds form; right and left lungs established',
        shortLabel: 'Primary bronchi form',
        explanation: 'The respiratory diverticulum bifurcates at its distal end to form right and left primary bronchial buds. The right bud is oriented more vertically and will give rise to three lobar bronchi; the left bud is oriented more horizontally and will give rise to two lobar bronchi — the structural basis for the adult pattern of three right lobes and two left lobes. This asymmetry is already apparent at the primary bud stage. Each bronchial bud is surrounded by mesenchyme that produces FGF10, the key signal that drives repeated bronchial branching throughout lung development.',
        clinicalNote: 'The more vertical orientation of the right main bronchus explains why inhaled foreign bodies (and aspirated food in adults) lodge preferentially in the right lower lobe bronchus.',
        order: 2
      },
      {
        id: 'rs-003',
        system: 'Respiratory Development',
        week: 'Week 5–16',
        event: 'Pseudoglandular period — bronchial tree branches down to terminal bronchioles',
        shortLabel: 'Pseudoglandular period',
        explanation: 'Between weeks 5 and 16, the bronchial tree undergoes repeated dichotomous branching in a process coordinated by reciprocal FGF10 (mesenchyme) and Sprouty (epithelium) signaling, producing approximately 16 orders of airways down to the terminal bronchioles. During this period the lung resembles a gland histologically (hence the name), with tubular glands embedded in abundant mesenchyme. Cartilaginous plates, smooth muscle, and mucosal glands all begin forming during this phase. Cilia on the airway epithelium appear by week 13. Respiratoryfunction is impossible during this period.',
        clinicalNote: 'If birth occurs before week 16, the neonate cannot survive due to insufficient airway development. Bronchogenic cysts arise from abnormal branching during this period and typically occur near the carina.',
        order: 3
      },
      {
        id: 'rs-004',
        system: 'Respiratory Development',
        week: 'Week 16–26',
        event: 'Canalicular period — respiratory bronchioles form and vascularization begins',
        shortLabel: 'Canalicular period',
        explanation: 'During the canalicular period (weeks 16–26), the distal airways expand dramatically as the terminal bronchioles subdivide into respiratory bronchioles and alveolar ducts. Crucially, the lung parenchyma becomes richly vascularized: capillaries from the adjacent mesenchyme grow close to the thin respiratory epithelium, creating the first sites where gas exchange could theoretically occur. Type I pneumocytes (flat cells for gas exchange) and Type II pneumocytes (cuboidal cells that produce surfactant) begin to differentiate from a common precursor. By the end of the canalicular period, minimally viable gas exchange becomes possible.',
        clinicalNote: 'Infants born at 23–25 weeks (end of canalicular period) are at the threshold of extrauterine viability; their survival depends on surfactant therapy and respiratory support to maintain open underdeveloped alveoli.',
        order: 4
      },
      {
        id: 'rs-005',
        system: 'Respiratory Development',
        week: 'Week 26–36',
        event: 'Saccular period — terminal sacs form and surfactant production ramps up',
        shortLabel: 'Saccular period',
        explanation: 'Between weeks 26 and 36, the respiratory bronchioles continue subdividing into clusters of thin-walled saccules (primitive alveoli) that dramatically increase gas exchange surface area. Type II pneumocytes mature and begin producing surfactant, a phospholipid-protein complex (primarily dipalmitoylphosphatidylcholine — DPPC) that reduces alveolar surface tension and prevents alveolar collapse at end-expiration. Lamellar bodies (the storage organelles for surfactant) become visible in type II cells from week 20 onward, but sufficient secretion for survival requires adequate type II cell maturation, typically by week 34–36.',
        clinicalNote: 'Respiratory distress syndrome (RDS / hyaline membrane disease) of the premature neonate is caused by surfactant deficiency; glucocorticoids given to the mother before preterm delivery accelerate fetal lung maturation by stimulating surfactant synthesis.',
        order: 5
      },
      {
        id: 'rs-006',
        system: 'Respiratory Development',
        week: 'Week 36–Birth',
        event: 'Alveolar period begins — true alveoli form with thin air–blood barriers',
        shortLabel: 'Alveolar maturation',
        explanation: 'True alveoli with mature air–blood barriers develop from the primitive saccules through a process of secondary septation: ridges of elastin-rich tissue subdivide saccules into multiple smaller alveoli. The Type I pneumocyte thins to a squamous cell with a barrier as thin as 0.2 µm to allow gas diffusion. An adult human has approximately 300–500 million alveoli, but only 20–50 million exist at birth; alveolarization continues after birth, with most alveoli forming in the first 2–3 years of life. Surfactant composition and quantity continue to mature through late gestation.',
        clinicalNote: 'Congenital diaphragmatic hernia (CDH) causes pulmonary hypoplasia by compressing the developing lung; even after surgical repair, the child may have lifelong pulmonary dysfunction due to inadequate alveolar number.',
        order: 6
      },
      {
        id: 'rs-007',
        system: 'Respiratory Development',
        week: 'Birth',
        event: 'First breath — lungs clear fetal fluid and gas exchange begins',
        shortLabel: 'First breath',
        explanation: 'The fetal lung is filled with fluid secreted by the lung epithelium throughout gestation — this fluid is critical for normal lung growth (acting like a natural distending pressure). Near term, cortisol reduces fluid secretion and sodium channels are upregulated to absorb the remaining fluid. With the first breath, the neonate generates a large negative intrathoracic pressure (up to -60 cm H2O) to overcome fluid surface tension and inflate the lungs. Surfactant reduces this work of breathing. Remaining lung fluid is absorbed via pulmonary lymphatics and blood vessels within hours. The pulmonary vasculature dilates in response to oxygen and mechanical stretch.',
        clinicalNote: 'Transient tachypnea of the newborn (TTN) occurs when fetal lung fluid is cleared too slowly, particularly after cesarean delivery; the neonate breathes rapidly but usually resolves within 24–48 hours without intervention.',
        order: 7
      },
      {
        id: 'rs-008',
        system: 'Respiratory Development',
        week: 'Birth–8 years',
        event: 'Postnatal alveolarization — the majority of alveoli form after birth',
        shortLabel: 'Postnatal alveolarization',
        explanation: 'The lung continues developing after birth through rapid alveolarization over the first 2–3 years of life, creating the bulk of the adult alveolar surface area. Secondary septation is driven by myofibroblasts that deposit elastin at the tips of growing septa. Simultaneously, pulmonary capillaries undergo a process of microvascular maturation, fusing a double capillary system into a single mature alveolar capillary network. By age 8, the lung has reached its adult complement of alveoli (~300–500 million). Lung growth continues in volume (but not in alveolar number) until the chest wall stops growing in late adolescence.',
        clinicalNote: 'Bronchopulmonary dysplasia (BPD) in premature infants represents arrested alveolarization; modern BPD is characterized by fewer, larger alveoli and a simplified vascular pattern rather than the fibrotic changes of classic BPD.',
        order: 8
      }
    ],

    /* ── Urogenital Development (9 events) ── */
    'Urogenital Development': [
      {
        id: 'ug-001',
        system: 'Urogenital Development',
        week: 'Week 3–4',
        event: 'Intermediate mesoderm forms the urogenital ridge; pronephros appears briefly',
        shortLabel: 'Pronephros appears',
        explanation: 'The intermediate mesoderm, lying between the paraxial somites and the lateral plate, gives rise to the entire urogenital system. It forms a longitudinal urogenital ridge on each side of the dorsal aorta. The most cranial portion of this ridge (cervical somites 1–4) forms the transient pronephros — a series of small tubules connected by the primary nephric duct (pronephric duct). The pronephros is vestigial and non-functional in humans, appearing at day 22 and disappearing by day 25, but the pronephric duct persists and is essential for inducing the next, functional kidney system.',
        clinicalNote: 'The pronephros itself has no direct clinical significance, but the pronephric duct\'s caudal extension to the cloaca is essential for subsequent mesonephros and metanephros induction.',
        order: 1
      },
      {
        id: 'ug-002',
        system: 'Urogenital Development',
        week: 'Week 4 (Day 24–28)',
        event: 'Mesonephros forms with functional glomeruli and Wolffian duct reaches the cloaca',
        shortLabel: 'Mesonephros forms',
        explanation: 'The mesonephros (intermediate kidney) develops from the intermediate mesoderm of thoracic and lumbar segments, forming approximately 40 pairs of mesonephric nephrons — each with a glomerulus and a tubule that drains into the mesonephric (Wolffian) duct. The mesonephros is transiently functional in the human embryo during weeks 6–10, producing small amounts of urine. The Wolffian duct grows caudally and reaches the cloaca at day 28. In males, the mesonephric tubules and Wolffian duct will persist as the efferent ductules, epididymis, vas deferens, seminal vesicle, and ejaculatory duct; in females they largely regress.',
        clinicalNote: 'The Gartner duct cyst found along the anterolateral vaginal wall in females is a remnant of the persistent Wolffian duct; it is usually asymptomatic but can cause urinary symptoms if large.',
        order: 2
      },
      {
        id: 'ug-003',
        system: 'Urogenital Development',
        week: 'Week 5 (Day 28–32)',
        event: 'Ureteric bud sprouts from the Wolffian duct; metanephros (permanent kidney) induction begins',
        shortLabel: 'Ureteric bud sprouts',
        explanation: 'The ureteric bud, an outgrowth of the caudal portion of the Wolffian duct just above the cloaca, grows dorsally and cranially into the metanephric mesoderm (blastema) of the sacral intermediate mesoderm. This interaction is the critical inductive event for permanent kidney development: the ureteric bud tip secretes signals (GDNF receptor RET) while the metanephric mesoderm produces GDNF and WNT signals. The ureteric bud will repeatedly branch to form the entire collecting system — ureter, renal pelvis, calyces, and collecting ducts. The metanephric mesoderm will form all of the nephrons (glomeruli, proximal tubules, loops of Henle, distal tubules).',
        clinicalNote: 'The branching point of the ureteric bud from the Wolffian duct is critical: an ectopic bud origin produces a duplex collecting system (the most common renal anomaly) or vesicoureteral reflux due to a short intravesical ureter.',
        order: 3
      },
      {
        id: 'ug-004',
        system: 'Urogenital Development',
        week: 'Week 5–10',
        event: 'Metanephric kidney develops; nephron number determined by ureteric bud branching cycles',
        shortLabel: 'Nephrons form',
        explanation: 'Each ureteric bud tip undergoes approximately 15 branching cycles, and each tip induces the surrounding metanephric mesenchyme cells to aggregate, form a pretubular condensate, undergo mesenchyme-to-epithelial transition (MET), and differentiate into a nephron. Nephron formation proceeds in a centrifugal wave (deep nephrons first). The human kidney contains approximately 800,000 to 1.2 million nephrons, all formed by week 34–36 of gestation. No new nephrons are formed after birth. The WNT4 and Notch signaling pathways drive the MET step that creates the renal vesicle, which elongates into the S-shaped body and then the mature nephron.',
        clinicalNote: 'Low nephron number at birth — caused by prematurity, maternal protein restriction, or genetic factors — is associated with adult hypertension and chronic kidney disease through a mechanism of hyperfiltration injury to individual nephrons (Brenner hypothesis).',
        order: 4
      },
      {
        id: 'ug-005',
        system: 'Urogenital Development',
        week: 'Week 6–9',
        event: 'Kidneys ascend from the sacral region to their adult lumbar position',
        shortLabel: 'Renal ascent',
        explanation: 'Initially positioned in the pelvis opposite the sacrum, the metanephric kidneys ascend progressively through weeks 6–9 as the lumbar and sacral regions of the embryo grow. During ascent, the kidneys rotate 90 degrees medially so that the renal hilum faces anteromedially rather than ventrally. The blood supply changes as the kidneys ascend: lower aortic branches are sequentially acquired and then lost as upper branches from the renal level of the aorta establish. The definitive renal arteries (from the lateral aorta at L1–L2) are the last pair acquired and persist as the adult renal arteries.',
        clinicalNote: 'Horseshoe kidney — where the lower poles of both kidneys fuse — occurs because the fused kidneys are trapped below the inferior mesenteric artery during ascent; it is the most common renal fusion anomaly and is associated with Turner syndrome (45,X).',
        order: 5
      },
      {
        id: 'ug-006',
        system: 'Urogenital Development',
        week: 'Week 10–12',
        event: 'Fetal urine production begins; bladder fills with urine and amniotic fluid is maintained',
        shortLabel: 'Fetal urine production',
        explanation: 'Glomerular filtration begins at approximately week 10 as glomerular capillaries mature and the first collecting tubules connect. The fetal kidney produces dilute urine that passes via the ureters into the bladder, which is derived from the urorectal septum\'s anterior division (the urogenital sinus). After week 16, fetal urine is the primary source of amniotic fluid. The fetal kidney does not need to concentrate urine because placental exchange handles fluid homeostasis, but it does process large volumes (up to 500–700 mL/day near term). Fetal urine output is a key source of amniotic fluid for lung maturation and gut development.',
        clinicalNote: 'Renal agenesis (Potter sequence) causes absent urine production, leading to oligohydramnios, pulmonary hypoplasia (from lack of fluid for lung development), and Potter facies with limb deformities from intrauterine compression.',
        order: 6
      },
      {
        id: 'ug-007',
        system: 'Urogenital Development',
        week: 'Week 4–7',
        event: 'Bladder forms from the urogenital sinus; trigone derived from mesonephric ducts',
        shortLabel: 'Bladder forms',
        explanation: 'The urorectal septum divides the cloaca into the rectum (posterior) and the urogenital sinus (anterior). The upper portion of the urogenital sinus expands to form the urinary bladder, while the lower part becomes the urethra. As the mesonephric ducts are absorbed into the posterior bladder wall during weeks 4–7, they contribute mesenchyme that forms the trigone — the triangular smooth region between the ureteral orifices and the internal urethral meatus. The allantois, which originally connected the bladder to the umbilicus, becomes the urachus (median umbilical ligament) after the bladder descends into the pelvis.',
        clinicalNote: 'Urachal remnants (patent urachus, urachal cyst, urachal sinus) arise from failure of the urachus to fully obliterate; a patent urachus presents as urine leaking from the umbilicus in a neonate.',
        order: 7
      },
      {
        id: 'ug-008',
        system: 'Urogenital Development',
        week: 'Week 9–Birth',
        event: 'Ureter insertion matures; ureteral orifices migrate to their adult position on the trigone',
        shortLabel: 'Ureteral migration to trigone',
        explanation: 'After the mesonephric duct is absorbed into the bladder wall, the ureteric bud orifice is initially positioned close to the mesonephric duct on the common excretory duct. As absorption continues, the ureter orifice migrates cranially and laterally to reach the superolateral corners of the trigone, while the mesonephric duct orifice migrates caudally to the verumontanum (in males). This migration establishes a long submucosal tunnel for the ureter in the bladder wall — the key anti-reflux mechanism. The length of this intravesical ureteral segment determines whether vesicoureteral reflux occurs.',
        clinicalNote: 'Primary vesicoureteral reflux — the most common urological anomaly in children — results from a short intravesical ureteral tunnel due to incomplete lateral migration of the ureteral bud orifice; it predisposes to ascending urinary tract infections and renal scarring.',
        order: 8
      },
      {
        id: 'ug-009',
        system: 'Urogenital Development',
        week: 'Birth',
        event: 'Transition to postnatal renal function — the kidneys assume full homeostatic responsibility',
        shortLabel: 'Postnatal renal function',
        explanation: 'At birth, the kidneys immediately take over fluid and electrolyte homeostasis from the placenta. Glomerular filtration rate (GFR) at birth is only 20–25% of the adult value (corrected for body surface area) and doubles over the first 2 weeks of life as renal blood flow increases. The neonatal kidney has a limited concentrating ability (maximum ~600 mOsm/kg vs. adult 1200 mOsm/kg) because the loop of Henle is short and collecting duct responsiveness to ADH is immature. Tubular secretory capacity also matures gradually. Premature neonates have especially immature kidneys with even lower GFR and concentrating ability.',
        clinicalNote: 'Drug dosing in neonates must account for immature renal function; renally cleared drugs such as aminoglycosides have prolonged half-lives and require dose adjustment and plasma monitoring to avoid accumulation and toxicity.',
        order: 9
      }
    ],

    /* ── Reproductive Development (10 events) ── */
    'Reproductive Development': [
      {
        id: 'rp-001',
        system: 'Reproductive Development',
        week: 'Week 3 (Day 24)',
        event: 'Primordial germ cells (PGCs) segregate in the epiblast and migrate to the yolk sac wall',
        shortLabel: 'Primordial germ cells form',
        explanation: 'Primordial germ cells are the founders of the germline and are specified very early in embryogenesis — in humans by BMP4 and BMP8b signals from the extraembryonic ectoderm that activate PRDM1 (BLIMP1) expression in a subset of epiblast cells. These PGCs are identified in the endoderm of the posterior wall of the yolk sac near the allantois at approximately day 24. They are large cells with alkaline phosphatase activity and express the transcription factors OCT4 and NANOG. They must migrate a long distance to reach the developing gonads.',
        clinicalNote: 'Gonadal dysgenesis and germ cell tumors can occur when PGC migration fails or PGCs proliferate ectopically; sacrococcygeal teratomas are the most common neonatal tumor and arise from ectopic PGCs near the allantois.',
        order: 1
      },
      {
        id: 'rp-002',
        system: 'Reproductive Development',
        week: 'Week 4–5',
        event: 'PGCs migrate along the hindgut mesentery to colonize the genital ridges',
        shortLabel: 'PGC migration to genital ridge',
        explanation: 'Primordial germ cells actively migrate from the yolk sac wall through the hindgut endoderm and then along the dorsal mesentery to reach the genital ridges (urogenital ridges) on each side of the aorta at the level of the 10th thoracic vertebra. This migration involves amoeboid movement, guided by chemotactic signals including stem cell factor (SCF) and its receptor c-Kit expressed on PGCs. Migration is complete by week 6. During transit, PGCs actively proliferate; they arrive at the gonad as a population of approximately 1,000–2,000 cells, which will expand dramatically.',
        clinicalNote: 'Mutations in c-KIT cause failure of PGC migration and result in gonadal aplasia; activating c-KIT mutations are found in some testicular germ cell tumors, highlighting the continued developmental relevance of this pathway.',
        order: 2
      },
      {
        id: 'rp-003',
        system: 'Reproductive Development',
        week: 'Week 5–6',
        event: 'Indifferent gonad forms on the urogenital ridge with cortex and medulla',
        shortLabel: 'Indifferent gonad forms',
        explanation: 'Upon PGC arrival, the coelomic epithelium and underlying mesenchyme of the urogenital ridge proliferate to form the indifferent (sexually bipotential) gonad. The gonad develops an outer cortex and inner medulla; the cortex will form the ovary in females and the medulla will form the testis in males. Sex cords (aggregates of coelomic epithelium and PGCs) form in both sexes and run into the gonadal blastema. At this stage the gonad is histologically identical in XX and XY embryos. The gonad is attached by a gubernaculum caudally and a cranial gonadal ligament cranially.',
        clinicalNote: 'Streak gonads (small fibrous structures without germ cells) occur when PGCs fail to arrive or degenerate; they are characteristic of Turner syndrome (45,X) and carry a risk of gonadoblastoma in individuals with Y-chromosome material.',
        order: 3
      },
      {
        id: 'rp-004',
        system: 'Reproductive Development',
        week: 'Week 6–7',
        event: 'Sex determination — SRY activates the testicular differentiation pathway in XY gonads',
        shortLabel: 'Sex determination (SRY)',
        explanation: 'The Y-chromosome gene SRY is expressed in the pre-Sertoli cells of the XY gonad at approximately week 6, initiating the testis-determining pathway. SRY protein activates SOX9, which upregulates FGF9, promoting Sertoli cell differentiation and suppressing the female ovarian pathway (driven by RSPO1/WNT4/beta-catenin). Sertoli cells organize the sex cords into testicular cords (precursors of seminiferous tubules) and ensheath them with a tunica albuginea. In the absence of SRY (XX embryos), WNT4/RSPO1 signaling is unopposed, activating FOXL2 and directing granulosa cell differentiation and ovarian development.',
        clinicalNote: 'SRY mutations or translocations cause 46,XY complete gonadal dysgenesis (Swyer syndrome) — phenotypically female individuals with streak gonads and risk of gonadoblastoma; 46,XX males have SRY translocated to an X chromosome.',
        order: 4
      },
      {
        id: 'rp-005',
        system: 'Reproductive Development',
        week: 'Week 7–8',
        event: 'Sertoli cells produce AMH; Leydig cells produce testosterone — male ducts develop',
        shortLabel: 'Testicular hormones act',
        explanation: 'Sertoli cells are the first cell type to differentiate in the fetal testis. They secrete anti-Mullerian hormone (AMH), a TGF-beta family member that causes regression of the paramesonephric (Mullerian) ducts in male embryos — if this did not occur, the male embryo would develop a uterus and fallopian tubes. Leydig cells, which differentiate from interstitial mesenchyme under HCG stimulation from the placenta, produce testosterone from week 8. Testosterone stabilizes the mesonephric (Wolffian) ducts, which differentiate into the epididymis, vas deferens, seminal vesicles, and ejaculatory ducts. DHT (from 5-alpha-reductase conversion) masculinizes the external genitalia.',
        clinicalNote: 'Androgen insensitivity syndrome (AIS) — due to AR mutations — causes 46,XY individuals to develop female external genitalia despite testosterone production; complete AIS presents as a phenotypically normal female at birth.',
        order: 5
      },
      {
        id: 'rp-006',
        system: 'Reproductive Development',
        week: 'Week 6–10',
        event: 'Paramesonephric ducts form; in females persist to become uterus, tubes, and vagina',
        shortLabel: 'Mullerian ducts form',
        explanation: 'The paramesonephric (Mullerian) ducts develop by invagination of the coelomic epithelium lateral to the mesonephric ducts in both sexes. In the absence of AMH (i.e., in female embryos or AMH-null males), the Mullerian ducts persist and continue growing caudally. The cranial portions of the Mullerian ducts open into the peritoneal cavity and become the fimbriated ends of the fallopian tubes. The caudal portions of the two Mullerian ducts fuse in the midline by week 10 to form the uterovaginal primordium — the primordium of the uterus, cervix, and upper two-thirds of the vagina. The lower vagina develops from the sinovaginal bulbs of the urogenital sinus.',
        clinicalNote: 'Incomplete fusion of the Mullerian ducts causes uterine anomalies (bicornuate, septate, or didelphys uterus) associated with recurrent pregnancy loss and preterm birth; complete fusion failure (uterus didelphys with double vagina) is the most extreme form.',
        order: 6
      },
      {
        id: 'rp-007',
        system: 'Reproductive Development',
        week: 'Week 9–12',
        event: 'External genitalia differentiate from the indifferent stage under androgen influence',
        shortLabel: 'External genitalia differentiate',
        explanation: 'Until week 9, the external genitalia of both sexes are identical (indifferent stage): a genital tubercle, paired urogenital folds, and paired labioscrotal swellings. In males, DHT (dihydrotestosterone, produced by 5-alpha-reductase from testosterone) elongates the genital tubercle into the phallus, fuses the urogenital folds to form the penile urethra, and fuses the labioscrotal swellings into the scrotum. In females, in the absence of androgens, the genital tubercle becomes the clitoris, urogenital folds become the labia minora, and labioscrotal swellings become the labia majora. Differentiation is complete by week 12.',
        clinicalNote: 'Congenital adrenal hyperplasia (CAH) in 46,XX females causes virilization of the external genitalia due to excess adrenal androgens; severe forms present as ambiguous genitalia requiring urgent evaluation. 5-alpha-reductase deficiency in 46,XY individuals produces female-appearing external genitalia at birth with virilization at puberty.',
        order: 7
      },
      {
        id: 'rp-008',
        system: 'Reproductive Development',
        week: 'Week 8–28',
        event: 'Testicular descent — testes move from abdomen to inguinal canal',
        shortLabel: 'Testes begin descending',
        explanation: 'Testicular descent occurs in two phases. In the transabdominal phase (weeks 8–15), INSL3 (insulin-like factor 3) secreted by Leydig cells causes the gubernaculum to enlarge and hold the testis near the inguinal region while the rest of the fetus grows — the testis thus relatively descends. In the inguinoscrotal phase (weeks 28–35), testosterone and the genitofemoral nerve\'s CGRP cause the gubernaculum to contract and the testis to pass through the inguinal canal into the scrotum, guided through the processus vaginalis (an evagination of peritoneum). Both testes are usually in the scrotum by week 35–36.',
        clinicalNote: 'Cryptorchidism (undescended testis) affects 3–5% of full-term boys; it must be corrected by orchidopexy before age 1–2 to preserve fertility and reduce (but not eliminate) the risk of testicular germ cell malignancy.',
        order: 8
      },
      {
        id: 'rp-009',
        system: 'Reproductive Development',
        week: 'Week 12–Birth',
        event: 'Ovarian follicles form; oocytes enter meiosis and arrest at prophase I',
        shortLabel: 'Oocytes enter meiosis',
        explanation: 'In the fetal ovary, PGCs proliferate as oogonia until week 20, reaching a peak of approximately 6–7 million cells. From week 12 onward, oogonia enter the first meiotic division and become primary oocytes, but arrest in the diplotene stage of meiotic prophase I. These arrested oocytes are enclosed by a single layer of flattened granulosa cell precursors to form primordial follicles. By birth, ~1–2 million oocytes remain (atresia has already destroyed most); meiosis resumes only at ovulation during the reproductive years. No new oocytes are formed after birth.',
        clinicalNote: 'The prolonged arrest of oocytes in meiosis I (potentially lasting 40+ years until ovulation) increases susceptibility to meiotic errors (non-disjunction); this explains why the risk of trisomy 21 and other aneuploidies rises steeply with advanced maternal age.',
        order: 9
      },
      {
        id: 'rp-010',
        system: 'Reproductive Development',
        week: 'Birth',
        event: 'Reproductive system dormant until puberty; genital anatomy fully formed at birth',
        shortLabel: 'Genitalia fully formed',
        explanation: 'By birth, all components of the reproductive system are anatomically present in their adult configuration, but functionally dormant. In females: ovaries contain ~1–2 million primordial follicles, the uterus is small, and the vagina is present. In males: testes are in the scrotum, the full male ductal system is present, and Leydig cells regress after birth (a postnatal testosterone surge occurs in the first months, then the axis is quiescent until puberty). The hypothalamic–pituitary–gonadal axis is briefly active in the neonatal period (producing a "mini-puberty"), and then dormant until GnRH pulse generation restarts at puberty.',
        clinicalNote: 'Ambiguous genitalia at birth requires urgent, multidisciplinary evaluation including karyotype, hormone levels, and imaging; the condition is called a Difference of Sex Development (DSD) and gender assignment requires careful consideration of all factors.',
        order: 10
      }
    ],

    /* ── CNS Development (10 events) ── */
    'CNS Development': [
      {
        id: 'cn-001',
        system: 'CNS Development',
        week: 'Week 3 (Day 18–19)',
        event: 'Neural plate forms from ectoderm overlying the notochord — neurulation begins',
        shortLabel: 'Neural plate forms',
        explanation: 'Signals from the notochord (notably Sonic Hedgehog / SHH) and paraxial mesoderm induce the overlying ectoderm to differentiate into the neural plate — a thickened slipper-shaped epithelium that is the primordium of the entire CNS and PNS. This process is called primary induction or neural induction. BMP inhibitors (Noggin, Chordin, Follistatin) secreted by the organizer prevent the neural plate from becoming epidermis. The neural plate is wider at its cranial end (future brain) than at its caudal end (future spinal cord), reflecting the greater complexity of brain development.',
        clinicalNote: 'Understanding BMP-inhibitor signaling in neural induction has led to the development of neural induction protocols for generating neurons from pluripotent stem cells, with therapeutic implications for Parkinson disease and spinal cord injury.',
        order: 1
      },
      {
        id: 'cn-002',
        system: 'CNS Development',
        week: 'Week 3 (Day 20–22)',
        event: 'Neural folds rise; neural groove deepens along the dorsal axis',
        shortLabel: 'Neural folds elevate',
        explanation: 'The lateral edges of the neural plate thicken and elevate to form the bilateral neural folds, which border a deepening central neural groove. The neural folds are pushed upward by proliferation of neural plate cells and possibly by hinge-point bending driven by changes in cell shape (apical constriction). At the tips of the neural folds, where neural ectoderm meets surface ectoderm, the neural crest cells are specified. The neural folds will converge and fuse in the midline to create the neural tube. This process of tube formation from a flat plate is called primary neurulation.',
        clinicalNote: 'Folic acid supplementation before and during early pregnancy reduces the risk of neural tube defects (NTDs) by approximately 70%; the mechanism involves folate\'s role in providing methyl groups for DNA methylation and synthesis of purines needed for cell division.',
        order: 2
      },
      {
        id: 'cn-003',
        system: 'CNS Development',
        week: 'Week 3–4 (Day 22–28)',
        event: 'Neural tube closes — fusion begins cervically and spreads to anterior and posterior neuropores',
        shortLabel: 'Neural tube closes',
        explanation: 'Neural tube closure is not a zipper-like process from one end to the other; in humans it initiates at multiple sites and proceeds bidirectionally. The initial closure site is in the cervical region (around somite level 4–5). Closure then proceeds cranially toward the anterior neuropore and caudally toward the posterior neuropore. The anterior neuropore closes at approximately day 25 (end of week 4), and the posterior neuropore closes at approximately day 28. Simultaneous with neural tube closure, the overlying surface ectoderm seals over the tube, and neural crest cells delaminate from the dorsal neural tube.',
        clinicalNote: 'Failure of anterior neuropore closure causes anencephaly (the most severe NTD — incompatible with life); failure of posterior neuropore closure causes spina bifida aperta (myelomeningocele), the most common severe congenital malformation of the CNS.',
        order: 3
      },
      {
        id: 'cn-004',
        system: 'CNS Development',
        week: 'Week 4',
        event: 'Three primary brain vesicles form: prosencephalon, mesencephalon, rhombencephalon',
        shortLabel: 'Three brain vesicles form',
        explanation: 'After neural tube closure, the cranial neural tube expands into three primary brain vesicles: the prosencephalon (forebrain), the mesencephalon (midbrain), and the rhombencephalon (hindbrain). Simultaneously, two cephalic flexures appear — the midbrain flexure (at the mesencephalon) and the cervical flexure (at the junction of rhombencephalon and spinal cord) — bending the developing brain into a C-shape. The lumen of the neural tube within the brain vesicles is the primordium of the cerebral ventricles; the neural tube lumen of the spinal cord will become the central canal.',
        clinicalNote: 'Holoprosencephaly — failure of the prosencephalon to divide into two cerebral hemispheres — is the most common forebrain malformation, associated with trisomy 13, midline facial abnormalities, and mutations in SHH or ZIC2.',
        order: 4
      },
      {
        id: 'cn-005',
        system: 'CNS Development',
        week: 'Week 5',
        event: 'Five secondary brain vesicles and brain flexures complete the basic brain plan',
        shortLabel: 'Five brain vesicles form',
        explanation: 'The three primary vesicles subdivide further: the prosencephalon divides into the telencephalon (future cerebral hemispheres and basal ganglia) and the diencephalon (future thalamus, hypothalamus, and retina); the mesencephalon remains undivided; the rhombencephalon divides into the metencephalon (future pons and cerebellum) and the myelencephalon (future medulla oblongata). By week 6, the telencephalic vesicles have begun to expand dramatically. The lateral ventricles correspond to the telencephalic cavities, the third ventricle to the diencephalic cavity, the aqueduct to the mesencephalon, and the fourth ventricle to the rhombencephalon.',
        clinicalNote: 'The fourth ventricle develops within the rhombencephalon; Dandy-Walker malformation (cystic dilation of the fourth ventricle with cerebellar vermis hypoplasia) results from abnormal rhombencephalic development and can cause hydrocephalus.',
        order: 5
      },
      {
        id: 'cn-006',
        system: 'CNS Development',
        week: 'Week 5–8',
        event: 'Spinal cord differentiates — ventricular, intermediate, and marginal zones established',
        shortLabel: 'Spinal cord zones form',
        explanation: 'The neural tube wall of the spinal cord differentiates into three concentric zones. The ventricular zone (ependymal layer) lines the lumen and contains dividing progenitor cells. The intermediate zone (mantle layer), formed by postmitotic neurons migrating away from the ventricle, is organized into a dorsal alar plate (sensory) and a ventral basal plate (motor) separated by the sulcus limitans. The marginal zone (marginal layer) consists of axons and will become the white matter after myelination. This organization reflects the cardinal anatomical rule of the spinal cord: dorsal is sensory, ventral is motor.',
        clinicalNote: 'The sulcus limitans and its dorsal/ventral distinction persists into the adult brainstem: cranial nerve nuclei follow the same plan (alar plate = sensory nuclei dorsolaterally; basal plate = motor nuclei ventromedially), aiding localization of brainstem lesions.',
        order: 6
      },
      {
        id: 'cn-007',
        system: 'CNS Development',
        week: 'Week 8–20',
        event: 'Cerebral cortex neurogenesis — neurons born in the ventricular zone migrate to the cortical plate',
        shortLabel: 'Cortical neurogenesis',
        explanation: 'Cortical neurons are generated in the ventricular and subventricular zones lining the lateral ventricles. They migrate outward along the processes of radial glial cells (which also serve as neural progenitors) to form the cortical plate in an inside-out sequence: early-born neurons settle in the deep layers (VI, V) and later-born neurons pass through earlier layers to settle in superficial layers (IV, III, II). This process of cortical neurogenesis peaks between weeks 12 and 20. Total cortical neuron number is largely established by week 20; subsequent growth of the brain reflects dendritic arborization, synaptogenesis, myelination, and glia production rather than new neuron formation.',
        clinicalNote: 'Lissencephaly (smooth brain) results from defective neuronal migration due to mutations in LIS1 or DCX (doublecortin); the cortex has fewer gyri and is thickened. Heterotopias — nodules of misplaced neurons — are also migration defects and commonly cause epilepsy.',
        order: 7
      },
      {
        id: 'cn-008',
        system: 'CNS Development',
        week: 'Week 16–28',
        event: 'Gyrification begins — cortical folding expands surface area within the skull',
        shortLabel: 'Cortical gyrification begins',
        explanation: 'The fetal brain is smooth (lissencephalic) until approximately week 20–24. Gyrification — the folding of the cortex into gyri (folds) and sulci (grooves) — begins in the second trimester, driven by differential growth rates between cortical layers and the physical constraint of the skull. The primary sulci appear in a predictable sequence: the longitudinal fissure is present by week 14, the Sylvian fissure by week 23, and the central sulcus by week 27. Secondary and tertiary sulci form in the third trimester and continue after birth. Gyrification multiplies the cortical surface area approximately 3-fold, accommodating the large human neocortex within the skull.',
        clinicalNote: 'Polymicrogyria (too many small gyri) and pachygyria (broad, shallow gyri) are cortical malformations due to abnormal gyrification and are common causes of epilepsy and intellectual disability.',
        order: 8
      },
      {
        id: 'cn-009',
        system: 'CNS Development',
        week: 'Week 24–Birth',
        event: 'Myelination begins in the spinal cord and brainstem; ascending to cortex after birth',
        shortLabel: 'Myelination begins',
        explanation: 'Myelination of axons is carried out by oligodendrocytes in the CNS (and by Schwann cells in the PNS). It begins in the spinal cord and brainstem at approximately week 24 of gestation, proceeding in a caudal-to-cranial and posterior-to-anterior direction. The pathways subserving the most basic reflex functions myelinate first (vestibulospinal, reticulospinal). Myelination of the corticospinal tracts is not complete until age 2–3 years; the prefrontal cortex continues myelinating through adolescence into the mid-20s. Myelination dramatically speeds axonal conduction velocity (from ~1 m/s unmyelinated to ~70 m/s myelinated).',
        clinicalNote: 'Periventricular leukomalacia (PVL) — white matter injury in premature infants — targets pre-myelinating oligodendrocyte precursors, which are particularly vulnerable to hypoxic-ischemic and excitotoxic injury between 24 and 34 weeks.',
        order: 9
      },
      {
        id: 'cn-010',
        system: 'CNS Development',
        week: 'Birth–Postnatal',
        event: 'Postnatal brain development — synaptic exuberance then pruning shapes final circuitry',
        shortLabel: 'Postnatal synaptic pruning',
        explanation: 'The human brain at birth has approximately 100 billion neurons but most synaptic connections have not yet formed. Postnatal development is characterized by a burst of synaptogenesis (the brain is not "hardwired" at birth), reaching peak synaptic density in the visual cortex at ~8 months and in the prefrontal cortex at ~1–2 years. This is followed by a prolonged period of synaptic pruning driven by activity-dependent competition and glial engulfment (complement-mediated), which removes ~50% of synapses to refine circuits. The final pattern of connections is sculpted by both genetic programs and sensory experience during critical and sensitive periods.',
        clinicalNote: 'Abnormal synaptic pruning is implicated in autism spectrum disorder (too little pruning → excess connectivity) and schizophrenia (excessive pruning of prefrontal synapses during adolescence); this is also why environmental exposures (trauma, drugs) during postnatal critical periods have lasting effects on brain function.',
        order: 10
      }
    ],

    /* ── Limb Development (9 events) ── */
    'Limb Development': [
      {
        id: 'lb-001',
        system: 'Limb Development',
        week: 'Week 4 (Day 26–27)',
        event: 'Upper limb buds emerge as lateral plate mesoderm proliferations opposite C5–T1 somites',
        shortLabel: 'Upper limb buds appear',
        explanation: 'Limb buds form when lateral plate somatopleuric mesoderm cells proliferate under the surface ectoderm, forming a rounded protrusion. Upper limb buds appear first at approximately day 26–27, opposite the cervical 5 to thoracic 1 somites. The timing and position of limb bud initiation along the body axis are determined by Hox genes (primarily Hoxb8) and FGF10 secreted from the lateral plate mesoderm. The overlying ectoderm is induced to form the apical ectodermal ridge (AER) in response to FGF10. The mesoderm inside the limb bud is the lateral plate mesoderm (which will form the skeleton and connective tissue) plus invading myoblasts from adjacent somites (which form the muscles).',
        clinicalNote: 'Thalidomide caused limb defects (phocomelia — "seal limbs") by inhibiting FGF8/FGF10 signaling in limb buds between weeks 4 and 7; this historical tragedy established the concept of teratogen-sensitive developmental windows.',
        order: 1
      },
      {
        id: 'lb-002',
        system: 'Limb Development',
        week: 'Week 4 (Day 28–29)',
        event: 'Lower limb buds appear; apical ectodermal ridge (AER) drives proximal-to-distal outgrowth',
        shortLabel: 'Lower limb buds appear',
        explanation: 'Lower limb buds appear approximately 2 days after upper limb buds, opposite the lumbar 1 to sacral 2 somites. In both limbs, the apical ectodermal ridge (AER) — a specialized thickening of the ectoderm at the limb tip — is the critical organizer of proximal-to-distal outgrowth. The AER produces FGF4 and FGF8, which maintain a zone of active, undifferentiated mesoderm beneath it called the progress zone. Cells leave the progress zone proximally and differentiate in order: first the upper arm/thigh, then the forearm/leg, then the hand/foot. Removal of the AER at any stage stops distal outgrowth, truncating the limb at the level already laid down.',
        clinicalNote: 'Ectrodactyly (split hand/foot malformation) results from central AER defects that leave the medial rays without ectodermal support; mutations in the transcription factor TP63 (p63) are the most common genetic cause.',
        order: 2
      },
      {
        id: 'lb-003',
        system: 'Limb Development',
        week: 'Week 5',
        event: 'Zone of polarizing activity (ZPA) establishes the anterior–posterior axis via Sonic Hedgehog',
        shortLabel: 'ZPA and SHH signaling',
        explanation: 'The zone of polarizing activity (ZPA) is a group of mesenchymal cells at the posterior margin of the limb bud (the future little-finger/big-toe side). The ZPA expresses Sonic Hedgehog (SHH), a morphogen that diffuses across the limb bud and specifies digit identity in a concentration-dependent manner: high SHH → digit 5 (little finger), decreasing concentrations → digits 4, 3, 2, 1 (thumb). The AER and ZPA form a positive feedback loop: ZPA-SHH maintains AER-FGF production, and AER-FGFs maintain ZPA-SHH expression. The dorsoventral axis is controlled by Wnt7a (dorsal) and Engrailed-1 (ventral) in the overlying ectoderm.',
        clinicalNote: 'Preaxial polydactyly (extra thumbs) is caused by ectopic SHH expression on the anterior side of the limb due to mutations in a long-range ZPA enhancer (the ZRS); this enhancer is one of the best characterized tissue-specific enhancers in the human genome.',
        order: 3
      },
      {
        id: 'lb-004',
        system: 'Limb Development',
        week: 'Week 5–6',
        event: 'Limb paddle forms; chondrification begins with cartilaginous models of long bones',
        shortLabel: 'Chondrification begins',
        explanation: 'The distal limb mesoderm flattens into a paddle shape; within the limb bud, mesenchymal cells condense in the positions of the future skeletal elements (a process guided by cell adhesion molecules and Sox9). These condensations differentiate into chondrocytes, forming cartilage anlagen (models) of the bones. Chondrification proceeds in a proximal-to-distal sequence: humerus/femur first, then radius-ulna/tibia-fibula, then carpal/tarsal bones, then metacarpals/metatarsals, then phalanges. The cartilage model is later replaced by bone through endochondral ossification. The clavicle is unique in forming by membranous ossification (without a cartilage model).',
        clinicalNote: 'Achondroplasia — the most common form of dwarfism — is caused by a gain-of-function mutation in FGFR3 that inhibits chondrocyte proliferation in growth plates; the limb cartilage condenses normally but then fails to elongate properly.',
        order: 4
      },
      {
        id: 'lb-005',
        system: 'Limb Development',
        week: 'Week 6',
        event: 'Digital rays form; interdigital apoptosis sculpts individual fingers',
        shortLabel: 'Digits separated by apoptosis',
        explanation: 'Five digital rays — condensations of cartilage within the hand/foot paddle — form during week 6, with their positional identity pre-specified by SHH and Hox gene expression. The interdigital mesenchyme between the rays undergoes programmed cell death (apoptosis) mediated by BMP4 and BMP7 signaling between weeks 6 and 8. This apoptosis carves out the individual digits; without it, the digits remain webbed (syndactyly). The AER regresses over each inter-digital space as interdigital apoptosis occurs. Nails begin forming at week 10 from nail folds of the dorsal digital tip.',
        clinicalNote: 'Syndactyly (fused digits) results from failure of interdigital apoptosis; it is the most common limb malformation. Apert syndrome (FGFR2 mutation) causes severe syndactyly of all fingers and toes (mitten hand/foot).',
        order: 5
      },
      {
        id: 'lb-006',
        system: 'Limb Development',
        week: 'Week 6–7',
        event: 'Limb rotation — upper limbs rotate laterally 90°; lower limbs rotate medially 90°',
        shortLabel: 'Limb rotation',
        explanation: 'After digital ray formation, the limbs undergo differential rotation that explains the adult orientation of joints and muscle compartments. The upper limb rotates 90 degrees laterally (externally): the original dorsal surface faces posteriorly, the elbow bends posteriorly, and the thumb comes to lie laterally. The lower limb rotates 90 degrees medially (internally): the original dorsal surface faces anteriorly, the knee bends anteriorly, and the big toe comes to lie medially. This rotation is driven by differential growth within the limb mesoderm. The rotation explains why dermatomes spiral around the limb rather than running in simple longitudinal bands.',
        clinicalNote: 'The spiraling of limb dermatomes (C6 thumb → C7 middle finger → C8 little finger → T1 medial arm) reflects this rotation and must be understood to correctly localize cervical disc herniations by dermatome pattern.',
        order: 6
      },
      {
        id: 'lb-007',
        system: 'Limb Development',
        week: 'Week 7–8',
        event: 'Primary ossification centers appear; clavicle is the first bone to ossify',
        shortLabel: 'Primary ossification begins',
        explanation: 'Endochondral ossification begins within the cartilage models of long bones when blood vessels invade the cartilage from the periosteum. The invading vessels bring osteoblast precursors and macrophage/osteoclast precursors that replace the cartilage with woven bone. The clavicle is unusual in ossifying directly by membranous ossification (intramembranous), making it the first bone to begin ossifying (around week 7). The diaphyses of long bones have established their primary ossification centers by week 12. Secondary ossification centers in the epiphyses form postnatally, with the distal femur being the most reliable indicator of gestational age (present from ~36 weeks).',
        clinicalNote: 'Cleidocranial dysplasia (CCD), caused by RUNX2 mutations, impairs both membranous and endochondral ossification, resulting in absent/hypoplastic clavicles, open fontanelles, and supernumerary teeth.',
        order: 7
      },
      {
        id: 'lb-008',
        system: 'Limb Development',
        week: 'Week 8',
        event: 'All major limb structures recognizable; musculature established from somitic myoblasts',
        shortLabel: 'Limb musculature complete',
        explanation: 'By week 8, the embryonic limbs have all their major skeletal and muscular components in recognizable form. Muscle cells (myoblasts) migrate into the limb from the hypaxial portion of adjacent somites, guided by CXCL12/CXCR4 chemotaxis and scatter factor (HGF/SF). In the limb, myoblasts aggregate and fuse into primary and secondary myotubes. The pre-existing limb mesenchyme patterns the invading myoblasts into dorsal (extensor) and ventral (flexor) muscle masses, which are then subdivided into individual muscles by connective tissue septa derived from lateral plate mesoderm. Motor axons from the spinal cord reach the limb by week 6–7 and guide final muscle differentiation.',
        clinicalNote: 'Arthrogryposis multiplex congenita (multiple joint contractures at birth) results from reduced fetal movement, which can have neuromuscular causes; understanding the somitic origin of limb muscles explains why anterior horn cell diseases (spinal muscular atrophy) severely affect limb muscles.',
        order: 8
      },
      {
        id: 'lb-009',
        system: 'Limb Development',
        week: 'Birth–8 years',
        event: 'Postnatal ossification — secondary ossification centers appear and growth plates elongate bones',
        shortLabel: 'Postnatal bone growth',
        explanation: 'After birth, secondary ossification centers form in the epiphyses of long bones in a predictable sequence that can be used to estimate bone age on X-ray. The growth plate (physis) between the primary and secondary ossification centers allows continued longitudinal bone growth until skeletal maturity. Chondrocytes in the growth plate are organized into resting, proliferating, hypertrophic, and calcifying zones; growth hormone and IGF-1 stimulate chondrocyte proliferation. Most limb bones have multiple secondary centers (two or more per bone) that fuse at predictable ages. The last epiphyses to close are the medial clavicle and proximal femur, completing skeletal maturity at ~25 years.',
        clinicalNote: 'Salter-Harris fractures through the growth plate in children are classified by their relationship to the physis; type I (through the plate) is most benign, while type V (crushing) can permanently arrest bone growth.',
        order: 9
      }
    ],

    /* ── Head and Neck Development (10 events) ── */
    'Head and Neck Development': [
      {
        id: 'hn-001',
        system: 'Head and Neck Development',
        week: 'Week 4 (Day 24–26)',
        event: 'Pharyngeal arches 1–4 and 6 appear as paired mesodermal columns in the neck',
        shortLabel: 'Pharyngeal arches form',
        explanation: 'The pharyngeal arches (also called branchial arches) develop as paired columns of mesoderm and neural crest cells separated by pharyngeal clefts (grooves of surface ectoderm) externally and pharyngeal pouches (endodermal evaginations) internally. Four well-formed arches (1, 2, 3, 4) and a fifth rudimentary arch (number 6) are present in humans by week 5; arch 5 is absent or merges with arch 6. Each arch has a central cartilaginous bar, muscular component, arterial arch, and nerve. Neural crest cells provide the skeletogenic mesenchyme of each arch, while the core mesoderm gives the myoblasts for arch muscles. The Hox code determines arch identity (arches 3–6 express Hox genes; arches 1 and 2 are Hox-negative).',
        clinicalNote: 'Branchiogenic (branchial cleft) cysts, sinuses, and fistulas are the most common lateral neck masses in children; they arise from remnants of the pharyngeal clefts or pouches, most commonly the second cleft/pouch, presenting along the anterior border of the sternocleidomastoid muscle.',
        order: 1
      },
      {
        id: 'hn-002',
        system: 'Head and Neck Development',
        week: 'Week 4–5',
        event: 'Arch 1 derivatives: mandible, Meckel cartilage, muscles of mastication, malleus and incus',
        shortLabel: 'Arch 1 derivatives',
        explanation: 'The first pharyngeal arch (mandibular arch) gives rise to extensive structures. Its cartilaginous bar, Meckel\'s cartilage, acts as a template around which the mandible (dentary bone) forms by membranous ossification; the posterior portion of Meckel\'s cartilage contributes to the malleus and incus of the middle ear (by endochondral ossification). The maxillary process of arch 1 contributes the maxilla, zygomatic, and palatine bones. Arch 1 muscles (all innervated by CN V3, the mandibular nerve) include all muscles of mastication (masseter, temporalis, medial and lateral pterygoids), tensor tympani, tensor veli palatini, mylohyoid, and anterior belly of digastric.',
        clinicalNote: 'Treacher Collins syndrome (mandibulofacial dysostosis), caused by TCOF1 mutations affecting neural crest migration into arch 1, produces hypoplastic mandible, malformed ears, and colobomata — a classic first arch syndrome.',
        order: 2
      },
      {
        id: 'hn-003',
        system: 'Head and Neck Development',
        week: 'Week 4–5',
        event: 'Arch 2 derivatives: Reichert cartilage, muscles of facial expression, stapes, styloid process',
        shortLabel: 'Arch 2 derivatives',
        explanation: 'The second pharyngeal arch (hyoid arch) gives rise to: the stapes of the middle ear, the styloid process of the temporal bone, the stylohyoid ligament, and the lesser cornu and upper body of the hyoid bone (from Reichert\'s cartilage). All muscles of facial expression (supplied by CN VII — the facial nerve of arch 2) derive from arch 2 musculature; these also include the stapedius, stylohyoid, and posterior belly of digastric. The facial nerve travels through structures derived from arch 2 (the parotid gland) and supplies all muscles of arch 2 origin, explaining the branching pattern of CN VII in the face.',
        clinicalNote: 'First and second arch syndrome encompasses conditions affecting both arches; Hemifacial microsomia (Goldenhar syndrome) involves unilateral underdevelopment of arch 1 and 2 derivatives, presenting with asymmetric facial bones, abnormal ears, and facial nerve palsy.',
        order: 3
      },
      {
        id: 'hn-004',
        system: 'Head and Neck Development',
        week: 'Week 4–8',
        event: 'Pharyngeal pouches differentiate into tympanic cavity, tonsils, thymus, and parathyroids',
        shortLabel: 'Pharyngeal pouches differentiate',
        explanation: 'The endodermal pharyngeal pouches give rise to critical neck glands. Pouch 1 becomes the tubotympanic recess — the tympanic cavity of the middle ear and the auditory (Eustachian) tube. Pouch 2 gives rise to the palatine tonsil and its crypts. Pouch 3 is the most clinically important: its dorsal wing gives the inferior parathyroid gland and its ventral wing gives the thymus (which then migrates caudally into the thorax). Pouch 4 gives the superior parathyroid gland. The superior parathyroids (from pouch 4) are more constant in position than the inferior parathyroids (from pouch 3) because the inferior parathyroids migrate with the thymus and can end up anywhere from the jaw to the anterior mediastinum.',
        clinicalNote: 'DiGeorge syndrome (22q11 deletion) disrupts pouch 3 and 4 development, causing thymic aplasia/hypoplasia (T-cell immunodeficiency), hypoparathyroidism (hypocalcemia), and conotruncal heart defects — the classic triad.',
        order: 4
      },
      {
        id: 'hn-005',
        system: 'Head and Neck Development',
        week: 'Week 4 (Day 24)',
        event: 'Thyroid gland descends from the foramen cecum via the thyroglossal duct',
        shortLabel: 'Thyroid descends',
        explanation: 'The thyroid gland is the first endocrine gland to develop, arising from a median endodermal thickening at the base of the tongue at the foramen cecum (junction of the anterior 2/3 and posterior 1/3 of the tongue). It descends along the thyroglossal duct through the midline of the neck, passing anterior to or through the hyoid bone, to reach its final position anterior to the trachea at the level of the 2nd–4th tracheal rings by week 7. The thyroglossal duct normally obliterates; the thyroid reaches its adult position by week 7. Thyroxine synthesis begins at week 12 when TSH receptors are expressed and the thyroid takes over from the placental hormones.',
        clinicalNote: 'Thyroglossal duct cysts are the most common midline neck mass in children, occurring anywhere along the descent path (most commonly at or below the hyoid); they move upward with tongue protrusion and are treated by Sistrunk procedure (removing the duct with the midportion of the hyoid bone).',
        order: 5
      },
      {
        id: 'hn-006',
        system: 'Head and Neck Development',
        week: 'Week 5–8',
        event: 'Face develops from five facial processes that converge around the stomodeum',
        shortLabel: 'Facial processes fuse',
        explanation: 'The face is built from five facial processes surrounding the stomodeum (primitive mouth): the single frontonasal prominence (from neuroectoderm), two maxillary processes (from arch 1), and two mandibular processes (arch 1). Nasal placodes form in the frontonasal process and invaginate to create the nasal pits (week 5); the olfactory epithelium develops from these placodes. The medial nasal processes fuse in the midline to form the intermaxillary segment (philtrum, primary palate, four incisor teeth). The maxillary processes fuse laterally with the medial nasal processes and with the intermaxillary segment. These fusions form the upper lip and primary palate by week 7.',
        clinicalNote: 'Cleft lip results from failure of fusion between the maxillary process and the medial nasal process; it can be unilateral or bilateral and is associated with cleft palate in approximately 50% of cases. The combined incidence is 1/700 live births, making it among the most common birth defects.',
        order: 6
      },
      {
        id: 'hn-007',
        system: 'Head and Neck Development',
        week: 'Week 6–9',
        event: 'Secondary palate forms as palatal shelves elevate and fuse in the midline',
        shortLabel: 'Palate closes',
        explanation: 'The secondary palate (the roof of the adult oral cavity) forms from two palatal shelves that grow medially from the maxillary processes on each side. Initially these shelves hang vertically beside the tongue; at approximately week 7–8, they rapidly elevate to a horizontal position above the tongue (driven by intrinsic recoil force and changes in glycosaminoglycan hydration in the shelves). The shelves then contact in the midline and fuse by programmed cell death of the medial edge epithelium (MEE), with mesenchymal continuity restored by week 9. The nasal septum also fuses with the palate from above. The hard palate forms anteriorly; the soft palate and uvula form posteriorly.',
        clinicalNote: 'Cleft palate (isolated) results from failure of palatal shelf elevation or fusion; it is a distinct developmental event from cleft lip. Cleft palate impairs feeding, speech, and middle ear ventilation. It is associated with Pierre Robin sequence (micrognathia → tongue displacement → obstructed palate fusion).',
        order: 7
      },
      {
        id: 'hn-008',
        system: 'Head and Neck Development',
        week: 'Week 6–8',
        event: 'Tongue forms from swellings on arches 1–3; muscles from occipital myotomes',
        shortLabel: 'Tongue forms',
        explanation: 'The tongue develops from multiple swellings on the floor of the pharynx. The anterior 2/3 of the tongue (oral tongue) arises from the fusion of two lateral lingual swellings and one medial swelling (tuberculum impar) — all from arch 1. The posterior 1/3 (pharyngeal tongue) develops from the copula (arch 2 and 3 mesoderm) and the epiglottis (arch 4). The overlying mucosa of the anterior 2/3 is supplied by CN V3 (general sensation) and CN VII (taste via chorda tympani), reflecting its arch 1 origin. The posterior 1/3 is supplied by CN IX (arch 3 origin). Tongue muscles are the only muscles of the head that derive from occipital somites (myotomes), which migrate into the tongue guided by the hypoglossal nerve (CN XII).',
        clinicalNote: 'Ankyloglossia (tongue-tie) occurs when the lingual frenulum is abnormally short or extends to the tongue tip; significant cases can impair breastfeeding and may require frenotomy.',
        order: 8
      },
      {
        id: 'hn-009',
        system: 'Head and Neck Development',
        week: 'Week 6–10',
        event: 'Teeth develop from enamel organs (ectoderm) and dental papillae (neural crest mesenchyme)',
        shortLabel: 'Tooth development begins',
        explanation: 'Tooth development (odontogenesis) begins when the oral ectoderm (dental lamina) invaginates into the underlying neural crest-derived mesenchyme. Each tooth primordium progresses through bud stage (thickening), cap stage (folding around a dental papilla), and bell stage (differentiation of inner enamel epithelium into ameloblasts and outer dental papilla cells into odontoblasts). Ameloblasts produce enamel (the hardest substance in the body, 96% mineral); odontoblasts produce dentine. Enamel formation is unique in that it is ectoderm-derived and cannot be regenerated after eruption. Deciduous (primary) tooth initiation begins at week 6; permanent teeth initiate at week 20.',
        clinicalNote: 'Tetracycline antibiotics chelate calcium and are incorporated into forming teeth and bones when given during tooth mineralization (weeks 14–birth for primary teeth; 3 months–7 years for permanent teeth), causing permanent yellow-brown staining — hence tetracyclines are contraindicated in pregnancy and children under 8.',
        order: 9
      },
      {
        id: 'hn-010',
        system: 'Head and Neck Development',
        week: 'Week 6–Birth',
        event: 'Ear develops from otic placode (inner ear), first cleft (external ear), and arches 1 and 2 (ossicles)',
        shortLabel: 'Ear structures develop',
        explanation: 'Ear development has three separate origins. The inner ear (membranous labyrinth) develops from the otic placode — a thickening of surface ectoderm beside the hindbrain that invaginates to form the otic vesicle (otocyst); the cochlear duct (hearing) and semicircular canals (balance) differentiate from its ventral and dorsal parts, respectively. The middle ear cavity forms from pharyngeal pouch 1 (the tympanic cavity) and the ossicles from Meckel\'s cartilage/arch 1 (malleus and incus) and Reichert\'s cartilage/arch 2 (stapes). The external auditory canal forms from the first pharyngeal cleft, and the auricle from six auricular hillocks (three from arch 1, three from arch 2) around the first cleft.',
        clinicalNote: 'Congenital hearing loss affects 1–2/1000 newborns; inner ear causes (cochlear hair cell defects, often genetic — connexin 26 mutation being most common) must be distinguished from ossicular chain defects for appropriate management (hearing aids vs. bone-anchored devices vs. cochlear implants).',
        order: 10
      }
    ],

    /* ── Eye and Ear Development (9 events) ── */
    'Eye and Ear Development': [
      {
        id: 'ee-001',
        system: 'Eye and Ear Development',
        week: 'Week 4 (Day 22–24)',
        event: 'Optic vesicles evaginate from the prosencephalon; lens placodes form in overlying ectoderm',
        shortLabel: 'Optic vesicles and lens placode',
        explanation: 'At approximately day 22, lateral evaginations of the prosencephalon wall produce the paired optic vesicles, which grow toward the overlying surface ectoderm. Contact between the optic vesicle and surface ectoderm is essential for lens induction: the optic vesicle secretes signals (FGF, BMP) that instruct the overlying ectoderm to thicken into the lens placode. This is one of the classic examples of embryonic tissue induction — the responding tissue (ectoderm) must be competent (i.e., have appropriate receptors and transcription factors such as PAX6 and SOX2 already expressed). The lens placode and optic vesicle undergo reciprocal inductive interactions.',
        clinicalNote: 'PAX6 is the master regulator of eye development; a single functional copy causes aniridia (absent iris); complete loss of PAX6 function prevents eye formation entirely. The extraordinary conservation of PAX6 across species was demonstrated by the ectopic eye experiments in Drosophila.',
        order: 1
      },
      {
        id: 'ee-002',
        system: 'Eye and Ear Development',
        week: 'Week 5',
        event: 'Optic cup forms by invagination; inner layer becomes retina, outer layer becomes RPE',
        shortLabel: 'Optic cup forms',
        explanation: 'The optic vesicle invaginates to form the double-walled optic cup. The invagination begins at the ventral surface (creating the optic fissure/choroid fissure) and involves the simultaneous invagination of the lens placode to form the lens vesicle. The inner wall of the optic cup (thicker) gives rise to the neural retina — the photoreceptors, bipolar cells, ganglion cells, and other neurons of the retina. The outer wall (thinner) differentiates into the retinal pigment epithelium (RPE), a single layer of pigmented cells essential for photoreceptor survival and visual cycle. Retinal ganglion cell axons travel along the inner retina, turn at the optic disc, and grow through the optic stalk toward the brain.',
        clinicalNote: 'Failure of the optic fissure to close causes a coloboma — a gap in the inferior iris, retina, or choroid corresponding to the unfused edges of the optic fissure; it can impair vision and is associated with CHARGE syndrome (CHD7 mutation).',
        order: 2
      },
      {
        id: 'ee-003',
        system: 'Eye and Ear Development',
        week: 'Week 5–6',
        event: 'Lens vesicle forms; primary lens fibers fill the lens and cornea develops from neural crest',
        shortLabel: 'Lens and cornea form',
        explanation: 'The lens placode invaginates to form the lens pit and then pinches off as the lens vesicle by week 5–6. The posterior cells of the lens vesicle elongate dramatically to become primary lens fibers, filling the vesicle lumen. Secondary lens fibers are added at the lens equator throughout life, with older fibers pushed to the center (nucleus) and newer fibers forming the cortex. Simultaneously, surface ectoderm (with contributions from neural crest cells) forms the corneal epithelium over the lens. Neural crest-derived mesenchyme migrates between the corneal epithelium and the lens to form the corneal stroma and endothelium. The corneal endothelium is responsible for maintaining corneal transparency through active fluid pumping.',
        clinicalNote: 'Congenital cataracts (opacification of the lens) can be caused by maternal rubella infection (which disrupts lens fiber elongation), galactosemia, or genetic mutations; they must be corrected in the first weeks of life to prevent deprivation amblyopia during the critical period for visual development.',
        order: 3
      },
      {
        id: 'ee-004',
        system: 'Eye and Ear Development',
        week: 'Week 6–7',
        event: 'Retinal layers differentiate; optic fissure closes and hyaloid artery enters the eye',
        shortLabel: 'Retina differentiates; fissure closes',
        explanation: 'Retinal neurogenesis begins in the inner retinal layer of the optic cup, with ganglion cells being the first neurons to differentiate (week 6), followed by horizontal cells, cone photoreceptors, amacrine cells, rod photoreceptors, bipolar cells, and Muller glia in sequence. The optic fissure on the ventral side of the optic cup allows the hyaloid artery (a branch of the ophthalmic artery) to enter and supply the developing lens and inner retina. The fissure closes at week 7 by fusion of the inner and outer cup edges, trapping the hyaloid vessels inside. After the lens completes development, the hyaloid artery regresses to leave the Cloquet canal in the vitreous of the adult eye.',
        clinicalNote: 'Persistent hyperplastic primary vitreous (PHPV) / persistent fetal vasculature (PFV) occurs when the hyaloid vasculature fails to regress; it causes a white pupillary reflex (leukocoria) in a microphthalmia eye and must be distinguished from retinoblastoma.',
        order: 4
      },
      {
        id: 'ee-005',
        system: 'Eye and Ear Development',
        week: 'Week 7–10',
        event: 'Eyelids form and fuse; iris, ciliary body, and choroid develop from neural crest and mesoderm',
        shortLabel: 'Eyelids fuse',
        explanation: 'Upper and lower eyelids develop from folds of surface ectoderm (with underlying neural crest mesenchyme) that grow over the cornea from week 7. They fuse by week 10, remaining sealed until week 26–28 to protect the developing cornea from desiccation. The iris develops from the rim of the optic cup: the pigmented ciliary epithelium and dilator/sphincter pupillae muscles derive from neural ectoderm of the optic cup margin, while the iris stroma is neural crest-derived. The ciliary body forms from the peripheral optic cup and produces aqueous humor. The choroid (vascular layer between retina and sclera) develops from neural crest mesenchyme by vasculogenesis.',
        clinicalNote: 'Ptosis (drooping eyelid) in a newborn can result from CN III palsy, Horner syndrome (from birth trauma affecting the cervical sympathetic chain), or muscular dystrophy; distinguishing cause guides management and urgency of treatment to prevent amblyopia.',
        order: 5
      },
      {
        id: 'ee-006',
        system: 'Eye and Ear Development',
        week: 'Week 4 (Day 22–24)',
        event: 'Otic placode forms and invaginates to create the otic vesicle (otocyst)',
        shortLabel: 'Otic vesicle forms',
        explanation: 'The otic placode forms as a thickening of surface ectoderm adjacent to the rhombencephalon (hindbrain) at approximately day 22. FGF3 and FGF10 from the hindbrain neuroepithelium and underlying mesoderm induce placodal fate; Pax2 and Pax8 are key transcription factors specifying otic identity. The placode invaginates to form the otic pit and then pinches off from the surface ectoderm as the otic vesicle (otocyst) by approximately day 30 (week 5). The otocyst is the primordium of the entire membranous labyrinth — the cochlea (hearing) and vestibular apparatus (balance), including the three semicircular canals, utricle, and saccule.',
        clinicalNote: 'Absence of the otic placode (due to PAX2/PAX8 mutations) causes complete inner ear aplasia (Michel aplasia — absent cochlea and vestibule); structural inner ear malformations detected by MRI are important to identify before cochlear implantation.',
        order: 6
      },
      {
        id: 'ee-007',
        system: 'Eye and Ear Development',
        week: 'Week 5–11',
        event: 'Otocyst differentiates into cochlear duct, semicircular canals, and endolymphatic sac',
        shortLabel: 'Inner ear morphogenesis',
        explanation: 'The otocyst elongates and undergoes complex morphogenesis driven by Shh (cochlear identity) and Wnt (vestibular identity) signaling gradients. The ventral portion evaginates to form the cochlear duct, which coils 2.5 turns by week 11 — the full adult cochlea is achieved at this stage (this is unusual — most organs continue to grow in proportion with the body). The dorsal portion forms the utricle, saccule, and three semicircular canal pouches; the central portions of the pouches fuse and resorb to leave the three semicircular canals oriented perpendicular to each other in the three planes of space. Spiral ganglion neurons form from the neurogenic region of the otocyst and innervate the cochlear hair cells.',
        clinicalNote: 'Mondini malformation (incomplete cochlear coiling — typically 1.5 turns instead of 2.5) and large vestibular aqueduct syndrome are the most common inner ear anomalies detected on CT/MRI in children with sensorineural hearing loss.',
        order: 7
      },
      {
        id: 'ee-008',
        system: 'Eye and Ear Development',
        week: 'Week 8–12',
        event: 'Cochlear and vestibular hair cells differentiate; middle ear ossicles form from arch cartilages',
        shortLabel: 'Hair cells and ossicles form',
        explanation: 'Within the cochlear duct, the organ of Corti differentiates on the floor (basilar membrane) with its characteristic mosaic of inner and outer hair cells (mechanosensory receptor cells with stereocilia) and supporting cells. Atoh1 (Math1) is the master transcription factor that specifies hair cell fate. Hair cells are tonotopically organized: high-frequency sounds activate cells at the base, low-frequency at the apex. In parallel, the middle ear ossicles form from endochondral ossification of the first and second arch cartilages (malleus and incus from Meckel\'s cartilage; stapes from Reichert\'s cartilage). Ossicle development is coordinated with tympanic cavity expansion from pouch 1.',
        clinicalNote: 'Cochlear hair cells in humans cannot regenerate once destroyed (unlike birds and fish); noise-induced and aminoglycoside-induced hearing loss, which preferentially damage outer hair cells at the cochlear base (high-frequency region), is therefore permanent.',
        order: 8
      },
      {
        id: 'ee-009',
        system: 'Eye and Ear Development',
        week: 'Week 20–Birth',
        event: 'Fetal hearing begins; visual cortex develops in anticipation of light stimulation after birth',
        shortLabel: 'Fetal hearing and vision prep',
        explanation: 'Cochlear hair cells are functional by approximately week 20, and the fetus responds behaviorally to sound (startle responses to loud sounds, heart rate changes) from week 24–26. The auditory system matures rapidly in the third trimester; neonates can recognize their mother\'s voice at birth, demonstrating prenatal acoustic learning. In contrast, the visual system awaits postnatal stimulation: the retina and visual pathways are structurally present but the cortical visual areas require visual experience to complete their functional maturation. Visual acuity at birth is approximately 20/200, improving to 20/20 by 6 months. The critical period for visual cortex development extends from birth to approximately 6–8 years.',
        clinicalNote: 'Amblyopia (lazy eye) develops when one eye provides a degraded image during the visual critical period (due to strabismus, cataract, or anisometropia); patching the dominant eye during the critical period forces the weaker eye\'s cortical connections to strengthen and can restore normal vision if treated early.',
        order: 9
      }
    ]

  }; // end TIMELINE_DATA

})();
