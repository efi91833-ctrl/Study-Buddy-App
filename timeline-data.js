/* ============================================================
   Study Buddy — Embryology Timeline Data
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
        event: 'Cardiac progenitor cells specified in the splanchnic lateral plate mesoderm; primary and secondary heart fields established.',
        shortLabel: 'Cardiac progenitors specified',
        explanation: 'BMP2/4 and FGF8 signals from the adjacent endoderm induce cardiogenic mesoderm in the splanchnic lateral plate. Two populations are specified: the first heart field (FHF), which forms the left ventricle and parts of the atria, and the second heart field (SHF), which later contributes the right ventricle and outflow tract.',
        clinicalNote: 'Mutations in cardiac transcription factors NKX2-5, GATA4, and TBX5 — all activated at this stage — underlie familial congenital heart defects including atrial septal defect and congenital AV block.',
        order: 1
      },
      {
        id: 'cd-002',
        system: 'Cardiac Development',
        week: 'Week 3 (Day 18–19)',
        event: 'Two bilateral endocardial tubes form from angioblasts in the cardiogenic crescent.',
        shortLabel: 'Bilateral endocardial tubes form',
        explanation: 'Angioblastic cords in the lateral plate mesoderm canalize to form two parallel endocardial heart tubes. These tubes are surrounded by cardiac jelly and an outer layer of myocardial precursor cells derived mainly from the first heart field.',
        clinicalNote: 'Failure of bilateral tube formation or abnormal positioning is associated with ectopia cordis, where the heart lies outside the thoracic cavity.',
        order: 2
      },
      {
        id: 'cd-003',
        system: 'Cardiac Development',
        week: 'Week 3–4 (Day 21–22)',
        event: 'Lateral body folding brings the two endocardial tubes to the midline, where they fuse into a single straight heart tube. The heart begins to beat.',
        shortLabel: 'Heart tubes fuse; first heartbeat',
        explanation: 'Lateral and head folding of the embryo carries the paired endocardial tubes to the midline, where they fuse craniocaudally. The fused heart tube immediately begins rhythmic contractions driven by pacemaker cells in the sinus venosus. This is the earliest functioning organ in the embryo.',
        clinicalNote: 'The fetal heartbeat is first detectable by transvaginal ultrasound at approximately 6 weeks gestational age (4 weeks post-fertilization).',
        order: 3
      },
      {
        id: 'cd-004',
        system: 'Cardiac Development',
        week: 'Week 4 (Day 23–24)',
        event: 'Cardiac looping: the straight heart tube bends to the right (dextral D-loop), establishing left–right asymmetry of the heart.',
        shortLabel: 'D-loop cardiac looping begins',
        explanation: 'The heart tube undergoes rightward bending (D-looping), driven by asymmetric expression of NODAL, LEFTY, and PITX2 on the left side. This morphogenetic event establishes the definitive left–right positional relationship of the cardiac chambers.',
        clinicalNote: 'Randomization or reversal of looping (L-loop) results in situs inversus or dextrocardia. Abnormal cilia in Kartagener syndrome impair the NODAL signaling gradient, causing situs ambiguus or situs inversus totalis.',
        order: 4
      },
      {
        id: 'cd-005',
        system: 'Cardiac Development',
        week: 'Week 4 (Day 28)',
        event: 'Cardiac looping complete. Five primitive regions identifiable: sinus venosus, primitive atrium, primitive ventricle, bulbus cordis, and truncus arteriosus.',
        shortLabel: 'Looping complete; 5 regions identifiable',
        explanation: 'After D-looping, the heart tube is S-shaped and the five sequential regions are distinct. The sinus venosus receives systemic venous return; the primitive atrium will become the adult atria; the primitive ventricle forms the left ventricle; the bulbus cordis contributes to the right ventricle; and the truncus arteriosus gives rise to the aorta and pulmonary trunk.',
        clinicalNote: 'Abnormal contributions from the second heart field to the bulbus cordis underlie double outlet right ventricle and certain forms of tetralogy of Fallot.',
        order: 5
      },
      {
        id: 'cd-006',
        system: 'Cardiac Development',
        week: 'Week 4–5 (Day 28–35)',
        event: 'Endocardial cushions form in the AV canal and outflow tract by epithelial-to-mesenchymal transformation (EMT) of endocardial cells.',
        shortLabel: 'Endocardial cushions form (EMT)',
        explanation: 'TGF-beta signals trigger endocardial cells in the AV canal and conotruncal region to undergo EMT, invading the cardiac jelly to form endocardial cushions. These cushions are critical for AV valve formation, atrial septation, ventricular septation, and outflow tract septation.',
        clinicalNote: 'Endocardial cushion defects (complete atrioventricular septal defect, AVSD) produce a common AV valve with combined ASD and VSD. AVSD occurs in approximately 40% of congenital heart defects in trisomy 21.',
        order: 6
      },
      {
        id: 'cd-007',
        system: 'Cardiac Development',
        week: 'Week 5–6 (Day 35–42)',
        event: 'Atrial septation: septum primum grows toward the AV cushions; foramen primum closes; foramen secundum opens in the septum primum; septum secundum forms to the right.',
        shortLabel: 'Atrial septation (septum primum and secundum)',
        explanation: 'The septum primum grows downward toward the AV cushions; just before foramen primum closes, programmed cell death creates the foramen secundum in the upper septum primum. The septum secundum then grows from the roof of the right atrium, leaving the foramen ovale — a right-to-left shunt essential for fetal circulation.',
        clinicalNote: 'Failure of foramen ovale to close after birth is the most common cardiac septal defect (patent foramen ovale, ~25% of adults). Ostium secundum ASD results from excessive apoptosis in the septum primum.',
        order: 7
      },
      {
        id: 'cd-008',
        system: 'Cardiac Development',
        week: 'Week 5–7 (Day 35–49)',
        event: 'Ventricular septation: the muscular interventricular septum grows upward from the apex; the membranous portion is completed last by contributions from endocardial cushions and truncal ridges.',
        shortLabel: 'Ventricular septation',
        explanation: 'The muscular IVS grows superiorly from the floor of the ventricle. The small remaining membranous IVS foramen is closed by tissue from the AV endocardial cushions and the fused truncal ridges. The membranous septum is the last part of the ventricular septum to close, completing around week 7.',
        clinicalNote: 'Ventricular septal defect (VSD) is the single most common congenital heart malformation. Membranous VSD (perimembranous type) is most frequent, accounting for ~80% of VSDs.',
        order: 8
      },
      {
        id: 'cd-009',
        system: 'Cardiac Development',
        week: 'Week 6–8 (Day 42–56)',
        event: 'Truncoconal septation: neural crest cells form the aorticopulmonary septum, dividing the truncus arteriosus into the aorta and pulmonary trunk in a spiral fashion.',
        shortLabel: 'Truncoconal septation by neural crest',
        explanation: 'Cardiac neural crest cells from the dorsal neural tube migrate into the pharyngeal arches and then into the outflow tract, where they contribute to the aorticopulmonary septum. This septum spirals 180 degrees as it grows, so the aorta connects to the left ventricle and the pulmonary trunk connects to the right ventricle.',
        clinicalNote: 'Neural crest defects cause persistent truncus arteriosus (failure to septate) or transposition of the great arteries (non-spiral septation). DiGeorge syndrome (22q11.2 deletion) impairs neural crest migration and causes conotruncal defects.',
        order: 9
      },
      {
        id: 'cd-010',
        system: 'Cardiac Development',
        week: 'Week 8 (Day 56)',
        event: 'Cardiac septation complete. All four chambers and the semilunar and AV valves are present; the heart has its definitive four-chamber architecture.',
        shortLabel: 'Four-chamber heart complete',
        explanation: 'By the end of week 8, all major cardiac septation is complete. The semilunar valves (aortic and pulmonary) have formed from truncal ridges; the AV valves (mitral and tricuspid) have remodeled from AV cushion tissue. The heart now circulates blood through the pulmonary and systemic circuits (though the fetal shunts — foramen ovale, ductus arteriosus, ductus venosus — remain open).',
        clinicalNote: 'The end of week 8 is the morphological deadline for most congenital heart defects. Teratogens acting after this point affect heart growth and function but rarely cause new structural defects.',
        order: 10
      }
    ],

    /* ── Vascular Development (10 events) ── */
    'Vascular Development': [
      {
        id: 'vd-001',
        system: 'Vascular Development',
        week: 'Week 3 (Day 16–17)',
        event: 'Vasculogenesis begins: hemangioblasts in the extraembryonic yolk sac form blood islands — the first blood cells and endothelial precursors.',
        shortLabel: 'Blood islands form (vasculogenesis)',
        explanation: 'Hemangioblasts, derived from splanchnic mesoderm of the yolk sac, aggregate into blood islands. The peripheral cells differentiate into angioblasts (endothelial precursors) and the central cells become primitive blood cells (hematopoiesis). This is the earliest vascular event in development.',
        clinicalNote: 'Mutations in FLK-1/VEGFR2, the primary VEGF receptor on angioblasts, are embryonic lethal in mice. Defects in this pathway contribute to hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu syndrome) in humans.',
        order: 1
      },
      {
        id: 'vd-002',
        system: 'Vascular Development',
        week: 'Week 3 (Day 18–20)',
        event: 'Angioblasts coalesce into the paired dorsal aortae — the first major intraembryonic vessels.',
        shortLabel: 'Dorsal aortae form',
        explanation: 'Angioblasts within the embryo proper coalesce into two longitudinal endothelial channels on either side of the notochord — the paired dorsal aortae. These run the length of the embryo and will fuse caudally. They receive blood from the developing heart and distribute it to the embryo.',
        clinicalNote: 'The dorsal aortae give rise to the definitive aorta. Persistence of the right dorsal aorta as the main vessel (instead of the left) results in a right-sided aortic arch, which can cause vascular ring compression of the trachea and esophagus.',
        order: 2
      },
      {
        id: 'vd-003',
        system: 'Vascular Development',
        week: 'Week 3–4 (Day 20–22)',
        event: 'Six paired pharyngeal arch arteries begin forming sequentially; the first and second arches are present by day 22.',
        shortLabel: 'Pharyngeal arch arteries begin forming',
        explanation: 'The aortic sac at the distal end of the truncus arteriosus gives rise to six paired pharyngeal arch arteries, one in each pharyngeal arch. They connect the aortic sac to the dorsal aortae. Not all six are present simultaneously — arches 1 and 2 regress as arches 3, 4, and 6 develop.',
        clinicalNote: 'Arch 3 → common and proximal internal carotid arteries; arch 4 (left) → aortic arch; arch 6 (left) → ductus arteriosus and proximal pulmonary artery. Abnormal regression patterns cause vascular rings, double aortic arch, or aberrant subclavian artery (dysphagia lusoria).',
        order: 3
      },
      {
        id: 'vd-004',
        system: 'Vascular Development',
        week: 'Week 4 (Day 22–24)',
        event: 'Cardinal vein system established: anterior cardinal veins drain the head; posterior cardinal veins drain the body; they join at the common cardinal (Cuvier\'s duct) to enter the sinus venosus.',
        shortLabel: 'Cardinal vein system established',
        explanation: 'The primary venous drainage consists of paired anterior cardinal veins (from the head region) and posterior cardinal veins (from the body), which merge bilaterally at the common cardinal veins. These empty into the sinus venosus of the developing heart, completing the first closed circulatory circuit.',
        clinicalNote: 'Persistence of the left superior cardinal vein gives rise to a persistent left superior vena cava, which drains into the coronary sinus. Present in 0.3–0.5% of the general population and up to 10% of patients with congenital heart disease.',
        order: 4
      },
      {
        id: 'vd-005',
        system: 'Vascular Development',
        week: 'Week 4–5 (Day 26–35)',
        event: 'Vitelline (omphalomesenteric) veins and umbilical veins develop; vitelline veins form the hepatic sinusoids and portal vein as the liver develops around them.',
        shortLabel: 'Vitelline and umbilical veins form; portal system established',
        explanation: 'The paired vitelline veins carry nutrients from the yolk sac. As the liver grows around them, they are reorganized into the portal vein, hepatic sinusoids, and hepatic veins. The paired umbilical veins carry oxygenated blood from the placenta; the right atrophies, leaving only the left umbilical vein.',
        clinicalNote: 'Abnormal remodeling of the vitelline veins can produce portal vein atresia or congenital portosystemic shunts (Abernethy malformation), leading to hepatic encephalopathy and hyperammonemia in infancy.',
        order: 5
      },
      {
        id: 'vd-006',
        system: 'Vascular Development',
        week: 'Week 5 (Day 30–35)',
        event: 'Ductus venosus forms, shunting oxygenated blood from the left umbilical vein directly to the inferior vena cava, bypassing the hepatic sinusoids.',
        shortLabel: 'Ductus venosus forms',
        explanation: 'The ductus venosus is a wide channel connecting the left umbilical vein to the IVC, bypassing the hepatic sinusoids. It allows the highly oxygenated placental blood to reach the heart rapidly. It carries approximately 50% of umbilical venous return.',
        clinicalNote: 'Normally, the ductus venosus closes functionally within hours of birth (triggered by loss of umbilical blood flow) and obliterates to form the ligamentum venosum. Patent ductus venosus causes portosystemic shunting and can present with hyperammonemia, hepatic encephalopathy, or liver dysfunction.',
        order: 6
      },
      {
        id: 'vd-007',
        system: 'Vascular Development',
        week: 'Week 5–6 (Day 35–42)',
        event: 'Posterior cardinal veins partially replaced by subcardinal and supracardinal veins; these remodel to form the inferior vena cava.',
        shortLabel: 'IVC formation from subcardinal/supracardinal veins',
        explanation: 'The IVC is formed from four segments derived from different venous primordia: the hepatic segment (from the right vitelline/hepatic veins), the prerenal segment (from right subcardinal vein), the renal segment (from the subcardinal-supracardinal anastomosis), and the postrenal segment (from right supracardinal vein). This complex remodeling explains the many IVC anomalies.',
        clinicalNote: 'Interrupted IVC with azygos continuation results from failure of the right subcardinal vein to connect to the hepatic segment. The azygos vein takes over caval drainage. Present in up to 3% of congenital heart disease patients; important in surgical planning for Fontan circulation.',
        order: 7
      },
      {
        id: 'vd-008',
        system: 'Vascular Development',
        week: 'Week 6–7 (Day 40–49)',
        event: 'Definitive paired dorsal aortae fuse between T4 and L4 to form the single descending aorta; segmental arteries (intercostals, lumbars) branch off.',
        shortLabel: 'Dorsal aortae fuse; segmental arteries form',
        explanation: 'The two dorsal aortae fuse into a single midline vessel from the thoracic to lumbar region. Paired segmental (intersegmental) arteries branch off at each somite level. These segmental arteries will give rise to the intercostal arteries, lumbar arteries, and through longitudinal anastomoses, the vertebral arteries.',
        clinicalNote: 'Coarctation of the aorta most commonly occurs at the aortic isthmus (near the ductus arteriosus), a transition zone in the development of the fourth arch artery and the dorsal aorta. It accounts for 5–8% of all congenital heart defects.',
        order: 8
      },
      {
        id: 'vd-009',
        system: 'Vascular Development',
        week: 'Week 7–8 (Day 48–56)',
        event: 'Angiogenesis extends the capillary network throughout the developing organs by sprouting and intussusceptive growth from existing vessels.',
        shortLabel: 'Angiogenesis extends capillary network',
        explanation: 'After the primary vascular plexus is established by vasculogenesis, angiogenesis (sprouting and splitting of existing vessels) extends the network into avascular areas. VEGF from hypoxic tissues drives tip cell sprouting; DLL4-Notch signaling regulates stalk vs. tip cell identity. Pericytes are recruited by PDGF-B to stabilize vessels.',
        clinicalNote: 'Pathological angiogenesis underlies tumor vascularization, diabetic retinopathy, and age-related macular degeneration. Anti-VEGF therapies (bevacizumab, ranibizumab) exploit this developmental pathway.',
        order: 9
      },
      {
        id: 'vd-010',
        system: 'Vascular Development',
        week: 'Week 8 (Day 52–56)',
        event: 'Ductus arteriosus forms from the left sixth pharyngeal arch artery, connecting the pulmonary trunk to the descending aorta and shunting blood away from the unexpanded fetal lungs.',
        shortLabel: 'Ductus arteriosus established',
        explanation: 'The left sixth arch artery persists as the ductus arteriosus, a wide channel carrying approximately 60% of combined ventricular output from the pulmonary trunk to the descending aorta, bypassing the high-resistance fetal pulmonary circulation. It is maintained open by prostaglandin E2 and low fetal oxygen tension.',
        clinicalNote: 'At birth, rising PaO2 and falling prostaglandins cause functional closure within 10–15 hours and anatomical obliteration to the ligamentum arteriosum by 2–3 weeks. Patent ductus arteriosus (PDA) is common in premature infants. Indomethacin (COX inhibitor) closes PDA medically by reducing prostaglandin synthesis.',
        order: 10
      }
    ],

    /* ── Gut Development (10 events) ── */
    'Gut Development': [
      {
        id: 'gd-001',
        system: 'Gut Development',
        week: 'Week 3–4 (Day 18–22)',
        event: 'Lateral and head folding converts the flat embryonic disc into a tube, incorporating part of the yolk sac as the primitive gut tube (foregut, midgut, hindgut).',
        shortLabel: 'Primitive gut tube forms by folding',
        explanation: 'As the embryo folds, the endoderm is drawn into the interior to form the primitive gut tube. The cranial fold creates the foregut; the caudal fold creates the hindgut; the lateral folds close the midgut ventrally, leaving a temporary connection to the yolk sac via the vitelline duct at the umbilicus.',
        clinicalNote: 'Failure of the lateral folds to close the ventral body wall results in gastroschisis (lateral defect, gut herniates without membrane) or omphalocele (midline defect at umbilicus, gut covered by peritoneum). Omphalocele is associated with trisomy 13 and 18.',
        order: 1
      },
      {
        id: 'gd-002',
        system: 'Gut Development',
        week: 'Week 4 (Day 24–28)',
        event: 'Buccopharyngeal membrane ruptures, opening the stomodeum (primitive mouth) to the foregut.',
        shortLabel: 'Buccopharyngeal membrane ruptures',
        explanation: 'The buccopharyngeal membrane, composed of ectoderm and endoderm without intervening mesoderm, breaks down at day 24–26. This creates continuity between the amniotic cavity (via the stomodeum) and the foregut, establishing the oral end of the digestive tract.',
        clinicalNote: 'Failure of the buccopharyngeal membrane to rupture causes congenital choanal atresia when it occurs posteriorly (the choanal membrane). Bilateral choanal atresia is a neonatal emergency as newborns are obligate nasal breathers.',
        order: 2
      },
      {
        id: 'gd-003',
        system: 'Gut Development',
        week: 'Week 4 (Day 26–28)',
        event: 'Stomach appears as a foregut dilation; it rotates 90 degrees clockwise (viewed from above), bringing the left vagus nerve to the anterior surface.',
        shortLabel: 'Stomach forms and rotates',
        explanation: 'A fusiform dilation in the caudal foregut marks the stomach primordium. The stomach rotates 90 degrees around its longitudinal axis (left side becomes anterior, right side becomes posterior) and also tilts so that the pylorus moves superiorly and the cardia inferiorly. This explains why the left vagus innervates the anterior stomach and the right vagus the posterior stomach.',
        clinicalNote: 'Pyloric stenosis (hypertrophic pyloric stenosis) presents at 2–6 weeks after birth with projectile, non-bilious vomiting. It results from hypertrophy of the pyloric circular muscle; genetic and environmental factors are involved. Palpable "olive" mass in RUQ.',
        order: 3
      },
      {
        id: 'gd-004',
        system: 'Gut Development',
        week: 'Week 4–5 (Day 26–35)',
        event: 'Liver and biliary tree bud from the hepatic diverticulum (foregut endoderm) into the septum transversum mesenchyme.',
        shortLabel: 'Liver bud forms from foregut endoderm',
        explanation: 'The hepatic diverticulum grows from the ventral aspect of the caudal foregut into the septum transversum. The cranial portion gives rise to the hepatocytes and bile canaliculi; the caudal portion becomes the gallbladder and cystic duct; the connection to the duodenum becomes the common bile duct. FGF from the cardiac mesoderm and BMP from the septum transversum induce hepatic specification.',
        clinicalNote: 'Biliary atresia — obliteration of extrahepatic bile ducts — is the most common indication for pediatric liver transplant. Though the etiology is debated (developmental vs. inflammatory), the Kasai procedure (hepatoportoenterostomy) attempts to restore bile drainage.',
        order: 4
      },
      {
        id: 'gd-005',
        system: 'Gut Development',
        week: 'Week 4–5 (Day 28–35)',
        event: 'Pancreas develops from dorsal and ventral pancreatic buds of the duodenal endoderm; the ventral bud rotates with the bile duct to fuse with the dorsal bud.',
        shortLabel: 'Dorsal and ventral pancreatic buds fuse',
        explanation: 'The dorsal bud (larger) forms most of the pancreatic body and tail and the accessory duct of Santorini. The ventral bud (associated with the bile duct) rotates 270 degrees with the duodenum to fuse with the dorsal bud posteriorly, forming the head, uncinate process, and the main duct of Wirsung.',
        clinicalNote: 'Annular pancreas occurs when the ventral pancreatic bud splits and wraps around the duodenum during rotation, forming a ring that causes duodenal obstruction. Failure of the two buds to fuse causes pancreas divisum, where most pancreatic secretion drains through the smaller accessory duct, predisposing to pancreatitis.',
        order: 5
      },
      {
        id: 'gd-006',
        system: 'Gut Development',
        week: 'Week 5–6 (Day 35–42)',
        event: 'Midgut herniates into the umbilical cord (physiological umbilical herniation) as the gut elongates faster than the abdominal cavity grows.',
        shortLabel: 'Physiological midgut herniation',
        explanation: 'The rapidly elongating midgut loop cannot fit within the small abdominal cavity and herniates into the base of the umbilical cord, entering the extraembryonic coelom. While herniated, the midgut rotates 90 degrees counterclockwise around the superior mesenteric artery axis (bringing the prearterial limb to the left).',
        clinicalNote: 'Omphalocele results when the midgut fails to return to the abdomen. Gastroschisis is distinct — the bowel protrudes through a separate paraumbilical abdominal wall defect and lacks a covering membrane. Malrotation (failure to complete the full 270-degree rotation) predisposes to midgut volvulus, a surgical emergency.',
        order: 6
      },
      {
        id: 'gd-007',
        system: 'Gut Development',
        week: 'Week 10 (Day 65–70)',
        event: 'Midgut returns to the abdomen and completes 270-degree counterclockwise rotation; cecum descends to the right iliac fossa.',
        shortLabel: 'Midgut reduces and completes rotation',
        explanation: 'Between weeks 10–12, the abdominal cavity enlarges sufficiently to accommodate the midgut. The intestines re-enter the abdomen, continuing to rotate so the total rotation from the original position is 270 degrees counterclockwise. The cecum initially lies under the liver, then descends to the right iliac fossa. Mesenteric fixation anchors the bowel.',
        clinicalNote: 'Malrotation stops rotation at 90 or 180 degrees. Ladd\'s bands fix the cecum in the RUQ and cross the duodenum, causing obstruction. The narrow mesenteric pedicle predisposes to midgut volvulus (twisting around SMA), causing bowel ischemia — a pediatric surgical emergency presenting with bilious vomiting.',
        order: 7
      },
      {
        id: 'gd-008',
        system: 'Gut Development',
        week: 'Week 6–10 (Day 42–70)',
        event: 'Gut lumen undergoes proliferative occlusion followed by recanalization; failure produces congenital atresias and stenoses.',
        shortLabel: 'Gut lumen occludes then recanalizes',
        explanation: 'During weeks 6–8, rapid epithelial proliferation temporarily occludes the gut lumen, particularly in the duodenum, jejunum, and colon. Vacuolation and apoptosis then recanalize the lumen by week 10. This process is most pronounced in the duodenum.',
        clinicalNote: 'Failure of recanalization causes intestinal atresia or stenosis. Duodenal atresia presents with bilious vomiting in the first day of life and a classic "double bubble" sign on plain radiograph (air in stomach and proximal duodenum). Associated with trisomy 21 in 30% of cases.',
        order: 8
      },
      {
        id: 'gd-009',
        system: 'Gut Development',
        week: 'Week 6–8 (Day 40–56)',
        event: 'Cloacal membrane divides into urogenital sinus anteriorly and anorectal canal posteriorly by the downgrowth of the urorectal septum.',
        shortLabel: 'Urorectal septum divides cloaca',
        explanation: 'The urorectal septum, a wedge of mesoderm, grows caudally between the allantois/bladder anteriorly and the hindgut posteriorly, reaching the cloacal membrane by week 7. It divides the cloaca into the urogenital sinus (anterior) and the anorectal canal (posterior). The cloacal membrane then splits into the urogenital membrane and the anal membrane.',
        clinicalNote: 'Failure of the urorectal septum to fully descend produces anorectal malformations (imperforate anus, rectovesical fistula, rectourethral fistula). These are classified as low (below levator ani) or high (above levator ani) and often require staged surgical repair.',
        order: 9
      },
      {
        id: 'gd-010',
        system: 'Gut Development',
        week: 'Week 8–9 (Day 56–63)',
        event: 'Anal membrane ruptures, establishing the anal opening; neural crest cells (Hirschsprung precursors) complete colonization of the hindgut.',
        shortLabel: 'Anal membrane ruptures; neural crest colonizes hindgut',
        explanation: 'The anal membrane (ectodermal part of the divided cloacal membrane) ruptures, completing the patent digestive tube. Simultaneously, neural crest cells migrating craniocaudally must colonize the entire hindgut to provide the enteric nervous system. These cells reach the rectum by approximately week 12.',
        clinicalNote: 'Hirschsprung disease (congenital megacolon) results from failure of neural crest cells to colonize the distal colon. Aganglionosis is always present in the rectum and extends proximally for a variable length. Presents with failure to pass meconium within 48 hours and chronic constipation. Associated with RET proto-oncogene mutations.',
        order: 10
      }
    ],

    /* ── Respiratory Development (10 events) ── */
    'Respiratory Development': [
      {
        id: 'rd-001',
        system: 'Respiratory Development',
        week: 'Week 4 (Day 22–26)',
        event: 'Laryngotracheal groove appears as a median outgrowth of the foregut endoderm, immediately caudal to the pharynx.',
        shortLabel: 'Laryngotracheal groove appears',
        explanation: 'Under inductive signals from the adjacent mesoderm (Wnt, BMP, FGF10), the ventral wall of the caudal foregut forms a midline groove — the laryngotracheal groove. The endoderm of this groove gives rise to the entire respiratory epithelium and glands; the surrounding splanchnic mesoderm forms the cartilage, smooth muscle, and connective tissue.',
        clinicalNote: 'Separation of the laryngotracheal groove from the esophagus depends on lateral ridges (tracheoesophageal folds) that fuse. Failure of fusion produces tracheoesophageal fistula (TEF), most commonly type C (proximal esophageal atresia + distal TEF, 85%). Presents with inability to pass nasogastric tube and aspiration with feeding.',
        order: 1
      },
      {
        id: 'rd-002',
        system: 'Respiratory Development',
        week: 'Week 4 (Day 26–28)',
        event: 'Tracheoesophageal folds fuse to form the tracheoesophageal septum, separating the trachea anteriorly from the esophagus posteriorly.',
        shortLabel: 'Tracheoesophageal septum forms',
        explanation: 'The lateral ridges of the laryngotracheal groove (tracheoesophageal folds) grow medially and fuse to form the tracheoesophageal septum. This divides the cranial portion of the foregut into the laryngotracheal tube anteriorly (respiratory) and the esophagus posteriorly (digestive). The septum grows craniocaudally.',
        clinicalNote: 'Incomplete or off-center fusion of the tracheoesophageal folds produces the spectrum of esophageal atresia with or without TEF. The H-type fistula (type E — no esophageal atresia, only a fistula) presents later with recurrent aspiration pneumonias and choking with feeds.',
        order: 2
      },
      {
        id: 'rd-003',
        system: 'Respiratory Development',
        week: 'Week 4–5 (Day 26–35)',
        event: 'Primary lung buds branch from the caudal laryngotracheal tube; right bud is wider and less angled than left, presaging the asymmetric bronchial tree.',
        shortLabel: 'Primary lung buds form',
        explanation: 'The distal end of the laryngotracheal tube bifurcates into two primary lung buds. FGF10 from the mesenchyme drives bud outgrowth; SPRY2 provides negative feedback to restrict branching. The right bud is wider and branches at a shallower angle than the left, explaining the greater frequency of right-sided foreign body aspiration.',
        clinicalNote: 'Pulmonary agenesis (absent lung) or hypoplasia results from failure of lung bud growth. Unilateral pulmonary agenesis is compatible with life but causes mediastinal shift. Bilateral pulmonary hypoplasia is a major cause of death in Potter sequence (renal agenesis → oligohydramnios → compression → lung underdevelopment).',
        order: 3
      },
      {
        id: 'rd-004',
        system: 'Respiratory Development',
        week: 'Week 5–6 (Day 35–42)',
        event: 'Secondary and tertiary bronchial buds form; the right lung divides into three lobes (three secondary bronchi), the left into two.',
        shortLabel: 'Bronchopulmonary segmentation begins',
        explanation: 'The primary bronchial buds subdivide into secondary (lobar) bronchi: three on the right (upper, middle, lower lobes) and two on the left (upper, lower lobes). Each secondary bronchus then gives rise to tertiary (segmental) bronchi — 10 on each side — defining the bronchopulmonary segments that are units of surgical resection.',
        clinicalNote: 'A bronchopulmonary sequestration is a mass of non-functioning lung tissue with an anomalous systemic blood supply that lacks communication with the bronchial tree. Intralobar sequestrations are enclosed within the normal pleura; extralobar have their own pleural investments. Presents with recurrent pulmonary infections.',
        order: 4
      },
      {
        id: 'rd-005',
        system: 'Respiratory Development',
        week: 'Week 6 – Week 16',
        event: 'Pseudoglandular period: conducting airways (bronchi through terminal bronchioles) form by repeated branching; lung resembles an exocrine gland histologically.',
        shortLabel: 'Pseudoglandular period (branching morphogenesis)',
        explanation: 'From week 6 to 16, the airway tree undergoes approximately 23 generations of branching, completing all conducting airways down to the terminal bronchioles. FGF10-FGFR2, Wnt, and Shh signaling orchestrate the branching program. No gas exchange is possible in this period — the lung is solid glandular tissue with tubular epithelium.',
        clinicalNote: 'Congenital pulmonary airway malformation (CPAM, formerly CCAM) represents a dysregulation of branching morphogenesis, producing a mass of abnormal airway structures. Can cause hydrops fetalis if large; smaller lesions may be monitored conservatively. Risk of malignant transformation (particularly pleuropulmonary blastoma) exists.',
        order: 5
      },
      {
        id: 'rd-006',
        system: 'Respiratory Development',
        week: 'Week 16–26',
        event: 'Canalicular period: respiratory bronchioles and primitive alveolar ducts form; vascularization approximates the airway epithelium; type I and type II pneumocytes differentiate.',
        shortLabel: 'Canalicular period: gas exchange apparatus forms',
        explanation: 'Lung mesenchyme thins dramatically as capillaries approach the epithelium, forming the primitive air-blood barrier. The airway epithelium differentiates into type I pneumocytes (for gas exchange, 95% of alveolar surface) and type II pneumocytes (cuboidal, produce surfactant). The lung becomes capable of supporting life, albeit marginally, by about week 22–24.',
        clinicalNote: 'The limit of viability (~22–24 weeks) corresponds to completion of the early canalicular stage and the appearance of surfactant-producing type II cells. Infants born in this period require exogenous surfactant therapy and ventilatory support for surfactant deficiency (neonatal respiratory distress syndrome, hyaline membrane disease).',
        order: 6
      },
      {
        id: 'rd-007',
        system: 'Respiratory Development',
        week: 'Week 24–28',
        event: 'Surfactant synthesis begins: type II pneumocytes produce phosphatidylcholine-rich surfactant, detectable in amniotic fluid by week 26–28.',
        shortLabel: 'Surfactant synthesis begins (type II pneumocytes)',
        explanation: 'Type II pneumocytes begin synthesizing surfactant (primarily dipalmitoylphosphatidylcholine) stored in lamellar bodies. Surfactant is secreted into the alveolar space, where it reduces surface tension and prevents end-expiratory alveolar collapse. Cortisol and thyroid hormone accelerate maturation; insulin inhibits it.',
        clinicalNote: 'The lecithin-to-sphingomyelin (L:S) ratio in amniotic fluid assesses fetal lung maturity. An L:S ratio >2 indicates adequate surfactant. Glucocorticoids (betamethasone) given to the mother 24–48 hours before preterm delivery accelerate type II cell maturation and reduce severity of RDS.',
        order: 7
      },
      {
        id: 'rd-008',
        system: 'Respiratory Development',
        week: 'Week 26 – Birth',
        event: 'Saccular period: terminal sacs (primitive alveoli) develop, expanding the gas-exchange surface area; pleural cavities fully form.',
        shortLabel: 'Saccular period: terminal sacs expand',
        explanation: 'The respiratory bronchioles widen into saccules (primitive alveoli) lined predominantly by type I pneumocytes. The interstitium thins markedly, bringing capillaries into intimate contact with the thin epithelium. By 36 weeks approximately 20–70 million terminal sacs are present, sufficient for extrauterine survival.',
        clinicalNote: 'Congenital diaphragmatic hernia (CDH) allows herniation of abdominal organs into the thorax, compressing the developing lung during the saccular period and causing ipsilateral (and often contralateral) pulmonary hypoplasia. Despite repair, pulmonary hypertension from the hypoplastic pulmonary vascular bed remains the main cause of death.',
        order: 8
      },
      {
        id: 'rd-009',
        system: 'Respiratory Development',
        week: 'Birth – 8 years',
        event: 'Alveolar period begins at birth and continues postnatally: mature alveoli form by secondary septation of saccules, multiplying alveolar number from ~20–50 million at birth to ~300–500 million in adulthood.',
        shortLabel: 'Alveolar period: postnatal septation',
        explanation: 'Secondary crests grow into the walls of the terminal sacs, subdividing them into mature alveoli. This process is driven by elastin deposition and myofibroblast activity. Most alveologenesis (approximately 80–85%) occurs postnatally, continuing through age 8. The alveolar surface area increases from ~3 m² at birth to ~70 m² in the adult.',
        clinicalNote: 'Bronchopulmonary dysplasia (BPD) in premature infants results from arrest of alveolar development due to mechanical ventilation and oxygen toxicity. The "new BPD" pattern (in very preterm infants given surfactant and gentle ventilation) shows fewer but larger alveoli — alveolar simplification — rather than fibrosis.',
        order: 9
      },
      {
        id: 'rd-010',
        system: 'Respiratory Development',
        week: 'Birth (transition)',
        event: 'At birth, pulmonary vascular resistance falls dramatically as the lungs expand with air; the foramen ovale and ductus arteriosus close, completing the shift from fetal to neonatal circulation.',
        shortLabel: 'Birth: fetal-to-neonatal circulatory transition',
        explanation: 'With the first breath, alveolar oxygen rises and surfactant spreads across the alveolar surface. Pulmonary arterial resistance falls (the pulmonary vasculature dilates), greatly increasing pulmonary blood flow. Left atrial pressure rises above right, closing the foramen ovale. Rising PaO2 constricts the ductus arteriosus, diverting all cardiac output through the lungs.',
        clinicalNote: 'Persistent pulmonary hypertension of the newborn (PPHN) occurs when pulmonary vascular resistance fails to fall at birth, maintaining right-to-left shunting through the foramen ovale and ductus arteriosus (fetal circulation pattern). Causes include meconium aspiration, pneumonia, and CDH. Treatment: oxygen, iNO (inhaled nitric oxide), ECMO.',
        order: 10
      }
    ],

    /* ── Urogenital Development (10 events) ── */
    'Urogenital Development': [
      {
        id: 'ugd-001',
        system: 'Urogenital Development',
        week: 'Week 3–4 (Day 18–22)',
        event: 'Intermediate mesoderm differentiates along the length of the embryo, forming the nephrogenic cord — the precursor of all urinary system structures.',
        shortLabel: 'Nephrogenic cord forms from intermediate mesoderm',
        explanation: 'Intermediate mesoderm, lying between the paraxial somites and lateral plate mesoderm, condenses into the nephrogenic cord running along the posterior body wall. This cord will sequentially produce three kidney generations: pronephros, mesonephros, and metanephros — each more caudal and structurally complex.',
        clinicalNote: 'Mutations in PAX2, WT1, and other nephrogenic transcription factors disrupt nephrogenic cord differentiation. PAX2 mutations cause renal coloboma syndrome; WT1 mutations cause Wilms tumor and Denys-Drash syndrome (nephropathy + pseudohermaphroditism).',
        order: 1
      },
      {
        id: 'ugd-002',
        system: 'Urogenital Development',
        week: 'Week 4 (Day 22–24)',
        event: 'Pronephros forms in the cervical region as rudimentary, non-functional tubules; it degenerates by day 25 but its duct (pronephric duct) persists and extends caudally.',
        shortLabel: 'Pronephros forms and degenerates; duct persists',
        explanation: 'The pronephros consists of 7–10 pairs of rudimentary cervical nephrotomes that are vestigial and non-functional in humans. They regress almost as soon as they form. However, the pronephric duct is essential: it extends caudally as a template that will be co-opted as the mesonephric duct.',
        clinicalNote: 'The pronephros has no known clinical significance in humans. Its transience reflects evolutionary conservation from ancestors (fish, amphibians) in which it forms the functional kidney.',
        order: 2
      },
      {
        id: 'ugd-003',
        system: 'Urogenital Development',
        week: 'Week 4–8 (Day 24–56)',
        event: 'Mesonephros develops as functioning excretory units (mesonephric nephrons) in the thoracolumbar region; it serves as the interim kidney while the metanephros develops.',
        shortLabel: 'Mesonephros forms; functions as interim kidney',
        explanation: 'The mesonephros forms ~40 functional nephrons along the thoracolumbar nephrogenic cord, draining into the mesonephric (Wolffian) duct. It produces urine from weeks 6–10 and is the primary excretory organ during the embryonic period. It degenerates by week 10 in females; in males, its tubules are retained as epididymis, vas deferens, and seminal vesicles.',
        clinicalNote: 'Persistence of mesonephric (Wolffian) duct remnants in females produces Gartner duct cysts, typically found in the anterolateral wall of the vagina. They may be mistaken for Bartholin gland cysts or cause obstructive symptoms.',
        order: 3
      },
      {
        id: 'ugd-004',
        system: 'Urogenital Development',
        week: 'Week 5 (Day 32–35)',
        event: 'Ureteric bud sprouts from the mesonephric duct; it grows dorsally and cranially to contact the metanephric blastema in the sacral region.',
        shortLabel: 'Ureteric bud sprouts (metanephros induction begins)',
        explanation: 'GDNF secreted by the metanephric blastema attracts the ureteric bud to sprout from the mesonephric duct near its entry to the cloaca. The bud then undergoes reciprocal inductive interactions with the metanephric mesenchyme (blastema): the bud induces the mesenchyme to form nephrons; the mesenchyme induces the bud to branch repeatedly, forming the collecting duct system.',
        clinicalNote: 'A duplex (bifid) ureter results from premature ureteric bud branching or a second bud forming. The Meyer-Weigert rule states that the ureter draining the upper pole moiety inserts ectopically (below and medial to the lower pole ureter). The upper pole ureter is prone to obstruction; the lower pole ureter to reflux.',
        order: 4
      },
      {
        id: 'ugd-005',
        system: 'Urogenital Development',
        week: 'Week 6–10 (Day 38–70)',
        event: 'Metanephric kidney forms: repeated branching of the ureteric bud creates the collecting system; induction of metanephric mesenchyme produces nephrogenic vesicles that differentiate into ~1 million nephrons.',
        shortLabel: 'Metanephric kidney nephrogenesis',
        explanation: 'The ureteric bud undergoes 15 rounds of branching, generating the ureter, renal pelvis, major calyces, minor calyces, and ~1–3 million collecting ducts. Each collecting duct tip induces surrounding metanephric mesenchyme cells to undergo mesenchymal-to-epithelial transformation (MET), forming vesicles that elongate into S-shaped nephrons — glomerulus through distal tubule.',
        clinicalNote: 'Renal agenesis (unilateral in 1:1000, bilateral in 1:3000) results from failure of ureteric bud formation or early degeneration. Bilateral renal agenesis causes Potter sequence: oligohydramnios (no fetal urine) → amnion nodosum → fetal compression → pulmonary hypoplasia, flat face, club feet, death. Not compatible with life.',
        order: 5
      },
      {
        id: 'ugd-006',
        system: 'Urogenital Development',
        week: 'Week 6–9 (Day 40–63)',
        event: 'Kidneys ascend from the sacral region to the lumbar region (L1–L3), rotating 90 degrees medially so the hilus faces anteromedially.',
        shortLabel: 'Kidney ascent and rotation',
        explanation: 'The metanephric kidneys initially lie in the pelvis opposite S1–S3. Differential growth of the lumbar and sacral regions causes relative cranial movement; the kidneys "ascend" and are vascularized sequentially by progressively higher aortic branches as they move. Simultaneously they rotate 90 degrees so the renal pelvis turns from facing anteriorly to facing medially.',
        clinicalNote: 'Horseshoe kidney (1:400) results from fusion of the inferior poles during ascent; the isthmus is caught under the inferior mesenteric artery, preventing full ascent. The kidney lies lower than normal (L3–L5) but is usually asymptomatic. Pelvic kidney occurs when ascent fails entirely. Abnormal rotation (malrotation) causes the renal pelvis to face anteriorly.',
        order: 6
      },
      {
        id: 'ugd-007',
        system: 'Urogenital Development',
        week: 'Week 4–7 (Day 26–49)',
        event: 'Bladder and urethra develop from the urogenital sinus (anterior cloaca) after urorectal septum division; the trigone is contributed by mesonephric duct incorporation.',
        shortLabel: 'Bladder forms from urogenital sinus',
        explanation: 'After the urorectal septum divides the cloaca, the urogenital sinus is divided into three parts: the vesical part (becomes the bladder dome and body), the pelvic part (becomes the urethra in females, posterior urethra in males), and the phallic part. The mesonephric duct openings and ureteric buds are incorporated into the posterior bladder wall, forming the trigone.',
        clinicalNote: 'Bladder exstrophy results from failure of the lower anterior abdominal wall to fuse in the midline, leaving the bladder open on the abdominal surface. Associated with epispadias. The epispadias-exstrophy complex represents a spectrum of midline closure defects, caused by abnormal cloacal membrane overdevelopment preventing mesodermal ingrowth.',
        order: 7
      },
      {
        id: 'ugd-008',
        system: 'Urogenital Development',
        week: 'Week 9–10 (Day 63–70)',
        event: 'Fetal kidneys become functional; they begin producing urine which contributes to amniotic fluid from approximately week 10.',
        shortLabel: 'Fetal urine production begins',
        explanation: 'The metanephric kidney becomes functional by approximately week 9–10 as nephrons mature and glomerular filtration begins. Fetal urine is hypotonic and is the primary source of amniotic fluid from the second trimester onward. By term, the fetus produces approximately 400–1200 mL of urine per day.',
        clinicalNote: 'The fetal kidney does not need to perform full homeostatic functions because the placenta handles waste excretion and fluid/electrolyte balance. Nonetheless, fetal urine production is essential to maintain amniotic fluid volume — urinary tract obstruction (e.g., posterior urethral valves) can cause oligohydramnios and pulmonary hypoplasia.',
        order: 8
      },
      {
        id: 'ugd-009',
        system: 'Urogenital Development',
        week: 'Week 5–7 (Day 32–49)',
        event: 'Gonads form as genital ridges on the medioventral surface of the mesonephros; primordial germ cells migrate from the yolk sac and colonize the indifferent gonad.',
        shortLabel: 'Indifferent gonads form; PGCs colonize',
        explanation: 'The genital ridges develop as thickenings of the coelomic epithelium on the medial aspect of the mesonephros (around week 5–6). Primordial germ cells (PGCs) originate in the epiblast and migrate via the allantois and hindgut dorsal mesentery to reach the gonadal ridges by week 6. PGC migration is guided by Steel factor (SCF) and its receptor KIT.',
        clinicalNote: 'Failure of PGC migration or survival results in gonadal dysgenesis — streak gonads with fibrous stroma and no germ cells. Gonadal dysgenesis in XY individuals (Swyer syndrome, 46,XY DSD) presents as phenotypic female with primary amenorrhea and gonadoblastoma risk (up to 30%) from the Y chromosome material.',
        order: 9
      },
      {
        id: 'ugd-010',
        system: 'Urogenital Development',
        week: 'Week 7–8 (Day 49–56)',
        event: 'Sex determination: SRY expression on the Y chromosome drives Sertoli cell differentiation in XY gonads; Sertoli cells secrete AMH and testosterone begins production by Leydig cells.',
        shortLabel: 'SRY drives testis determination; AMH and testosterone secreted',
        explanation: 'SRY (sex-determining region on Y) encodes a transcription factor that activates SOX9, driving the indifferent gonad toward testis differentiation. Sertoli cells form testis cords enclosing germ cells. AMH (anti-Müllerian hormone) from Sertoli cells causes Müllerian (paramesonephric) duct regression. Leydig cells differentiate and produce testosterone under hCG stimulation, virilizing the external genitalia.',
        clinicalNote: 'Complete androgen insensitivity syndrome (CAIS, 46,XY): functional SRY → testes form and make normal AMH + testosterone → Müllerian ducts regress (no uterus/tubes) but androgen receptor is non-functional → external female phenotype. Presents as primary amenorrhea with absent uterus, blind vaginal pouch, and inguinal/labial testes. Gonadectomy recommended post-puberty due to malignancy risk.',
        order: 10
      }
    ],

    /* ── Reproductive Development (10 events) ── */
    'Reproductive Development': [
      {
        id: 'repd-001',
        system: 'Reproductive Development',
        week: 'Week 5–6 (Day 32–42)',
        event: 'Paramesonephric (Müllerian) ducts appear lateral to the mesonephric ducts in both sexes as invaginations of coelomic epithelium.',
        shortLabel: 'Müllerian ducts form in indifferent stage',
        explanation: 'The paramesonephric (Müllerian) ducts develop bilaterally by invagination of the coelomic epithelium just lateral to the mesonephric duct. They run alongside, then cross medial to, the mesonephric duct and fuse in the midline at the urogenital sinus. In females they give rise to the uterine tubes, uterus, cervix, and upper vagina.',
        clinicalNote: 'Müllerian aplasia (Mayer-Rokitansky-Küster-Hauser syndrome, MRKH) presents as primary amenorrhea with a normal 46,XX karyotype, absent uterus and upper vagina, and normal ovarian function and secondary sex characteristics. Caused by failure of Müllerian duct formation or fusion.',
        order: 1
      },
      {
        id: 'repd-002',
        system: 'Reproductive Development',
        week: 'Week 8–9 (Day 56–63)',
        event: 'In XY embryos: AMH from Sertoli cells causes Müllerian duct regression; mesonephric (Wolffian) ducts are preserved by testosterone and differentiate into epididymis, vas deferens, and seminal vesicles.',
        shortLabel: 'Male internal genital differentiation (AMH + testosterone)',
        explanation: 'AMH binding to AMHR2 on Müllerian duct cells triggers apoptosis, causing regression by week 9–10. Simultaneously, testosterone stabilizes and stimulates growth of the Wolffian ducts: the mesonephric tubules adjacent to the testis become the efferent ductules and head of the epididymis; the mesonephric duct becomes the body/tail of epididymis, vas deferens, and seminal vesicle.',
        clinicalNote: 'Persistent Müllerian duct syndrome (PMDS): 46,XY males with otherwise normal virilization but retention of uterus and Fallopian tubes due to AMH or AMHR2 mutations. Discovered incidentally at surgery for cryptorchidism or hernia. A uterus-like structure lies within the inguinal canal alongside the testis.',
        order: 2
      },
      {
        id: 'repd-003',
        system: 'Reproductive Development',
        week: 'Week 9–12 (Day 63–84)',
        event: 'In XX embryos: absence of AMH and testosterone allows Müllerian ducts to persist; the caudal portions fuse to form the uterovaginal primordium, and Wolffian ducts regress.',
        shortLabel: 'Female internal genital differentiation',
        explanation: 'Without AMH, the paramesonephric ducts persist. The unfused cranial portions become the uterine (Fallopian) tubes. The caudal portions fuse in the midline to form the uterovaginal canal — this becomes the uterus and upper vagina. Without testosterone, the Wolffian ducts regress (only vestigial remnants like the epoophoron and Gartner duct persist).',
        clinicalNote: 'Bicornuate, septate, and unicornuate uterine anomalies result from incomplete fusion or resorption of the Müllerian ducts. Septate uterus (incomplete resorption of the midline septum) is the most common (35% of uterine anomalies) and is associated with recurrent pregnancy loss and preterm birth. Treated by hysteroscopic metroplasty.',
        order: 3
      },
      {
        id: 'repd-004',
        system: 'Reproductive Development',
        week: 'Week 9–12 (Day 63–84)',
        event: 'Sinovaginal bulbs proliferate from the urogenital sinus and fuse with the uterovaginal canal, forming the vaginal plate; this canalizes to form the lower vagina.',
        shortLabel: 'Vaginal plate forms and canalizes',
        explanation: 'Two evaginations (sinovaginal bulbs) from the pelvic part of the urogenital sinus proliferate cranially to meet and fuse with the uterovaginal primordium. The solid vaginal plate forms and subsequently canalizes in a caudal-to-cranial direction by desquamation of central cells, completing by week 20. The hymen is the junction of the vaginal plate with the urogenital sinus.',
        clinicalNote: 'Vaginal atresia and imperforate hymen result from failure of canalization of the vaginal plate or hymen. Imperforate hymen presents at puberty with primary amenorrhea, cyclical pelvic pain, and a bluish bulging membrane at the vaginal introitus (hematocolpos). A small cruciate hymenectomy is curative.',
        order: 4
      },
      {
        id: 'repd-005',
        system: 'Reproductive Development',
        week: 'Week 9–12 (Day 56–84)',
        event: 'External genitalia differentiation: genital tubercle, urogenital folds, and labioscrotal swellings differentiate in a sex-specific direction depending on DHT (males) or estrogen/absence of androgens (females).',
        shortLabel: 'External genital differentiation (DHT vs no androgens)',
        explanation: 'Up to week 7, all embryos have identical external genitalia: genital tubercle (future penis or clitoris), paired urogenital folds (future penile urethra or labia minora), and labioscrotal swellings (future scrotum or labia majora). DHT (derived from testosterone by 5-alpha reductase in target tissues) drives male differentiation: tubercle elongates to phallus, urogenital folds fuse to form penile urethra, labioscrotal swellings fuse to form scrotum.',
        clinicalNote: '5-alpha reductase deficiency (46,XY): normal testosterone but deficient DHT → ambiguous or female external genitalia at birth, but virilization occurs at puberty (when testosterone itself drives some virilization). Congenital adrenal hyperplasia (21-hydroxylase deficiency, 46,XX) excess androgens → virilized female external genitalia (clitoromegaly, labioscrotal fusion).',
        order: 5
      },
      {
        id: 'repd-006',
        system: 'Reproductive Development',
        week: 'Week 7–12 (Day 49–84)',
        event: 'Testicular descent begins: gubernaculum guides testis from the posterior abdominal wall through the inguinal canal into the scrotum; driven by INSL3 and testosterone.',
        shortLabel: 'Testicular descent through inguinal canal',
        explanation: 'Testicular descent occurs in two phases: abdominal phase (weeks 7–12, INSL3/LGR8 driven — the testis moves from the posterior abdominal wall to the internal inguinal ring) and inguinoscrotal phase (weeks 26–35, testosterone driven — the testis passes through the inguinal canal and enters the scrotum). The processus vaginalis (peritoneal diverticulum) precedes the testis through the canal.',
        clinicalNote: 'Cryptorchidism (undescended testis) occurs in 2–4% of full-term male neonates. Unilateral in 90% of cases. Risk of infertility (heat impairs spermatogenesis) and testicular cancer (gonadoblastoma, seminoma) is increased. Orchiopexy before age 18 months is recommended. Failure of the processus vaginalis to obliterate produces a congenital inguinal hernia or communicating hydrocele.',
        order: 6
      },
      {
        id: 'repd-007',
        system: 'Reproductive Development',
        week: 'Week 12–20 (fetal)',
        event: 'Prostate gland forms from multiple endodermal buds growing from the prostatic urethra, induced by DHT from the differentiating testes.',
        shortLabel: 'Prostate forms from prostatic urethra (DHT-dependent)',
        explanation: 'Multiple solid endodermal buds grow from the epithelium of the prostatic urethra into the surrounding urogenital sinus mesenchyme. DHT from the differentiating testes is required for this induction. The buds canalize and differentiate into the ~30–50 tubuloalveolar glands of the adult prostate, surrounded by fibromuscular stroma.',
        clinicalNote: 'The zone of origin of prostate pathology reflects developmental zones: benign prostatic hyperplasia (BPH) arises in the transition zone (periurethral); prostate adenocarcinoma most commonly arises in the peripheral zone (the main glandular zone of the adult prostate). Both zones are DHT-dependent, explaining the effectiveness of 5-alpha reductase inhibitors in BPH treatment.',
        order: 7
      },
      {
        id: 'repd-008',
        system: 'Reproductive Development',
        week: 'Week 20 – Birth',
        event: 'Female: oogonia in fetal ovaries begin meiosis I, arresting at prophase I as primary oocytes; meiosis does not resume until ovulation (years to decades later).',
        shortLabel: 'Primary oocytes arrested in meiosis I prophase',
        explanation: 'Oogonia (female germ cells) proliferate by mitosis until approximately week 20, reaching a peak of ~7 million. They then enter meiosis I but arrest at the diplotene stage of prophase I, surrounded by a layer of pre-granulosa cells to form primordial follicles. This arrest is maintained for years to decades by oocyte-derived cAMP signaling. Meiosis I is only completed just before ovulation.',
        clinicalNote: 'The prolonged arrest in meiosis I increases susceptibility to errors in chromosome segregation (nondisjunction) with advancing maternal age. The risk of trisomy 21 (Down syndrome) rises steeply after age 35, from ~1:1250 at 25 years to ~1:100 at 40 years. This is due to cohesin degradation and spindle assembly checkpoint weakening over decades of arrest.',
        order: 8
      },
      {
        id: 'repd-009',
        system: 'Reproductive Development',
        week: 'Week 16–24 (fetal)',
        event: 'Mammary glands develop from bilateral thickenings of ectoderm (mammary ridges/milk lines) running from axilla to inguinal region; secondary mammary buds invade the mesenchyme.',
        shortLabel: 'Mammary ridge forms; breast buds develop',
        explanation: 'Bilateral ectodermal thickenings (mammary ridges or milk lines) form from the axilla to the inguinal region. Most of the line regresses, leaving only the pectoral portion where the breast will develop. Here the epithelium proliferates as primary buds that branch into 15–20 secondary buds — the future lactiferous ducts. This development is independent of sex hormones.',
        clinicalNote: 'Accessory nipples (polythelia) or breast tissue (polymastia) arise from persistence of mammary ridge segments beyond the pectoral region — most commonly along the milk line from axilla to groin. Inverted nipples result from failure of the primary bud to evert from the ectoderm. Athelia/amastia (absent nipple/breast) from failure of mammary bud to form is associated with Poland syndrome.',
        order: 9
      },
      {
        id: 'repd-010',
        system: 'Reproductive Development',
        week: 'Week 10–12 (Day 70–84)',
        event: 'Penile urethra forms by fusion of the urogenital folds over the urethral plate; the glandular urethra forms last by ectodermal ingrowth from the tip of the glans.',
        shortLabel: 'Penile urethra closes (urogenital fold fusion)',
        explanation: 'The urethral plate (endodermal strip on the ventral surface of the phallus) is flanked by the urogenital folds. Under DHT influence, the folds fuse progressively from the penoscrotal junction to the glans, creating a tube (penile urethra) enclosed within the corpus spongiosum. The most distal glandular urethra forms separately by an ectodermal ingrowth that meets the closing urethral tube.',
        clinicalNote: 'Hypospadias (1:200 male births) results from incomplete fusion of the urogenital folds, leaving the urethral meatus on the ventral shaft, penoscrotal junction, or perineum rather than the glans tip. Degree reflects how far fusion progressed. Concomitant chordee (ventral curvature) is present in many cases. Surgical repair (urethroplasty) is performed at 6–18 months.',
        order: 10
      }
    ],

    /* ── CNS Development (10 events) ── */
    'CNS Development': [
      {
        id: 'cns-001',
        system: 'CNS Development',
        week: 'Week 3 (Day 18–19)',
        event: 'Neural induction: the notochord signals the overlying ectoderm to become the neural plate through BMP inhibition (Noggin, Chordin, Follistatin).',
        shortLabel: 'Neural induction by notochord (BMP inhibition)',
        explanation: 'The notochord and prechordal plate secretes BMP inhibitors (Noggin, Chordin, Follistatin) that prevent BMP4 from promoting epidermal fate in the overlying ectoderm. Without BMP4 signaling, the ectoderm defaults to neural fate. FGF and Wnt signals from the node further specify neural identity. The result is the neural plate — a thickened, wedge-shaped ectodermal sheet.',
        clinicalNote: 'Defects in neural induction underlie anencephaly and other open neural tube defects. Periconceptional folic acid (400–800 mcg/day) reduces NTD risk by approximately 50–70%, likely by supporting methylation-dependent epigenetic regulation during this critical period.',
        order: 1
      },
      {
        id: 'cns-002',
        system: 'CNS Development',
        week: 'Week 3–4 (Day 18–26)',
        event: 'Neurulation: neural plate folds to form neural folds; neural folds fuse at multiple initiation sites to close the neural tube; closure is complete by day 26–28.',
        shortLabel: 'Neural tube closure (primary neurulation)',
        explanation: 'The neural plate invaginates along its midline (hinge points driven by actin contraction and wedge-shaped cells) to form neural folds. The folds elevate and converge, fusing at multiple closure initiation sites (closure 1 at the cervical level first, then zippering cranially and caudally). The cranial neuropore closes at day 25, the caudal at day 27–28.',
        clinicalNote: 'Failure of cranial neuropore closure → anencephaly (absence of the forebrain and cranial vault). Failure of caudal neuropore closure → spina bifida (myelomeningocele, meningocele). Myelomeningocele — the most severe form, with neural tissue exposed — causes paraplegia, bowel/bladder dysfunction, and Chiari II malformation with hydrocephalus.',
        order: 2
      },
      {
        id: 'cns-003',
        system: 'CNS Development',
        week: 'Week 4 (Day 22–28)',
        event: 'Three primary brain vesicles form: prosencephalon (forebrain), mesencephalon (midbrain), and rhombencephalon (hindbrain).',
        shortLabel: 'Three primary brain vesicles form',
        explanation: 'As the cranial neural tube closes and expands, it differentiates into three primary vesicles: the prosencephalon (gives rise to telencephalon and diencephalon), mesencephalon, and rhombencephalon (gives rise to metencephalon and myelencephalon). Two cephalic flexures (cephalic and cervical) cause the brain to bend sharply.',
        clinicalNote: 'Holoprosencephaly results from failure of the prosencephalon to cleave into two cerebral hemispheres. The alobar form (most severe) has a monoventricle and fused thalami. Associated with trisomy 13 (Patau syndrome) and SHH mutations. Cyclopia (fused eyes) is an associated facial anomaly in the most severe form.',
        order: 3
      },
      {
        id: 'cns-004',
        system: 'CNS Development',
        week: 'Week 5–6 (Day 35–42)',
        event: 'Five secondary brain vesicles established: telencephalon and diencephalon (from prosencephalon), mesencephalon (unchanged), metencephalon and myelencephalon (from rhombencephalon).',
        shortLabel: 'Five secondary brain vesicles established',
        explanation: 'Further subdivision creates five vesicles: the telencephalon becomes the cerebral cortex, basal ganglia, and olfactory bulbs; the diencephalon becomes the thalamus, hypothalamus, and posterior pituitary; the mesencephalon becomes the superior and inferior colliculi and cerebral peduncles; the metencephalon becomes the pons and cerebellum; the myelencephalon becomes the medulla.',
        clinicalNote: 'Dandy-Walker malformation — hypoplasia or absence of the cerebellar vermis, cystic dilation of the fourth ventricle, and enlarged posterior fossa — results from abnormal metencephalon development. Presents with hydrocephalus, ataxia, and cognitive deficits. Associated with trisomies 13 and 18, and FOXC1 mutations.',
        order: 4
      },
      {
        id: 'cns-005',
        system: 'CNS Development',
        week: 'Week 6 – Week 20',
        event: 'Neuronal proliferation occurs in the ventricular zone lining the neural tube; radial glia serve as both progenitors and scaffolding for neuronal migration.',
        shortLabel: 'Neuronal proliferation in ventricular zone',
        explanation: 'Neuroepithelial cells in the ventricular zone (pseudostratified, lining the neural tube lumen) undergo symmetric divisions to expand progenitor pool, then asymmetric divisions to generate neurons and intermediate progenitors (in the subventricular zone). Radial glia cells (identified by GFAP, nestin, vimentin) serve dual roles: as progenitors and as guides (radial fibers) for neuron migration to the cortex.',
        clinicalNote: 'Primary microcephaly (MCPH) results from reduced neuronal proliferation due to mutations in genes encoding centrosomal proteins (ASPM, CDK5RAP2). The brain is small but structurally organized. Megalencephaly results from excessive proliferation, caused by somatic activating mutations in the PI3K/AKT/mTOR pathway — associated with hemimegalencephaly and focal cortical dysplasia.',
        order: 5
      },
      {
        id: 'cns-006',
        system: 'CNS Development',
        week: 'Week 8–20',
        event: 'Cortical neuronal migration: neurons migrate radially from the ventricular zone to the cortical plate in an "inside-out" pattern (deep layers first, superficial layers last).',
        shortLabel: 'Inside-out cortical neuronal migration',
        explanation: 'Cortical neurons use radial glia fibers for guidance, migrating from the ventricular zone to the cortical plate in successive waves. Earlier-born neurons form deep cortical layers (layers VI, V); later-born neurons pass through them to settle in superficial layers (layers IV, III, II). This inside-out gradient requires Reelin signaling (secreted by Cajal-Retzius cells in layer I) for the passing-through behavior.',
        clinicalNote: 'Lissencephaly (smooth brain, absent gyri) is caused by mutations in LIS1, DCX (doublecortin), or ARX — all regulators of microtubule-based neuronal migration. Pachygyria (thick, reduced gyri) and band heterotopia (gray matter band in white matter, "double cortex") are related migrational disorders. Presents with severe intellectual disability, epilepsy, and spasticity.',
        order: 6
      },
      {
        id: 'cns-007',
        system: 'CNS Development',
        week: 'Week 10 – Birth',
        event: 'Cortical gyrification: sulci and gyri form through mechanical buckling driven by differential expansion of cortical layers; primary sulci appear by week 28.',
        shortLabel: 'Cortical gyrification begins; sulci appear by week 28',
        explanation: 'The fetal cortex is smooth (lissencephalic) until approximately week 24–26. Sulcation begins as the rapidly growing outer cortical layers buckle against the constraints of the skull and inner fiber tracts. The primary sulci (Sylvian, central, calcarine) appear between weeks 24–28; secondary and tertiary sulci form from week 32 onward. Gyrification greatly amplifies cortical surface area within the skull.',
        clinicalNote: 'Polymicrogyria (many small gyri, abnormal cortical organization) results from disrupted late migration and post-migrational cortical organization, often caused by focal ischemia, CMV infection, or mutations in GPR56, TUBB2B. Schizencephaly (cortical clefts) is often seen in severe polymicrogyria. Both cause epilepsy and cognitive impairment.',
        order: 7
      },
      {
        id: 'cns-008',
        system: 'CNS Development',
        week: 'Week 12 – Postnatal',
        event: 'Synaptogenesis and axonal pathfinding: growth cones navigate to targets using chemoattractants (netrins, semaphorins, slits); synapses are formed in excess and refined by activity-dependent pruning.',
        shortLabel: 'Synaptogenesis and activity-dependent pruning',
        explanation: 'Axonal growth cones detect gradients of guidance cues (netrins attract; semaphorins repel; Ephrins define topographic maps; Slit-Robo signaling midline crossing). Synapses are initially overproduced; activity-dependent competition (Hebbian plasticity, complement-mediated microglial pruning) eliminates weak synapses. Synaptogenesis peaks in the first two postnatal years and pruning continues through adolescence.',
        clinicalNote: 'Abnormal synaptic pruning is implicated in autism spectrum disorder (excess synapses, over-connectivity in local circuits) and schizophrenia (excessive pruning, complement genes C4A are risk alleles). Fragile X syndrome — the most common inherited intellectual disability — results from loss of FMRP, which regulates local synaptic protein synthesis.',
        order: 8
      },
      {
        id: 'cns-009',
        system: 'CNS Development',
        week: 'Week 28 – Postnatal 2 years',
        event: 'Myelination begins in spinal cord and brainstem, then proceeds rostrally; the association cortex is the last to be myelinated (not complete until the mid-20s).',
        shortLabel: 'Myelination: caudal to rostral, sensory before motor',
        explanation: 'Oligodendrocytes (CNS) and Schwann cells (PNS) form myelin sheaths. Myelination follows a predictable sequence: brainstem and spinal cord first (prenatal weeks 28–36), then cerebellum, primary sensory and motor cortex, then association areas. The prefrontal cortex — the last area to fully myelinate — does not complete myelination until approximately age 25.',
        clinicalNote: 'Periventricular leukomalacia (PVL) — ischemic white matter injury in premature infants — damages oligodendrocyte precursors, impairing myelination. It is the leading cause of cerebral palsy and cognitive disability in premature survivors. The late myelination of association cortex explains why periventricular injuries cause more cognitive than motor deficits.',
        order: 9
      },
      {
        id: 'cns-010',
        system: 'CNS Development',
        week: 'Week 4–6 (neural crest migration)',
        event: 'Neural crest cells delaminate from the dorsal neural tube and migrate throughout the body, giving rise to peripheral neurons, Schwann cells, craniofacial skeleton, melanocytes, and adrenal medulla.',
        shortLabel: 'Neural crest migration and differentiation',
        explanation: 'Neural crest cells undergo epithelial-to-mesenchymal transition (EMT) at the dorsal neural tube, then migrate extensively: cranial neural crest → craniofacial bones/cartilage, cranial ganglia, thymic/parathyroid mesenchyme; cardiac neural crest → aorticopulmonary septum; trunk neural crest → dorsal root ganglia, sympathetic chain, adrenal medulla, Schwann cells, melanocytes.',
        clinicalNote: 'Neurocristopathies — diseases of neural crest origin — include: DiGeorge syndrome (cardiac neural crest defects, 22q11.2 del), Hirschsprung disease (enteric neural crest fails to colonize hindgut), Waardenburg syndrome (melanocyte neural crest defects — white forelock, heterochromia iridis, deafness), and neuroblastoma (malignant transformation of adrenal medulla precursors).',
        order: 10
      }
    ],

    /* ── Limb Development (10 events) ── */
    'Limb Development': [
      {
        id: 'ld-001',
        system: 'Limb Development',
        week: 'Week 4 (Day 26–28)',
        event: 'Upper limb buds appear as small swellings on the lateral body wall at the level of C5–T1 somites; lower limb buds appear 2 days later at L2–S2.',
        shortLabel: 'Limb buds appear (upper then lower)',
        explanation: 'Limb buds form from lateral plate mesoderm cells that proliferate and are covered by a layer of ectoderm. FGF10 from the lateral plate mesoderm induces FGF8 in the overlying ectoderm, establishing a positive feedback loop that sustains bud outgrowth. HOX gene expression and retinoic acid specify limb position along the flank.',
        clinicalNote: 'Thalidomide, taken for morning sickness in the late 1950s–early 1960s, inhibited FGF-dependent limb bud outgrowth signaling (via cereblon-CRL4 E3 ligase inhibition). It caused phocomelia (limbs absent or replaced by seal-flipper-like stumps) and amelia. The critical window was days 27–40 post-fertilization. The thalidomide tragedy led to modern teratogen testing requirements.',
        order: 1
      },
      {
        id: 'ld-002',
        system: 'Limb Development',
        week: 'Week 4–5 (Day 28–35)',
        event: 'Apical ectodermal ridge (AER) forms at the distal tip of each limb bud and drives proximal-to-distal limb elongation by maintaining a zone of proliferating undifferentiated mesenchyme (progress zone).',
        shortLabel: 'AER forms; drives proximodistal outgrowth',
        explanation: 'The AER is a thickened ectodermal ridge at the distal limb bud margin. It secretes FGF4 and FGF8, maintaining the subjacent mesenchyme in an undifferentiated, rapidly proliferating state (the progress zone). As cells leave the progress zone, they differentiate according to how long they spent in it (determining proximal vs. distal structures). AER removal at any stage causes truncation of distal structures.',
        clinicalNote: 'Transverse limb deficiencies (congenital amputations) mimic experimental AER removal, likely from vascular disruption or amniotic band constriction during the AER-active period. The level of deficiency reflects when disruption occurred: early loss → proximal truncation (humerus); late loss → distal truncation (digital absence).',
        order: 2
      },
      {
        id: 'ld-003',
        system: 'Limb Development',
        week: 'Week 4–5 (Day 28–35)',
        event: 'Zone of polarizing activity (ZPA) in the posterior mesenchyme secretes SHH, specifying anterior-posterior (thumb-to-little finger) limb axis.',
        shortLabel: 'ZPA secretes SHH; specifies A-P axis',
        explanation: 'A group of cells in the posterior-distal mesenchyme (the ZPA) secretes Sonic Hedgehog (SHH). A graded SHH signal specifies digit identity: high SHH → posterior (little finger, digit 5); low SHH → anterior (thumb, digit 1). SHH activates GLI transcription factors and represses HAND2 in the anterior mesenchyme. The GLI3 repressor sets the anterior boundary.',
        clinicalNote: 'Preaxial polydactyly (extra thumb) results from ectopic SHH expression in the anterior limb bud (a point mutation in the SHH zone of polarizing activity regulatory sequence, ZRS/MFCS1, on chromosome 7q36). Postaxial polydactyly (extra little finger) is the most common form, caused by GLI3 mutations. Greig cephalopolysyndactyly syndrome = GLI3 loss of function.',
        order: 3
      },
      {
        id: 'ld-004',
        system: 'Limb Development',
        week: 'Week 5–6 (Day 35–42)',
        event: 'Dorsoventral axis of the limb is specified by Wnt7a (dorsal ectoderm → dorsal structures) and EN1 (ventral ectoderm → ventral structures, represses Wnt7a).',
        shortLabel: 'Dorsoventral axis specified (Wnt7a / EN1)',
        explanation: 'The dorsoventral axis is established by ectodermal signals: Wnt7a from the dorsal ectoderm activates LMX1B in the dorsal mesenchyme, specifying dorsal structures (nails, extensor tendons). EN1 in the ventral ectoderm represses Wnt7a ventrally, specifying ventral structures (palmar skin, flexor tendons). Loss of EN1 results in a mirror-image double-dorsal limb.',
        clinicalNote: 'LMX1B mutations cause nail-patella syndrome (hereditary onycho-osteodysplasia): absent or dysplastic nails and patellae, iliac horns, and nephropathy. LMX1B is also expressed in the kidney glomerulus, explaining the renal involvement (focal segmental glomerulosclerosis).',
        order: 4
      },
      {
        id: 'ld-005',
        system: 'Limb Development',
        week: 'Week 5–6 (Day 35–42)',
        event: 'Limb skeleton chondrifies: mesenchymal condensations form cartilage templates (humerus, radius/ulna, carpals, metacarpals, phalanges) in a proximal-to-distal sequence.',
        shortLabel: 'Mesenchymal condensations form cartilage skeleton',
        explanation: 'Limb mesenchymal cells condense into pre-cartilaginous nodules at positions specified by HOX genes and Wnt/BMP gradients. These condensations express SOX9 and differentiate into chondrocytes, forming hyaline cartilage models of each skeletal element. Endochondral ossification subsequently replaces cartilage with bone, beginning in the primary ossification centers during week 7–8.',
        clinicalNote: 'Achondroplasia, the most common skeletal dysplasia, is caused by a gain-of-function mutation in FGFR3 (Gly380Arg), constitutively inhibiting chondrocyte proliferation and differentiation. Results in rhizomelic (proximal > distal) limb shortening with normal trunk. 80% arise de novo. FGFR3 normally restrains chondrocyte proliferation in the growth plate.',
        order: 5
      },
      {
        id: 'ld-006',
        system: 'Limb Development',
        week: 'Week 6–7 (Day 40–49)',
        event: 'Digital rays form; interdigital mesenchyme undergoes BMP-driven apoptosis (programmed cell death) to sculpt separate fingers by week 7–8.',
        shortLabel: 'Interdigital apoptosis separates digits',
        explanation: 'Five digital rays are visible by week 6 as areas of pre-chondrocytic condensation. The intervening interdigital mesenchyme is eliminated by BMP4/BMP7-induced apoptosis (confirmed by TUNEL staining of the interdigital zones). Without this sculpting, the digits remain webbed (syndactyly). The process proceeds from anterior to posterior (thumb to little finger).',
        clinicalNote: 'Syndactyly (fused digits) results from failure of interdigital apoptosis and is the most common limb malformation (1:2000). Cutaneous syndactyly involves only soft tissue; osseous syndactyly involves fused bones. Apert syndrome (FGFR2 mutations) causes complex syndactyly of all digits ("mitten hand") with craniosynostosis, because FGFR2 normally promotes BMP-driven apoptosis in the interdigital space.',
        order: 6
      },
      {
        id: 'ld-007',
        system: 'Limb Development',
        week: 'Week 6–8 (Day 40–56)',
        event: 'Muscle development in limbs: myoblasts from somitic dermomyotome migrate into the limb bud, guided by the limb mesenchyme; they split into dorsal (extensor) and ventral (flexor) muscle masses.',
        shortLabel: 'Myoblasts migrate into limb; form extensor and flexor masses',
        explanation: 'Myoblasts delaminate from the hypaxial dermomyotome of thoracic and lumbar somites and migrate into the limb bud. In the limb, they form two primary muscle masses: dorsal (extensor/supinator muscles) and ventral (flexor/pronator). These masses are subsequently sculpted by apoptosis, condensation, and fiber type specification into individual muscles. Motor neurons grow out from the spinal cord to innervate the muscles.',
        clinicalNote: 'Congenital absence or hypoplasia of a specific muscle (e.g., pectoralis major — Poland syndrome; serratus anterior; flexor digitorum) results from failure of the corresponding myoblast population to migrate, proliferate, or survive. Poland syndrome (unilateral absence of sternal head of pectoralis major + ipsilateral symbrachydactyly) likely reflects a vascular insult to the subclavian artery during this period.',
        order: 7
      },
      {
        id: 'ld-008',
        system: 'Limb Development',
        week: 'Week 7–8 (Day 49–56)',
        event: 'Primary ossification centers appear in the limb long bones (beginning with the clavicle and femoral shaft) by intramembranous and endochondral ossification respectively.',
        shortLabel: 'Primary ossification centers appear',
        explanation: 'Ossification of limb bones begins in week 7–8. Endochondral ossification in the diaphysis of long bones is initiated by chondrocyte hypertrophy, vascular invasion, and osteoblast recruitment. The clavicle ossifies intramembranously (directly from mesenchyme), while all other limb bones ossify endochondrally. Secondary (epiphyseal) ossification centers appear postnatally.',
        clinicalNote: 'The timing of secondary ossification center appearance is used in forensic and pediatric radiology to estimate skeletal (bone) age. The distal femoral epiphysis is present at 36 weeks gestation, the proximal tibial epiphysis at 38–40 weeks — these help determine gestational maturity in newborns.',
        order: 8
      },
      {
        id: 'ld-009',
        system: 'Limb Development',
        week: 'Week 6–8 (Day 40–56)',
        event: 'Joint cavitation: the interzone — a region of flattened cells between chondrocyte condensations — forms and undergoes cavitation driven by hyaluronidase and joint movement.',
        shortLabel: 'Joint cavitation creates synovial joints',
        explanation: 'At future joint sites, the cartilage condensation differentiates into an interzone of three layers: outer layers become the articular cartilage; the middle layer (where Wnt9a is expressed) undergoes cavitation (dissolution of the extracellular matrix by hyaluronidase, stimulated by joint movement) to create the joint cavity. Without movement, joints fail to cavitate.',
        clinicalNote: 'Congenital joint contractures (arthrogryposis) result from failure of joint cavitation and fixation in abnormal positions. Causes include neuromuscular disorders (fetal akinesia), connective tissue diseases, oligohydramnios, and vascular disruption. Bilateral talipes equinovarus (clubfoot) is the most common, occurring in 1:1000 births.',
        order: 9
      },
      {
        id: 'ld-010',
        system: 'Limb Development',
        week: 'Week 5–8 (HOX gene specification)',
        event: 'HOX genes of the HoxA and HoxD clusters are expressed in nested collinear domains along the limb axes and specify segment identity (stylopod, zeugopod, autopod).',
        shortLabel: 'HOX genes specify limb segment identity',
        explanation: 'The 5\' (posterior) HOX genes in the HoxA and HoxD clusters are expressed in nested patterns: Hoxa/d9-10 specify the stylopod (humerus/femur); Hoxa/d11-12 specify the zeugopod (radius-ulna/tibia-fibula); Hoxa/d13 specifies the autopod (wrist, hand). This collinear expression reflects temporal activation of HOX genes in 3\'-to-5\' order, driven by SHH and FGF gradients.',
        clinicalNote: 'Synpolydactyly (extra webbed digit) in humans is caused by polyalanine expansions in HOXD13. HOXA13 frameshift mutations cause hand-foot-genital syndrome (hypoplastic thumbs, small feet, uterine anomalies). Biallelic HOXD cluster deletions produce severe limb truncation, demonstrating the indispensable role of HOX genes in limb skeletal specification.',
        order: 10
      }
    ],

    /* ── Head and Neck Development (10 events) ── */
    'Head and Neck Development': [
      {
        id: 'hnd-001',
        system: 'Head and Neck Development',
        week: 'Week 4 (Day 22–24)',
        event: 'Five pharyngeal (branchial) arches form as paired swellings around the primitive pharynx; each contains an arterial arch, cartilage bar, nerve, and muscle precursors.',
        shortLabel: 'Five pharyngeal arches form',
        explanation: 'Pharyngeal arches 1, 2, 3, 4, and 6 (arch 5 is vestigial in humans) develop as bilateral condensations of neural crest cells surrounding a mesodermal core, covered externally by ectoderm and internally by endoderm. Each arch has its own cranial nerve (V, VII, IX, X/XI), aortic arch artery, Hox-code-specified cartilage, and mesoderm-derived muscles.',
        clinicalNote: 'Each arch nerve is clinically recognizable: arch 1 → CN V (trigeminal — mastication, sensation); arch 2 → CN VII (facial — facial expression); arch 3 → CN IX (glossopharyngeal — stylopharyngeus); arch 4 → CN X (vagus — pharynx, larynx); arch 6 → CN X recurrent laryngeal branch (intrinsic laryngeal muscles).',
        order: 1
      },
      {
        id: 'hnd-002',
        system: 'Head and Neck Development',
        week: 'Week 4–5 (Day 26–35)',
        event: 'Pharyngeal arch 1 cartilage (Meckel\'s) contributes to the incus, malleus (ossicles), and mandibular symphysis; the mandible ossifies intramembranously lateral to Meckel\'s cartilage.',
        shortLabel: 'Arch 1 (Meckel\'s) forms malleus, incus, mandible',
        explanation: 'The dorsal end of Meckel\'s cartilage differentiates into the malleus and incus (middle ear ossicles). The mandibular bone does not derive from Meckel\'s cartilage but forms by intramembranous ossification of neural crest-derived mesenchyme alongside it. Meckel\'s cartilage itself largely regresses, leaving the sphenomandibular ligament and the anterior malleal ligament.',
        clinicalNote: 'Treacher Collins syndrome (mandibulofacial dysostosis) results from TCOF1 (treacle) mutations causing neural crest cell apoptosis during arch 1 development: bilateral malar hypoplasia, micrognathia, coloboma of lower eyelid, absent zygoma, and conductive hearing loss (ossicle abnormalities). Autosomal dominant with variable expressivity.',
        order: 2
      },
      {
        id: 'hnd-003',
        system: 'Head and Neck Development',
        week: 'Week 4–5 (Day 26–35)',
        event: 'Pharyngeal arch 2 cartilage (Reichert\'s) forms the stapes, styloid process, lesser horn of hyoid, and upper body of hyoid.',
        shortLabel: 'Arch 2 (Reichert\'s) forms stapes, styloid, hyoid',
        explanation: 'The dorsal Reichert\'s cartilage gives rise to the stapes (third ossicle) and styloid process. The ventral portion forms the lesser horns and upper body of the hyoid bone. CN VII runs through arch 2, which is why it innervates all muscles of facial expression (derived from arch 2 mesoderm).',
        clinicalNote: 'Hemifacial microsomia (first and second arch syndrome, oculoauriculovertebral syndrome / Goldenhar syndrome) results from abnormal neural crest development of the first and second arches — unilateral microtia, asymmetric mandible, pre-auricular tags, and epibulbar dermoids. Usually sporadic; may involve stapedial artery disruption.',
        order: 3
      },
      {
        id: 'hnd-004',
        system: 'Head and Neck Development',
        week: 'Week 4–5 (Day 26–35)',
        event: 'Pharyngeal pouches 1–4 form as endodermal evaginations between arches; they give rise to middle ear, palatine tonsil, thymus, parathyroid glands, and ultimobranchial body (C cells).',
        shortLabel: 'Pharyngeal pouches form endodermal derivatives',
        explanation: 'Pouch 1 → tubotympanic recess (auditory tube, middle ear); Pouch 2 → palatine tonsil (lymphoid tissue); Pouch 3 dorsal → inferior parathyroid (migrates to lower pole of thyroid); Pouch 3 ventral → thymus (migrates to mediastinum); Pouch 4 dorsal → superior parathyroid; Pouch 4–5 ventral → ultimobranchial body (parafollicular C cells that migrate into thyroid).',
        clinicalNote: 'DiGeorge syndrome (22q11.2 deletion) is the paradigm pouch 3 and 4 defect: absent thymus (T-cell immunodeficiency), hypoparathyroidism (hypocalcemia, tetany), and conotruncal heart defects. The "CATCH-22" acronym: Cardiac defects, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcemia, 22q11.2.',
        order: 4
      },
      {
        id: 'hnd-005',
        system: 'Head and Neck Development',
        week: 'Week 4–5 (Day 24–35)',
        event: 'Thyroid gland descends from the foramen cecum at the base of the tongue to its pretracheal position, passing anterior to the hyoid bone; the thyroglossal duct normally obliterates.',
        shortLabel: 'Thyroid descends; thyroglossal duct obliterates',
        explanation: 'The thyroid diverticulum arises from the endoderm at the foramen cecum (between the anterior 2/3 and posterior 1/3 of the tongue). It descends in the midline anterior to the hyoid and trachea to its definitive pretracheal position by week 7. The connection (thyroglossal duct) normally involutes, leaving only the foramen cecum superiorly and the pyramidal lobe of the thyroid inferiorly.',
        clinicalNote: 'Thyroglossal duct cyst is the most common congenital neck mass in children (2:3 ratio to branchial cleft cysts). Located in the midline, moves upward on tongue protrusion (attached via the duct tract to the tongue base). Sistrunk procedure (excision of cyst + duct + middle portion of hyoid) minimizes recurrence. Lingual thyroid results from failed descent and is the only thyroid tissue in 70% of cases.',
        order: 5
      },
      {
        id: 'hnd-006',
        system: 'Head and Neck Development',
        week: 'Week 4–8 (Day 28–56)',
        event: 'Pharyngeal clefts (grooves) between arches: cleft 1 forms the external auditory meatus; clefts 2–4 are buried by the overgrowth of arch 2 to form the cervical sinus, which normally obliterates.',
        shortLabel: 'Cervical sinus forms and obliterates; cleft 1 becomes EAM',
        explanation: 'Externally, pharyngeal clefts appear between arches. The first cleft persists as the external auditory meatus. Arches 2, 3, and 4 are covered by the rapid caudal growth of arch 2, burying clefts 2–4 in an ectodermal-lined space (cervical sinus of His). This space normally obliterates completely as the neck develops.',
        clinicalNote: 'Persistence of the cervical sinus produces branchial cleft cysts (2nd > 1st > 3rd order). Second branchial cleft cysts present along the anterior border of the sternocleidomastoid muscle; complete fistulae open at the skin and drain internally at the tonsillar fossa. Must be distinguished from thyroglossal cysts (midline vs. lateral) and lymphadenopathy.',
        order: 6
      },
      {
        id: 'hnd-007',
        system: 'Head and Neck Development',
        week: 'Week 5–8 (Day 35–56)',
        event: 'Palate development: primary palate forms from the frontonasal process; secondary palate forms from paired maxillary palatal shelves that elevate and fuse in the midline by week 9.',
        shortLabel: 'Palatal shelves elevate and fuse (secondary palate)',
        explanation: 'The primary palate is formed by the intermaxillary segment (derived from medial nasal processes) and contributes the premaxilla and the alveolar arch containing the four upper incisors. The secondary palate forms from palatal shelves (outgrowths of the maxillary processes); initially vertical (flanking the tongue), they rapidly elevate to a horizontal position and fuse in the midline, from anterior to posterior, with the nasal septum, completing by week 9.',
        clinicalNote: 'Cleft palate (1:1000 births) results from failure of the palatal shelves to fuse. Cleft lip results from failure of the maxillary process to fuse with the medial nasal process (forming the philtrum). They can occur separately or together. Risk factors: valproate, corticosteroids, alcohol, vitamin A excess. Submucous cleft palate (split uvula/notched hard palate) may cause velopharyngeal insufficiency (hypernasal speech).',
        order: 7
      },
      {
        id: 'hnd-008',
        system: 'Head and Neck Development',
        week: 'Week 4–6 (Day 22–42)',
        event: 'Facial development: five facial primordia surround the stomodeum (frontonasal process, paired maxillary processes, paired mandibular processes); medial and lateral nasal processes form around the nasal placode.',
        shortLabel: 'Five facial primordia form; nasal placode invaginates',
        explanation: 'The face develops from five primordia: the unpaired frontonasal process (gives forehead, bridge of nose, philtrum, premaxilla) and paired maxillary and mandibular processes (from arch 1). Bilateral nasal placodes indent to form nasal pits; the medial nasal processes fuse at the midline to form the philtrum and primary palate. The lateral nasal processes form the nasal alae.',
        clinicalNote: 'Holoprosencephaly-associated facial defects reflect shared midline signaling: cyclopia (single eye), proboscis (single tubular nose), median cleft lip from failure of midline facial fusion. Isolated median cleft lip ("true median cleft") without holoprosencephaly is very rare and results from failure of medial nasal process fusion.',
        order: 8
      },
      {
        id: 'hnd-009',
        system: 'Head and Neck Development',
        week: 'Week 6–8 (Day 38–56)',
        event: 'Cranial base ossifies by endochondral ossification from the chondrocranium; the calvaria (cranial vault) ossifies intramembranously from neural crest-derived mesenchyme.',
        shortLabel: 'Chondrocranium and calvarial ossification',
        explanation: 'The skull has two embryological origins: the chondrocranium (base — forms by endochondral ossification of the cartilaginous skull base, derived from cranial neural crest and occipital somites) and the desmocranium (vault — forms by intramembranous ossification of neural crest-derived membranous bone). The bones of the vault (frontal, parietal, occipital squama, temporal squama) are separated by fibrous sutures allowing growth and birth-canal compression.',
        clinicalNote: 'Craniosynostosis (premature fusion of calvarial sutures) restricts brain growth. Isolated sagittal synostosis → scaphocephaly (boat-shaped head); coronal → plagiocephaly; metopic → trigonocephaly. Syndromic craniosynostoses (Apert, Crouzon, Pfeiffer) are caused by gain-of-function FGFR1/2/3 mutations that accelerate intramembranous ossification.',
        order: 9
      },
      {
        id: 'hnd-010',
        system: 'Head and Neck Development',
        week: 'Week 3–5 (Day 18–35)',
        event: 'Pituitary gland develops from two sources: Rathke\'s pouch (oral ectoderm upward evagination → adenohypophysis) and a downgrowth of neuroectoderm from the floor of the diencephalon (→ neurohypophysis).',
        shortLabel: 'Pituitary from Rathke\'s pouch + diencephalon downgrowth',
        explanation: 'Rathke\'s pouch is an upward evagination of the ectoderm of the roof of the stomodeum (primitive mouth) that contacts and then separates from the oral ectoderm. It gives rise to the pars distalis (anterior pituitary), pars tuberalis, and pars intermedia. The infundibulum, a downgrowth of the diencephalon floor, forms the pars nervosa (posterior pituitary), infundibular stalk, and median eminence.',
        clinicalNote: 'Craniopharyngioma arises from remnants of Rathke\'s pouch epithelium along the stalk. The adamantinomatous type (children) has CTNNB1 (beta-catenin) mutations and shows cholesterol crystals; the papillary type (adults) has BRAF V600E mutations. Both compress the pituitary stalk, hypothalamus, and optic chiasm, causing hypopituitarism, visual field defects (bitemporal hemianopia), and DI.',
        order: 10
      }
    ],

    /* ── Eye and Ear Development (10 events) ── */
    'Eye and Ear Development': [
      {
        id: 'ead-001',
        system: 'Eye and Ear Development',
        week: 'Week 4 (Day 22–26)',
        event: 'Optic vesicles evaginate laterally from the diencephalon and contact the overlying surface ectoderm, inducing it to form the lens placode.',
        shortLabel: 'Optic vesicles evaginate; lens placode induced',
        explanation: 'As the prosencephalon forms, paired lateral evaginations (optic vesicles) grow out and contact the overlying surface ectoderm. This contact, mediated by Pax6, Sox2, and FGF signaling, induces the ectoderm to thicken into the lens placode. The optic vesicle itself expresses Pax6 — the universal eye transcription factor — and Vax2 for ventral specification.',
        clinicalNote: 'PAX6 is the "master control gene" for eye development, conserved from Drosophila (eyeless) to humans. Heterozygous PAX6 mutations cause aniridia (absence of iris) in humans. Homozygous loss is lethal to eye development. Ectopic PAX6 expression can induce functional eyes in Drosophila on legs and antennae.',
        order: 1
      },
      {
        id: 'ead-002',
        system: 'Eye and Ear Development',
        week: 'Week 4–5 (Day 26–33)',
        event: 'Optic vesicle invaginates to form the double-layered optic cup; the inner layer becomes the neural retina, the outer becomes the retinal pigment epithelium (RPE).',
        shortLabel: 'Optic cup forms; retina differentiates',
        explanation: 'The optic vesicle invaginates to form a two-layered optic cup (like pushing a finger into a balloon). The inner layer differentiates into the multilayered neural retina (photoreceptors, bipolar cells, ganglion cells), while the outer layer differentiates into the retinal pigment epithelium (RPE). The stalk connecting to the brain becomes the optic nerve as ganglion cell axons grow into it.',
        clinicalNote: 'Coloboma results from failure of the optic fissure (choroidal fissure) to close. The fissure is located inferonasally; colobomas therefore typically involve the iris, ciliary body, retina, and choroid inferonasal sector. Patchy colobomas are a feature of CHARGE syndrome (CHD7 mutations): Coloboma, Heart defects, Atresia choanae, Retarded growth, Genital anomalies, Ear anomalies.',
        order: 2
      },
      {
        id: 'ead-003',
        system: 'Eye and Ear Development',
        week: 'Week 5–7 (Day 33–49)',
        event: 'Lens vesicle detaches from surface ectoderm; posterior cells elongate into primary lens fibers that fill the lens vesicle; the anterior cells become the lens epithelium.',
        shortLabel: 'Lens vesicle forms; primary lens fibers differentiate',
        explanation: 'The lens placode invaginates to form the lens pit and then the lens vesicle, which pinches off from the surface ectoderm. Posterior cells elongate dramatically, filling the vesicle cavity with primary lens fibers (packed with crystallin proteins). The anterior cells form a simple epithelium; at the equatorial zone, they continue dividing and differentiating into secondary lens fibers throughout life.',
        clinicalNote: 'Congenital cataracts — opacification of the lens — are caused by disruption of lens fiber development or crystallin gene mutations (CRYAA, CRYAB, GJA8/connexin 50). They are the leading cause of treatable childhood blindness worldwide. Galactosemia (galactose accumulates, converted to galactitol, osmotically damaging the lens) and intrauterine rubella infection (virus disrupts lens fiber arrangement) are important acquired causes.',
        order: 3
      },
      {
        id: 'ead-004',
        system: 'Eye and Ear Development',
        week: 'Week 5–6 (Day 35–42)',
        event: 'Cornea forms from the surface ectoderm and two waves of neural crest migration: first wave → keratocytes (stroma); second wave → endothelium.',
        shortLabel: 'Cornea formed from ectoderm and neural crest',
        explanation: 'After lens detachment, the surface ectoderm forms the corneal epithelium. Neural crest cells migrate in two waves into the space between the epithelium and lens: the first wave forms the corneal stroma (keratocytes); the second forms the corneal endothelium (which maintains corneal dehydration and transparency). The avascular cornea is nourished by the aqueous humor.',
        clinicalNote: 'Peters anomaly (central corneal opacity with iris adhesions) results from failure of neural crest migration into the anterior segment. Posterior embryotoxon (prominent Schwalbe line) and Axenfeld-Rieger syndrome (iris hypoplasia, glaucoma) also reflect neural crest-derived anterior segment dysgenesis. PITX2 mutations cause Rieger syndrome.',
        order: 4
      },
      {
        id: 'ead-005',
        system: 'Eye and Ear Development',
        week: 'Week 4 (Day 22–26)',
        event: 'Otic placode forms lateral to the rhombencephalon; it invaginates to form the otic pit and then the otocyst (otic vesicle) — the primordium of the membranous labyrinth.',
        shortLabel: 'Otic placode invaginates to form otocyst',
        explanation: 'FGF3 and FGF10 from the hindbrain (rhombomeres 5–6) and the adjacent paraxial mesoderm induce the overlying ectoderm to thicken into the otic placode. The placode invaginates progressively, forming an otic pit that pinches off completely from the ectoderm by day 30, becoming the otocyst (otic vesicle). The otocyst contains all the information to form the entire membranous labyrinth.',
        clinicalNote: 'Mutations in transcription factors expressed in the otic placode (EYA1, SIX1, SIX5) cause branchio-oto-renal (BOR) syndrome: branchial fistulas, ear anomalies (auricular pits, microtia, sensorineural and/or conductive hearing loss), and renal anomalies (often aplasia or hypoplasia). EYA1 and SIX1 are co-activators in the same transcriptional complex.',
        order: 5
      },
      {
        id: 'ead-006',
        system: 'Eye and Ear Development',
        week: 'Week 5–8 (Day 35–56)',
        event: 'Otocyst morphogenesis: the dorsal otocyst forms the endolymphatic duct and sac; the ventral otocyst forms the cochlear duct (coiled ~2.5 turns) and saccule; the dorsolateral portion forms the three semicircular canals.',
        shortLabel: 'Otocyst forms cochlea, vestibule, and semicircular canals',
        explanation: 'The otocyst expands and differentiates into the complete membranous labyrinth: the endolymphatic duct and sac (dorsomedial) regulate endolymph homeostasis; the cochlear duct spirals 2.5 turns and houses the organ of Corti; the three semicircular canals (superior, posterior, lateral) detect angular acceleration; the utricle and saccule detect linear acceleration via hair cell-topped otolith organs.',
        clinicalNote: 'Mondini malformation — incomplete coiling of the cochlea (1–1.5 turns instead of 2.5) with dilated vestibular aqueduct — results from failure of cochlear duct morphogenesis. It is associated with SLC26A4 mutations (Pendred syndrome: goiter + sensorineural hearing loss). Connexin 26 (GJB2) mutations are the most common cause of non-syndromic sensorineural hearing loss globally.',
        order: 6
      },
      {
        id: 'ead-007',
        system: 'Eye and Ear Development',
        week: 'Week 4–8 (Day 22–56)',
        event: 'Middle ear ossicles form from pharyngeal arch cartilages: malleus and incus from arch 1 (Meckel\'s cartilage); stapes from arch 2 (Reichert\'s cartilage); the middle ear cavity forms from the first pharyngeal pouch.',
        shortLabel: 'Ossicles form from arch cartilages; middle ear from pouch 1',
        explanation: 'The three ossicles have dual origins: the malleus and incus are derived from the dorsal end of Meckel\'s cartilage (arch 1); the stapes derives from Reichert\'s cartilage (arch 2), with the ring of the stapes footplate partially from the otic capsule. The tympanic cavity and auditory tube are formed by lateral expansion of the first pharyngeal pouch (tubotympanic recess), which extends around the ossicles and transforms the cavity into the middle ear.',
        clinicalNote: 'Conductive hearing loss from ossicle anomalies is a feature of first and second arch syndromes: Treacher Collins (absent/fused incus-malleus), Goldenhar syndrome, and oculo-auriculo-vertebral spectrum. Otosclerosis — abnormal endochondral bone growth around the stapes footplate causing fixation and conductive deafness — has a developmental component related to the otic capsule cartilage.',
        order: 7
      },
      {
        id: 'ead-008',
        system: 'Eye and Ear Development',
        week: 'Week 6–20',
        event: 'Retinal differentiation: ganglion cells differentiate first (inside-out sequence), followed by cone photoreceptors, rod photoreceptors, bipolar cells, and Müller glia; ganglion cell axons form the optic nerve.',
        shortLabel: 'Retinal layers differentiate; optic nerve forms',
        explanation: 'Retinogenesis follows a conserved "inside-out" order: retinal ganglion cells (RGCs) first, then cone photoreceptors, horizontal cells, amacrine cells, rod photoreceptors, bipolar cells, and finally Müller glia. RGC axons grow toward the optic disc, enter the optic stalk (becoming the optic nerve), cross partially at the optic chiasm (nasal fibers cross; temporal fibers stay ipsilateral), and synapse in the lateral geniculate nucleus.',
        clinicalNote: 'Retinoblastoma, the most common pediatric intraocular malignancy, arises from retinal progenitor cells with biallelic RB1 loss. Presents as leukocoria (white pupillary reflex) in children under 5. Hereditary form (40%) has germline RB1 mutation — also increases risk of osteosarcoma and other sarcomas (2-hit hypothesis, Knudson). RB1 is the archetypal tumor suppressor gene.',
        order: 8
      },
      {
        id: 'ead-009',
        system: 'Eye and Ear Development',
        week: 'Week 8–20 (cochlear hair cell differentiation)',
        event: 'Cochlear hair cells differentiate in the organ of Corti from progenitors; inner hair cells (IHC) and outer hair cells (OHC) arise from prosensory epithelium under Atoh1 regulation.',
        shortLabel: 'Cochlear hair cells differentiate (Atoh1-driven)',
        explanation: 'The prosensory domain of the cochlear duct differentiates into the organ of Corti. Atoh1 (Math1) is the master transcription factor driving hair cell fate. Notch lateral inhibition ensures that not all progenitors become hair cells — Notch activation drives supporting cell fate. One row of IHCs (primary afferent, ~3500 cells) and three rows of OHCs (amplification, ~12000 cells) form along the 35 mm basilar membrane.',
        clinicalNote: 'Hair cells do not regenerate in mammals, unlike in birds. Loss from noise, aminoglycosides, or cisplatin is permanent. OHCs are most vulnerable: they are killed first by aminoglycosides (damage propagates from base to apex, basal turn = high frequency → high-frequency loss first). ATOH1 gene therapy to reprogram supporting cells into hair cells is in early clinical trials for hearing restoration.',
        order: 9
      },
      {
        id: 'ead-010',
        system: 'Eye and Ear Development',
        week: 'Week 6–8 (Day 38–56)',
        event: 'Auricle (external ear) forms from six auricular hillocks — swellings on arches 1 and 2 flanking the first cleft — which fuse and remodel into the adult auricle configuration.',
        shortLabel: 'Six auricular hillocks fuse to form external ear',
        explanation: 'Six auricular hillocks (His\'s hillocks) develop from mesenchymal proliferations: hillocks 1–3 from the first arch (form the tragus and some of the helix); hillocks 4–6 from the second arch (form the antihelix, antitragus, and lower helix). These fuse and remodel dramatically to achieve the adult auricle form by week 20. The auricle shifts from the neck region to the side of the head as the mandible grows.',
        clinicalNote: 'Microtia (small or absent auricle) and anotia (complete absence) result from failure of auricular hillock development and fusion. Grade III–IV microtia often has an associated atretic external auditory canal and middle ear anomalies (conductive hearing loss). Pre-auricular tags and pits are remnants of incompletely fused or resorbed auricular hillock tissue. The low initial position of the auricle explains why in conditions with mandibular hypoplasia (DiGeorge, Treacher Collins) the ears appear low-set.',
        order: 10
      }
    ]
  };

})();
