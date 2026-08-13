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
      "Meg kell állnod a stopvonal előtt.",
      "Ha nem jön senki, átmehetsz – az adott körülmények között",
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
      "Mindenkinek meg kell állnia",
      "Sietni kell, mert mindjárt piros lesz",
      "Fokozott óvatossággal kell továbbhaladni.",
      "Személyautóval szabad, busszal tilos haladni"
    ],
    correctAnswer: 2,
    explanation: "A villogó sárga fény veszélyre hívja fel a figyelmet, és jelzi, hogy a lámpa nem szabályozza az áthaladást (ilyenkor az elsőbbséget szabályozó táblák érvényesek)."
  },
  {
    id: "jel_3",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit kell tenned, ha a rendőr neked hátat fordít, vagy szemből áll veled kinyújtott karral?",
    answers: [
      "Ingetni kell neki",
      "Elkanyarodhatsz jobbra",
      "Gyorsan át kell menned előtte",
      "Meg kell állnod."
    ],
    correctAnswer: 3,
    explanation: "Ha a forgalmat irányító rendőr szemből vagy hátulról látható, az megállási kötelezettséget ('tilos') jelent számodra."
  },
  {
    id: "jel_4",
    category: "jelzesek",
    difficulty: "medium",
    question: "Melyik irányból érkezőnek szabad áthaladnia, ha a rendőr oldala mutat feléd (hosszirányban áll az úton)?",
    answers: [
      "Szabad az út.",
      "Senkinek sem",
      "Csak a buszoknak",
      "Annak, akivel szemben áll"
    ],
    correctAnswer: 0,
    explanation: "Ha a rendőr válla mutat feléd (oldalról látod őt), az szabad utat jelent ('zöld fény'), így óvatosan továbbhaladhatsz."
  },
  {
    id: "jel_5",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit jelent a sárga folyamatos fény a jelzőlámpán a piros után (piros és sárga együtt világít)?",
    answers: [
      "A lámpa kikapcsol",
      "Készülj a zöld jelzésre.",
      "Vissza kell tolatni",
      "Azonnal indulhatsz gázzal"
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
      "Piros háromszögek",
      "Sárga cikkcakkos vonal",
      "A zebra.",
      "Egyetlen fehér folytonos vonal"
    ],
    correctAnswer: 2,
    explanation: "Az úttesten lévő párhuzamos fehér sávok a kijelölt gyalogos-átkelőhelyet, közismert nevén a zebrát jelölik."
  },
  {
    id: "jel_7",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelent az úttest közepén lévő zárt, dupla folytonos fehér vonal?",
    answers: [
      "Ott kell parkolni",
      "Csak biciklivel szabad átlépni",
      "Bármikor átléphető előzésnél",
      "Tilos átlépni vagy ráhajtani."
    ],
    correctAnswer: 3,
    explanation: "A folytonos vonalat (legyen az szimpla vagy dupla) semmilyen járművel nem szabad átlépni, sem ráhajtani."
  },
  {
    id: "jel_8",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen színű lámpája van a vasúti átjárónak, ha szabad az áthaladás?",
    answers: [
      "Fehér villogó",
      "Zöld villogó",
      "Kék folyamatos",
      "Sárga villogó"
    ],
    correctAnswer: 0,
    explanation: "A vasúti átjáróban lévő fénysorompó villogó fehér jelzése jelzi, hogy a berendezés működik, és szabad az áthaladás."
  },
  {
    id: "jel_9",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen színű fény világít a fénysorompón, ha jön a vonat?",
    answers: [
      "Folyamatos kék",
      "Két felváltva villogó piros fény.",
      "Egy piros villogó",
      "Zöld és sárga együtt – a megadott helyzetben"
    ],
    correctAnswer: 1,
    explanation: "Ha jön a vonat, a fénysorompón két piros fény villog felváltva. Ilyenkor szigorúan tilos az átjáróba hajtani vagy lépni!"
  },
  {
    id: "jel_10",
    category: "jelzesek",
    difficulty: "easy",
    question: "Mit jelent a szaggatott fehér vonal az úton?",
    answers: [
      "Ott kell megállni",
      "Tilos rajta átmenni",
      "Átléphető terelővonal.",
      "A gyalogosok átkelőhelyét"
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
      "Ideiglenes forgalmi jel.",
      "Mindig iskolát",
      "Mindig kerékpárutat",
      "Mindig parkolóhelyet – az adott körülmények között"
    ],
    correctAnswer: 0,
    explanation: "Ideiglenes forgalomszabályozásnál sárga útburkolati jeleket is alkalmazhatnak; ezek az ideiglenes rend részét képezik."
  },
  {
    id: "jel_12",
    category: "jelzesek",
    difficulty: "hard",
    question: "Mit jelent a nyíl alakú zöld fényjelzés?",
    answers: [
      "Meg kell állni",
      "A nyíl irányában.",
      "Csak a gyalogosok haladhatnak",
      "Minden irányban szabad haladni"
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
      "Parkolóhelyet",
      "Buszmegállót",
      "Kerékpáros felület.",
      "Megállási tilalmat – az adott körülmények között"
    ],
    correctAnswer: 2,
    explanation: "A kerékpáros piktogram a kerékpáros közlekedésre kijelölt vagy ajánlott útfelület jelölésére szolgál, a konkrét burkolati jeltől függően."
  },
  {
    id: "jel_14",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelent a forgalomirányító rendőr függőlegesen feltartott karja?",
    answers: [
      "Nincs jelentősége",
      "Mindenkinek gyorsítania kell",
      "Csak a kerékpárosoknak kell megállniuk",
      "Tilos továbbhaladni."
    ],
    correctAnswer: 3,
    explanation: "A függőlegesen feltartott kar a forgalom megállítására, illetve a forgalmi rend változására figyelmeztető jelzés."
  },
  {
    id: "jel_15",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelent a zebra előtt lévő sárga villogó fényű lámpa egy oszlopon?",
    answers: [
      "Fokozott óvatosságra figyelmeztet.",
      "Azt, hogy piros a lámpa",
      "Hogy ingyen lehet parkolni",
      "Hogy tilos a gyalogos átkelés – az adott körülmények között"
    ],
    correctAnswer: 0,
    explanation: "A sárga villogó lámpa a zebra felett fokozott óvatosságra inti az autósokat, jelezve, hogy gyalogosok kelhetnek át az úton."
  },
  {
    id: "jel_16",
    category: "jelzesek",
    difficulty: "easy",
    question: "Melyik jelzés a legerősebb a kereszteződésben a KRESZ hierarchia szerint?",
    answers: [
      "A táblák",
      "A rendőr kézi irányítása",
      "A jelzőlámpa",
      "A jobbkéz-szabály – az adott körülmények között"
    ],
    correctAnswer: 1,
    explanation: "A rendőr utasítása a legerősebb! Ha a rendőr szabad utat mutat, de a lámpa piros, akkor is át kell menni a rendőr jelzése szerint."
  },
  {
    id: "jel_17",
    category: "jelzesek",
    difficulty: "hard",
    question: "Ha a rendőr karjait vízszintesen kinyújtja, melyik irányból jövőknek van piros jelzés?",
    answers: [
      "Senkinek",
      "Mindenkinek",
      "Akik a rendőr melle és háta felől érkeznek",
      "Akiknek a kinyújtott karok irányából jönnek"
    ],
    correctAnswer: 2,
    explanation: "A rendőr kinyújtott karja egy sorompót mintáz. Aki a rendőr arcával vagy hátával találkozik, annak meg kell állnia (piros), aki az oldalánál van, az mehet."
  },
  {
    id: "jel_18",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit jelentenek a zebra mellett felfestett fehér kis négyzetek sorban az úton?",
    answers: [
      "Díszítést",
      "Hogy ott tilos megállni",
      "Gyalogosok várakozóhelyét – az adott körülmények között",
      "Kerékpáros átvezetést jelez."
    ],
    correctAnswer: 3,
    explanation: "A kis fehér négyzetekből álló dupla szaggatott vonal a kerékpárút átvezetését jelöli az úttesten keresztül."
  },
  {
    id: "jel_19",
    category: "jelzesek",
    difficulty: "medium",
    question: "Mit kell tenned, ha zöld a jelzőlámpa, de a kereszteződésben torlódás van és nem tudnál áthaladni?",
    answers: [
      "Nem hajtasz be, ha nem tudsz továbbhaladni.",
      "Dudálsz folyamatosan",
      "Biciklivel felmész a járdára",
      "Behajtasz és megállsz a kereszteződés közepén"
    ],
    correctAnswer: 0,
    explanation: "Zöld lámpa esetén sem szabad behajtani a kereszteződésbe, ha ott forgalmi torlódás van, mert elzárnád a keresztirányú forgalmat, amikor nekik lesz zöld."
  },
  {
    id: "jel_20",
    category: "jelzesek",
    difficulty: "easy",
    question: "Milyen megkülönböztető fényjelzés jellemző a rendőrségi járművekre?",
    answers: [
      "Zöld villogó fény",
      "Sárga villogó fény",
      "Fehér folyamatos fény",
      "Kék villogó fény."
    ],
    correctAnswer: 3,
    explanation: "A rendőrségi járművek megkülönböztető fényjelzése kék villogó fény."
  },
  // --- ELSŐBBSÉG (20 questions) ---
  {
    id: "els_1",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit kell tenned az 'Állj! Elsőbbségadás kötelező' (STOP) táblánál?",
    answers: [
      "Dudálsz egyet és áthajtasz",
      "Biciklivel nem kell megállnod",
      "Lassítasz, és ha üres az út, megállás nélkül továbbmész",
      "Meg kell állni, majd elsőbbséget kell adni."
    ],
    correctAnswer: 3,
    explanation: "A STOP táblánál a jármű kerekének teljesen meg kell állnia (0 km/h-ra), és csak az elsőbbség megadása után szabad továbbmenni."
  },
  {
    id: "els_2",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a 'jobbkéz-szabály' egy egyenrangú útkereszteződésben?",
    answers: [
      "Elsőbbséget kell adni a jobbról érkező járműnek",
      "Azt, hogy csak jobbra szabad kanyarodni",
      "Aki jobb kézzel integet, az mehet először",
      "Azt, hogy mindig a jobb oldali sávban kell haladni"
    ],
    correctAnswer: 0,
    explanation: "Egyenrangú útkereszteződésben (ahol nincs tábla vagy lámpa) mindig a jobbról érkező járműnek van elsőbbsége."
  },
  {
    id: "els_3",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Kinek van elsőbbsége a kijelölt gyalogos-átkelőhelyen (zebrán)?",
    answers: [
      "Annak, aki hangosabb",
      "A gyalogosnak.",
      "Az autósnak, mert ő a gyorsabb",
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
      "Csak a buszoknak",
      "Csak a gyalogosoknak",
      "Az úton haladóknak.",
      "Senkinek, neked van elsőbbséged"
    ],
    correctAnswer: 2,
    explanation: "Ingatlanból vagy földútról szilárd burkolatú útra való ráhajtáskor mindig elsőbbséget kell adni az úton közlekedő járműveknek."
  },
  {
    id: "els_5",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Mi az elsőbbségi szabály a körforgalom olyan bejáratánál, ahol Elsőbbségadás kötelező tábla van?",
    answers: [
      "A nagyobb járműé",
      "A belépő járműé",
      "Aki gyorsabban ér oda – az adott forgalmi helyzetben",
      "A körforgalomban haladó járműé."
    ],
    correctAnswer: 3,
    explanation: "A bejáratnál elhelyezett Elsőbbségadás kötelező tábla miatt a körforgalomban már haladó járműnek kell elsőbbséget adni."
  },
  {
    id: "els_6",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit kell biztosítani az olyan megkülönböztető jelzést használó járműnek, amely elsőbbséget élvez?",
    answers: [
      "Elsőbbséget kell biztosítani neki.",
      "Semmit, ha zöld a lámpa",
      "Csak a buszokat kell elengedni – a megadott helyzetben",
      "Csak a dudálást kell figyelni"
    ],
    correctAnswer: 0,
    explanation: "A megkülönböztető jelzést használó jármű továbbhaladását az egyéb közlekedőknek lehetőség szerint biztosítaniuk kell, és szükség esetén meg kell állniuk."
  },
  {
    id: "els_7",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Ha balra kanyarodsz egy kereszteződésben, kinek kell elsőbbséget adnod a kanyarodási szabály szerint?",
    answers: [
      "Senkinek",
      "A szemből egyenesen vagy jobbra haladónak.",
      "Csak a gyalogosoknak – az adott körülmények között",
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
      "Sátorozóhelyet jelöl",
      "Azt, hogy az út véget ér",
      "Elsőbbséget kell adni.",
      "Hogy neked van elsőbbséged"
    ],
    correctAnswer: 2,
    explanation: "A háromszög alakú táblánál elsőbbséget kell adnod, de nem kötelező megállnod, ha megállás nélkül is biztonságosan látható, hogy nem jön senki."
  },
  {
    id: "els_9",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Kinek van elsőbbsége a kanyarodó jármű és az úttesten átkelő gyalogos között, ha a jármű arról az útról kanyarodik le, amelyen a gyalogos átkel?",
    answers: [
      "A gyorsabbnak",
      "Nincs szabályozva",
      "A kanyarodó járműnek",
      "A gyalogosnak."
    ],
    correctAnswer: 3,
    explanation: "Bekanyarodáskor mindig elsőbbséget kell adni az úttesten átkelő gyalogosoknak azon az úton, amelyre ráfordulunk."
  },
  {
    id: "els_10",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a sárga színű, négyzet alakú tábla, aminek vastag fekete kerete és fehér szegélye van (főútvonal tábla)?",
    answers: [
      "A főútvonalon haladónak.",
      "Iskolaövezet",
      "Tilos a behajtás",
      "Balesetveszélyes hely – az adott körülmények között"
    ],
    correctAnswer: 0,
    explanation: "A Főútvonal tábla azt jelzi, hogy az ezen az úton haladóknak elsőbbségük van a keresztező mellékutakról érkező járművekkel szemben."
  },
  {
    id: "els_11",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Mit kell tenned egyenrangú kereszteződésben, ha balról érkezik egy kerékpáros?",
    answers: [
      "Megállsz és elengeded",
      "Dudálsz, hogy álljon meg",
      "Neked van elsőbbséged.",
      "Biciklivel mindig el kell engedni mindenkit"
    ],
    correctAnswer: 2,
    explanation: "Mivel te vagy jobbkéz felől a kerékpároshoz képest, egyenrangú kereszteződésben neked van elsőbbséged vele szemben."
  },
  {
    id: "els_12",
    category: "elsobbseg",
    difficulty: "hard",
    question: "Kinek van elsőbbsége: a villamosnak vagy az autónak egy egyenrangú kereszteződésben, ha a villamos balról érkezik?",
    answers: [
      "Aki először dudál",
      "Annak, amelyik gyorsabb",
      "Az autónak, mert a villamos balról jön",
      "A villamosnak."
    ],
    correctAnswer: 3,
    explanation: "A villamos különleges jármű: egyenrangú kereszteződésben a villamosnak balról érkezve is elsőbbsége van a nem sínpályás járművekkel (autó, bicikli) szemben."
  },
  {
    id: "els_13",
    category: "elsobbseg",
    difficulty: "hard",
    question: "Ha a főútvonal kanyarodik, és te a főútvonalon maradsz, kinek kell elsőbbséget adnod?",
    answers: [
      "A mellékútról érkező járműveknek.",
      "A gyalogosoknak soha",
      "A mellékútról érkező járműveknek",
      "Senkinek, mert a főút mindig mindenkivel szemben elsőbbséget ad"
    ],
    correctAnswer: 0,
    explanation: "A kanyarodó főútvonalon maradó jármű a mellékútról érkezőkkel szemben az elsőbbségi szabály szerint haladhat, de a gyalogosokra és a kanyarodás egyéb szabályaira is figyelemmel kell lenni."
  },
  {
    id: "els_14",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Kinek van elsőbbsége szűk úton (ahol nem fér el két autó egyszerre), ha az egyik oldalon akadály (pl. parkoló autó) van?",
    answers: [
      "Aki bátrabb",
      "Annak, akinek az oldala szabad.",
      "A nagyobb autónak",
      "Annak, akinek az oldalán az akadály van"
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
      "Aki gyorsabb – az adott körülmények között",
      "A kerékpárt toló gyalogosnak.",
      "A rendőrnek"
    ],
    correctAnswer: 2,
    explanation: "A kerékpárt toló személy gyalogosnak minősül, így a zebrán abszolút elsőbbsége van az autókkal szemben."
  },
  {
    id: "els_16",
    category: "elsobbseg",
    difficulty: "hard",
    question: "Ha kerékpársávban haladsz egyenesen, és melletted egy autó jobbra akar kanyarodni (keresztezve a sávodat), kinek van elsőbbsége?",
    answers: [
      "Az autónak, mert nagyobb",
      "A jobbkéz-szabály dönt",
      "Mindkettő egyszerre mehet",
      "A kerékpárosnak."
    ],
    correctAnswer: 3,
    explanation: "Az egyenesen haladó kerékpárosnak elsőbbsége van a vele párhuzamosan haladó és jobbra kanyarodó autóval szemben."
  },
  {
    id: "els_17",
    category: "elsobbseg",
    difficulty: "easy",
    question: "A rendőr jelzései felülírják-e a közúti jelzőtáblák utasításait?",
    answers: [
      "Igen, a rendőri jelzés az irányadó.",
      "Csak hétvégén",
      "Csak autópályán",
      "Nem, a táblák fontosabbak – az adott körülmények között"
    ],
    correctAnswer: 0,
    explanation: "A rendőri forgalomirányítás áll a KRESZ hierarchia csúcsán, azaz minden más jelzést felülbírál."
  },
  {
    id: "els_18",
    category: "elsobbseg",
    difficulty: "medium",
    question: "Elinduláskor (pl. járda széléről való elindulás) kinek kell elsőbbséget adni?",
    answers: [
      "Csak a buszoknak",
      "A már úton haladó járműveknek",
      "Csak a gyalogosoknak",
      "Senkinek, az elindulónak van elsőbbsége"
    ],
    correctAnswer: 1,
    explanation: "Az út széléről való elindulás előtt meg kell győződni a biztonságról, irányjelezni kell, és elsőbbséget kell adni a már úton haladó járműveknek."
  },
  {
    id: "els_19",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Mit jelent a szűkületnél alkalmazott, szembejövő forgalommal szembeni elsőbbséget jelző tábla?",
    answers: [
      "Tilos behajtani",
      "Csak teherautó haladhat át",
      "Neked van elsőbbséged a szűkületben.",
      "Elsőbbséget kell adnod a szembejövőnek"
    ],
    correctAnswer: 2,
    explanation: "A jelzés azt mutatja, hogy a szűkületben az adott irányból érkező járműnek elsőbbsége van a szembejövővel szemben."
  },
  {
    id: "els_20",
    category: "elsobbseg",
    difficulty: "easy",
    question: "Melyik járműnek van elsőbbsége egyenrangú kereszteződésben a kanyarodási szabály szerint, ha mindkettő egyenesen haladna egymással szemben?",
    answers: [
      "A jobbkéz-szabály dönt",
      "Egyszerre haladhatnak át.",
      "A kék autó haladhat át először",
      "A piros autó haladhat át először"
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
      "Biciklivel szabad a zebrán parkolni",
      "A zebra előtt 5 méteren belül sem.",
      "Igen, ha bekapcsoljuk a vészvillogót"
    ],
    correctAnswer: 2,
    explanation: "A zebrán és közvetlenül előtte 5 méteres távolságon belül tilos megállni, mert a parkoló autó eltakarná az átkelni szándékozó gyalogosokat."
  },
  {
    id: "meg_2",
    category: "megallas",
    difficulty: "easy",
    question: "Mi a KRESZ szerinti megállás egyik tipikus esete?",
    answers: [
      "Csak a piros lámpánál való állás",
      "Kizárólag öt percnél hosszabb állás",
      "A jármű tetszőleges hosszú parkolása – az adott forgalmi helyzetben",
      "Be- vagy kiszállás, illetve rakodás miatti rövid megállás."
    ],
    correctAnswer: 3,
    explanation: "Megállásnak minősül többek között a be- és kiszálláshoz, a folyamatos fel- és lerakodáshoz, illetve meghatározott rövid idejű várakozáshoz kapcsolódó állás; a fogalmat a KRESZ pontosan meghatározza."
  },
  {
    id: "meg_3",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e úgy megállni vagy várakozni kapubejáró előtt, hogy az akadályozza a be- vagy kihajtást?",
    answers: [
      "Nem, ha akadályozza a kapubejárót.",
      "Csak éjszaka",
      "Igen, ha rövid ideig tart",
      "Igen, ha vészvillogót használunk – a megadott helyzetben"
    ],
    correctAnswer: 0,
    explanation: "Tilos úgy megállni vagy várakozni, hogy a kapubejáróhoz kapcsolódó be- vagy kihajtást akadályozzuk."
  },
  {
    id: "meg_4",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e megállni olyan útszakaszon, ahol 'Megállni tilos' tábla van elhelyezve?",
    answers: [
      "Csak vasárnap szabad",
      "Nem.",
      "Csak kerékpárral szabad",
      "Igen, ha bent ül a sofőr"
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
      "Csak kék autóknak tilos",
      "Szabad parkolni 2 órán át",
      "Megállni szabad, várakozni tilos.",
      "Egyáltalán nem szabad megállni – az adott forgalmi helyzetben"
    ],
    correctAnswer: 2,
    explanation: "A várakozni tilos tábla engedélyezi a rövid megállást (pl. csomag kirakodása), de tiltja a tartós parkolást."
  },
  {
    id: "meg_6",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e gépjárművel megállni autóbuszöbölben?",
    answers: [
      "Csak éjszaka",
      "Igen, ha nincs autóbusz",
      "Igen, ha csak egy percig tart",
      "Nem."
    ],
    correctAnswer: 3,
    explanation: "Autóbuszöbölben gépjárművel megállni tilos."
  },
  {
    id: "meg_7",
    category: "megallas",
    difficulty: "medium",
    question: "Mikor szabad gépjárművel a járdán megállni?",
    answers: [
      "Csak engedéllyel, a KRESZ feltételeivel.",
      "Csak hétvégén",
      "Mindig, ha marad hely",
      "Soha, még jelzés esetén sem – az adott körülmények között"
    ],
    correctAnswer: 0,
    explanation: "A járdán történő megállás csak akkor megengedett, ha azt jelzés lehetővé teszi, és az előírt feltételek – például a gyalogosok számára szükséges hely – teljesülnek."
  },
  {
    id: "meg_8",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e kerékpárral a járdán megállni?",
    answers: [
      "Csak éjszaka",
      "Igen, ha nem akadályozza a gyalogosokat.",
      "Csak piros lámpánál",
      "Nem, semmilyen körülmények között – az adott forgalmi helyzetben"
    ],
    correctAnswer: 1,
    explanation: "A kerékpár járdán való elhelyezése csak akkor szabályos, ha a gyalogosok közlekedését nem akadályozza és az elhelyezésre vonatkozó egyéb szabályok is teljesülnek."
  },
  {
    id: "meg_9",
    category: "megallas",
    difficulty: "medium",
    question: "Hány méterre szabad megállni egy útkereszteződéstől a KRESZ szerint?",
    answers: [
      "Közvetlenül mellette",
      "Bármilyen távolságra",
      "Legalább 5 méterre.",
      "Legalább 10 méter távolságra"
    ],
    correctAnswer: 2,
    explanation: "Kereszteződésekben és azok sarkától számított 5 méteren belül tilos megállni a beláthatóság biztosítása érdekében."
  },
  {
    id: "meg_10",
    category: "megallas",
    difficulty: "easy",
    question: "Szabad-e megállni úgy, hogy a jármű eltakarja a közúti jelzőtáblát vagy jelzőlámpát?",
    answers: [
      "Csak éjszaka",
      "Csak rövid időre",
      "Igen, ha vészvillogót használunk",
      "Nem."
    ],
    correctAnswer: 3,
    explanation: "Tilos olyan helyen megállni, ahol a jármű a közúti jelzések észlelhetőségét akadályozza."
  },
  {
    id: "meg_11",
    category: "megallas",
    difficulty: "hard",
    question: "Mekkora szabad helynek kell maradnia az úttest másik oldalán lévő záróvonalig, ha a járműved megáll?",
    answers: [
      "1 méter",
      "Legalább 3 méter.",
      "5 méter",
      "Nem kell szabad hely"
    ],
    correctAnswer: 1,
    explanation: "A jármű elhelyezésekor legalább 3 méter széles helyet kell hagyni a forgalom számára, ha záróvonal mellett állsz."
  },
  {
    id: "meg_12",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e önkéntesen megállni vasúti átjáróban vagy attól 30 méteren belül?",
    answers: [
      "Csak nappal",
      "Csak kerékpárral",
      "Nem.",
      "Igen, ha nem jön vonat"
    ],
    correctAnswer: 2,
    explanation: "Önkéntesen megállni vasúti átjáróban és attól 30 méteren belül tilos."
  },
  {
    id: "meg_13",
    category: "megallas",
    difficulty: "easy",
    question: "Hogyan kell elhelyezni a járművet az úttest jobb szélén, ha megállunk?",
    answers: [
      "Az út közepén",
      "Átlósan, elzárva a sávot",
      "Az úttestre merőlegesen, bárhol – az adott körülmények között",
      "A jobb oldalon, az úttesttel párhuzamosan."
    ],
    correctAnswer: 3,
    explanation: "Főszabályként a menetirány szerinti jobb oldalon, az útszegéllyel párhuzamosan, szorosan a jobb szélre húzódva kell megállni."
  },
  {
    id: "meg_14",
    category: "megallas",
    difficulty: "easy",
    question: "Melyik helyet nem foglalhatod el jogosultság nélkül?",
    answers: [
      "A mozgáskorlátozottak kijelölt helyét.",
      "Taxihelyet",
      "Buszmegállót",
      "Kerékpártárolót – az adott körülmények között"
    ],
    correctAnswer: 0,
    explanation: "A mozgáskorlátozott személyek számára kijelölt parkolóhelyet csak az arra jogosult jármű használhatja."
  },
  {
    id: "meg_15",
    category: "megallas",
    difficulty: "medium",
    question: "Szabad-e önkéntesen megállni hídon, aluljáróban vagy alagútban?",
    answers: [
      "Igen",
      "Nem.",
      "Csak éjszaka",
      "Csak vészvillogóval"
    ],
    correctAnswer: 1,
    explanation: "Hídon, aluljáróban, alagútban és ezek be- és kijáratánál az önkéntes megállás tilos."
  },
  {
    id: "meg_16",
    category: "megallas",
    difficulty: "easy",
    question: "Mit ellenőrizz az ajtó kinyitása előtt az út szélén?",
    answers: [
      "Semmit",
      "Csak a járdát",
      "A mögöttes forgalmat.",
      "Csak az út előttünk lévő részét"
    ],
    correctAnswer: 2,
    explanation: "Az ajtó kinyitása előtt meg kell győződni arról, hogy ezzel a közlekedés biztonságát nem veszélyeztetjük, különösen a hátulról érkező kerékpárosokat."
  },
  {
    id: "meg_17",
    category: "megallas",
    difficulty: "hard",
    question: "Szabad-e megállni kerékpársávon gépjárművel?",
    answers: [
      "Csak taxival",
      "Csak ha nincs ott biciklis",
      "Igen, ha csak csomagot rakodunk ki",
      "Nem."
    ],
    correctAnswer: 3,
    explanation: "A kijelölt kerékpársávon a gépjárműveknek még egy másodpercre is tilos megállniuk, mert ezzel a kerékpárosokat az úttest belső sávjába kényszerítenék."
  },
  {
    id: "meg_18",
    category: "megallas",
    difficulty: "medium",
    question: "Mit jelent a sárga színű folyamatos vonal az úttest jobb szélén (az útpadka mellett)?",
    answers: [
      "Megállási tilalmat.",
      "Díszítést",
      "Kerékpársávot",
      "Hogy ott lehet parkolni"
    ],
    correctAnswer: 0,
    explanation: "Az úttest szélén lévő sárga folytonos vonal útburkolati jelként Megállási tilalmat jelez."
  },
  {
    id: "meg_19",
    category: "megallas",
    difficulty: "hard",
    question: "Mit kell tenni a várakozó járművel a KRESZ szerint?",
    answers: [
      "Semmit",
      "Elgurulás ellen biztosítani és a motort leállítani.",
      "Szabadon kell hagyni elgurulni",
      "Csak az első kereket kell rögzíteni – az adott körülmények között"
    ],
    correctAnswer: 1,
    explanation: "A várakozó járművet elgurulás ellen biztosítani kell, és a motorját a KRESZ-ben meghatározott kivételektől eltekintve le kell állítani."
  },
  {
    id: "meg_20",
    category: "megallas",
    difficulty: "easy",
    question: "Mi a legfontosabb teendő, ha a jármű műszaki hiba miatt az úttesten marad?",
    answers: [
      "A veszélyt jelezni kell.",
      "A járműben ülve semmit sem tenni",
      "Elhagyni a helyszínt jelzés nélkül",
      "A járművet egyedül az autópályán tolni"
    ],
    correctAnswer: 0,
    explanation: "Műszaki hiba esetén a veszélyeztetés csökkentése, a jármű kivilágítása és a szükséges elakadásjelzés a szabályok szerint kötelező. A részletszabályok a megállás helyétől és körülményeitől függnek."
  }
];
