import { Question } from "../../types";

export const groupBQuestions: Question[] = [
  // --- KÖZÚTI JELZÉSEK (20 questions) ---
  {
    id: "jel_1",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit kell tenned, ha a közúti jelzőlámpa PIROS jelzést mutat?",
    answers: [
      "Meg kell állnod a kijelölt stopvonal előtt.",
      "Ha a keresztforgalom engedi, átmehetsz.",
      "Fokozott óvatossággal, lassan továbbhaladhatsz.",
      "Csak kerékpárral és gyalogosan haladhatsz át."
    ],
    correctAnswer: 0,
    explanation: "A piros lámpa határozott és kötelező megállási parancsot jelent minden járműnek és gyalogosnak."
  },
  {
    id: "jel_2",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit jelent a villogó sárga fény a közlekedési jelzőlámpánál?",
    answers: [
      "Mindenkinek kötelezően meg kell állnia.",
      "Sietni kell, mert mindjárt piros jelzés következik.",
      "Kizárólag a tömegközlekedési eszközök haladhatnak.",
      "Fokozott óvatossággal kell továbbhaladni."
    ],
    correctAnswer: 3,
    explanation: "A villogó sárga fény veszélyre hívja fel a figyelmet, és jelzi, hogy a lámpa nem szabályozza az áthaladást (ilyenkor az elsőbbséget szabályozó táblák érvényesek)."
  },
  {
    id: "jel_3",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit kell tenned, ha a forgalmat irányító rendőr neked hátat fordít, vagy szemből áll veled kinyújtott karral?",
    answers: [
      "Jobbra kis ívben bekanyarodhatsz.",
      "Meg kell állnod és várnod a jelzésre.",
      "Csak egyenesen haladhatsz át a kereszteződésen.",
      "Lassítva, de megállás nélkül mehetsz tovább."
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
      "Kizárólag a kanyarodó járművek haladhatnak.",
      "A forgalom számára szabad az út.",
      "Csak a gyalogosok kelhetnek át az úton.",
      "Meg kell állni, és várni a következő jelzésre."
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
      "A lámpa hamarosan teljesen kikapcsol.",
      "Azonnal, lendületesen elindulhatsz.",
      "Fel kell készülni a zöld jelzésre.",
      "Fokozott óvatossággal behajthatsz."
    ],
    correctAnswer: 2,
    explanation: "A piros és sárga együttes fény azt jelzi, hogy mindjárt zöld fény következik, de elindulni csak a zöld megjelenésekor szabad!"
  },
  {
    id: "jel_6",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen burkolati jel jelzi az úttesten a gyalogosok átkelőhelyét?",
    answers: [
      "Folyamatos sárga cikkcakkos vonal.",
      "Párhuzamos fehér sávok (zebra).",
      "Keresztirányú szaggatott fehér vonal.",
      "Egymás mellé festett piros háromszögek."
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
      "Biztonságos előzés esetén átléphető.",
      "Csak a megkülönböztető jelzésűek léphetik át.",
      "Tilos átlépni vagy ráhajtani.",
      "Kizárólag kerékpárral szabad átlépni."
    ],
    correctAnswer: 2,
    explanation: "A folytonos vonalat (legyen az szimpla vagy dupla) semmilyen járművel nem szabad átlépni, sem ráhajtani."
  },
  {
    id: "jel_8",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen színű lámpája van a vasúti átjárónak, ha szabad az áthaladás?",
    answers: [
      "Zölden villogó fényjelzés.",
      "Folyamatosan világító sárga fény.",
      "Villogó fehér fényjelzés.",
      "Két felváltva villogó kék fény."
    ],
    correctAnswer: 2,
    explanation: "A vasúti átjáróban lévő fénysorompó villogó fehér jelzése mutatja, hogy a berendezés működik, és szabad az áthaladás."
  },
  {
    id: "jel_9",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen színű fény világít a fénysorompón, ha jön a vonat?",
    answers: [
      "Két felváltva villogó piros fény.",
      "Egyetlen folyamatosan világító piros fény.",
      "Gyorsan villogó sárga fényjelzés.",
      "Piros és sárga fény együttes világítása."
    ],
    correctAnswer: 0,
    explanation: "Ha jön a vonat, a fénysorompón két piros fény villog felváltva. Ilyenkor szigorúan tilos az átjáróba hajtani vagy lépni!"
  },
  {
    id: "jel_10",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit jelent a szaggatott fehér vonal az úton?",
    answers: [
      "Tilos rajta bármilyen járművel átmenni.",
      "A gyalogosok számára fenntartott átkelőhelyet.",
      "Átléphető terelővonalat jelez a sávok között.",
      "Megállási és várakozási tilalmat jelöl az úton."
    ],
    correctAnswer: 2,
    explanation: "A szaggatott fehér terelővonal az úttesten sávokat választ el, és a biztonsági szabályok betartásával szabadon átléphető."
  },
  {
    id: "jel_11",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelezhet az ideiglenes forgalmi rendnél alkalmazott sárga útburkolati jel?",
    answers: [
      "Kizárólag fizetős parkolóövezetet jelöl.",
      "Ideiglenes forgalmi rendet jelez az úton.",
      "Kiemelt gyermekintézmény (iskola) közelségét.",
      "Kötelező kerékpáros útvonalat jelez előre."
    ],
    correctAnswer: 1,
    explanation: "Ideiglenes forgalomszabályozásnál (pl. útépítés) sárga útburkolati jeleket is alkalmazhatnak; ezek az ideiglenes rend részét képezik és felülírják a fehér vonalakat."
  },
  {
    id: "jel_12",
    category: "jelzesek",
    difficulty: "hard",
    question: "Mit jelent a nyíl alakú zöld fényjelzés a kereszteződésben?",
    answers: [
      "Bármelyik szabadon választott irányba mehetsz.",
      "A nyíl által mutatott irányban szabad továbbhaladni.",
      "Meg kell állni, amíg a kiegészítő lámpa bekapcsol.",
      "Kizárólag a megkülönböztetett járművek haladhatnak."
    ],
    correctAnswer: 1,
    explanation: "A nyíl alakú zöld fényjelzés a nyíl által jelzett irányban engedélyezi a továbbhaladást; a kapcsolódó elsőbbségi szabályokat továbbra is alkalmazni kell."
  },
  {
    id: "jel_13",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit jelöl az úttesten felfestett kerékpáros piktogram?",
    answers: [
      "Gépjárművek számára fenntartott parkolóhelyet.",
      "Menetrend szerinti autóbusz megállóhelyét.",
      "Veszélyes, csúszós útburkolatra figyelmeztet.",
      "Kerékpáros közlekedésre kijelölt vagy ajánlott felületet."
    ],
    correctAnswer: 3,
    explanation: "A kerékpáros piktogram a kerékpáros közlekedésre kijelölt vagy ajánlott útfelület (pl. nyitott kerékpársáv, kerékpáros nyom) jelölésére szolgál."
  },
  {
    id: "jel_14",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelent a forgalomirányító rendőr függőlegesen feltartott karja?",
    answers: [
      "A forgalom megállítására, a rend változására figyelmeztet.",
      "Minden résztvevőnek azonnal fel kell gyorsítania.",
      "Csak a kanyarodó járműveknek kell kötelezően megállniuk.",
      "A forgalomirányítás végét és a táblák érvényességét jelzi."
    ],
    correctAnswer: 0,
    explanation: "A függőlegesen feltartott kar a forgalom megállítására, illetve a forgalmi rend változására figyelmeztető jelzés. Jelentése egyenértékű a sárga lámpával."
  },
  {
    id: "jel_15",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelent a zebra előtt lévő sárga villogó fényű lámpa egy oszlopon?",
    answers: [
      "A gyalogosok átkelése azon a szakaszon szigorúan tilos.",
      "Fokozott óvatosságra inti az arra haladó autósokat.",
      "Azt jelzi, hogy a következő lámpa biztosan piros lesz.",
      "A közelben lévő ingyenes várakozóhelyre hívja fel a figyelmet."
    ],
    correctAnswer: 1,
    explanation: "A sárga villogó lámpa a zebra felett vagy előtt fokozott óvatosságra inti az autósokat, jelezve, hogy gyalogosok kelhetnek át az úton."
  },
  {
    id: "jel_16",
    category: "jelzesek",
    difficulty: "easy",
    question: "Melyik jelzés a legerősebb egy kereszteződésben a KRESZ hierarchia szerint?",
    answers: [
      "A kihelyezett közúti jelzőtáblák.",
      "A működő fényjelző készülékek.",
      "A forgalomirányító rendőr jelzése.",
      "Az általános jobbkéz-szabály."
    ],
    correctAnswer: 2,
    explanation: "A rendőr utasítása a legerősebb! Ha a rendőr szabad utat mutat, de a lámpa piros, akkor is át kell menni a rendőr jelzése szerint."
  },
  {
    id: "jel_17",
    category: "jelzesek",
    difficulty: "hard",
    question: "Ha a rendőr karjait vízszintesen kinyújtja, melyik irányból jövőknek van piros (megállj) jelzés?",
    answers: [
      "Azoknak, akik a kinyújtott karok irányából (oldalról) érkeznek.",
      "Azoknak, akik a rendőr melle és háta felől érkeznek.",
      "Az adott kereszteződésben mindenkinek meg kell állnia.",
      "Senkinek sem jelent megállást, mindenki óvatosan haladhat."
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
      "Megállási és várakozási tilalmat jelöl az adott szakaszon.",
      "A gyalogosok számára fenntartott biztonsági szigetet.",
      "A kerékpárút úttesten történő átvezetését jelöli.",
      "Figyelmeztetés egy közeledő vasúti átjáróra."
    ],
    correctAnswer: 2,
    explanation: "A kis fehér négyzetekből álló dupla szaggatott vonal a kerékpárút átvezetését jelöli az úttesten keresztül."
  },
  {
    id: "jel_19",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit kell tenned, ha zöld a jelzőlámpa, de a kereszteződésben torlódás van, és biztosan nem tudnál áthaladni?",
    answers: [
      "Behajtasz, de szigorúan a kereszteződés közepén várakozol.",
      "Folyamatos hangjelzéssel ösztönzöd a többieket haladásra.",
      "Nem hajtasz be, ha várhatóan nem tudsz továbbhaladni.",
      "Csak abban az esetben hajtasz be, ha jobbra kanyarodsz."
    ],
    correctAnswer: 2,
    explanation: "Zöld lámpa esetén sem szabad behajtani a kereszteződésbe, ha ott forgalmi torlódás van, mert elzárnád a keresztirányú forgalmat, amikor nekik zöldre vált a lámpa."
  },
  {
    id: "jel_20",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen megkülönböztető fényjelzés jellemző a vonuló rendőrségi járművekre?",
    answers: [
      "Sárga villogó fény.",
      "Fehér folyamatos fény.",
      "Zöld villogó fény.",
      "Kék villogó fény."
    ],
    correctAnswer: 3,
    explanation: "A rendőrségi (valamint a mentő és tűzoltó) járművek megkülönböztető fényjelzése a kék (vagy kék és piros) villogó fény."
  },

  // --- ELSŐBBSÉG (20 questions) ---
  {
    id: "els_1",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit kell tenned az 'Állj! Elsőbbségadás kötelező' (STOP) táblánál?",
    answers: [
      "Lassítasz, és ha üres az út, megállás nélkül továbbmész.",
      "Teljesen megállsz, és elsőbbséget adsz a védett úton haladóknak.",
      "Hangjelzést adsz, majd fokozott óvatossággal áthajtasz.",
      "Csak abban az esetben állsz meg, ha teherautó közeledik."
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
      "Mindig az egyenesen haladó járműveknek van elsőbbségük.",
      "Csak a jobbra kanyarodó járművek mehetnek tovább elsőként.",
      "Egyenrangú útkereszteződésben a jobbról érkezőnek van elsőbbsége.",
      "Aki hamarabb érkezik a kereszteződésbe, az mehet tovább."
    ],
    correctAnswer: 2,
    explanation: "Egyenrangú útkereszteződésben (ahol nincs elsőbbséget szabályozó tábla vagy lámpa) mindig a jobbról érkező járműnek van elsőbbsége."
  },
  {
    id: "els_3",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Kinek van elsőbbsége a kijelölt gyalogos-átkelőhelyen (zebrán)?",
    answers: [
      "Annak a járműnek, amelyik már megkezdte a gyorsítást.",
      "A gyalogosnak, aki a zebrán kel át vagy oda lelépni készül.",
      "Kizárólag a kerékpárosoknak, ha a zebrán tekerve haladnak.",
      "Annak a közlekedőnek, aki egyértelműen jobbról érkezik."
    ],
    correctAnswer: 1,
    explanation: "A kijelölt gyalogos-átkelőhelyen a gyalogosnak abszolút elsőbbsége van az úttesten közeledő járművekkel szemben."
  },
  {
    id: "els_4",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Ha egy kapuból vagy földútról hajtasz ki a szilárd burkolatú útra, kinek kell elsőbbséget adnod?",
    answers: [
      "Az úton haladó járműveknek és a járdán közlekedő gyalogosoknak.",
      "A kihajtó járműnek, mert a forgalomba való becsatlakozást segíteni kell.",
      "Kizárólag a menetrend szerint közlekedő tömegközlekedési eszközöknek.",
      "Csak a tőle jobbra haladó járműveknek kell elsőbbséget adnia."
    ],
    correctAnswer: 0,
    explanation: "Ingatlanból (kapuból) vagy földútról szilárd burkolatú útra való ráhajtáskor mindig elsőbbséget kell adni az úton közlekedő valamennyi járműnek és gyalogosnak."
  },
  {
    id: "els_5",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Mi az elsőbbségi szabály a körforgalom olyan bejáratánál, ahol 'Elsőbbségadás kötelező' tábla is van?",
    answers: [
      "A körforgalomba éppen belépő, egyenesen haladó járműnek.",
      "Kizárólag a nagyobb méretű gépjárműveknek (teherautó, busz).",
      "Annak a járműnek, amelyik már bent halad a körforgalomban.",
      "A jobbkéz-szabály alapján a jobbról érkező járműveknek."
    ],
    correctAnswer: 2,
    explanation: "A bejáratnál elhelyezett 'Elsőbbségadás kötelező' tábla miatt a körforgalomban már haladó járműnek kell elsőbbséget adni."
  },
  {
    id: "els_6",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit kell biztosítani a szirénázó, megkülönböztető jelzést használó járműnek?",
    answers: [
      "Tilos lehúzódni, a saját sávunkban kell egyenletesen haladni.",
      "Lassítani kell, de elsőbbséget csak a kereszteződésben kell adni.",
      "Minden helyzetben elsőbbséget kell adni, szükség esetén megállással.",
      "Csak abban az esetben kell elengedni, ha a mi lámpánk is piros."
    ],
    correctAnswer: 2,
    explanation: "A megkülönböztető jelzést használó jármű továbbhaladását az egyéb közlekedőknek minden helyzetben biztosítaniuk kell, és szükség esetén le kell húzódniuk vagy meg kell állniuk."
  },
  {
    id: "els_7",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Ha balra kanyarodsz egy kereszteződésben, kinek kell elsőbbséget adnod a kanyarodási szabály szerint?",
    answers: [
      "A mögöttünk haladó, velünk azonos irányba kanyarodóknak.",
      "A szemből érkező, egyenesen haladó vagy jobbra kanyarodó járműveknek.",
      "A balról érkező, egyenesen áthaladó összes gépjárműnek.",
      "Senkinek, a balra kanyarodó járműnek mindig elsőbbsége van."
    ],
    correctAnswer: 1,
    explanation: "Balra kanyarodáskor elsőbbséget kell adni a szemből érkező, egyenesen továbbhaladó vagy jobbra kanyarodó járműveknek."
  },
  {
    id: "els_8",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a csúcsára állított háromszög alakú jelzőtábla?",
    answers: [
      "A kereszteződésben nekünk van elsőbbségünk a többiekkel szemben.",
      "Megállni kötelező, még akkor is, ha teljesen üres a kereszteződés.",
      "A védett úton érkező járművek részére elsőbbséget kell adni.",
      "Egyenrangú útkereszteződést jelez, ahol a jobbkéz-szabály érvényes."
    ],
    correctAnswer: 2,
    explanation: "A fordított háromszög az 'Elsőbbségadás kötelező' tábla. Itt elsőbbséget kell adnod a keresztező úton érkezőknek, de nem kötelező megállnod, ha biztonságosan belátod az utat és nem jön senki."
  },
  {
    id: "els_9",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Kinek van elsőbbsége a kanyarodó jármű és az úttesten átkelő gyalogos között, ha a jármű arról az útról kanyarodik le, amelyen a gyalogos átkel?",
    answers: [
      "A gyalogosnak, aki azon az úton kel át, amelyre a jármű rákanyarodik.",
      "A járműnek, mivel az úttest elsősorban a gépesített forgalmat szolgálja.",
      "Annak, aki hamarabb érkezik a kereszteződés geometriai középpontjába.",
      "Mindig a gépjárműnek, kivéve, ha a gyalogos egy kerékpárt is tol."
    ],
    correctAnswer: 0,
    explanation: "Bekanyarodáskor mindig elsőbbséget kell adni az úttesten átkelő gyalogosoknak azon az úton, amelyre ráfordulunk (akkor is, ha nincs ott zebra)."
  },
  {
    id: "els_10",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a sárga színű, négyzet alakú tábla vastag fekete kerettel és fehér szegéllyel?",
    answers: [
      "Veszélyes útszakaszt jelez, ahol a sebességet jelentősen csökkenteni kell.",
      "Az ezen az úton haladóknak elsőbbségük van a keresztező mellékutakkal szemben.",
      "Behajtani tilos jelzés a tehergépkocsik és a nehéz mezőgazdasági vontatók számára.",
      "Egyenrangú utak kereszteződését jelzi, ahol a jobbkéz-szabály a mérvadó."
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
      "Meg kell állnod és el kell engedned a kerékpárost a védtelensége miatt.",
      "Hangjelzést kell adnod, hogy a kerékpáros biztosan megálljon előtted.",
      "A jobbkéz-szabály alapján neked van elsőbbséged a balról érkezővel szemben.",
      "Egyszerre kell behajtanotok a kereszteződésbe, nagy óvatossággal."
    ],
    correctAnswer: 2,
    explanation: "Mivel te vagy jobbkéz felől a kerékpároshoz képest, egyenrangú kereszteződésben a jobbkéz-szabály alapján neked van elsőbbséged."
  },
  {
    id: "els_12",
    category: "elsobbseg",
    difficulty: "hard",
    question: "Kinek van elsőbbsége egyenrangú kereszteződésben: a villamosnak vagy az autónak, ha a villamos balról érkezik?",
    answers: [
      "A személyautónak van elsőbbsége, mivel a villamos a bal oldalról érkezik.",
      "A villamosnak van elsőbbsége a nem sínpályás járművekkel szemben, függetlenül az iránytól.",
      "Az áthaladás sorrendjét a járművek érkezési sebessége és mérete határozza meg.",
      "A villamosvezetőnek meg kell állnia, és le kell mondania az elsőbbségéről."
    ],
    correctAnswer: 1,
    explanation: "A villamos különleges jármű: egyenrangú kereszteződésben a villamosnak balról érkezve is elsőbbsége van a nem sínpályás járművekkel (autó, bicikli) szemben."
  },
  {
    id: "els_13",
    category: "elsobbseg",
    difficulty: "hard",
    question: "Ha a főútvonal kanyarodik, és te a kanyarodó főútvonalon maradsz, kinek kell elsőbbséget adnod?",
    answers: [
      "Neked kell elsőbbséget adnod a mellékútról egyenesen érkező járművek számára.",
      "Senkinek, a főútvonalon haladó jármű minden más iránnyal szemben elsőbbséget élvez.",
      "Csak a szemből érkező, egyenesen továbbhaladó forgalomnak kell elsőbbséget adni.",
      "Elsőbbséged van a mellékutakról érkezőkkel szemben, mivel a főútvonalon maradsz."
    ],
    correctAnswer: 3,
    explanation: "A kanyarodó főútvonalon maradó jármű az elsőbbségi szabály szerint haladhat a mellékútról érkezőkkel szemben (persze a gyalogosokra és az egyéb szabályokra ügyelni kell)."
  },
  {
    id: "els_14",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Kinek van elsőbbsége szűk úton (ahol nem fér el két autó), ha az egyik oldalon akadály (pl. parkoló autó) van?",
    answers: [
      "Annak a járműnek kell megállnia, amelyiknek az oldalán az akadály található.",
      "A nagyobb és nehezebb járműnek mindig elsőbbsége van a szűk útszakaszokon.",
      "A szemből érkezőnek kell megvárnia, amíg te kikerülöd a saját oldaladon lévő akadályt.",
      "Az haladhat át először, aki hamarabb elkezdte a szűkület megközelítését."
    ],
    correctAnswer: 0,
    explanation: "Ha a te oldaladon van az akadály, neked kell megállnod és megvárnod, amíg a szemből jövő elhalad, mert az ő oldala szabad."
  },
  {
    id: "els_15",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Kinek van elsőbbsége a kijelölt gyalogos-átkelőhelyen: a kerékpárt TOLÓ gyalogosnak vagy az érkező autónak?",
    answers: [
      "Az autónak, mert a kerékpárt toló személy nem minősül egyszerű gyalogosnak.",
      "A kerékpárt toló gyalogosnak van elsőbbsége a kijelölt gyalogos-átkelőhelyen.",
      "Az haladhat át hamarabb, aki gyorsabb tempóban éri el a zebrát az úton.",
      "A gyalogosnak vissza kell húzódnia a járdára, amíg a gépjármű elhalad."
    ],
    correctAnswer: 1,
    explanation: "A kerékpárt toló személy a KRESZ szerint gyalogosnak minősül, így a zebrán abszolút elsőbbsége van az autókkal szemben."
  },
  {
    id: "els_16",
    category: "elsobbseg",
    difficulty: "hard",
    question: "Ha kerékpársávban haladsz egyenesen, és melletted egy autó jobbra akar kanyarodni (keresztezve a sávodat), kinek van elsőbbsége?",
    answers: [
      "Az autónak van elsőbbsége, mivel a nagyobb járművek fordulókörét biztosítani kell.",
      "A kereszteződésben a jobbkéz-szabály dönt a kanyarodó gépjármű és a biciklis között.",
      "Mindkét jármű egyszerre mehet, ha a sebességüket kölcsönösen összehangolják.",
      "Az egyenesen haladó kerékpárosnak elsőbbsége van a jobbra kanyarodó autóval szemben."
    ],
    correctAnswer: 3,
    explanation: "Az egyenesen haladó járműnek (így a kerékpárosnak is a kerékpársávon) elsőbbsége van az irányt változtató (jobbra kanyarodó és így a sávot keresztező) autóval szemben."
  },
  {
    id: "els_17",
    category: "elsobbseg",
    difficulty: "easy",
    question: "A rendőr forgalomirányító jelzései felülírják-e a közúti jelzőtáblák utasításait?",
    answers: [
      "A jelzőtáblák mindig fontosabbak, a rendőr csak a forgalom sebességét felügyeli.",
      "A rendőri karjelzés a hierarchia csúcsán áll, felülírja a táblák utasításait.",
      "Kizárólag a fényjelző készülékek meghibásodása esetén vehetők figyelembe.",
      "A rendőri jelzés csak a tehergépjárművekre és a buszokra vonatkozik kötelezően."
    ],
    correctAnswer: 1,
    explanation: "A rendőri forgalomirányítás áll a KRESZ hierarchia csúcsán, azaz minden más jelzést és szabályt felülbírál."
  },
  {
    id: "els_18",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Elinduláskor (pl. járda széléről a forgalomba való becsatlakozáskor) kinek kell elsőbbséget adni?",
    answers: [
      "Csak a jobbról érkező gépjárműveknek kell elsőbbséget adni elinduláskor.",
      "Az elinduló járműnek van elsőbbsége, a többieknek lassítaniuk kell mögötte.",
      "Minden, már az úttesten haladó jármű részére elsőbbséget kell adni.",
      "Kizárólag a megkülönböztető jelzést használó járműveket kell elengedni."
    ],
    correctAnswer: 2,
    explanation: "Az út széléről való elindulás előtt meg kell győződni a biztonságról, irányjelezni kell, és elsőbbséget kell adni a már úton haladó járműveknek."
  },
  {
    id: "els_19",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a szűkületnél alkalmazott, szembejövő forgalommal szembeni elsőbbséget jelző tábla (kék négyzetben két nyíl)?",
    answers: [
      "Azt jelzi, hogy a szűkületben neked van elsőbbséged a szembejövő forgalommal szemben.",
      "Behajtani tilos jelzés a nagyobb tehergépkocsik és autóbuszok számára.",
      "Azt jelenti, hogy elsőbbséget kell adnod a szűkületben szemből érkező járműveknek.",
      "Azt jelöli, hogy az adott útszakaszon mindkét irányból tilos a továbbhaladás."
    ],
    correctAnswer: 0,
    explanation: "A kék alapú tábla fehér (és piros) nyíllal azt mutatja, hogy a szűkületben a te irányodból érkező járműnek elsőbbsége van a szembejövővel szemben."
  },
  {
    id: "els_20",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Melyik járműnek van elsőbbsége egyenrangú kereszteződésben, ha mindkét egymással szemben érkező jármű egyenesen szeretne továbbhaladni?",
    answers: [
      "A jobbkéz-szabály alapján a jobbra húzódó jármű mehet át elsőként.",
      "Az egyenesen haladó járművek nem keresztezik egymás útját, így egyszerre áthaladhatnak.",
      "A nagyobb sebességgel érkező járműnek kell elsőként áthaladnia a csomóponton.",
      "Annak van elsőbbsége, aki először adott hangjelzést a kereszteződésbe érve."
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
      "Igen, de kizárólag abban az esetben, ha a jármű vezetője bekapcsolja a vészvillogót.",
      "A zebrán, valamint a zebra előtti 5 méteres útszakaszon szigorúan tilos megállni.",
      "Igen, ha a megállás csak a csomagok kirakodásának rövid idejére (pár percre) szól.",
      "A zebrán nem, de közvetlenül előtte fél méterrel már szabályosan meg lehet állni."
    ],
    correctAnswer: 1,
    explanation: "A zebrán és közvetlenül előtte 5 méteres távolságon belül tilos megállni, mert a parkoló autó eltakarná az átkelni szándékozó gyalogosokat az érkező forgalom elől."
  },
  {
    id: "meg_2",
    category: "megallas",
    difficulty: "easy",
    question: "Mi a KRESZ szerinti 'megállás' egyik tipikus esete?",
    answers: [
      "Csak az olyan parkolás, amely a forgalmi lámpa piros jelzése miatt következik be.",
      "A jármű őrizetlenül hagyása több mint 15 percre a kijelölt várakozóhelyeken.",
      "A be- és kiszállás, vagy a folyamatos fel- és lerakodás idejére történő egy helyben állás.",
      "Bármilyen forgalmi okból történő megállás az autópálya leállósávjában."
    ],
    correctAnswer: 2,
    explanation: "Megállásnak minősül többek között a be- és kiszálláshoz, a folyamatos fel- és lerakodáshoz, illetve meghatározott (rövid) idejű várakozáshoz kapcsolódó állás."
  },
  {
    id: "meg_3",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e úgy megállni vagy várakozni kapubejáró előtt, hogy az akadályozza a be- vagy kihajtást?",
    answers: [
      "Igen, amennyiben a jármű vezetője a közelben tartózkodik, és azonnal el tud állni.",
      "Igen, ha a kapunál lévő ingatlan a jármű tulajdonosának saját birtokában van.",
      "Tilos úgy megállni, hogy azzal a kapubejárón a járművek ki- és behajtását akadályozzuk.",
      "Csak az esti órákban, 22:00 és 06:00 között szabad a kapubejárókat elfoglalni."
    ],
    correctAnswer: 2,
    explanation: "Szigorúan tilos úgy megállni vagy várakozni, hogy a kapubejáróhoz kapcsolódó be- vagy kihajtást akadályozzuk."
  },
  {
    id: "meg_4",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e megállni olyan útszakaszon, ahol 'Megállni tilos' (piros kör kék alapon keresztben áthúzva) tábla van?",
    answers: [
      "Csak abban az esetben, ha a vezető a járműben marad, és a motor továbbra is jár.",
      "A tábla hatálya alatt semmilyen járművel nem szabad önkéntesen megállni.",
      "Igen, ha a megállás célja egy gyors utasfelvétel, amely nem tart tovább egy percnél.",
      "A tilalom kizárólag a tehergépjárművekre és az autóbuszokra vonatkozik."
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
      "A megállás megengedett (pl. rakodásig), de a hosszabb távú várakozás tilos.",
      "Szigorúan tilos bármilyen okból, akár csak egyetlen másodpercre is megállni.",
      "Megengedett a várakozás, feltéve, hogy a sofőr fizet az adott zónában a parkolásért.",
      "Csak a mozgáskorlátozottakat szállító járművek számára tiltja a megállást."
    ],
    correctAnswer: 0,
    explanation: "A 'Várakozni tilos' tábla engedélyezi a rövid megállást (pl. utasok kiszállása, csomag kirakodása), de tiltja a jármű tartós ott hagyását."
  },
  {
    id: "meg_6",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e gépjárművel megállni a menetrend szerinti járatok számára fenntartott autóbuszöbölben?",
    answers: [
      "Igen, ha a menetrend szerint éppen nem várható a busz érkezése az adott megállóba.",
      "Csak az éjszakai órákban, amikor a helyi tömegközlekedés már egyáltalán nem üzemel.",
      "Gépjárművel az autóbuszöbölben megállni vagy várakozni minden esetben tilos.",
      "Igen, de legfeljebb 5 percig, és csak akkor, ha a vészvillogó be van kapcsolva."
    ],
    correctAnswer: 2,
    explanation: "Autóbuszöbölben az egyéb gépjárművekkel megállni tilos, mert akadályozzák a tömegközlekedést."
  },
  {
    id: "meg_7",
    category: "megallas",
    difficulty: "medium",
    question: "Mikor szabad gépjárművel a járdán megállni?",
    answers: [
      "Mindig szabályos, ha a jármű mellett legalább 1 méter hely marad a gyalogosoknak.",
      "Kizárólag akkor, ha jelzőtábla vagy útburkolati jel azt kifejezetten megengedi.",
      "Bármikor megengedett, ha a járdaszegély nem magasabb 10 centiméternél.",
      "Szigorúan tilos minden esetben, még kiegészítő tábla jelenlétekor sem szabad."
    ],
    correctAnswer: 1,
    explanation: "A járdán történő megállás csak akkor megengedett, ha azt jelzés lehetővé teszi, és az előírt feltételek – például a gyalogosok számára szükséges 1,5 méter hely – teljesülnek."
  },
  {
    id: "meg_8",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e kerékpárral a járdán megállni?",
    answers: [
      "Szabályos, feltéve, hogy a jármű elhelyezése a gyalogosok közlekedését nem akadályozza.",
      "Szigorúan tilos, a kerékpárokat kizárólag a kiépített kerékpártárolókban szabad hagyni.",
      "Csak akkor engedélyezett, ha a kerékpárt szorosan az úttest felőli peremhez támasztják.",
      "Bármikor szabad, mivel a kerékpár nem minősül gépjárműnek, így nem vonatkozik rá tiltás."
    ],
    correctAnswer: 0,
    explanation: "A kerékpár (és a kétkerekű segédmotor) járdán való elhelyezése megengedett, ha a gyalogosok közlekedését nem akadályozza (tehát nem feltétel a tábla, mint az autóknál)."
  },
  {
    id: "meg_9",
    category: "megallas",
    difficulty: "medium",
    question: "Hány méterre szabad megállni egy útkereszteződéstől a KRESZ szerint?",
    answers: [
      "Az útkereszteződésben és annak sarkától számított 5 méteren belül tilos megállni.",
      "Bármilyen közel meg lehet állni, ha a parkoló jármű nem lóg be közvetlenül a sávba.",
      "Az útkereszteződés sarkától számított legalább 15 méteres távolságot kell tartani.",
      "Közvetlenül a kereszteződés vonalánál is meg lehet állni, ha nincs zebrázás felfestve."
    ],
    correctAnswer: 0,
    explanation: "Kereszteződésekben és azok sarkától számított 5 méteren belül tilos megállni a kereszteződés megfelelő beláthatóságának biztosítása érdekében."
  },
  {
    id: "meg_10",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e megállni úgy, hogy a jármű eltakarja a közúti jelzőtáblát vagy a jelzőlámpát a többi közlekedő elől?",
    answers: [
      "Megengedett, ha a jármű nem magasabb egy átlagos méretű személygépkocsinál.",
      "Csak akkor tilos, ha a tábla sebességkorlátozásra vagy veszélyre hívja fel a figyelmet.",
      "Igen, amennyiben a megállás mindössze az utasok kiszállásának idejéig tart.",
      "Tilos olyan helyen megállni, ahol a jármű a közúti jelzések észlelhetőségét akadályozza."
    ],
    correctAnswer: 3,
    explanation: "Szigorúan tilos olyan helyen megállni, ahol a jármű a közúti jelzések (táblák, lámpák) észlelhetőségét akadályozza vagy eltakarja."
  },
  {
    id: "meg_11",
    category: "megallas",
    difficulty: "hard",
    question: "Mekkora szabad helynek kell maradnia az úttest másik oldalán lévő záróvonalig, ha az úttest jobb szélén megállsz?",
    answers: [
      "A megálló jármű és a záróvonal között legalább 3 méter széles helyet kell hagyni.",
      "Elegendő 1,5 méter helyet hagyni, hogy egy átlagos személyautó még éppen elférjen.",
      "Nincs konkrét előírás a távolságra, a lényeg, hogy a forgalom lépésben haladni tudjon.",
      "A megálló jármű kereke akár a záróvonalon is állhat, ha az út egyébként túl keskeny."
    ],
    correctAnswer: 0,
    explanation: "A jármű elhelyezésekor legalább 3 méter széles helyet kell hagyni a saját sávban (a záróvonalig) az elhaladó forgalom számára."
  },
  {
    id: "meg_12",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e önkéntesen megállni a vasúti átjáróban, vagy annak közvetlen közelében?",
    answers: [
      "A fénysorompótól számított 10 méteren túl már teljesen szabályos a várakozás.",
      "Csak akkor tilos, ha a fénysorompó pirosan villog és közeledik a vasúti szerelvény.",
      "Vasúti átjáróban és attól számított 30 méteres távolságon belül önkéntesen megállni tilos.",
      "Engedélyezett a megállás, feltéve, hogy a jármű semmilyen részével nem lóg a sínekre."
    ],
    correctAnswer: 2,
    explanation: "Önkéntesen megállni vasúti átjáróban és az attól számított 30 méteren belül balesetveszélyes, és a KRESZ szigorúan tiltja."
  },
  {
    id: "meg_13",
    category: "megallas",
    difficulty: "easy",
    question: "Hogyan kell szabályosan elhelyezni a járművet az úttesten, ha parkolni szeretnénk (és nincs egyéb tábla)?",
    answers: [
      "A járdára félig felállva, függetlenül attól, hogy van-e ezt engedélyező tábla az utcában.",
      "A menetirány szerinti jobb oldalon, az útszegéllyel párhuzamosan, szorosan a szélre húzódva.",
      "Bármilyen szögben megengedett, ami a legkevesebb helyet veszi el a széles úttestből.",
      "Az úttestre merőlegesen orral beállva, hogy a ki- és beszállás a lehető legkényelmesebb legyen."
    ],
    correctAnswer: 1,
    explanation: "Főszabályként a menetirány szerinti jobb oldalon, az útszegéllyel (járdával) párhuzamosan, egy sorban, szorosan a jobb szélre húzódva kell megállni."
  },
  {
    id: "meg_14",
    category: "megallas",
    difficulty: "easy",
    question: "Ki állhat meg a kerekesszékes piktogrammal megjelölt, mozgáskorlátozottak számára fenntartott parkolóhelyen?",
    answers: [
      "A mozgáskorlátozottak számára kijelölt parkolóhelyet csak az arra jogosult használhatja.",
      "Bárki megállhat ott egy rövid időre, amíg az arra jogosult jármű nem érkezik meg.",
      "Ünnepnapokon és hétvégéken bárki számára ingyenesen használhatóvá válik a hely.",
      "Kizárólag éjszaka tilos ott parkolni, napközben a felfestés csak ajánlást jelent."
    ],
    correctAnswer: 0,
    explanation: "A mozgáskorlátozott személyek számára kijelölt parkolóhelyet csak a megfelelő érvényes igazolvánnyal (kártyával) rendelkező jogosult jármű használhatja."
  },
  {
    id: "meg_15",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e önkéntesen megállni hídon, aluljáróban vagy alagútban?",
    answers: [
      "Szabályos, ha a híd vagy alagút szélessége legalább két forgalmi sávot tesz ki irányonként.",
      "Igen, de a várakozó jármű mögött legalább 50 méterre el kell helyezni az elakadásjelzőt.",
      "Hídon, aluljáróban, alagútban, valamint ezek ki- és bejáratánál az önkéntes megállás tilos.",
      "Csak a motorkerékpárok és a kerékpárok számára engedélyezett az út szélén való megállás."
    ],
    correctAnswer: 2,
    explanation: "Hídon, aluljáróban, alagútban és ezek be- és kijáratánál az önkéntes megállás a szűk keresztmetszet és a fokozott balesetveszély miatt tilos."
  },
  {
    id: "meg_16",
    category: "megallas",
    difficulty: "easy",
    question: "Mit kell ellenőrizned az út szélén parkoló járműved ajtajának kinyitása előtt?",
    answers: [
      "Csak azt, hogy a járdán nem tartózkodik-e gyalogos, akit a nyíló ajtó esetleg megüthet.",
      "Az ajtó kinyitása előtt meg kell győződni arról, hogy az nem veszélyezteti a hátulról érkező forgalmat.",
      "Nincs különösebb teendő, az ajtót nyitó autósnak elsőbbsége van a hátulról érkezőkkel szemben.",
      "Elegendő a vészvillogót bekapcsolni, így a közeledők már messziről látni fogják a manővert."
    ],
    correctAnswer: 1,
    explanation: "Az ajtó kinyitása előtt kötelezően meg kell győződni arról (tükörből és hátranézéssel), hogy ezzel a közlekedés biztonságát nem veszélyeztetjük (különösen a hátulról érkező kerékpárosokat)."
  },
  {
    id: "meg_17",
    category: "megallas",
    difficulty: "hard",
    question: "Szabad-e megállni kijelölt kerékpársávon személygépkocsival?",
    answers: [
      "Szabályos, de a jármű vezetőjének a gépkocsi mellett kell maradnia a rakodás alatt.",
      "Megengedett abban az esetben, ha a kerékpáros forgalom az adott időszakban minimális.",
      "Kizárólag a taxik és a futárszolgálatok számára engedélyezett maximum 5 perces időtartamra.",
      "A kerékpársávon gépjárművel megállni tilos, mert a bicikliseket az autók közé kényszerítené."
    ],
    correctAnswer: 3,
    explanation: "A kijelölt kerékpársávon a gépjárműveknek még egy másodpercre is tilos megállniuk."
  },
  {
    id: "meg_18",
    category: "megallas",
    difficulty: "medium",
    question: "Mit jelent a sárga színű folyamatos vonal az úttest jobb szélén (az útpadka mellett)?",
    answers: [
      "A járdán való parkolás lehetőségét és a megengedett tengelyterhelést mutatja.",
      "Megállási tilalmat jelöl az adott útszakaszon az úttest jobb szélén.",
      "Azt jelzi, hogy a parkolás az adott zónában díjköteles és időhöz kötött.",
      "Kijelölt kerékpáros felületet jelez, ahol csak egy nyomon haladó járművek mehetnek."
    ],
    correctAnswer: 1,
    explanation: "Az úttest szélén lévő sárga folytonos vonal útburkolati jelként a Megállási tilalmat jelzi az adott oldalon."
  },
  {
    id: "meg_19",
    category: "megallas",
    difficulty: "hard",
    question: "Mit kell kötelezően megtenni a várakozó (parkoló) járművel a KRESZ előírásai szerint?",
    answers: [
      "Elegendő csak a kéziféket behúzni, a motor járatható a fűtés fenntartása érdekében.",
      "A kormányt mindig teljesen balra kell tekerni, függetlenül az út lejtésétől vagy emelkedésétől.",
      "A járművet elgurulás ellen biztosítani kell (fék, sebességváltó), és a motort le kell állítani.",
      "Csak a lejtős utakon kötelező a jármű rögzítése, sík terepen a sebességváltó üresben maradhat."
    ],
    correctAnswer: 2,
    explanation: "A várakozó járművet elgurulás ellen fizikai rögzítéssel biztosítani kell, és a motorját (kivéve a megengedett speciális eseteket) le kell állítani."
  },
  {
    id: "meg_20",
    category: "megallas",
    difficulty: "easy",
    question: "Mi a legfontosabb teendő, ha a jármű műszaki hiba miatt hirtelen az úttesten marad és nem tud továbbhaladni?",
    answers: [
      "A járművet haladéktalanul ki kell világítani, és a szabályoknak megfelelően elakadásjelzővel biztosítani.",
      "A járművet azonnal el kell hagyni, és a helyszíntől legalább 100 méterre eltávolodva kell várakozni.",
      "Szorosan a jármű mögött kell állni, és karjelzésekkel kell terelni a közeledő gyorsforgalmat.",
      "Meg kell várni a rendőrség kiérkezését, addig semmilyen jelzést nem szabad a jármű körül elhelyezni."
    ],
    correctAnswer: 0,
    explanation: "Műszaki hiba esetén a veszélyeztetés csökkentése érdekében a jármű kivilágítása (vészvillogó) és a helyzettől függően az elakadásjelző háromszög kihelyezése kötelező."
  }
];
