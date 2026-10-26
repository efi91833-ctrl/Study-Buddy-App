/* physiology-tf.js — Physiology True/False bank (question data only; UI lives in index.html).
 * Source: Physiology_Complete_Questions_True_False.docx (photographed professor answer keys).
 * Each stem has statements A..; answer true/false, or null where the key is not legible.
 * Questions 95+ come from 1st_block_past_papers.pdf (photos of the professor's screen; answer = "Správná odpověď").
 * topic = weak-area group (Blood, Cardiovascular, DR ABC), subtopic = finer weak-area tracking.
 * Only questions on blood pressure, heart physiology, blood content, blood types, hemostasis and DR ABC are kept. */
window.PHYSIO_TF = {
 "Blood": [
  {
   "num": 1,
   "ref": "ID 4682 / 4662",
   "topic": "Blood",
   "subtopic": "Blood counts & lab methods",
   "stem": "If a sample of native blood is diluted 200 times, what can we expect?",
   "statements": [
    {
     "l": "A",
     "text": "Hematocrit decreases below 10%.",
     "answer": true,
     "why": "Diluting blood greatly reduces the red-cell volume fraction."
    },
    {
     "l": "B",
     "text": "Such a sample is typically prepared for white blood cell counting.",
     "answer": false,
     "why": "A 200-fold dilution is generally associated with RBC rather than WBC counting."
    },
    {
     "l": "C",
     "text": "The diluted sample has 200 times fewer erythrocytes per unit volume.",
     "answer": true,
     "why": "Each volume contains one two-hundredth of the original RBC concentration."
    },
    {
     "l": "D",
     "text": "Such a sample does not coagulate.",
     "answer": true,
     "why": "The counting diluent generally prevents clot formation; water alone would not guarantee this."
    },
    {
     "l": "E",
     "text": "Average distance between erythrocytes increases 200 times.",
     "answer": false,
     "why": "Spacing is a length, and grows approximately with the cube root of dilution, not 200-fold."
    }
   ],
   "note": "D assumes the anticoagulant counting diluent used in the laboratory, not arbitrary dilution with water."
  },
  {
   "num": 2,
   "ref": "ID 4687",
   "topic": "Blood",
   "subtopic": "Blood counts & lab methods",
   "stem": "A sample has 3,000,000 erythrocytes per mm³. How many erythrocytes are in 0.1 mm³?",
   "statements": [
    {
     "l": "A",
     "text": "Zero",
     "answer": false,
     "why": "There are many RBCs in one tenth of a cubic millimetre."
    },
    {
     "l": "B",
     "text": "3,000",
     "answer": true,
     "why": "The photographed key marks B, but mathematically 3,000,000 × 0.1 = 300,000; the visible question may say 0.001 mm³ rather than 0.1 mm³."
    },
    {
     "l": "C",
     "text": "3,000,000,000",
     "answer": false,
     "why": "Far too high for the specified volume."
    },
    {
     "l": "D",
     "text": "1,000 times bigger",
     "answer": false,
     "why": "Smaller volume yields fewer cells, not more."
    },
    {
     "l": "E",
     "text": "The same",
     "answer": false,
     "why": "Count scales with sample volume."
    },
    {
     "l": "F",
     "text": "10 times smaller",
     "answer": false,
     "why": "For 0.1 mm³ the answer is 10 times smaller (300,000), contradicting the pictured key."
    }
   ],
   "note": "The volume and answer key conflict as transcribed from the photograph. Verify whether the prompt says 0.001 mm³; do not use as scored question until checked."
  },
  {
   "num": 3,
   "ref": "ID 4683 / 4463",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "To calculate MCHC (mean corpuscular hemoglobin concentration), which data are useful?",
   "statements": [
    {
     "l": "A",
     "text": "Hemoglobin concentration in blood",
     "answer": true,
     "why": "MCHC can be calculated as Hb divided by hematocrit."
    },
    {
     "l": "B",
     "text": "Number of erythrocytes",
     "answer": false,
     "why": "RBC count alone does not give hemoglobin per erythrocyte volume."
    },
    {
     "l": "C",
     "text": "Hematocrit value",
     "answer": true,
     "why": "Hematocrit supplies the fraction of blood occupied by red cells."
    },
    {
     "l": "D",
     "text": "Quick test time",
     "answer": false,
     "why": "A clotting test does not enter the calculation."
    },
    {
     "l": "E",
     "text": "MCV and MCH",
     "answer": true,
     "why": "MCHC also equals MCH divided by MCV, with consistent units."
    }
   ]
  },
  {
   "num": 10,
   "ref": "ID 702",
   "topic": "Blood",
   "subtopic": "Oxygen transport",
   "stem": "Hemoglobin saturation in venous blood could be:",
   "statements": [
    {
     "l": "A",
     "text": "100%",
     "answer": false,
     "why": "Complete saturation is not the ordinary venous state in circulation."
    },
    {
     "l": "B",
     "text": "95%",
     "answer": true,
     "why": "It may be very high in blood with little oxygen extraction or abnormal circumstances."
    },
    {
     "l": "C",
     "text": "85%",
     "answer": true,
     "why": "High venous saturation is possible."
    },
    {
     "l": "D",
     "text": "75%",
     "answer": true,
     "why": "Mixed venous blood is commonly around 75% at rest."
    },
    {
     "l": "E",
     "text": "Less than 50%",
     "answer": true,
     "why": "Severe oxygen extraction or low delivery can lower venous saturation markedly."
    },
    {
     "l": "F",
     "text": "0%",
     "answer": false,
     "why": "Essentially no saturation is not expected for circulating venous blood under usual conditions."
    }
   ]
  },
  {
   "num": 11,
   "ref": "ID 1549",
   "topic": "Blood",
   "subtopic": "Coagulation tests",
   "stem": "Which reagent combination permits coagulation measurement to proceed in the proper order?",
   "statements": [
    {
     "l": "A",
     "text": "Partial thromboplastin, decalcified plasma, calcium",
     "answer": true,
     "why": "This combination supplies test reagent, test plasma and calcium."
    },
    {
     "l": "B",
     "text": "Calcium, decalcified plasma, thromboplastin",
     "answer": false,
     "why": "The pictured key excludes this option, possibly owing to exact timing/reagent differences."
    },
    {
     "l": "C",
     "text": "Decalcified plasma, thromboplastin, calcium",
     "answer": true,
     "why": "Components permit clotting after calcium is restored."
    },
    {
     "l": "D",
     "text": "Thromboplastin, decalcified plasma, calcium",
     "answer": true,
     "why": "Components permit clotting with appropriate reagents."
    },
    {
     "l": "E",
     "text": "Thromboplastin, decalcified plasma, EDTA",
     "answer": false,
     "why": "EDTA binds calcium and prevents coagulation."
    },
    {
     "l": "F",
     "text": "Decalcified plasma, calcium",
     "answer": false,
     "why": "A source of activation is missing for the standardized test."
    }
   ]
  },
  {
   "num": 12,
   "ref": "ID 1551",
   "topic": "Blood",
   "subtopic": "Coagulation tests",
   "stem": "Which are typical reasons for testing coagulation times?",
   "statements": [
    {
     "l": "A",
     "text": "Planned blood transfusion",
     "answer": false,
     "why": "A transfusion alone does not always call for PT/aPTT screening."
    },
    {
     "l": "B",
     "text": "Unplanned (emergency) blood transfusion",
     "answer": false,
     "why": "Emergency transfusion must not be delayed for routine coagulation screening."
    },
    {
     "l": "C",
     "text": "Planned surgical procedure",
     "answer": true,
     "why": "Testing may assess bleeding risk when clinically indicated before surgery."
    },
    {
     "l": "D",
     "text": "Anticoagulation therapy",
     "answer": true,
     "why": "PT/INR and aPTT can be used to monitor particular anticoagulants."
    },
    {
     "l": "E",
     "text": "Routine blood testing",
     "answer": false,
     "why": "Not part of every routine blood sample."
    }
   ]
  },
  {
   "num": 13,
   "ref": "ID 1593",
   "topic": "Blood",
   "subtopic": "Anticoagulation",
   "stem": "Which anticoagulation procedure can be reversed most easily?",
   "statements": [
    {
     "l": "A",
     "text": "Heparinisation",
     "answer": false,
     "why": "Heparin may be neutralized with protamine, but requires a separate agent."
    },
    {
     "l": "B",
     "text": "Decalcification",
     "answer": true,
     "why": "Re-add calcium to reverse citrate/oxalate-mediated calcium removal in vitro."
    },
    {
     "l": "C",
     "text": "Anti-vitamin K treatment",
     "answer": false,
     "why": "Warfarin reversal requires vitamin K or clotting factors."
    },
    {
     "l": "D",
     "text": "Defibrination",
     "answer": false,
     "why": "Removing fibrinogen cannot be instantly undone."
    },
    {
     "l": "E",
     "text": "Dilution",
     "answer": false,
     "why": "Dilution cannot readily be reversed."
    }
   ]
  },
  {
   "num": 14,
   "ref": "ID 1821",
   "topic": "Blood",
   "subtopic": "Coagulation",
   "stem": "Fibrinogen:",
   "statements": [
    {
     "l": "A",
     "text": "Is a protein found only in plasma.",
     "answer": false,
     "why": "Fibrinogen occurs predominantly in plasma, but “only” is too absolute."
    },
    {
     "l": "B",
     "text": "Is converted into fibrin monomers by thrombin.",
     "answer": true,
     "why": "Thrombin cleaves fibrinopeptides, enabling fibrin formation."
    },
    {
     "l": "C",
     "text": "Is functionally equal to fibrin.",
     "answer": false,
     "why": "Soluble fibrinogen and insoluble fibrin have different roles."
    },
    {
     "l": "D",
     "text": "Is the most abundant clotting factor in blood.",
     "answer": true,
     "why": "It is present at high concentration relative to other coagulation proteins."
    },
    {
     "l": "E",
     "text": "Its concentration in blood could be 4 g/L.",
     "answer": true,
     "why": "Around 2–4 g/L is a common reference interval."
    }
   ]
  },
  {
   "num": 15,
   "ref": "ID 1832 / 1617",
   "topic": "Blood",
   "subtopic": "Blood groups & Rh",
   "stem": "When is the lowest risk of fetal erythroblastosis due to Rh incompatibility between fetus and mother?",
   "statements": [
    {
     "l": "A",
     "text": "During the first pregnancy",
     "answer": false,
     "why": "The first pregnancy is often lower risk before sensitization, but the source does not designate it absolutely lowest."
    },
    {
     "l": "B",
     "text": "During the second pregnancy",
     "answer": false,
     "why": "Risk generally rises after maternal sensitization."
    },
    {
     "l": "C",
     "text": "If the mother is Rh positive",
     "answer": true,
     "why": "Rh-positive mothers do not develop classic Rh-D incompatibility from an Rh-positive fetus."
    },
    {
     "l": "D",
     "text": "If the mother lacks anti-D antibodies",
     "answer": true,
     "why": "Without maternal anti-D, anti-D hemolysis does not occur."
    }
   ],
   "note": "First pregnancies are usually less risky, so omission of A from the source key is nuanced or potentially disputed."
  },
  {
   "num": 16,
   "ref": "ID 1962",
   "topic": "Blood",
   "subtopic": "Coagulation tests",
   "stem": "Which is the least common reason for performing coagulation tests (aPTT, INR)?",
   "statements": [
    {
     "l": "A",
     "text": "Diagnosing hereditary hemophilia",
     "answer": true,
     "why": "Hereditary hemophilia is much rarer than the other common clinical scenarios."
    },
    {
     "l": "B",
     "text": "Planned surgery",
     "answer": false,
     "why": "Coagulation assessment may be ordered for selected surgical patients."
    },
    {
     "l": "C",
     "text": "Planned mini-surgery",
     "answer": false,
     "why": "May prompt targeted checks depending on bleeding risk."
    },
    {
     "l": "D",
     "text": "Anticoagulation therapy",
     "answer": false,
     "why": "Anticoagulant monitoring is a frequent indication."
    },
    {
     "l": "E",
     "text": "Thrombosis",
     "answer": false,
     "why": "A thrombotic event may lead to coagulation workup."
    }
   ]
  },
  {
   "num": 17,
   "ref": "ID 4519",
   "topic": "Blood",
   "subtopic": "Blood groups & Rh",
   "stem": "Generally the most serious complications of transfusion result from ABO incompatibility. Why?",
   "statements": [
    {
     "l": "A",
     "text": "Since it is the most common blood group system.",
     "answer": false,
     "why": "How commonly a system is named does not explain severity."
    },
    {
     "l": "B",
     "text": "Because of specific, genetically determined antibodies.",
     "answer": false,
     "why": "ABO antibodies develop in response to environmental antigens, not simply direct genetic predetermination of antibody production."
    },
    {
     "l": "C",
     "text": "Due to physiological immunization prior to transfusion.",
     "answer": true,
     "why": "Naturally occurring anti-A or anti-B may already exist before any transfusion."
    },
    {
     "l": "D",
     "text": "Because ABO incompatibility is more likely to occur than other incompatibilities.",
     "answer": false,
     "why": "Frequency of mismatch is not the mechanism of severity."
    },
    {
     "l": "E",
     "text": "Because the ABO system was discovered first.",
     "answer": false,
     "why": "Discovery history cannot explain reactions."
    }
   ]
  },
  {
   "num": 32,
   "ref": "ID 4500",
   "topic": "Blood",
   "subtopic": "Oxygen transport",
   "stem": "With respect to O2 and CO2 transport:",
   "statements": [
    {
     "l": "A",
     "text": "The slopes of the O2 and CO2 saturation curves are mostly similar.",
     "answer": false,
     "why": "The two dissociation curves have different shapes and physiology."
    },
    {
     "l": "B",
     "text": "Equal amounts of total O2 and total CO2 are carried in 100 mL blood.",
     "answer": false,
     "why": "Blood stores far more total CO2 than O2 in most conditions."
    },
    {
     "l": "C",
     "text": "The presence of O2 lowers CO2 content in the blood.",
     "answer": true,
     "why": "Haldane effect: oxygenated hemoglobin carries less CO2/H+."
    },
    {
     "l": "D",
     "text": "Most O2 is transported by red blood cells.",
     "answer": true,
     "why": "Almost all blood O2 is Hb-bound inside RBCs."
    },
    {
     "l": "E",
     "text": "Equal amounts of O2 and CO2 could be delivered/extracted by 100 mL of blood.",
     "answer": true,
     "why": "The quantities exchanged can be comparable under particular respiratory quotients, not necessarily exactly equal."
    }
   ]
  },
  {
   "num": 33,
   "ref": "ID 4499",
   "topic": "Blood",
   "subtopic": "Oxygen transport",
   "stem": "Which range of hemoglobin O2 saturation from systemic venous to systemic arterial blood represents normal resting conditions?",
   "statements": [
    {
     "l": "A",
     "text": "25 to 75%",
     "answer": false,
     "why": "25% is far below typical resting mixed venous saturation."
    },
    {
     "l": "B",
     "text": "40 to 75%",
     "answer": false,
     "why": "Venous saturation is usually higher at rest."
    },
    {
     "l": "C",
     "text": "40 to 95%",
     "answer": false,
     "why": "40% is low for normal resting venous blood."
    },
    {
     "l": "D",
     "text": "60 to 95%",
     "answer": false,
     "why": "60% is below usual resting mixed venous value."
    },
    {
     "l": "E",
     "text": "75 to 98%",
     "answer": true,
     "why": "Venous saturation ~75% and arterial ~97–99% is typical."
    }
   ]
  },
  {
   "num": 34,
   "ref": "ID 4474",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "Regarding hemoglobin in the blood:",
   "statements": [
    {
     "l": "A",
     "text": "Oxygen-carrying capacity of blood depends on Hb concentration.",
     "answer": true,
     "why": "Most oxygen travels bound to Hb; Hb concentration largely determines carrying capacity."
    },
    {
     "l": "B",
     "text": "Less than 90% of hemoglobin is in erythrocytes.",
     "answer": false,
     "why": "Nearly all circulating hemoglobin is normally within RBCs."
    },
    {
     "l": "C",
     "text": "A decrease in Hb concentration necessarily corresponds to a decrease of MCHC.",
     "answer": false,
     "why": "Hemoglobin can fall due to fewer RBCs while MCHC remains normal."
    },
    {
     "l": "D",
     "text": "MCHC linearly correlates with Hb blood concentration.",
     "answer": false,
     "why": "Total Hb concentration also depends on hematocrit, not just MCHC."
    },
    {
     "l": "E",
     "text": "10 g/L Hb is not compatible with a living individual.",
     "answer": true,
     "why": "An Hb of 10 g/L represents profoundly critical anemia and is generally incompatible with sustained survival."
    }
   ]
  },
  {
   "num": 37,
   "ref": "ID 1823",
   "topic": "Blood",
   "subtopic": "Coagulation",
   "stem": "Hemophilia is:",
   "statements": [
    {
     "l": "A",
     "text": "Platelet deficiency or malfunction.",
     "answer": false,
     "why": "Platelet disorders cause primary hemostatic problems, not classical hemophilia."
    },
    {
     "l": "B",
     "text": "Disposition to increased bleeding.",
     "answer": true,
     "why": "Factor deficiency predisposes to bleeding."
    },
    {
     "l": "C",
     "text": "Caused typically by fibrinogen deficiency.",
     "answer": false,
     "why": "Fibrinogen deficiency is a different coagulopathy."
    },
    {
     "l": "D",
     "text": "Caused by the absence of factor VIII.",
     "answer": true,
     "why": "Severe hemophilia A is factor VIII deficiency."
    },
    {
     "l": "E",
     "text": "Caused typically by liver problems.",
     "answer": true,
     "why": "Liver disease can cause acquired coagulopathy, but it is not typically called inherited hemophilia."
    },
    {
     "l": "F",
     "text": "Caused typically by anticoagulation therapy.",
     "answer": true,
     "why": "Drugs can cause acquired bleeding disorders, not classical hemophilia."
    }
   ],
   "note": "SOURCE KEY DISPUTED: screenshot marks E and F true, although modern terminology does not define liver disease or anticoagulant therapy as hemophilia."
  },
  {
   "num": 38,
   "ref": "ID 1820",
   "topic": "Blood",
   "subtopic": "Anticoagulation",
   "stem": "Which are important in vivo anticoagulation mechanisms?",
   "statements": [
    {
     "l": "A",
     "text": "Intact endothelium",
     "answer": true,
     "why": "Healthy endothelium releases antithrombotic signals."
    },
    {
     "l": "B",
     "text": "Vitamin K",
     "answer": false,
     "why": "Vitamin K supports synthesis of multiple clotting factors."
    },
    {
     "l": "C",
     "text": "Blood flow",
     "answer": true,
     "why": "Flow dilutes or removes activated coagulation factors."
    },
    {
     "l": "D",
     "text": "EDTA",
     "answer": false,
     "why": "EDTA is an external chelator used in collected samples."
    },
    {
     "l": "E",
     "text": "Endogenous plasma anticoagulants",
     "answer": true,
     "why": "Antithrombin and protein C/S pathways limit clot formation."
    },
    {
     "l": "F",
     "text": "Decalcification",
     "answer": false,
     "why": "Whole-body calcium removal is not a physiological anticoagulant strategy."
    }
   ]
  },
  {
   "num": 39,
   "ref": "ID 1601",
   "topic": "Blood",
   "subtopic": "Hematocrit",
   "stem": "A blood sample for hematocrit measurement, unlike one for sedimentation, should NOT be:",
   "statements": [
    {
     "l": "A",
     "text": "Diluted",
     "answer": true,
     "why": "Dilution changes the true red-cell volume fraction."
    },
    {
     "l": "B",
     "text": "Decalcified",
     "answer": false,
     "why": "Calcium chelation can be an anticoagulant, but it is not the issue asked here."
    },
    {
     "l": "C",
     "text": "Anticoagulated",
     "answer": false,
     "why": "Anticoagulants are routinely used to prevent a sample clotting."
    },
    {
     "l": "D",
     "text": "Hemolysed",
     "answer": true,
     "why": "Hemolysis destroys the packed red-cell column."
    },
    {
     "l": "E",
     "text": "Centrifuged",
     "answer": false,
     "why": "Centrifugation is precisely how spun hematocrit is determined."
    }
   ]
  },
  {
   "num": 40,
   "ref": "ID 1592",
   "topic": "Blood",
   "subtopic": "Anticoagulation",
   "stem": "Which anticoagulation procedures could easily be used in our laboratory classes?",
   "statements": [
    {
     "l": "A",
     "text": "Decalcification",
     "answer": true,
     "why": "Citrate or EDTA chelates calcium in vitro."
    },
    {
     "l": "B",
     "text": "Heparinisation",
     "answer": true,
     "why": "Heparin prevents activation of coagulation."
    },
    {
     "l": "C",
     "text": "Dilution",
     "answer": true,
     "why": "Strong dilution can make coagulation less likely in teaching experiments."
    },
    {
     "l": "D",
     "text": "Fast processing of the sample before it coagulates",
     "answer": true,
     "why": "Working before a clot forms allows a test to be completed, even though it is not a true anticoagulant."
    }
   ]
  },
  {
   "num": 42,
   "ref": "ID 1590",
   "topic": "Blood",
   "subtopic": "Anticoagulation",
   "stem": "Which of these substances CANNOT be used as an in vivo anticoagulant?",
   "statements": [
    {
     "l": "A",
     "text": "Aspirin",
     "answer": false,
     "why": "Aspirin reduces platelet aggregation in vivo."
    },
    {
     "l": "B",
     "text": "Oxalate",
     "answer": true,
     "why": "Oxalate binds calcium and is unsuitable as systemic anticoagulation."
    },
    {
     "l": "C",
     "text": "Heparin",
     "answer": false,
     "why": "Heparin is a standard in vivo anticoagulant."
    },
    {
     "l": "D",
     "text": "EDTA",
     "answer": true,
     "why": "EDTA chelates calcium and is not a systemic anticoagulant therapy."
    },
    {
     "l": "E",
     "text": "Warfarin",
     "answer": false,
     "why": "Warfarin is an oral vitamin K antagonist."
    }
   ]
  },
  {
   "num": 43,
   "ref": "ID 1578",
   "topic": "Blood",
   "subtopic": "Hematocrit",
   "stem": "During hematocrit estimation, red cells occupy 18 mm and plasma occupies 50 mm:",
   "statements": [
    {
     "l": "A",
     "text": "This represents hematocrit 36%.",
     "answer": false,
     "why": "Hematocrit = 18/(18+50), approximately 26.5%, not 36%."
    },
    {
     "l": "B",
     "text": "This sample most likely represents anemic blood.",
     "answer": true,
     "why": "A hematocrit of ~26% suggests anemia."
    },
    {
     "l": "C",
     "text": "The example is not within physiological limits.",
     "answer": true,
     "why": "The value is well below usual adult reference ranges."
    },
    {
     "l": "D",
     "text": "Height of the blood column before centrifugation was 6.8 cm.",
     "answer": true,
     "why": "18 + 50 = 68 mm = 6.8 cm."
    },
    {
     "l": "E",
     "text": "MCV is very probably decreased below the physiological value.",
     "answer": false,
     "why": "Hematocrit alone cannot establish MCV, or a specific microcytic pattern."
    }
   ]
  },
  {
   "num": 45,
   "ref": "ID 1591",
   "topic": "Blood",
   "subtopic": "Anticoagulation",
   "stem": "Heparin:",
   "statements": [
    {
     "l": "A",
     "text": "Belongs to endogenous anticoagulants.",
     "answer": true,
     "why": "Heparin-like substances occur naturally, including mast-cell heparin."
    },
    {
     "l": "B",
     "text": "Can be used in vitro.",
     "answer": true,
     "why": "Heparin tubes prevent clotting of collected blood."
    },
    {
     "l": "C",
     "text": "Can be administered therapeutically.",
     "answer": true,
     "why": "It is an injectable anticoagulant."
    },
    {
     "l": "D",
     "text": "Affects INR.",
     "answer": true,
     "why": "Heparin can sometimes alter PT/INR, although INR is not standard monitoring for heparin."
    },
    {
     "l": "E",
     "text": "Affects the intrinsic pathway.",
     "answer": true,
     "why": "Unfractionated heparin prolongs aPTT by inhibiting clotting factors via antithrombin."
    },
    {
     "l": "F",
     "text": "Therapy can be monitored by aPTT test.",
     "answer": true,
     "why": "aPTT is commonly used to monitor unfractionated heparin."
    }
   ]
  },
  {
   "num": 46,
   "ref": "ID 1834",
   "topic": "Blood",
   "subtopic": "Hematocrit",
   "stem": "Hematocrit:",
   "statements": [
    {
     "l": "A",
     "text": "Changes proportionally with age.",
     "answer": false,
     "why": "Hematocrit depends on numerous factors and is not directly proportional to age."
    },
    {
     "l": "B",
     "text": "Can be used for MCHC calculation (MCHC = mean corpuscular hemoglobin concentration).",
     "answer": true,
     "why": "Hb divided by hematocrit gives MCHC."
    },
    {
     "l": "C",
     "text": "Its estimation requires centrifugation and dilution.",
     "answer": false,
     "why": "Centrifugation is used for spun hematocrit, but dilution is not required."
    },
    {
     "l": "D",
     "text": "Informs us about the volume of erythrocytes in 1 mL of blood.",
     "answer": true,
     "why": "Hematocrit is the fraction of blood occupied by RBCs."
    },
    {
     "l": "E",
     "text": "Gives us the same information as MCV.",
     "answer": false,
     "why": "MCV measures average size of one RBC, not RBC fraction."
    },
    {
     "l": "F",
     "text": "Informs us about the volume of erythrocytes in 1 L of blood.",
     "answer": true,
     "why": "The RBC fraction scales to any blood volume, including a litre."
    }
   ]
  },
  {
   "num": 47,
   "ref": "ID 1604",
   "topic": "Blood",
   "subtopic": "Blood counts & lab methods",
   "stem": "How many erythrocytes are roughly in one drop (average size) of blood?",
   "statements": [
    {
     "l": "A",
     "text": "10⁶",
     "answer": false,
     "why": "Only around a million is too few."
    },
    {
     "l": "B",
     "text": "10⁷",
     "answer": false,
     "why": "A typical blood drop contains several hundred million RBCs."
    },
    {
     "l": "C",
     "text": "10⁸",
     "answer": true,
     "why": "A 50 µL drop × ~5 million RBC/µL ≈ 250 million, order 10⁸."
    },
    {
     "l": "D",
     "text": "10⁹",
     "answer": false,
     "why": "One billion exceeds the usual estimate for a standard drop."
    },
    {
     "l": "E",
     "text": "10¹⁰ or more",
     "answer": false,
     "why": "That is much too many for a drop."
    }
   ]
  },
  {
   "num": 48,
   "ref": "ID 1612",
   "topic": "Blood",
   "subtopic": "Coagulation",
   "stem": "Extrinsic coagulation pathway is:",
   "statements": [
    {
     "l": "A",
     "text": "Initiated by endothelial/tissue injury.",
     "answer": true,
     "why": "Tissue factor exposed after injury initiates coagulation."
    },
    {
     "l": "B",
     "text": "Usually tested by INR (Quick test).",
     "answer": true,
     "why": "PT/INR primarily assesses extrinsic and common pathways."
    },
    {
     "l": "C",
     "text": "Not influenced by anticoagulation.",
     "answer": false,
     "why": "Vitamin K antagonists change PT/INR."
    },
    {
     "l": "D",
     "text": "Tested during coumarin therapy.",
     "answer": true,
     "why": "Warfarin is monitored using PT/INR."
    },
    {
     "l": "E",
     "text": "Faster than the intrinsic pathway.",
     "answer": true,
     "why": "The tissue-factor pathway is a rapid initiator of coagulation."
    }
   ]
  },
  {
   "num": 49,
   "ref": "ID 1597",
   "topic": "Blood",
   "subtopic": "Blood counts & lab methods",
   "stem": "For which blood tests do two drops of blood provide sufficient quantity?",
   "statements": [
    {
     "l": "A",
     "text": "Cell counting",
     "answer": true,
     "why": "Capillary cell counts need little sample."
    },
    {
     "l": "B",
     "text": "Blood-group estimation",
     "answer": true,
     "why": "ABO typing may be done with small drops."
    },
    {
     "l": "C",
     "text": "Hemoglobinometry",
     "answer": true,
     "why": "Small photometric lab assays can use minimal volume."
    },
    {
     "l": "D",
     "text": "Sedimentation",
     "answer": false,
     "why": "ESR/sedimentation needs a larger column and more blood."
    },
    {
     "l": "E",
     "text": "Hematocrit",
     "answer": true,
     "why": "Microhematocrit capillary tubes need little blood."
    }
   ]
  },
  {
   "num": 50,
   "ref": "ID 1571",
   "topic": "Blood",
   "subtopic": "Oxygen transport",
   "stem": "In mixed venous blood (e.g., right atrium), individual hemoglobin molecules could be:",
   "statements": [
    {
     "l": "A",
     "text": "Combined with four O2 molecules",
     "answer": true,
     "why": "A fully saturated tetramer may still be present."
    },
    {
     "l": "B",
     "text": "Combined with three O2 molecules",
     "answer": true,
     "why": "Intermediate occupancy occurs in an Hb population."
    },
    {
     "l": "C",
     "text": "Combined with two O2 molecules",
     "answer": true,
     "why": "Two sites can be occupied."
    },
    {
     "l": "D",
     "text": "Combined with one O2 molecule",
     "answer": true,
     "why": "One site can be occupied."
    },
    {
     "l": "E",
     "text": "Combined with no O2 molecules",
     "answer": true,
     "why": "Completely deoxygenated tetramers can be present."
    }
   ]
  },
  {
   "num": 51,
   "ref": "ID 1553",
   "topic": "Blood",
   "subtopic": "Coagulation tests",
   "stem": "What does coagulation time significantly depend on in vitro?",
   "statements": [
    {
     "l": "A",
     "text": "Blood viscosity",
     "answer": false,
     "why": "Viscosity is not a major direct determinant of the measured enzyme cascade."
    },
    {
     "l": "B",
     "text": "Temperature",
     "answer": true,
     "why": "Temperature changes the kinetics of clotting enzymes."
    },
    {
     "l": "C",
     "text": "O2 saturation of hemoglobin",
     "answer": false,
     "why": "Hb oxygenation does not determine PT/aPTT clotting time."
    },
    {
     "l": "D",
     "text": "Surface structure of a test tube",
     "answer": true,
     "why": "Contact activation can depend on surface material."
    },
    {
     "l": "E",
     "text": "Quality (activity) of tissue thromboplastin",
     "answer": true,
     "why": "Reagent activity can alter clotting-test results."
    }
   ]
  },
  {
   "num": 52,
   "ref": "ID 1556",
   "topic": "Blood",
   "subtopic": "Blood groups & Rh",
   "stem": "In which mothers is there a risk of development of fetal erythroblastosis in her fetus?",
   "statements": [
    {
     "l": "A",
     "text": "In all Rh-negative mothers",
     "answer": true,
     "why": "Rh-negative mothers have potential to become sensitized if the fetus is Rh-positive, but not all such pregnancies cause disease."
    },
    {
     "l": "B",
     "text": "Just in Rh-negative mothers after first pregnancy",
     "answer": false,
     "why": "Sensitization may occur following transfusion or other exposure, not only after first pregnancy."
    },
    {
     "l": "C",
     "text": "In any Rh incompatibility between mother and fetus",
     "answer": false,
     "why": "Incompatibility alone does not guarantee disease; maternal antibodies must reach fetal RBCs."
    },
    {
     "l": "D",
     "text": "If the mother produces anti-D antibodies",
     "answer": true,
     "why": "Maternal IgG anti-D can cross placenta and destroy fetal erythrocytes."
    }
   ]
  },
  {
   "num": 54,
   "ref": "ID 1826",
   "topic": "Blood",
   "subtopic": "Blood groups & Rh",
   "stem": "An Rh-positive individual typically develops anti-D antibodies:",
   "statements": [
    {
     "l": "A",
     "text": "After transfusion of Rh-compatible blood",
     "answer": false,
     "why": "Rh-compatible transfusion will not provoke anti-D."
    },
    {
     "l": "B",
     "text": "Soon after birth",
     "answer": false,
     "why": "Routine postnatal production of anti-D occurs in Rh-negative sensitized people, not Rh-positive people."
    },
    {
     "l": "C",
     "text": "Before birth",
     "answer": false,
     "why": "A fetus does not routinely synthesize this antibody."
    },
    {
     "l": "D",
     "text": "Never",
     "answer": true,
     "why": "A person expressing D antigen is immunologically tolerant of the normal D antigen."
    },
    {
     "l": "E",
     "text": "When transfused with Rh-negative blood",
     "answer": false,
     "why": "Rh-negative donated cells lack the D antigen needed to trigger anti-D."
    },
    {
     "l": "F",
     "text": "During pregnancy",
     "answer": false,
     "why": "Normal Rh-positive pregnancies do not provoke anti-D."
    }
   ]
  },
  {
   "num": 66,
   "ref": "ID 1572",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "Hemoglobinometry itself provides information about:",
   "statements": [
    {
     "l": "A",
     "text": "Relative amount of hemoglobin subtypes in peripheral blood.",
     "answer": false,
     "why": "A basic total Hb test does not fractionate Hb subtypes."
    },
    {
     "l": "B",
     "text": "Amount of methemoglobin in whole blood circulation.",
     "answer": false,
     "why": "Specific methemoglobin testing is needed for the fraction of MetHb."
    },
    {
     "l": "C",
     "text": "Oxygen transporting capacity of blood.",
     "answer": true,
     "why": "More total functional Hb generally means more oxygen capacity."
    },
    {
     "l": "D",
     "text": "Concentration of hemoglobin in RBC.",
     "answer": false,
     "why": "MCHC requires hematocrit."
    },
    {
     "l": "E",
     "text": "Amount of hemoglobin in RBC.",
     "answer": false,
     "why": "MCH requires erythrocyte number."
    }
   ]
  },
  {
   "num": 68,
   "ref": "ID 1585",
   "topic": "Blood",
   "subtopic": "Blood counts & lab methods",
   "stem": "White blood cell (WBC) count:",
   "statements": [
    {
     "l": "A",
     "text": "Commonly increases during physical activity.",
     "answer": true,
     "why": "Exercise can mobilize leukocytes transiently."
    },
    {
     "l": "B",
     "text": "Can physiologically fluctuate by more than 50% in one day.",
     "answer": true,
     "why": "WBC counts have notable diurnal and stress-related variability."
    },
    {
     "l": "C",
     "text": "Compared with RBC count, WBC count can increase much faster.",
     "answer": true,
     "why": "Redistribution produces rapid leukocytosis."
    },
    {
     "l": "D",
     "text": "Could triple within hours.",
     "answer": true,
     "why": "Acute inflammation/stress can produce rapid count changes."
    },
    {
     "l": "E",
     "text": "Is roughly 100 times lower than RBC count.",
     "answer": false,
     "why": "RBCs are about 5 million/µL and WBCs about 5–10 thousand/µL, roughly 500–1000 times fewer."
    }
   ]
  },
  {
   "num": 69,
   "ref": "ID 1964",
   "topic": "Blood",
   "subtopic": "Coagulation tests",
   "stem": "INR and aPTT coagulation times are much shorter than clotting time of native blood in a test tube mainly due to:",
   "statements": [
    {
     "l": "A",
     "text": "Temperature control",
     "answer": false,
     "why": "Temperature matters but is not the principal reason for the large speed difference."
    },
    {
     "l": "B",
     "text": "Addition of Ca2+",
     "answer": false,
     "why": "Calcium is part of reagent conditions, not the chief reason relative to native-blood clotting time."
    },
    {
     "l": "C",
     "text": "Specific activation",
     "answer": true,
     "why": "Added activators initiate the measured cascade in standardized conditions."
    },
    {
     "l": "D",
     "text": "Plasma separation",
     "answer": false,
     "why": "Separating plasma alone does not activate clotting."
    },
    {
     "l": "E",
     "text": "Decalcification",
     "answer": false,
     "why": "Removing calcium inhibits coagulation."
    }
   ]
  },
  {
   "num": 70,
   "ref": "ID 2080",
   "topic": "Blood",
   "subtopic": "Blood counts & lab methods",
   "stem": "In clinical practice, a blood sample sometimes partially hemolyses before testing. Which results would NOT be affected?",
   "statements": [
    {
     "l": "A",
     "text": "Counting WBCs",
     "answer": true,
     "why": "Mild red-cell hemolysis may leave leukocytes countable, though severe hemolysis can affect some counters."
    },
    {
     "l": "B",
     "text": "Sedimentation of erythrocytes",
     "answer": false,
     "why": "Hemolysis disrupts normal erythrocyte sedimentation."
    },
    {
     "l": "C",
     "text": "Plasma potassium concentration",
     "answer": false,
     "why": "RBCs release potassium, falsely elevating plasma/serum potassium."
    },
    {
     "l": "D",
     "text": "Hematocrit",
     "answer": false,
     "why": "Destroyed RBCs distort packed-cell volume."
    },
    {
     "l": "E",
     "text": "Counting RBCs",
     "answer": false,
     "why": "RBC destruction makes counting unreliable."
    },
    {
     "l": "F",
     "text": "Hemoglobinometry",
     "answer": true,
     "why": "Total Hb assays deliberately lyse RBCs, so a prehemolysed sample can still contain measurable total Hb."
    }
   ]
  },
  {
   "num": 71,
   "ref": "ID 4478",
   "topic": "Blood",
   "subtopic": "Blood counts & lab methods",
   "stem": "The erythrocyte count in one litre of blood could vary during a day:",
   "statements": [
    {
     "l": "A",
     "text": "By 5%",
     "answer": true,
     "why": "A few-percent variation can result from hydration, posture, sampling and plasma shifts."
    },
    {
     "l": "B",
     "text": "To the same extent as leukocyte count varies",
     "answer": false,
     "why": "Leukocyte counts fluctuate much more than RBC counts."
    },
    {
     "l": "C",
     "text": "By more than 20%",
     "answer": false,
     "why": "A greater-than-20% physiological daily change is not typical."
    },
    {
     "l": "D",
     "text": "Mainly due to the difference between the production rate and degradation rate of erythrocytes",
     "answer": false,
     "why": "RBC production and removal occur over many days; acute changes mostly reflect plasma volume."
    },
    {
     "l": "E",
     "text": "By 1%",
     "answer": true,
     "why": "Small daily fluctuations of about 1% are possible."
    }
   ]
  },
  {
   "num": 72,
   "ref": "ID 2081",
   "topic": "Blood",
   "subtopic": "Hematocrit",
   "stem": "If a higher hematocrit is found, the number of red blood cells:",
   "statements": [
    {
     "l": "A",
     "text": "Can be normal",
     "answer": true,
     "why": "Larger red cells or smaller plasma volume can raise Hct without increasing RBC number."
    },
    {
     "l": "B",
     "text": "Can be higher",
     "answer": true,
     "why": "More RBCs can raise hematocrit."
    },
    {
     "l": "C",
     "text": "Is typically lower",
     "answer": false,
     "why": "A lower count is not the expected general finding with higher Hct."
    },
    {
     "l": "D",
     "text": "Has no relationship to hematocrit",
     "answer": false,
     "why": "RBC volume fraction depends on the count and mean cell volume."
    }
   ]
  },
  {
   "num": 73,
   "ref": "ID 1552",
   "topic": "Blood",
   "subtopic": "Anticoagulation",
   "stem": "Which are physiological anticoagulation mechanisms?",
   "statements": [
    {
     "l": "A",
     "text": "Platelets",
     "answer": false,
     "why": "Platelets normally promote initial hemostasis."
    },
    {
     "l": "B",
     "text": "Intact endothelium",
     "answer": true,
     "why": "Endothelium supplies antithrombotic substances and surface."
    },
    {
     "l": "C",
     "text": "Vitamin K antagonists",
     "answer": false,
     "why": "These are medications, not native physiological mechanisms."
    },
    {
     "l": "D",
     "text": "Blood flow",
     "answer": true,
     "why": "Flow removes or dilutes activated clotting proteins."
    },
    {
     "l": "E",
     "text": "Decalcification",
     "answer": false,
     "why": "Systemic calcium deprivation is not physiological."
    },
    {
     "l": "F",
     "text": "Heparin",
     "answer": true,
     "why": "Endogenous heparin-like molecules contribute to anticoagulant activity."
    }
   ]
  },
  {
   "num": 74,
   "ref": "ID 1560",
   "topic": "Blood",
   "subtopic": "Coagulation tests",
   "stem": "In an INR test, for which water-bath temperature could meaningful values be obtained in principle?",
   "statements": [
    {
     "l": "A",
     "text": "25°C",
     "answer": true,
     "why": "Reaction proceeds at 25°C, though standardization matters."
    },
    {
     "l": "B",
     "text": "0°C",
     "answer": false,
     "why": "Near freezing, enzyme reaction is severely impaired."
    },
    {
     "l": "C",
     "text": "35°C",
     "answer": true,
     "why": "35°C is close to body temperature and supports a measurable reaction."
    },
    {
     "l": "D",
     "text": "Any temperature",
     "answer": false,
     "why": "The reaction rate cannot be assumed meaningful at literally any temperature."
    },
    {
     "l": "E",
     "text": "Room temperature",
     "answer": true,
     "why": "Room temperature can work in principle if method calibrated."
    }
   ]
  },
  {
   "num": 75,
   "ref": "ID 1570",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "Which treatments of a native blood sample should be performed during laboratory estimation of hemoglobin concentration?",
   "statements": [
    {
     "l": "A",
     "text": "Anticoagulation",
     "answer": true,
     "why": "Prevents the sample clotting before analysis."
    },
    {
     "l": "B",
     "text": "Deproteinization",
     "answer": false,
     "why": "Removing Hb as a protein would defeat the measurement."
    },
    {
     "l": "C",
     "text": "Oxidation",
     "answer": true,
     "why": "Oxidation is part of the conventional cyanmethemoglobin method."
    },
    {
     "l": "D",
     "text": "Oxygenation",
     "answer": false,
     "why": "Oxygen saturation is not the required measured quantity."
    },
    {
     "l": "E",
     "text": "Hemolysis",
     "answer": true,
     "why": "Lysis releases Hb from erythrocytes for photometry."
    }
   ]
  },
  {
   "num": 76,
   "ref": "ID 1595",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "In methemoglobinemia in an otherwise healthy adult, the hemoglobinometry method used in our lab would reveal:",
   "statements": [
    {
     "l": "A",
     "text": "Normal amount of total Hb",
     "answer": true,
     "why": "The method quantifies total Hb and may show a normal level despite abnormal Hb function."
    },
    {
     "l": "B",
     "text": "Higher amount of Hb compared with normal",
     "answer": false,
     "why": "Methemoglobin does not imply increased total Hb mass."
    },
    {
     "l": "C",
     "text": "No deviation from the norm",
     "answer": true,
     "why": "Total Hb result can be normal even though oxygen binding is impaired."
    },
    {
     "l": "D",
     "text": "Nothing, since the test cannot be performed",
     "answer": false,
     "why": "The assay is feasible; methemoglobin is measurable as part of total Hb."
    }
   ]
  },
  {
   "num": 77,
   "ref": "ID 1598",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "Which procedures do NOT influence the result of hemoglobinometry (method used in labs)?",
   "statements": [
    {
     "l": "A",
     "text": "Hemolysis",
     "answer": false,
     "why": "Cell lysis is needed to put Hb into measured solution."
    },
    {
     "l": "B",
     "text": "Dilution",
     "answer": false,
     "why": "Dilution alters concentration unless accounted for."
    },
    {
     "l": "C",
     "text": "Oxidation of hemoglobin",
     "answer": false,
     "why": "Oxidation forms the measured derivative in this specific assay."
    },
    {
     "l": "D",
     "text": "Oxygenation of hemoglobin",
     "answer": true,
     "why": "Oxygen binding does not change total Hb quantified after conversion to cyanmethemoglobin."
    },
    {
     "l": "E",
     "text": "Deoxygenation of hemoglobin",
     "answer": true,
     "why": "Likewise, initially deoxygenated Hb is converted during the assay."
    },
    {
     "l": "F",
     "text": "Size of cuvette",
     "answer": true,
     "why": "In the photographed lab protocol, standard optical geometry is assumed, although a different optical path length can affect absorbance."
    }
   ],
   "note": "F depends on how “size” is interpreted; optical path length DOES affect photometric absorbance. Source key may be oversimplified."
  },
  {
   "num": 78,
   "ref": "ID 1600",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "Drabkin solution (used for hemoglobinometry) is toxic because:",
   "statements": [
    {
     "l": "A",
     "text": "It contains KCN.",
     "answer": true,
     "why": "Potassium cyanide is highly toxic."
    },
    {
     "l": "B",
     "text": "It is yellow.",
     "answer": false,
     "why": "A color is not a toxic mechanism."
    },
    {
     "l": "C",
     "text": "It is hypertonic.",
     "answer": false,
     "why": "Tonicity is not the principal hazard."
    },
    {
     "l": "D",
     "text": "It contains methemoglobin.",
     "answer": false,
     "why": "Methemoglobin is produced during testing rather than a toxic ingredient."
    },
    {
     "l": "E",
     "text": "It can block internal (cellular) respiration.",
     "answer": true,
     "why": "Cyanide inhibits cytochrome c oxidase in cellular respiration."
    },
    {
     "l": "F",
     "text": "It oxidizes hemoglobin.",
     "answer": true,
     "why": "Ferricyanide oxidizes Hb in the reagent system; the reagent is hazardous mainly due to cyanide."
    }
   ]
  },
  {
   "num": 79,
   "ref": "ID 1653",
   "topic": "Blood",
   "subtopic": "Coagulation tests",
   "stem": "In an aPTT test, which substances could be used?",
   "statements": [
    {
     "l": "A",
     "text": "Na citrate",
     "answer": true,
     "why": "Citrate stabilizes collected plasma until testing."
    },
    {
     "l": "B",
     "text": "Oxalate",
     "answer": false,
     "why": "Oxalate may chelate calcium but is not the standard aPTT collection reagent."
    },
    {
     "l": "C",
     "text": "Serum",
     "answer": false,
     "why": "aPTT requires plasma with clotting factors, not serum depleted of them."
    },
    {
     "l": "D",
     "text": "Calcium ions",
     "answer": true,
     "why": "Calcium is reintroduced to start the timed clotting reaction."
    },
    {
     "l": "E",
     "text": "Tissue thromboplastin",
     "answer": false,
     "why": "Tissue factor (thromboplastin) is associated with PT rather than aPTT."
    }
   ],
   "note": "Reconstructed from a distant screenshot; verify A substance name."
  },
  {
   "num": 80,
   "ref": "ID 1804",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "Methemoglobin:",
   "statements": [
    {
     "l": "A",
     "text": "Is an oxidized form of hemoglobin.",
     "answer": true,
     "why": "Its heme iron is ferric (Fe3+) rather than ferrous."
    },
    {
     "l": "B",
     "text": "Is an oxygenated form of hemoglobin.",
     "answer": false,
     "why": "Oxidation of iron is different from reversible binding of O2."
    },
    {
     "l": "C",
     "text": "Is functionally compromised hemoglobin.",
     "answer": true,
     "why": "Ferric Hb cannot carry oxygen in the normal way."
    },
    {
     "l": "D",
     "text": "Is found in human blood physiologically.",
     "answer": true,
     "why": "Small amounts are normally present and reduced enzymatically."
    },
    {
     "l": "E",
     "text": "Is found in human blood pathologically.",
     "answer": true,
     "why": "Excess levels cause methemoglobinemia."
    }
   ]
  },
  {
   "num": 81,
   "ref": "ID 4530",
   "topic": "Blood",
   "subtopic": "Anticoagulation",
   "stem": "Why does blood flow inhibit clotting?",
   "statements": [
    {
     "l": "A",
     "text": "It washes away activated clotting factors.",
     "answer": true,
     "why": "Flow disperses enzymes away from a localized lesion."
    },
    {
     "l": "B",
     "text": "It creates a concentration gradient of activated clotting factors away from an injury.",
     "answer": true,
     "why": "Convection and diffusion can produce local concentration gradients."
    },
    {
     "l": "C",
     "text": "It brings clotting inhibitors to the site of cascade activation.",
     "answer": true,
     "why": "Antithrombin and other inhibitors circulate in flowing blood."
    },
    {
     "l": "D",
     "text": "It dilutes activated clotting factors.",
     "answer": true,
     "why": "Dilution lowers local concentration of active clotting proteins."
    }
   ]
  },
  {
   "num": 82,
   "ref": "ID 4503",
   "topic": "Blood",
   "subtopic": "Coagulation",
   "stem": "Vitamin K:",
   "statements": [
    {
     "l": "A",
     "text": "Is a necessary cofactor for maturation of platelets.",
     "answer": false,
     "why": "Platelet maturation is not dependent on vitamin K in this way."
    },
    {
     "l": "B",
     "text": "Can be inhibited, e.g. by coumarin.",
     "answer": true,
     "why": "Warfarin/coumarins inhibit vitamin K recycling."
    },
    {
     "l": "C",
     "text": "Affects synthesis of factors I, VII and others.",
     "answer": false,
     "why": "Factor I (fibrinogen) is not vitamin-K-dependent; factors II, VII, IX, X are."
    },
    {
     "l": "D",
     "text": "Is necessary for synthesis of protein C and protein S.",
     "answer": true,
     "why": "Proteins C and S require vitamin-K-dependent gamma-carboxylation."
    }
   ]
  },
  {
   "num": 87,
   "ref": "ID 1806",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "What would the plasma hemoglobin concentration be if hematocrit were 0.48?",
   "statements": [
    {
     "l": "A",
     "text": "Practically 0 g/L.",
     "answer": true,
     "why": "In normal blood hemoglobin is contained almost entirely inside red blood cells, not plasma."
    },
    {
     "l": "B",
     "text": "75 g/L.",
     "answer": false,
     "why": "Normal cell-free plasma does not contain this much hemoglobin."
    },
    {
     "l": "C",
     "text": "150 g/L.",
     "answer": false,
     "why": "Around 150 g/L refers to the concentration of hemoglobin in whole blood."
    },
    {
     "l": "D",
     "text": "300 g/L.",
     "answer": false,
     "why": "This magnitude is closer to the concentration inside RBCs, not in plasma."
    },
    {
     "l": "E",
     "text": "480 g/L.",
     "answer": false,
     "why": "Hematocrit 0.48 does not mean plasma contains 480 g/L hemoglobin."
    },
    {
     "l": "F",
     "text": "48 g/L.",
     "answer": false,
     "why": "Hematocrit gives a volume fraction and does not imply this plasma Hb level."
    }
   ]
  },
  {
   "num": 88,
   "ref": "ID 1577",
   "topic": "Blood",
   "subtopic": "Hematocrit",
   "stem": "Which procedure is necessary for hematocrit estimation?",
   "statements": [
    {
     "l": "A",
     "text": "Hemoconcentration.",
     "answer": false,
     "why": "Concentrating the sample would distort the normal blood-cell fraction."
    },
    {
     "l": "B",
     "text": "Dilution.",
     "answer": false,
     "why": "Dilution would lower the measured hematocrit."
    },
    {
     "l": "C",
     "text": "Centrifugation.",
     "answer": true,
     "why": "Spinning separates packed red blood cells from plasma so the fraction can be measured."
    },
    {
     "l": "D",
     "text": "Five-minute sedimentation.",
     "answer": false,
     "why": "Passive settling over a few minutes is not standard microhematocrit measurement."
    },
    {
     "l": "E",
     "text": "Spectrophotometry.",
     "answer": false,
     "why": "Hematocrit is a packed-cell volume ratio rather than a light-absorbance measurement."
    }
   ]
  },
  {
   "num": 89,
   "ref": "ID 1614",
   "topic": "Blood",
   "subtopic": "Coagulation",
   "stem": "Which of the following fluids are not clotting spontaneously at all?",
   "statements": [
    {
     "l": "A",
     "text": "Blood with excess sodium citrate.",
     "answer": true,
     "why": "Citrate binds available calcium, preventing coagulation in the specimen."
    },
    {
     "l": "B",
     "text": "Plasma.",
     "answer": false,
     "why": "Untreated plasma retains coagulation proteins and can clot."
    },
    {
     "l": "C",
     "text": "Serum.",
     "answer": true,
     "why": "Serum has already been formed after clotting and lacks most fibrinogen."
    },
    {
     "l": "D",
     "text": "Fully heparinized blood.",
     "answer": true,
     "why": "Heparin enhances antithrombin and prevents clotting under adequate conditions."
    },
    {
     "l": "E",
     "text": "Native blood kept below 25°C.",
     "answer": false,
     "why": "Cooling slows clotting but does not reliably prevent it."
    }
   ]
  },
  {
   "num": 90,
   "ref": "ID 1603",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "If hemoglobin is 150 g/L and hematocrit is 0.50, mean corpuscular hemoglobin concentration (MCHC) would be:",
   "statements": [
    {
     "l": "A",
     "text": "350 g/L.",
     "answer": false,
     "why": "MCHC = 150 / 0.50 = 300 g/L, not 350."
    },
    {
     "l": "B",
     "text": "30%.",
     "answer": true,
     "why": "300 g/L is 30 g/dL, approximately 30 g per 100 mL packed red cells."
    },
    {
     "l": "C",
     "text": "Slightly below physiological limits.",
     "answer": true,
     "why": "300 g/L is slightly below the common adult reference range, about 320–360 g/L."
    },
    {
     "l": "D",
     "text": "About twice as high as the concentration of hemoglobin in blood.",
     "answer": true,
     "why": "Dividing by hematocrit 0.50 doubles the concentration."
    },
    {
     "l": "E",
     "text": "More than 100 times higher compared with plasma Hb concentration.",
     "answer": true,
     "why": "Normal plasma contains almost no free hemoglobin."
    }
   ]
  },
  {
   "num": 91,
   "ref": "ID 4531",
   "topic": "Blood",
   "subtopic": "Coagulation tests",
   "stem": "Why is the INR ratio useful?",
   "statements": [
    {
     "l": "A",
     "text": "Because it relates the QUICK time of patient plasma to the constant QUICK time of standard plasma.",
     "answer": false,
     "why": "INR is based on a PT ratio standardized with reagent sensitivity, not merely an unspecified constant QUICK time."
    },
    {
     "l": "B",
     "text": "Because it relates the QUICK time of patient plasma with the QUICK time of standard plasma.",
     "answer": true,
     "why": "INR uses the patient PT relative to a normal reference PT."
    },
    {
     "l": "C",
     "text": "Because it eliminates all variability of standard plasma.",
     "answer": false,
     "why": "Normalization reduces interlaboratory variation but does not eliminate every source."
    },
    {
     "l": "D",
     "text": "Because it accounts for variable activity of clotting activators such as tissue thromboplastin.",
     "answer": true,
     "why": "The INR uses ISI to adjust for thromboplastin-reagent sensitivity."
    }
   ]
  },
  {
   "num": 92,
   "ref": "ID Supranormal-hematocrit",
   "topic": "Blood",
   "subtopic": "Hematocrit",
   "stem": "Supranormal hematocrit values:",
   "statements": [
    {
     "l": "A",
     "text": "Could be beneficial, since there is better oxygen supply to tissues.",
     "answer": true,
     "why": "More red-cell volume increases oxygen-carrying capacity, although excessive viscosity can offset the benefit."
    },
    {
     "l": "B",
     "text": "Necessarily imply polycythemia.",
     "answer": false,
     "why": "Elevated hematocrit may result from plasma-volume reduction, not just increased red-cell mass."
    },
    {
     "l": "C",
     "text": "Could be physiological, e.g., at high altitudes.",
     "answer": true,
     "why": "Low environmental oxygen stimulates erythropoietin and increased RBC production."
    },
    {
     "l": "D",
     "text": "Rarely occur physiologically.",
     "answer": false,
     "why": "The slide does not select this; physiological adaptations are possible."
    },
    {
     "l": "E",
     "text": "Could be due to an oxygen deficit, absolute or relative.",
     "answer": true,
     "why": "Hypoxia can increase erythropoiesis and raise hematocrit."
    }
   ]
  },
  {
   "num": 93,
   "ref": "ID ABO-antibodies",
   "topic": "Blood",
   "subtopic": "Blood groups & Rh",
   "stem": "Antibodies against both A and B antigens could be found in the plasma of a person who is:",
   "statements": [
    {
     "l": "A",
     "text": "Blood group A.",
     "answer": false,
     "why": "Group A normally has anti-B, not anti-A."
    },
    {
     "l": "B",
     "text": "Blood group B.",
     "answer": false,
     "why": "Group B normally has anti-A, not anti-B."
    },
    {
     "l": "C",
     "text": "Blood group AB.",
     "answer": false,
     "why": "Group AB normally has neither anti-A nor anti-B."
    },
    {
     "l": "D",
     "text": "Blood group O.",
     "answer": true,
     "why": "Group O plasma normally contains both anti-A and anti-B."
    },
    {
     "l": "E",
     "text": "Any of these ABO blood groups.",
     "answer": false,
     "why": "The antibody pattern depends on ABO type."
    },
    {
     "l": "F",
     "text": "Rh-positive or Rh-negative.",
     "answer": true,
     "why": "Rh status is independent of ABO; a group O person may have either Rh status."
    }
   ]
  },
  {
   "num": 94,
   "ref": "ID 4678",
   "topic": "Blood",
   "subtopic": "Blood counts & lab methods",
   "stem": "RBC count:",
   "statements": [
    {
     "l": "A",
     "text": "Gives direct information about how fast oxygen is transported in the bloodstream.",
     "answer": false,
     "why": "RBC count says how many cells there are, not how fast O2 is carried (that needs flow and O2 content)."
    },
    {
     "l": "B",
     "text": "Provides information about oxygen consumption per minute.",
     "answer": false,
     "why": "O2 consumption needs blood flow and the arteriovenous O2 difference (Fick), not the RBC count."
    },
    {
     "l": "C",
     "text": "In a young man, must not be lower than 6,000,000,000,000 erythrocytes per liter.",
     "answer": false,
     "why": "6,000,000,000,000 per liter is 6 x 10^12/L, above the normal male range (about 4.5-5.9 x 10^12/L), so it cannot be the lower limit."
    },
    {
     "l": "D",
     "text": "Is always lower in women than in men.",
     "answer": false,
     "why": "On average women have fewer RBCs (about 4-5.2 x 10^12/L), but individual ranges overlap, so \"always\" is wrong."
    },
    {
     "l": "E",
     "text": "In a young man, must not be lower than 6,000,000 erythrocytes per microliter.",
     "answer": false,
     "why": "6,000,000 per microliter is the same 6 x 10^12/L, which is above the normal range, so it cannot be the minimum."
    }
   ],
   "note": "In the photographed key the correct-answer field is empty, so every statement is false."
  },
  {
   "num": 97,
   "ref": "ID 4475",
   "topic": "Blood",
   "subtopic": "Hemoglobin & RBC indices",
   "stem": "Hemoglobin:",
   "statements": [
    {
     "l": "A",
     "text": "Its saturation curve is linear",
     "answer": false,
     "why": "The O2 saturation curve is sigmoid because O2 binding to the four subunits is cooperative."
    },
    {
     "l": "B",
     "text": "Its saturation curve depends on temperature",
     "answer": true,
     "why": "Higher temperature shifts the curve to the right (lower affinity); lower temperature shifts it left."
    },
    {
     "l": "C",
     "text": "Is the most abundant blood protein",
     "answer": true,
     "why": "About 150 g/L of hemoglobin in whole blood is more than any plasma protein (albumin is about 45 g/L of plasma), so Hb is the most abundant protein in blood."
    },
    {
     "l": "D",
     "text": "Is synthesized by mature erythrocytes",
     "answer": false,
     "why": "Mature erythrocytes have no nucleus or ribosomes; Hb is synthesized in erythroblasts and reticulocytes."
    },
    {
     "l": "E",
     "text": "Is lipoprotein",
     "answer": false,
     "why": "Hb is a heme (iron-containing) protein, not a lipoprotein."
    },
    {
     "l": "F",
     "text": "Is colorless",
     "answer": false,
     "why": "Hb is red: oxyhemoglobin bright red, deoxyhemoglobin darker red."
    }
   ]
  },
  {
   "num": 98,
   "ref": "ID 1830",
   "topic": "Blood",
   "subtopic": "Hematocrit",
   "stem": "Which anticoagulation is most suitable for microhematocrit estimation?",
   "statements": [
    {
     "l": "A",
     "text": "Decalcification",
     "answer": false,
     "why": "Liquid calcium-binding anticoagulants (citrate, oxalate) dilute the sample or change cell volume, which falsifies the hematocrit; the method uses heparin."
    },
    {
     "l": "B",
     "text": "Anti vitamin K (coumarin)",
     "answer": false,
     "why": "Coumarins act only in vivo (they block vitamin K-dependent synthesis of clotting factors in the liver); they do nothing in a test tube."
    },
    {
     "l": "C",
     "text": "Heparin",
     "answer": true,
     "why": "Heparinized capillary tubes are the standard for microhematocrit: no dilution and no change in cell volume."
    },
    {
     "l": "D",
     "text": "Dilution",
     "answer": false,
     "why": "Dilution changes the hematocrit itself, so it cannot be used."
    },
    {
     "l": "E",
     "text": "None, blood must NOT be anticoagulated for microhematocrit method",
     "answer": false,
     "why": "Without anticoagulation the blood would clot in the capillary before or during centrifugation."
    }
   ]
  },
  {
   "num": 99,
   "ref": "ID 1596",
   "topic": "Blood",
   "subtopic": "Blood counts & lab methods",
   "stem": "Which of the following methods do not require hemolysis?",
   "statements": [
    {
     "l": "A",
     "text": "Cells counting (RBCs)",
     "answer": true,
     "why": "RBC counting needs intact cells; the diluent is isotonic so that cells do not lyse."
    },
    {
     "l": "B",
     "text": "Blood groups estimation",
     "answer": true,
     "why": "Blood grouping reads agglutination of intact red cells carrying the antigens."
    },
    {
     "l": "C",
     "text": "Hemoglobinometry",
     "answer": false,
     "why": "Hemoglobinometry (Drabkin) requires hemolysis to free Hb and convert it to cyanmethemoglobin."
    },
    {
     "l": "D",
     "text": "Sedimentation rate",
     "answer": true,
     "why": "Sedimentation rate measures how fast intact red cells settle."
    },
    {
     "l": "E",
     "text": "Hematocrit",
     "answer": true,
     "why": "Hematocrit is the volume of packed intact cells; hemolysis would falsify it."
    }
   ]
  },
  {
   "num": 101,
   "ref": "ID 1613",
   "topic": "Blood",
   "subtopic": "Coagulation",
   "stem": "Which of the following terms has the least functional relation to the others?",
   "statements": [
    {
     "l": "A",
     "text": "Hemostasis",
     "answer": false,
     "why": "Hemostasis (stopping of bleeding) includes platelet aggregation and coagulation, so it is closely related to the others."
    },
    {
     "l": "B",
     "text": "Agglutination",
     "answer": true,
     "why": "Agglutination is antigen-antibody clumping of red cells (blood groups). It is an immunological reaction, not part of hemostasis, so it has the least relation."
    },
    {
     "l": "C",
     "text": "Aggregation",
     "answer": false,
     "why": "Platelet aggregation is a core step of primary hemostasis."
    },
    {
     "l": "D",
     "text": "Anticoagulation",
     "answer": false,
     "why": "Anticoagulation is the regulatory counterpart of coagulation and works on the same system."
    },
    {
     "l": "E",
     "text": "Hemocoagulation",
     "answer": false,
     "why": "Hemocoagulation is secondary hemostasis."
    }
   ]
  },
  {
   "num": 102,
   "ref": "Past paper (SIM_2)",
   "topic": "Blood",
   "subtopic": "Blood loss",
   "stem": "A previously healthy person lost a large amount of blood. Now, hemoglobin concentration is 60 g/L. Choose the correct answer(s):",
   "statements": [
    {
     "l": "A",
     "text": "Hb concentration value 60 g/L could have been obtained right after the bleeding",
     "answer": false,
     "why": "Right after bleeding, cells and plasma are lost in the same proportion, so Hb concentration is initially unchanged. It falls only later, when interstitial fluid dilutes the blood."
    },
    {
     "l": "B",
     "text": "This value of Hb can be physiological in women",
     "answer": false,
     "why": "Normal Hb is about 120-160 g/L in women; 60 g/L is severe anemia."
    },
    {
     "l": "C",
     "text": "Hb is critically low",
     "answer": true,
     "why": "60 g/L is critically low (below the usual transfusion threshold of about 70 g/L)."
    },
    {
     "l": "D",
     "text": "Hb was estimated with a delay after the blood loss",
     "answer": true,
     "why": "The drop needs hemodilution, which takes hours to days, so this value was measured with a delay after the loss."
    }
   ]
  },
  {
   "num": 116,
   "ref": "ID 5256",
   "topic": "Blood",
   "subtopic": "Blood loss",
   "stem": "After a 1 L blood loss:",
   "statements": [
    {
     "l": "A",
     "text": "Blood count is not changed immediately (minutes) after bleeding",
     "answer": true,
     "why": "Whole blood is lost, so cell concentrations are unchanged in the first minutes."
    },
    {
     "l": "B",
     "text": "MCV, MCH and MCHC are not changed hours after bleeding",
     "answer": true,
     "why": "MCV, MCH and MCHC describe single cells; dilution changes counts but not these indices."
    },
    {
     "l": "C",
     "text": "MCV, MCH and MCHC are not changed one day after the bleeding",
     "answer": true,
     "why": "A day later the cells are still the same ones; new reticulocytes appear only after several days."
    },
    {
     "l": "D",
     "text": "The person could be thirsty",
     "answer": true,
     "why": "Hypovolemia triggers angiotensin II and ADH, which cause thirst."
    },
    {
     "l": "E",
     "text": "Immediately after bleeding the loss of volume is more serious than loss of erythrocytes",
     "answer": true,
     "why": "Right after bleeding the loss of volume threatens circulation first; reduced O2 capacity matters later."
    }
   ]
  }
 ],
 "Cardiovascular": [
  {
   "num": 4,
   "ref": "ID 4191",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Pulse pressure can be estimated from:",
   "statements": [
    {
     "l": "A",
     "text": "Invasive blood pressure measurement",
     "answer": true,
     "why": "An arterial trace provides systolic and diastolic pressure."
    },
    {
     "l": "B",
     "text": "Noninvasive blood pressure measurement",
     "answer": true,
     "why": "A cuff gives systolic and diastolic values, whose difference is pulse pressure."
    },
    {
     "l": "C",
     "text": "Palpation of pulse without any measurement",
     "answer": false,
     "why": "Palpation alone cannot quantify both pressures."
    },
    {
     "l": "D",
     "text": "Mean arterial pressure alone",
     "answer": false,
     "why": "A mean does not uniquely determine their difference."
    },
    {
     "l": "E",
     "text": "Diastolic pressure only",
     "answer": false,
     "why": "You need systolic as well."
    },
    {
     "l": "F",
     "text": "Systolic pressure only",
     "answer": false,
     "why": "You need diastolic as well."
    }
   ]
  },
  {
   "num": 5,
   "ref": "ID 4193 / 624",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "Blood pressure:",
   "statements": [
    {
     "l": "A",
     "text": "Is evaluated most commonly using a cuff; other methods are less frequent.",
     "answer": true,
     "why": "A sphygmomanometer is the routine clinical method."
    },
    {
     "l": "B",
     "text": "Has the greatest diagnostic value only if measured within approximately 5 mmHg.",
     "answer": false,
     "why": "Clinical interpretation does not depend on this rigid universal precision requirement."
    },
    {
     "l": "C",
     "text": "Its measurement is very useful in patients at rest.",
     "answer": true,
     "why": "Resting BP is a standard clinically useful measurement."
    },
    {
     "l": "D",
     "text": "Measurement is valuable only when measured continuously (more than one hour).",
     "answer": false,
     "why": "Brief measurements are useful; continuous monitoring is not required."
    },
    {
     "l": "E",
     "text": "Measurement can be valuable only if performed continuously (more than 60 minutes).",
     "answer": false,
     "why": "One-hour continuous monitoring is not necessary for clinical value."
    },
    {
     "l": "F",
     "text": "Is a difference of blood-flow speeds.",
     "answer": false,
     "why": "Pressure is not defined as a difference in velocity."
    },
    {
     "l": "G",
     "text": "Is force exerted by blood on cardiovascular walls per unit area.",
     "answer": true,
     "why": "Pressure is force per area."
    },
    {
     "l": "H",
     "text": "Is influenced by gravity.",
     "answer": true,
     "why": "Hydrostatic pressure varies with vertical position."
    },
    {
     "l": "I",
     "text": "Is dependent on cardiac output.",
     "answer": true,
     "why": "Flow and vascular resistance affect arterial pressure."
    },
    {
     "l": "J",
     "text": "Is equal to cardiac work.",
     "answer": false,
     "why": "Work is energy, while pressure has units of force per area."
    }
   ],
   "note": "B wording is reconstructed from a distant photograph; check before exact-phrase import."
  },
  {
   "num": 6,
   "ref": "ID 4564",
   "topic": "Cardiovascular",
   "subtopic": "Hemodynamics",
   "stem": "The vessels most responsible for controlling systemic vascular resistance and regulating blood flow to a particular organ are:",
   "statements": [
    {
     "l": "A",
     "text": "Arterioles",
     "answer": true,
     "why": "Arterioles change diameter and are the major resistance vessels."
    },
    {
     "l": "B",
     "text": "Capillaries",
     "answer": false,
     "why": "Capillaries mainly exchange gases and nutrients."
    },
    {
     "l": "C",
     "text": "Aorta",
     "answer": false,
     "why": "The aorta conducts blood with comparatively low resistance."
    },
    {
     "l": "D",
     "text": "Lymphatic vessels",
     "answer": false,
     "why": "Lymphatics return tissue fluid, not regulate arterial resistance."
    },
    {
     "l": "E",
     "text": "Big arteries (e.g., brachial artery)",
     "answer": false,
     "why": "Large arteries mainly conduct and buffer pulsatility."
    }
   ]
  },
  {
   "num": 7,
   "ref": "ID 4565",
   "topic": "Cardiovascular",
   "subtopic": "Hemodynamics",
   "stem": "The greatest resistance to blood flow occurs in:",
   "statements": [
    {
     "l": "A",
     "text": "Large arteries",
     "answer": false,
     "why": "Large lumens create relatively little resistance."
    },
    {
     "l": "B",
     "text": "Medium-sized arteries",
     "answer": false,
     "why": "Moderate resistance, but less than arterioles."
    },
    {
     "l": "C",
     "text": "Arterioles",
     "answer": true,
     "why": "A small adjustable radius makes arterioles the chief resistance site."
    },
    {
     "l": "D",
     "text": "Capillaries",
     "answer": false,
     "why": "Individual capillaries are tiny, but many run in parallel."
    },
    {
     "l": "E",
     "text": "Heart ventricles",
     "answer": false,
     "why": "Ventricles generate pressure rather than constituting main vascular resistance."
    }
   ]
  },
  {
   "num": 8,
   "ref": "ID 4195 / 4155",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "Arterial blood pressure in arteries during one or more cardiac cycles:",
   "statements": [
    {
     "l": "A",
     "text": "In principle reaches systolic and diastolic values, which contain most information about arterial compliance, contractility and valve closure.",
     "answer": true,
     "why": "The maxima and minima of the pulse provide clinically relevant information, though they do not capture every aspect of cardiac function."
    },
    {
     "l": "B",
     "text": "Is best represented by mean arterial pressure.",
     "answer": false,
     "why": "MAP is useful but does not represent all clinically important information in the waveform."
    },
    {
     "l": "C",
     "text": "Can be constant.",
     "answer": false,
     "why": "In a normally beating heart, arterial pressure pulsates."
    },
    {
     "l": "D",
     "text": "Attains a diagnostically useful range between systolic and diastolic pressure.",
     "answer": true,
     "why": "The pressure varies across the systolic-to-diastolic range."
    },
    {
     "l": "E",
     "text": "Cannot be estimated.",
     "answer": false,
     "why": "Cuff measurements estimate arterial pressure routinely."
    }
   ]
  },
  {
   "num": 9,
   "ref": "ID 1970 / 1976",
   "topic": "Cardiovascular",
   "subtopic": "Hemodynamics",
   "stem": "If the heart suddenly stops working completely:",
   "statements": [
    {
     "l": "A",
     "text": "Pressure in arteries promptly (within seconds) reaches zero.",
     "answer": false,
     "why": "Pressure decays rather than becoming exactly zero immediately."
    },
    {
     "l": "B",
     "text": "Pressure in veins will soon equal arterial pressure.",
     "answer": true,
     "why": "Without flow, pressures equilibrate toward mean circulatory filling pressure."
    },
    {
     "l": "C",
     "text": "Systolic and diastolic pressure could still be distinguished in arteries for minutes after arrest.",
     "answer": false,
     "why": "Without pumping, pulsations soon cease."
    },
    {
     "l": "D",
     "text": "It commonly takes more than one minute until the individual loses consciousness.",
     "answer": false,
     "why": "Cerebral perfusion failure usually causes loss of consciousness in seconds."
    },
    {
     "l": "E",
     "text": "Arterial pressure could remain around 100 mmHg for minutes.",
     "answer": false,
     "why": "Arterial pressure rapidly falls without cardiac output."
    }
   ]
  },
  {
   "num": 18,
   "ref": "ID 4211",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "Rapid increase of systolic blood pressure (within seconds to minutes):",
   "statements": [
    {
     "l": "A",
     "text": "Can result from increased metabolic requirements.",
     "answer": true,
     "why": "Exercise and sympathetic activity may rapidly raise systolic pressure."
    },
    {
     "l": "B",
     "text": "Can indicate physiology as well as pathology.",
     "answer": true,
     "why": "Pain, exercise and disease can all raise BP."
    },
    {
     "l": "C",
     "text": "Can only be achieved by increased work of the heart.",
     "answer": false,
     "why": "Vascular resistance and arterial properties also affect BP."
    },
    {
     "l": "D",
     "text": "Can be linked to sudden exposure to a cold environment.",
     "answer": true,
     "why": "Cold causes sympathetic vasoconstriction."
    },
    {
     "l": "E",
     "text": "Can reach values around 40 kPa.",
     "answer": true,
     "why": "40 kPa is about 300 mmHg; extreme values can occur but are pathological."
    }
   ]
  },
  {
   "num": 19,
   "ref": "ID 4596",
   "topic": "Cardiovascular",
   "subtopic": "Heart & cardiac cycle",
   "stem": "During the cardiac cycle:",
   "statements": [
    {
     "l": "A",
     "text": "Right ventricular pressure commonly oscillates between about −10 and +25 mmHg.",
     "answer": true,
     "why": "Gauge pressure can be slightly negative during relaxation; a value as low as −10 is uncommon and context-dependent."
    },
    {
     "l": "B",
     "text": "Systolic pressure in the aorta is higher than diastolic pressure in the left ventricle.",
     "answer": true,
     "why": "Aortic systolic pressure is far higher than LV diastolic pressure."
    },
    {
     "l": "C",
     "text": "Right ventricular pressure during diastole reaches an absolute value of 0 kPa.",
     "answer": false,
     "why": "Zero absolute pressure is a perfect vacuum and is physiologically impossible."
    },
    {
     "l": "D",
     "text": "Pressure could be measured with a cm H2O gauge.",
     "answer": true,
     "why": "A water manometer can measure pressure using a water-column height."
    },
    {
     "l": "E",
     "text": "Left ventricular pressure could reach −10 mmHg.",
     "answer": true,
     "why": "Slightly subatmospheric LV pressure can occur during suction and early diastole."
    }
   ]
  },
  {
   "num": 20,
   "ref": "ID 1645",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Which is a disadvantage of oscillometric blood pressure measurement?",
   "statements": [
    {
     "l": "A",
     "text": "Time requirement",
     "answer": false,
     "why": "Automated oscillometry is generally quick."
    },
    {
     "l": "B",
     "text": "Necessary training",
     "answer": false,
     "why": "It usually requires less specialized training than auscultation."
    },
    {
     "l": "C",
     "text": "Susceptibility to artifacts",
     "answer": true,
     "why": "Movement and arrhythmias can distort oscillations."
    },
    {
     "l": "D",
     "text": "Suitable for hospitalized patients only",
     "answer": false,
     "why": "It can also be used at home and in outpatient settings."
    }
   ]
  },
  {
   "num": 21,
   "ref": "ID 1661",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Which pressures can be measured or roughly estimated noninvasively?",
   "statements": [
    {
     "l": "A",
     "text": "Arterial mean pressure",
     "answer": true,
     "why": "A cuff or monitor can estimate MAP."
    },
    {
     "l": "B",
     "text": "Arterial diastolic pressure",
     "answer": true,
     "why": "A standard cuff estimates diastolic pressure."
    },
    {
     "l": "C",
     "text": "Central venous pressure",
     "answer": true,
     "why": "Jugular venous examination or ultrasound can estimate CVP."
    },
    {
     "l": "D",
     "text": "Left ventricular diastolic pressure",
     "answer": false,
     "why": "LV diastolic pressure is not directly obtainable by simple noninvasive pressure measurement."
    },
    {
     "l": "E",
     "text": "Right atrial diastolic pressure",
     "answer": true,
     "why": "Right atrial pressure can be estimated clinically or by echocardiography."
    }
   ]
  },
  {
   "num": 22,
   "ref": "ID 1635",
   "topic": "Cardiovascular",
   "subtopic": "Heart & cardiac cycle",
   "stem": "The contraction of heart muscle (cardiomyocytes):",
   "statements": [
    {
     "l": "A",
     "text": "Is directly dependent on the immediate activity of Na+/K+-ATPase.",
     "answer": false,
     "why": "The pump supports ionic gradients indirectly, but is not the immediate trigger for each contraction."
    },
    {
     "l": "B",
     "text": "Is dependent on actin–myosin interaction.",
     "answer": true,
     "why": "Cross-bridge cycling generates force."
    },
    {
     "l": "C",
     "text": "Its strength depends on cytoplasmic Ca2+ concentration.",
     "answer": true,
     "why": "Calcium enables cross-bridge activation."
    },
    {
     "l": "D",
     "text": "Works by tetanic contraction.",
     "answer": false,
     "why": "A long refractory period prevents physiological tetanus."
    },
    {
     "l": "E",
     "text": "Is initiated by a single action potential in a cardiomyocyte.",
     "answer": true,
     "why": "A ventricular action potential triggers excitation–contraction coupling."
    }
   ]
  },
  {
   "num": 23,
   "ref": "ID 4537",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Measuring the systolic pressure is useful:",
   "statements": [
    {
     "l": "A",
     "text": "Because it indicates the maximal pressure the vessel walls can withstand.",
     "answer": false,
     "why": "Systolic pressure is not the mechanical failure limit of vessels."
    },
    {
     "l": "B",
     "text": "Because it bears information about the heart inotropy.",
     "answer": true,
     "why": "Cardiac contractility affects stroke volume and systolic BP."
    },
    {
     "l": "C",
     "text": "Because it nicely corresponds to the amount of circulating blood.",
     "answer": false,
     "why": "Blood volume matters but is not uniquely inferred from SBP."
    },
    {
     "l": "D",
     "text": "Because it is related to elasticity of arterial vessel walls.",
     "answer": true,
     "why": "Aortic compliance affects systolic pressure and pulse pressure."
    },
    {
     "l": "E",
     "text": "Because it linearly corresponds to the filtration rate in kidneys.",
     "answer": false,
     "why": "Kidney filtration is not a linear function of SBP."
    }
   ]
  },
  {
   "num": 24,
   "ref": "ID 4180",
   "topic": "Cardiovascular",
   "subtopic": "Cardiac output & heart rate",
   "stem": "Exercise cardiac output in a young, healthy adult (e.g., during very intense activity):",
   "statements": [
    {
     "l": "A",
     "text": "Cannot be estimated because ejection fraction is not known.",
     "answer": false,
     "why": "Exercise cardiac output can be measured or approximated by several methods."
    },
    {
     "l": "B",
     "text": "Is over 20 L/min.",
     "answer": true,
     "why": "Healthy active people may exceed 20 L/min."
    },
    {
     "l": "C",
     "text": "Is less than 20 L/min.",
     "answer": false,
     "why": "Less than 20 L/min is not a universal maximal value."
    },
    {
     "l": "D",
     "text": "Roughly equals 30 L/min.",
     "answer": true,
     "why": "Around 25–30 L/min is possible in trained young adults."
    },
    {
     "l": "E",
     "text": "May be higher than at rest.",
     "answer": true,
     "why": "Cardiac output rises substantially with exertion."
    },
    {
     "l": "F",
     "text": "Cannot be estimated because end-diastolic volume is not known.",
     "answer": false,
     "why": "Neither EDV nor ejection fraction must be known when cardiac output is measured directly."
    }
   ]
  },
  {
   "num": 25,
   "ref": "ID 4179",
   "topic": "Cardiovascular",
   "subtopic": "Cardiac output & heart rate",
   "stem": "Maximal heart rate for people in their twenties:",
   "statements": [
    {
     "l": "A",
     "text": "Is approximately 250 beats/min.",
     "answer": false,
     "why": "Typical estimates are around 190–200 bpm, not 250."
    },
    {
     "l": "B",
     "text": "Is higher compared with older individuals.",
     "answer": true,
     "why": "Predicted maximal HR declines with age."
    },
    {
     "l": "C",
     "text": "Is slightly above 3 beats/sec.",
     "answer": true,
     "why": "3 beats/sec is 180 bpm, close to the maximal range."
    },
    {
     "l": "D",
     "text": "Varies significantly between individuals (by more than 35%).",
     "answer": false,
     "why": "Variation exists, but 35% is much too broad as a normal expectation."
    },
    {
     "l": "E",
     "text": "Is mainly determined by muscle mass.",
     "answer": false,
     "why": "Age and physiology matter more than muscle mass."
    }
   ]
  },
  {
   "num": 26,
   "ref": "ID 4192",
   "topic": "Cardiovascular",
   "subtopic": "Cardiac output & heart rate",
   "stem": "Heart rate and its regularity can be reliably estimated from which evaluations?",
   "statements": [
    {
     "l": "A",
     "text": "Pulse observation",
     "answer": true,
     "why": "Peripheral pulses reflect ventricular beats, except pulse deficit."
    },
    {
     "l": "B",
     "text": "Auscultation of the heart",
     "answer": true,
     "why": "Heart sounds can be counted and rhythm assessed."
    },
    {
     "l": "C",
     "text": "Single-lead ECG",
     "answer": true,
     "why": "A rhythm strip is sufficient for rate and regularity."
    },
    {
     "l": "D",
     "text": "Multi-lead ECG",
     "answer": true,
     "why": "A 12-lead ECG also provides both."
    },
    {
     "l": "E",
     "text": "Inspection of chest movements",
     "answer": false,
     "why": "Chest excursions are too indirect to reliably determine rhythm."
    }
   ]
  },
  {
   "num": 27,
   "ref": "ID 1881",
   "topic": "Cardiovascular",
   "subtopic": "Heart & cardiac cycle",
   "stem": "Main mechanisms involved in cardiac afterload are (select two):",
   "statements": [
    {
     "l": "A",
     "text": "Volume of circulating fluid",
     "answer": false,
     "why": "Volume is more closely related to preload."
    },
    {
     "l": "B",
     "text": "Systemic vascular resistance",
     "answer": true,
     "why": "Higher systemic vascular resistance increases pressure against ejection."
    },
    {
     "l": "C",
     "text": "Stroke volume",
     "answer": false,
     "why": "Stroke volume is affected by afterload but is not itself the primary load."
    },
    {
     "l": "D",
     "text": "Heart rate",
     "answer": false,
     "why": "Rate influences hemodynamics but is not the main definition of afterload."
    },
    {
     "l": "E",
     "text": "Diastolic blood pressure",
     "answer": true,
     "why": "Aortic diastolic pressure helps determine the initial pressure that LV ejection must overcome."
    }
   ]
  },
  {
   "num": 28,
   "ref": "ID 1967",
   "topic": "Cardiovascular",
   "subtopic": "Hemodynamics",
   "stem": "Blood flow in arteries:",
   "statements": [
    {
     "l": "A",
     "text": "Is independent of vessel lumen.",
     "answer": false,
     "why": "Velocity depends on cross-sectional area."
    },
    {
     "l": "B",
     "text": "In principle, the closer a vessel is to the heart, the higher blood-flow speed.",
     "answer": true,
     "why": "The aorta generally has much higher linear blood velocity than the aggregate capillary bed."
    },
    {
     "l": "C",
     "text": "The velocity of blood is slower than velocity of the pulse wave.",
     "answer": true,
     "why": "Pressure waves travel faster than blood itself."
    },
    {
     "l": "D",
     "text": "A smaller amount passes through all open capillaries at any moment than through the aorta.",
     "answer": false,
     "why": "In a steady circulation, total volumetric flow is conserved."
    },
    {
     "l": "E",
     "text": "A bigger amount passes through all open capillaries at any moment than through the aorta.",
     "answer": false,
     "why": "Capillaries in parallel carry roughly the same total systemic flow as the upstream aorta at steady state."
    }
   ]
  },
  {
   "num": 29,
   "ref": "ID 4178",
   "topic": "Cardiovascular",
   "subtopic": "Pressures by location",
   "stem": "The lowest pressure during the cardiac cycle detected in a right ventricle could be:",
   "statements": [
    {
     "l": "A",
     "text": "80 mmHg",
     "answer": false,
     "why": "This is far above normal RV diastolic pressure."
    },
    {
     "l": "B",
     "text": "8 mmHg",
     "answer": true,
     "why": "Single-digit mmHg RV diastolic values are normal."
    },
    {
     "l": "C",
     "text": "−2 mmHg",
     "answer": true,
     "why": "Slight negative gauge pressure can occur."
    },
    {
     "l": "D",
     "text": "Comparable with the lowest pressure in the left ventricle",
     "answer": true,
     "why": "The ventricles can reach similar low diastolic filling pressures."
    },
    {
     "l": "E",
     "text": "Affected by breathing effort (pattern)",
     "answer": true,
     "why": "Intrathoracic pressure varies with breathing."
    }
   ]
  },
  {
   "num": 30,
   "ref": "ID 1874",
   "topic": "Cardiovascular",
   "subtopic": "Pressures by location",
   "stem": "Central venous pressure (CVP):",
   "statements": [
    {
     "l": "A",
     "text": "Can be estimated noninvasively.",
     "answer": true,
     "why": "Jugular venous pressure can indicate CVP."
    },
    {
     "l": "B",
     "text": "Can be roughly estimated noninvasively.",
     "answer": true,
     "why": "A clinical estimate or ultrasound is possible."
    },
    {
     "l": "C",
     "text": "Is not evaluated by the auscultatory method.",
     "answer": true,
     "why": "Korotkoff auscultation is not a CVP technique."
    },
    {
     "l": "D",
     "text": "Is not closely evaluated due to the risks posed to patients.",
     "answer": false,
     "why": "CVP can be measured invasively where clinically indicated."
    },
    {
     "l": "E",
     "text": "Oscillates during the cardiac cycle by approximately 0–30 mmHg.",
     "answer": false,
     "why": "Normal cyclic CVP waves are much smaller than 30 mmHg."
    },
    {
     "l": "F",
     "text": "Oscillates during the cardiac cycle, mainly due to atrial contraction.",
     "answer": true,
     "why": "Right atrial a-waves contribute to the CVP trace."
    }
   ]
  },
  {
   "num": 31,
   "ref": "ID 1542",
   "topic": "Cardiovascular",
   "subtopic": "Heart & cardiac cycle",
   "stem": "The heart:",
   "statements": [
    {
     "l": "A",
     "text": "Is not able to work on O2 debt (working without O2 on a long-term basis).",
     "answer": true,
     "why": "Myocardial ATP demand depends heavily on aerobic metabolism."
    },
    {
     "l": "B",
     "text": "Accumulates cyclically energy into big blood vessels (e.g., aorta) using their elasticity.",
     "answer": true,
     "why": "Elastic arteries store part of the systolic ejection energy."
    },
    {
     "l": "C",
     "text": "Its evolution and development were determined mainly by O2 tissue requirements.",
     "answer": true,
     "why": "Circulatory design is linked to tissue oxygen delivery needs."
    },
    {
     "l": "D",
     "text": "In fact, the heart is the most important factor limiting the level of aerobic metabolism of the whole body.",
     "answer": true,
     "why": "The ability to deliver oxygen depends partly on the heart, although the statement is an oversimplification."
    },
    {
     "l": "E",
     "text": "Its output (CO) correlates linearly with whole-body O2 consumption.",
     "answer": false,
     "why": "Fick’s principle connects oxygen consumption and cardiac output, but the relationship is not universally linear."
    }
   ]
  },
  {
   "num": 35,
   "ref": "ID 4536",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "Diastolic pressure is influenced by:",
   "statements": [
    {
     "l": "A",
     "text": "The amount of intravascular fluid",
     "answer": true,
     "why": "Circulating volume can change filling and pressure."
    },
    {
     "l": "B",
     "text": "Gravity and its direction",
     "answer": true,
     "why": "Hydrostatic gradients depend on height."
    },
    {
     "l": "C",
     "text": "The elasticity of vessel walls",
     "answer": true,
     "why": "Arterial compliance changes diastolic runoff and pressure."
    },
    {
     "l": "D",
     "text": "Cardiac output",
     "answer": true,
     "why": "Flow helps determine arterial pressure."
    },
    {
     "l": "E",
     "text": "Atmospheric pressure (when measured pressure is already referenced to atmosphere)",
     "answer": false,
     "why": "Gauge pressure already subtracts atmospheric pressure."
    }
   ]
  },
  {
   "num": 36,
   "ref": "ID 1965",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "Real blood pressure in arteries:",
   "statements": [
    {
     "l": "A",
     "text": "Attains only two values, systolic and diastolic pressure.",
     "answer": false,
     "why": "Pressure changes continuously over time."
    },
    {
     "l": "B",
     "text": "Attains a range of values between systolic and diastolic pressures even over a single cardiac cycle.",
     "answer": true,
     "why": "The waveform moves between its maxima and minima."
    },
    {
     "l": "C",
     "text": "Could only be measured precisely by a sensor placed in the middle of the bloodstream.",
     "answer": false,
     "why": "Noninvasive techniques can estimate pressure without an intravascular transducer."
    },
    {
     "l": "D",
     "text": "During the cardiac cycle, the highest pressure in aorta must be higher than brachial pressure.",
     "answer": false,
     "why": "Peripheral systolic pressure can equal or exceed central aortic systolic pressure."
    }
   ],
   "note": "Last options reconstructed from distant image; review screenshot before exact text import."
  },
  {
   "num": 41,
   "ref": "ID 1879",
   "topic": "Cardiovascular",
   "subtopic": "Cardiac output & heart rate",
   "stem": "Cardiac output:",
   "statements": [
    {
     "l": "A",
     "text": "Represents blood volume pumped by left ventricle per minute.",
     "answer": true,
     "why": "Cardiac output equals stroke volume times heart rate."
    },
    {
     "l": "B",
     "text": "Could be 6,000 mL/min in a healthy person.",
     "answer": true,
     "why": "6 L/min is within a normal physiological range."
    },
    {
     "l": "C",
     "text": "Could be increased for a few minutes.",
     "answer": true,
     "why": "Cardiac output increases during exercise and stress."
    },
    {
     "l": "D",
     "text": "Is strictly linearly dependent on aerobic metabolic rate.",
     "answer": false,
     "why": "Oxygen consumption and flow are related but not exactly linearly in all states."
    },
    {
     "l": "E",
     "text": "Represents blood volume pumped by right ventricle per minute.",
     "answer": true,
     "why": "In a steady circulation, right and left output are equal."
    }
   ]
  },
  {
   "num": 44,
   "ref": "ID 4563",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "A person has arterial blood pressure 125/75 mmHg:",
   "statements": [
    {
     "l": "A",
     "text": "Pulse pressure is 40 mmHg.",
     "answer": false,
     "why": "125 − 75 = 50 mmHg."
    },
    {
     "l": "B",
     "text": "Mean arterial pressure is approximately 90 mmHg.",
     "answer": true,
     "why": "75 + (50/3) ≈ 92 mmHg, close to 90."
    },
    {
     "l": "C",
     "text": "Diastolic pressure is around 10 kPa.",
     "answer": true,
     "why": "75 mmHg × 0.1333 = 10 kPa."
    },
    {
     "l": "D",
     "text": "Systolic pressure is around 165 cm of water column.",
     "answer": true,
     "why": "125 mmHg ≈ 170 cm H2O; 165 is a rough approximation."
    },
    {
     "l": "E",
     "text": "Mean arterial pressure is between 75 and 125 mmHg.",
     "answer": true,
     "why": "A time-averaged arterial pressure lies between diastolic and systolic values."
    }
   ]
  },
  {
   "num": 53,
   "ref": "ID 626",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "In which regions of the cardiovascular system can blood pressure be estimated?",
   "statements": [
    {
     "l": "A",
     "text": "Major arteries",
     "answer": true,
     "why": "Arterial pressure is widely measured."
    },
    {
     "l": "B",
     "text": "Peripheral veins",
     "answer": true,
     "why": "Peripheral venous pressure can be measured with a venous manometer."
    },
    {
     "l": "C",
     "text": "Central veins",
     "answer": true,
     "why": "CVP can be estimated or directly transduced."
    },
    {
     "l": "D",
     "text": "Cardiac chambers",
     "answer": true,
     "why": "Intracardiac pressure can be measured by catheter."
    },
    {
     "l": "E",
     "text": "Just the brachial or radial artery",
     "answer": false,
     "why": "Pressure is not restricted to the arm arteries."
    }
   ]
  },
  {
   "num": 55,
   "ref": "ID 625",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "Which mechanisms contribute to the genesis of blood pressure?",
   "statements": [
    {
     "l": "A",
     "text": "Gravity",
     "answer": true,
     "why": "Gravity creates hydrostatic differences."
    },
    {
     "l": "B",
     "text": "Respiratory mechanics",
     "answer": true,
     "why": "Breathing changes thoracic pressures and venous return."
    },
    {
     "l": "C",
     "text": "Contraction of the heart",
     "answer": true,
     "why": "The heart generates the pressure gradient driving circulation."
    },
    {
     "l": "D",
     "text": "Contraction of skeletal muscles",
     "answer": true,
     "why": "Skeletal-muscle pumping changes venous return and circulatory pressure."
    },
    {
     "l": "E",
     "text": "Change of vessel lumen",
     "answer": true,
     "why": "Vasoconstriction and dilation affect resistance and pressure."
    }
   ]
  },
  {
   "num": 56,
   "ref": "ID 1634",
   "topic": "Cardiovascular",
   "subtopic": "Hemodynamics",
   "stem": "The elasticity of blood vessels:",
   "statements": [
    {
     "l": "A",
     "text": "Without it, a pulse could not be propagated and evaluated in the radial artery.",
     "answer": true,
     "why": "Arterial elastic deformation is central to propagation of pressure waves, though completely rigid pipes can still transmit pressure changes."
    },
    {
     "l": "B",
     "text": "Determines considerably the average speed of blood in distal vessels, e.g. capillaries.",
     "answer": false,
     "why": "Distal velocity is dominated by total cross-sectional area and flow rather than elasticity alone."
    },
    {
     "l": "C",
     "text": "Without it, blood would not flow in vessels at all.",
     "answer": false,
     "why": "A rigid tube can still conduct flow if a pressure gradient exists."
    },
    {
     "l": "D",
     "text": "Decreases with distance from the heart.",
     "answer": true,
     "why": "Large elastic arteries near the heart differ from muscular arteries downstream."
    },
    {
     "l": "E",
     "text": "Helps transform pressure (potential) energy into the kinetic energy of blood.",
     "answer": true,
     "why": "Elastic recoil sustains flow and converts stored wall energy into blood motion."
    }
   ]
  },
  {
   "num": 57,
   "ref": "ID 1652",
   "topic": "Cardiovascular",
   "subtopic": "Pressures by location",
   "stem": "Blood pressure 30 mmHg could be found in:",
   "statements": [
    {
     "l": "A",
     "text": "Right heart",
     "answer": true,
     "why": "Right-ventricular systolic pressure can approach 30 mmHg."
    },
    {
     "l": "B",
     "text": "Left heart",
     "answer": true,
     "why": "LV pressure passes through 30 mmHg during systole."
    },
    {
     "l": "C",
     "text": "Systemic arteries",
     "answer": true,
     "why": "Pressure in peripheral arteries can reach 30 mmHg in severe hypotension or at some anatomic sites."
    },
    {
     "l": "D",
     "text": "Capillaries",
     "answer": true,
     "why": "Capillary pressure may be near this value, particularly at the arterial end."
    },
    {
     "l": "E",
     "text": "Pulmonary veins (e.g., during forceful expiration)",
     "answer": true,
     "why": "Forceful expiration raises intrathoracic and pulmonary vascular pressure."
    }
   ]
  },
  {
   "num": 58,
   "ref": "ID 1644",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Which BP measurements evaluate diastolic pressure accurately (±10 mmHg)?",
   "statements": [
    {
     "l": "A",
     "text": "Auscultatory method",
     "answer": true,
     "why": "Korotkoff phase V estimates diastolic pressure."
    },
    {
     "l": "B",
     "text": "Oscillometry",
     "answer": false,
     "why": "Automated oscillometry may estimate DBP but the source excludes it from a strict accuracy claim."
    },
    {
     "l": "C",
     "text": "Palpatory measurement",
     "answer": false,
     "why": "Palpation gives systolic threshold, not diastolic pressure."
    },
    {
     "l": "D",
     "text": "Direct (invasive) method",
     "answer": true,
     "why": "An arterial catheter provides direct pressure waveform."
    },
    {
     "l": "E",
     "text": "Inspection",
     "answer": false,
     "why": "Visual inspection alone cannot provide DBP."
    }
   ]
  },
  {
   "num": 59,
   "ref": "ID 1662",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "The auscultatory blood-pressure measurement is less accurate:",
   "statements": [
    {
     "l": "A",
     "text": "If the cuff is not at heart level.",
     "answer": true,
     "why": "Hydrostatic height offsets pressure if cuff is above or below heart."
    },
    {
     "l": "B",
     "text": "If the stethoscope is placed 30 cm from the cuff.",
     "answer": true,
     "why": "Stethoscope must be over the relevant artery under the cuff edge."
    },
    {
     "l": "C",
     "text": "If cuff pressure is released too fast.",
     "answer": true,
     "why": "Rapid deflation can miss the Korotkoff pressure thresholds."
    },
    {
     "l": "D",
     "text": "If the manometer is not at heart level.",
     "answer": false,
     "why": "Gauge height relative to heart does not change the cuff pressure itself."
    },
    {
     "l": "E",
     "text": "If surrounding atmospheric pressure is 50 kPa.",
     "answer": false,
     "why": "A gauge measures pressure relative to the surrounding atmosphere; the difference remains measurable."
    }
   ]
  },
  {
   "num": 60,
   "ref": "ID 1875",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "During a day, arterial blood pressure:",
   "statements": [
    {
     "l": "A",
     "text": "Oscillates between systolic and diastolic.",
     "answer": true,
     "why": "Pressure pulsates on every heartbeat."
    },
    {
     "l": "B",
     "text": "Mean arterial pressure is rather constant (±10 mmHg).",
     "answer": false,
     "why": "MAP changes during sleep, standing, exercise and emotion, often more than 10 mmHg."
    },
    {
     "l": "C",
     "text": "Can be measured by ambulatory monitoring (Holter).",
     "answer": true,
     "why": "Ambulatory monitors record BP throughout 24 hours or longer."
    },
    {
     "l": "D",
     "text": "Is always represented best by a morning resting value.",
     "answer": false,
     "why": "One resting reading does not represent the whole day."
    },
    {
     "l": "E",
     "text": "Can fluctuate more (in mmHg) than central venous pressure.",
     "answer": true,
     "why": "Arterial pressures usually show larger absolute changes than CVP."
    }
   ]
  },
  {
   "num": 61,
   "ref": "ID 1969",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Direct blood-pressure measurement:",
   "statements": [
    {
     "l": "A",
     "text": "Was not used in our laboratory classes.",
     "answer": true,
     "why": "The local teaching lab did not use arterial catheters."
    },
    {
     "l": "B",
     "text": "Its biggest advantage is its precision.",
     "answer": false,
     "why": "Direct methods are precise, but the source key omits this overly universal “biggest” characterization."
    },
    {
     "l": "C",
     "text": "Compared with indirect methods, is used mainly because pressure could be monitored for days.",
     "answer": false,
     "why": "Arterial lines are chosen for real-time accuracy/monitoring, not exclusively multi-day duration."
    },
    {
     "l": "D",
     "text": "If it were not so invasive and risky, it would probably be used more often.",
     "answer": true,
     "why": "Invasiveness and risks limit routine use."
    },
    {
     "l": "E",
     "text": "Reliably measures low pressures (e.g., 60/40 mmHg), unlike indirect methods.",
     "answer": true,
     "why": "Direct arterial pressure can quantify low BP that may be difficult by cuff."
    }
   ]
  },
  {
   "num": 62,
   "ref": "ID 1877",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "Which values can represent physiological blood pressure?",
   "statements": [
    {
     "l": "A",
     "text": "300 mmHg",
     "answer": true,
     "why": "Extreme transient pressures may arise in pathological or unusual exercise settings, though not typical resting pressure."
    },
    {
     "l": "B",
     "text": "30 mmHg",
     "answer": true,
     "why": "30 mmHg is normal in some chambers or capillary compartments."
    },
    {
     "l": "C",
     "text": "5 cm H2O",
     "answer": true,
     "why": "Low venous pressures can be expressed as a few cm H2O."
    },
    {
     "l": "D",
     "text": "−2 cm H2O",
     "answer": true,
     "why": "Gauge pressure can be slightly negative in thoracic veins and chambers."
    },
    {
     "l": "E",
     "text": "133 kPa",
     "answer": false,
     "why": "133 kPa equals ~998 mmHg, not a physiological intravascular gauge pressure."
    },
    {
     "l": "F",
     "text": "0 kPa",
     "answer": true,
     "why": "0 kPa gauge pressure means equal to local atmosphere, possible in some veins."
    }
   ]
  },
  {
   "num": 63,
   "ref": "ID 4194",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Important differences between direct and indirect BP measurement are:",
   "statements": [
    {
     "l": "A",
     "text": "Direct measurement captures instantaneous time-dependent BP variation.",
     "answer": true,
     "why": "A catheter records the entire pressure waveform continuously."
    },
    {
     "l": "B",
     "text": "Direct method is incomparably more precise.",
     "answer": false,
     "why": "Direct measurement is precise but not infinitely or “incomparably” better under all conditions."
    },
    {
     "l": "C",
     "text": "Pressures other than systolic and diastolic can be measured directly.",
     "answer": true,
     "why": "Waveform permits MAP and instantaneous pressure values."
    },
    {
     "l": "D",
     "text": "Sites poorly accessible by indirect methods can be reached and measured directly.",
     "answer": true,
     "why": "An invasive transducer can measure cardiac and central vascular compartments."
    }
   ]
  },
  {
   "num": 64,
   "ref": "ID 4184",
   "topic": "Cardiovascular",
   "subtopic": "Cardiac output & heart rate",
   "stem": "During exercise, increased blood delivery to tissues is achieved mainly by:",
   "statements": [
    {
     "l": "A",
     "text": "Increased cardiac output",
     "answer": true,
     "why": "The heart pumps more blood each minute."
    },
    {
     "l": "B",
     "text": "Increased stroke volume",
     "answer": true,
     "why": "More blood may be ejected per beat."
    },
    {
     "l": "C",
     "text": "Increased heart rate",
     "answer": true,
     "why": "Heart rate rises and increases CO."
    },
    {
     "l": "D",
     "text": "Increased blood volume",
     "answer": false,
     "why": "Blood volume does not acutely need to increase for exercise delivery."
    },
    {
     "l": "E",
     "text": "Decreased blood volume",
     "answer": false,
     "why": "Lower blood volume generally impairs perfusion."
    }
   ]
  },
  {
   "num": 65,
   "ref": "ID 4597",
   "topic": "Cardiovascular",
   "subtopic": "Hemodynamics",
   "stem": "Turbulent blood flow:",
   "statements": [
    {
     "l": "A",
     "text": "Is a physiological issue.",
     "answer": true,
     "why": "Some transient turbulence is physiological, especially at high flow."
    },
    {
     "l": "B",
     "text": "Occurs during blood-pressure measurement.",
     "answer": true,
     "why": "Korotkoff sounds occur when cuff narrowing creates turbulent/unstable flow."
    },
    {
     "l": "C",
     "text": "Can be caused by increased blood-flow velocity.",
     "answer": true,
     "why": "Higher velocity increases Reynolds number."
    },
    {
     "l": "D",
     "text": "Disappears as Reynolds number decreases.",
     "answer": true,
     "why": "Lower Reynolds number favors laminar flow."
    }
   ]
  },
  {
   "num": 67,
   "ref": "ID 633 / 533",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "During auscultatory BP measurement, the cuff should be inflated:",
   "statements": [
    {
     "l": "A",
     "text": "Optimally just once per measurement.",
     "answer": true,
     "why": "Repeated inflation may change local venous conditions; one cycle is sufficient if performed correctly."
    },
    {
     "l": "B",
     "text": "At the same rate as during deflation.",
     "answer": false,
     "why": "Inflation is usually faster than controlled slow deflation."
    },
    {
     "l": "C",
     "text": "Above systolic pressure.",
     "answer": true,
     "why": "The artery must be fully occluded before releasing cuff pressure."
    },
    {
     "l": "D",
     "text": "More slowly than it is supposed to be deflated.",
     "answer": false,
     "why": "There is no requirement to inflate more slowly than deflation."
    },
    {
     "l": "E",
     "text": "At least 100 mmHg above systolic pressure.",
     "answer": false,
     "why": "Inflating 20–30 mmHg above estimated systolic is typical, not +100."
    }
   ]
  },
  {
   "num": 83,
   "ref": "ID 4598",
   "topic": "Cardiovascular",
   "subtopic": "Pressures by location",
   "stem": "Given an aortic pressure of 120/95 mmHg, right-ventricular diastolic pressure of −5 mmHg, and CVP of 0 mmHg, what can we conclude?",
   "statements": [
    {
     "l": "A",
     "text": "CVP is non-physiological.",
     "answer": false,
     "why": "A CVP of 0 mmHg may occur within the physiological range."
    },
    {
     "l": "B",
     "text": "The patient suffers from hypertension.",
     "answer": false,
     "why": "One pressure reading, especially 120/95 mmHg, is not enough to establish a chronic diagnosis; the slide does not select this option."
    },
    {
     "l": "C",
     "text": "The patient suffers from bradycardia.",
     "answer": false,
     "why": "Heart rate is not given, so bradycardia cannot be inferred."
    },
    {
     "l": "D",
     "text": "All parameters could be physiological.",
     "answer": true,
     "why": "The slide accepts these as potentially physiological depending on the measurement conditions."
    },
    {
     "l": "E",
     "text": "Negative pressure in the right ventricle is not physiological.",
     "answer": false,
     "why": "Pressure measured relative to atmosphere can become transiently negative."
    }
   ]
  },
  {
   "num": 84,
   "ref": "ID 4183",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "The sounds of Korotkoff are produced when:",
   "statements": [
    {
     "l": "A",
     "text": "There is a laminar flow of blood.",
     "answer": false,
     "why": "Smooth laminar flow generally does not create Korotkoff sounds."
    },
    {
     "l": "B",
     "text": "The stethoscope is attached to the arm only.",
     "answer": false,
     "why": "Stethoscope placement alone does not create sounds."
    },
    {
     "l": "C",
     "text": "The artery is compressed sufficiently during inflation of the cuff.",
     "answer": true,
     "why": "Partial cuff compression can create disturbed, audible flow."
    },
    {
     "l": "D",
     "text": "The artery is compressed partially enough to cancel laminar flow.",
     "answer": true,
     "why": "Partial compression produces turbulence and wall vibrations."
    },
    {
     "l": "E",
     "text": "There is complete compression of the artery.",
     "answer": false,
     "why": "If no blood passes, no Korotkoff flow sounds occur."
    },
    {
     "l": "F",
     "text": "The artery is compressed sufficiently during deflation of the cuff.",
     "answer": true,
     "why": "With the cuff between systolic and diastolic pressure, flow becomes audible."
    }
   ]
  },
  {
   "num": 85,
   "ref": "ID 1998",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Which of the following methods of blood pressure estimation use a cuff?",
   "statements": [
    {
     "l": "A",
     "text": "Every direct method.",
     "answer": false,
     "why": "Direct intra-arterial measurement uses a catheter, not necessarily a cuff."
    },
    {
     "l": "B",
     "text": "Oscillometry.",
     "answer": true,
     "why": "A cuff detects oscillations transmitted from the artery."
    },
    {
     "l": "C",
     "text": "Auscultatory measurement.",
     "answer": true,
     "why": "The cuff is inflated while Korotkoff sounds are heard."
    },
    {
     "l": "D",
     "text": "Palpatory measurement.",
     "answer": true,
     "why": "A cuff is used while feeling the pulse."
    },
    {
     "l": "E",
     "text": "Ambulatory monitoring (ABPM/Holter).",
     "answer": true,
     "why": "Standard ambulatory monitors automatically inflate a cuff."
    }
   ]
  },
  {
   "num": 86,
   "ref": "ID 1876",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Which phenomenon indicates diastolic pressure during blood pressure measurement?",
   "statements": [
    {
     "l": "A",
     "text": "Disappearance of Korotkoff sounds in the auscultatory method.",
     "answer": true,
     "why": "In most adults, phase V disappearance identifies diastolic BP."
    },
    {
     "l": "B",
     "text": "Disappearance of the pulse at the radial artery in palpatory measurement.",
     "answer": false,
     "why": "This is related to systolic, not diastolic pressure."
    },
    {
     "l": "C",
     "text": "Disappearance of cuff-pressure oscillations in oscillometry.",
     "answer": false,
     "why": "Oscillometric devices estimate pressure from the oscillation envelope."
    },
    {
     "l": "D",
     "text": "Two-thirds of measured mean arterial pressure.",
     "answer": false,
     "why": "There is no universal MAP × 2/3 rule for DBP."
    },
    {
     "l": "E",
     "text": "Two-thirds of measured systolic arterial pressure.",
     "answer": false,
     "why": "This is not a reliable measurement of diastolic BP."
    }
   ]
  },
  {
   "num": 95,
   "ref": "ID 4546",
   "topic": "Cardiovascular",
   "subtopic": "Hemodynamics",
   "stem": "The pressure measured in arterial or venous circulation after a heart has stopped completely (e.g., one minute after), resulting in an equalization of pressures in the whole circulation, is called:",
   "statements": [
    {
     "l": "A",
     "text": "Hemodynamic pressure",
     "answer": false,
     "why": "A general term for pressure created by flowing blood; once the heart stops there is no flow, so this is not the name."
    },
    {
     "l": "B",
     "text": "Mean arterial pressure",
     "answer": false,
     "why": "Mean arterial pressure is the time-average arterial pressure while the heart beats (about 93 mmHg); after cardiac arrest arterial pressure falls far below it."
    },
    {
     "l": "C",
     "text": "Transmural pressure",
     "answer": false,
     "why": "Transmural pressure is inside minus outside pressure across a vessel wall, not the equalized pressure of the whole circulation."
    },
    {
     "l": "D",
     "text": "Mean circulatory filling pressure",
     "answer": true,
     "why": "Mean circulatory filling pressure (about 7 mmHg) is the pressure everywhere in the circulation once flow stops and pressures equalize. It reflects blood volume relative to vascular capacity."
    },
    {
     "l": "E",
     "text": "Hydrostatic pressure",
     "answer": false,
     "why": "Hydrostatic pressure comes from the weight of a fluid column (gravity); it is not this concept."
    }
   ]
  },
  {
   "num": 96,
   "ref": "ID 1968",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Indirect method of BP measurement used in labs:",
   "statements": [
    {
     "l": "A",
     "text": "Is equally precise as the direct method",
     "answer": false,
     "why": "Cuff methods are less precise than direct intra-arterial measurement, which reads the pressure itself."
    },
    {
     "l": "B",
     "text": "Its precision could be depreciated by fast deflation of the cuff",
     "answer": true,
     "why": "Fast deflation lets the cuff pressure drop several mmHg between two beats, so the first or last Korotkoff sound is missed (systolic underestimated, diastolic overestimated)."
    },
    {
     "l": "C",
     "text": "Could provide an information about a pressure waveform during a single heart beat",
     "answer": false,
     "why": "A cuff gives only systolic and diastolic values. A beat-by-beat pressure waveform needs a direct (catheter) or special continuous method."
    },
    {
     "l": "D",
     "text": "Its precision linearly increases by repeating the measurement in one patient (e.g. 10 repetitions versus 3 repetitions)",
     "answer": false,
     "why": "Repeating reduces random error only with the square root of the number of readings, not linearly, and repeated cuffing can itself change BP."
    },
    {
     "l": "E",
     "text": "Its precision could be depreciated by very slow deflation of the cuff",
     "answer": true,
     "why": "Very slow deflation causes venous congestion and discomfort in the arm, which distorts the sounds and tends to raise the readings (especially diastolic)."
    }
   ]
  },
  {
   "num": 100,
   "ref": "ID 1856",
   "topic": "Cardiovascular",
   "subtopic": "BP measurement",
   "stem": "Blood pressure measured 13 cm below the level of the reference point compared to pressure at reference level will be:",
   "statements": [
    {
     "l": "A",
     "text": "Different by approx. 10 mmHg",
     "answer": true,
     "why": "13 cm of blood (density about 1.05) is about 13.7 cm H2O, and 13.6 cm H2O is about 10 mmHg."
    },
    {
     "l": "B",
     "text": "Incomparable",
     "answer": false,
     "why": "Pressures at different heights are comparable; the hydrostatic column (rho x g x h) is simply added."
    },
    {
     "l": "C",
     "text": "Higher, approx. by 13 cm of blood",
     "answer": true,
     "why": "Below the reference point the pressure is higher by the weight of the blood column above it, here 13 cm of blood."
    },
    {
     "l": "D",
     "text": "Higher by approx. 13 cm H2O",
     "answer": true,
     "why": "Blood density is close to water, so 13 cm of blood is roughly 13 cm H2O."
    },
    {
     "l": "E",
     "text": "Higher by approx. 13 cm Hg",
     "answer": false,
     "why": "13 cm Hg would be 130 mmHg, far too much; mercury is 13.6 times denser than blood."
    }
   ]
  },
  {
   "num": 103,
   "ref": "ID 5062",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure regulation",
   "stem": "Which of the following parameters can significantly influence blood pressure?",
   "statements": [
    {
     "l": "A",
     "text": "Fluid infusion",
     "answer": true,
     "why": "Infusion raises blood volume, venous return and cardiac output, which raises BP."
    },
    {
     "l": "B",
     "text": "Excessive sweating",
     "answer": true,
     "why": "Heavy sweating loses volume, which can lower BP."
    },
    {
     "l": "C",
     "text": "Drinks avoided for three days",
     "answer": true,
     "why": "Three days without fluids means dehydration and hypovolemia, which can lower BP."
    },
    {
     "l": "D",
     "text": "Change in body temperature",
     "answer": true,
     "why": "Heat causes skin vasodilation (lower BP); cold causes vasoconstriction (higher BP)."
    },
    {
     "l": "E",
     "text": "Physiological diuresis",
     "answer": false,
     "why": "Physiological diuresis is balanced by intake and has no significant effect on BP."
    }
   ]
  },
  {
   "num": 106,
   "ref": "ID 5824 / ID 5640",
   "topic": "Cardiovascular",
   "subtopic": "Volume status",
   "stem": "A healthy 35-year-old individual has been dehydrated due to limited fluid intake over the past two days. Compared to optimal hydration, which of the following changes is most likely?",
   "statements": [
    {
     "l": "A",
     "text": "Total peripheral resistance is lower",
     "answer": false,
     "why": "Hypovolemia activates the sympathetic system, so peripheral resistance rises rather than falls."
    },
    {
     "l": "B",
     "text": "CVP is higher",
     "answer": false,
     "why": "With less volume, CVP is lower, not higher."
    },
    {
     "l": "C",
     "text": "Preload is higher",
     "answer": false,
     "why": "Less venous return means lower preload."
    },
    {
     "l": "D",
     "text": "BP could be lower",
     "answer": true,
     "why": "If compensation is insufficient, BP falls."
    },
    {
     "l": "E",
     "text": "BP could be the same",
     "answer": true,
     "why": "In mild dehydration the baroreflex (vasoconstriction, tachycardia) can keep BP normal."
    }
   ],
   "note": "5640 is the same question with slightly different wording."
  },
  {
   "num": 107,
   "ref": "ID 5638",
   "topic": "Cardiovascular",
   "subtopic": "Volume & venous pressure",
   "stem": "Drinking 1 L of fresh pure water within 1 minute:",
   "statements": [
    {
     "l": "A",
     "text": "Influences CVP",
     "answer": true,
     "why": "Absorbed water expands blood volume, so venous filling and CVP rise."
    },
    {
     "l": "B",
     "text": "Influences CVP more than arterial BP",
     "answer": true,
     "why": "Veins are compliant reservoirs, so added volume shows mainly as venous pressure; arterial BP is buffered by the baroreflex."
    },
    {
     "l": "C",
     "text": "Influences afterload more than preload",
     "answer": false,
     "why": "Added volume changes preload (venous return) more than afterload."
    },
    {
     "l": "D",
     "text": "Leads to hematocrit drop",
     "answer": true,
     "why": "Absorbed water dilutes the blood, so hematocrit drops (slightly and briefly)."
    }
   ],
   "note": "Absorption takes several minutes, so the effects appear over the following tens of minutes."
  },
  {
   "num": 108,
   "ref": "ID 5860",
   "topic": "Cardiovascular",
   "subtopic": "Blood pressure",
   "stem": "Which conditions are typically associated with narrowed pulse pressure?",
   "statements": [
    {
     "l": "A",
     "text": "Stiff large arteries in the elderly",
     "answer": false,
     "why": "Stiff large arteries widen the pulse pressure (high systolic)."
    },
    {
     "l": "B",
     "text": "Severe hypovolemia",
     "answer": true,
     "why": "Severe hypovolemia lowers stroke volume, which narrows the pulse pressure."
    },
    {
     "l": "C",
     "text": "Low stroke volume",
     "answer": true,
     "why": "Pulse pressure depends mainly on stroke volume, so low SV narrows it."
    },
    {
     "l": "D",
     "text": "Hypotension caused by generalized vasodilation in a person with good cardiac contractility",
     "answer": false,
     "why": "Generalized vasodilation with good contractility lowers diastolic pressure, which widens the pulse pressure."
    }
   ]
  },
  {
   "num": 109,
   "ref": "ID 5624",
   "topic": "Cardiovascular",
   "subtopic": "Cardiac filling",
   "stem": "End-diastolic volume would be decreased by:",
   "statements": [
    {
     "l": "A",
     "text": "Low HR (e.g. 40/min)",
     "answer": false,
     "why": "Low HR prolongs diastole, which allows more filling, so EDV rises."
    },
    {
     "l": "B",
     "text": "Short duration of diastole",
     "answer": true,
     "why": "Short diastole (tachycardia) leaves less time to fill the ventricle."
    },
    {
     "l": "C",
     "text": "High pressure in the thoracic cavity (e.g. 50 mmHg)",
     "answer": true,
     "why": "High intrathoracic pressure (e.g. Valsalva) compresses the great veins and reduces venous return."
    },
    {
     "l": "D",
     "text": "Low pressure in the thoracic cavity (e.g. -15 mmHg)",
     "answer": false,
     "why": "Low (more negative) intrathoracic pressure, as in deep inspiration, enhances venous return."
    }
   ]
  },
  {
   "num": 110,
   "ref": "ID 5621",
   "topic": "Cardiovascular",
   "subtopic": "Hypotension management",
   "stem": "Which of the following noninvasive interventions can be used to improve brain perfusion in hypotensive patients?",
   "statements": [
    {
     "l": "A",
     "text": "Change of body position: laying down flat",
     "answer": true,
     "why": "Lying flat removes the hydrostatic gradient between heart and brain, which improves cerebral perfusion."
    },
    {
     "l": "B",
     "text": "Prone rather than supine position",
     "answer": false,
     "why": "Prone position has no hemodynamic advantage and makes breathing and assessment harder."
    },
    {
     "l": "C",
     "text": "Lower extremities elevation in laying position",
     "answer": true,
     "why": "Raising the legs returns blood from the legs (autotransfusion), which increases venous return and CO."
    },
    {
     "l": "D",
     "text": "Oral fluid intake if the patient is dehydrated and conscious",
     "answer": true,
     "why": "Oral fluids in a conscious, dehydrated patient restore volume."
    },
    {
     "l": "E",
     "text": "Laying position with elevated legs in hypotension due to poor cardiac contractility",
     "answer": false,
     "why": "With poor contractility (cardiogenic cause), extra preload strains the failing heart and can cause pulmonary congestion."
    }
   ]
  },
  {
   "num": 111,
   "ref": "ID 5859",
   "topic": "Cardiovascular",
   "subtopic": "Circulatory shock",
   "stem": "In systemic hypotension, which changes are expected due to \"centralization of circulation\"?",
   "statements": [
    {
     "l": "A",
     "text": "Preferential preservation of blood flow to brain and heart",
     "answer": true,
     "why": "Sympathetic vasoconstriction spares the autoregulated brain and heart."
    },
    {
     "l": "B",
     "text": "Relative preservation of kidney perfusion compared to skin and gut",
     "answer": true,
     "why": "Kidney perfusion is relatively preserved by autoregulation compared with skin and gut, which are strongly constricted."
    },
    {
     "l": "C",
     "text": "Increased risk of ischemic damage in skin, GIT and skeletal muscles if hypotension persists",
     "answer": true,
     "why": "Prolonged vasoconstriction causes ischemic damage in skin, GIT and skeletal muscle."
    },
    {
     "l": "D",
     "text": "Immediate full recovery of peripheral tissues once BP is normalized",
     "answer": false,
     "why": "Recovery is not immediate; ischemic and reperfusion injury take time to heal."
    }
   ]
  },
  {
   "num": 112,
   "ref": "ID 4559",
   "topic": "Cardiovascular",
   "subtopic": "Cardiac output & heart rate",
   "stem": "Consider an athletic 70-kg man during heavy exercise with the following parameters: oxygen consumption 4 L/min, arterial oxygen 190 mL/L, mixed venous blood oxygen 30 mL/L of blood, heart rate 180 beats/min. Which statement is correct?",
   "statements": [
    {
     "l": "A",
     "text": "Cardiac output is 12 L/min",
     "answer": false,
     "why": "By Fick, CO = VO2 / (CaO2 - CvO2) = 4000 / 160 mL/L = 25 L/min, not 12."
    },
    {
     "l": "B",
     "text": "Cardiac output is 25 L/min",
     "answer": true,
     "why": "4 L/min / (190 - 30 mL/L) = 25 L/min."
    },
    {
     "l": "C",
     "text": "Stroke volume is 67 mL",
     "answer": false,
     "why": "67 mL x 180 = 12 L/min, which does not match CO of 25 L/min."
    },
    {
     "l": "D",
     "text": "Stroke volume is 138 mL",
     "answer": true,
     "why": "SV = CO / HR = 25000 / 180, about 139 mL."
    },
    {
     "l": "E",
     "text": "Stroke volume cannot be calculated",
     "answer": false,
     "why": "Once CO is known, SV = CO / HR can be calculated."
    },
    {
     "l": "F",
     "text": "Cardiac output cannot be calculated",
     "answer": false,
     "why": "All Fick data (VO2 and arteriovenous O2 difference) are given, so CO can be calculated."
    }
   ]
  },
  {
   "num": 113,
   "ref": "ID 5789",
   "topic": "Cardiovascular",
   "subtopic": "Hemodynamics",
   "stem": "Consider condition of constant cardiac output: if arteriolar vasoconstriction occurs, blood pressure rises:",
   "statements": [
    {
     "l": "A",
     "text": "In vessels parallel to networks with reduced lumen",
     "answer": true,
     "why": "With constant CO, flow is diverted to parallel beds, so pressure in vessels parallel to the constricted region rises."
    },
    {
     "l": "B",
     "text": "In vessels behind the region with reduced lumen",
     "answer": false,
     "why": "Downstream (behind) the constriction, pressure falls because of the extra pressure drop across it."
    },
    {
     "l": "C",
     "text": "In vessels in front of the region with reduced lumen",
     "answer": true,
     "why": "Upstream (in front of) the constriction, pressure rises."
    },
    {
     "l": "D",
     "text": "In all vessels",
     "answer": false,
     "why": "Pressure falls downstream, so it does not rise in all vessels."
    }
   ]
  },
  {
   "num": 114,
   "ref": "ID 5642 / ID 5825",
   "topic": "Cardiovascular",
   "subtopic": "Contractility",
   "stem": "Positive inotropic effect of the sympathetic nervous system on the heart increases the:",
   "statements": [
    {
     "l": "A",
     "text": "End-diastolic volume",
     "answer": false,
     "why": "Inotropy does not increase filling; EDV is unchanged or slightly lower."
    },
    {
     "l": "B",
     "text": "End-systolic volume",
     "answer": false,
     "why": "Stronger contraction empties the ventricle more completely, so ESV decreases."
    },
    {
     "l": "C",
     "text": "Stroke volume",
     "answer": true,
     "why": "SV = EDV - ESV increases."
    },
    {
     "l": "D",
     "text": "Heart rate",
     "answer": false,
     "why": "Heart rate is a chronotropic effect, not inotropic."
    },
    {
     "l": "E",
     "text": "Ejection fraction",
     "answer": true,
     "why": "EF = SV / EDV increases."
    }
   ],
   "note": "5825 is the same question in the SIM_2 set."
  },
  {
   "num": 115,
   "ref": "ID 5613",
   "topic": "Cardiovascular",
   "subtopic": "Heart rate regulation",
   "stem": "HR commonly increases in response to:",
   "statements": [
    {
     "l": "A",
     "text": "Drop of baroreceptor stimulation",
     "answer": true,
     "why": "Less baroreceptor firing means less vagal and more sympathetic tone, so HR rises."
    },
    {
     "l": "B",
     "text": "BP increase",
     "answer": false,
     "why": "A BP increase triggers the baroreflex, which slows HR."
    },
    {
     "l": "C",
     "text": "Venous return increase",
     "answer": true,
     "why": "Atrial stretch from higher venous return raises HR (Bainbridge reflex)."
    },
    {
     "l": "D",
     "text": "Fear",
     "answer": true,
     "why": "Fear activates the sympathetic system, which raises HR."
    }
   ]
  },
  {
   "num": 119,
   "ref": "ID 5858",
   "topic": "Cardiovascular",
   "subtopic": "Oxygen delivery",
   "stem": "In a patient with low arterial blood pressure and decreased tissue blood flow, which of the following changes in tissue oxygenation and venous blood parameters do you expect if metabolic demand remains unchanged?",
   "statements": [
    {
     "l": "A",
     "text": "Increased arterial O2 content",
     "answer": false,
     "why": "The lungs work normally, so arterial O2 content is unchanged."
    },
    {
     "l": "B",
     "text": "Increased tissue O2 extraction",
     "answer": true,
     "why": "With lower flow, tissues extract more O2 from each unit of blood."
    },
    {
     "l": "C",
     "text": "Decreased venous oxygen saturation (SvO2)",
     "answer": true,
     "why": "More extraction lowers mixed venous saturation."
    },
    {
     "l": "D",
     "text": "Elevated lactate due to anaerobic metabolism",
     "answer": true,
     "why": "Insufficient O2 supply shifts cells toward anaerobic glycolysis, which produces lactate."
    },
    {
     "l": "E",
     "text": "Longer diffusion path for both O2 and CO2 in tissue",
     "answer": true,
     "why": "Fewer perfused capillaries lengthen the diffusion distances in tissue."
    }
   ]
  },
  {
   "num": 120,
   "ref": "Past paper (JINE)",
   "topic": "Cardiovascular",
   "subtopic": "Hypotension causes",
   "stem": "Your patient is severely hypotensive. What could be the reason?",
   "statements": [
    {
     "l": "A",
     "text": "Cardiac output impaired",
     "answer": true,
     "why": "BP = CO x TPR, so impaired output lowers BP."
    },
    {
     "l": "B",
     "text": "Blood volume change",
     "answer": true,
     "why": "Hypovolemia lowers venous return and BP."
    },
    {
     "l": "C",
     "text": "Increased peripheral vascular resistance",
     "answer": false,
     "why": "Increased resistance raises BP."
    },
    {
     "l": "D",
     "text": "Change of blood viscosity by drop of HCT from 45 to 35% with blood volume not affected",
     "answer": false,
     "why": "A drop of Hct from 45 to 35% lowers viscosity only slightly and is compensated."
    },
    {
     "l": "E",
     "text": "Low aortic elasticity",
     "answer": false,
     "why": "Low aortic elasticity raises systolic pressure (widens pulse pressure) rather than causing hypotension."
    }
   ]
  },
  {
   "num": 121,
   "ref": "Past paper (JINE)",
   "topic": "Cardiovascular",
   "subtopic": "Hypotension causes",
   "stem": "If the finding of low BP is not accompanied by a rise of HR, the reason could be in:",
   "statements": [
    {
     "l": "A",
     "text": "Low blood volume",
     "answer": false,
     "why": "Hypovolemia normally triggers reflex tachycardia."
    },
    {
     "l": "B",
     "text": "Impaired conductive system of the heart",
     "answer": true,
     "why": "A conduction block can stop HR rising despite the baroreflex."
    },
    {
     "l": "C",
     "text": "Impaired generation of action potentials in the heart",
     "answer": true,
     "why": "If the SA node cannot generate faster APs, HR cannot rise."
    },
    {
     "l": "D",
     "text": "Impaired contractility",
     "answer": false,
     "why": "Weak contractility usually comes with compensatory tachycardia."
    },
    {
     "l": "E",
     "text": "Drop of peripheral resistance",
     "answer": false,
     "why": "Vasodilation triggers reflex tachycardia."
    }
   ]
  },
  {
   "num": 123,
   "ref": "Past paper (JINE)",
   "topic": "Cardiovascular",
   "subtopic": "Sympathetic response",
   "stem": "Increased blood pressure and heart rate could be a consequence of:",
   "statements": [
    {
     "l": "A",
     "text": "Hypoxia",
     "answer": true,
     "why": "Hypoxia triggers the chemoreflex and sympathetic activation."
    },
    {
     "l": "B",
     "text": "Blood loss 100 mL",
     "answer": true,
     "why": "A small loss (100 mL) does not lower BP; the stress of bleeding can raise HR and BP."
    },
    {
     "l": "C",
     "text": "Blood loss 2000 mL",
     "answer": false,
     "why": "A 2000 mL loss causes hypotension with tachycardia."
    },
    {
     "l": "D",
     "text": "Pain",
     "answer": true,
     "why": "Pain activates the sympathetic system."
    }
   ]
  },
  {
   "num": 125,
   "ref": "Past paper (JINE)",
   "topic": "Cardiovascular",
   "subtopic": "Venous return",
   "stem": "Inspiration increases:",
   "statements": [
    {
     "l": "A",
     "text": "CVP",
     "answer": false,
     "why": "More negative intrathoracic pressure lowers CVP."
    },
    {
     "l": "B",
     "text": "End-diastolic volume",
     "answer": true,
     "why": "Higher venous return to the right heart increases right ventricular end-diastolic volume."
    },
    {
     "l": "C",
     "text": "The pressure in the right atrium",
     "answer": false,
     "why": "Right atrial pressure falls."
    },
    {
     "l": "D",
     "text": "Intra-alveolar pressure",
     "answer": false,
     "why": "Intra-alveolar pressure falls below atmospheric during inspiration."
    },
    {
     "l": "E",
     "text": "Intrapleural pressure",
     "answer": false,
     "why": "Intrapleural pressure becomes more negative."
    }
   ],
   "note": "Statement B refers to the right ventricle."
  }
 ],
 "DR ABC": [
  {
   "num": 104,
   "ref": "ID 5251",
   "topic": "DR ABC",
   "subtopic": "Perfusion assessment",
   "stem": "Which parameters inform us about sufficient peripheral perfusion?",
   "statements": [
    {
     "l": "A",
     "text": "Mean arterial pressure over 90 mmHg",
     "answer": true,
     "why": "A mean arterial pressure above 90 mmHg gives an adequate perfusion pressure for peripheral tissues."
    },
    {
     "l": "B",
     "text": "Capillary refill time 4 s",
     "answer": false,
     "why": "A capillary refill time of 4 s is prolonged (normal under 2 s), a sign of poor peripheral perfusion."
    },
    {
     "l": "C",
     "text": "CVP 5 mmHg",
     "answer": false,
     "why": "CVP 5 mmHg is a normal filling pressure, but it describes preload and volume, not peripheral perfusion."
    },
    {
     "l": "D",
     "text": "CVP 25 mmHg",
     "answer": false,
     "why": "CVP 25 mmHg is very high (heart failure or overload) and says nothing good about perfusion."
    }
   ]
  },
  {
   "num": 105,
   "ref": "Past paper (JINE)",
   "topic": "DR ABC",
   "subtopic": "Condition assessment (triage)",
   "stem": "Do the \"condition assessment\" for the following patient (choose red, yellow or green and a corresponding reason; more than one could be correct): 30-year-old conscious man in hot weather, feels dizzy, dry lips, sweating, red skin, no shortness of breath, RR 22/min, HR 120/min, regular pulse on radial artery, BP 90/60.",
   "statements": [
    {
     "l": "A",
     "text": "Green because conscious, no shortness of breath, regular pulse on radial artery",
     "answer": false,
     "why": "Not green: dizziness, dehydration signs, tachycardia and low BP mean he is not stable."
    },
    {
     "l": "B",
     "text": "Yellow because of higher respiratory rate at rest",
     "answer": false,
     "why": "RR 22/min is only mildly raised; the key does not accept it as the reason for yellow."
    },
    {
     "l": "C",
     "text": "Yellow because of dizziness and signs of dehydration",
     "answer": true,
     "why": "Dizziness with dry lips and sweating in hot weather means dehydration or heat stress, so yellow (needs attention) is the right category and reason."
    },
    {
     "l": "D",
     "text": "Yellow because of high HR at rest",
     "answer": false,
     "why": "Per the key, the tachycardia is a consequence of the dehydration; the category is based on the clinical picture (dizziness, dehydration), not on HR alone."
    },
    {
     "l": "E",
     "text": "Red because of low BP",
     "answer": false,
     "why": "Not red: he is conscious with a regular radial pulse and BP 90/60; red is for life-threatening findings."
    }
   ]
  },
  {
   "num": 117,
   "ref": "ID 5614",
   "topic": "DR ABC",
   "subtopic": "Hypotension & bradycardia",
   "stem": "An 80-year-old man has fainted. On examination, in the supine position, he is very pale, responsive to pain, with RR 22/min, HR 35/min, BP 85/45 mmHg, and CRT 4 seconds. Choose the correct statement(s):",
   "statements": [
    {
     "l": "A",
     "text": "The patient should benefit from legs elevation",
     "answer": false,
     "why": "The hypotension comes from bradycardia (CO = HR x SV); raising the legs adds little."
    },
    {
     "l": "B",
     "text": "Venous return in the supine position is better than in the sitting position in this situation",
     "answer": true,
     "why": "Supine position removes hydrostatic pooling, so venous return is better than when sitting."
    },
    {
     "l": "C",
     "text": "There is no evidence of a sympathetic compensatory reaction",
     "answer": false,
     "why": "Pallor and CRT of 4 s show vasoconstriction, which is evidence of sympathetic compensation."
    },
    {
     "l": "D",
     "text": "Pharmacological inhibition of the vagus nerve (or parasympathetic activity) could increase cardiac output",
     "answer": true,
     "why": "Blocking the vagus (e.g. atropine) raises HR and therefore CO."
    },
    {
     "l": "E",
     "text": "The assessment of this man is classified as \"in danger\" (yellow)",
     "answer": false,
     "why": "Responsive only to pain with shock-level BP means red (critical), not yellow."
    }
   ]
  },
  {
   "num": 118,
   "ref": "ID 5629",
   "topic": "DR ABC",
   "subtopic": "SBAR communication",
   "stem": "This question deals with SBAR communication skills. Choose the best expression of the main problem of the given patient: 40-year-old woman on admission, alert, cannot speak for nearly permanent cough, cyanotic, looks stressed, HR 135/min, BP 140/90, CRT 2 s.",
   "statements": [
    {
     "l": "A",
     "text": "Alert coughing person",
     "answer": false,
     "why": "This misses the cyanosis."
    },
    {
     "l": "B",
     "text": "Alert cyanotic and tachycardic person",
     "answer": false,
     "why": "This misses the main problem: the cough that stops her from speaking."
    },
    {
     "l": "C",
     "text": "Permanently coughing cyanotic person",
     "answer": true,
     "why": "Permanent cough with cyanosis is the main problem (airway and breathing)."
    },
    {
     "l": "D",
     "text": "Coughing person with tachycardia and high BP",
     "answer": false,
     "why": "Tachycardia and BP 140/90 are secondary findings."
    }
   ]
  },
  {
   "num": 122,
   "ref": "ID 5631",
   "topic": "DR ABC",
   "subtopic": "SBAR communication",
   "stem": "This question deals with SBAR communication skills. Choose the best statement (just one) representing the main problem of the given patient: 80-year-old woman on admission, pain responsive, RR 25, red hot skin, t 39 °C, pulse on radial artery absent, pulse on carotid regular, HR 135/min, BP 70/40, CRT 4 s.",
   "statements": [
    {
     "l": "A",
     "text": "A person with high temperature and low BP",
     "answer": false,
     "why": "This misses the reduced consciousness."
    },
    {
     "l": "B",
     "text": "A person responsive only to pain, hypotensive (BP 70/40) with fever",
     "answer": true,
     "why": "It captures consciousness (responsive only to pain), shock-level BP and fever."
    },
    {
     "l": "C",
     "text": "A person with tachycardia, hypotension and vasodilation",
     "answer": false,
     "why": "Vasodilation is not the main problem stated."
    },
    {
     "l": "D",
     "text": "Tachypnoic, tachycardic and hypotensive person",
     "answer": false,
     "why": "This omits the altered consciousness."
    }
   ]
  },
  {
   "num": 124,
   "ref": "Past paper (JINE)",
   "topic": "DR ABC",
   "subtopic": "Condition assessment (triage)",
   "stem": "Do the \"condition assessment\" for the following patient (choose red, yellow or green and a good reason; more than one could be correct): 50-year-old woman in laying position, alert, oriented, but very weak, no breathing difficulty, RR 22/min, pale skin, strong vaginal bleeding for 2 days, HR 135/min, BP 80/50, CRT 4 s.",
   "statements": [
    {
     "l": "A",
     "text": "Yellow because of strong vaginal bleeding for 2 days",
     "answer": false,
     "why": "Heavy bleeding with shock means red, not yellow."
    },
    {
     "l": "B",
     "text": "Yellow because of HR 135/min at rest",
     "answer": false,
     "why": "This is red, not yellow."
    },
    {
     "l": "C",
     "text": "Yellow because of low BP",
     "answer": false,
     "why": "This is red, not yellow."
    },
    {
     "l": "D",
     "text": "Red because of low BP in a heavily bleeding person",
     "answer": true,
     "why": "Hypotension with tachycardia (shock index 135/80, about 1.7) in a bleeding patient means red."
    }
   ]
  }
 ]
};
