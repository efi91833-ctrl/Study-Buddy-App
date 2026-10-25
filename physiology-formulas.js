/* physiology-formulas.js — Formula Builder data (question data only; UI lives in index.html).
 * Built from cardio_qbank.json (Guyton & Hall 14e primary, Costanzo 6e / web where marked).
 * answers: accepted right-hand sides as tile sequences; order of + and × terms does not matter.
 * calcs: number problems that use the formula; accept = [min, max] marked correct. */
window.PHYSIO_FORMULAS = [
 {
  "id": "flow",
  "name": "Blood flow (Ohm's law)",
  "group": "Hemodynamics",
  "lhs": "F",
  "answers": [
   [
    "ΔP",
    "÷",
    "R"
   ]
  ],
  "tiles": [
   "ΔP",
   "R",
   "÷",
   "P",
   "×",
   "r⁴"
  ],
  "display": "F = ΔP / R  (also ΔP = F × R and R = ΔP / F)",
  "why": "Flow rises with the pressure difference between the two ends of the vessel and falls with resistance. The absolute pressure does not drive flow, only the difference does.",
  "source": "Guyton & Hall 14e, ch.14, p.174",
  "calcs": [
   {
    "id": "q034",
    "q": "Pressure difference = 100 mmHg, resistance = 1 PRU. What is the flow?",
    "answer": "100 ml/s (= 6 L/min)",
    "unit": "ml/s",
    "accept": [
     100.0,
     100.0
    ],
    "why": "F = ΔP / R = 100/1 = 100 ml/s; this is the normal cardiac output.",
    "source": "Guyton & Hall 14e, ch.14, p.174 and p.177"
   },
   {
    "id": "q035",
    "q": "Renal artery pressure = 100 mmHg, renal vein pressure = 10 mmHg, renal resistance = 0.18 mmHg/(ml/min). What is renal blood flow?",
    "answer": "500 ml/min",
    "unit": "ml/min",
    "accept": [
     495.0,
     505.0
    ],
    "why": "F = (100 − 10) / 0.18 = 500 ml/min.",
    "source": "Guyton & Hall 14e, ch.14, p.174 (F = ΔP/R)",
    "note": "Numbers from Costanzo 6e sample problem, ch.4, p.123."
   }
  ],
  "key": {
   "ΔP": "pressure difference",
   "R": "resistance",
   "P": "pressure",
   "r⁴": "radius to the 4th power"
  },
  "units": [
   "ml/min",
   "mmHg",
   "mmHg·min/ml",
   "cm/s"
  ],
  "terms": [
   "Ohm",
   "Poiseuille"
  ],
  "unitNote": "Also written as L/min or ml/s; any volume per time."
 },
 {
  "id": "tpr",
  "name": "Total peripheral resistance",
  "group": "Hemodynamics",
  "lhs": "TPR",
  "answers": [
   [
    "(",
    "MAP",
    "−",
    "RAP",
    ")",
    "÷",
    "CO"
   ],
   [
    "ΔP",
    "÷",
    "CO"
   ]
  ],
  "tiles": [
   "MAP",
   "RAP",
   "ΔP",
   "CO",
   "(",
   ")",
   "−",
   "÷",
   "×",
   "HR"
  ],
  "display": "TPR = (mean arterial pressure − right atrial pressure) / cardiac output ≈ ΔP / CO",
  "why": "Normal ≈ 100 mmHg / 100 ml/s = 1 PRU (peripheral resistance unit). Range 0.2 PRU (fully dilated) to 4 PRU (strongly constricted). In mmHg·min/L: 100 / 5 = 20.",
  "source": "Guyton & Hall 14e, ch.14, p.177",
  "calcs": [
   {
    "id": "q015",
    "q": "MAP = 100 mmHg, right atrial pressure = 0 mmHg, cardiac output = 5 L/min. What is the TPR?",
    "answer": "20 mmHg·min/L  (= 1.2 PRU)",
    "unit": "mmHg·min/L",
    "accept": [
     19.6,
     20.4
    ],
    "why": "TPR = ΔP / CO = 100 / 5 = 20 mmHg·min/L. In Guyton's units CO = 83.3 ml/s, so TPR = 100/83.3 = 1.2 PRU.",
    "source": "Guyton & Hall 14e, ch.14, p.177"
   },
   {
    "id": "q016",
    "q": "MAP = 120 mmHg, right atrial pressure = 0 mmHg, cardiac output = 4 L/min. What is the TPR?",
    "answer": "30 mmHg·min/L  (= 1.8 PRU)",
    "unit": "mmHg·min/L",
    "accept": [
     29.4,
     30.6
    ],
    "why": "TPR = ΔP / CO = 120 / 4 = 30 mmHg·min/L. In Guyton's units CO = 66.7 ml/s, so TPR = 120/66.7 = 1.8 PRU.",
    "source": "Guyton & Hall 14e, ch.14, p.177"
   }
  ],
  "note": "mmHg·min/L form: Costanzo 6e, ch.4, p.123",
  "key": {
   "MAP": "mean arterial pressure",
   "RAP": "right atrial pressure",
   "ΔP": "pressure difference",
   "CO": "cardiac output",
   "HR": "heart rate"
  },
  "units": [
   "mmHg·min/L",
   "mmHg",
   "L/min",
   "ml/mmHg"
  ],
  "terms": [
   "TPR",
   "MAP",
   "RAP",
   "CO"
  ],
  "unitNote": "Guyton uses PRU (mmHg per ml/s): normal ≈ 1 PRU. In mmHg·min/L the normal is ≈ 20."
 },
 {
  "id": "ap",
  "name": "Arterial pressure",
  "group": "Pressure",
  "lhs": "MAP",
  "answers": [
   [
    "CO",
    "×",
    "TPR"
   ]
  ],
  "tiles": [
   "CO",
   "TPR",
   "×",
   "÷",
   "SV",
   "+"
  ],
  "display": "Arterial pressure = cardiac output × total peripheral resistance",
  "why": "This is Ohm's law rearranged (ΔP = F × R) for the whole systemic circulation.",
  "source": "Guyton & Hall 14e, ch.19, p.232",
  "calcs": [
   {
    "id": "q031",
    "q": "Cardiac output = 5 L/min, TPR = 20 mmHg·min/L. What is the mean arterial pressure (right atrial pressure ≈ 0)?",
    "answer": "100 mmHg",
    "unit": "mmHg",
    "accept": [
     100,
     100
    ],
    "why": "Pressure = CO × TPR = 5 × 20 = 100 mmHg.",
    "source": "Guyton & Hall 14e, ch.19, p.232"
   },
   {
    "id": "q032",
    "q": "Cardiac output = 6 L/min, TPR = 25 mmHg·min/L. What is the mean arterial pressure (right atrial pressure ≈ 0)?",
    "answer": "150 mmHg",
    "unit": "mmHg",
    "accept": [
     150,
     150
    ],
    "why": "Pressure = CO × TPR = 6 × 25 = 150 mmHg.",
    "source": "Guyton & Hall 14e, ch.19, p.232"
   }
  ],
  "key": {
   "CO": "cardiac output",
   "TPR": "total peripheral resistance",
   "SV": "stroke volume"
  },
  "units": [
   "mmHg",
   "L/min",
   "mmHg·min/L",
   "ml"
  ],
  "terms": [
   "MAP",
   "CO",
   "TPR"
  ]
 },
 {
  "id": "map",
  "name": "Mean arterial pressure",
  "group": "Pressure",
  "lhs": "MAP",
  "answers": [
   [
    "0.6",
    "×",
    "DP",
    "+",
    "0.4",
    "×",
    "SP"
   ],
   [
    "DP",
    "+",
    "⅓",
    "×",
    "PP"
   ]
  ],
  "tiles": [
   "DP",
   "SP",
   "PP",
   "0.6",
   "0.4",
   "⅓",
   "×",
   "+",
   "½",
   "−"
  ],
  "display": "MAP ≈ 0.6 × diastolic + 0.4 × systolic  (Guyton). Common clinical form: MAP = diastolic + ⅓ × pulse pressure (Costanzo)",
  "why": "Diastole takes more of the cardiac cycle than systole, so MAP sits closer to diastolic pressure. At very high heart rates MAP approaches the simple average of systolic and diastolic. Normal mean aortic pressure ≈ 100 mmHg.",
  "source": "Guyton & Hall 14e, ch.15, p.188",
  "calcs": [
   {
    "id": "q017",
    "q": "Blood pressure is 120/80 mmHg. What is the mean arterial pressure?",
    "answer": "≈ 96 mmHg (Guyton 60/40 rule); 93.3 mmHg with DP + ⅓PP",
    "unit": "mmHg",
    "accept": [
     92.3333,
     97.0
    ],
    "why": "Guyton: 0.6 × 80 + 0.4 × 120 = 96. Costanzo: 80 + (120−80)/3 = 93.3. Accept either.",
    "source": "Guyton & Hall 14e, ch.15, p.188",
    "note": "DP + ⅓PP form from Costanzo 6e, ch.4, p.129"
   },
   {
    "id": "q018",
    "q": "Blood pressure is 150/90 mmHg. What is the mean arterial pressure?",
    "answer": "≈ 114 mmHg (Guyton 60/40 rule); 110 mmHg with DP + ⅓PP",
    "unit": "mmHg",
    "accept": [
     109.0,
     115.0
    ],
    "why": "Guyton: 0.6 × 90 + 0.4 × 150 = 114. Costanzo: 90 + (150−90)/3 = 110. Accept either.",
    "source": "Guyton & Hall 14e, ch.15, p.188",
    "note": "DP + ⅓PP form from Costanzo 6e, ch.4, p.129"
   }
  ],
  "note": "DP + ⅓PP form: Costanzo 6e, ch.4, p.129. The two forms give slightly different numbers (120/80 → 96 vs 93 mmHg).",
  "key": {
   "DP": "diastolic pressure",
   "SP": "systolic pressure",
   "PP": "pulse pressure"
  },
  "units": [
   "mmHg",
   "mmHg·min/L",
   "L/min",
   "ml"
  ],
  "terms": [
   "MAP",
   "SP",
   "DP",
   "PP"
  ]
 },
 {
  "id": "pp",
  "name": "Pulse pressure",
  "group": "Pressure",
  "lhs": "PP",
  "answers": [
   [
    "SP",
    "−",
    "DP"
   ],
   [
    "SV",
    "÷",
    "C"
   ]
  ],
  "tiles": [
   "SP",
   "DP",
   "SV",
   "C",
   "−",
   "÷",
   "+",
   "×"
  ],
  "display": "Pulse pressure = systolic − diastolic ≈ stroke volume / arterial compliance",
  "why": "Normal 120 − 80 = 40 mmHg. Increases with larger stroke volume or stiffer (less compliant) arteries.",
  "source": "Guyton & Hall 14e, ch.15, p.184–185",
  "calcs": [
   {
    "id": "q019",
    "q": "Blood pressure is 120/80 mmHg. What is the pulse pressure?",
    "answer": "40 mmHg",
    "unit": "mmHg",
    "accept": [
     40,
     40
    ],
    "why": "PP = systolic − diastolic = 120 − 80 = 40 mmHg.",
    "source": "Guyton & Hall 14e, ch.15, p.184"
   },
   {
    "id": "q020",
    "q": "Blood pressure is 160/90 mmHg. What is the pulse pressure?",
    "answer": "70 mmHg",
    "unit": "mmHg",
    "accept": [
     70,
     70
    ],
    "why": "PP = systolic − diastolic = 160 − 90 = 70 mmHg.",
    "source": "Guyton & Hall 14e, ch.15, p.184"
   },
   {
    "id": "q021",
    "q": "Stroke volume = 70 ml and arterial compliance = 1.75 ml/mmHg. Estimate the pulse pressure.",
    "answer": "≈ 40 mmHg (if compliance halves, it roughly doubles to ≈ 80 mmHg)",
    "unit": "mmHg",
    "accept": [
     39.2,
     40.8
    ],
    "why": "PP ≈ SV / compliance = 70/1.75 = 40. Halving compliance doubles PP; Guyton notes pulse pressure in old age can rise to twice normal.",
    "source": "Guyton & Hall 14e, ch.15, p.185"
   }
  ],
  "key": {
   "SP": "systolic pressure",
   "DP": "diastolic pressure",
   "SV": "stroke volume",
   "C": "arterial compliance"
  },
  "units": [
   "mmHg",
   "ml/mmHg",
   "ml",
   "%"
  ],
  "terms": [
   "PP",
   "SP",
   "DP",
   "Compliance"
  ]
 },
 {
  "id": "sv",
  "name": "Stroke volume",
  "group": "Heart",
  "lhs": "SV",
  "answers": [
   [
    "EDV",
    "−",
    "ESV"
   ]
  ],
  "tiles": [
   "EDV",
   "ESV",
   "−",
   "+",
   "÷",
   "HR"
  ],
  "display": "SV = end-diastolic volume (EDV) − end-systolic volume (ESV)",
  "why": "Normal EDV 110–120 ml, ESV 40–50 ml, SV ≈ 70 ml.",
  "source": "Guyton & Hall 14e, ch.9, p.119",
  "calcs": [
   {
    "id": "q022",
    "q": "EDV = 120 ml, ESV = 50 ml. What is the stroke volume?",
    "answer": "70 ml",
    "unit": "ml",
    "accept": [
     70,
     70
    ],
    "why": "SV = EDV − ESV = 120 − 50 = 70 ml.",
    "source": "Guyton & Hall 14e, ch.9, p.119"
   },
   {
    "id": "q023",
    "q": "EDV = 150 ml, ESV = 90 ml. What is the stroke volume?",
    "answer": "60 ml",
    "unit": "ml",
    "accept": [
     60,
     60
    ],
    "why": "SV = EDV − ESV = 150 − 90 = 60 ml.",
    "source": "Guyton & Hall 14e, ch.9, p.119"
   }
  ],
  "key": {
   "EDV": "end-diastolic volume",
   "ESV": "end-systolic volume",
   "HR": "heart rate"
  },
  "units": [
   "ml",
   "L/min",
   "mmHg",
   "%"
  ],
  "terms": [
   "SV",
   "EDV",
   "ESV"
  ]
 },
 {
  "id": "co",
  "name": "Cardiac output",
  "group": "Heart",
  "lhs": "CO",
  "answers": [
   [
    "SV",
    "×",
    "HR"
   ]
  ],
  "tiles": [
   "SV",
   "HR",
   "×",
   "÷",
   "EDV",
   "MAP"
  ],
  "display": "CO = stroke volume × heart rate",
  "why": "Normal resting CO ≈ 5 L/min (young men ≈ 5.6, women ≈ 4.9 L/min). Cardiac index ≈ 3 L/min/m².",
  "source": "Guyton & Hall 14e, ch.20, p.245 and p.257",
  "calcs": [
   {
    "id": "q024",
    "q": "Stroke volume = 70 ml, heart rate = 72 beats/min. What is the cardiac output?",
    "answer": "5.04 L/min (5040 ml/min)",
    "unit": "L/min",
    "accept": [
     4.9896,
     5.0904
    ],
    "why": "CO = SV × HR = 70 × 72 = 5040 ml/min = 5.04 L/min.",
    "source": "Guyton & Hall 14e, ch.20, p.257"
   },
   {
    "id": "q025",
    "q": "Stroke volume = 80 ml, heart rate = 60 beats/min. What is the cardiac output?",
    "answer": "4.8 L/min (4800 ml/min)",
    "unit": "L/min",
    "accept": [
     4.752,
     4.848
    ],
    "why": "CO = SV × HR = 80 × 60 = 4800 ml/min = 4.8 L/min.",
    "source": "Guyton & Hall 14e, ch.20, p.257"
   },
   {
    "id": "q026",
    "q": "Stroke volume = 100 ml, heart rate = 150 beats/min. What is the cardiac output?",
    "answer": "15 L/min (15000 ml/min)",
    "unit": "L/min",
    "accept": [
     14.85,
     15.15
    ],
    "why": "CO = SV × HR = 100 × 150 = 15000 ml/min = 15 L/min. (exercise level; Guyton: CO can rise 4–7× resting)",
    "source": "Guyton & Hall 14e, ch.20, p.257"
   },
   {
    "id": "q027",
    "q": "CO = 5.2 L/min, HR = 76/min, EDV = 145 ml. What is the end-systolic volume?",
    "answer": "≈ 77 ml",
    "unit": "ml",
    "accept": [
     75.5789,
     77.5789
    ],
    "why": "SV = 5200/76 = 68.4 ml; ESV = EDV − SV = 145 − 68.4 = 76.6 ml.",
    "source": "Costanzo 6e, ch.4 Challenge Yourself Q7 (answer 77 ml)",
    "note": "Calculation taken from Costanzo; Guyton has no equivalent worked problem."
   }
  ],
  "key": {
   "SV": "stroke volume",
   "HR": "heart rate",
   "EDV": "end-diastolic volume",
   "MAP": "mean arterial pressure"
  },
  "units": [
   "L/min",
   "ml",
   "mmHg",
   "beats/min"
  ],
  "terms": [
   "CO",
   "SV",
   "HR"
  ]
 },
 {
  "id": "ef",
  "name": "Ejection fraction",
  "group": "Heart",
  "lhs": "EF",
  "answers": [
   [
    "SV",
    "÷",
    "EDV"
   ],
   [
    "(",
    "EDV",
    "−",
    "ESV",
    ")",
    "÷",
    "EDV"
   ]
  ],
  "tiles": [
   "SV",
   "EDV",
   "ESV",
   "÷",
   "−",
   "(",
   ")",
   "×",
   "CO"
  ],
  "display": "EF = SV / EDV",
  "why": "Normal ≈ 0.6 (60%); normal range 50–70%. Below 40% indicates heart failure with reduced EF.",
  "source": "Guyton & Hall 14e, ch.9, p.119; ch.22, p.280",
  "calcs": [
   {
    "id": "q028",
    "q": "EDV = 120 ml, ESV = 50 ml. What is the ejection fraction (in %)?",
    "answer": "58% – normal",
    "unit": "%",
    "accept": [
     57.3333,
     59.3333
    ],
    "why": "SV = 70 ml; EF = 70/120 = 58.3%. Guyton normal range 50–70%; < 40% = HFrEF.",
    "source": "Guyton & Hall 14e, ch.9, p.119; ch.22, p.280"
   },
   {
    "id": "q029",
    "q": "EDV = 140 ml, ESV = 70 ml. What is the ejection fraction (in %)?",
    "answer": "50% – normal",
    "unit": "%",
    "accept": [
     49.0,
     51.0
    ],
    "why": "SV = 70 ml; EF = 70/140 = 50%. Guyton normal range 50–70%; < 40% = HFrEF.",
    "source": "Guyton & Hall 14e, ch.9, p.119; ch.22, p.280"
   },
   {
    "id": "q030",
    "q": "EDV = 200 ml, ESV = 150 ml. What is the ejection fraction (in %)?",
    "answer": "25% – reduced (heart failure with reduced EF, < 40%)",
    "unit": "%",
    "accept": [
     24.0,
     26.0
    ],
    "why": "SV = 50 ml; EF = 50/200 = 25%. Guyton normal range 50–70%; < 40% = HFrEF.",
    "source": "Guyton & Hall 14e, ch.9, p.119; ch.22, p.280"
   }
  ],
  "note": "Costanzo 6e gives 0.55 as normal (ch.4, p.149).",
  "key": {
   "SV": "stroke volume",
   "EDV": "end-diastolic volume",
   "ESV": "end-systolic volume",
   "CO": "cardiac output"
  },
  "units": [
   "% (a ratio, no unit)",
   "ml",
   "L/min",
   "mmHg"
  ],
  "terms": [
   "EF",
   "SV",
   "EDV"
  ],
  "unitNote": "Volume ÷ volume, so the units cancel. Written as a fraction (0.6) or a percentage (60%)."
 },
 {
  "id": "sw",
  "name": "Stroke work",
  "group": "Heart",
  "lhs": "SW",
  "answers": [
   [
    "SV",
    "×",
    "Pao"
   ]
  ],
  "tiles": [
   "SV",
   "Pao",
   "×",
   "÷",
   "HR",
   "EDV"
  ],
  "display": "Stroke work ≈ SV × mean aortic pressure (= area inside the LV pressure–volume loop)",
  "why": "Guyton: most work is volume–pressure (external) work; the kinetic-energy part is only ~1% normally (but can exceed 50% in aortic stenosis). Right-ventricular work ≈ 1/6 of left because its pressure is ~6× lower.",
  "source": "Guyton & Hall 14e, ch.9, p.121–122",
  "calcs": [
   {
    "id": "q053",
    "q": "Stroke volume = 70 ml, mean aortic pressure = 100 mmHg. What is left-ventricular stroke work?",
    "answer": "7000 mmHg·ml ≈ 0.93 J",
    "unit": "mmHg·ml",
    "accept": [
     6930.0,
     7070.0
    ],
    "why": "Stroke work ≈ SV × P = 70 × 100 = 7000 mmHg·ml. 1 mmHg·ml = 1.333×10⁻⁴ J, so ≈ 0.93 J.",
    "source": "Guyton & Hall 14e, ch.9, p.121–122 (stroke work = PV-loop area)",
    "note": "SV × aortic pressure formula from Costanzo 6e, ch.4, p.153."
   }
  ],
  "note": "The 'SV × aortic pressure' and 'CO × aortic pressure' formulas are stated in Costanzo 6e, ch.4, p.153; Guyton defines stroke work as the loop area.",
  "key": {
   "SV": "stroke volume",
   "Pao": "mean aortic pressure",
   "HR": "heart rate",
   "EDV": "end-diastolic volume"
  },
  "units": [
   "mmHg·ml (energy, ≈ J)",
   "mmHg",
   "L/min",
   "mmHg/ml"
  ],
  "terms": [
   "SW",
   "SV"
  ],
  "unitNote": "1 mmHg·ml ≈ 1.333 × 10⁻⁴ J."
 },
 {
  "id": "mw",
  "name": "Minute work",
  "group": "Heart",
  "lhs": "Minute work",
  "answers": [
   [
    "SW",
    "×",
    "HR"
   ],
   [
    "CO",
    "×",
    "Pao"
   ]
  ],
  "tiles": [
   "SW",
   "HR",
   "CO",
   "Pao",
   "×",
   "÷",
   "SV"
  ],
  "display": "Minute work = stroke work × heart rate ≈ CO × mean aortic pressure",
  "why": "Guyton: most work is volume–pressure (external) work; the kinetic-energy part is only ~1% normally (but can exceed 50% in aortic stenosis). Right-ventricular work ≈ 1/6 of left because its pressure is ~6× lower.",
  "source": "Guyton & Hall 14e, ch.9, p.121–122",
  "calcs": [
   {
    "id": "q054",
    "q": "Same heart at 70 beats/min. What is the minute work?",
    "answer": "490 mmHg·L/min (≈ 1.09 W)",
    "unit": "mmHg·L/min",
    "accept": [
     485.1,
     494.9
    ],
    "why": "Minute work = stroke work × HR = 7000 × 70 = 490000 mmHg·ml/min.",
    "source": "Guyton & Hall 14e, ch.9, p.121–122",
    "note": "CO × aortic pressure form from Costanzo 6e, ch.4, p.153."
   }
  ],
  "note": "The 'SV × aortic pressure' and 'CO × aortic pressure' formulas are stated in Costanzo 6e, ch.4, p.153; Guyton defines stroke work as the loop area.",
  "key": {
   "SW": "stroke work",
   "HR": "heart rate",
   "CO": "cardiac output",
   "Pao": "mean aortic pressure",
   "SV": "stroke volume"
  },
  "units": [
   "mmHg·L/min (power, ≈ W)",
   "mmHg·ml",
   "L/min",
   "mmHg"
  ],
  "terms": [
   "MinuteWork",
   "SW",
   "CO"
  ],
  "unitNote": "Work per time is power: 490 mmHg·L/min ≈ 1.09 W."
 },
 {
  "id": "lap",
  "name": "Law of Laplace (heart)",
  "group": "Heart",
  "lhs": "T",
  "answers": [
   [
    "P",
    "×",
    "r"
   ],
   [
    "ΔP",
    "×",
    "r",
    "÷",
    "h"
   ]
  ],
  "tiles": [
   "P",
   "ΔP",
   "r",
   "h",
   "×",
   "÷",
   "r⁴",
   "+"
  ],
  "display": "Ventricular wall tension T = P × r  (with wall thickness: T = ΔP × r / h)",
  "why": "A dilated ventricle (larger r) needs more wall tension, and therefore more O₂, to make the same pressure. A thicker wall (larger h) lowers tension per unit of wall, which is why hypertrophy compensates for high pressure.",
  "source": "Guyton & Hall 14e, ch.9, p.123 (T = P × r); ch.14, p.180 (T = ΔP × r/h)",
  "calcs": [
   {
    "id": "q050",
    "q": "The left ventricle dilates so its radius doubles, at the same pressure. By what factor does wall tension change?",
    "answer": "× 2: tension doubles (T = P × r), so myocardial O₂ use rises",
    "unit": "×",
    "accept": [
     2,
     2
    ],
    "why": "T = P × r, so doubling r doubles T.",
    "source": "Guyton & Hall 14e, ch.9, p.123"
   },
   {
    "id": "q051",
    "q": "Pressure and radius stay the same but wall thickness doubles (hypertrophy). By what factor does the tension each unit of wall carries change?",
    "answer": "× 0.5: it halves (T = ΔP × r / h)",
    "unit": "×",
    "accept": [
     0.5,
     0.5
    ],
    "why": "h is in the denominator, so doubling h halves the tension per unit of wall.",
    "source": "Guyton & Hall 14e, ch.14, p.180",
    "note": "Same idea in Costanzo 6e, ch.4, p.153–154 (P = 2HT/r)."
   }
  ],
  "note": "Costanzo 6e writes it for a sphere as P = 2HT/r (ch.4, p.153).",
  "key": {
   "P": "pressure",
   "ΔP": "pressure difference",
   "r": "radius",
   "h": "wall thickness",
   "r⁴": "radius to the 4th power"
  },
  "units": [
   "force per length (N/m)",
   "mmHg",
   "N",
   "ml/mmHg"
  ],
  "terms": [
   "Laplace",
   "Afterload"
  ],
  "unitNote": "Pressure (force/area) × radius (length) = force per unit length of wall."
 },
 {
  "id": "comp",
  "name": "Vascular compliance",
  "group": "Vessels",
  "lhs": "C",
  "answers": [
   [
    "ΔV",
    "÷",
    "ΔP"
   ]
  ],
  "tiles": [
   "ΔV",
   "ΔP",
   "÷",
   "×",
   "V₀",
   "−"
  ],
  "display": "Compliance = increase in volume / increase in pressure  (ΔV / ΔP)",
  "why": "Distensibility = ΔV / (ΔP × original volume). Compliance = distensibility × volume. A systemic vein is ~8× more distensible and ~24× more compliant than its artery.",
  "source": "Guyton & Hall 14e, ch.15, p.183",
  "calcs": [
   {
    "id": "q047",
    "q": "The systemic arterial tree holds 700 ml at a mean pressure of 100 mmHg and 400 ml at 0 mmHg. What is its compliance?",
    "answer": "3 ml/mmHg",
    "unit": "ml/mmHg",
    "accept": [
     3,
     3
    ],
    "why": "C = ΔV/ΔP = 300/100 = 3 ml/mmHg.",
    "source": "Guyton & Hall 14e, ch.15, p.183 (Fig. 15-1)"
   },
   {
    "id": "q049",
    "q": "A vein is 8× as distensible as its artery and holds 3× the volume. How many times more compliant is it?",
    "answer": "24×",
    "unit": "",
    "accept": [
     24,
     24
    ],
    "why": "Compliance = distensibility × volume = 8 × 3 = 24.",
    "source": "Guyton & Hall 14e, ch.15, p.183"
   }
  ],
  "key": {
   "ΔV": "volume change",
   "ΔP": "pressure difference",
   "V₀": "original volume"
  },
  "units": [
   "ml/mmHg",
   "mmHg/ml",
   "per mmHg",
   "mmHg"
  ],
  "terms": [
   "Compliance",
   "Distensibility"
  ]
 },
 {
  "id": "dist",
  "name": "Distensibility",
  "group": "Vessels",
  "lhs": "Distensibility",
  "answers": [
   [
    "ΔV",
    "÷",
    "(",
    "ΔP",
    "×",
    "V₀",
    ")"
   ]
  ],
  "tiles": [
   "ΔV",
   "ΔP",
   "V₀",
   "÷",
   "×",
   "(",
   ")",
   "+"
  ],
  "display": "Distensibility = ΔV / (ΔP × original volume)",
  "why": "Compliance = distensibility × volume. A systemic vein is ~8× more distensible and ~24× more compliant than its artery.",
  "source": "Guyton & Hall 14e, ch.15, p.183",
  "calcs": [
   {
    "id": "q048",
    "q": "A vein holding 10 ml gains 1 ml when pressure rises by 1 mmHg. What is its distensibility?",
    "answer": "0.1 per mmHg (10% per mmHg)",
    "unit": "/mmHg",
    "accept": [
     0.1,
     0.1
    ],
    "why": "Distensibility = ΔV / (ΔP × original V) = 1/(1 × 10).",
    "source": "Guyton & Hall 14e, ch.15, p.183"
   }
  ],
  "key": {
   "ΔV": "volume change",
   "ΔP": "pressure difference",
   "V₀": "original volume"
  },
  "units": [
   "per mmHg (fraction of volume)",
   "ml/mmHg",
   "mmHg/ml",
   "ml"
  ],
  "terms": [
   "Distensibility",
   "Compliance"
  ],
  "unitNote": "ΔV/V₀ is a fraction with no unit, so distensibility is \"per mmHg\"."
 },
 {
  "id": "pois",
  "name": "Poiseuille's law",
  "group": "Hemodynamics",
  "lhs": "F",
  "answers": [
   [
    "π",
    "×",
    "ΔP",
    "×",
    "r⁴",
    "÷",
    "(",
    "8",
    "×",
    "η",
    "×",
    "l",
    ")"
   ]
  ],
  "tiles": [
   "π",
   "ΔP",
   "r⁴",
   "8",
   "η",
   "l",
   "×",
   "÷",
   "(",
   ")",
   "r²",
   "4"
  ],
  "display": "F = π × ΔP × r⁴ / (8 × η × l);  so resistance R = 8ηl / (πr⁴)",
  "why": "Flow is proportional to the 4th power of the radius. Resistance rises with viscosity (η) and vessel length (l). About two-thirds of systemic resistance is in the small arterioles.",
  "source": "Guyton & Hall 14e, ch.14, p.177–178",
  "calcs": [
   {
    "id": "q036",
    "q": "A vessel's radius halves (pressure, length, viscosity unchanged). By what factor does resistance increase?",
    "answer": "× 16 (flow becomes 1/16)",
    "unit": "×",
    "accept": [
     16,
     16
    ],
    "why": "R ∝ 1/r⁴, so (1/0.5)⁴ = 16.",
    "source": "Guyton & Hall 14e, ch.14, p.177–178"
   },
   {
    "id": "q037",
    "q": "Vessels with diameters 1, 2 and 4 have the same pressure difference. If the smallest carries 1 ml/min, how much does the diameter-4 vessel carry?",
    "answer": "256 ml/min (diameter 2 carries 16 ml/min)",
    "unit": "ml/min",
    "accept": [
     256,
     256
    ],
    "why": "Flow ∝ d⁴: 2⁴ = 16, 4⁴ = 256 (a 256-fold rise for a 4-fold wider vessel).",
    "source": "Guyton & Hall 14e, ch.14, p.177 (Fig. 14-8)"
   },
   {
    "id": "q038",
    "q": "A carotid artery's radius is reduced by 75% (flow before = 400 ml/min). What is the new flow?",
    "answer": "1.56 ml/min (1/256 of normal)",
    "unit": "ml/min",
    "accept": [
     1.4844,
     1.6406
    ],
    "why": "Radius becomes 1/4, so R × 4⁴ = 256 and flow = 400/256 = 1.56.",
    "source": "Guyton & Hall 14e, ch.14, p.178 (fourth-power law)",
    "note": "Worked example from Costanzo 6e, ch.4, p.124."
   },
   {
    "id": "q039",
    "q": "Polycythemia doubles blood viscosity (all else equal). By what factor does resistance change?",
    "answer": "× 2: resistance doubles, flow halves",
    "unit": "×",
    "accept": [
     2,
     2
    ],
    "why": "R ∝ η. Guyton: normal blood viscosity ≈ 3–4× water; at hematocrit 60–70 it can reach ~10× water.",
    "source": "Guyton & Hall 14e, ch.14, p.178–179"
   },
   {
    "id": "q040",
    "q": "A vessel's length doubles. By what factor does resistance change?",
    "answer": "× 2 (R ∝ length)",
    "unit": "×",
    "accept": [
     2,
     2
    ],
    "why": "R = 8ηl / (πr⁴), so R is proportional to l.",
    "source": "Guyton & Hall 14e, ch.14, p.178"
   }
  ],
  "key": {
   "π": "pi",
   "ΔP": "pressure difference",
   "r⁴": "radius to the 4th power",
   "η": "viscosity",
   "l": "vessel length",
   "r²": "radius squared"
  },
  "units": [
   "ml/min",
   "mmHg",
   "cm/s",
   "poise"
  ],
  "terms": [
   "Poiseuille",
   "Ohm"
  ]
 },
 {
  "id": "re",
  "name": "Reynolds' number",
  "group": "Hemodynamics",
  "lhs": "Re",
  "answers": [
   [
    "v",
    "×",
    "d",
    "×",
    "ρ",
    "÷",
    "η"
   ]
  ],
  "tiles": [
   "v",
   "d",
   "ρ",
   "η",
   "×",
   "÷",
   "l",
   "π"
  ],
  "display": "Re = v × d × ρ / η   (v = mean velocity cm/s, d = diameter cm, ρ = density g/ml, η = viscosity poise)",
  "why": "Turbulence is more likely with high velocity, large diameter, high density, and low viscosity. Re 200–400: turbulence at branches. Re > ~2000: turbulence even in straight, smooth vessels. Blood viscosity ≈ 1/30 poise, density slightly > 1.",
  "source": "Guyton & Hall 14e, ch.14, p.175–176",
  "calcs": [
   {
    "id": "q041",
    "q": "v = 30 cm/s, d = 2 cm, ρ = 1 g/ml, η = 0.03 poise. What is Reynolds' number?",
    "answer": "Re ≈ 2000 → around the 2000 threshold: turbulent at branches, near-turbulent in straight segments",
    "unit": "",
    "accept": [
     1960.0,
     2040.0
    ],
    "why": "Re = v·d·ρ/η = 30×2×1/0.03 = 2000.",
    "source": "Guyton & Hall 14e, ch.14, p.175–176",
    "note": "Costanzo 6e cut-offs differ (< 2000 laminar, > 3000 turbulent)."
   },
   {
    "id": "q042",
    "q": "v = 40 cm/s, d = 2 cm, ρ = 1.05 g/ml, η = 0.0333 poise. What is Reynolds' number?",
    "answer": "Re ≈ 2520 → turbulence likely even in a straight vessel (> 2000)",
    "unit": "",
    "accept": [
     2469.6,
     2570.4
    ],
    "why": "Re = v·d·ρ/η = 40×2×1.05/0.0333 = 2520.",
    "source": "Guyton & Hall 14e, ch.14, p.175–176",
    "note": "Costanzo 6e cut-offs differ (< 2000 laminar, > 3000 turbulent)."
   }
  ],
  "note": "Costanzo 6e uses other cut-offs: < 2000 laminar, > 3000 always turbulent (ch.4, p.126).",
  "key": {
   "v": "mean velocity",
   "d": "diameter",
   "ρ": "density",
   "η": "viscosity",
   "l": "vessel length",
   "π": "pi"
  },
  "units": [
   "no unit",
   "cm/s",
   "poise",
   "g/ml"
  ],
  "terms": [
   "Re"
  ],
  "unitNote": "All units cancel, which is why the same cut-offs (≈ 2000) work in any vessel."
 },
 {
  "id": "vel",
  "name": "Velocity of blood flow",
  "group": "Hemodynamics",
  "lhs": "v",
  "answers": [
   [
    "F",
    "÷",
    "A"
   ]
  ],
  "tiles": [
   "F",
   "A",
   "÷",
   "×",
   "r",
   "ΔP"
  ],
  "display": "v = F / A  (flow divided by total cross-sectional area)",
  "why": "Aorta: area ≈ 2.5 cm², v ≈ 33 cm/s. Capillaries: area ≈ 2500 cm², v ≈ 0.3 mm/s (1/1000 of the aorta). Blood stays in a capillary for only 1–3 s.",
  "source": "Guyton & Hall 14e, ch.14, p.172",
  "calcs": [
   {
    "id": "q044",
    "q": "Cardiac output = 5 L/min. Total cross-sectional area of the aorta = 2.5 cm². What is the mean velocity?",
    "answer": "33.3 cm/s",
    "unit": "cm/s",
    "accept": [
     32.6667,
     34.0
    ],
    "why": "F = 5000/60 = 83.3 ml/s; v = 83.3/2.5 = 33.333 cm/s. Guyton states ≈ 33 cm/s.",
    "source": "Guyton & Hall 14e, ch.14, p.172 (areas and v = F/A)"
   },
   {
    "id": "q045",
    "q": "Cardiac output = 5 L/min. Total cross-sectional area of the capillaries (total) = 2500 cm². What is the mean velocity?",
    "answer": "0.33 mm/s (0.033 cm/s)",
    "unit": "cm/s",
    "accept": [
     0.0327,
     0.034
    ],
    "why": "F = 5000/60 = 83.3 ml/s; v = 83.3/2500 = 0.033 cm/s. Guyton states ≈ 0.3 mm/s.",
    "source": "Guyton & Hall 14e, ch.14, p.172 (areas and v = F/A)"
   },
   {
    "id": "q046",
    "q": "Cardiac output = 5 L/min. Total cross-sectional area of the venae cavae = 8 cm². What is the mean velocity?",
    "answer": "10.4 cm/s",
    "unit": "cm/s",
    "accept": [
     10.2083,
     10.625
    ],
    "why": "F = 5000/60 = 83.3 ml/s; v = 83.3/8 = 10.417 cm/s.",
    "source": "Guyton & Hall 14e, ch.14, p.172 (areas and v = F/A)"
   }
  ],
  "key": {
   "F": "blood flow",
   "A": "total cross-sectional area",
   "r": "radius",
   "ΔP": "pressure difference"
  },
  "units": [
   "cm/s",
   "ml/min",
   "cm²",
   "L/min"
  ],
  "terms": [
   "Velocity"
  ]
 },
 {
  "id": "mcv",
  "name": "MCV",
  "group": "RBC indices",
  "lhs": "MCV",
  "answers": [
   [
    "Hct",
    "×",
    "1000",
    "÷",
    "RBC"
   ]
  ],
  "tiles": [
   "Hct",
   "RBC",
   "Hb",
   "1000",
   "100",
   "×",
   "÷"
  ],
  "display": "MCV = Hct (L/L) × 1000 / RBC (× 10¹²/L) → fL. Normal 90 fL (80–100).",
  "why": "Normal value from Guyton's table.",
  "source": "Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/",
  "calcs": [
   {
    "id": "q103",
    "q": "Hct = 45%, Hb = 15 g/dL, RBC = 5 × 10⁶/µL. What is the MCV?",
    "answer": "90 fL (normocytic)",
    "unit": "fL",
    "accept": [
     89,
     91
    ],
    "why": "MCV = 0.45 × 1000 / 5 = 90 fL.",
    "source": "Normal ranges: Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028); Guyton & Hall 14e, ch.33 (Fig. 33-3)",
    "note": "Index formulas: Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/"
   },
   {
    "id": "q104",
    "q": "Hct = 33%, Hb = 9.6 g/dL, RBC = 4.4 × 10⁶/µL. What is the MCV?",
    "answer": "≈ 75 fL (microcytic)",
    "unit": "fL",
    "accept": [
     74,
     76
    ],
    "why": "MCV = 0.33 × 1000 / 4.4 = 75 fL.",
    "source": "Normal ranges: Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028); Guyton & Hall 14e, ch.33 (Fig. 33-3)",
    "note": "Index formulas: Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/"
   }
  ],
  "note": "Formula not in Guyton or Costanzo; normal value from Guyton table.",
  "key": {
   "Hct": "hematocrit (L/L)",
   "RBC": "red cell count (×10¹²/L)",
   "Hb": "hemoglobin"
  },
  "units": [
   "fL",
   "pg",
   "g/dL",
   "%"
  ],
  "terms": [
   "MCV",
   "Hct",
   "RBC"
  ],
  "unitNote": "1 fL = 10⁻¹⁵ L = 1 µm³."
 },
 {
  "id": "mch",
  "name": "MCH",
  "group": "RBC indices",
  "lhs": "MCH",
  "answers": [
   [
    "Hb",
    "÷",
    "RBC"
   ]
  ],
  "tiles": [
   "Hb",
   "RBC",
   "Hct",
   "÷",
   "×",
   "1000"
  ],
  "display": "MCH = Hb (g/L) / RBC (× 10¹²/L) → pg. Normal ≈ 28–36 pg (≈ 30 pg).",
  "why": "With Guyton's average man (Hb 15 g/dL = 150 g/L, RBC 5.2 × 10¹²/L): 150/5.2 ≈ 29 pg.",
  "source": "Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/",
  "calcs": [
   {
    "id": "q103",
    "q": "Hct = 45%, Hb = 15 g/dL, RBC = 5 × 10⁶/µL. What is the MCH?",
    "answer": "30 pg",
    "unit": "pg",
    "accept": [
     29.5,
     30.5
    ],
    "why": "MCH = 150 g/L / 5 = 30 pg.",
    "source": "Normal ranges: Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028); Guyton & Hall 14e, ch.33 (Fig. 33-3)",
    "note": "Index formulas: Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/"
   },
   {
    "id": "q104",
    "q": "Hct = 33%, Hb = 9.6 g/dL, RBC = 4.4 × 10⁶/µL. What is the MCH?",
    "answer": "≈ 21.8 pg (hypochromic)",
    "unit": "pg",
    "accept": [
     21.3,
     22.3
    ],
    "why": "MCH = 96 g/L / 4.4 = 21.8 pg.",
    "source": "Normal ranges: Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028); Guyton & Hall 14e, ch.33 (Fig. 33-3)",
    "note": "Index formulas: Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/"
   }
  ],
  "note": "Neither book gives MCH; range from web source (ranges vary between labs).",
  "key": {
   "Hb": "hemoglobin",
   "RBC": "red cell count (×10¹²/L)",
   "Hct": "hematocrit (L/L)"
  },
  "units": [
   "pg",
   "fL",
   "g/dL",
   "%"
  ],
  "terms": [
   "MCH",
   "Hb",
   "RBC"
  ],
  "unitNote": "1 pg = 10⁻¹² g."
 },
 {
  "id": "mchc",
  "name": "MCHC",
  "group": "RBC indices",
  "lhs": "MCHC",
  "answers": [
   [
    "Hb",
    "÷",
    "Hct"
   ],
   [
    "MCH",
    "÷",
    "MCV"
   ]
  ],
  "tiles": [
   "Hb",
   "Hct",
   "MCH",
   "MCV",
   "RBC",
   "÷",
   "×"
  ],
  "display": "MCHC = Hb (g/dL) / Hct (L/L) → g/dL. Normal ≈ 34 g/dL (range ≈ 31–36 g/dL).",
  "why": "",
  "source": "Guyton & Hall 14e, ch.33, p.439 (RBCs concentrate Hb up to ≈ 34 g/100 ml of cells)",
  "calcs": [
   {
    "id": "q103",
    "q": "Hct = 45%, Hb = 15 g/dL, RBC = 5 × 10⁶/µL. What is the MCHC?",
    "answer": "≈ 33.3 g/dL (normochromic)",
    "unit": "g/dL",
    "accept": [
     32.8,
     33.8
    ],
    "why": "MCHC = 15 / 0.45 = 33.3 g/dL.",
    "source": "Normal ranges: Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028); Guyton & Hall 14e, ch.33 (Fig. 33-3)",
    "note": "Index formulas: Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/"
   },
   {
    "id": "q104",
    "q": "Hct = 33%, Hb = 9.6 g/dL, RBC = 4.4 × 10⁶/µL. What is the MCHC?",
    "answer": "≈ 29.1 g/dL (hypochromic)",
    "unit": "g/dL",
    "accept": [
     28.6,
     29.6
    ],
    "why": "MCHC = 9.6 / 0.33 = 29.1 g/dL.",
    "source": "Normal ranges: Guyton & Hall 14e, back-matter table 'Normal Values for Selected Common Laboratory Measurements' (PDF p.1028); Guyton & Hall 14e, ch.33 (Fig. 33-3)",
    "note": "Index formulas: Web (not in either book): Open Education Alberta, 'Red Blood Cell Indices, Colour, and Size' – https://pressbooks.openeducationalberta.ca/mlsci/chapter/red-blood-cell-indices-colour-and-size/"
   }
  ],
  "note": "MCHC also equals MCH ÷ MCV with consistent units. Formula and range: Open Education Alberta (not in Guyton or Costanzo); Guyton ch.33, p.439 gives ≈ 34 g/100 ml of cells.",
  "key": {
   "Hb": "hemoglobin",
   "Hct": "hematocrit (L/L)",
   "MCH": "mean corpuscular hemoglobin",
   "MCV": "mean corpuscular volume",
   "RBC": "red cell count (×10¹²/L)"
  },
  "units": [
   "g/dL",
   "pg",
   "fL",
   "mg"
  ],
  "terms": [
   "MCHC",
   "MCH",
   "MCV"
  ]
 },
 {
  "id": "o2",
  "name": "O₂ bound to hemoglobin",
  "group": "RBC indices",
  "lhs": "O₂ capacity",
  "answers": [
   [
    "1.34",
    "×",
    "Hb"
   ]
  ],
  "tiles": [
   "1.34",
   "Hb",
   "Hct",
   "0.6",
   "×",
   "÷"
  ],
  "display": "O₂ bound to Hb (ml per 100 ml blood) = 1.34 × Hb (g/dL) at 100% saturation",
  "why": "Each gram of hemoglobin binds 1.34 ml O₂ when fully saturated. Average man (Hb 15 g/dL) ≈ 20 ml O₂ per 100 ml blood.",
  "source": "Guyton & Hall 14e, ch.33, p.439",
  "calcs": [
   {
    "id": "q105",
    "q": "How much O₂ can 100 ml of blood carry bound to hemoglobin in an average man (Hb 15 g/dL)?",
    "answer": "≈ 20.1 ml O₂ per 100 ml (≈ 20 ml); women (Hb 14) ≈ 18.8 ml",
    "unit": "ml/100 ml",
    "accept": [
     19.5,
     20.5
    ],
    "why": "Each gram of Hb binds 1.34 ml O₂ at 100% saturation: 15 × 1.34.",
    "source": "Guyton & Hall 14e, ch.33, p.439"
   }
  ],
  "key": {
   "Hb": "hemoglobin",
   "Hct": "hematocrit (L/L)"
  },
  "units": [
   "ml O₂ per 100 ml blood",
   "mmHg",
   "%",
   "g/dL"
  ],
  "terms": [
   "O2cap",
   "Hb",
   "SaO2"
  ],
  "unitNote": "Often written ml/dL or vol%."
 }
];
