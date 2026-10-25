/* physiology-ranges.js — Ranges game data (question data only; UI lives in index.html).
 * Built from cardio_qbank.json (Guyton & Hall 14e primary, Costanzo 6e / web where marked).
 * labs: normal ranges dragged on a scale; alt = other accepted ranges.
 * map: pressures by location; accept = [min, max] marked correct for each field. */
window.PHYSIO_RANGES = {
 "labs": [
  {
   "id": "na",
   "label": "Sodium (Na⁺)",
   "group": "Electrolytes & acid–base",
   "lo": 135,
   "hi": 145,
   "typical": 142,
   "unit": "mmol/L",
   "step": 1,
   "answer": "142 mmol/L (range 135–145)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mmol/L",
    "mg/dL",
    "g/dL",
    "nmol/L"
   ],
   "terms": [
    "Na"
   ]
  },
  {
   "id": "k",
   "label": "Potassium (K⁺)",
   "group": "Electrolytes & acid–base",
   "lo": 3.5,
   "hi": 5.3,
   "typical": 4.2,
   "unit": "mmol/L",
   "step": 0.1,
   "answer": "4.2 mmol/L (range 3.5–5.3)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mmol/L",
    "mg/dL",
    "g/L",
    "nmol/L"
   ],
   "terms": [
    "K"
   ]
  },
  {
   "id": "cl",
   "label": "Chloride (Cl⁻)",
   "group": "Electrolytes & acid–base",
   "lo": 98,
   "hi": 108,
   "typical": 106,
   "unit": "mmol/L",
   "step": 1,
   "answer": "106 mmol/L (range 98–108)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mmol/L",
    "mg/dL",
    "g/dL",
    "nmol/L"
   ],
   "terms": [
    "Cl"
   ]
  },
  {
   "id": "hco3",
   "label": "Bicarbonate (HCO₃⁻)",
   "group": "Electrolytes & acid–base",
   "lo": 22,
   "hi": 29,
   "typical": 24,
   "unit": "mmol/L",
   "step": 1,
   "answer": "24 mmol/L (range 22–29)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mmol/L",
    "mg/dL",
    "nmol/L",
    "g/L"
   ],
   "terms": [
    "HCO3"
   ]
  },
  {
   "id": "h",
   "label": "Hydrogen ion (H⁺)",
   "group": "Electrolytes & acid–base",
   "lo": 30,
   "hi": 50,
   "typical": 40,
   "unit": "nmol/L",
   "step": 1,
   "answer": "40 nmol/L (range 30–50)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "nmol/L",
    "mmol/L",
    "mg/dL",
    "g/L"
   ],
   "terms": [
    "pH"
   ]
  },
  {
   "id": "ph_a",
   "label": "Arterial pH",
   "group": "Electrolytes & acid–base",
   "lo": 7.25,
   "hi": 7.45,
   "typical": 7.4,
   "unit": "",
   "step": 0.01,
   "answer": "7.4 (range 7.25–7.45)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 6.8,
   "ceil": 7.8,
   "note": "Guyton's table prints 7.25–7.45; most clinical references use 7.35–7.45. Both are accepted.",
   "alt": [
    [
     7.35,
     7.45
    ]
   ],
   "units": [
    "no unit",
    "mmol/L",
    "nmol/L",
    "mmHg"
   ],
   "terms": [
    "pH"
   ]
  },
  {
   "id": "ph_v",
   "label": "Venous pH",
   "group": "Electrolytes & acid–base",
   "lo": 7.32,
   "hi": 7.42,
   "typical": 7.37,
   "unit": "",
   "step": 0.01,
   "answer": "7.37 (range 7.32–7.42)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 6.8,
   "ceil": 7.8,
   "units": [
    "no unit",
    "mmol/L",
    "nmol/L",
    "mmHg"
   ],
   "terms": [
    "pH"
   ]
  },
  {
   "id": "ca_i",
   "label": "Ionized calcium (Ca²⁺)",
   "group": "Electrolytes & acid–base",
   "lo": 4.65,
   "hi": 5.28,
   "typical": 5.0,
   "unit": "mg/dL",
   "step": 0.01,
   "answer": "5.0 mg/dL (range 4.65–5.28) ≈ 1.2 mmol/L ≈ 2.4 mEq/L",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mg/dL",
    "g/dL",
    "nmol/L",
    "mEq/mL"
   ],
   "terms": [
    "Ca"
   ]
  },
  {
   "id": "ca_t",
   "label": "Total calcium",
   "group": "Electrolytes & acid–base",
   "lo": 8.5,
   "hi": 10.5,
   "typical": 10.0,
   "unit": "mg/dL",
   "step": 0.1,
   "answer": "10.0 mg/dL (range 8.5–10.5)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mg/dL",
    "g/dL",
    "nmol/L",
    "µg/L"
   ],
   "terms": [
    "Ca",
    "Albumin"
   ]
  },
  {
   "id": "ag",
   "label": "Anion gap",
   "group": "Electrolytes & acid–base",
   "lo": 7,
   "hi": 16,
   "typical": 12,
   "unit": "mEq/L",
   "step": 1,
   "answer": "12 mEq/L (range 7–16); anion gap = Na⁺ − Cl⁻ − HCO₃⁻",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mEq/L",
    "mg/dL",
    "g/dL",
    "%"
   ],
   "terms": [
    "AG"
   ]
  },
  {
   "id": "osm",
   "label": "Plasma osmolarity",
   "group": "Electrolytes & acid–base",
   "lo": 275,
   "hi": 300,
   "typical": 282,
   "unit": "mOsm/L",
   "step": 1,
   "answer": "282 mOsm/L (range 275–300)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mOsm/L",
    "mg/dL",
    "g/L",
    "mmHg"
   ],
   "terms": [
    "Osm"
   ]
  },
  {
   "id": "sao2",
   "label": "Arterial O₂ saturation",
   "group": "Blood gases",
   "lo": 95,
   "hi": 99,
   "typical": 98,
   "unit": "%",
   "step": 1,
   "answer": "98% (range 95–99%)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "ceil": 100,
   "units": [
    "%",
    "mmHg",
    "ml/dL",
    "mmol/L"
   ],
   "terms": [
    "SaO2",
    "PaO2"
   ]
  },
  {
   "id": "pao2",
   "label": "Arterial PO₂",
   "group": "Blood gases",
   "lo": 80,
   "hi": 100,
   "typical": 90,
   "unit": "mmHg",
   "step": 1,
   "answer": "90 mmHg (range 80–100)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "note": "Costanzo 6e appendix gives 100 mmHg.",
   "units": [
    "mmHg",
    "%",
    "ml/dL",
    "mmol/L"
   ],
   "terms": [
    "PaO2",
    "SaO2"
   ]
  },
  {
   "id": "pvo2",
   "label": "Venous PO₂",
   "group": "Blood gases",
   "lo": 25,
   "hi": 40,
   "typical": 40,
   "unit": "mmHg",
   "step": 1,
   "answer": "40 mmHg (range 25–40)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mmHg",
    "%",
    "ml/dL",
    "mmol/L"
   ],
   "terms": [
    "PvO2"
   ]
  },
  {
   "id": "paco2",
   "label": "Arterial PCO₂",
   "group": "Blood gases",
   "lo": 35,
   "hi": 45,
   "typical": 40,
   "unit": "mmHg",
   "step": 1,
   "answer": "40 mmHg (range 35–45)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mmHg",
    "%",
    "ml/dL",
    "mmol/L"
   ],
   "terms": [
    "PaCO2"
   ]
  },
  {
   "id": "pvco2",
   "label": "Venous PCO₂",
   "group": "Blood gases",
   "lo": 41,
   "hi": 51,
   "typical": 45,
   "unit": "mmHg",
   "step": 1,
   "answer": "45 mmHg (range 41–51)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "note": "Costanzo 6e gives 46 mmHg.",
   "units": [
    "mmHg",
    "%",
    "ml/dL",
    "mmol/L"
   ],
   "terms": [
    "PaCO2"
   ]
  },
  {
   "id": "alb",
   "label": "Albumin",
   "group": "Proteins & glucose",
   "lo": 3.5,
   "hi": 5.5,
   "typical": 4.5,
   "unit": "g/dL",
   "step": 0.1,
   "answer": "4.5 g/dL (range 3.5–5.5)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "g/dL",
    "mg/dL",
    "µg/dL",
    "mmol/L"
   ],
   "terms": [
    "Albumin"
   ]
  },
  {
   "id": "tp",
   "label": "Total protein",
   "group": "Proteins & glucose",
   "lo": 6.0,
   "hi": 8.0,
   "typical": 7.0,
   "unit": "g/dL",
   "step": 0.1,
   "answer": "7.0 g/dL (range 6.0–8.0)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "g/dL",
    "mg/dL",
    "µg/dL",
    "mmol/L"
   ],
   "terms": [
    "Albumin"
   ]
  },
  {
   "id": "glu",
   "label": "Glucose (fasting)",
   "group": "Proteins & glucose",
   "lo": 70,
   "hi": 115,
   "typical": 90,
   "unit": "mg/dL",
   "step": 1,
   "answer": "90 mg/dL (range 70–115)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "units": [
    "mg/dL",
    "g/dL",
    "µg/dL",
    "mEq/L"
   ],
   "terms": [
    "Glucose"
   ]
  },
  {
   "id": "hct_m",
   "label": "Hematocrit, men",
   "group": "Blood cells",
   "lo": 39,
   "hi": 49,
   "typical": 42,
   "unit": "%",
   "step": 1,
   "answer": "Men 42% (39–49%); women 38% (35–45%)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "ceil": 100,
   "note": "Same averages in Guyton ch.14, p.179.",
   "units": [
    "%",
    "g/dL",
    "fL",
    "× 10⁶/µL"
   ],
   "terms": [
    "Hct"
   ]
  },
  {
   "id": "hct_f",
   "label": "Hematocrit, women",
   "group": "Blood cells",
   "lo": 35,
   "hi": 45,
   "typical": 38,
   "unit": "%",
   "step": 1,
   "answer": "Men 42% (39–49%); women 38% (35–45%)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "ceil": 100,
   "note": "Same averages in Guyton ch.14, p.179.",
   "units": [
    "%",
    "g/dL",
    "fL",
    "× 10⁶/µL"
   ],
   "terms": [
    "Hct"
   ]
  },
  {
   "id": "hb_m",
   "label": "Hemoglobin, men",
   "group": "Blood cells",
   "lo": 13.5,
   "hi": 17.5,
   "typical": 15,
   "unit": "g/dL",
   "step": 0.5,
   "answer": "Men 15 g/dL (13.5–17.5); women 14 g/dL (12–16)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "note": "Same averages in Guyton ch.33, p.439.",
   "units": [
    "g/dL",
    "%",
    "mg/dL",
    "fL"
   ],
   "terms": [
    "Hb"
   ]
  },
  {
   "id": "hb_f",
   "label": "Hemoglobin, women",
   "group": "Blood cells",
   "lo": 12,
   "hi": 16,
   "typical": 14,
   "unit": "g/dL",
   "step": 0.5,
   "answer": "Men 15 g/dL (13.5–17.5); women 14 g/dL (12–16)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "note": "Same averages in Guyton ch.33, p.439.",
   "units": [
    "g/dL",
    "%",
    "mg/dL",
    "fL"
   ],
   "terms": [
    "Hb"
   ]
  },
  {
   "id": "rbc",
   "label": "Red blood cell count",
   "group": "Blood cells",
   "lo": 4.3,
   "hi": 5.7,
   "typical": 5.0,
   "unit": "× 10⁶/µL",
   "step": 0.1,
   "answer": "Men ≈ 5.5 × 10⁶/µL, women ≈ 4.7 × 10⁶/µL (range 4.3–5.7 × 10⁶/µL)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "note": "The table prints '× 10⁸/µL', which is a misprint; Guyton ch.33, p.439 gives 5,200,000/mm³ (men) and 4,700,000/mm³ (women), i.e. × 10⁶/µL.",
   "units": [
    "× 10⁶/µL",
    "× 10³/µL",
    "%",
    "g/dL"
   ],
   "terms": [
    "RBC"
   ]
  },
  {
   "id": "mcv",
   "label": "MCV",
   "group": "Blood cells",
   "lo": 80,
   "hi": 100,
   "typical": 90,
   "unit": "fL",
   "step": 1,
   "answer": "90 fL (range 80–100)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "note": "Guyton ch.33, p.439: average RBC volume 90–95 µm³.",
   "units": [
    "fL",
    "pg",
    "g/dL",
    "µm"
   ],
   "terms": [
    "MCV",
    "MCH",
    "MCHC"
   ]
  },
  {
   "id": "mch",
   "label": "MCH",
   "group": "Blood cells",
   "lo": 28,
   "hi": 36,
   "typical": 30,
   "unit": "pg",
   "step": 1,
   "answer": "MCH = Hb (g/L) / RBC (× 10¹²/L) → pg. Normal ≈ 28–36 pg (≈ 30 pg).",
   "source": "Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/",
   "floor": 0,
   "note": "Neither book gives MCH; range from web source (ranges vary between labs).",
   "units": [
    "pg",
    "fL",
    "g/dL",
    "mg"
   ],
   "terms": [
    "MCH",
    "MCV",
    "MCHC"
   ]
  },
  {
   "id": "mchc",
   "label": "MCHC",
   "group": "Blood cells",
   "lo": 31,
   "hi": 36,
   "typical": 34,
   "unit": "g/dL",
   "step": 0.5,
   "answer": "MCHC = Hb (g/dL) / Hct (L/L) → g/dL. Normal ≈ 34 g/dL (range ≈ 31–36 g/dL).",
   "source": "Guyton & Hall 14e, ch.33, p.439 (RBCs concentrate Hb up to ≈ 34 g/100 ml of cells)",
   "floor": 0,
   "note": "Formula and range: Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/",
   "units": [
    "g/dL",
    "pg",
    "fL",
    "mg/dL"
   ],
   "terms": [
    "MCHC",
    "MCH"
   ]
  },
  {
   "id": "wbc",
   "label": "White blood cells, total",
   "group": "Blood cells",
   "lo": 4.5,
   "hi": 11.0,
   "typical": 7,
   "unit": "× 10³/µL",
   "step": 0.5,
   "answer": "4.5–11.0 × 10³/µL (average ≈ 7000/µL)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "note": "Average from Guyton ch.34, p.449.",
   "units": [
    "× 10³/µL",
    "× 10⁶/µL",
    "%",
    "g/dL"
   ],
   "terms": [
    "WBC"
   ]
  },
  {
   "id": "neut",
   "label": "Neutrophils (WBC differential)",
   "group": "Blood cells",
   "lo": 57,
   "hi": 67,
   "typical": 62,
   "unit": "%",
   "step": 1,
   "answer": "Neutrophils 57–67%, lymphocytes 23–33%, monocytes 3–7%, eosinophils 1–3%, basophils 0–1%",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "ceil": 100,
   "units": [
    "%",
    "× 10⁶/µL",
    "fL",
    "g/dL"
   ],
   "terms": [
    "Neutrophils"
   ]
  },
  {
   "id": "lymph",
   "label": "Lymphocytes (WBC differential)",
   "group": "Blood cells",
   "lo": 23,
   "hi": 33,
   "typical": 28,
   "unit": "%",
   "step": 1,
   "answer": "Neutrophils 57–67%, lymphocytes 23–33%, monocytes 3–7%, eosinophils 1–3%, basophils 0–1%",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "ceil": 100,
   "units": [
    "%",
    "× 10⁶/µL",
    "fL",
    "g/dL"
   ],
   "terms": [
    "Lymphocytes"
   ]
  },
  {
   "id": "mono",
   "label": "Monocytes (WBC differential)",
   "group": "Blood cells",
   "lo": 3,
   "hi": 7,
   "typical": 5,
   "unit": "%",
   "step": 1,
   "answer": "Neutrophils 57–67%, lymphocytes 23–33%, monocytes 3–7%, eosinophils 1–3%, basophils 0–1%",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "ceil": 100,
   "units": [
    "%",
    "× 10⁶/µL",
    "fL",
    "g/dL"
   ],
   "terms": [
    "Monocytes"
   ]
  },
  {
   "id": "eos",
   "label": "Eosinophils (WBC differential)",
   "group": "Blood cells",
   "lo": 1,
   "hi": 3,
   "typical": 2,
   "unit": "%",
   "step": 0.5,
   "answer": "Neutrophils 57–67%, lymphocytes 23–33%, monocytes 3–7%, eosinophils 1–3%, basophils 0–1%",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "ceil": 100,
   "units": [
    "%",
    "× 10⁶/µL",
    "fL",
    "g/dL"
   ],
   "terms": [
    "Eosinophils"
   ]
  },
  {
   "id": "baso",
   "label": "Basophils (WBC differential)",
   "group": "Blood cells",
   "lo": 0,
   "hi": 1,
   "typical": 0.5,
   "unit": "%",
   "step": 0.5,
   "answer": "Neutrophils 57–67%, lymphocytes 23–33%, monocytes 3–7%, eosinophils 1–3%, basophils 0–1%",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "ceil": 100,
   "units": [
    "%",
    "× 10⁶/µL",
    "fL",
    "g/dL"
   ],
   "terms": [
    "Basophils"
   ]
  },
  {
   "id": "plt",
   "label": "Platelets",
   "group": "Blood cells",
   "lo": 150,
   "hi": 450,
   "typical": 300,
   "unit": "× 10³/µL",
   "step": 10,
   "answer": "150–450 × 10³/µL (average ≈ 300,000/µL)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "note": "Average from Guyton ch.34, p.449.",
   "units": [
    "× 10³/µL",
    "× 10⁶/µL",
    "%",
    "fL"
   ],
   "terms": [
    "PLT"
   ]
  },
  {
   "id": "pt",
   "label": "Prothrombin time (PT)",
   "group": "Coagulation",
   "lo": 10,
   "hi": 14,
   "typical": 12,
   "unit": "s",
   "step": 0.5,
   "answer": "10–14 seconds (normal ≈ 12 s)",
   "source": "Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028)",
   "floor": 0,
   "note": "≈ 12 s stated in Guyton ch.37, p.487–488.",
   "units": [
    "s",
    "min",
    "%",
    "ms"
   ],
   "terms": [
    "PT",
    "INR",
    "aPTT"
   ]
  },
  {
   "id": "ef",
   "label": "Ejection fraction",
   "group": "Cardiovascular",
   "lo": 50,
   "hi": 70,
   "typical": 60,
   "unit": "%",
   "step": 1,
   "answer": "Normal ≈ 60%; normal range 50–70%. Below 40% indicates heart failure with reduced EF.",
   "source": "Guyton & Hall 14e, ch.9, p.119; ch.22, p.280",
   "floor": 0,
   "ceil": 100,
   "note": "Costanzo 6e gives 0.55 as normal (ch.4, p.149).",
   "units": [
    "%",
    "ml",
    "L/min",
    "mmHg"
   ],
   "terms": [
    "EF",
    "SV"
   ]
  },
  {
   "id": "autoreg",
   "label": "Autoregulation range of mean arterial pressure",
   "group": "Cardiovascular",
   "lo": 70,
   "hi": 175,
   "unit": "mmHg",
   "step": 5,
   "answer": "≈ 70–175 mmHg",
   "source": "Guyton & Hall 14e, ch.14, p.179–180",
   "floor": 0,
   "units": [
    "mmHg",
    "ml/min",
    "mmol/L",
    "%"
   ],
   "terms": [
    "Autoreg",
    "MAP"
   ]
  }
 ],
 "map": [
  {
   "id": "lv",
   "label": "Left ventricle",
   "circuit": "systemic",
   "answer": "systolic ≈ 120 mmHg; diastolic 2–3 mmHg at the start of filling, ≈ 5–7 mmHg at end-diastole; aortic valve opens above ≈ 80 mmHg",
   "source": "Guyton & Hall 14e, ch.9, p.119–122",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "LV"
   ],
   "range": {
    "low": {
     "value": 5,
     "accept": [
      0,
      8
     ],
     "text": "≈ 2–3 at the start of filling, ≈ 5–7 at end-diastole"
    },
    "high": {
     "value": 120,
     "accept": [
      110,
      130
     ],
     "text": "≈ 120 systolic"
    }
   }
  },
  {
   "id": "aorta",
   "label": "Aorta / large arteries",
   "circuit": "systemic",
   "answer": "120 / 80 mmHg, mean ≈ 100 mmHg",
   "source": "Guyton & Hall 14e, ch.14, p.172–173",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "Aorta",
    "MAP",
    "PP"
   ],
   "range": {
    "low": {
     "value": 80,
     "accept": [
      75,
      85
     ],
     "text": "80 diastolic"
    },
    "high": {
     "value": 120,
     "accept": [
      115,
      125
     ],
     "text": "120 systolic"
    }
   },
   "mean": {
    "value": 100,
    "accept": [
     90,
     105
    ],
    "text": "≈ 100",
    "label": "Mean"
   }
  },
  {
   "id": "arterioles",
   "label": "Arterioles",
   "circuit": "systemic",
   "answer": "≈ 50 mmHg in arterioles, falling to ≈ 30 mmHg at their end (largest pressure drop in the circulation)",
   "source": "Costanzo 6e, ch.4, p.128 (Table 4.1)",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "Arterioles",
    "TPR"
   ],
   "range": {
    "low": {
     "value": 30,
     "accept": [
      25,
      35
     ],
     "text": "≈ 30 at their end"
    },
    "high": {
     "value": 50,
     "accept": [
      40,
      60
     ],
     "text": "≈ 50 at their start"
    }
   },
   "note": "Guyton gives no number for arterioles in the text (only Fig. 14-2); value from Costanzo."
  },
  {
   "id": "caps",
   "label": "Systemic capillaries",
   "circuit": "systemic",
   "answer": "≈ 35 mmHg at the arteriolar end → ≈ 10 mmHg at the venous end; average functional pressure ≈ 17 mmHg",
   "source": "Guyton & Hall 14e, ch.14, p.173",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "Capillaries"
   ],
   "range": {
    "low": {
     "value": 10,
     "accept": [
      8,
      12
     ],
     "text": "≈ 10 at the venous end"
    },
    "high": {
     "value": 35,
     "accept": [
      30,
      40
     ],
     "text": "≈ 35 at the arteriolar end"
    }
   },
   "mean": {
    "value": 17,
    "accept": [
     15,
     20
    ],
    "text": "≈ 17 average functional pressure",
    "label": "Average functional"
   }
  },
  {
   "id": "glom",
   "label": "Glomerular capillaries",
   "circuit": "systemic",
   "answer": "≈ 60 mmHg",
   "source": "Guyton & Hall 14e, ch.14, p.173",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "Glomerular"
   ],
   "mean": {
    "value": 60,
    "accept": [
     55,
     65
    ],
    "text": "≈ 60",
    "label": "Pressure"
   },
   "note": "Guyton gives a single value (≈ 60 mmHg), not a range."
  },
  {
   "id": "veins",
   "label": "Small peripheral veins (lying down)",
   "circuit": "systemic",
   "answer": "≈ 4–6 mmHg above right atrial pressure",
   "source": "Guyton & Hall 14e, ch.15, p.188",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "SmallVeins"
   ],
   "range": {
    "low": {
     "value": 4,
     "accept": [
      3,
      5
     ],
     "text": "4 mmHg above RAP"
    },
    "high": {
     "value": 6,
     "accept": [
      5,
      7
     ],
     "text": "6 mmHg above RAP"
    }
   },
   "note": "Range is given relative to right atrial pressure (≈ 0)."
  },
  {
   "id": "vc",
   "label": "Venae cavae (entering the RA)",
   "circuit": "systemic",
   "answer": "falls to ≈ 0 mmHg where they enter the right atrium",
   "source": "Guyton & Hall 14e, ch.14, p.173",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "VenaeCavae"
   ],
   "mean": {
    "value": 0,
    "accept": [
     0,
     4
    ],
    "text": "≈ 0 (Costanzo ≈ 4)",
    "label": "Pressure"
   },
   "note": "A single value in the sources, not a range. Costanzo 6e Table 4.1 lists vena cava ≈ 4 mmHg (p.128)."
  },
  {
   "id": "ra",
   "label": "Right atrium (CVP)",
   "circuit": "pulmonary",
   "answer": "≈ 0 mmHg (can rise to 20–30 mmHg in severe heart failure); a-wave adds 4–6 mmHg",
   "source": "Guyton & Hall 14e, ch.15, p.188; ch.9, p.119",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "RA",
    "RAP"
   ],
   "range": {
    "low": {
     "value": 0,
     "accept": [
      -1,
      1
     ],
     "text": "≈ 0"
    },
    "high": {
     "value": 2,
     "accept": [
      1,
      4
     ],
     "text": "≈ 2 (Costanzo 0–2; the a-wave adds 4–6)"
    }
   },
   "mean": {
    "value": 0,
    "accept": [
     -1,
     2
    ],
    "text": "≈ 0",
    "label": "Mean"
   },
   "note": "Costanzo 6e lists 0–2 mmHg."
  },
  {
   "id": "rv",
   "label": "Right ventricle",
   "circuit": "pulmonary",
   "answer": "≈ 25 / 0–1 mmHg; pulmonary valve opens when RV pressure exceeds ≈ 8 mmHg",
   "source": "Guyton & Hall 14e, ch.39, p.503; ch.9, p.119",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "RV"
   ],
   "range": {
    "low": {
     "value": 0,
     "accept": [
      0,
      2
     ],
     "text": "0–1 diastolic"
    },
    "high": {
     "value": 25,
     "accept": [
      22,
      28
     ],
     "text": "≈ 25 systolic"
    }
   }
  },
  {
   "id": "pa",
   "label": "Pulmonary artery",
   "circuit": "pulmonary",
   "answer": "25 / 8 mmHg, mean ≈ 15 mmHg",
   "source": "Guyton & Hall 14e, ch.39, p.504",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "PA"
   ],
   "range": {
    "low": {
     "value": 8,
     "accept": [
      6,
      10
     ],
     "text": "8 diastolic"
    },
    "high": {
     "value": 25,
     "accept": [
      22,
      28
     ],
     "text": "25 systolic"
    }
   },
   "mean": {
    "value": 15,
    "accept": [
     13,
     17
    ],
    "text": "≈ 15 (15–16)",
    "label": "Mean"
   },
   "note": "Guyton ch.14 (p.173) gives the mean as 16 mmHg; accept 15–16."
  },
  {
   "id": "pcap",
   "label": "Pulmonary capillaries",
   "circuit": "pulmonary",
   "answer": "≈ 7 mmHg",
   "source": "Guyton & Hall 14e, ch.39, p.504",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "PulmCap"
   ],
   "mean": {
    "value": 7,
    "accept": [
     6,
     8
    ],
    "text": "≈ 7",
    "label": "Mean"
   },
   "note": "A single mean value in Guyton, not a range."
  },
  {
   "id": "la",
   "label": "Left atrium / pulmonary veins",
   "circuit": "pulmonary",
   "answer": "≈ 2 mmHg (range 1–5 mmHg); a-wave adds 7–8 mmHg; estimated by pulmonary wedge pressure",
   "source": "Guyton & Hall 14e, ch.39, p.504; ch.9, p.119",
   "units": [
    "mmHg",
    "mmol/L",
    "ml",
    "L/min"
   ],
   "terms": [
    "LA"
   ],
   "range": {
    "low": {
     "value": 1,
     "accept": [
      0,
      2
     ],
     "text": "1"
    },
    "high": {
     "value": 5,
     "accept": [
      4,
      6
     ],
     "text": "5"
    }
   },
   "mean": {
    "value": 2,
    "accept": [
     1,
     3
    ],
    "text": "≈ 2",
    "label": "Mean"
   }
  }
 ],
 "facts": [
  {
   "text": "Maximum systolic pressure the ventricles can generate: left 250–300 mmHg, right 60–80 mmHg.",
   "source": "Guyton & Hall 14e, ch.9, p.121"
  },
  {
   "text": "The largest pressure drop in the systemic circulation is across the arterioles, which carry about two-thirds of total systemic resistance.",
   "source": "Guyton & Hall 14e, ch.14, p.178"
  },
  {
   "text": "1 mmHg = 1.36 cmH₂O (mercury is 13.6 × denser than water).",
   "source": "Guyton & Hall 14e, ch.14, p.176"
  }
 ]
};
