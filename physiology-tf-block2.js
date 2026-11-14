/* physiology-tf-block2.js — Physiology 2nd Block Test, True/False bank (question data only; UI lives in index.html).
 * Sources: photos of the professor's screen (block_2 zip, 77 photos; Test 2 MP/Spirometry/Sim zip, 93 photos);
 * answer = "Správná odpověď". Stems marked "Student notes" come from the Word notes in the Test 2 zip,
 * which carry no professor key, so their answers are from standard physiology (Guyton & Hall).
 * Same shape as physiology-tf.js: each stem has statements A..; answer true/false.
 * num starts at 201 so stems never collide with the 1st Block Test inside one session.
 * Stems that also appear in the 1st Block Test are copied word for word, so progress and flags are shared.
 * Where the photo does not show the key (ID 710, ID 1972, "Membrane potential") the answer is from
 * standard physiology (Guyton & Hall) and the stem's note says so. */
window.PHYSIO_TF_B2 = {
 "Cardiovascular": [
  {
   "num": 201,
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
   ],
   "note": "Also in the 1st Block Test (Q110), so your progress on it is shared."
  },
  {
   "num": 208,
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
   ],
   "note": "Also in the 1st Block Test (Q103), so your progress on it is shared."
  },
  {
   "num": 225,
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
   "note": "5640 is the same question with slightly different wording. Also in the 1st Block Test (Q106), so your progress on it is shared."
  },
  {
   "num": 227,
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
   "note": "Absorption takes several minutes, so the effects appear over the following tens of minutes. Also in the 1st Block Test (Q107), so your progress on it is shared."
  },
  {
   "num": 229,
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
   "note": "5825 is the same question in the SIM_2 set. Also in the 1st Block Test (Q114), so your progress on it is shared."
  },
  {
   "num": 231,
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
   ],
   "note": "Also in the 1st Block Test (Q113), so your progress on it is shared."
  },
  {
   "num": 236,
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
   ],
   "note": "Also in the 1st Block Test (Q121), so your progress on it is shared."
  },
  {
   "num": 238,
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
   ],
   "note": "Also in the 1st Block Test (Q109), so your progress on it is shared."
  },
  {
   "num": 239,
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
   ],
   "note": "Also in the 1st Block Test (Q120), so your progress on it is shared."
  },
  {
   "num": 241,
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
   ],
   "note": "Also in the 1st Block Test (Q123), so your progress on it is shared."
  },
  {
   "num": 242,
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
   "note": "Statement B refers to the right ventricle. Also in the 1st Block Test (Q125), so your progress on it is shared."
  },
  {
   "num": 340,
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
   ],
   "note": "Also in the 1st Block Test (Q112), so your progress on it is shared."
  }
 ],
 "Membrane potential": [
  {
   "num": 202,
   "ref": "Past paper (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Depolarisation during an action potential:",
   "statements": [
    {
     "l": "A",
     "text": "is immediately followed by hyperpolarisation in case K+ voltage-dependent channels are blocked",
     "answer": false,
     "why": "Blocking voltage-gated K+ channels slows and prolongs repolarisation; it removes the after-hyperpolarisation instead of causing it."
    },
    {
     "l": "B",
     "text": "occurs at the initial phase of the AP and is caused by the stimulation current or activation of voltage-dependent Na+ channels",
     "answer": true,
     "why": "The stimulus brings the membrane to threshold, then voltage-gated Na+ channels open and drive the upstroke."
    },
    {
     "l": "C",
     "text": "usually occurs due to the influx of Na+ ions, but can be caused also by efflux of K+ ions",
     "answer": false,
     "why": "K+ efflux carries positive charge out of the cell, so it repolarises or hyperpolarises; it never depolarises."
    },
    {
     "l": "D",
     "text": "is usually faster than repolarisation",
     "answer": true,
     "why": "Na+ channels open within a fraction of a millisecond; the delayed-rectifier K+ channels that repolarise open more slowly."
    },
    {
     "l": "E",
     "text": "is followed by repolarisation, which could be caused by K+ current going through the leaky K+ channels",
     "answer": true,
     "why": "Repolarisation is mainly voltage-gated K+ current, but leak K+ channels also pull the membrane back toward E(K), and in some cells they are enough on their own."
    }
   ]
  },
  {
   "num": 205,
   "ref": "ID 4491",
   "topic": "Membrane potential",
   "subtopic": "Sensory coding",
   "stem": "An increase in action potential frequency in a sensory nerve usually signifies:",
   "statements": [
    {
     "l": "A",
     "text": "Increased intensity of the stimulus",
     "answer": true,
     "why": "Stimulus intensity is frequency-coded: a stronger stimulus gives a larger receptor potential and more APs per second."
    },
    {
     "l": "B",
     "text": "Termination of the stimulus (consider a static, stationary sensory receptor)",
     "answer": false,
     "why": "When the stimulus stops, a static receptor's firing falls back toward baseline; it does not rise."
    },
    {
     "l": "C",
     "text": "Adaptation of the receptor",
     "answer": false,
     "why": "Adaptation is a decline in firing frequency during a maintained stimulus."
    },
    {
     "l": "D",
     "text": "A constant and maintained stimulus",
     "answer": false,
     "why": "A constant stimulus gives steady or adapting (decreasing) firing, not an increase."
    },
    {
     "l": "E",
     "text": "Increased conduction speed of action potentials",
     "answer": false,
     "why": "Conduction velocity depends on axon diameter and myelination, not on firing frequency."
    }
   ]
  },
  {
   "num": 206,
   "ref": "ID 4480",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "Which cells do not exhibit a resting membrane potential?",
   "statements": [
    {
     "l": "A",
     "text": "Dead cells",
     "answer": true,
     "why": "Without ATP the Na+/K+ pump stops, gradients dissipate and the potential falls to about zero."
    },
    {
     "l": "B",
     "text": "Cells without a plasma membrane",
     "answer": true,
     "why": "A potential difference needs a membrane to separate the charges; no membrane, no membrane potential."
    },
    {
     "l": "C",
     "text": "Cells without leaky ion channels",
     "answer": false,
     "why": "Without leak channels the RMP would be small, but the Na+/K+ pump is electrogenic, so a living cell with a membrane still has some potential. The key marks only A and B. (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "D",
     "text": "Cells without ionic pumps",
     "answer": false,
     "why": "Gradients would run down only slowly; the pumps' direct electrogenic share is just a few mV."
    },
    {
     "l": "E",
     "text": "Cells without voltage-gated channels",
     "answer": false,
     "why": "Voltage-gated channels are needed for action potentials, not for the resting potential."
    },
    {
     "l": "F",
     "text": "Cells whose K+ equilibrium potential equals the resting membrane potential",
     "answer": false,
     "why": "That cell still has a resting potential; it is simply equal to E(K) (as in glial cells)."
    }
   ]
  },
  {
   "num": 207,
   "ref": "ID 4490",
   "topic": "Membrane potential",
   "subtopic": "Nerve conduction",
   "stem": "Saltatory conduction in myelinated axons stems from the facts that:",
   "statements": [
    {
     "l": "A",
     "text": "Salt concentration is increased beneath the myelin segments",
     "answer": false,
     "why": "\"Saltatory\" comes from Latin saltare, to jump; it has nothing to do with salt."
    },
    {
     "l": "B",
     "text": "Non-gated ion channels are present beneath the segments of myelin",
     "answer": false,
     "why": "The internodal membrane has few channels of any kind; that is part of why it does not fire."
    },
    {
     "l": "C",
     "text": "Membrane radial resistance is decreased due to the numerous segments of myelin",
     "answer": false,
     "why": "Myelin increases membrane resistance and decreases capacitance, so current is not lost across the internode."
    },
    {
     "l": "D",
     "text": "Voltage-gated sodium channels are concentrated at the nodes of Ranvier and missing in-between",
     "answer": true,
     "why": "APs are regenerated only at the nodes, so the impulse jumps from node to node."
    },
    {
     "l": "E",
     "text": "Capacitance of membrane is decreased at the nodes of Ranvier",
     "answer": false,
     "why": "Capacitance is decreased along the myelinated internodes; the bare nodes have the normal (higher) capacitance."
    }
   ]
  },
  {
   "num": 209,
   "ref": "ID 4508",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "As the intensity of a suprathreshold stimulus is increased:",
   "statements": [
    {
     "l": "A",
     "text": "the amplitude of action potentials increases",
     "answer": false,
     "why": "The AP is all-or-none: once threshold is crossed, its size is fixed."
    },
    {
     "l": "B",
     "text": "the duration of action potentials increases",
     "answer": false,
     "why": "The AP shape and duration do not depend on stimulus strength."
    },
    {
     "l": "C",
     "text": "the speed with which action potentials are propagated (along the axon) increases",
     "answer": false,
     "why": "Conduction velocity is a property of the axon (diameter, myelin), not of the stimulus."
    },
    {
     "l": "D",
     "text": "the frequency with which action potentials are generated increases",
     "answer": true,
     "why": "A stronger stimulus reaches threshold earlier in the relative refractory period, so APs fire more often."
    },
    {
     "l": "E",
     "text": "the absolute refractory period of the excitable cell is significantly prolonged",
     "answer": false,
     "why": "The absolute refractory period depends on Na+ channel inactivation, not on stimulus strength."
    }
   ]
  },
  {
   "num": 211,
   "ref": "ID 4507",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "In hyperkalemia, the resting membrane potential compared to the normal condition:",
   "statements": [
    {
     "l": "A",
     "text": "moves further from 0 millivolts, becomes more negative",
     "answer": false,
     "why": "Higher extracellular K+ makes E(K) less negative, so the membrane depolarises."
    },
    {
     "l": "B",
     "text": "moves towards 0 millivolts, becomes more positive",
     "answer": true,
     "why": "The K+ gradient is smaller, E(K) moves toward 0 and the RMP follows (depolarisation)."
    },
    {
     "l": "C",
     "text": "remains unaffected if intracellular K+ concentration decreases appropriately",
     "answer": false,
     "why": "In theory a proportional fall in intracellular K+ would keep the ratio and E(K) unchanged, but the key marks this false: in hyperkalemia intracellular K+ does not adjust like this, so the RMP still depolarises. (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "D",
     "text": "attains a lower absolute value",
     "answer": true,
     "why": "For example, from -90 mV to -80 mV: the number is smaller in absolute terms."
    },
    {
     "l": "E",
     "text": "is usually not changed because of leak channels compensating that change",
     "answer": false,
     "why": "The leak channels are mostly K+ channels, which is exactly why the RMP follows extracellular K+."
    }
   ]
  },
  {
   "num": 213,
   "ref": "ID 4522",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "The frequency of action potentials in humans:",
   "statements": [
    {
     "l": "A",
     "text": "Can reach 100 kHz",
     "answer": false,
     "why": "The absolute refractory period (about 1 ms) limits firing to roughly 1 kHz at most."
    },
    {
     "l": "B",
     "text": "Has a small effect on muscles being controlled by the firing rate of the supplying motoneuron",
     "answer": false,
     "why": "Firing rate is a main way to grade force (summation up to tetanus), so the effect is large."
    },
    {
     "l": "C",
     "text": "Can be modulated by IPSPs and EPSPs impinging on the dendritic tree of the firing neuron",
     "answer": true,
     "why": "Synaptic potentials summed at the axon hillock set how fast the neuron fires."
    },
    {
     "l": "D",
     "text": "Is significantly limited by the refractory period of the firing neuron",
     "answer": true,
     "why": "A new AP cannot start during the absolute refractory period, which caps the frequency."
    },
    {
     "l": "E",
     "text": "Can reach 10 kHz",
     "answer": false,
     "why": "That would need a refractory period of 0.1 ms; real neurons reach about 1 kHz at most."
    },
    {
     "l": "F",
     "text": "Can reach 1 Hz",
     "answer": true,
     "why": "Low frequencies such as 1 Hz are common, for example spontaneous or tonic firing."
    }
   ]
  },
  {
   "num": 223,
   "ref": "Past paper (MP)",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "Membrane potential:",
   "statements": [
    {
     "l": "A",
     "text": "is calculated entirely by the Nernst equation only",
     "answer": false,
     "why": "Nernst gives the equilibrium potential of a single ion; the membrane potential needs the Goldman (GHK) equation, which uses several ions and their permeabilities."
    },
    {
     "l": "B",
     "text": "is determined entirely by concentration differences of respective ions across the membrane",
     "answer": false,
     "why": "Membrane permeabilities (open channels) matter as much as concentration gradients."
    },
    {
     "l": "C",
     "text": "can be experimentally measured without measuring the intracellular potential",
     "answer": false,
     "why": "It is the difference between the inside and outside, so an intracellular (or patch) electrode is needed."
    },
    {
     "l": "D",
     "text": "is the difference of potentials across the cellular membrane",
     "answer": true,
     "why": "By definition, the inside potential minus the outside potential."
    },
    {
     "l": "E",
     "text": "is constant (not varying more than +-3 mV) for most cells during the day",
     "answer": false,
     "why": "It changes with extracellular K+, hormones, metabolism and activity, not only during action potentials."
    },
    {
     "l": "F",
     "text": "is influenced by the local extracellular K+ concentration",
     "answer": true,
     "why": "The resting membrane is mostly K+-permeable, so the RMP follows extracellular K+ (see hyperkalemia)."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. The professor's answer is not visible, and the beginning of each statement is hidden behind a classmate, so the wording is reconstructed from the visible ends."
  },
  {
   "num": 244,
   "ref": "ID 1956",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Blocking of roughly 50% of sodium channels by a specific blocker:",
   "statements": [
    {
     "l": "A",
     "text": "could considerably prolong action potential duration (APD)",
     "answer": true,
     "why": "Fewer Na+ channels make the upstroke slower and the whole AP longer; the professor's key marks this true. (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "B",
     "text": "could considerably reduce the amplitude of the AP",
     "answer": true,
     "why": "Less Na+ current means a lower peak (overshoot)."
    },
    {
     "l": "C",
     "text": "is medically feasible even in vivo",
     "answer": true,
     "why": "Local anaesthetics (lidocaine) and class I antiarrhythmics block Na+ channels in patients."
    },
    {
     "l": "D",
     "text": "could be lethal",
     "answer": true,
     "why": "Systemic Na+ channel block (for example lidocaine or tetrodotoxin poisoning) can stop the heart or breathing."
    },
    {
     "l": "E",
     "text": "could reduce the frequency of action potentials",
     "answer": true,
     "why": "Threshold is reached later and recovery from inactivation is slower, so firing rate falls."
    }
   ],
   "note": "Only 11% of the class marked D; the professor counts it true because Na+ channel blockers can be fatal in overdose."
  },
  {
   "num": 245,
   "ref": "Past paper (MP)",
   "topic": "Membrane potential",
   "subtopic": "Synaptic integration",
   "stem": "On which part(s) of a neuron can summation of membrane potentials typically occur?",
   "statements": [
    {
     "l": "A",
     "text": "presynaptic membrane",
     "answer": false,
     "why": "The presynaptic terminal releases transmitter; it does not integrate synaptic inputs."
    },
    {
     "l": "B",
     "text": "postsynaptic membrane",
     "answer": true,
     "why": "EPSPs and IPSPs arise and add up on the postsynaptic (dendritic) membrane."
    },
    {
     "l": "C",
     "text": "soma",
     "answer": true,
     "why": "Graded potentials spread to the soma and sum there before reaching the axon hillock."
    },
    {
     "l": "D",
     "text": "hillock",
     "answer": false,
     "why": "The key marks this false: the hillock is where the summed potential triggers the AP, not where summation typically takes place. (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "E",
     "text": "axon",
     "answer": false,
     "why": "The axon conducts all-or-none APs; it does not sum graded potentials."
    }
   ]
  },
  {
   "num": 246,
   "ref": "ID 1563",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Hyperpolarisation:",
   "statements": [
    {
     "l": "A",
     "text": "is overshoot of the membrane potential to positive values",
     "answer": false,
     "why": "Overshoot (positive values) belongs to depolarisation; hyperpolarisation goes more negative than the RMP."
    },
    {
     "l": "B",
     "text": "may be caused by increased conductivity for K+ or Cl-",
     "answer": true,
     "why": "K+ efflux or Cl- influx pushes the membrane toward their negative equilibrium potentials."
    },
    {
     "l": "C",
     "text": "has no significant importance in neurons",
     "answer": false,
     "why": "IPSPs and after-hyperpolarisation shape firing and limit frequency."
    },
    {
     "l": "D",
     "text": "usually follows the AP spike",
     "answer": true,
     "why": "Slow closure of voltage-gated K+ channels causes the after-hyperpolarisation."
    }
   ]
  },
  {
   "num": 247,
   "ref": "Past paper (MP)",
   "topic": "Membrane potential",
   "subtopic": "Nerve conduction",
   "stem": "Which mechanism(s) is/are NECESSARY for the propagation of the action potential across long distances (> 1 cm)?",
   "statements": [
    {
     "l": "A",
     "text": "Myelinization",
     "answer": false,
     "why": "Unmyelinated axons also conduct APs over long distances, only more slowly."
    },
    {
     "l": "B",
     "text": "Very good electrical conductance of the tissues",
     "answer": false,
     "why": "Axoplasm conducts poorly; passive current fades within millimetres."
    },
    {
     "l": "C",
     "text": "Saltatory conduction",
     "answer": false,
     "why": "Saltatory conduction speeds things up but is not necessary (unmyelinated fibres lack it)."
    },
    {
     "l": "D",
     "text": "Subsequent activation of voltage-operated channels along axons",
     "answer": true,
     "why": "Each patch of membrane regenerates the AP, so it travels without decrement."
    },
    {
     "l": "E",
     "text": "Presence of voltage-gated channels",
     "answer": true,
     "why": "Without voltage-gated Na+ channels there is no regeneration, only decaying passive spread."
    }
   ]
  },
  {
   "num": 248,
   "ref": "Past paper (MP)",
   "topic": "Membrane potential",
   "subtopic": "Equilibrium potentials",
   "stem": "Potassium equilibrium potential E(K):",
   "statements": [
    {
     "l": "A",
     "text": "is usually not identical to the resting membrane potential of a neuron",
     "answer": true,
     "why": "The RMP (about -70 mV) is less negative than E(K) (about -90 mV) because of some Na+ leak."
    },
    {
     "l": "B",
     "text": "its absolute value is lower than that of the sodium equilibrium potential E(Na)",
     "answer": false,
     "why": "|E(K)| is about 90 mV and |E(Na)| about 60 mV, so E(K) is larger in absolute value."
    },
    {
     "l": "C",
     "text": "the value depends on membrane permeability for K+",
     "answer": false,
     "why": "The Nernst potential depends only on the concentration ratio (and temperature), not on permeability."
    },
    {
     "l": "D",
     "text": "the value depends on the transmembrane K+ concentration gradient",
     "answer": true,
     "why": "E(K) = 61 x log([K+]out/[K+]in)."
    }
   ]
  },
  {
   "num": 249,
   "ref": "ID 1568",
   "topic": "Membrane potential",
   "subtopic": "Equilibrium potentials",
   "stem": "Which of the following ions exhibits the greatest Nernst potential in a cortical neuron?",
   "statements": [
    {
     "l": "A",
     "text": "Na+",
     "answer": false,
     "why": "E(Na) is about +60 mV."
    },
    {
     "l": "B",
     "text": "K+",
     "answer": false,
     "why": "E(K) is about -90 mV."
    },
    {
     "l": "C",
     "text": "Ca2+",
     "answer": true,
     "why": "The about 10,000-fold gradient gives E(Ca) of roughly +120 mV or more, the largest of all."
    },
    {
     "l": "D",
     "text": "Cl-",
     "answer": false,
     "why": "E(Cl) is about -70 to -90 mV."
    },
    {
     "l": "E",
     "text": "A- (intracellular anions)",
     "answer": false,
     "why": "Large intracellular anions cannot cross the membrane, so they have no meaningful Nernst potential."
    }
   ]
  },
  {
   "num": 250,
   "ref": "ID 1771",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "Which of the following mechanisms/properties change most when the membrane potential changes?",
   "statements": [
    {
     "l": "A",
     "text": "Na-K ATPase",
     "answer": false,
     "why": "Pump activity changes slowly and contributes only a few mV."
    },
    {
     "l": "B",
     "text": "Ionic concentration gradients",
     "answer": false,
     "why": "Only a tiny number of ions cross during an AP; concentrations barely change."
    },
    {
     "l": "C",
     "text": "Membrane permeability",
     "answer": true,
     "why": "Opening and closing of ion channels (permeability) is what changes the membrane potential."
    },
    {
     "l": "D",
     "text": "Concentration of nondiffusible anions",
     "answer": false,
     "why": "These are fixed inside the cell."
    },
    {
     "l": "E",
     "text": "Electrical resistance of the membrane",
     "answer": false,
     "why": "The key marks this false: what changes is ion-specific permeability, not the membrane as a resistor in general. (Source: the professor's key, not Guyton & Hall.)"
    }
   ]
  },
  {
   "num": 251,
   "ref": "Past paper (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Threshold potential:",
   "statements": [
    {
     "l": "A",
     "text": "has similar dynamics as the AP",
     "answer": false,
     "why": "Threshold is a level of membrane potential, not an event with its own time course."
    },
    {
     "l": "B",
     "text": "if reached, AP is commonly elicited",
     "answer": true,
     "why": "Crossing threshold starts the regenerative Na+ influx."
    },
    {
     "l": "C",
     "text": "is less negative than the RMP",
     "answer": true,
     "why": "For example -55 mV against a resting -70 mV."
    },
    {
     "l": "D",
     "text": "a normal value can be -55 mV",
     "answer": true,
     "why": "Typical neuronal threshold is about -55 mV."
    },
    {
     "l": "E",
     "text": "is determined mainly by voltage characteristics of ion channels",
     "answer": true,
     "why": "Threshold is where voltage-gated Na+ current starts to exceed K+ outward current."
    },
    {
     "l": "F",
     "text": "is determined mainly by the sodium Nernst potential",
     "answer": false,
     "why": "E(Na) (+60 mV) sets the peak the AP approaches, not the threshold."
    }
   ]
  },
  {
   "num": 252,
   "ref": "Past paper (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Among other currents, the sodium one typically dominates during:",
   "statements": [
    {
     "l": "A",
     "text": "Depolarisation",
     "answer": true,
     "why": "Na+ influx through voltage-gated channels drives the upstroke."
    },
    {
     "l": "B",
     "text": "Repolarisation",
     "answer": false,
     "why": "K+ efflux dominates repolarisation."
    },
    {
     "l": "C",
     "text": "Transpolarisation (overshoot)",
     "answer": true,
     "why": "The overshoot above 0 mV is still driven by Na+ influx toward E(Na)."
    },
    {
     "l": "D",
     "text": "Hyperpolarisation",
     "answer": false,
     "why": "K+ (or Cl-) dominates."
    },
    {
     "l": "E",
     "text": "Resting polarisation",
     "answer": false,
     "why": "At rest K+ leak dominates."
    }
   ]
  },
  {
   "num": 253,
   "ref": "Past paper (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Two subsequent sub-threshold stimuli:",
   "statements": [
    {
     "l": "A",
     "text": "Could elicit an AP",
     "answer": true,
     "why": "If they come close enough in time, their responses sum (temporal summation) to threshold."
    },
    {
     "l": "B",
     "text": "May not elicit an AP",
     "answer": true,
     "why": "If they are too far apart, each decays before the next arrives."
    },
    {
     "l": "C",
     "text": "Could be effective even if separated by less than the absolute refractory period",
     "answer": true,
     "why": "A sub-threshold stimulus fires no AP, so there is no refractory period to wait for; the closer they are, the better they sum."
    },
    {
     "l": "D",
     "text": "Could result in two APs",
     "answer": false,
     "why": "Together they reach threshold once, giving one AP."
    }
   ]
  },
  {
   "num": 254,
   "ref": "Past paper (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Absolute refractory period:",
   "statements": [
    {
     "l": "A",
     "text": "is usually shorter than 10 ms",
     "answer": true,
     "why": "In neurons it lasts about 1 ms (in cardiac muscle much longer)."
    },
    {
     "l": "B",
     "text": "equals the AP duration",
     "answer": false,
     "why": "It covers only part of the AP; the relative refractory period follows."
    },
    {
     "l": "C",
     "text": "is the period during which no further AP can be elicited",
     "answer": true,
     "why": "By definition, no stimulus of any strength can fire another AP."
    },
    {
     "l": "D",
     "text": "is based on Na+ channel inactivation",
     "answer": true,
     "why": "Inactivated Na+ channels cannot reopen until the membrane repolarises."
    }
   ]
  },
  {
   "num": 255,
   "ref": "ID 1560 (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "During the AP of a neuron there is a dramatic change in permeability for:",
   "statements": [
    {
     "l": "A",
     "text": "Na+",
     "answer": true,
     "why": "Na+ permeability rises several hundred-fold during the upstroke."
    },
    {
     "l": "B",
     "text": "K+",
     "answer": true,
     "why": "K+ permeability increases during repolarisation."
    },
    {
     "l": "C",
     "text": "Cl-",
     "answer": false,
     "why": "Cl- permeability does not change dramatically during a neuronal AP."
    },
    {
     "l": "D",
     "text": "Ca2+",
     "answer": false,
     "why": "Important in cardiac muscle and at nerve terminals, but not the axonal AP."
    },
    {
     "l": "E",
     "text": "H+",
     "answer": false,
     "why": "Not involved."
    },
    {
     "l": "F",
     "text": "Mg2+",
     "answer": false,
     "why": "Not involved."
    }
   ]
  },
  {
   "num": 256,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "Resting membrane potential:",
   "statements": [
    {
     "l": "A",
     "text": "respects the all-or-nothing principle",
     "answer": false,
     "why": "All-or-nothing describes the action potential."
    },
    {
     "l": "B",
     "text": "spreads without decrement",
     "answer": false,
     "why": "Propagation without decrement is a property of the action potential."
    },
    {
     "l": "C",
     "text": "is a difference between electrical charges on both sides of the membrane",
     "answer": true,
     "why": "The inside is negative relative to the outside."
    },
    {
     "l": "D",
     "text": "is vital for the cell",
     "answer": true,
     "why": "It drives secondary transport, volume control and excitability."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 257,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "A membrane potential can be found on the membrane of:",
   "statements": [
    {
     "l": "A",
     "text": "Neurons",
     "answer": true,
     "why": "Neurons have an RMP of about -70 mV."
    },
    {
     "l": "B",
     "text": "Myocytes",
     "answer": true,
     "why": "Skeletal and cardiac muscle about -90 mV."
    },
    {
     "l": "C",
     "text": "Erythrocytes",
     "answer": true,
     "why": "Red cells have a small membrane potential (about -10 mV)."
    },
    {
     "l": "D",
     "text": "All cells",
     "answer": true,
     "why": "Every living cell with a membrane has a membrane potential; only excitable cells can fire APs."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 258,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Ion composition",
   "stem": "Mark the most numerous ions of the ECF:",
   "statements": [
    {
     "l": "A",
     "text": "Na+",
     "answer": true,
     "why": "About 142 mmol/L, the main ECF cation."
    },
    {
     "l": "B",
     "text": "K+",
     "answer": false,
     "why": "Only about 4 mmol/L outside (it is the main ICF cation)."
    },
    {
     "l": "C",
     "text": "Ca2+",
     "answer": false,
     "why": "About 2.4 mmol/L."
    },
    {
     "l": "D",
     "text": "Cl-",
     "answer": true,
     "why": "About 103 mmol/L, the main ECF anion."
    },
    {
     "l": "E",
     "text": "HCO3-",
     "answer": false,
     "why": "About 24-28 mmol/L, far fewer than Na+ and Cl-."
    },
    {
     "l": "F",
     "text": "Mg2+",
     "answer": false,
     "why": "About 1 mmol/L outside."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 259,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Among other currents, the potassium (K+) one typically dominates during:",
   "statements": [
    {
     "l": "A",
     "text": "Depolarisation",
     "answer": false,
     "why": "Na+ dominates depolarisation."
    },
    {
     "l": "B",
     "text": "Repolarisation",
     "answer": true,
     "why": "Voltage-gated K+ channels bring the membrane back down."
    },
    {
     "l": "C",
     "text": "Transpolarisation (overshoot)",
     "answer": false,
     "why": "The overshoot is still Na+-driven."
    },
    {
     "l": "D",
     "text": "Hyperpolarisation",
     "answer": true,
     "why": "K+ channels stay open a little too long (after-hyperpolarisation)."
    },
    {
     "l": "E",
     "text": "Resting polarisation",
     "answer": true,
     "why": "The resting membrane is mainly permeable to K+."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key. The 2018 notes confirm repolarisation, hyperpolarisation and resting polarisation."
  },
  {
   "num": 260,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "One stimulus applied to a neuron can, as a response, produce:",
   "statements": [
    {
     "l": "A",
     "text": "No action potential",
     "answer": true,
     "why": "If it is sub-threshold."
    },
    {
     "l": "B",
     "text": "One action potential",
     "answer": true,
     "why": "A brief supra-threshold stimulus."
    },
    {
     "l": "C",
     "text": "Two action potentials",
     "answer": true,
     "why": "A stimulus lasting longer than the refractory period can fire again."
    },
    {
     "l": "D",
     "text": "Trains of action potentials",
     "answer": true,
     "why": "A long, sustained stimulus produces repetitive firing."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 261,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Ion composition",
   "stem": "Which of the following ions exhibits the greatest transmembrane concentration gradient?",
   "statements": [
    {
     "l": "A",
     "text": "Na+",
     "answer": false,
     "why": "About 142 against 10 mmol/L, roughly 14-fold."
    },
    {
     "l": "B",
     "text": "K+",
     "answer": false,
     "why": "About 140 against 4 mmol/L, roughly 35-fold."
    },
    {
     "l": "C",
     "text": "Ca2+",
     "answer": true,
     "why": "About 2.4 mmol/L against 0.0001 mmol/L, roughly 10,000-fold."
    },
    {
     "l": "D",
     "text": "Cl-",
     "answer": false,
     "why": "About 103 against 4-10 mmol/L, roughly 10-25-fold."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 262,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "The relation between the intensity and duration of the threshold stimulus is:",
   "statements": [
    {
     "l": "A",
     "text": "linear",
     "answer": false,
     "why": "The strength-duration curve is curved."
    },
    {
     "l": "B",
     "text": "logarithmic",
     "answer": false,
     "why": "It is a hyperbola-like curve, not logarithmic."
    },
    {
     "l": "C",
     "text": "non-linear",
     "answer": true,
     "why": "The strength-duration curve (rheobase, chronaxie) is hyperbolic: short stimuli need much higher intensity."
    },
    {
     "l": "D",
     "text": "inversely proportional",
     "answer": false,
     "why": "Not strictly: below rheobase no duration is enough, so intensity x duration is not constant."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 263,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Important features of the AP are:",
   "statements": [
    {
     "l": "A",
     "text": "decrement",
     "answer": false,
     "why": "The AP is conducted without decrement."
    },
    {
     "l": "B",
     "text": "propagation",
     "answer": true,
     "why": "The AP regenerates and travels along the membrane."
    },
    {
     "l": "C",
     "text": "the all-or-nothing principle",
     "answer": true,
     "why": "Above threshold, amplitude is fixed."
    },
    {
     "l": "D",
     "text": "graded response",
     "answer": false,
     "why": "Graded responses are typical of synaptic and receptor potentials."
    },
    {
     "l": "E",
     "text": "the ability to change the membrane permeability suddenly",
     "answer": true,
     "why": "The AP is a sudden rise in Na+ then K+ permeability."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 264,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Blocking of sodium channels would typically affect:",
   "statements": [
    {
     "l": "A",
     "text": "resting membrane potential",
     "answer": false,
     "why": "The RMP depends mainly on K+ leak channels, not on voltage-gated Na+ channels."
    },
    {
     "l": "B",
     "text": "action potential",
     "answer": true,
     "why": "The AP depends on voltage-gated Na+ channels."
    },
    {
     "l": "C",
     "text": "depolarization",
     "answer": true,
     "why": "The upstroke is Na+ influx."
    },
    {
     "l": "D",
     "text": "amplitude of AP",
     "answer": true,
     "why": "Partial block lowers the peak (see the professor's ID 1956)."
    },
    {
     "l": "E",
     "text": "sodium equilibrium potential",
     "answer": false,
     "why": "E(Na) depends only on the Na+ concentration ratio."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key. One student answer sheet ticked A and E; both are false."
  },
  {
   "num": 265,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Ion composition",
   "stem": "Mark the three least numerous ions of the ECF:",
   "statements": [
    {
     "l": "A",
     "text": "K+",
     "answer": true,
     "why": "About 4 mmol/L."
    },
    {
     "l": "B",
     "text": "Na+",
     "answer": false,
     "why": "About 142 mmol/L, the most numerous."
    },
    {
     "l": "C",
     "text": "Cl-",
     "answer": false,
     "why": "About 103 mmol/L."
    },
    {
     "l": "D",
     "text": "HCO3-",
     "answer": true,
     "why": "About 24 mmol/L, fewer than Na+ and Cl-."
    },
    {
     "l": "E",
     "text": "Mg2+",
     "answer": true,
     "why": "About 1 mmol/L."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 266,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "Which ion determines the resting membrane potential most, and why?",
   "statements": [
    {
     "l": "A",
     "text": "K+, since it has the greatest concentration gradient",
     "answer": false,
     "why": "Ca2+ has the greatest gradient; K+ dominates because of permeability."
    },
    {
     "l": "B",
     "text": "Na+, since it is the most numerous ECF ion",
     "answer": false,
     "why": "Numbers alone do not set the potential."
    },
    {
     "l": "C",
     "text": "K+, since it is the most numerous ICF ion",
     "answer": false,
     "why": "Concentration is not the reason; permeability is."
    },
    {
     "l": "D",
     "text": "Na+, due to its small size",
     "answer": false,
     "why": "Resting Na+ permeability is low."
    },
    {
     "l": "E",
     "text": "K+, due to its membrane permeability",
     "answer": true,
     "why": "The resting membrane is far more permeable to K+, so the RMP sits close to E(K)."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 267,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Blocking roughly 50% of K+ channels during an AP:",
   "statements": [
    {
     "l": "A",
     "text": "will have little effect",
     "answer": false,
     "why": "Repolarisation becomes clearly slower and the AP longer."
    },
    {
     "l": "B",
     "text": "does not affect depolarization",
     "answer": true,
     "why": "The upstroke is carried by Na+."
    },
    {
     "l": "C",
     "text": "speeds up repolarization",
     "answer": false,
     "why": "Fewer K+ channels slow repolarisation and prolong the AP."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 268,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "Which of the following conductances is the lowest?",
   "statements": [
    {
     "l": "A",
     "text": "K+ during the AP",
     "answer": false,
     "why": "High during repolarisation."
    },
    {
     "l": "B",
     "text": "K+ at rest",
     "answer": false,
     "why": "Resting K+ conductance is relatively high (it sets the RMP)."
    },
    {
     "l": "C",
     "text": "Na+ during the AP",
     "answer": false,
     "why": "Very high during the upstroke."
    },
    {
     "l": "D",
     "text": "Na+ at rest",
     "answer": true,
     "why": "Resting Na+ conductance is very low, about 1/50-1/100 of K+."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 269,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "All-or-nothing principle:",
   "statements": [
    {
     "l": "A",
     "text": "is applicable to all physiological mechanisms",
     "answer": false,
     "why": "Graded potentials and most regulations are graded."
    },
    {
     "l": "B",
     "text": "supposes that the amplitude of the response is independent of the intensity of a supra-threshold stimulus",
     "answer": true,
     "why": "That is the definition."
    },
    {
     "l": "C",
     "text": "in axons is determined by the structure and function of voltage-gated channels",
     "answer": true,
     "why": "The positive feedback of voltage-gated Na+ channels makes the response all-or-none."
    },
    {
     "l": "D",
     "text": "is unique to biological systems",
     "answer": false,
     "why": "Many technical systems (a trigger, a fuse) behave all-or-none."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key. The notes marked only B; C is also true from physiology."
  },
  {
   "num": 270,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "Which of the following play a direct physiological role in membrane potential change?",
   "statements": [
    {
     "l": "A",
     "text": "Na+/K+ ATPase",
     "answer": false,
     "why": "It maintains gradients over the long term but is too slow to change the potential directly."
    },
    {
     "l": "B",
     "text": "Ionic concentration gradients",
     "answer": true,
     "why": "Gradients provide the driving force (Nernst potentials)."
    },
    {
     "l": "C",
     "text": "Membrane permeability",
     "answer": true,
     "why": "Changes in channel opening change the potential."
    },
    {
     "l": "D",
     "text": "Concentration of nondiffusible anions",
     "answer": false,
     "why": "They are fixed and do not change the potential acutely."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 271,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Resting membrane potential",
   "stem": "Major mechanisms responsible for the membrane potential are:",
   "statements": [
    {
     "l": "A",
     "text": "Concentration gradients",
     "answer": true,
     "why": "Unequal ion distribution across the membrane."
    },
    {
     "l": "B",
     "text": "Selective membrane permeability",
     "answer": true,
     "why": "Different permeability to each ion (mainly K+)."
    },
    {
     "l": "C",
     "text": "Total (non-selective) membrane permeability",
     "answer": false,
     "why": "A membrane equally permeable to everything would have no potential."
    },
    {
     "l": "D",
     "text": "ATP",
     "answer": false,
     "why": "ATP powers the pump but does not create the potential directly."
    },
    {
     "l": "E",
     "text": "Na/K ATPase",
     "answer": false,
     "why": "Its direct electrogenic share is only a few mV; it maintains the gradients."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 272,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Activation of K+ and Na+ voltage-gated channels will result in:",
   "statements": [
    {
     "l": "A",
     "text": "Action potential",
     "answer": true,
     "why": "Na+ then K+ channel activation is the AP."
    },
    {
     "l": "B",
     "text": "Depolarization",
     "answer": true,
     "why": "From Na+ channel opening."
    },
    {
     "l": "C",
     "text": "Repolarization",
     "answer": true,
     "why": "From K+ channel opening."
    },
    {
     "l": "D",
     "text": "Hyperpolarization",
     "answer": true,
     "why": "Lingering K+ channel opening."
    },
    {
     "l": "E",
     "text": "Resting polarization",
     "answer": false,
     "why": "Rest is set by leak channels, not voltage-gated activation."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 273,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "A typical (neuronal) action potential:",
   "statements": [
    {
     "l": "A",
     "text": "spreads without decrement",
     "answer": true,
     "why": "It is regenerated along the axon."
    },
    {
     "l": "B",
     "text": "respects the all-or-nothing principle",
     "answer": true,
     "why": "Its size does not depend on stimulus strength."
    },
    {
     "l": "C",
     "text": "has an amplitude of about 100 mV",
     "answer": true,
     "why": "From about -70 mV to about +30 mV."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 274,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Equilibrium potentials",
   "stem": "Sodium equilibrium potential E(Na):",
   "statements": [
    {
     "l": "A",
     "text": "is usually not equal to the RMP of a neuron",
     "answer": true,
     "why": "E(Na) is about +60 mV; the RMP is about -70 mV."
    },
    {
     "l": "B",
     "text": "is less negative than E(K)",
     "answer": true,
     "why": "+60 mV is less negative than -90 mV."
    },
    {
     "l": "C",
     "text": "in absolute value is equal to E(K)",
     "answer": false,
     "why": "About 60 mV against about 90 mV."
    },
    {
     "l": "D",
     "text": "is determined by the transmembrane concentration gradient of Na+",
     "answer": true,
     "why": "Nernst: 61 x log([Na+]out/[Na+]in)."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key. The notes left B unmarked, but +60 mV is clearly less negative than -90 mV."
  },
  {
   "num": 275,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Equilibrium potentials",
   "stem": "Compare E(Na) and E(K):",
   "statements": [
    {
     "l": "A",
     "text": "E(K) > E(Na)",
     "answer": false,
     "why": "E(K) is about -90 mV, E(Na) about +60 mV."
    },
    {
     "l": "B",
     "text": "Absolute value of E(K) > absolute value of E(Na)",
     "answer": true,
     "why": "90 mV > 60 mV."
    },
    {
     "l": "C",
     "text": "E(K) < E(Na)",
     "answer": true,
     "why": "-90 mV < +60 mV."
    },
    {
     "l": "D",
     "text": "E(K) = E(Na)",
     "answer": false,
     "why": "They differ by about 150 mV."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 276,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "The AP directly requires the following mechanisms:",
   "statements": [
    {
     "l": "A",
     "text": "Na+ influx",
     "answer": true,
     "why": "Drives depolarisation."
    },
    {
     "l": "B",
     "text": "Na+ voltage-gated channels",
     "answer": true,
     "why": "They carry the Na+ influx."
    },
    {
     "l": "C",
     "text": "K+ voltage-gated channels",
     "answer": true,
     "why": "They repolarise the membrane."
    },
    {
     "l": "D",
     "text": "Na+ efflux",
     "answer": false,
     "why": "Na+ moves inward during the AP."
    },
    {
     "l": "E",
     "text": "Na+/K+ ATPase",
     "answer": false,
     "why": "APs still fire for a long time after the pump is blocked; it only restores gradients."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 277,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Synaptic integration",
   "stem": "Which of the following membrane potentials spread with decrement?",
   "statements": [
    {
     "l": "A",
     "text": "Graded (local) potentials",
     "answer": true,
     "why": "They spread passively and fade with distance."
    },
    {
     "l": "B",
     "text": "Excitatory postsynaptic potential (EPSP)",
     "answer": true,
     "why": "A graded potential."
    },
    {
     "l": "C",
     "text": "Inhibitory postsynaptic potential (IPSP)",
     "answer": true,
     "why": "A graded potential."
    },
    {
     "l": "D",
     "text": "Action potential",
     "answer": false,
     "why": "The AP is regenerated, so it spreads without decrement."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 278,
   "ref": "Student notes (MP)",
   "topic": "Membrane potential",
   "subtopic": "Action potential",
   "stem": "Which cells can NOT fire an action potential?",
   "statements": [
    {
     "l": "A",
     "text": "Cells with no voltage-gated (Na+) channels",
     "answer": true,
     "why": "Excitability needs a high enough density of voltage-gated Na+ channels."
    },
    {
     "l": "B",
     "text": "Cells whose resting membrane potential is close to E(Na)",
     "answer": true,
     "why": "Such a depolarised membrane keeps Na+ channels inactivated and leaves no driving force for Na+."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  }
 ],
 "DR ABC": [
  {
   "num": 203,
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
   ],
   "note": "Also in the 1st Block Test (Q105), so your progress on it is shared."
  },
  {
   "num": 210,
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
   ],
   "note": "Also in the 1st Block Test (Q117), so your progress on it is shared."
  },
  {
   "num": 224,
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
   ],
   "note": "Also in the 1st Block Test (Q122), so your progress on it is shared."
  },
  {
   "num": 237,
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
   ],
   "note": "Also in the 1st Block Test (Q104), so your progress on it is shared."
  },
  {
   "num": 240,
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
   ],
   "note": "Also in the 1st Block Test (Q124), so your progress on it is shared."
  },
  {
   "num": 243,
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
   ],
   "note": "Also in the 1st Block Test (Q118), so your progress on it is shared."
  }
 ],
 "Blood": [
  {
   "num": 204,
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
   ],
   "note": "Also in the 1st Block Test (Q102), so your progress on it is shared."
  },
  {
   "num": 235,
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
   ],
   "note": "Also in the 1st Block Test (Q116), so your progress on it is shared."
  }
 ],
 "Respiration": [
  {
   "num": 212,
   "ref": "ID 649",
   "topic": "Respiration",
   "subtopic": "Ventilation & dead space",
   "stem": "Physiologically, the ventilation of the dead space (dead space x respiratory rate) could typically be:",
   "statements": [
    {
     "l": "A",
     "text": "1 L/min",
     "answer": true,
     "why": "For example, 150 mL x 7 breaths/min, about 1 L/min, at slow breathing."
    },
    {
     "l": "B",
     "text": "5 L/min",
     "answer": true,
     "why": "For example, 150 mL x 30 breaths/min, about 4.5 L/min, during fast breathing or exercise."
    },
    {
     "l": "C",
     "text": "15 L/min",
     "answer": false,
     "why": "That would need about 100 breaths/min with a normal dead space."
    },
    {
     "l": "D",
     "text": "150 L/min",
     "answer": false,
     "why": "That is around maximal voluntary ventilation in total, not dead-space ventilation."
    },
    {
     "l": "E",
     "text": "0.1 L/min",
     "answer": false,
     "why": "Too low: even 150 mL x 12 breaths/min is about 1.8 L/min."
    },
    {
     "l": "F",
     "text": "any of the above values",
     "answer": false,
     "why": "Only the 1 and 5 L/min values are physiological."
    }
   ]
  },
  {
   "num": 214,
   "ref": "ID 654",
   "topic": "Respiration",
   "subtopic": "Pressures & mechanics",
   "stem": "During one respiratory cycle, the intra-alveolar pressure could be (not limited to resting conditions):",
   "statements": [
    {
     "l": "A",
     "text": "Higher than atmospheric",
     "answer": true,
     "why": "During expiration alveolar pressure is above atmospheric, which pushes air out."
    },
    {
     "l": "B",
     "text": "Lower than atmospheric",
     "answer": true,
     "why": "During inspiration alveolar pressure falls below atmospheric (about -1 mmHg at rest)."
    },
    {
     "l": "C",
     "text": "Equal to atmospheric",
     "answer": true,
     "why": "At end-inspiration and end-expiration there is no airflow, so the pressures are equal."
    },
    {
     "l": "D",
     "text": "-15 mmHg",
     "answer": true,
     "why": "Possible during forced inspiration, especially against resistance (the key does not limit this to rest)."
    },
    {
     "l": "E",
     "text": "-5 mmHg",
     "answer": true,
     "why": "Reached easily with deeper or faster inspiration."
    },
    {
     "l": "F",
     "text": "None of the above",
     "answer": false,
     "why": "All the values above can occur."
    }
   ]
  },
  {
   "num": 215,
   "ref": "ID 710",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "Partial pressure of oxygen in arterial blood:",
   "statements": [
    {
     "l": "A",
     "text": "is approx. 13.3 kPa (about 100 mmHg)",
     "answer": true,
     "why": "The normal arterial pO2 at sea level is about 12-13.3 kPa (90-100 mmHg)."
    },
    {
     "l": "B",
     "text": "during maximal minute ventilation at sea level can be higher than 160 mmHg (about 21 kPa)",
     "answer": false,
     "why": "Humidified inspired pO2 is only about 150 mmHg, so alveolar and arterial pO2 cannot exceed it while breathing air."
    },
    {
     "l": "C",
     "text": "determines the hemoglobin saturation in arterial blood",
     "answer": true,
     "why": "Saturation follows from pO2 along the O2-Hb dissociation curve."
    },
    {
     "l": "D",
     "text": "determines directly the hemoglobin saturation in venous blood",
     "answer": false,
     "why": "Venous saturation depends on venous pO2, which reflects tissue O2 extraction, not arterial pO2 directly."
    },
    {
     "l": "E",
     "text": "could be bigger than 50 kPa in case pure oxygen is inhaled",
     "answer": true,
     "why": "With 100% O2, alveolar pO2 is about 88 kPa and arterial pO2 can exceed 50-70 kPa."
    },
    {
     "l": "F",
     "text": "can NOT be bigger than 21 kPa in case pure oxygen is inhaled",
     "answer": false,
     "why": "21 kPa is the pO2 of air; pure O2 raises it far above that."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. The photos never show the professor's answer for this question; check it against the official key when you can."
  },
  {
   "num": 216,
   "ref": "ID 1630",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "In mild anemic hypoxia (assume low hemoglobin content), the partial pressure of O2 in arterial blood could be:",
   "statements": [
    {
     "l": "A",
     "text": "normal, similar to non-anemic individuals",
     "answer": true,
     "why": "Anemia lowers O2 content, not pO2: the lungs and gas exchange are normal."
    },
    {
     "l": "B",
     "text": "significantly higher (by 50%) due to compensatory hyperventilation",
     "answer": false,
     "why": "Peripheral chemoreceptors respond to pO2, which is normal, so there is no marked hyperventilation; a 50% rise is impossible breathing air."
    },
    {
     "l": "C",
     "text": "lower due to the increased consumption of O2",
     "answer": false,
     "why": "Arterial pO2 is set in the lungs; tissue consumption lowers venous, not arterial, pO2."
    },
    {
     "l": "D",
     "text": "proportional to the % of saturation of Hb with O2",
     "answer": true,
     "why": "The professor marks this true: pO2 and saturation rise together along the dissociation curve (the relationship is sigmoid, not strictly linear). (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "E",
     "text": "110 mmHg",
     "answer": true,
     "why": "That is within the reachable range with slightly deeper breathing at sea level; anemia itself does not lower it."
    },
    {
     "l": "F",
     "text": "higher than in alveoli",
     "answer": false,
     "why": "Arterial pO2 is always slightly below alveolar pO2 (normal A-a gradient)."
    }
   ],
   "note": "Statements B-F follow the professor's key. Statement A: answer based on the literature (Guyton & Hall), not on the provided images, because the first letter of the key is cut off on the screen (the visible part reads \",D,E\"). In anemia arterial pO2 stays normal, so A is true."
  },
  {
   "num": 217,
   "ref": "ID 1859",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "When we breathe pure oxygen, we can expect (compared to breathing atmospheric air):",
   "statements": [
    {
     "l": "A",
     "text": "the risk of oxygen toxicity over long periods",
     "answer": true,
     "why": "Hours to days of 100% O2 damage the lungs (oxygen free radicals) and, at high pressure, the CNS."
    },
    {
     "l": "B",
     "text": "increased partial pressure of O2 (pO2) in inspired air",
     "answer": true,
     "why": "Inspired pO2 rises from about 21 kPa to about 95 kPa (minus water vapour)."
    },
    {
     "l": "C",
     "text": "higher (by 10%) hemoglobin saturation",
     "answer": false,
     "why": "Hb is already about 97-98% saturated on air; there is almost no room for a 10% rise."
    },
    {
     "l": "D",
     "text": "considerably (by 20%) higher amount of oxygen in arterial blood",
     "answer": false,
     "why": "Only dissolved O2 rises (about 0.3 to 2 mL/dL), so total content goes up by roughly 10%, not 20%."
    },
    {
     "l": "E",
     "text": "significantly reduced alveolar ventilation",
     "answer": false,
     "why": "In healthy people ventilation is driven mainly by CO2, so it barely changes."
    },
    {
     "l": "F",
     "text": "significantly increased O2 consumption",
     "answer": false,
     "why": "O2 consumption is set by metabolism, not by how much O2 is available."
    }
   ]
  },
  {
   "num": 218,
   "ref": "ID 1972",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Maximal minute ventilation:",
   "statements": [
    {
     "l": "A",
     "text": "can NOT be measured in unconscious patients",
     "answer": true,
     "why": "MVV needs the patient's maximal voluntary effort and cooperation."
    },
    {
     "l": "B",
     "text": "could only be measured in healthy individuals",
     "answer": false,
     "why": "It is measured in patients too, and is reduced in obstructive and neuromuscular disease."
    },
    {
     "l": "C",
     "text": "could be 20x higher than the resting minute ventilation",
     "answer": true,
     "why": "Resting about 6-7 L/min against MVV of about 120-170 L/min, roughly 20x."
    },
    {
     "l": "D",
     "text": "during the measurement, a proportional increase of O2 consumption is observed (proportional to the actual minute ventilation)",
     "answer": false,
     "why": "The short test is far too brief for metabolism to rise in proportion; O2 consumption rises only by the extra work of the breathing muscles."
    },
    {
     "l": "E",
     "text": "could be 20x higher than the resting alveolar ventilation",
     "answer": true,
     "why": "Large tidal volumes shrink the dead-space fraction, so alveolar ventilation rises even more than minute ventilation; 20x resting (about 4-5 L/min) is reachable."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. The photos never show the professor's answer for this question; check it against the official key when you can."
  },
  {
   "num": 219,
   "ref": "ID 4552",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Peak expiratory flow (PEF):",
   "statements": [
    {
     "l": "A",
     "text": "can not be higher than one-second forced expiratory volume",
     "answer": false,
     "why": "They have different units (L/s against L), so they cannot be compared as bigger or smaller."
    },
    {
     "l": "B",
     "text": "is the parameter decreased in obstructive type of lung disease",
     "answer": true,
     "why": "Narrowed airways limit the maximal flow, as in asthma or COPD."
    },
    {
     "l": "C",
     "text": "is meaningfully measured in units of liters/second",
     "answer": true,
     "why": "PEF is a flow: spirometers report it in L/s."
    },
    {
     "l": "D",
     "text": "for one individual must be constant when measurement is repeatedly done over weeks",
     "answer": false,
     "why": "PEF varies with effort, time of day and airway tone; asthmatics monitor exactly this variability."
    },
    {
     "l": "E",
     "text": "depends on the actual lumen of airways",
     "answer": true,
     "why": "Flow depends strongly on airway radius (resistance is proportional to 1/r^4)."
    },
    {
     "l": "F",
     "text": "could be meaningfully measured in units of liters/minute",
     "answer": true,
     "why": "Peak flow meters used by patients show L/min."
    }
   ]
  },
  {
   "num": 220,
   "ref": "ID 4550",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "A 54-year-old man sustains third-degree burns in a house fire. His respiratory rate is 30/min, Hb 17 g/dL, arterial pO2 is 95 mmHg, and arterial O2 saturation is 50%. The likely causes of his low oxygen saturation are:",
   "statements": [
    {
     "l": "A",
     "text": "airway obstruction from smoke inhalation",
     "answer": false,
     "why": "That would cause hypoventilation and a low pO2, but his pO2 is normal (95 mmHg)."
    },
    {
     "l": "B",
     "text": "carbon monoxide poisoning",
     "answer": true,
     "why": "CO occupies Hb, so saturation is low while pO2 (dissolved O2) stays normal: the classic CO picture."
    },
    {
     "l": "C",
     "text": "pulmonary edema",
     "answer": false,
     "why": "Edema impairs diffusion and lowers arterial pO2, which is normal here."
    },
    {
     "l": "D",
     "text": "fever",
     "answer": false,
     "why": "Fever shifts the curve right only slightly; it cannot cause 50% saturation at pO2 95 mmHg."
    },
    {
     "l": "E",
     "text": "decreased minute ventilation",
     "answer": false,
     "why": "His RR is 30/min, and hypoventilation would lower pO2 and raise pCO2."
    }
   ]
  },
  {
   "num": 221,
   "ref": "ID 4188",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Inspiratory reserve volume is bigger compared to:",
   "statements": [
    {
     "l": "A",
     "text": "expiratory reserve volume",
     "answer": true,
     "why": "IRV is about 3 L, ERV about 1.1 L."
    },
    {
     "l": "B",
     "text": "residual volume",
     "answer": true,
     "why": "RV is about 1.2 L."
    },
    {
     "l": "C",
     "text": "tidal volume at rest",
     "answer": true,
     "why": "TV at rest is about 0.5 L."
    },
    {
     "l": "D",
     "text": "forced vital capacity",
     "answer": false,
     "why": "FVC (about 4.5-5 L) includes IRV, so it is always bigger."
    },
    {
     "l": "E",
     "text": "peak expiratory flow",
     "answer": false,
     "why": "PEF is a flow (L/s), so it cannot be compared with a volume."
    },
    {
     "l": "F",
     "text": "FEV1",
     "answer": false,
     "why": "FEV1 is about 80% of FVC (about 3.5-4 L), larger than IRV."
    }
   ]
  },
  {
   "num": 222,
   "ref": "ID 4561",
   "topic": "Respiration",
   "subtopic": "Ventilation & dead space",
   "stem": "Increasing the anatomical dead space (e.g. by a breathing mask and/or some hose):",
   "statements": [
    {
     "l": "A",
     "text": "increases the minute ventilation",
     "answer": false,
     "why": "The added tube by itself lowers alveolar ventilation at the same minute ventilation; minute ventilation rises only secondarily if CO2 builds up, so the key marks this false. (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "B",
     "text": "can kill the patient",
     "answer": true,
     "why": "If the added dead space approaches the tidal volume, alveolar ventilation falls toward zero: CO2 retention and hypoxia."
    },
    {
     "l": "C",
     "text": "can make required tidal volumes equal to vital capacity",
     "answer": true,
     "why": "With a large tube, every breath must be huge just to reach fresh air in the alveoli."
    },
    {
     "l": "D",
     "text": "imposes higher breathing work",
     "answer": true,
     "why": "Larger tidal volumes and added resistance both increase the work of breathing."
    },
    {
     "l": "E",
     "text": "will decrease the minute ventilation in case of breathing pure O2",
     "answer": false,
     "why": "Ventilation is driven mainly by CO2, which still builds up with pure O2."
    },
    {
     "l": "F",
     "text": "is less dangerous than decreasing it",
     "answer": false,
     "why": "Decreasing dead space (for example by tracheostomy) actually improves alveolar ventilation."
    }
   ]
  },
  {
   "num": 226,
   "ref": "Past paper (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Respiratory pathophysiology",
   "stem": "Assume a patient suffering from bronchial asthma. Which parameter(s) are changed?",
   "statements": [
    {
     "l": "A",
     "text": "total lung capacity (assume the patient has suffered from obstruction for years)",
     "answer": true,
     "why": "Long-standing obstruction causes air trapping and hyperinflation, so TLC increases."
    },
    {
     "l": "B",
     "text": "FEV1/FVC ratio",
     "answer": true,
     "why": "This is the hallmark of obstruction: FEV1 falls more than FVC, so the ratio is below 0.7."
    },
    {
     "l": "C",
     "text": "FEV1",
     "answer": true,
     "why": "Airway narrowing reduces the volume exhaled in the first second."
    },
    {
     "l": "D",
     "text": "tidal volume",
     "answer": false,
     "why": "Resting tidal volume is usually maintained."
    },
    {
     "l": "E",
     "text": "most of the dynamic volumes",
     "answer": true,
     "why": "Flow-dependent (dynamic) measures such as FEV1, PEF and MEF are reduced."
    }
   ]
  },
  {
   "num": 228,
   "ref": "ID 1974",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "O2:",
   "statements": [
    {
     "l": "A",
     "text": "at rest, a smaller amount of O2 is expired by the lungs than consumed by the body (assume atmospheric pressure close to 100 kPa)",
     "answer": false,
     "why": "Of about 1 L/min O2 inspired at rest, about 0.75 L/min is exhaled and about 0.25 L/min consumed, so more is exhaled than consumed."
    },
    {
     "l": "B",
     "text": "the higher the altitude (consider altitudes up to 2 km) the higher the O2 consumption",
     "answer": false,
     "why": "O2 consumption is set by metabolism, not by altitude."
    },
    {
     "l": "C",
     "text": "unconsumed O2 diffuses from the blood out of lung capillaries into the alveoli and is exhaled",
     "answer": false,
     "why": "Net O2 diffusion is from alveoli into blood; the exhaled O2 is the part that never entered the blood."
    },
    {
     "l": "D",
     "text": "the role of the lung is to get nearly all inspired O2 into the bloodstream",
     "answer": false,
     "why": "Only about a quarter of inspired O2 is taken up at rest."
    },
    {
     "l": "E",
     "text": "has a partial pressure around 13 kPa in arterial blood",
     "answer": true,
     "why": "The normal arterial pO2 is about 12-13.3 kPa."
    }
   ],
   "note": "The end of statements D and E is partly hidden in the photo; their wording is reconstructed. The key (E) is visible."
  },
  {
   "num": 230,
   "ref": "Past paper (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Vital capacity:",
   "statements": [
    {
     "l": "A",
     "text": "is the parameter that corresponds well to the functional reserve of ventilation",
     "answer": true,
     "why": "VC is the maximal volume available per breath, so it reflects the ventilatory reserve."
    },
    {
     "l": "B",
     "text": "is roughly 10x higher than the tidal volume at rest",
     "answer": true,
     "why": "About 4.5-5 L against about 0.5 L."
    },
    {
     "l": "C",
     "text": "could be measured only in healthy individuals",
     "answer": false,
     "why": "VC is measured routinely in patients; it is reduced in restrictive disease."
    },
    {
     "l": "D",
     "text": "could equal the tidal volume in some NON-physiological circumstances",
     "answer": true,
     "why": "In severe restriction or with a huge dead space, every breath may need the whole VC."
    },
    {
     "l": "E",
     "text": "50% of it could equal the tidal volume in some physiological conditions",
     "answer": true,
     "why": "During heavy exercise, tidal volume rises to about half of VC."
    }
   ]
  },
  {
   "num": 232,
   "ref": "ID 4201",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "Inhaling air containing CO can be dangerous:",
   "statements": [
    {
     "l": "A",
     "text": "always, regardless of CO concentration",
     "answer": false,
     "why": "Trace CO (for example in city air) is harmless; the danger depends on dose and time."
    },
    {
     "l": "B",
     "text": "never at normal atmospheric O2 pressure (with about 20 kPa of O2)",
     "answer": false,
     "why": "CO binds Hb about 200-250x more avidly than O2, so normal pO2 does not protect."
    },
    {
     "l": "C",
     "text": "only in closed rooms",
     "answer": false,
     "why": "Concentration and exposure time decide the risk, not the room."
    },
    {
     "l": "D",
     "text": "in case about 10 L of pure CO is inhaled within less than one hour",
     "answer": true,
     "why": "All the Hb in the body binds only about 1 L of gas (5 L blood x about 200 mL/L). Even if only part of 10 L of CO is absorbed, it is enough to reach a lethal CO-Hb level."
    },
    {
     "l": "E",
     "text": "in case about 10 L of pure CO is inhaled within less than one day",
     "answer": true,
     "why": "CO is eliminated slowly (half-time about 4-5 h on air), so 10 L over a day still accumulates to dangerous CO-Hb."
    }
   ]
  },
  {
   "num": 233,
   "ref": "ID 4202",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Significantly decreased PEF (peak expiratory flow):",
   "statements": [
    {
     "l": "A",
     "text": "usually implies pathology",
     "answer": true,
     "why": "A markedly low PEF with good effort points to airway obstruction."
    },
    {
     "l": "B",
     "text": "could indicate bronchial asthma",
     "answer": true,
     "why": "Asthma is the typical cause, and PEF monitoring is used to follow it."
    },
    {
     "l": "C",
     "text": "can be a physiological reaction to irritant gases",
     "answer": true,
     "why": "Reflex bronchoconstriction to irritants is a normal protective response that lowers PEF."
    },
    {
     "l": "D",
     "text": "indicates an obstruction type disorder",
     "answer": true,
     "why": "PEF is a flow measure, reduced mainly by obstruction."
    },
    {
     "l": "E",
     "text": "rules out restriction disease",
     "answer": false,
     "why": "Restriction can coexist, and severe restriction or poor effort can lower PEF too."
    }
   ]
  },
  {
   "num": 234,
   "ref": "Past paper (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "Increasing the O2 partial pressure in inhaled air (assume resting individuals):",
   "statements": [
    {
     "l": "A",
     "text": "increases considerably O2 delivery to tissues in healthy persons",
     "answer": false,
     "why": "Hb is already nearly saturated, so content and delivery rise only a little."
    },
    {
     "l": "B",
     "text": "increases O2 delivery to the alveoli",
     "answer": true,
     "why": "Alveolar pO2 rises with inspired pO2."
    },
    {
     "l": "C",
     "text": "decreases considerably minute ventilation in healthy persons",
     "answer": false,
     "why": "Ventilation is driven mainly by CO2, so it changes little."
    },
    {
     "l": "D",
     "text": "could significantly help diseased persons (e.g. with impaired diffusion) if alveolar ventilation is adequate",
     "answer": true,
     "why": "A higher alveolar pO2 increases the diffusion gradient and corrects hypoxemia due to diffusion limitation or V/Q mismatch."
    },
    {
     "l": "E",
     "text": "increases CO2 produced by the body",
     "answer": false,
     "why": "CO2 production is set by metabolism, not by inspired O2."
    },
    {
     "l": "F",
     "text": "increases considerably venous O2 saturation",
     "answer": false,
     "why": "Venous saturation depends on O2 delivery minus consumption, and delivery barely rises in healthy people."
    }
   ],
   "note": "Part of statements D, E and F is hidden behind a classmate in the photo; their wording is reconstructed. The key (B, D) is visible."
  },
  {
   "num": 279,
   "ref": "Past paper (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Ventilation & dead space",
   "stem": "If respiration frequency doubles and minute ventilation stays unchanged, the alveolar ventilation:",
   "statements": [
    {
     "l": "A",
     "text": "will not change",
     "answer": false,
     "why": "Tidal volume halves while dead space stays the same, so a bigger share of each breath is wasted."
    },
    {
     "l": "B",
     "text": "could increase or stay the same",
     "answer": false,
     "why": "It can only fall: VA = f x (VT - VD)."
    },
    {
     "l": "C",
     "text": "will decrease",
     "answer": true,
     "why": "Example: 12 x 500 = 6 L/min, VA = 12 x 350 = 4.2 L; 24 x 250 = 6 L/min, VA = 24 x 100 = 2.4 L."
    },
    {
     "l": "D",
     "text": "will reach about 2.5 L/min",
     "answer": false,
     "why": "The exact value depends on the starting tidal volume and dead space, so it cannot be stated in general."
    }
   ]
  },
  {
   "num": 280,
   "ref": "ID 1632",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Which of the following parameters is/are most informative in an obstruction type respiratory disorder?",
   "statements": [
    {
     "l": "A",
     "text": "vital capacity",
     "answer": false,
     "why": "VC may be normal in obstruction; it is a static volume."
    },
    {
     "l": "B",
     "text": "any static parameter",
     "answer": false,
     "why": "Obstruction is a problem of flow, shown by dynamic parameters."
    },
    {
     "l": "C",
     "text": "peak expiratory flow (PEF)",
     "answer": true,
     "why": "Airway narrowing limits maximal flow."
    },
    {
     "l": "D",
     "text": "respiratory rate",
     "answer": false,
     "why": "Not specific for obstruction."
    },
    {
     "l": "E",
     "text": "the highest airflow achieved during forceful expiration",
     "answer": true,
     "why": "That is the definition of PEF."
    }
   ]
  },
  {
   "num": 281,
   "ref": "ID 1844",
   "topic": "Respiration",
   "subtopic": "Ventilation & dead space",
   "stem": "The increase of respiratory rate results NECESSARILY in:",
   "statements": [
    {
     "l": "A",
     "text": "the increase of alveolar ventilation",
     "answer": false,
     "why": "If tidal volume falls, alveolar ventilation can stay the same or drop."
    },
    {
     "l": "B",
     "text": "the increase of dead space volume",
     "answer": false,
     "why": "Anatomical dead space is a fixed volume of the airways."
    },
    {
     "l": "C",
     "text": "the increase of dead space ventilation",
     "answer": false,
     "why": "The key marks this false: \"necessarily\" fails because the breathing pattern (and wasted volume per breath) can change too. (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "D",
     "text": "increased hemoglobin saturation in arterial blood",
     "answer": false,
     "why": "Hb is already about 97% saturated."
    }
   ],
   "note": "The professor's key for this question is empty: none of the statements is necessarily true."
  },
  {
   "num": 282,
   "ref": "ID 1896",
   "topic": "Respiration",
   "subtopic": "Gas laws",
   "stem": "The atmosphere contains 21% of oxygen. These \"21 percent\" represent:",
   "statements": [
    {
     "l": "A",
     "text": "mass fraction",
     "answer": false,
     "why": "O2 is heavier than N2, so its mass fraction is about 23%."
    },
    {
     "l": "B",
     "text": "volume percentage",
     "answer": true,
     "why": "For ideal gases, volume fraction = mole fraction."
    },
    {
     "l": "C",
     "text": "molar fraction",
     "answer": true,
     "why": "21% of the moles are O2."
    },
    {
     "l": "D",
     "text": "percentage of number of molecules",
     "answer": true,
     "why": "Moles are counts of molecules."
    },
    {
     "l": "E",
     "text": "percentage of number of moles",
     "answer": true,
     "why": "Same as the molar fraction."
    }
   ]
  },
  {
   "num": 283,
   "ref": "ID 708",
   "topic": "Respiration",
   "subtopic": "Gas exchange basics",
   "stem": "Why do we breathe?",
   "statements": [
    {
     "l": "A",
     "text": "Since this is the only way of energy release by our organism",
     "answer": false,
     "why": "Anaerobic glycolysis also releases energy, without O2."
    },
    {
     "l": "B",
     "text": "In order to obtain oxygen",
     "answer": true,
     "why": "O2 is the final electron acceptor in oxidative phosphorylation."
    },
    {
     "l": "C",
     "text": "Oxygen delivery enables production of easily removable metabolites",
     "answer": true,
     "why": "Complete oxidation gives CO2 and water, which are easy to remove (unlike lactate)."
    },
    {
     "l": "D",
     "text": "By breathing we gain a substrate for oxidation of nutrients",
     "answer": true,
     "why": "O2 is the oxidising substrate."
    },
    {
     "l": "E",
     "text": "To eliminate water",
     "answer": false,
     "why": "Some water is lost in expired air, but that is not the purpose of breathing."
    }
   ]
  },
  {
   "num": 284,
   "ref": "ID 4540",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Measuring the maximal minute ventilation:",
   "statements": [
    {
     "l": "A",
     "text": "can be dangerous",
     "answer": true,
     "why": "Hyperventilation causes hypocapnia, dizziness and even syncope."
    },
    {
     "l": "B",
     "text": "can last less than a minute and yield proper results",
     "answer": true,
     "why": "MVV is measured over 12-15 s and extrapolated to one minute."
    },
    {
     "l": "C",
     "text": "usually changes the pH of the blood",
     "answer": true,
     "why": "Blowing off CO2 causes respiratory alkalosis."
    },
    {
     "l": "D",
     "text": "usually changes the partial pressure of CO2 in blood",
     "answer": true,
     "why": "pCO2 falls (hypocapnia)."
    }
   ]
  },
  {
   "num": 285,
   "ref": "ID 4187",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Functional residual capacity is made up of:",
   "statements": [
    {
     "l": "A",
     "text": "dead space",
     "answer": false,
     "why": "Dead space is a part of the airways, not a component of FRC's definition."
    },
    {
     "l": "B",
     "text": "vital capacity",
     "answer": false,
     "why": "VC is larger than FRC."
    },
    {
     "l": "C",
     "text": "residual volume",
     "answer": true,
     "why": "FRC = RV + ERV."
    },
    {
     "l": "D",
     "text": "expiratory reserve volume",
     "answer": true,
     "why": "FRC = RV + ERV."
    },
    {
     "l": "E",
     "text": "tidal volume",
     "answer": false,
     "why": "FRC is measured at the end of a quiet expiration, before the tidal breath."
    }
   ]
  },
  {
   "num": 286,
   "ref": "ID 4574",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "The maximal volume that can be expired after maximal inspiration is:",
   "statements": [
    {
     "l": "A",
     "text": "tidal volume",
     "answer": false,
     "why": "Tidal volume is a quiet breath (about 0.5 L)."
    },
    {
     "l": "B",
     "text": "total lung capacity",
     "answer": false,
     "why": "TLC includes the residual volume, which can never be expired."
    },
    {
     "l": "C",
     "text": "forced expiratory volume",
     "answer": false,
     "why": "FEV usually means the volume in 1 s (FEV1), only part of it."
    },
    {
     "l": "D",
     "text": "maximum expiratory flow rate",
     "answer": false,
     "why": "That is a flow, not a volume."
    },
    {
     "l": "E",
     "text": "vital capacity",
     "answer": true,
     "why": "VC = maximal expiration after maximal inspiration."
    },
    {
     "l": "F",
     "text": "peak expiratory flow",
     "answer": false,
     "why": "A flow, not a volume."
    }
   ],
   "note": "The professor's key lists A and E, but option A is worth 0 points (the 2018 notes also write \"VT [0 points]\"). Statement A is therefore scored from the literature (Guyton & Hall), not from the provided images: tidal volume is a quiet breath, not a maximal expiration."
  },
  {
   "num": 287,
   "ref": "ID 1631",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Which of the following parameters cannot be assessed from the flow-volume curve (F-V curve)?",
   "statements": [
    {
     "l": "A",
     "text": "Vital capacity",
     "answer": false,
     "why": "The width of the F-V loop is the (forced) vital capacity."
    },
    {
     "l": "B",
     "text": "Any static parameter",
     "answer": false,
     "why": "VC, a static volume, can be read from the curve; RV and TLC cannot."
    },
    {
     "l": "C",
     "text": "Maximal minute ventilation (MMV)",
     "answer": true,
     "why": "MMV needs a separate one-minute (or 12-15 s) manoeuvre."
    },
    {
     "l": "D",
     "text": "Peak expiratory flow (PEF)",
     "answer": false,
     "why": "PEF is the peak of the expiratory limb."
    },
    {
     "l": "E",
     "text": "Minute ventilation (MV)",
     "answer": true,
     "why": "MV needs breathing frequency over time, not one forced loop."
    }
   ]
  },
  {
   "num": 288,
   "ref": "ID 4573",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "The partial pressure of CO2 is higher in:",
   "statements": [
    {
     "l": "A",
     "text": "alveoli than in the pulmonary arteries",
     "answer": false,
     "why": "Pulmonary arterial (mixed venous) pCO2 is about 46 mmHg, alveolar about 40 mmHg."
    },
    {
     "l": "B",
     "text": "systemic arteries than in the tissues",
     "answer": false,
     "why": "Tissues produce CO2, so tissue pCO2 is higher."
    },
    {
     "l": "C",
     "text": "systemic veins than in the systemic arteries",
     "answer": true,
     "why": "Venous about 46 mmHg against arterial about 40 mmHg."
    },
    {
     "l": "D",
     "text": "pulmonary veins than in the pulmonary arteries",
     "answer": false,
     "why": "Pulmonary veins carry arterialised blood (about 40 mmHg)."
    }
   ]
  },
  {
   "num": 289,
   "ref": "ID 4539",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "Breathing pure O2 under normal, physiological conditions:",
   "statements": [
    {
     "l": "A",
     "text": "reduces the minute ventilation significantly",
     "answer": false,
     "why": "Ventilation is driven by CO2 in healthy people."
    },
    {
     "l": "B",
     "text": "will not influence the breathing frequency considerably",
     "answer": true,
     "why": "Removing the small hypoxic drive changes little."
    },
    {
     "l": "C",
     "text": "is mostly useless in healthy subjects",
     "answer": true,
     "why": "Hb is already nearly saturated, so O2 delivery barely rises."
    },
    {
     "l": "D",
     "text": "decreases O2 consumption",
     "answer": false,
     "why": "Consumption is set by metabolism."
    },
    {
     "l": "E",
     "text": "improves oxygenation of brain neurons considerably",
     "answer": false,
     "why": "Arterial O2 content rises only slightly; cerebral vessels even constrict a little."
    }
   ]
  },
  {
   "num": 290,
   "ref": "ID 1895",
   "topic": "Respiration",
   "subtopic": "Respiratory pathophysiology",
   "stem": "If FEV1 is less than 0.75 L and FVC = 2.60 L is found in an adult, this can typically be interpreted as:",
   "statements": [
    {
     "l": "A",
     "text": "physiological finding",
     "answer": false,
     "why": "FEV1/FVC < 30% and a low FVC are clearly abnormal."
    },
    {
     "l": "B",
     "text": "mainly restriction type pulmonary disorder",
     "answer": false,
     "why": "In pure restriction FEV1/FVC is normal or high."
    },
    {
     "l": "C",
     "text": "mainly obstruction type disease",
     "answer": false,
     "why": "The very low ratio shows obstruction, but the low FVC (normal about 4.5-5 L) adds restriction; the key gives C only partial credit (3 points). (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "D",
     "text": "combination of restriction and obstruction pulmonary disorder",
     "answer": true,
     "why": "Low FVC (restriction) plus FEV1/FVC below 30% (obstruction): a mixed pattern."
    }
   ]
  },
  {
   "num": 291,
   "ref": "ID 647",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Which of the following parameters cannot be measured using a simple peak flow meter?",
   "statements": [
    {
     "l": "A",
     "text": "Vital capacity",
     "answer": true,
     "why": "A peak flow meter measures only the maximal flow."
    },
    {
     "l": "B",
     "text": "Residual volume",
     "answer": true,
     "why": "RV cannot be measured by any simple spirometry; it needs gas dilution or plethysmography."
    },
    {
     "l": "C",
     "text": "Dead space volume",
     "answer": true,
     "why": "Needs the Fowler (N2 washout) method."
    },
    {
     "l": "D",
     "text": "Peak expiratory flow",
     "answer": false,
     "why": "That is exactly what it measures."
    },
    {
     "l": "E",
     "text": "Maximal expiratory flow",
     "answer": false,
     "why": "Another name for the peak flow it measures."
    }
   ]
  },
  {
   "num": 292,
   "ref": "ID 4553",
   "topic": "Respiration",
   "subtopic": "Pressures & mechanics",
   "stem": "If the transpulmonary pressure equals zero:",
   "statements": [
    {
     "l": "A",
     "text": "a pneumothorax could have occurred",
     "answer": true,
     "why": "Air in the pleural space equalises pleural and alveolar pressure."
    },
    {
     "l": "B",
     "text": "the lungs cannot inflate",
     "answer": true,
     "why": "There is no distending pressure across the lung."
    },
    {
     "l": "C",
     "text": "elastic recoil causes the lungs to collapse",
     "answer": true,
     "why": "Nothing opposes the recoil, so the lung collapses."
    },
    {
     "l": "D",
     "text": "could be physiological if found during expiration",
     "answer": true,
     "why": "The professor marks this true: during forced expiration, pleural pressure rises and transpulmonary pressure can locally fall to zero. (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "E",
     "text": "all of these apply",
     "answer": true,
     "why": "The key marks every option true. (Source: the professor's key, not Guyton & Hall.)"
    }
   ]
  },
  {
   "num": 293,
   "ref": "ID 707",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "Which is (are) the effect(s) of hyperventilation on oxygen in arterial blood?",
   "statements": [
    {
     "l": "A",
     "text": "Total amount of O2 in arterial blood stays virtually unchanged",
     "answer": true,
     "why": "Hb is already about 97% saturated; only dissolved O2 rises slightly."
    },
    {
     "l": "B",
     "text": "Hemoglobin saturation increases considerably",
     "answer": false,
     "why": "There is only about 3% left to gain."
    },
    {
     "l": "C",
     "text": "Total amount of oxygen delivered to tissues by blood increases considerably",
     "answer": false,
     "why": "O2 content barely changes; hypocapnia even constricts cerebral vessels."
    },
    {
     "l": "D",
     "text": "Amount of dissolved O2 in arterial blood increases",
     "answer": true,
     "why": "Higher alveolar and arterial pO2 means more dissolved O2 (0.003 mL/dL per mmHg)."
    }
   ]
  },
  {
   "num": 294,
   "ref": "Past paper (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Ventilation & dead space",
   "stem": "Minute ventilation:",
   "statements": [
    {
     "l": "A",
     "text": "can be calculated from the values of pCO2 in expired and alveolar air and tidal volume",
     "answer": false,
     "why": "That combination (Bohr equation) gives dead space, not minute ventilation."
    },
    {
     "l": "B",
     "text": "at rest is less than 20% of maximal minute ventilation",
     "answer": true,
     "why": "About 6-8 L/min against an MVV of 120-170 L/min."
    },
    {
     "l": "C",
     "text": "during exercise can increase or decrease",
     "answer": true,
     "why": "The professor marks this true; ventilation usually rises, but it can dip, for example with breath-holding effort. (Source: the professor's key, not Guyton & Hall.)"
    },
    {
     "l": "D",
     "text": "can be calculated as 60 x FEV1",
     "answer": false,
     "why": "FEV1 is a single forced breath, not ventilation per minute."
    },
    {
     "l": "E",
     "text": "can be calculated as PEF/100",
     "answer": false,
     "why": "There is no such relationship."
    }
   ]
  },
  {
   "num": 295,
   "ref": "ID 4186",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "The ratio between FEV1 and FVC can approximately be:",
   "statements": [
    {
     "l": "A",
     "text": "55%",
     "answer": false,
     "why": "That indicates obstruction (below 70%)."
    },
    {
     "l": "B",
     "text": "65%",
     "answer": false,
     "why": "Below 70%, which indicates obstruction."
    },
    {
     "l": "C",
     "text": "85%",
     "answer": true,
     "why": "Normal in a healthy young adult."
    },
    {
     "l": "D",
     "text": "9/10",
     "answer": true,
     "why": "Young healthy people often reach about 90%."
    },
    {
     "l": "E",
     "text": "10/10",
     "answer": true,
     "why": "The key marks it true: in children and some young adults nearly the whole FVC is exhaled in the first second. (Source: the professor's key, not Guyton & Hall.)"
    }
   ]
  },
  {
   "num": 296,
   "ref": "Past paper (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "Hyperventilation:",
   "statements": [
    {
     "l": "A",
     "text": "could typically result in increased saturation of hemoglobin even physiologically",
     "answer": false,
     "why": "Hb is already nearly saturated at normal pO2."
    },
    {
     "l": "B",
     "text": "could lead to hypokapnia",
     "answer": true,
     "why": "More CO2 is blown off, so pCO2 falls."
    },
    {
     "l": "C",
     "text": "implies significantly increased oxygen content of blood",
     "answer": false,
     "why": "Only dissolved O2 rises a little."
    },
    {
     "l": "D",
     "text": "assuming nearly 100% saturation of Hb, hyperventilation does not provide a substantial increase of oxygen delivery to tissues",
     "answer": true,
     "why": "Content and delivery barely change."
    }
   ]
  },
  {
   "num": 297,
   "ref": "ID 653",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Which of the following parameters are dynamic ones?",
   "statements": [
    {
     "l": "A",
     "text": "Forced vital capacity",
     "answer": true,
     "why": "Measured as a forced manoeuvre over time."
    },
    {
     "l": "B",
     "text": "Mean expiratory flow",
     "answer": true,
     "why": "A flow (volume per time)."
    },
    {
     "l": "C",
     "text": "Residual volume",
     "answer": false,
     "why": "A static volume."
    },
    {
     "l": "D",
     "text": "Vital capacity",
     "answer": false,
     "why": "Static (slow VC) volume."
    },
    {
     "l": "E",
     "text": "Functional residual capacity",
     "answer": false,
     "why": "A static capacity."
    }
   ]
  },
  {
   "num": 298,
   "ref": "ID 1868",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Which of the following two examinations' results will depend most on the patient's collaboration and effort?",
   "statements": [
    {
     "l": "A",
     "text": "dead space",
     "answer": false,
     "why": "Measured during normal breathing."
    },
    {
     "l": "B",
     "text": "residual volume",
     "answer": false,
     "why": "Measured by gas dilution or plethysmography during quiet breathing."
    },
    {
     "l": "C",
     "text": "static spirometry",
     "answer": false,
     "why": "Needs cooperation but not maximal effort."
    },
    {
     "l": "D",
     "text": "forced vital capacity",
     "answer": true,
     "why": "Needs a maximal, forced effort."
    },
    {
     "l": "E",
     "text": "peak expiratory flow (PEF)",
     "answer": true,
     "why": "Strongly effort-dependent."
    }
   ]
  },
  {
   "num": 299,
   "ref": "ID 4185",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Maximal minute ventilation, compared to the resting one:",
   "statements": [
    {
     "l": "A",
     "text": "is twice as high",
     "answer": false,
     "why": "Much more than double."
    },
    {
     "l": "B",
     "text": "is twenty times higher",
     "answer": true,
     "why": "About 6-8 L/min against 120-170 L/min."
    },
    {
     "l": "C",
     "text": "is two hundred times higher",
     "answer": false,
     "why": "That would be over 1000 L/min."
    },
    {
     "l": "D",
     "text": "is higher",
     "answer": true,
     "why": "Always higher."
    }
   ]
  },
  {
   "num": 300,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Respiration parameter measurement using a flow-screen apparatus allows us to:",
   "statements": [
    {
     "l": "A",
     "text": "estimate alveolar ventilation",
     "answer": false,
     "why": "That needs dead space or CO2 measurements."
    },
    {
     "l": "B",
     "text": "estimate dead air space",
     "answer": false,
     "why": "Needs N2 washout (Fowler method)."
    },
    {
     "l": "C",
     "text": "estimate residual volume",
     "answer": false,
     "why": "RV cannot be exhaled, so a flow-volume device cannot measure it."
    },
    {
     "l": "D",
     "text": "measure dynamic respiration parameters",
     "answer": true,
     "why": "FEV1, PEF, MEF are its main output."
    },
    {
     "l": "E",
     "text": "distinguish between obstruction and restriction type lung disease",
     "answer": true,
     "why": "From the FEV1/FVC ratio and the loop shape."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 301,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Gas laws",
   "stem": "What would be the partial pressure of O2 in dry air (21%) inhaled by divers at a depth of 100 ft below sea level (about 4 atm pressure)?",
   "statements": [
    {
     "l": "A",
     "text": "21 kPa",
     "answer": false,
     "why": "That is pO2 at sea level (1 atm)."
    },
    {
     "l": "B",
     "text": "42 kPa",
     "answer": false,
     "why": "That would be 2 atm."
    },
    {
     "l": "C",
     "text": "84 kPa",
     "answer": true,
     "why": "0.21 x 400 kPa = 84 kPa."
    },
    {
     "l": "D",
     "text": "168 kPa",
     "answer": false,
     "why": "That would be 8 atm."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 302,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Residual volume:",
   "statements": [
    {
     "l": "A",
     "text": "is the volume of air left in the lungs after normal expiration",
     "answer": false,
     "why": "That is FRC."
    },
    {
     "l": "B",
     "text": "is the volume of air left in the lungs after maximal expiration",
     "answer": true,
     "why": "Definition of RV (about 1.2 L)."
    },
    {
     "l": "C",
     "text": "is the capacity of lungs restricted by disease",
     "answer": false,
     "why": "Not a definition of RV."
    },
    {
     "l": "D",
     "text": "can be measured by the inert gas dilution method",
     "answer": true,
     "why": "Helium dilution (or N2 washout or plethysmography)."
    },
    {
     "l": "E",
     "text": "does not participate in exchange of gases",
     "answer": false,
     "why": "RV air mixes with each breath and takes part in gas exchange."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 303,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Confirm the validity of the following statements:",
   "statements": [
    {
     "l": "A",
     "text": "VC > IRV > ERV > VT",
     "answer": true,
     "why": "About 4.6 > 3.0 > 1.1 > 0.5 L."
    },
    {
     "l": "B",
     "text": "VT > RV",
     "answer": false,
     "why": "VT about 0.5 L, RV about 1.2 L."
    },
    {
     "l": "C",
     "text": "FRC > RV + ERV",
     "answer": false,
     "why": "FRC = RV + ERV exactly."
    },
    {
     "l": "D",
     "text": "physiological VD < anatomical VD",
     "answer": false,
     "why": "Physiological dead space = anatomical + alveolar, so it is equal or larger."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 304,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Pressures & mechanics",
   "stem": "During inspiration:",
   "statements": [
    {
     "l": "A",
     "text": "the diaphragm moves upwards",
     "answer": false,
     "why": "It contracts and moves down."
    },
    {
     "l": "B",
     "text": "at rest no inspiratory muscle activity is needed",
     "answer": false,
     "why": "Quiet inspiration is active (diaphragm); quiet expiration is passive."
    },
    {
     "l": "C",
     "text": "pleural pressure decreases (becomes more negative)",
     "answer": true,
     "why": "From about -5 to about -7.5 cmH2O."
    },
    {
     "l": "D",
     "text": "the volume of the thorax does not substantially change",
     "answer": false,
     "why": "Thoracic volume increases; that is what draws air in."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 305,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "Total lung capacity:",
   "statements": [
    {
     "l": "A",
     "text": "physiologically depends on minute volume",
     "answer": false,
     "why": "TLC is a fixed volume, not related to ventilation per minute."
    },
    {
     "l": "B",
     "text": "increases with exercise",
     "answer": false,
     "why": "It is set by lung and chest wall size."
    },
    {
     "l": "C",
     "text": "is measured by dynamic spirometry (flow screen)",
     "answer": false,
     "why": "It contains RV, so it needs gas dilution or plethysmography."
    },
    {
     "l": "D",
     "text": "usually changes in restriction type lung disease",
     "answer": true,
     "why": "Restriction is defined by a reduced TLC."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 306,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "Concentration of CO2:",
   "statements": [
    {
     "l": "A",
     "text": "is the lowest in the anatomical dead space at the end of inspiration",
     "answer": true,
     "why": "The airways are then filled with fresh air (about 0.04% CO2)."
    },
    {
     "l": "B",
     "text": "increases in the alveoli with hyperventilation",
     "answer": false,
     "why": "Hyperventilation lowers alveolar CO2."
    },
    {
     "l": "C",
     "text": "is about the same in inspired air and alveoli",
     "answer": false,
     "why": "About 0.04% against about 5%."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key. The notes marked B as true; it is false."
  },
  {
   "num": 307,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "In VC or FVC estimation we perform 3 measurements. As the result we take the:",
   "statements": [
    {
     "l": "A",
     "text": "first value",
     "answer": false,
     "why": "The first try is often submaximal."
    },
    {
     "l": "B",
     "text": "highest value",
     "answer": true,
     "why": "The best of three acceptable attempts is reported."
    },
    {
     "l": "C",
     "text": "average value",
     "answer": false,
     "why": "Averaging would underestimate the true maximum."
    },
    {
     "l": "D",
     "text": "last value",
     "answer": false,
     "why": "Fatigue can lower later attempts."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 308,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Control of breathing",
   "stem": "The basic respiratory rhythm is generated in the:",
   "statements": [
    {
     "l": "A",
     "text": "apneustic center",
     "answer": false,
     "why": "It modifies inspiration (in the pons)."
    },
    {
     "l": "B",
     "text": "nucleus parabrachialis",
     "answer": false,
     "why": "Part of the pontine (pneumotaxic) group that fine-tunes the rhythm."
    },
    {
     "l": "C",
     "text": "medulla (dorsal respiratory group)",
     "answer": true,
     "why": "Guyton places the rhythm generator in the medulla (dorsal group; pre-Botzinger complex in the ventrolateral medulla)."
    },
    {
     "l": "D",
     "text": "pneumotaxic center",
     "answer": false,
     "why": "It limits inspiration but does not generate the rhythm."
    },
    {
     "l": "E",
     "text": "cerebrum",
     "answer": false,
     "why": "Allows voluntary control only."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key. The notes marked parabrachial nucleus and pneumotaxic center; both are wrong."
  },
  {
   "num": 309,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Pressures & mechanics",
   "stem": "During quiet breathing, at the start of inspiration, the intrapleural pressure is -4 mmHg. As inspiration proceeds, intrapleural pressure reaches:",
   "statements": [
    {
     "l": "A",
     "text": "-8 mmHg",
     "answer": true,
     "why": "It becomes more negative during inspiration."
    },
    {
     "l": "B",
     "text": "-1 mmHg",
     "answer": false,
     "why": "Less negative would mean expiration."
    },
    {
     "l": "C",
     "text": "0 mmHg",
     "answer": false,
     "why": "Only with pneumothorax."
    },
    {
     "l": "D",
     "text": "+1 mmHg",
     "answer": false,
     "why": "Positive only during forced expiration."
    },
    {
     "l": "E",
     "text": "+8 mmHg",
     "answer": false,
     "why": "Only in forced expiration."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 310,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "The bulk of CO2 in the body is transported as:",
   "statements": [
    {
     "l": "A",
     "text": "dissolved CO2",
     "answer": false,
     "why": "About 7-10%."
    },
    {
     "l": "B",
     "text": "carbaminohemoglobin",
     "answer": false,
     "why": "About 20-30%."
    },
    {
     "l": "C",
     "text": "carboxyhemoglobin",
     "answer": false,
     "why": "That is CO bound to Hb, not CO2."
    },
    {
     "l": "D",
     "text": "carbonic acid",
     "answer": false,
     "why": "H2CO3 dissociates almost immediately."
    },
    {
     "l": "E",
     "text": "bicarbonate",
     "answer": true,
     "why": "About 60-70% of CO2 travels as HCO3- in plasma."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 311,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Control of breathing",
   "stem": "Peripheral AND central chemoreceptors may both contribute to the increased ventilation that results from:",
   "statements": [
    {
     "l": "A",
     "text": "a decrease in arterial O2 content",
     "answer": false,
     "why": "Chemoreceptors sense pO2, not content (anemia does not stimulate them)."
    },
    {
     "l": "B",
     "text": "a decrease in arterial blood pressure",
     "answer": false,
     "why": "Detected by baroreceptors."
    },
    {
     "l": "C",
     "text": "an increase in arterial CO2 tension",
     "answer": true,
     "why": "CO2 stimulates both: central via CSF H+, peripheral directly."
    },
    {
     "l": "D",
     "text": "a decrease in arterial O2 tension",
     "answer": false,
     "why": "Only the peripheral (carotid, aortic) bodies sense low pO2."
    },
    {
     "l": "E",
     "text": "a decrease in arterial pH",
     "answer": false,
     "why": "Blood H+ crosses the blood-brain barrier poorly, so it acts mainly on peripheral receptors."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 312,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Control of breathing",
   "stem": "Hypercapnia (elevation of plasma CO2):",
   "statements": [
    {
     "l": "A",
     "text": "usually causes hyperventilation",
     "answer": true,
     "why": "CO2 is the main drive for breathing."
    },
    {
     "l": "B",
     "text": "stimulates central chemoreceptors",
     "answer": true,
     "why": "CO2 crosses into CSF and lowers its pH."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 313,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Gas laws",
   "stem": "CO2 content in inspired atmospheric air is about:",
   "statements": [
    {
     "l": "A",
     "text": "10%",
     "answer": false,
     "why": "Far too high."
    },
    {
     "l": "B",
     "text": "5%",
     "answer": false,
     "why": "That is about the alveolar value."
    },
    {
     "l": "C",
     "text": "3%",
     "answer": false,
     "why": "Too high."
    },
    {
     "l": "D",
     "text": "< 1%",
     "answer": true,
     "why": "About 0.04%."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 314,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Gas exchange basics",
   "stem": "Ventilation/perfusion ratio:",
   "statements": [
    {
     "l": "A",
     "text": "may differ in various regions of the lungs",
     "answer": true,
     "why": "Higher at the apex, lower at the base in upright posture."
    },
    {
     "l": "B",
     "text": "is about 0.8 overall",
     "answer": true,
     "why": "About 4 L/min alveolar ventilation over 5 L/min blood flow."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 315,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Respiratory pathophysiology",
   "stem": "Which of the following is the most likely cause of increased arterial pCO2?",
   "statements": [
    {
     "l": "A",
     "text": "Increased metabolic activity",
     "answer": false,
     "why": "Extra CO2 production is normally matched by more ventilation."
    },
    {
     "l": "B",
     "text": "Increased alveolar dead space",
     "answer": false,
     "why": "Usually compensated by breathing more."
    },
    {
     "l": "C",
     "text": "Depressed medullary respiratory centers",
     "answer": true,
     "why": "Hypoventilation from central depression (opioids, sedatives) raises pCO2."
    },
    {
     "l": "D",
     "text": "Alveolar-capillary block",
     "answer": false,
     "why": "Thickening limits O2 far more than CO2 (CO2 diffuses about 20x better)."
    },
    {
     "l": "E",
     "text": "Increased alveolar ventilation",
     "answer": false,
     "why": "That lowers pCO2."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key. The notes marked A; the classic answer is C."
  },
  {
   "num": 316,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Pressures & mechanics",
   "stem": "A deficiency of pulmonary surfactant would:",
   "statements": [
    {
     "l": "A",
     "text": "decrease surface tension in alveoli",
     "answer": false,
     "why": "Surfactant lowers surface tension, so a deficiency raises it."
    },
    {
     "l": "B",
     "text": "decrease the change in intrapleural pressure required to achieve a given tidal volume",
     "answer": false,
     "why": "Stiffer lungs need a larger pressure change."
    },
    {
     "l": "C",
     "text": "decrease lung compliance",
     "answer": true,
     "why": "Higher surface tension makes the lungs stiffer."
    },
    {
     "l": "D",
     "text": "decrease the work of breathing",
     "answer": false,
     "why": "It increases."
    },
    {
     "l": "E",
     "text": "increase functional residual capacity (FRC)",
     "answer": false,
     "why": "Alveoli tend to collapse, so FRC falls."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key. The notes also marked B; it is false."
  },
  {
   "num": 317,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Ventilation & dead space",
   "stem": "A man breathing at 20 breaths per minute has a minute ventilation of 8000 mL/min and a dead space of 150 mL. His alveolar ventilation is:",
   "statements": [
    {
     "l": "A",
     "text": "250 mL/min",
     "answer": false,
     "why": "Recalculate: 20 x 150 = 3000 mL/min of dead space ventilation."
    },
    {
     "l": "B",
     "text": "400 mL/min",
     "answer": false,
     "why": "That is the tidal volume (8000/20), in mL per breath."
    },
    {
     "l": "C",
     "text": "2500 mL/min",
     "answer": false,
     "why": "Not the result of the formula."
    },
    {
     "l": "D",
     "text": "3000 mL/min",
     "answer": false,
     "why": "That is the dead space ventilation."
    },
    {
     "l": "E",
     "text": "5000 mL/min",
     "answer": true,
     "why": "VA = 8000 - (20 x 150) = 5000 mL/min."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 318,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Ventilation & dead space",
   "stem": "Airways:",
   "statements": [
    {
     "l": "A",
     "text": "their volume compared to total lung capacity is negligible (less than 3%)",
     "answer": true,
     "why": "About 150 mL of about 6000 mL, roughly 2.5%."
    },
    {
     "l": "B",
     "text": "constitute a part of the dead space (volume about 150 mL)",
     "answer": true,
     "why": "The conducting airways are the anatomical dead space."
    },
    {
     "l": "C",
     "text": "substantially influence dynamic parameters",
     "answer": true,
     "why": "Airway calibre sets flow (FEV1, PEF)."
    },
    {
     "l": "D",
     "text": "their volume cannot be measured",
     "answer": false,
     "why": "Anatomical dead space is measured by the Fowler N2 washout."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 319,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Blood gases & O2",
   "stem": "An adult man at rest consumes:",
   "statements": [
    {
     "l": "A",
     "text": "approximately 0.3 L of oxygen per minute",
     "answer": true,
     "why": "About 250-300 mL/min."
    },
    {
     "l": "B",
     "text": "about the same quantity of oxygen that is stored at rest in the whole blood",
     "answer": false,
     "why": "Blood holds about 1 L of O2 (5 L x 200 mL/L), several minutes' worth."
    },
    {
     "l": "C",
     "text": "less than the binding capacity of Hb for O2 of the whole blood",
     "answer": true,
     "why": "0.25-0.3 L/min against about 1 L total capacity."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 320,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Pressures & mechanics",
   "stem": "After a quiet expiration, the intrapleural pressure is:",
   "statements": [
    {
     "l": "A",
     "text": "lower than atmospheric pressure",
     "answer": true,
     "why": "About -5 cmH2O at FRC."
    },
    {
     "l": "B",
     "text": "dependent on the amount of surfactant in the alveoli",
     "answer": true,
     "why": "Surfactant changes lung recoil, which sets pleural pressure."
    },
    {
     "l": "C",
     "text": "lower than the intrapleural pressure after maximal inspiration",
     "answer": false,
     "why": "After maximal inspiration it is much more negative."
    },
    {
     "l": "D",
     "text": "dependent on the compliance of the chest wall",
     "answer": true,
     "why": "FRC pressure is the balance of lung recoil and chest wall recoil."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 321,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Control of breathing",
   "stem": "CO2:",
   "statements": [
    {
     "l": "A",
     "text": "its role in respiratory regulation is more important than the role of oxygen",
     "answer": true,
     "why": "In healthy people CO2 (via H+) is the main drive."
    },
    {
     "l": "B",
     "text": "holding the breath for seconds increases CO2 concentration in expired air",
     "answer": true,
     "why": "CO2 accumulates in the alveoli during the pause."
    },
    {
     "l": "C",
     "text": "over hours, production of CO2 is roughly linearly dependent on O2 consumption",
     "answer": true,
     "why": "Respiratory quotient about 0.8: CO2 produced is proportional to O2 used."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 322,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Lung volumes & spirometry",
   "stem": "For estimation of dynamic ventilation parameters, it is necessary to measure the following:",
   "statements": [
    {
     "l": "A",
     "text": "volume of air",
     "answer": true,
     "why": "Dynamic parameters are volumes per time."
    },
    {
     "l": "B",
     "text": "time",
     "answer": true,
     "why": "Needed to calculate flows."
    },
    {
     "l": "C",
     "text": "O2 concentration",
     "answer": false,
     "why": "Not needed for FEV1, PEF and so on."
    },
    {
     "l": "D",
     "text": "CO2 concentration",
     "answer": false,
     "why": "Not needed for dynamic spirometry."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 323,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Respiratory pathophysiology",
   "stem": "In case of alveolocapillary membrane thickening, the reduction in diffusion capacity will be expressed mainly for:",
   "statements": [
    {
     "l": "A",
     "text": "CO2",
     "answer": false,
     "why": "CO2 diffuses about 20x better than O2, so it is affected late."
    },
    {
     "l": "B",
     "text": "CO",
     "answer": true,
     "why": "DLCO is the clinical test of diffusing capacity and falls early."
    },
    {
     "l": "C",
     "text": "O2",
     "answer": true,
     "why": "O2 diffusion is limited first, so hypoxemia appears before hypercapnia."
    },
    {
     "l": "D",
     "text": "CO2 and O2 equally",
     "answer": false,
     "why": "CO2 is much less affected."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 324,
   "ref": "Student notes (SPIRO)",
   "topic": "Respiration",
   "subtopic": "Pressures & mechanics",
   "stem": "Pulmonary capillary pressure, compared to systemic capillary pressure, is:",
   "statements": [
    {
     "l": "A",
     "text": "higher",
     "answer": false,
     "why": "About 7 mmHg against about 17-30 mmHg systemic."
    },
    {
     "l": "B",
     "text": "lower",
     "answer": true,
     "why": "The low pressure keeps the alveoli dry."
    },
    {
     "l": "C",
     "text": "equal",
     "answer": false,
     "why": "It is several times lower."
    },
    {
     "l": "D",
     "text": "higher than plasma oncotic pressure",
     "answer": false,
     "why": "It stays below the oncotic pressure (about 28 mmHg), which keeps the alveoli dry."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  }
 ],
 "Simulation": [
  {
   "num": 325,
   "ref": "ID 5068",
   "topic": "Simulation",
   "subtopic": "O2 delivery",
   "stem": "You start breathing air with 40% oxygen. No other change.",
   "statements": [
    {
     "l": "A",
     "text": "Amount of O2 delivered to tissues approximately doubles",
     "answer": false,
     "why": "Hb is already about 97% saturated; content rises only slightly."
    },
    {
     "l": "B",
     "text": "Amount of exhaled O2 approximately doubles",
     "answer": true,
     "why": "Inspired O2 almost doubles while consumption stays the same, so the exhaled amount roughly doubles."
    },
    {
     "l": "C",
     "text": "Metabolic rate increases by more than half",
     "answer": false,
     "why": "Metabolism does not depend on inspired O2."
    },
    {
     "l": "D",
     "text": "Hemoglobin saturation in the lungs does not change significantly",
     "answer": true,
     "why": "It is already near 100%."
    },
    {
     "l": "E",
     "text": "SpO2 increases considerably",
     "answer": false,
     "why": "From about 97% to about 99-100%, only a little."
    }
   ]
  },
  {
   "num": 326,
   "ref": "ID 5088",
   "topic": "Simulation",
   "subtopic": "O2 delivery",
   "stem": "If hemoglobin content drops from normal values by 30%, the oxygen delivery can still be maintained by:",
   "statements": [
    {
     "l": "A",
     "text": "increased ventilation",
     "answer": false,
     "why": "Hb is already saturated; more ventilation adds almost no O2."
    },
    {
     "l": "B",
     "text": "increased blood saturation in alveoli",
     "answer": false,
     "why": "Saturation is already about 97%."
    },
    {
     "l": "C",
     "text": "increased desaturation of blood",
     "answer": true,
     "why": "Tissues extract more O2 (larger arteriovenous difference); only 6% of the class got this right."
    },
    {
     "l": "D",
     "text": "reduced O2 consumption",
     "answer": false,
     "why": "That would lower demand, not maintain delivery."
    },
    {
     "l": "E",
     "text": "increased blood pressure",
     "answer": false,
     "why": "Pressure is not the variable; flow is."
    },
    {
     "l": "F",
     "text": "increased blood flow",
     "answer": true,
     "why": "Higher cardiac output carries more of the lower-content blood."
    }
   ]
  },
  {
   "num": 327,
   "ref": "ID 4815",
   "topic": "Simulation",
   "subtopic": "Patient assessment",
   "stem": "When examining heart rate at a peripheral artery (radial), you do not feel any pulse. What should you do next (tick 3 options)?",
   "statements": [
    {
     "l": "A",
     "text": "Call for help and initiate CPR",
     "answer": false,
     "why": "Too early: first confirm that there is really no circulation (carotid pulse, consciousness, breathing)."
    },
    {
     "l": "B",
     "text": "Reassess consciousness",
     "answer": true,
     "why": "A responsive patient has a circulation."
    },
    {
     "l": "C",
     "text": "Control airway, reassess breathing",
     "answer": true,
     "why": "ABC: airway and breathing come first."
    },
    {
     "l": "D",
     "text": "Check blood pressure",
     "answer": false,
     "why": "Without a radial pulse, cuff BP is unreliable; check central pulse first."
    },
    {
     "l": "E",
     "text": "Check another peripheral pulse",
     "answer": false,
     "why": "A central (carotid) pulse is more informative."
    },
    {
     "l": "F",
     "text": "Check carotid pulse",
     "answer": true,
     "why": "A carotid pulse persists down to a systolic BP of about 60 mmHg."
    }
   ]
  },
  {
   "num": 328,
   "ref": "ID 4797",
   "topic": "Simulation",
   "subtopic": "Blood loss",
   "stem": "Which of the following parameters help considerably when estimating the volume of acute blood loss (happened within minutes), if measured immediately after bleeding?",
   "statements": [
    {
     "l": "A",
     "text": "Hb concentration in blood",
     "answer": false,
     "why": "Right after bleeding, whole blood is lost: Hb concentration stays normal until fluid shifts in hours later."
    },
    {
     "l": "B",
     "text": "MCHC",
     "answer": false,
     "why": "Red-cell indices do not change with acute blood loss."
    },
    {
     "l": "C",
     "text": "MCH",
     "answer": false,
     "why": "Unchanged."
    },
    {
     "l": "D",
     "text": "MCV",
     "answer": false,
     "why": "Unchanged."
    },
    {
     "l": "E",
     "text": "body core temperature",
     "answer": false,
     "why": "Not a measure of blood loss volume."
    }
   ],
   "note": "The professor's key for this question is empty (no option is correct); the 2018 notes confirm \"there was no right answer\"."
  },
  {
   "num": 329,
   "ref": "ID 4818",
   "topic": "Simulation",
   "subtopic": "Patient assessment",
   "stem": "You are approaching a critically ill patient who is trying to communicate with you. What can be reasonably inferred?",
   "statements": [
    {
     "l": "A",
     "text": "The patient is NOT in a life-threatening condition",
     "answer": false,
     "why": "A talking patient can still be in shock or about to deteriorate."
    },
    {
     "l": "B",
     "text": "Patient's hemodynamics is stable",
     "answer": false,
     "why": "Talking says nothing about BP or heart rate."
    },
    {
     "l": "C",
     "text": "The patient is conscious",
     "answer": true,
     "why": "Trying to communicate proves consciousness."
    },
    {
     "l": "D",
     "text": "Patient's blood supply to the brain is adequate",
     "answer": false,
     "why": "The key marks this false: perfusion may be just enough for now, not adequate. (Source: the professor's key, not Guyton & Hall.)"
    }
   ]
  },
  {
   "num": 330,
   "ref": "ID 4816",
   "topic": "Simulation",
   "subtopic": "Patient assessment",
   "stem": "Which parameters carry useful information regarding blood pressure?",
   "statements": [
    {
     "l": "A",
     "text": "SpO2",
     "answer": false,
     "why": "Saturation does not reflect pressure (it may even read normally at low BP)."
    },
    {
     "l": "B",
     "text": "Respiratory rate",
     "answer": false,
     "why": "Not specific for BP."
    },
    {
     "l": "C",
     "text": "Inspection of skin colour",
     "answer": true,
     "why": "Pale, mottled skin suggests vasoconstriction and low perfusion."
    },
    {
     "l": "D",
     "text": "Coagulation tests",
     "answer": false,
     "why": "Unrelated to BP."
    },
    {
     "l": "E",
     "text": "Inspection of neck veins",
     "answer": true,
     "why": "Jugular filling reflects central venous pressure and volume."
    },
    {
     "l": "F",
     "text": "Diuresis",
     "answer": true,
     "why": "Urine output falls when renal perfusion pressure drops."
    }
   ]
  },
  {
   "num": 331,
   "ref": "ID 4823",
   "topic": "Simulation",
   "subtopic": "Patient assessment",
   "stem": "In a conscious patient you are unable to estimate blood pressure. Which other method could help to conclude that the patient is NOT severely hypotensive?",
   "statements": [
    {
     "l": "A",
     "text": "ECG",
     "answer": false,
     "why": "Shows electrical activity, not pressure."
    },
    {
     "l": "B",
     "text": "Auscultation of the heart",
     "answer": false,
     "why": "Heart sounds do not tell the pressure."
    },
    {
     "l": "C",
     "text": "Optoplethysmography (SpO2)",
     "answer": true,
     "why": "A good pulsatile pleth signal means peripheral pulses are present."
    },
    {
     "l": "D",
     "text": "Pulse check",
     "answer": true,
     "why": "A palpable radial pulse suggests systolic BP of at least about 80 mmHg."
    },
    {
     "l": "E",
     "text": "Inquiring the patient",
     "answer": false,
     "why": "The key marks this false; a conscious patient can still be hypotensive. (Source: the professor's key, not Guyton & Hall.)"
    }
   ]
  },
  {
   "num": 332,
   "ref": "ID 4819",
   "topic": "Simulation",
   "subtopic": "Transfusion",
   "stem": "You are determined to administer a whole blood transfusion. Which tests should be performed at the bedside just before the transfusion is finally initiated?",
   "statements": [
    {
     "l": "A",
     "text": "Cross match test",
     "answer": false,
     "why": "Done in the blood bank beforehand, not at the bedside."
    },
    {
     "l": "B",
     "text": "AB0 agglutination tests",
     "answer": true,
     "why": "Bedside ABO check of patient and unit is mandatory."
    },
    {
     "l": "C",
     "text": "Hemocoagulation tests",
     "answer": false,
     "why": "Not part of the pre-transfusion bedside check."
    },
    {
     "l": "D",
     "text": "Blood test for hemoglobin, hematocrit, blood cell count",
     "answer": false,
     "why": "Done earlier to decide on transfusion, not at the bedside just before it."
    },
    {
     "l": "E",
     "text": "Basic physical exam of the patient",
     "answer": true,
     "why": "Baseline vital signs to spot a reaction."
    }
   ]
  },
  {
   "num": 333,
   "ref": "ID 5055",
   "topic": "Simulation",
   "subtopic": "Patient assessment",
   "stem": "You are performing a standard examination of an unconscious patient. You have no assistant. You see no obvious injuries. The chest is rising only if the chin is lifted. When checking a pulse rate at a peripheral artery (radial) you do not feel anything.",
   "statements": [
    {
     "l": "A",
     "text": "reassess central pulsation",
     "answer": true,
     "why": "Check the carotid pulse."
    },
    {
     "l": "B",
     "text": "HR estimation could help in search for the low blood pressure reason",
     "answer": true,
     "why": "Bradycardia or tachycardia points to the cause."
    },
    {
     "l": "C",
     "text": "regularity of pulsation could help in search for the low blood pressure reason",
     "answer": true,
     "why": "An irregular pulse suggests arrhythmia."
    },
    {
     "l": "D",
     "text": "the value of blood pressure and duration of the low BP period is important",
     "answer": true,
     "why": "Both decide how much organ damage is likely."
    },
    {
     "l": "E",
     "text": "check blood pressure (even if the chin can't be lifted during the procedure)",
     "answer": false,
     "why": "The airway comes first; you must not let go of the chin lift."
    },
    {
     "l": "F",
     "text": "call for help",
     "answer": true,
     "why": "An unconscious patient with an airway problem needs help."
    }
   ]
  },
  {
   "num": 334,
   "ref": "ID 5066",
   "topic": "Simulation",
   "subtopic": "Pulse oximetry",
   "stem": "Interpretation errors in pulse oximetry may arise in the presence of:",
   "statements": [
    {
     "l": "A",
     "text": "carboxyhemoglobin",
     "answer": true,
     "why": "COHb absorbs like oxyHb, so SpO2 reads falsely high."
    },
    {
     "l": "B",
     "text": "methemoglobin",
     "answer": true,
     "why": "MetHb pulls SpO2 toward about 85%."
    },
    {
     "l": "C",
     "text": "nail varnish",
     "answer": true,
     "why": "Dark varnish blocks light."
    },
    {
     "l": "D",
     "text": "methylene blue",
     "answer": true,
     "why": "The dye absorbs at the oximeter's wavelength and falsely lowers SpO2."
    },
    {
     "l": "E",
     "text": "motion of a patient or a sensor",
     "answer": true,
     "why": "Motion artefact corrupts the pulsatile signal."
    }
   ]
  },
  {
   "num": 335,
   "ref": "ID 4821",
   "topic": "Simulation",
   "subtopic": "Blood loss",
   "stem": "Your patient's results are as follows: Hb 110 g/L, Hct 0.38, RBC 5.1 x 10^6/uL, WBC 9.5 x 10^3/uL, arterial BP 90/60, CVP 2 mmHg, SpO2 97%, HR 90. What can be concluded?",
   "statements": [
    {
     "l": "A",
     "text": "All the values are within physiological limits",
     "answer": false,
     "why": "MCV is low, and BP and CVP are at the low edge."
    },
    {
     "l": "B",
     "text": "MCV is low",
     "answer": true,
     "why": "MCV = Hct / RBC = 0.38 / 5.1 x 10^12/L, about 75 fL (normal 80-95 fL)."
    },
    {
     "l": "C",
     "text": "The patient needs a blood transfusion",
     "answer": false,
     "why": "Hb 110 g/L with stable circulation is no indication."
    },
    {
     "l": "D",
     "text": "This patient could be acutely bleeding",
     "answer": true,
     "why": "Low-normal BP and CVP 2 mmHg are compatible with volume loss."
    },
    {
     "l": "E",
     "text": "Could be an asymptomatic anemic patient",
     "answer": true,
     "why": "Mild microcytic anemia, for example from iron deficiency."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. The key is hidden in the photo, so the answers are worked out from the numbers. Only 24% of the class got B right, which fits B being true."
  },
  {
   "num": 336,
   "ref": "Student notes (SIM)",
   "topic": "Simulation",
   "subtopic": "Blood loss",
   "stem": "What is the LEAST informative measurement in case of acute bleeding?",
   "statements": [
    {
     "l": "A",
     "text": "Oximetry (SpO2)",
     "answer": true,
     "why": "Arterial saturation stays normal: the lungs still oxygenate whatever blood there is."
    },
    {
     "l": "B",
     "text": "Blood pressure",
     "answer": false,
     "why": "Falls in larger blood loss."
    },
    {
     "l": "C",
     "text": "Respiratory rate",
     "answer": false,
     "why": "Rises with shock."
    },
    {
     "l": "D",
     "text": "CVP",
     "answer": false,
     "why": "Falls with volume loss."
    },
    {
     "l": "E",
     "text": "Saturation of venous blood",
     "answer": false,
     "why": "Falls as tissues extract more O2."
    },
    {
     "l": "F",
     "text": "Acral (peripheral) temperature",
     "answer": false,
     "why": "Falls with vasoconstriction."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 337,
   "ref": "Student notes (SIM)",
   "topic": "Simulation",
   "subtopic": "Blood loss",
   "stem": "Which measurements are informative days after a bleeding?",
   "statements": [
    {
     "l": "A",
     "text": "MCH",
     "answer": false,
     "why": "Red-cell indices change only after weeks (iron deficiency)."
    },
    {
     "l": "B",
     "text": "Hb concentration",
     "answer": true,
     "why": "After fluid shifts into the vessels (hours to days), Hb falls and shows the loss."
    },
    {
     "l": "C",
     "text": "MCV",
     "answer": false,
     "why": "Changes only later."
    },
    {
     "l": "D",
     "text": "Reticulocyte count",
     "answer": true,
     "why": "Rises after 3-5 days as the marrow responds."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 338,
   "ref": "Student notes (SIM)",
   "topic": "Simulation",
   "subtopic": "Blood loss",
   "stem": "Which measurements are informative months after an acute/chronic blood loss?",
   "statements": [
    {
     "l": "A",
     "text": "Decrease in iron storage (ferritin)",
     "answer": true,
     "why": "Chronic loss depletes iron."
    },
    {
     "l": "B",
     "text": "Hb concentration",
     "answer": true,
     "why": "Iron-deficiency anemia develops."
    },
    {
     "l": "C",
     "text": "MCV",
     "answer": true,
     "why": "Becomes low (microcytosis)."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  },
  {
   "num": 339,
   "ref": "Student notes (SIM)",
   "topic": "Simulation",
   "subtopic": "Blood loss",
   "stem": "Someone loses 1.5 L of blood. What would be the best treatment options (pick 2)?",
   "statements": [
    {
     "l": "A",
     "text": "0.5 L of his own blood",
     "answer": false,
     "why": "Autologous blood is rarely available in an emergency, and 0.5 L is too little."
    },
    {
     "l": "B",
     "text": "0.5 L transfusion",
     "answer": false,
     "why": "Too little volume."
    },
    {
     "l": "C",
     "text": "1 L saline",
     "answer": true,
     "why": "Fast, available volume replacement."
    },
    {
     "l": "D",
     "text": "1 L plasma",
     "answer": true,
     "why": "Replaces volume and clotting factors."
    },
    {
     "l": "E",
     "text": "Clotting factors",
     "answer": false,
     "why": "Do not restore volume."
    }
   ],
   "note": "Answer based on the literature (Guyton & Hall), not on the provided images. This question comes from the student notes in the Test 2 folder, which have no professor key."
  }
 ]
};
