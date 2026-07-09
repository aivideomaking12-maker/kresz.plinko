import { Question } from "../../types";

export const groupBQuestions: Question[] = [
  // --- KÖZÚTI JELZÉSEK (20 questions) ---
  {
    id: "jel_1",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit kell tenned, ha a közúti jelzőlámpa PIROS jelzést mutat?",
    answers: [
      "Lassan továbbhaladhatsz",
      "Meg kell állnod a vonal előtt",
      "Ha nem jön senki, átmehetsz",
      "Csak kerékpárral mehetsz át"
    ],
    correctAnswer: 1,
    explanation: "A piros lámpa határozott és kötelező megállási parancsot jelent minden járműnek és gyalogosnak."
  },
  {
    id: "jel_2",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit jelent a villogó sárga fény a közlekedési jelzőlámpánál?",
    answers: [
      "A lámpa elromlott, fokozott óvatossággal kell áthaladni a táblák szerint",
      "Sietni kell, mert mindjárt piros lesz",
      "Mindenkinek meg kell állnia",
      "Személyautóval szabad, busszal tilos haladni"
    ],
    correctAnswer: 0,
    explanation: "A villogó sárga fény veszélyre hívja fel a figyelmet, és jelzi, hogy a lámpa nem szabályozza az áthaladást (ilyenkor az elsőbbséget szabályozó táblák érvényesek)."
  },
  {
    id: "jel_3",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit kell tenned, ha a rendőr neked hátat fordít, vagy szemből áll veled kinyújtott karral?",
    answers: [
      "Gyorsan át kell menned előtte",
      "Meg kell állnod, ez a jelzés a piros lámpának felel meg",
      "Ingetni kell neki",
      "Elkanyarodhatsz jobbra"
    ],
    correctAnswer: 1,
    explanation: "Ha a forgalmat irányító rendőr szemből vagy hátulról látható, az megállási kötelezettséget ('tilos') jelent számodra."
  },
  {
    id: "jel_4",
    category: "jelzesek",
    difficulty: "medium",
    question: "Melyik irányból érkezőnek szabad áthaladnia, ha a rendőr oldala mutat feléd (hosszirányban áll az úton)?",
    answers: [
      "Senkinek sem",
      "Annak, akinek az oldala felé mutat (szabad az út, mint a zöld lámpánál)",
      "Annak, akivel szemben áll",
      "Csak a buszoknak"
    ],
    correctAnswer: 1,
    explanation: "Ha a rendőr válla mutat feléd (oldalról látod őt), az szabad utat jelent ('zöld fény'), így óvatosan továbbhaladhatsz."
  },
  {
    id: "jel_5",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit jelent a sárga folyamatos fény a jelzőlámpán a piros után (piros és sárga együtt világít)?",
    answers: [
      "Azonnal indulhatsz gázzal",
      "A lámpa mindjárt zöldre vált, készülni kell az indulásra",
      "Vissza kell tolatni",
      "A lámpa kikapcsol"
    ],
    correctAnswer: 1,
    explanation: "A piros és sárga együttes fény azt jelzi, hogy mindjárt zöld fény következik, de elindulni csak a zöld megjelenésekor szabad!"
  },
  {
    id: "jel_6",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen burkolati jel jelzi az úttesten a gyalogosok átkelőhelyét?",
    answers: [
      "Sárga cikkcakkos vonal",
      "Párhuzamos széles fehér csíkok az úttest hosszában (zebra)",
      "Egyetlen fehér folytonos vonal",
      "Piros háromszögek"
    ],
    correctAnswer: 1,
    explanation: "Az úttesten lévő párhuzamos fehér sávok a kijelölt gyalogos-átkelőhelyet, közismert nevén a zebrát jelölik."
  },
  {
    id: "jel_7",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelent az úttest közepén lévő zárt, dupla folytonos fehér vonal?",
    answers: [
      "Bármikor átléphető előzésnél",
      "Tilos átlépni és ráhajtani, olyan mint egy fal az úttest két iránya között",
      "Csak biciklivel szabad átlépni",
      "Ott kell parkolni"
    ],
    correctAnswer: 1,
    explanation: "A folytonos vonalat (legyen az szimpla vagy dupla) semmilyen járművel nem szabad átlépni, sem ráhajtani."
  },
  {
    id: "jel_8",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen színű lámpája van a vasúti átjárónak, ha szabad az áthaladás?",
    answers: ["Zöld villogó", "Fehér villogó", "Sárga villogó", "Kék folyamatos"],
    correctAnswer: 1,
    explanation: "A vasúti átjáróban lévő fénysorompó villogó fehér jelzése jelzi, hogy a berendezés működik, és szabad az áthaladás."
  },
  {
    id: "jel_9",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen színű fény világít a fénysorompón, ha jön a vonat?",
    answers: ["Egy piros villogó", "Két felváltva villogó piros fény", "Folyamatos kék", "Zöld és sárga együtt"],
    correctAnswer: 1,
    explanation: "Ha jön a vonat, a fénysorompón két piros fény villog felváltva. Ilyenkor szigorúan tilos az átjáróba hajtani vagy lépni!"
  },
  {
    id: "jel_10",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit jelent a szaggatott fehér vonal az úton?",
    answers: [
      "Tilos rajta átmenni",
      "Terelővonal, amelyet előzés vagy kanyarodás céljából át szabad lépni a szabályok betartásával",
      "Ott kell megállni",
      "A gyalogosok átkelőhelyét"
    ],
    correctAnswer: 1,
    explanation: "A szaggatott fehér terelővonal az úttesten sávokat választ el, és a biztonsági szabályok betartásával szabadon átléphető."
  },
  {
    id: "jel_11",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelent a sárga színű útburkolati jel (pl. sárga szaggatott vagy folytonos vonal)?",
    answers: [
      "Hogy szép legyen az út",
      "Ideiglenes forgalmi rendet jelöl, ami felülírja a fehér burkolati jeleket (pl. útfelújításnál)",
      "Bicikliutat jelöl mindig",
      "Iskola közeledtét jelzi"
    ],
    correctAnswer: 1,
    explanation: "A sárga útburkolati jelek ideiglenesek (pl. építkezésnél), és ezek kötelezően érvényesek a régi fehér jelekkel szemben."
  },
  {
    id: "jel_12",
    category: "jelzesek",
    difficulty: "hard",
    question: "Mit jelent, ha a jelzőlámpában egy zöld nyíl világít (kiegészítő zöld jelzés) egy kerek zöld helyett?",
    answers: [
      "Csak a nyíl által mutatott irányba szabad továbbhaladni, de abba az irányba tiszta és védett utad van",
      "Tilos arra menni",
      "Bármelyik irányba mehetsz",
      "Meg kell állni és várni"
    ],
    correctAnswer: 0,
    explanation: "A nyíl alakú zöld fény határozottan jelzi, hogy csak abba az irányba szabad továbbhaladni, de ott nincs keresztező forgalom."
  },
  {
    id: "jel_13",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit jelöl a kerékpáros piktogram (felfestett fehér bicikli) az úton?",
    answers: [
      "Hogy itt autók parkolhatnak",
      "A kerékpárosok számára kijelölt utat, sávot vagy átkelőhelyet",
      "Hogy tilos itt biciklizni",
      "Egy bicikliüzlet közelségét"
    ],
    correctAnswer: 1,
    explanation: "A kerékpáros piktogram egyértelműen a kerékpáros forgalom számára fenntartott vagy javasolt felületeket jelöli."
  },
  {
    id: "jel_14",
    category: "jelzesek",
    difficulty: "medium",
    question: "Ha a rendőr kinyújtott karral felfelé mutat (függőleges karjelzés), mit kell tennie a közlekedőknek?",
    answers: [
      "Mindenkinek meg kell állnia, mert a rendőr irányt vagy fázist vált (mint a sárga lámpa)",
      "Mindenki gyorsan gázt adhat",
      "Le kell szállni a kocsiból",
      "Nincs jelentősége"
    ],
    correctAnswer: 0,
    explanation: "A rendőr függőlegesen feltartott keze a forgalom irányának megváltozását jelzi, és mindenkinek megállási kötelezettséget jelent."
  },
  {
    id: "jel_15",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelent a zebra előtt lévő sárga villogó fényű lámpa egy oszlopon?",
    answers: [
      "Azt, hogy piros a lámpa",
      "Veszélyes gyalogos-átkelőhelyre figyelmezteti a járművezetőket, hogy időben lassítsanak",
      "Hogy ingyen lehet parkolni",
      "Hogy tilos a gyalogos átkelés"
    ],
    correctAnswer: 1,
    explanation: "A sárga villogó lámpa a zebra felett fokozott óvatosságra inti az autósokat, jelezve, hogy gyalogosok kelhetnek át az úton."
  },
  {
    id: "jel_16",
    category: "jelzesek",
    difficulty: "easy",
    question: "Melyik jelzés a legerősebb a kereszteződésben a KRESZ hierarchia szerint?",
    answers: ["A táblák", "A jelzőlámpa", "A rendőr kézi irányítása", "A jobbkéz-szabály"],
    correctAnswer: 2,
    explanation: "A rendőr utasítása a legerősebb! Ha a rendőr szabad utat mutat, de a lámpa piros, akkor is át kell menni a rendőr jelzése szerint."
  },
  {
    id: "jel_17",
    category: "jelzesek",
    difficulty: "hard",
    question: "Ha a rendőr karjait vízszintesen kinyújtja, melyik irányból jövőknek van piros jelzés?",
    answers: [
      "Akiknek a kinyújtott karok irányából jönnek",
      "Akik a rendőr melle és háta felől érkeznek",
      "Mindenkinek",
      "Senkinek"
    ],
    correctAnswer: 1,
    explanation: "A rendőr kinyújtott karja egy sorompót mintáz. Aki a rendőr arcával vagy hátával találkozik, annak meg kell állnia (piros), aki az oldalánál van, az mehet."
  },
  {
    id: "jel_18",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelentenek a zebra mellett felfestett fehér kis négyzetek sorban az úton?",
    answers: [
      "Díszítést",
      "A kerékpáros átvezetés helyét az úttesten",
      "Hogy ott tilos megállni",
      "Gyalogosok várakozóhelyét"
    ],
    correctAnswer: 1,
    explanation: "A kis fehér négyzetekből álló dupla szaggatott vonal a kerékpárút átvezetését jelöli az úttesten keresztül."
  },
  {
    id: "jel_19",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit kell tenned, ha zöld a jelzőlámpa, de a kereszteződésben torlódás van és nem tudnál áthaladni?",
    answers: [
      "Behajtasz és megállsz a kereszteződés közepén",
      "Nem hajtasz be a kereszteződésbe, megvárod a vonal mögött, hogy szabaddá váljon az út",
      "Dudálsz folyamatosan",
      "Biciklivel felmész a járdára"
    ],
    correctAnswer: 1,
    explanation: "Zöld lámpa esetén sem szabad behajtani a kereszteződésbe, ha ott forgalmi torlódás van, mert elzárnád a keresztirányú forgalmat, amikor nekik lesz zöld."
  },
  {
    id: "jel_20",
    category: "jelzesek",
    difficulty: "easy",
    question: "Hogyan ismerheted fel a rendőrautót sötétben is?",
    answers: [
      "A piros és kék színű villogó fényhídról (sziréna lámpa)",
      "A hangos motorról",
      "A fehér színéről",
      "Nem lehet felismerni"
    ],
    correctAnswer: 0,
    explanation: "A rendőrautót a tetején elhelyezett piros-kék megkülönböztető villogó fényekről (fényhídról) könnyen fel lehet ismerni éjszaka is."
  },

  // --- ELSŐBBSÉG (20 questions) ---
  {
    id: "els_1",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit kell tenned az 'Állj! Elsőbbségadás kötelező' (STOP) táblánál?",
    answers: [
      "Lassítasz, és ha üres az út, megállás nélkül továbbmész",
      "A járművel kötelezően meg kell állni, és elsőbbséget adni a keresztező úton érkezőknek",
      "Dudálsz egyet és áthajtasz",
      "Biciklivel nem kell megállnod"
    ],
    correctAnswer: 1,
    explanation: "A STOP táblánál a jármű kerekének teljesen meg kell állnia (0 km/h-ra), és csak az elsőbbség megadása után szabad továbbmenni."
  },
  {
    id: "els_2",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a 'jobbkéz-szabály' egy egyenrangú útkereszteződésben?",
    answers: [
      "Azt, hogy mindig a jobb oldali sávban kell haladni",
      "Elsőbbséget kell adni a jobbról érkező járműnek",
      "Azt, hogy csak jobbra szabad kanyarodni",
      "Aki jobb kézzel integet, az mehet először"
    ],
    correctAnswer: 1,
    explanation: "Egyenrangú útkereszteződésben (ahol nincs tábla vagy lámpa) mindig a jobbról érkező járműnek van elsőbbsége."
  },
  {
    id: "els_3",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Kinek van elsőbbsége a kijelölt gyalogos-átkelőhelyen (zebrán)?",
    answers: [
      "Az autósnak, mert ő a gyorsabb",
      "A gyalogosnak a járművekkel szemben",
      "Annak, aki hangosabb",
      "A kerékpárosnak, ha teker a zebrán"
    ],
    correctAnswer: 1,
    explanation: "A kijelölt gyalogos-átkelőhelyen a gyalogosnak abszolút elsőbbsége van a közeledő járművekkel szemben."
  },
  {
    id: "els_4",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Ha kerékpárral egy kapuból vagy földútról hajtasz ki a szilárd burkolatú útra, kinek kell elsőbbséget adnod?",
    answers: [
      "Senkinek, neked van elsőbbséged",
      "Az úton érkező összes járműnek és gyalogosnak",
      "Csak a buszoknak",
      "Csak a gyalogosoknak"
    ],
    correctAnswer: 1,
    explanation: "Ingatlanból vagy földútról szilárd burkolatú útra való ráhajtáskor mindig elsőbbséget kell adni az úton közlekedő járműveknek."
  },
  {
    id: "els_5",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Kinek van elsőbbsége a körforgalomban haladó jármű és a körforgalomba éppen belépni szándékozó jármű közül (általában)?",
    answers: [
      "A belépő járműnek",
      "A körforgalomban már bent haladó járműnek, mert a belépőknél elsőbbségadás kötelező tábla van",
      "A nagyobb járműnek",
      "A jobbkéz-szabály dönt"
    ],
    correctAnswer: 1,
    explanation: "A körforgalomban haladóknak van elsőbbségük a belépő járművekkel szemben (a bejáratoknál lévő táblák miatt)."
  },
  {
    id: "els_6",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit kell tenned, ha szirénázó mentőautó közeledik a kereszteződésben?",
    answers: [
      "Versenyezni kezdesz vele",
      "Azonnal megállsz vagy lehúzódsz, teljes elsőbbséget biztosítva neki",
      "Figyelmen kívül hagyod, ha zöld a lámpád",
      "Dudálsz, hogy siessen"
    ],
    correctAnswer: 1,
    explanation: "A szirénázó megkülönböztetett járműveknek (mentő, tűzoltó, rendőrség) minden körülmények között elsőbbséget kell biztosítani."
  },
  {
    id: "els_7",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Ha balra kanyarodsz egy kereszteződésben, kinek kell elsőbbséget adnod a kanyarodási szabály szerint?",
    answers: [
      "Senkinek",
      "A szemből egyenesen haladó vagy jobbra kanyarodó járműveknek",
      "Csak a gyalogosoknak",
      "Mögötted haladóknak"
    ],
    correctAnswer: 1,
    explanation: "Balra kanyarodáskor elsőbbséget kell adni a szemből érkező, egyenesen továbbhaladó vagy jobbra kanyarodó járműveknek."
  },
  {
    id: "els_8",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a csúcsára állított háromszög alakú jelzőtábla ('Elsőbbségadás kötelező')?",
    answers: [
      "Hogy neked van elsőbbséged",
      "Elsőbbséget kell adnod a keresztező úton haladó járműveknek, de ha üres az út, nem kell kötelezően megállnod",
      "Azt, hogy az út véget ér",
      "Sátorozóhelyet jelöl"
    ],
    correctAnswer: 1,
    explanation: "A háromszög alakú táblánál elsőbbséget kell adnod, de nem kötelező megállnod, ha megállás nélkül is biztonságosan látható, hogy nem jön senki."
  },
  {
    id: "els_9",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Kinek van elsőbbsége a kanyarodó jármű és az úttesten átkelő gyalogos között, ha a jármű arról az útról kanyarodik le, amelyen a gyalogos átkel?",
    answers: [
      "A kanyarodó járműnek",
      "A gyalogosnak, mert a kanyarodó járműnek elsőbbséget kell adnia a gyalogos részére",
      "A gyorsabbnak",
      "Nincs szabályozva"
    ],
    correctAnswer: 1,
    explanation: "Bekanyarodáskor mindig elsőbbséget kell adni az úttesten átkelő gyalogosoknak azon az úton, amelyre ráfordulunk."
  },
  {
    id: "els_10",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a sárga színű, négyzet alakú tábla, aminek vastag fekete kerete és fehér szegélye van (főútvonal tábla)?",
    answers: [
      "Tilos a behajtás",
      "Főútvonalon haladsz, a kereszteződésekben neked van elsőbbséged a mellékutcákból érkezőkkel szemben",
      "Balesetveszélyes hely",
      "Iskolaövezet"
    ],
    correctAnswer: 1,
    explanation: "A Főútvonal tábla azt jelzi, hogy az ezen az úton haladóknak elsőbbségük van a keresztező mellékutakról érkező járművekkel szemben."
  },
  {
    id: "els_11",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Mit kell tenned egyenrangú kereszteződésben, ha balról érkezik egy kerékpáros?",
    answers: [
      "Megállsz és elengeded",
      "Neked van elsőbbséged, mert ő balról jön (jobbkéz-szabály szerint neked van elsőbbséged)",
      "Biciklivel mindig el kell engedni mindenkit",
      "Dudálsz, hogy álljon meg"
    ],
    correctAnswer: 1,
    explanation: "Mivel te vagy jobbkéz felől a kerékpároshoz képest, egyenrangú kereszteződésben neked van elsőbbséged vele szemben."
  },
  {
    id: "els_12",
    category: "elsobbseg",
    difficulty: "hard",
    question: "Kinek van elsőbbsége: a villamosnak vagy az autónak egy egyenrangú kereszteződésben, ha a villamos balról érkezik?",
    answers: [
      "Az autónak, mert a villamos balról jön",
      "A villamosnak, mert a villamosnak az egyenrangú kereszteződésben balról is elsőbbsége van az autóval szemben",
      "Annak, amelyik gyorsabb",
      "Aki először dudál"
    ],
    correctAnswer: 1,
    explanation: "A villamos különleges jármű: egyenrangú kereszteződésben a villamosnak balról érkezve is elsőbbsége van a nem sínpályás járművekkel (autó, bicikli) szemben."
  },
  {
    id: "els_13",
    category: "elsobbseg",
    difficulty: "hard",
    question: "Ha a főútvonal kanyarodik (amit kiegészítő tábla jelez), kihez képest van elsőbbséged, ha te ezen a kanyarodó főúton maradsz?",
    answers: [
      "Mindenki mással szemben, aki mellékútvonalról érkezik",
      "Csak a gyalogosokkal szemben",
      "Senkivel szemben",
      "Csak az autósokkal szemben"
    ],
    correctAnswer: 0,
    explanation: "Ha a főútvonal kanyarodik, az azon haladónak elsőbbsége van a mellékútról érkezőkkel szemben, függetlenül attól, hogy a főútvonal kanyarodik."
  },
  {
    id: "els_14",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Kinek van elsőbbsége szűk úton (ahol nem fér el két autó egyszerre), ha az egyik oldalon akadály (pl. parkoló autó) van?",
    answers: [
      "Annak, akinek az oldalán az akadály van",
      "Annak, akinek az oldala szabad (akadálymentes), a másiknak meg kell várnia a kikerülést",
      "A nagyobb autónak",
      "Aki bátrabb"
    ],
    correctAnswer: 1,
    explanation: "Ha az te oldaladon van az akadály, neked kell megállnod és megvárnod, amíg a szemből jövő elhalad, mert neki van elsőbbsége."
  },
  {
    id: "els_15",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Kinek van elsőbbsége a kijelölt gyalogos-átkelőhelyen: a kerékpárt TOLÓ gyalogosnak vagy a száguldó autónak?",
    answers: [
      "Az autónak",
      "A kerékpárt toló gyalogosnak (mivel gyalogosnak minősül)",
      "Aki gyorsabb",
      "A rendőrnek"
    ],
    correctAnswer: 1,
    explanation: "A kerékpárt toló személy gyalogosnak minősül, így a zebrán abszolút elsőbbsége van az autókkal szemben."
  },
  {
    id: "els_16",
    category: "elsobbseg",
    difficulty: "hard",
    question: "Ha kerékpársávban haladsz egyenesen, és melletted egy autó jobbra akar kanyarodni (keresztezve a sávodat), kinek van elsőbbsége?",
    answers: [
      "Az autónak, mert nagyobb",
      "Neked (a kerékpárosnak), az autónak elsőbbséget kell adnia az egyenesen haladó kerékpárosnak",
      "Mindkettő egyszerre mehet",
      "A jobbkéz-szabály dönt"
    ],
    correctAnswer: 1,
    explanation: "Az egyenesen haladó kerékpárosnak elsőbbsége van a vele párhuzamosan haladó és jobbra kanyarodó autóval szemben."
  },
  {
    id: "els_17",
    category: "elsobbseg",
    difficulty: "easy",
    question: "A rendőr jelzései felülírják-e a közúti jelzőtáblák utasításait?",
    answers: [
      "Nem, a táblák fontosabbak",
      "Igen, a rendőr utasítása minden más jelzést (táblát, lámpát, szabályt) felülír",
      "Csak hétvégén",
      "Csak autópályán"
    ],
    correctAnswer: 1,
    explanation: "A rendőri forgalomirányítás áll a KRESZ hierarchia csúcsán, azaz minden más jelzést felülbírál."
  },
  {
    id: "els_18",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Elinduláskor (pl. járda széléről való elindulás) kinek kell elsőbbséget adni?",
    answers: [
      "Senkinek, az elindulónak van elsőbbsége",
      "A már úton haladó járműveknek",
      "Csak a buszoknak",
      "Csak a gyalogosoknak"
    ],
    correctAnswer: 1,
    explanation: "Az út széléről való elindulás előtt meg kell győződni a biztonságról, irányjelezni kell, és elsőbbséget kell adni a már úton haladó járműveknek."
  },
  {
    id: "els_19",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a kék alapon fehér nyíl tábla, ha szemből egy piros nyíl is van rajta?",
    answers: [
      "Szembejövő forgalommal szemben elsőbbséged van a szűkületben",
      "Elsőbbséget kell adnod a szembejövőnek",
      "Tilos a behajtás",
      "Egyirányú utca"
    ],
    correctAnswer: 0,
    explanation: "A kék kerek vagy négyszögletes tábla a fehér és piros nyíllal azt jelenti, hogy a szűk útszakaszon neked van elsőbbséged a szembejövővel szemben."
  },
  {
    id: "els_20",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Melyik járműnek van elsőbbsége egyenrangú kereszteződésben a kanyarodási szabály szerint, ha mindkettő egyenesen haladna egymással szemben?",
    answers: [
      "A jobbkéz-szabály dönt",
      "Egyik sem kanyarodik, így nem keresztezik egymás útját, egyszerre haladhatnak át",
      "A piros autó haladhat át először",
      "A kék autó haladhat át először"
    ],
    correctAnswer: 1,
    explanation: "Mivel mindkét jármű egyenesen halad egymással szemben, az útjaik nem keresztezik egymást, így egyszerre, biztonságosan áthaladhatnak."
  },

  // --- MEGÁLLÁS ÉS VÁRAKOZÁS (20 questions) ---
  {
    id: "meg_1",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e megállni gépjárművel közvetlenül a kijelölt gyalogos-átkelőhelyen (zebrán)?",
    answers: [
      "Igen, ha csak egy percre állunk meg",
      "Nem, a zebrán és közvetlenül előtte 5 méteren belül megállni szigorúan tilos",
      "Igen, ha bekapcsoljuk a vészvillogót",
      "Biciklivel szabad a zebrán parkolni"
    ],
    correctAnswer: 1,
    explanation: "A zebrán és közvetlenül előtte 5 méteres távolságon belül tilos megállni, mert a parkoló autó eltakarná az átkelni szándékozó gyalogosokat."
  },
  {
    id: "meg_2",
    category: "megallas",
    difficulty: "easy",
    question: "Mi a különbség a 'Megállás' és a 'Várakozás' (parkolás) között a KRESZ szerint?",
    answers: [
      "Nincs különbség",
      "A megállás csak a ki- és beszállás vagy rakodás idejéig tartó, rövid folyamat (max. 5 perc), a várakozás ennél hosszabb parkolás",
      "A megállás önkéntes, a várakozás kötelező",
      "A megállásért fizetni kell, a parkolásért nem"
    ],
    correctAnswer: 1,
    explanation: "A megállás legfeljebb 5 percig tartó, utas ki/beszállását vagy rakodást szolgáló tartózkodás. Ennél hosszabb idő már várakozásnak (parkolásnak) minősül."
  },
  {
    id: "meg_3",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e parkolni olyan kapu előtt, ahol gépjárművek járnak be az udvarra?",
    answers: [
      "Igen, ha nem jön autó",
      "Nem, mások ingatlanának kapuja előtt várakozni (parkolni) szigorúan tilos",
      "Csak éjszaka",
      "Csak ha ott lakunk"
    ],
    correctAnswer: 1,
    explanation: "Tilos várakozni (parkolni) ott, ahol a jármű be- és kihajtását az ingatlanra (kapubejárónál) akadályoznánk."
  },
  {
    id: "meg_4",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e megállni olyan útszakaszon, ahol 'Megállni tilos' tábla van elhelyezve?",
    answers: [
      "Igen, ha bent ül a sofőr",
      "Nem, ezen a szakaszon semmilyen okból sem szabad önkéntesen megállni a járművel",
      "Csak kerékpárral szabad",
      "Csak vasárnap szabad"
    ],
    correctAnswer: 1,
    explanation: "A 'Megállni tilos' tábla hatálya alatt semmilyen járművel nem szabad önkéntesen megállni (kivéve a forgalmi okból vagy műszaki hiba miatti megállást)."
  },
  {
    id: "meg_5",
    category: "megallas",
    difficulty: "medium",
    question: "Mit jelent a 'Várakozni tilos' tábla (kék körben piros keret és egyetlen átlós piros vonal)?",
    answers: [
      "Egyáltalán nem szabad megállni",
      "Rövid időre (max. 5 percre) meg szabad állni ki- és beszállás céljából, de hosszan parkolni (várakozni) tilos",
      "Csak kék autóknak tilos",
      "Szabad parkolni 2 órán át"
    ],
    correctAnswer: 1,
    explanation: "A várakozni tilos tábla engedélyezi a rövid megállást (pl. csomag kirakodása), de tiltja a tartós parkolást."
  },
  {
    id: "meg_6",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e gépjárművel megállni a buszmegállóban (autóbusz-öbölben)?",
    answers: [
      "Igen, ha nincs ott a busz",
      "Nem, a buszmegállóban megállni tilos, mert akadályozza a menetrend szerinti járatokat",
      "Csak taxival szabad",
      "Igen, ha bekapcsoljuk a rádiót"
    ],
    correctAnswer: 1,
    explanation: "Autóbusz-megállóhelyen megállni tilos, mert a buszok nem tudnának biztonságosan beállni az utasokért."
  },
  {
    id: "meg_7",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e a járdán parkolni autóval, ha nincs ezt megengedő tábla vagy felfestés?",
    answers: [
      "Igen, ha elférnek a gyalogosok",
      "Nem, a járdán parkolni csak akkor szabad, ha azt jelzőtábla vagy útburkolati jel kifejezetten megengedi",
      "Igen, hétvégén szabad",
      "Bármikor szabad, ha a játékszabály engedi"
    ],
    correctAnswer: 1,
    explanation: "A járdán gépjárművel megállni alapvetően tilos, kivéve ha tábla/jelzés engedi, és a gyalogosoknak legalább 1.5 méter szabad hely marad."
  },
  {
    id: "meg_8",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e kerékpárral megállni a járdán?",
    answers: [
      "Nem, soha",
      "Igen, ha a gyalogosok forgalmát nem akadályozzuk és marad elegendő hely a közlekedésre",
      "Csak ha leláncoljuk",
      "Csak éjszaka"
    ],
    correctAnswer: 1,
    explanation: "Kerékpárral szabad megállni a járdán, feltéve, hogy a gyalogosok közlekedését nem akadályozzuk."
  },
  {
    id: "meg_9",
    category: "megallas",
    difficulty: "medium",
    question: "Hány méterre szabad megállni egy útkereszteződéstől a KRESZ szerint?",
    answers: [
      "Közvetlenül mellette",
      "Legalább 5 méter távolságra a kereszteződés szélétől",
      "Legalább 10 méter távolságra",
      "Bármilyen távolságra"
    ],
    correctAnswer: 1,
    explanation: "Kereszteződésekben és azok sarkától számított 5 méteren belül tilos megállni a beláthatóság biztosítása érdekében."
  },
  {
    id: "meg_10",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e megállni olyan helyen, ahol eltakarnánk a közlekedési jelzőtáblát vagy jelzőlámpát a többi jármű elől?",
    answers: [
      "Igen, ha sietünk",
      "Nem, tilos megállni ott, ahol a jármű a jelzőtábla vagy jelzőlámpa láthatóságát akadályozná",
      "Csak teherautóval tilos",
      "Igen, ha kinyitjuk a csomagtartót"
    ],
    correctAnswer: 1,
    explanation: "Szigorúan tilos úgy megállni, hogy a járművünk elfedje a többi közlekedő elől a jelzőtáblákat vagy a lámpákat."
  },
  {
    id: "meg_11",
    category: "megallas",
    difficulty: "hard",
    question: "Milyen távolságot kell hagyni az álló jármű és az úttest túloldalán lévő záróvonal között?",
    answers: ["Legalább 1 métert", "Legalább 3 métert (hogy egy autó biztonságosan elférjen)", "Legalább 5 métert", "Nem kell helyet hagyni"],
    correctAnswer: 1,
    explanation: "Úgy kell megállni az úttest szélén, hogy a jármű és a záróvonal között legalább 3 méter széles sáv szabadon maradjon a biztonságos kikerüléshez."
  },
  {
    id: "meg_12",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e megállni vasúti átjáróban?",
    answers: [
      "Igen, ha nem jön vonat",
      "Nem, a vasúti átjáróban és attól számított 30 méteren belül megállni és várakozni szigorúan tilos",
      "Csak fényképezés céljából",
      "Csak biciklivel"
    ],
    correctAnswer: 1,
    explanation: "Vasúti átjáróban és annak közelében (30 méteren belül) megállni szigorúan tilos az életveszély és a vonatok akadályozása miatt."
  },
  {
    id: "meg_13",
    category: "megallas",
    difficulty: "easy",
    question: "Hogyan kell elhelyezni a járművet az úttest jobb szélén, ha megállunk?",
    answers: [
      "Az úttestre merőlegesen, bárhol",
      "Párhuzamosan az úttest tengelyével, szorosan az útszegély mellé húzódva",
      "Az út közepén",
      "Átlósan, elzárva a sávot"
    ],
    correctAnswer: 1,
    explanation: "Főszabályként a menetirány szerinti jobb oldalon, az útszegéllyel párhuzamosan, szorosan a jobb szélre húzódva kell megállni."
  },
  {
    id: "meg_14",
    category: "megallas",
    difficulty: "easy",
    question: "Kinek a számára fenntartott helyen tilos parkolni a mozgáskorlátozott kártya nélkül?",
    answers: [
      "A kerékpárosoknak",
      "A mozgáskorlátozottak kék színnel és kerekesszék piktogrammal jelölt parkolóhelyein",
      "A rendőrautóknak",
      "Az iskolaigazgatónak"
    ],
    correctAnswer: 1,
    explanation: "A kerekesszék piktogrammal megjelölt parkolóhelyek kizárólag a mozgáskorlátozott személyeket szállító járművek számára vannak fenntartva."
  },
  {
    id: "meg_15",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e megállni hídon vagy alagútban?",
    answers: [
      "Igen, szép a kilátás",
      "Nem, hídon, felüljárón, aluljáróban és alagútban megállni tilos",
      "Csak éjszaka",
      "Csak ha vészvillogót használunk"
    ],
    correctAnswer: 1,
    explanation: "Hídon, alagútban és felüljárókon tilos megállni, mert ezeken a helyeken a megálló járművek rendkívül balesetveszélyes akadályt képeznek."
  },
  {
    id: "meg_16",
    category: "megallas",
    difficulty: "easy",
    question: "Mit kell tenni az autó ajtajának kinyitása előtt, ha megálltunk az út szélén?",
    answers: [
      "Azonnal lökjük ki az ajtót",
      "Alaposan hátra kell nézni (tükörbe vagy fejjel), meggyőződve arról, hogy nem érkezik hátulról kerékpáros vagy másik jármű",
      "Hangosan kiabálunk, hogy nyílik az ajtó",
      "Nem kell tenni semmit"
    ],
    correctAnswer: 1,
    explanation: "Kiszállás előtt mindig ellenőrizni kell a mögöttes forgalmat! A hirtelen kinyitott ajtó súlyos sérülést okozhat a hátulról érkező biciklisnek."
  },
  {
    id: "meg_17",
    category: "megallas",
    difficulty: "hard",
    question: "Szabad-e megállni kerékpársávon gépjárművel?",
    answers: [
      "Igen, ha csak csomagot rakodunk ki",
      "Nem, a kerékpársávon megállni és várakozni autóval szigorúan tilos, az a bicikliseké",
      "Csak ha nincs ott biciklis",
      "Csak taxival"
    ],
    correctAnswer: 1,
    explanation: "A kijelölt kerékpársávon a gépjárműveknek még egy másodpercre is tilos megállniuk, mert ezzel a kerékpárosokat az úttest belső sávjába kényszerítenék."
  },
  {
    id: "meg_18",
    category: "megallas",
    difficulty: "medium",
    question: "Mit jelent a sárga színű folyamatos vonal az úttest jobb szélén (az útpadka mellett)?",
    answers: [
      "Díszítést",
      "Megállási tilalmat jelez az útburkolati jel",
      "Kerékpársávot",
      "Hogy ott lehet parkolni"
    ],
    correctAnswer: 1,
    explanation: "Az úttest szélén lévő sárga folytonos vonal útburkolati jelként Megállási tilalmat jelez."
  },
  {
    id: "meg_19",
    category: "megallas",
    difficulty: "hard",
    question: "Autóval való várakozás (parkolás) során kötelező-e behúzni a kéziféket és leállítani a motort?",
    answers: [
      "Nem, felesleges",
      "Igen, a járművet rögzíteni kell az elgurulás ellen (kézifékkel), és a motort le kell állítani",
      "Csak hegyen",
      "Csak ha automata az autó"
    ],
    correctAnswer: 1,
    explanation: "A várakozó járművet mindig biztosítani kell elgurulás ellen (kézifék behúzása, sebességbe tétel), és a környezet védelme miatt a motort is le kell állítani."
  },
  {
    id: "meg_20",
    category: "megallas",
    difficulty: "easy",
    question: "Mit kell tenni, ha az autónk elromlik (műszaki hiba) és nem tudunk továbbhaladni az úton?",
    answers: [
      "Ott hagyjuk és hazamegyünk",
      "Vészvillogót kapcsolunk, kirakjuk az elakadásjelző háromszöget és láthatósági mellényben biztonságos helyre húzódunk",
      "Ülünk a kocsiban és várunk",
      "Megpróbáljuk tolni az autópályán egyedül"
    ],
    correctAnswer: 1,
    explanation: "Műszaki hiba esetén kötelező a vészvillogó használata, az elakadásjelző háromszög kihelyezése, sötétben vagy lakott területen kívül pedig a fényvisszaverő mellény viselése."
  }
];
