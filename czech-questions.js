/* Czech Credit Test Bank — loaded as window.czechCreditTests */
(function () {
  window.czechCreditTests = {
    A: {
      title: "Czech Final Credit Test A",
      sections: [
        {
          type: "match",
          title: "Medical Part 1 — Match the pairs",
          left:  ["játra",    "ledvina", "prst",   "ústa",   "plíce"],
          right: ["liver",    "kidney",  "finger", "mouth",  "lung"]
        },
        {
          type: "match",
          title: "Medical Part 2 — Match the pairs",
          left:  ["tenké",   "močový",  "nemocný",  "bolí mě", "zlomená"],
          right: ["střevo",  "měchýř",  "student",  "v krku",  "noha"]
        },
        {
          type: "label",
          title: "Medical Part 3 — Label body parts and organs in Czech",
          prompts: [
            "hair","eye","face","neck","arm","hand","finger","abdomen","leg","toe",
            "nose","ear","mouth","tooth","shoulder","elbow","chest","hip","knee","foot",
            "lungs","heart","tooth","large intestine","liver","spine",
            "female reproductive organ","stomach","bladder","gallbladder","kidneys",
            "male reproductive organ","eye","joint","pancreas","brain"
          ]
        },
        {
          type: "mcq",
          title: "General Part 1 — Fill in the correct word",
          text: "Petr a jeho nemoc",
          questions: [
            { q: "Minulý ___ jsem měl velké zdravotní potíže.", options: ["sobota", "neděle", "měsíc"], correct: 2,
              explanation: '"Minulý" is a masculine adjective — it needs a masculine noun. Sobota/neděle are feminine (use "minulou"). Měsíc (month) is masculine.' },
            { q: "Nejdříve mě odpoledne bolela ___.", options: ["krk", "celé tělo", "hlava"], correct: 2,
              explanation: '"Bolela" is feminine past tense, so the subject must be feminine. Hlava (head) is feminine; krk is masculine; celé tělo is neuter.' },
            { q: "Druhý den v 8 hodin ___ mi bylo opravdu moc špatně.", options: ["ráno", "odpoledne", "za týden"], correct: 0,
              explanation: '"V 8 hodin ráno" = at 8 in the morning. Odpoledne = afternoon; za týden = in a week (wrong context).' },
            { q: "Nemohl jsem jíst a pil jsem jenom ___.", options: ["voda", "čaj", "pomerančová džus"], correct: 1,
              explanation: 'Drinking čaj (tea) is typical when sick. "Pomerančová džus" has wrong gender agreement (džus is masculine).' },
            { q: "Do nemocnice jsem nešel ___.", options: ["pěšky", "metrem", "rychlý"], correct: 0,
              explanation: '"Nešel" = didn\'t walk → pěšky (on foot) follows naturally. "Metrem" would need "nejel". "Rychlý" is an adjective, not an adverb.' },
            { q: "Do nemocnice jsem jel ___.", options: ["tramvajem", "na autobus", "taxíkem"], correct: 2,
              explanation: '"Na autobus" is wrong grammar (use "autobusem"). Taxíkem fits — a sick person taking a taxi is natural.' },
            { q: "Musel jsem ___.", options: ["jíst", "čekat", "pít"], correct: 1,
              explanation: 'At the hospital you have to wait (čekat). Eating/drinking don\'t fit the context of someone too ill to eat.' },
            { q: "Doktor řekl, že ___ ležet v posteli.", options: ["musím", "může", "chci"], correct: 0,
              explanation: '"Musím ležet" = I must lie in bed (1st person). "Může" = he can (wrong person); "chci" = I want (wrong meaning).' },
            { q: "___ týdny jsem byl doma.", options: ["jeden", "dva", "dvě"], correct: 1,
              explanation: '"Dva týdny" = two weeks. "Týdny" is masculine plural, so "dva" (not "dvě" which is fem./neut.). "Jeden" is singular.' },
            { q: "Teď jsem zdravý a cítím se ___.", options: ["dobrý", "dobrá", "dobře"], correct: 2,
              explanation: '"Cítím se" needs an adverb: dobře (well). Dobrý/dobrá are adjectives and cannot follow a reflexive verb of feeling.' }
          ]
        },
        {
          type: "write",
          title: "General Part 2 — Make questions",
          prompts: [
            "_____ máte češtinu? Odpoledne.",
            "_____ studujete? Medicínu.",
            "_____ je Natálie? Z Anglie.",
            "_____ se jmenuje tvůj bratr? Alex.",
            "_____ je hodin? 16:30.",
            "_____ to je? To je můj profesor anatomie."
          ],
          modelAnswers: ["Kdy", "Co", "Odkud", "Jak", "Kolik", "Kdo"]
        },
        {
          type: "write",
          title: "General Part 3 — Make sentences",
          prompts: [
            "pacientka – imunita – dobrá – nemít. (PRESENT)",
            "jsem – nová – lekce – studovat. (PAST)",
            "bydlet – vaše – kde – sestra? (PRESENT)",
            "v – restaurace – jíst – Martin. (PAST)",
            "syn – jak – jmenovat se. (PRESENT)"
          ],
          modelAnswers: [
            "Pacientka nemá dobrou imunitu.",
            "Studoval/a jsem novou lekci.",
            "Kde bydlí vaše sestra?",
            "Martin jedl v restauraci.",
            "Jak se jmenuje (váš/tvůj) syn?"
          ]
        },
        {
          type: "write",
          title: "General Part 4 — Write dates in numbers",
          prompts: [
            "prvního února devatenáct set padesát osm",
            "sedmnáctého dubna dva tisíce osmnáct",
            "devátého října devatenáct set devatenáct",
            "dvacátého prvního prosince devatenáct set devadesát"
          ],
          modelAnswers: ["1. 2. 1958", "17. 4. 2018", "9. 10. 1919", "21. 12. 1990"]
        },
        {
          type: "write",
          title: "General Part 5 — Write the opposites",
          prompts: [
            "starý dům × _____ dům",
            "dobrá diagnóza × _____ diagnóza",
            "zdravá žena × _____ žena",
            "starý profesor × _____ profesor",
            "zdravé jídlo × _____ jídlo",
            "dlouhá cesta × _____ cesta"
          ],
          modelAnswers: ["nový", "špatná", "nemocná", "mladý", "nezdravé", "krátká"]
        },
        {
          type: "chooseForm",
          title: "General Part 6 — Choose the correct form",
          text: "Jmenuju se Anna Novotná. Je mi/ti 63 let. Jsem/jsme z Prahy, pracuju jako doktor/doktorka. Můj/moje manžel se jmenuje Jiří a je fotograf/fotografka. Máme dva/dvě syny a jednu/jedna dceru. Starší syn se jmenuje Pavel, je mu/jí 36 let. Mladší syn se jmenuje Petr a je svobodný/svobodná. Pavel je ženatý/vdaný a má malá/malou dceru Moniku. Monika je můj/moje vnučka.",
          correct: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
          explanations: [
            "Je MI — 1st person: 'je mi X let' = I am X years old. Ti = you (2nd person).",
            "JSEM z Prahy — 1st person singular. Jsme = we are (plural).",
            "Anna is female → DOKTORKA. Doktor is the male form.",
            "Manžel is masculine → MŮJ. Moje is for feminine/neuter nouns.",
            "Jiří (husband) is male → FOTOGRAF. Fotografka is the female form.",
            "Syny is masculine animate plural → DVA. Dvě is for feminine/neuter nouns.",
            "Dceru is accusative feminine → JEDNU. Jedna is nominative (wrong case here).",
            "Pavel is male → JE MU 36 let. Jí is feminine (her).",
            "Petr is male → SVOBODNÝ (masculine adjective). Svobodná is feminine.",
            "Pavel is male → ŽENATÝ (married man). Vdaný doesn't exist; vdaná is for married women.",
            "Dceru is accusative → MALOU (accusative adj). Malá is nominative.",
            "Vnučka is feminine → MOJE. Můj is masculine."
          ]
        },
        {
          type: "trueFalse",
          title: "General Part 7 — Reading comprehension",
          text: "Studenti a jejich zdravotní problémy",
          passage: "Od 25. 9. jsou v Praze dva studenti z Izraele – Tomer a Ben. Studují medicínu na první lékařské fakultě. Jejich kamarád je řecký student Alexandros. Alexandros je v Praze od 20. 8. Všichni tři studenti bydlí v domě v Praze 2, Žitná ulice číslo 108.\n\nTomer, Ben a Alexandros měli zdravotní problémy.\n\nAlexandros měl v neděli v noci vysokou teplotu 39 stupňů Celsia. V pondělí ráno musel navštívit lékaře. Lékař mu diagnostikoval angínu (tonsilitis). Alexandros musí brát antibiotika a musí ležet v posteli. Musí pít neperlivou vodu a jíst ovoce, protože potřebuje vitamín C. Za dva týdny musí navštívit pana doktora ještě jednou.\n\nBen měl akutní problém – v pátek ráno ho začal bolet zub a navštívil stomatologa.\n\nTomer měl také akutní problém. Bolel ho žaludek a břicho. Navštívil lékaře v nemocnici a potom šel do lékárny pro tablety.",
          statements: [
            "Studenti z Izraele jsou tady od října.",
            "Alexandros je tady od srpna.",
            "Studenti mají identickou adresu.",
            "Alexandros večer navštívil lékaře.",
            "Alexandros musí jíst zeleninu.",
            "Ben navštívil stomatologa v pátek.",
            "Ben musí navštívit stomatologa také za dva týdny.",
            "Tomer měl teplotu 39 stupňů Celsia.",
            "Lékař pracuje v nemocnici.",
            "Tomer musel zůstat v nemocnici."
          ],
          correct: ["Ne","Ano","Ano","Ne","Ne","Ano","Ne","Ne","Ano","Ne"],
          explanations: [
            "Ne — They arrived on 25. 9. (September), not October.",
            "Ano — 'Alexandros je v Praze od 20. 8.' = from August 20.",
            "Ano — All three live at Žitná ulice číslo 108, Praha 2.",
            "Ne — He visited the doctor Monday MORNING ('V pondělí ráno'), not in the evening.",
            "Ne — He must eat ovoce (fruit) for vitamin C, not zelenina (vegetables).",
            "Ano — 'v pátek ráno ho začal bolet zub a navštívil stomatologa.'",
            "Ne — It is Alexandros who must revisit the doctor in two weeks, not Ben.",
            "Ne — It was Alexandros who had 39°C. Tomer had stomach and abdomen pain.",
            "Ano — 'Navštívil lékaře v nemocnici' — Tomer's doctor was at the hospital.",
            "Ne — Tomer only went to the pharmacy for tablets; he did not stay in hospital."
          ]
        }
      ]
    },

    B: {
      title: "Czech Final Credit Test B",
      sections: [
        {
          type: "match",
          title: "Medical Part 1 — Match the pairs",
          left:  ["páteř",  "obličej", "loket",  "záda",  "hlava"],
          right: ["spine",  "face",    "elbow",  "back",  "head"]
        },
        {
          type: "match",
          title: "Medical Part 2 — Match the pairs",
          left:  ["nový",    "hrudní",  "bílé",   "tlusté",  "kyčelní"],
          right: ["pacient", "kost",    "zuby",   "střevo",  "kloub"]
        },
        {
          type: "label",
          title: "Medical Part 3 — Label body parts and organs in Czech",
          prompts: [
            "hair","eye","face","neck","arm","hand","finger","abdomen","leg","toe",
            "nose","ear","mouth","tooth","shoulder","elbow","chest","hip","knee","foot",
            "lungs","heart","tooth","large intestine","liver","spine",
            "female reproductive organ","stomach","bladder","gallbladder","kidneys",
            "male reproductive organ","eye","joint","pancreas","brain"
          ]
        },
        {
          type: "mcq",
          title: "General Part 1 — Fill in the correct word",
          text: "Alena a její nemoc",
          questions: [
            { q: "Minulý ___ jsem měla velké zdravotní potíže.", options: ["sobota", "neděle", "týden"], correct: 2,
              explanation: '"Minulý" is masculine — it needs a masculine noun. Sobota/neděle are feminine. Týden (week) is masculine.' },
            { q: "Nejdříve mě odpoledne bolela ___.", options: ["hlava", "celé tělo", "krk"], correct: 0,
              explanation: '"Bolela" is feminine past tense → the subject must be feminine. Hlava (head) is feminine; krk is masculine; celé tělo is neuter.' },
            { q: "Druhý den v 10 hodin ___ mi bylo opravdu moc špatně.", options: ["dopoledne", "odpoledne", "za týden"], correct: 0,
              explanation: '"V 10 hodin dopoledne" = at 10 AM (dopoledne = morning/before noon). Odpoledne = afternoon.' },
            { q: "Nemohla jsem jíst a pila jsem jenom ___.", options: ["voda", "čaj", "pomerančová džus"], correct: 1,
              explanation: 'Tea (čaj) is the natural drink when sick. "Pomerančová džus" has wrong gender (džus is masculine).' },
            { q: "Do nemocnice jsem nešla ___.", options: ["pěšky", "metrem", "rychlý"], correct: 0,
              explanation: '"Nešla" = didn\'t walk → pěšky (on foot). "Metrem" would need "nejela". "Rychlý" is an adjective.' },
            { q: "Do nemocnice jsem jela ___.", options: ["tramvajem", "na autobus", "autem"], correct: 2,
              explanation: '"Na autobus" is wrong grammar (use "autobusem"). Autem = by car, which fits Alena\'s story.' },
            { q: "Musela jsem ___.", options: ["jíst", "čekat", "pít"], correct: 1,
              explanation: 'At the hospital you must wait (čekat). Eating/drinking don\'t fit the context.' },
            { q: "Doktor řekl, že ___ ležet v posteli.", options: ["musím", "může", "chci"], correct: 0,
              explanation: '"Musím ležet" = I must lie in bed (1st person). "Může" = he can; "chci" = I want.' },
            { q: "___ týden jsem byla doma.", options: ["dva", "jeden", "dvě"], correct: 1,
              explanation: '"Jeden týden" = one week (masculine singular). "Dva" is plural; "dvě" is feminine/neuter.' },
            { q: "Teď jsem zdravá a cítím se ___.", options: ["dobrý", "dobrá", "dobře"], correct: 2,
              explanation: '"Cítím se" needs an adverb: dobře (well). Dobrý/dobrá are adjectives.' }
          ]
        },
        {
          type: "write",
          title: "General Part 2 — Make questions",
          prompts: [
            "_____ jedete na fakultu? Autobusem.",
            "_____ bydlí kamarád? V Německu.",
            "_____ vlasy má Andrea? Černé.",
            "_____ je ten film? Hezký.",
            "_____ to stojí? 100 korun.",
            "_____ to je? To je můj profesor anatomie."
          ],
          modelAnswers: ["Jak", "Kde", "Jaké", "Jaký", "Kolik", "Kdo"]
        },
        {
          type: "write",
          title: "General Part 3 — Make sentences",
          prompts: [
            "pacient – špatná – imunita – mít. (PAST)",
            "ty – hledat – dobrá – restaurace? (PRESENT)",
            "mít – kamarádka – v – syn – nemocnice. (PAST)",
            "pivo – já – nepít – černé. (PRESENT)",
            "ty – muset – na – jít – fakulta? (PRESENT)"
          ],
          modelAnswers: [
            "Pacient měl špatnou imunitu.",
            "Hledáš dobrou restauraci?",
            "Kamarádka měla syna v nemocnici.",
            "Nepiju černé pivo.",
            "Musíš jít na fakultu?"
          ]
        },
        {
          type: "write",
          title: "General Part 4 — Write dates in numbers",
          prompts: [
            "pátého května dva tisíce jedna",
            "sedmnáctého listopadu devatenáct set osmdesát devět",
            "devatenáctého dubna devatenáct set padesát tři",
            "prvního března devatenáct set čtyřicet pět"
          ],
          modelAnswers: ["5. 5. 2001", "17. 11. 1989", "19. 4. 1953", "1. 3. 1945"]
        },
        {
          type: "write",
          title: "General Part 5 — Write the opposites",
          prompts: [
            "nemocný pacient × _____ pacient",
            "dobré jídlo × _____ jídlo",
            "levá ledvina × _____ ledvina",
            "malý problém × _____ problém",
            "vysoký tlak × _____ tlak",
            "dlouhá cesta × _____ cesta"
          ],
          modelAnswers: ["zdravý", "špatné", "pravá", "velký", "nízký", "krátká"]
        },
        {
          type: "chooseForm",
          title: "General Part 6 — Choose the correct form",
          text: "Jmenuji se Milan Nosek. Je jí/mi 50 let. Jsem/jste z Brna, pracuju jako učitel/učitelka. Můj/moje manželka se jmenuje Petra. Máme dvě/dva dcery a jeden/jednoho syna. Starší dcera se jmenuje Petra a je jí/mu 25 let. Petra je ženatá/vdaná. Ona a její manžel mají malá/malou dceru Dominiku, je to moje/jeho vnučka. Mladší dcera je svobodná/ženatá. Syn má přítelkyni/přítel.",
          correct: [1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0],
          explanations: [
            "Je MI — 1st person: 'je mi X let' = I am X years old. Jí = her (3rd person feminine).",
            "JSEM z Brna — 1st person singular. Jste = you are (2nd person plural).",
            "Milan is male → UČITEL. Učitelka is the female form.",
            "Manželka is feminine → MOJE. Můj is for masculine nouns.",
            "Dcery is feminine plural → DVĚ. Dva is for masculine animate/inanimate nouns.",
            "Syna is accusative animate → JEDNOHO. Jeden is nominative (wrong case).",
            "Petra (daughter) is female → JÍ 25 let. Mu is masculine.",
            "Petra is a woman → VDANÁ (married woman). Ženatý/ženatá are for men; the female form is vdaná.",
            "Dceru is accusative feminine → MALOU. Malá is nominative.",
            "Milan is speaking → MOJE vnučka (my granddaughter). Jeho = his (someone else's).",
            "Younger daughter is not married → SVOBODNÁ. Ženatá doesn't exist; ženatý is for men.",
            "Son has a girlfriend → PŘÍTELKYNI (accusative of přítelkyně = girlfriend). Přítel is a boyfriend (masculine)."
          ]
        },
        {
          type: "trueFalse",
          title: "General Part 7 — Reading comprehension",
          text: "Studenti a jejich zdravotní problémy",
          passage: "Od 25. 9. jsou v Praze dva studenti z Německa – Robert a Julius. Studují medicínu na první lékařské fakultě. Jejich kamarád je řecký student Stelios. Stelios je v Praze od 20. 8. Všichni tři studenti bydlí v domě v Praze 2, Žitná ulice číslo 108.\n\nRobert, Julius a Stelios měli zdravotní problémy.\n\nRobert měl v neděli v noci vysokou teplotu 39 stupňů Celsia. Ráno musel navštívit lékaře. Lékař mu diagnostikoval angínu (tonsilitis). Musí brát antibiotika a musí ležet v posteli. Musí pít neperlivou vodu a jíst ovoce, protože potřebuje vitamín C. Za dva týdny musí navštívit pana doktora ještě jednou.\n\nJulius měl akutní problém – v pátek ráno ho začal bolet zub a dopoledne navštívil stomatologa.\n\nStelios měl také akutní problém. Bolel ho žaludek a břicho. Šel na gastroenterologii do nemocnice. Potom šel do lékárny a koupil si tablety.",
          statements: [
            "Studenti z Německa jsou tady od září.",
            "Stelios je tady od října.",
            "Studenti mají identickou adresu.",
            "Robert v neděli ráno navštívil lékaře.",
            "Robert musí jíst zeleninu.",
            "Julius navštívil stomatologa v pátek.",
            "Julius musí navštívit stomatologa také příští týden.",
            "Stelios měl teplotu 39 stupňů Celsia.",
            "Stelios navštívil gastroenterologii.",
            "Stelios tablety koupil v lékárně."
          ],
          correct: ["Ano","Ne","Ano","Ne","Ne","Ano","Ne","Ne","Ano","Ano"],
          explanations: [
            "Ano — They arrived on 25. 9. (September = září). Correct.",
            "Ne — 'Stelios je v Praze od 20. 8.' = from August, not October.",
            "Ano — All three live at Žitná ulice číslo 108, Praha 2.",
            "Ne — Robert had the fever on Sunday NIGHT. He visited the doctor on Monday MORNING ('Ráno musel navštívit lékaře').",
            "Ne — Robert must eat ovoce (fruit) for vitamin C, not zelenina (vegetables).",
            "Ano — 'v pátek ráno ho začal bolet zub a dopoledne navštívil stomatologa.'",
            "Ne — No follow-up visit is mentioned for Julius. It is Robert who must revisit the doctor in two weeks.",
            "Ne — It was Robert who had 39°C fever, not Stelios.",
            "Ano — 'Šel na gastroenterologii do nemocnice.'",
            "Ano — 'Potom šel do lékárny a koupil si tablety.'"
          ]
        }
      ]
    },

    C: {
      title: "Czech Final Credit Test C",
      sections: [
        {
          type: "match",
          title: "Medical Part 1 — Match the pairs",
          left:  ["páteř",  "obličej", "prst",   "ústa",  "plíce"],
          right: ["spine",  "face",    "finger", "mouth", "lung"]
        },
        {
          type: "match",
          title: "Medical Part 2 — Match the pairs",
          left:  ["pohlavní", "bolest",    "nemocné", "slepé",    "kolenní"],
          right: ["orgány",   "na hrudi",  "ledviny", "střevo",   "kloub"]
        },
        {
          type: "label",
          title: "Medical Part 3 — Label body parts and organs in Czech",
          prompts: [
            "hair","eye","face","neck","arm","hand","finger","abdomen","leg","toe",
            "nose","ear","mouth","tooth","shoulder","elbow","chest","hip","knee","foot",
            "lungs","heart","tooth","large intestine","liver","spine",
            "female reproductive organ","stomach","bladder","gallbladder","kidneys",
            "male reproductive organ","eye","joint","pancreas","brain"
          ]
        },
        {
          type: "mcq",
          title: "General Part 1 — Fill in the correct word",
          text: "Tom a jeho party",
          questions: [
            { q: "Protože ___ narozeniny, tak dělám ___.", options: ["mám", "jsem", "pracuju"], correct: 0,
              explanation: '"Protože mám narozeniny" = Because I have a birthday. Jsem/pracuju don\'t fit the noun "narozeniny".' },
            { q: "Dělám ___.", options: ["fotbal", "snídani", "party"], correct: 2,
              explanation: '"Dělám party" = I\'m having a party. You don\'t "dělat fotbal" in Czech; snídani = breakfast (wrong context).' },
            { q: "Akce je v sobotu 7. 6. ve čtyři hodiny ___.", options: ["dopoledne", "odpoledne", "za týden"], correct: 1,
              explanation: 'Four o\'clock is in the afternoon (odpoledne). Dopoledne = morning (before noon); za týden = in a week.' },
            { q: "V šest hodin je ___ a potom dort.", options: ["večeří", "večeře", "večeřet"], correct: 1,
              explanation: '"Je večeře" = there is dinner (nominative noun). "Večeří" = they are having dinner; "večeřet" = to have dinner (infinitive).' },
            { q: "V devět ___ večer jdeme na koncert.", options: ["hodiny", "hodin", "hodina"], correct: 1,
              explanation: '"V devět hodin" = at nine o\'clock. After numerals 5+, use the genitive plural "hodin".' },
            { q: "Jdeme ___ koncert.", options: ["do", "k", "na"], correct: 2,
              explanation: '"Jít na koncert" = to go to a concert. Na + accusative is used for events and shows.' },
            { q: "Na party jde také můj ___ Mark z Anglie.", options: ["sestra", "bratr", "tatínka"], correct: 1,
              explanation: '"Můj bratr" = my brother. Sestra = sister (feminine); tatínka = wrong case here.' },
            { q: "Mark má ___ nohu.", options: ["zlomeninu", "zlomenou", "bolest"], correct: 1,
              explanation: '"Má zlomenou nohu" = has a broken leg. "Zlomenou" is the accusative feminine adjective agreeing with "nohu".' },
            { q: "Mark ___ tancovat.", options: ["musí", "může", "nemůže"], correct: 2,
              explanation: 'Mark has a broken leg, so he CANNOT dance (nemůže). Musí = must; může = can/may.' },
            { q: "Musí hodně ___.", options: ["relaxoval", "nemocný", "relaxovat"], correct: 2,
              explanation: '"Musí relaxovat" = he must relax. An infinitive is needed after "musí". "Relaxoval" is past tense; "nemocný" is an adjective.' }
          ]
        },
        {
          type: "write",
          title: "General Part 2 — Make questions",
          prompts: [
            "_____ jste jeli do Německa? Minulý týden.",
            "_____ bydlí kamarád? V Praze.",
            "_____ jsi? Z Indie.",
            "_____ je ten pacient? Starý.",
            "_____ máš auto? Nové.",
            "_____ to je? To je můj profesor anatomie."
          ],
          modelAnswers: ["Kdy", "Kde", "Odkud", "Jaký", "Jaké", "Kdo"]
        },
        {
          type: "write",
          title: "General Part 3 — Make sentences",
          prompts: [
            "já – polévka – guláš – vařit – a. (PAST)",
            "ty – tancovat – klub – v – včera? (PAST)",
            "my – jít – na – oběd – chtít. (PRESENT)",
            "kamarádka – dobrá – restaurace – hledat. (PRESENT)",
            "test – v – začínat – 15 hodin. (PRESENT)"
          ],
          modelAnswers: [
            "Vařil/a jsem polévku a guláš.",
            "Tancoval/a jsi včera v klubu?",
            "Chceme jít na oběd.",
            "Kamarádka hledá dobrou restauraci.",
            "Test začíná v 15 hodin."
          ]
        },
        {
          type: "write",
          title: "General Part 4 — Write dates in numbers",
          prompts: [
            "prvního března devatenáct set šedesát pět",
            "sedmého dubna dva tisíce pět",
            "třináctého října devatenáct set devatenáct",
            "dvacátého čtvrtého prosince devatenáct set devadesát"
          ],
          modelAnswers: ["1. 3. 1965", "7. 4. 2005", "13. 10. 1919", "24. 12. 1990"]
        },
        {
          type: "write",
          title: "General Part 5 — Write the opposites",
          prompts: [
            "nové auto × _____ auto",
            "velká nemocnice × _____ nemocnice",
            "pravé ucho × _____ ucho",
            "starý profesor × _____ profesor",
            "zdravé jídlo × _____ jídlo",
            "dlouhá cesta × _____ cesta"
          ],
          modelAnswers: ["staré", "malá", "levé", "mladý", "nezdravé", "krátká"]
        },
        {
          type: "chooseForm",
          title: "General Part 6 — Choose the correct form",
          text: "Jmenuji se Petr Novotný. Je mu/mi 63 let. Jsem/jsme z Prahy, pracuju jako doktor/doktorka. Můj/moje manželka se jmenuje Anna. Máme dvě/dva dcery a jeden/jednoho syna. Naše starší dcera se jmenuje Pavla, je jí/mu 30 let. Mladší dcera se jmenuje Petra a je jí/mu 29 let. Pavla je ženatá/vdaná a má malý/malého syna, Dominika, je to můj/moje vnuk. Petra nemá rodinu, je svobodná, má přítele Alexe. Náš syn Honza je také svobodný, jeho/její přítelkyně se jmenuje Laura.",
          correct: [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0],
          explanations: [
            "Je MI — 1st person: 'je mi X let' = I am X years old. Mu = him (3rd person masculine).",
            "JSEM z Prahy — 1st person singular. Jsme = we are (plural).",
            "Petr is male → DOKTOR. Doktorka is the female form.",
            "Manželka is feminine → MOJE. Můj is for masculine nouns.",
            "Dcery is feminine plural → DVĚ. Dva is for masculine animate/inanimate nouns.",
            "Syna is accusative animate → JEDNOHO. Jeden is nominative (wrong case).",
            "Pavla is female → JÍ 30 let. Mu is masculine.",
            "Petra is female → JÍ 29 let. Mu is masculine.",
            "Pavla is a woman → VDANÁ (married woman). Ženatý/ženatá doesn't apply to women; use vdaná.",
            "Syna is accusative animate → MALÉHO. Malý is nominative.",
            "Vnuk is masculine → MŮJ. Moje is for feminine/neuter nouns.",
            "Honza's girlfriend → JEHO (his). Její = her (would mean someone else's girlfriend)."
          ]
        },
        {
          type: "trueFalse",
          title: "General Part 7 — Reading comprehension",
          text: "Studenti a jejich zdravotní problémy",
          passage: "Od 20. 8. jsou v Praze dva studenti z Anglie – David a Jonathan. Studují medicínu na první lékařské fakultě. Jejich kamarád je řecký student Spyros. Spyros je v Praze od 25. 9. Všichni tři studenti bydlí v domě v Praze 2, Žitná ulice číslo 108.\n\nJonathan, David a Spyros měli zdravotní problémy.\n\nSpyros měl v neděli v noci vysokou teplotu 39 stupňů Celsia. Ráno musel navštívit lékaře. Lékař mu diagnostikoval angínu (tonsilitis). Spyros musí brát antibiotika a musí ležet v posteli. Musí pít neperlivou vodu a jíst ovoce, protože potřebuje vitamín C. Za dva týdny musí navštívit pana doktora ještě jednou.\n\nDavid měl akutní problém – v pátek ho začaly bolet dva zuby a navštívil stomatologa.\n\nJonathan měl také akutní problém. Bolela ho hlava. Šel do lékárny a koupil si tablety.",
          statements: [
            "Studenti z Anglie jsou tady od října.",
            "Spyros je tady od srpna.",
            "Studenti mají identickou adresu.",
            "Spyros večer navštívil lékaře.",
            "Spyros musí jít k doktorovi ještě jednou.",
            "David navštívil stomatologa v pátek.",
            "David musí navštívit stomatologa za dva týdny.",
            "Jonathan měl v neděli večer teplotu 39 stupňů Celsia.",
            "Jonathan navštívil doktora.",
            "Jonathan tablety koupil v lékárně."
          ],
          correct: ["Ne","Ne","Ano","Ne","Ano","Ano","Ne","Ne","Ne","Ano"],
          explanations: [
            "Ne — David and Jonathan arrived on 20. 8. (August), not October.",
            "Ne — 'Spyros je v Praze od 25. 9.' = from September, not August.",
            "Ano — All three live at Žitná ulice číslo 108, Praha 2.",
            "Ne — Spyros visited the doctor in the MORNING ('Ráno musel navštívit lékaře'), not in the evening.",
            "Ano — 'Za dva týdny musí navštívit pana doktora ještě jednou.'",
            "Ano — 'v pátek ho začaly bolet dva zuby a navštívil stomatologa.'",
            "Ne — There is no follow-up appointment mentioned for David. It is Spyros who must revisit in two weeks.",
            "Ne — It was Spyros who had 39°C fever. Jonathan had a headache (bolela ho hlava).",
            "Ne — Jonathan went to the PHARMACY ('šel do lékárny'), not to a doctor.",
            "Ano — 'Šel do lékárny a koupil si tablety.'"
          ]
        }
      ]
    }
  };
})();
