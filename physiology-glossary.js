/* physiology-glossary.js — what abbreviations and terms stand for, why they matter,
 * and how they differ from look-alikes. Study notes (standard physiology), not quotes from
 * the source files. match = regex used to find the term in True/False questions. */
window.PHYSIO_GLOSSARY = {
 "RBC": {
  "label": "RBC",
  "full": "Red blood cell (erythrocyte) count",
  "why": "Number of red cells per volume of blood. Together with Hb and Hct it defines anemia and polycythemia, and it is needed to calculate MCV and MCH.",
  "vs": "Hct is the volume fraction taken by cells and Hb is the amount of pigment. The three usually move together, but not always: in thalassemia trait the RBC count is normal or high while MCV and Hb are low.",
  "match": "\\bRBCs?\\b|\\berythrocyte count"
 },
 "Hb": {
  "label": "Hb",
  "full": "Hemoglobin concentration",
  "why": "The main measure of anemia, and it sets how much O₂ blood can carry: 1.34 ml O₂ per gram of fully saturated Hb.",
  "vs": "Hct measures cell volume, not pigment. MCH is Hb per cell and MCHC is Hb per volume of cells."
 },
 "Hct": {
  "label": "Hct",
  "full": "Hematocrit (packed cell volume, PCV)",
  "why": "Fraction of blood volume made of red cells. High Hct raises viscosity and resistance; low Hct means anemia or hemodilution.",
  "vs": "Hb is the pigment concentration; as a rule of thumb Hct (%) ≈ 3 × Hb (g/dL). A change in plasma volume alters Hct without any change in red-cell mass.",
  "match": "\\b[Hh]ematocrit\\b"
 },
 "MCV": {
  "label": "MCV",
  "full": "Mean corpuscular volume",
  "why": "Average volume of one red cell. It is the first index used to classify anemia: microcytic (< 80 fL, e.g. iron deficiency, thalassemia), normocytic, or macrocytic (> 100 fL, e.g. B12 or folate deficiency).",
  "vs": "MCV is size. MCH is the Hb mass in one cell. MCHC is how concentrated the Hb is inside the cells.",
  "match": "\\bMCV\\b"
 },
 "MCH": {
  "label": "MCH",
  "full": "Mean corpuscular hemoglobin",
  "why": "Average mass of hemoglobin in one red cell. Low in iron deficiency (hypochromia). It follows MCV, because a smaller cell holds less Hb.",
  "vs": "MCH is an amount per cell and depends on cell size. MCHC is a concentration and does not: a small cell can have a low MCH with a normal MCHC.",
  "match": "\\bMCH\\b"
 },
 "MCHC": {
  "label": "MCHC",
  "full": "Mean corpuscular hemoglobin concentration",
  "why": "Concentration of Hb inside the red cells. Low means hypochromic cells (iron deficiency). It rarely goes high, because cells cannot overfill with Hb; a high MCHC suggests spherocytosis.",
  "vs": "MCH is Hb per cell (pg). MCHC is Hb per volume of cells (g/dL), so it can be calculated as Hb ÷ Hct or MCH ÷ MCV.",
  "match": "\\bMCHC\\b"
 },
 "WBC": {
  "label": "WBC",
  "full": "White blood cell (leukocyte) count",
  "why": "Rises with infection, inflammation, stress and leukemia; falls with marrow failure and some drugs.",
  "vs": "The total count can hide a shift between cell types. The differential (% neutrophils, lymphocytes, …) shows which line changed.",
  "match": "\\bWBCs?\\b|\\bleukocyte count"
 },
 "Neutrophils": {
  "full": "Neutrophil granulocytes",
  "why": "The largest WBC group (57–67%). They are the first responders to bacterial infection, so a neutrophilia with a \"left shift\" (young band forms) points to bacterial infection.",
  "vs": "Lymphocytes (23–33%) dominate in viral infections; eosinophils rise in allergy and parasites."
 },
 "Lymphocytes": {
  "full": "Lymphocytes (B, T and NK cells)",
  "why": "The second largest WBC group (23–33%), carrying out specific immunity. Lymphocytosis is typical of viral infections and chronic lymphocytic leukemia.",
  "vs": "Neutrophils handle acute bacterial infection; lymphocytes handle viral infection and immune memory."
 },
 "Monocytes": {
  "full": "Monocytes",
  "why": "Make up 3–7% of WBCs. They leave the blood and become tissue macrophages; they are raised in chronic infections such as TB.",
  "vs": "Monocytes are the circulating form; macrophages are the same lineage after they settle in tissues."
 },
 "Eosinophils": {
  "full": "Eosinophil granulocytes",
  "why": "Make up 1–3% of WBCs. They rise in allergy, asthma and parasitic (helminth) infections.",
  "vs": "Basophils (0–1%) release histamine; eosinophils mainly fight parasites and modulate allergic reactions."
 },
 "Basophils": {
  "full": "Basophil granulocytes",
  "why": "The rarest WBC (0–1%). They release histamine and heparin, like tissue mast cells.",
  "vs": "Eosinophils are more common and fight parasites. Basophils are the blood counterpart of mast cells."
 },
 "PLT": {
  "label": "PLT",
  "full": "Platelet (thrombocyte) count",
  "why": "Platelets form the first plug at a bleeding site. A low count brings bleeding risk (petechiae, mucosal bleeding); a high count occurs in inflammation and marrow disorders.",
  "vs": "Platelets carry out primary hemostasis (the plug). PT and aPTT test the clotting factors, which carry out secondary hemostasis (fibrin)."
 },
 "PT": {
  "label": "PT",
  "full": "Prothrombin time (Quick test)",
  "why": "Tests the extrinsic and common pathways (factors VII, X, V, II and fibrinogen). It is prolonged with warfarin, vitamin K deficiency and liver disease.",
  "vs": "aPTT tests the intrinsic and common pathways. INR is the PT standardized so that results from different labs can be compared.",
  "match": "\\bQUICK\\b|\\bQuick\\b|\\bprothrombin time\\b|\\bPT\\b"
 },
 "INR": {
  "label": "INR",
  "full": "International normalized ratio",
  "why": "PT expressed as (patient PT ÷ normal PT) raised to the ISI of the reagent. It makes results comparable across labs and is how warfarin therapy is monitored (target usually 2–3).",
  "vs": "PT is the raw time in seconds. INR is a unitless ratio corrected for how sensitive the thromboplastin reagent is.",
  "match": "\\bINR\\b"
 },
 "aPTT": {
  "label": "aPTT",
  "full": "Activated partial thromboplastin time",
  "why": "Tests the intrinsic and common pathways (XII, XI, IX, VIII, X, V, II, fibrinogen). It is prolonged in hemophilia A and B and with unfractionated heparin.",
  "vs": "PT/INR tests the extrinsic pathway (factor VII), so warfarin prolongs PT first; heparin is followed with aPTT.",
  "match": "\\baPTT\\b"
 },
 "EDTA": {
  "label": "EDTA",
  "full": "Ethylenediaminetetraacetic acid",
  "why": "An anticoagulant for blood counts: it binds Ca²⁺, which the clotting cascade needs, and keeps cell shape well.",
  "vs": "Citrate and oxalate also bind Ca²⁺ (citrate is used for coagulation tests and transfusion). Heparin works differently: it activates antithrombin and also works in the body.",
  "match": "\\bEDTA\\b"
 },
 "Heparin": {
  "full": "Heparin",
  "why": "An anticoagulant that works both in the test tube and in the body: it boosts antithrombin, which inactivates thrombin and factor Xa. Its effect can be reversed with protamine.",
  "vs": "EDTA, citrate and oxalate only work outside the body, by binding Ca²⁺. Warfarin works in the body only, by blocking vitamin K-dependent factor synthesis.",
  "match": "\\b[Hh]eparin\\b"
 },
 "Fibrinogen": {
  "full": "Fibrinogen (factor I)",
  "why": "A plasma protein that thrombin converts into fibrin, the mesh of the clot. It is also an acute-phase protein that raises ESR.",
  "vs": "Serum is plasma without fibrinogen and the other clotting factors that are used up when blood clots.",
  "match": "\\b[Ff]ibrinogen\\b"
 },
 "Hemophilia": {
  "full": "Hemophilia A / B",
  "why": "X-linked deficiency of factor VIII (A) or IX (B). Bleeding goes into joints and muscles; aPTT is prolonged and PT is normal.",
  "vs": "Platelet disorders cause mucosal and skin bleeding with normal aPTT; von Willebrand disease can affect both.",
  "match": "\\b[Hh]emophilia\\b"
 },
 "ABO": {
  "label": "ABO",
  "full": "ABO blood group system",
  "why": "The most important system in transfusion: plasma naturally contains antibodies (IgM) against the A or B antigen a person lacks, so a mismatch causes immediate hemolysis inside the vessels.",
  "vs": "Rh antibodies are not naturally present; they form only after exposure, and they are IgG, which can cross the placenta.",
  "match": "\\bABO\\b"
 },
 "Rh": {
  "label": "Rh",
  "full": "Rhesus (D) antigen",
  "why": "An Rh-negative mother carrying an Rh-positive fetus can make anti-D (IgG) that crosses the placenta and destroys fetal red cells (fetal erythroblastosis). Anti-D immunoglobulin given to the mother prevents it.",
  "vs": "ABO antibodies are present from early life and are mostly IgM, which does not cross the placenta well, so ABO hemolytic disease is usually mild.",
  "match": "\\bRh\\b|\\bRh-"
 },
 "MetHb": {
  "label": "MetHb",
  "full": "Methemoglobin",
  "why": "Hemoglobin whose iron has been oxidized from Fe²⁺ to Fe³⁺, so it cannot carry O₂ and shifts the curve left. Causes cyanosis with \"chocolate-brown\" blood.",
  "vs": "Carboxyhemoglobin (CO bound to Hb) also blocks O₂ transport but keeps the iron as Fe²⁺.",
  "match": "\\b[Mm]ethemoglobin"
 },
 "Drabkin": {
  "full": "Drabkin's solution",
  "why": "The reagent used in hemoglobinometry: ferricyanide oxidizes all Hb to methemoglobin, and cyanide (KCN) turns it into stable cyanmethemoglobin, whose color is read by a photometer.",
  "vs": "It is toxic because it contains cyanide. Newer methods use non-cyanide reagents.",
  "match": "\\bDrabkin|\\bKCN\\b"
 },
 "ESR": {
  "label": "ESR",
  "full": "Erythrocyte sedimentation rate",
  "why": "How many mm red cells settle in 1 hour in anticoagulated blood. A non-specific marker of inflammation: fibrinogen and globulins make cells stack (rouleaux) and sink faster.",
  "vs": "Hematocrit measures what fraction of a centrifuged column is cells; ESR measures how fast cells fall by gravity alone.",
  "match": "\\b[Ss]edimentation\\b"
 },
 "pH": {
  "label": "pH",
  "full": "Negative log of H⁺ activity (no unit)",
  "why": "Must stay within narrow limits so enzymes and proteins work. Below 7.35 is acidemia and above 7.45 is alkalemia.",
  "vs": "[H⁺] in nmol/L moves the opposite way: pH 7.40 equals 40 nmol/L H⁺, and each 0.01 fall in pH near 7.4 adds about 1 nmol/L."
 },
 "HCO3": {
  "label": "HCO₃⁻",
  "full": "Bicarbonate (HCO₃⁻)",
  "why": "The main buffer of extracellular fluid and the metabolic side of acid–base balance, controlled by the kidneys. Low in metabolic acidosis, high in metabolic alkalosis.",
  "vs": "PCO₂ is the respiratory side, controlled by the lungs."
 },
 "PaO2": {
  "label": "PaO₂",
  "full": "Arterial partial pressure of O₂",
  "why": "The pressure of O₂ dissolved in arterial plasma; it drives O₂ onto hemoglobin. A low value is hypoxemia.",
  "vs": "SaO₂ is the % of Hb carrying O₂. Because the dissociation curve is S-shaped, SaO₂ stays above ~90% until PaO₂ falls below ~60 mmHg.",
  "match": "\\bPO2\\b|\\bPaO2\\b"
 },
 "PvO2": {
  "label": "PvO₂",
  "full": "Venous partial pressure of O₂",
  "why": "What is left after the tissues have taken their O₂ (≈ 40 mmHg, Hb ~75% saturated). A low value means high extraction or poor delivery.",
  "vs": "PaO₂ (≈ 90–100) is what enters the tissues; the difference is what they used."
 },
 "PaCO2": {
  "label": "PaCO₂",
  "full": "Arterial partial pressure of CO₂",
  "why": "Reflects ventilation: high means hypoventilation (respiratory acidosis), low means hyperventilation (respiratory alkalosis).",
  "vs": "Venous PCO₂ is a few mmHg higher (≈ 45) because the tissues add CO₂.",
  "match": "\\bPCO2\\b|\\bPaCO2\\b"
 },
 "SaO2": {
  "label": "SaO₂",
  "full": "Arterial O₂ saturation of hemoglobin",
  "why": "The % of Hb binding sites carrying O₂. Measured without a needle by pulse oximetry (SpO₂).",
  "vs": "PaO₂ is the dissolved O₂ pressure; SaO₂ is how full the hemoglobin is. O₂ content depends mainly on SaO₂ × Hb."
 },
 "AG": {
  "label": "AG",
  "full": "Anion gap",
  "why": "Na⁺ − (Cl⁻ + HCO₃⁻): the anions not measured routinely, mostly albumin. It sorts metabolic acidosis into high-gap (lactate, ketones, toxins, kidney failure) and normal-gap (loss of bicarbonate, e.g. diarrhea).",
  "vs": "It is calculated, not measured. A low albumin lowers the normal gap."
 },
 "Osm": {
  "full": "Plasma osmolarity",
  "why": "Concentration of all dissolved particles, mostly Na⁺ with its anions, glucose and urea. It decides how water moves between cells and the ECF; ADH and thirst keep it tight.",
  "vs": "Osmolality is per kg of water (mOsm/kg) and in plasma is almost the same number. Tonicity counts only particles that cannot cross membranes, so urea does not count."
 },
 "Na": {
  "label": "Na⁺",
  "full": "Sodium (Na⁺)",
  "why": "The main extracellular cation. It sets ECF osmolarity and, with water, ECF volume. Hyponatremia is usually a water excess, not a sodium loss.",
  "vs": "K⁺ is the main intracellular cation."
 },
 "K": {
  "label": "K⁺",
  "full": "Potassium (K⁺)",
  "why": "The main intracellular cation; it sets the resting membrane potential. Both high and low K⁺ cause dangerous arrhythmias.",
  "vs": "Na⁺ is the main extracellular cation. Only ~2% of body K⁺ is in the ECF, so a small shift changes the plasma level a lot."
 },
 "Cl": {
  "label": "Cl⁻",
  "full": "Chloride (Cl⁻)",
  "why": "The main extracellular anion; it follows Na⁺. In acid–base disorders it moves opposite to HCO₃⁻ (hyperchloremic acidosis).",
  "vs": "HCO₃⁻ is the other major ECF anion and the main buffer."
 },
 "Ca": {
  "full": "Calcium: total vs ionized",
  "why": "Ionized Ca²⁺ is the active form (nerves, muscle contraction, clotting). About half of total calcium is bound, mostly to albumin.",
  "vs": "Low albumin lowers total calcium but not ionized calcium. Alkalosis increases binding and lowers ionized Ca²⁺ (tingling, tetany)."
 },
 "Albumin": {
  "full": "Albumin",
  "why": "The main plasma protein, made by the liver. It provides most of plasma oncotic pressure and carries hormones, drugs, Ca²⁺ and bilirubin. Low in liver disease, nephrotic syndrome and malnutrition, giving edema.",
  "vs": "Total protein = albumin + globulins (including antibodies)."
 },
 "Glucose": {
  "full": "Fasting plasma glucose",
  "why": "Screening and diagnosis of diabetes: fasting ≥ 126 mg/dL (7.0 mmol/L) on two occasions is diabetes.",
  "vs": "A random or post-meal glucose is higher; HbA1c reflects the average over ~3 months."
 },
 "CO": {
  "label": "CO",
  "full": "Cardiac output",
  "why": "Blood pumped by one ventricle per minute (≈ 5 L/min at rest). It sets O₂ delivery and, with TPR, determines arterial pressure.",
  "vs": "SV is per beat (CO = SV × HR). Cardiac index is CO ÷ body surface area (≈ 3 L/min/m²). In steady state CO equals venous return.",
  "match": "\\bCO\\b(?!2)"
 },
 "SV": {
  "label": "SV",
  "full": "Stroke volume",
  "why": "Blood ejected by one ventricle per beat (≈ 70 ml). It depends on preload, afterload and contractility.",
  "vs": "CO is per minute. EF is SV as a fraction of EDV, so a dilated heart can keep a normal SV with a low EF."
 },
 "HR": {
  "label": "HR",
  "full": "Heart rate",
  "why": "Beats per minute; the fastest way the body changes CO. Very high rates shorten diastole and filling, so SV falls.",
  "vs": "Pulse rate is counted at an artery and can be lower than HR if some beats are too weak to reach it (pulse deficit)."
 },
 "EDV": {
  "label": "EDV",
  "full": "End-diastolic volume",
  "why": "Ventricular volume at the end of filling (≈ 110–120 ml). It is the volume measure of preload: more stretch, stronger contraction (Frank–Starling).",
  "vs": "ESV (≈ 40–50 ml) is what stays after ejection. SV = EDV − ESV."
 },
 "ESV": {
  "label": "ESV",
  "full": "End-systolic volume",
  "why": "Volume left in the ventricle after ejection (≈ 40–50 ml). It rises when contractility falls or afterload rises.",
  "vs": "EDV is the volume before ejection."
 },
 "EF": {
  "label": "EF",
  "full": "Ejection fraction",
  "why": "The % of EDV ejected each beat (≈ 60%). The main index of systolic function: below 40% is heart failure with reduced EF (HFrEF).",
  "vs": "SV is an absolute volume. EF is a ratio, so it can be low even when SV is normal in a dilated ventricle."
 },
 "MAP": {
  "label": "MAP",
  "full": "Mean arterial pressure",
  "why": "Average arterial pressure over the cardiac cycle (≈ 93–100 mmHg). It is the pressure that perfuses organs; autoregulation keeps flow steady between ≈ 70 and 175 mmHg.",
  "vs": "It is not the simple average of systolic and diastolic, because diastole lasts longer than systole.",
  "match": "\\bMAP\\b|mean arterial pressure"
 },
 "SP": {
  "label": "SP",
  "full": "Systolic pressure",
  "why": "The peak arterial pressure during ejection. It rises with a larger SV and with stiffer arteries (aging).",
  "vs": "Diastolic pressure is the lowest pressure, at the end of diastole; it reflects TPR and how fast blood runs off."
 },
 "DP": {
  "label": "DP",
  "full": "Diastolic pressure",
  "why": "The lowest arterial pressure, at the end of diastole. It reflects peripheral resistance and the elastic recoil of the aorta.",
  "vs": "Systolic pressure is the peak. Pulse pressure is the difference between them."
 },
 "PP": {
  "label": "PP",
  "full": "Pulse pressure",
  "why": "Systolic − diastolic (≈ 40 mmHg). It widens with a larger SV or stiffer arteries (aging, aortic regurgitation) and narrows in shock or aortic stenosis.",
  "vs": "MAP is the average level; pulse pressure is the size of the swing around it."
 },
 "TPR": {
  "label": "TPR",
  "full": "Total peripheral resistance (systemic vascular resistance, SVR)",
  "why": "Resistance of the whole systemic circulation, set mainly by the arterioles. With CO it determines MAP. Sympathetic tone raises it; sepsis lowers it.",
  "vs": "Pulmonary vascular resistance is only about 1/8 of TPR, which is why the right heart needs much less pressure."
 },
 "RAP": {
  "label": "RAP / CVP",
  "full": "Right atrial pressure (central venous pressure, CVP)",
  "why": "Normally ≈ 0 mmHg. It reflects right-side filling: it rises in right heart failure or fluid overload and falls with blood loss.",
  "vs": "Left-side filling is reflected by left atrial pressure, estimated with the pulmonary wedge pressure.",
  "match": "\\bCVP\\b|central venous pressure"
 },
 "BP": {
  "label": "BP",
  "full": "Blood pressure",
  "why": "Force of blood per unit area of vessel wall, usually arterial pressure written systolic/diastolic. It equals CO × TPR.",
  "vs": "Pressure is not flow: flow depends on the pressure difference and resistance (F = ΔP / R).",
  "match": "\\bBP\\b"
 },
 "ABPM": {
  "label": "ABPM",
  "full": "Ambulatory blood pressure monitoring",
  "why": "An automatic cuff measures BP every 15–30 min over 24 hours. It detects white-coat hypertension, masked hypertension and the normal night-time dip.",
  "vs": "A single office reading is one moment; ABPM shows the whole day.",
  "match": "\\bABPM\\b"
 },
 "Korotkoff": {
  "full": "Korotkoff sounds",
  "why": "Sounds heard below the cuff in auscultatory BP measurement, caused by turbulent flow through the partly compressed artery. The first sound marks systolic pressure; the disappearance of sound (phase V) marks diastolic pressure.",
  "vs": "The oscillometric method uses no sounds: a device reads pressure waves in the cuff and calculates the values.",
  "match": "\\bKorotkoff\\b|\\b[Aa]uscultatory\\b"
 },
 "ECG": {
  "label": "ECG",
  "full": "Electrocardiogram",
  "why": "Records the electrical activity of the heart from the skin; it gives heart rate and rhythm and shows ischemia and conduction blocks.",
  "vs": "It shows electrical activity, not pumping: a normal ECG does not prove a normal cardiac output.",
  "match": "\\bECG\\b"
 },
 "Afterload": {
  "full": "Afterload",
  "why": "The load the ventricle must overcome to eject: mainly aortic pressure (and TPR), plus wall tension by Laplace. A higher afterload lowers SV and raises O₂ use.",
  "vs": "Preload is the stretch before contraction (EDV, filling pressure).",
  "match": "\\b[Aa]fterload\\b"
 },
 "Re": {
  "label": "Re",
  "full": "Reynolds' number",
  "why": "A unitless number that predicts turbulence. Turbulence causes murmurs and bruits; Re rises with high velocity (stenosis, high output) and low viscosity (anemia).",
  "vs": "Laminar flow is silent and wastes less energy than turbulent flow."
 },
 "Compliance": {
  "full": "Vascular compliance",
  "why": "How much volume a vessel takes up per mmHg rise in pressure (ΔV/ΔP). Veins are very compliant and store about 64% of the blood volume.",
  "vs": "Distensibility is the fractional change (ΔV/ΔP divided by the original volume). Compliance = distensibility × volume."
 },
 "Distensibility": {
  "full": "Vascular distensibility",
  "why": "The fractional increase in volume per mmHg. Veins are ~8× more distensible than arteries.",
  "vs": "Compliance is the absolute volume change per mmHg, so a large vessel can be very compliant even with average distensibility."
 },
 "Poiseuille": {
  "full": "Poiseuille's law",
  "why": "Shows why radius dominates flow (r⁴): small changes in arteriolar radius regulate organ blood flow.",
  "vs": "Ohm's law (F = ΔP/R) is the general relation; Poiseuille's law tells you what R depends on (viscosity, length, radius)."
 },
 "Ohm": {
  "full": "Ohm's law of the circulation",
  "why": "Flow depends on the pressure difference and the resistance, not on the absolute pressure.",
  "vs": "Poiseuille's law explains what the resistance itself depends on."
 },
 "Velocity": {
  "full": "Velocity of blood flow",
  "why": "How fast blood moves (cm/s). It is lowest in the capillaries, which have the largest total cross-section, giving time for exchange.",
  "vs": "Flow (ml/min) is volume per time and is the same in every part of the circuit in series; velocity changes with the total cross-sectional area."
 },
 "Laplace": {
  "full": "Law of Laplace",
  "why": "Wall tension rises with pressure and radius. A dilated heart must develop more tension (and use more O₂) for the same pressure; a thicker wall shares the load.",
  "vs": "Pressure is force per area inside the chamber; tension is force per unit length of the wall."
 },
 "SW": {
  "label": "SW",
  "full": "Stroke work",
  "why": "Work done by the ventricle in one beat (≈ SV × aortic pressure, the area of the pressure–volume loop).",
  "vs": "Minute work is stroke work × HR. Pressure work costs the heart more O₂ than volume work."
 },
 "MinuteWork": {
  "full": "Minute work",
  "why": "Total work the ventricle does per minute (stroke work × HR ≈ CO × aortic pressure).",
  "vs": "Stroke work is per beat. The right ventricle does about 1/6 of the left ventricle's work because its pressure is about 6× lower."
 },
 "O2cap": {
  "full": "O₂ bound to hemoglobin (O₂ capacity)",
  "why": "1.34 ml O₂ per gram of fully saturated Hb, so Hb 15 g/dL carries ≈ 20 ml O₂ per 100 ml blood. This is why anemia lowers O₂ delivery even with a normal PaO₂.",
  "vs": "O₂ content also depends on saturation (SaO₂) and adds a small dissolved part (0.003 ml per mmHg PO₂ per 100 ml)."
 },
 "Autoreg": {
  "full": "Autoregulation of blood flow",
  "why": "Organs keep their blood flow nearly constant when mean arterial pressure changes between ≈ 70 and 175 mmHg, mainly by changing arteriolar radius.",
  "vs": "Outside this range flow follows pressure passively, so organs are at risk in severe hypotension or hypertension."
 },
 "LV": {
  "label": "LV",
  "full": "Left ventricle",
  "why": "Generates the systemic pressure (≈ 120 systolic). The end-diastolic pressure (5–7 mmHg) is its filling pressure and rises in heart failure or a stiff ventricle.",
  "vs": "The right ventricle pumps the same output at about 1/5 of the pressure (≈ 25 mmHg) because pulmonary resistance is low."
 },
 "RV": {
  "label": "RV",
  "full": "Right ventricle",
  "why": "Pumps into the low-resistance pulmonary circuit, so systolic pressure is only ≈ 25 mmHg and its wall is thin.",
  "vs": "The left ventricle pumps the same volume at ≈ 120 mmHg."
 },
 "LA": {
  "label": "LA",
  "full": "Left atrium / pulmonary veins",
  "why": "Mean pressure ≈ 2 mmHg (1–5). Estimated at the bedside by the pulmonary wedge pressure. It rises in left heart failure and mitral stenosis, causing pulmonary congestion.",
  "vs": "The right atrium (CVP ≈ 0) reflects the right side."
 },
 "RA": {
  "label": "RA",
  "full": "Right atrium (central venous pressure)",
  "why": "Mean pressure ≈ 0 mmHg; venous return depends on the gradient from the veins to here. It rises in right heart failure (20–30 mmHg when severe).",
  "vs": "Left atrial pressure (≈ 2 mmHg) reflects the left side."
 },
 "Aorta": {
  "full": "Aorta and large arteries",
  "why": "Pressure swings between ≈ 80 and 120 mmHg; its elastic recoil (Windkessel effect) keeps pressure and flow going during diastole.",
  "vs": "The pulmonary artery has the same flow at much lower pressure (≈ 25/8)."
 },
 "Arterioles": {
  "full": "Arterioles",
  "why": "The resistance vessels: the largest pressure drop in the circulation (from ≈ 50 to ≈ 30 mmHg in Costanzo's figures). By changing radius they control flow to each organ and TPR.",
  "vs": "Capillaries do the exchange; arterioles decide how much blood reaches them."
 },
 "Capillaries": {
  "full": "Systemic capillaries",
  "why": "Pressure falls from ≈ 35 at the arteriolar end to ≈ 10 at the venous end. That pressure pushes fluid out at the start and lets it return at the end (Starling forces).",
  "vs": "Glomerular capillaries are an exception, with ≈ 60 mmHg along their length to drive filtration."
 },
 "Glomerular": {
  "full": "Glomerular capillaries",
  "why": "Unusually high pressure (≈ 60 mmHg) because they sit between two arterioles; this drives glomerular filtration.",
  "vs": "Ordinary systemic capillaries are at ≈ 35 → 10 mmHg; pulmonary capillaries at ≈ 7."
 },
 "SmallVeins": {
  "full": "Small peripheral veins",
  "why": "Pressure just a few mmHg (≈ 4–6) above the right atrium: enough gradient to return blood to the heart when lying down.",
  "vs": "Standing adds hydrostatic pressure: veins in the feet can reach ≈ 90 mmHg."
 },
 "VenaeCavae": {
  "full": "Venae cavae",
  "why": "Pressure falls to ≈ 0 mmHg where they enter the right atrium (Costanzo lists ≈ 4 mmHg).",
  "vs": "They carry the full venous return at very low pressure; small veins upstream are a few mmHg higher."
 },
 "PA": {
  "label": "PA",
  "full": "Pulmonary artery",
  "why": "Pressure ≈ 25/8, mean ≈ 15 mmHg. A mean above about 20 mmHg defines pulmonary hypertension.",
  "vs": "The aorta carries the same flow at ≈ 120/80 because systemic resistance is much higher."
 },
 "PulmCap": {
  "full": "Pulmonary capillaries",
  "why": "Mean pressure ≈ 7 mmHg, well below plasma oncotic pressure (≈ 28), so fluid does not flood the alveoli. Edema starts when it rises above roughly that level.",
  "vs": "Systemic capillaries run at ≈ 17 mmHg mean; glomerular at ≈ 60."
 }
};
