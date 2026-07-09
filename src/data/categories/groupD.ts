import { Question } from "../../types";

export const groupDQuestions: Question[] = [
  // --- LÁTHATÓSÁG (20 questions) ---
  {
    id: "lat_1",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen színű ruházatot a legkönnyebb észrevennie a gépjárművezetőknek sötétben?",
    answers: ["Fekete", "Sötétkék", "Világos vagy élénk (pl. sárga, fehér, neonzöld) ruházatot", "Szürke"],
    correctAnswer: 2,
    explanation: "A világos és fluoreszkáló színeket sokkal messzebbről észreveszik az autósok, míg a sötét ruhás gyalogosok szinte láthatatlanok éjszaka."
  },
  {
    id: "lat_2",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen messziről látja meg az autós a sötét ruhás gyalogost sötétben, tompított fényszórónál?",
    answers: ["Kb. 100 méterről", "Kb. 25-30 méterről (ez gyakran túl rövid a megálláshoz!)", "Kb. 200 méterről", "Egyáltalán nem látja meg"],
    correctAnswer: 1,
    explanation: "A sötét ruhás gyalogost mindössze 25-30 méterről látja meg az autós, ami életveszélyes, mert a kocsi fékútja 50 km/h-nál is ennél hosszabb lehet!"
  },
  {
    id: "lat_3",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen messziről látható a fényvisszaverő (retroreflexív) anyagot viselő személy sötétben?",
    answers: ["Kb. 50 méterről", "Kb. 150 méterről (vagy akár még messzebbről is, így az autósnak van ideje reagálni!)", "Ugyanolyan messziről, mint a sötét ruhás", "1 kilométerről mindig"],
    correctAnswer: 1,
    explanation: "A fényvisszaverő csíkok visszatükrözik a fényszórók fényét, így a gyalogos már 150 méterről láthatóvá válik, ami rendkívül biztonságos."
  },
  {
    id: "lat_4",
    category: "lathatosag",
    difficulty: "easy",
    question: "Kötelező-e a fényvisszaverő mellény viselése a kerékpárosnak lakott területen kívül éjszaka?",
    answers: [
      "Nem, csak ajánlott",
      "Igen, lakott területen kívül sötétben vagy rossz látási viszonyok között kötelező!",
      "Csak akkor, ha nincs lámpája",
      "Csak télen"
    ],
    correctAnswer: 1,
    explanation: "A KRESZ kötelezővé teszi a láthatósági mellény viselését lakott területen kívül sötétben vagy ködben, mert az országutakon nagy sebességgel mennek az autók."
  },
  {
    id: "lat_5",
    category: "lathatosag",
    difficulty: "easy",
    question: "Hogyan kell működniük a kerékpár lámpáinak sötétben?",
    answers: [
      "Úgy, hogy jól láthatóak legyenek (folyamatosan világíthatnak vagy villoghatnak is)",
      "Csak halványan szabad világítaniuk",
      "Elegendő, ha az első lámpa világít",
      "Csak piros színben világíthat mindkettő"
    ],
    correctAnswer: 0,
    explanation: "A kerékpár lámpái folyamatos fénnyel vagy villogva is működhetnek. A lényeg, hogy tiszta időben legalább 150 méterről láthatóak legyenek."
  },
  {
    id: "lat_6",
    category: "lathatosag",
    difficulty: "medium",
    question: "Mit kell tenned a kerékpár lámpáival és prizmáival, ha sáros vagy poros úton közlekedtél?",
    answers: [
      "Semmit, majd le mossa az eső",
      "Meg kell tisztítani őket, mert a koszos lámpa és prizma alig látható, ami balesetveszélyes",
      "Le kell szerelni őket",
      "Lefesteni feketére"
    ],
    correctAnswer: 1,
    explanation: "A kosz jelentősen csökkenti a fényerőt és a visszaverődést. Mindig töröld tisztára a lámpákat és a prizmákat!"
  },
  {
    id: "lat_7",
    category: "lathatosag",
    difficulty: "easy",
    question: "Melyik eszköz segít a kerékpáros láthatóságában oldalról?",
    answers: ["A csengő", "A kerékküllők közé szerelt sárga prizmák (küllőprizmák) vagy a gumiabroncs fényvisszaverő csíkja", "Az első fehér lámpa", "A láncvédő"],
    correctAnswer: 1,
    explanation: "A küllőprizmák és a reflexcsíkos gumik gondoskodnak arról, hogy a biciklis oldalról (pl. egy kereszteződésben) is jól látható legyen."
  },
  {
    id: "lat_8",
    category: "lathatosag",
    difficulty: "medium",
    question: "Mit érdemes tennie az iskolásnak az iskolatáskájával a láthatóság javítása érdekében?",
    answers: [
      "Hogy fekete legyen",
      "Olyan táskát választani, amelyen gyárilag vannak fényvisszaverő csíkok vagy elemek",
      "A táskát a kosárba tenni és letakarni",
      "Nem kell tenni semmit"
    ],
    correctAnswer: 1,
    explanation: "Sok modern iskolatáskán nagy fényvisszaverő felületek vannak, így a gyerekek hátulról is kitűnően látszanak a sötét téli reggeleken."
  },
  {
    id: "lat_9",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mi a teendőnk a kerékpár lámpáival nappal, ha hirtelen sűrű köd vagy szakadó eső nehezíti a látást?",
    answers: [
      "Nem kell bekapcsolni őket, mert nappal van",
      "Azonnal be kell kapcsolni az első fehér és hátsó piros lámpát a láthatóságért",
      "Meg kell állni és megvárni a jó időt",
      "Csak a csengőt kell használni"
    ],
    correctAnswer: 1,
    explanation: "Korlátozott látási viszonyok között (köd, eső, hóesés) nappal is kötelező a kerékpárok kivilágítása."
  },
  {
    id: "lat_10",
    category: "lathatosag",
    difficulty: "medium",
    question: "Hogyan segítheti a kutyasétáltató a saját és kutyája láthatóságát sötétben?",
    answers: [
      "Fekete póráz használatával",
      "Fényvisszaverő mellény viselésével, és a kutyára szerelt világító nyakörvvel vagy hám fényvisszaverő elemeivel",
      "Suttyomban, sötétben sétálva",
      "Ha nem használ pórázt"
    ],
    correctAnswer: 1,
    explanation: "A világító nyakörv és a gazdi fényvisszaverő elemei biztosítják, hogy az autósok időben észrevegyék a kutyát és sétáltatóját."
  },
  {
    id: "lat_11",
    category: "lathatosag",
    difficulty: "easy",
    question: "Miért hívják a fényvisszaverő mellényt 'aktív' vagy 'passzív' biztonsági eszköznek?",
    answers: [
      "Mert mozog",
      "Passzív biztonsági eszköz, mert nem akadályozza meg közvetlenül a balesetet, de láthatóvá tétellel segít elkerülni azt",
      "Mert világít magától",
      "Nincs ilyen elnevezés"
    ],
    correctAnswer: 1,
    explanation: "A láthatósági mellény passzív eszköz, mert önmagában nem világít, de visszatükrözi a beeső fényt, így megelőzi a gázolást."
  },
  {
    id: "lat_12",
    category: "lathatosag",
    difficulty: "medium",
    question: "Milyen színűnek kell lennie a kerékpár hátsó részén kötelezően elhelyezett fényvisszaverő prizmának?",
    answers: ["Fehér", "Sárga", "Piros (és nem háromszög alakú)", "Zöld"],
    correctAnswer: 2,
    explanation: "A kerékpár hátulján kötelező egy piros színű, nem háromszög alakú fényvisszaverő prizma elhelyezése (a lámpa mellett)."
  },
  {
    id: "lat_13",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen színűnek kell lennie a kerékpár elején elhelyezett fényvisszaverő prizmának?",
    answers: ["Fehér", "Piros", "Borostyánsárga", "Kék"],
    correctAnswer: 0,
    explanation: "A kerékpár elején egy fehér színű fényvisszaverő prizmát kell elhelyezni."
  },
  {
    id: "lat_14",
    category: "lathatosag",
    difficulty: "medium",
    question: "Szabad-e a bicikli pedáljára fényvisszaverőt szerelni?",
    answers: [
      "Tilos",
      "Kötelező! Mindkét pedálon kell lennie előre és hátra mutató sárga fényvisszaverőnek",
      "Csak opcionális dísz",
      "Csak versenybiciklin szabad"
    ],
    correctAnswer: 1,
    explanation: "A kerékpár pedáljain kötelező borostyánsárga fényvisszaverőknek lenniük előre és hátra mutatva. A mozgó sárga fényekről az autós azonnal felismeri a biciklist."
  },
  {
    id: "lat_15",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mit csináljon a gyalogos a sötét országúton, ha nincs nála lámpás vagy mellény?",
    answers: [
      "Feküdjön le az útra",
      "Próbáljon meg minél közelebb haladni az út széléhez, és használja a telefonja vakuját/kijelzőjét fényforrásként a láthatóságért",
      "Szaladjon az út közepén",
      "Bújjon el a fűben"
    ],
    correctAnswer: 1,
    explanation: "Ha nincs nálunk lámpás, a mobiltelefon fénye is sokat segíthet abban, hogy az autósok észrevegyenek minket az út szélén."
  },
  {
    id: "lat_16",
    category: "lathatosag",
    difficulty: "medium",
    question: "Mennyi a láthatósági mellény minimális szélessége a fényvisszaverő csíkok tekintetében a szabvány szerint?",
    answers: ["Nincs szabva", "Megfelelő fényvisszaverő felülettel kell rendelkeznie, hogy jól látható legyen", "Csak egy pici csík elég", "Az egésznek csillognia kell"],
    correctAnswer: 1,
    explanation: "A mellényen elhelyezett fényvisszaverő csíkoknak elegendő felületűnek kell lenniük, hogy az autó fényszórója messziről megvilágíthassa."
  },
  {
    id: "lat_17",
    category: "lathatosag",
    difficulty: "hard",
    question: "A bicikli első lámpája sötétben hány méterre kell, hogy megvilágítsa az utat?",
    answers: ["Csak 1 méterre", "Legalább 10 méterre", "Legalább 150 méterre kell, hogy látható legyen, és megfelelően megvilágítsa az úttestet magunk előtt", "Nem kell világítania előre"],
    correctAnswer: 2,
    explanation: "Az első lámpának elegendő fényt kell kibocsátania ahhoz, hogy a biciklis lássa az úthibákat, és őt magát is jól lássák 150 méterről."
  },
  {
    id: "lat_18",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen veszélyt jelent a sötétben az eső és a vizes aszfalt a láthatóság szempontjából?",
    answers: [
      "Semmilyet, az eső lemossa a koszt",
      "A vizes aszfalt elnyeli az autó fényszóróit és tükrözi a fényt, így a gyalogosokat még nehezebb észrevenni",
      "Hamarabb hazaérnek az autók",
      "A gyalogosok gyorsabban futnak"
    ],
    correctAnswer: 1,
    explanation: "Esős időben a láthatóság drasztikusan leromlik. A vizes útfelület csillogása elvonja a figyelmet és elnyeli a fényt, ezért még óvatosabbnak kell lenni."
  },
  {
    id: "lat_19",
    category: "lathatosag",
    difficulty: "hard",
    question: "Kötelező-e a fényvisszaverő mellény viselése a kerékpárosnak lakott területen BELÜL?",
    answers: [
      "Soha nem kötelező",
      "Csak korlátozott látási viszonyok (pl. sűrű köd, sötétség) esetén, ha az útnak nincs közvilágítása",
      "Mindig kötelező, nappal is",
      "Csak ha piros a bicikli"
    ],
    correctAnswer: 1,
    explanation: "Lakott területen belül alapvetően a közvilágítás miatt nem kötelező a mellény, de ha nincs közvilágítás és sötét/köd van, akkor kötelezővé válik."
  },
  {
    id: "lat_20",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mit érdemes tenni a házi kedvencek (pl. kutyák) láthatóságával kapcsolatban sötétben?",
    answers: [
      "Hagyni őket szabadon rohangálni",
      "Láthatósági elemekkel (világító hám, villogó nyakörv) felszerelni őket, hogy az autósok lássák őket a póráz végén",
      "Bezárni őket egy dobozba",
      "Semmit, a kutya lát a sötétben"
    ],
    correctAnswer: 1,
    explanation: "A kutyusok biztonsága is fontos. A világító vagy fényvisszaverő hám megelőzheti, hogy egy autó elüsse őket az út szélén."
  },

  // --- VASÚTI ÁTJÁRÓ (20 questions) ---
  {
    id: "vas_1",
    category: "vasut",
    difficulty: "easy",
    question: "Mit kell tenned, ha a vasúti átjáró fénysorompója villogó PIROS jelzést mutat?",
    answers: [
      "Gyorsan átfutni vagy áthajtani előtte",
      "Azonnal meg kell állni, mert jön a vonat",
      "Ha nem hallod a vonatot, átmehetsz",
      "Csak kerékpárral szabad átmenni"
    ],
    correctAnswer: 1,
    explanation: "A villogó piros fény szigorú és kötelező megállási parancs! A vonat nem tud hirtelen megállni, így a tiltás megszegése életveszélyes."
  },
  {
    id: "vas_2",
    category: "vasut",
    difficulty: "easy",
    question: "Mit jelent a fénysorompó villogó FEHÉR jelzése?",
    answers: [
      "Azt, hogy jön a vonat",
      "A berendezés működik, vonat nem közeledik, fokozott óvatossággal szabad áthaladni",
      "Azt, hogy a sorompó elromlott",
      "Megállási kötelezettséget"
    ],
    correctAnswer: 1,
    explanation: "A villogó fehér fény azt mutatja, hogy a berendezés üzemel és biztonságosan, de fokozott óvatossággal áthaladhatsz az átjárón."
  },
  {
    id: "vas_3",
    category: "vasut",
    difficulty: "easy",
    question: "Szabad-e áthaladni a vasúti átjárón, ha a félsorompó rúdja lefelé mozog vagy már le van csukva?",
    answers: [
      "Igen, ha átférünk alatta",
      "Nem, a lecsukódó vagy lecsukott sorompó alatt áthaladni szigorúan tilos és életveszélyes!",
      "Csak kerékpárral szabad áttolni alatta",
      "Csak gyalogosan szabad átbújni alatta"
    ],
    correctAnswer: 1,
    explanation: "A lecsukott vagy mozgásban lévő sorompónál áthaladni szigorúan tilos! A vonatok féktávolsága több száz méter, esélyük sincs megállni előtted."
  },
  {
    id: "vas_4",
    category: "vasut",
    difficulty: "medium",
    question: "Mit kell tenned, ha a fénysorompó sötét (nem világít sem fehér, sem piros fény)?",
    answers: [
      "Gázadással, gyorsan átmenni",
      "Megállni, meggyőződni arról, hogy nem jön-e vonat egyik irányból sem, és rendkívül óvatosan áthaladni",
      "Visszafordulni",
      "Hívni a tűzoltókat"
    ],
    correctAnswer: 1,
    explanation: "A sötét fénysorompó üzemzavart jelenthet. Ilyenkor úgy kell eljárni, mintha tilos jelzés lenne: alapos körülnézés után szabad csak áthaladni."
  },
  {
    id: "vas_5",
    category: "vasut",
    difficulty: "easy",
    question: "Hogyan kell megközelíteni a vasúti átjárót járművel?",
    answers: [
      "Nagy sebességgel, hátha hamarabb átérünk",
      "Fokozott óvatossággal, folyamatosan figyelve az átjáró jelzéseit és lassítva",
      "Cikkcakkban haladva",
      "Dudálva"
    ],
    correctAnswer: 1,
    explanation: "A vasúti átjárót mindig lassan, óvatosan, felkészülten kell megközelíteni, figyelve a lámpákat és a síneket."
  },
  {
    id: "vas_6",
    category: "vasut",
    difficulty: "medium",
    question: "Milyen jelzőtáblák figyelmeztetnek előre a vasúti átjáróra az út szélén?",
    answers: [
      "Csak egy piros kerek tábla",
      "Piros-fehér sávos háromszög alakú veszélytáblák és a távolságot jelző egy-, két- és háromsávos fehér oszlopok",
      "Kék négyzet alakú táblák",
      "Nincs előjelzés"
    ],
    correctAnswer: 1,
    explanation: "A vasúti átjáró közeledtét háromsávos (80 m), kétsávos (160 m) és egysávos (240 m) piros-fehér csíkozású táblák jelzik előre az út szélén."
  },
  {
    id: "vas_7",
    category: "vasut",
    difficulty: "easy",
    question: "Mit ábrázol az András-kereszt alakú tábla közvetlenül a vasúti átjáró előtt?",
    answers: [
      "Egy repülőgépet",
      "A vasúti átjáró pontos helyét (egypályás vagy többpályás vasútvonalat)",
      "Elsőbbségadás kötelező táblát",
      "Hogy tilos a behajtás"
    ],
    correctAnswer: 1,
    explanation: "Az András-kereszt közvetlenül a sínek előtt áll, és jelzi a vasúti átjáró helyét. A piros-fehér kereszt kötelező figyelmet ír elő."
  },
  {
    id: "vas_8",
    category: "vasut",
    difficulty: "medium",
    question: "Szabad-e előzni vasúti átjáróban vagy közvetlenül előtte?",
    answers: [
      "Igen, ha gyorsan megyünk",
      "Nem, a vasúti átjáróban és közvetlenül előtte előzni szigorúan tilos (kivéve egy nyomon haladó járművet, pl. kerékpárt)",
      "Csak kerékpárral szabad előzni autót",
      "Igen, ha üres a sín"
    ],
    correctAnswer: 1,
    explanation: "A vasúti átjárónál tilos előzni, mert a manőver elvonná a figyelmet a sínek beláthatóságától és a fénysorompótól."
  },
  {
    id: "vas_9",
    category: "vasut",
    difficulty: "easy",
    question: "Mennyi az autók megengedett sebessége a vasúti átjáróban a KRESZ szerint?",
    answers: [
      "Legalább 50 km/h",
      "Az átjárón folyamatosan, egyenletes sebességgel, hirtelen fékezés vagy gyorsítás nélkül kell áthaladni",
      "Maximum 5 km/h",
      "Nincs szabályozva"
    ],
    correctAnswer: 1,
    explanation: "A síneken egyenletes tempóban kell áthaladni, hogy elkerüljük a motor lefulladását vagy a kerekek megcsúszását."
  },
  {
    id: "vas_10",
    category: "vasut",
    difficulty: "medium",
    question: "Mi a teendőnk, ha kerékpárral a vasúti síneken való áthaladáskor sár vagy csúszós falevelek borítják a fém síneket?",
    answers: [
      "Dőljünk oldalra kanyarodva",
      "A síneket merőlegesen (derékszögben) keresztezve kell áttekerni, kerülve a hirtelen kanyarodást vagy fékezést",
      "Hirtelen fékezzünk az első fékkel",
      "Lépjünk le a sínekre"
    ],
    correctAnswer: 1,
    explanation: "A sínek fém felülete nagyon csúszós lehet. A bicikli kerekének merőlegesen kell áthaladnia a síneken, különben a kerék megcsúszhat és eleshetünk."
  },
  {
    id: "vas_11",
    category: "vasut",
    difficulty: "easy",
    question: "Szabad-e vasúti átjáróban gyalogosan megállni fényképezkedni?",
    answers: [
      "Igen, jó képek lesznek",
      "Nem, a vasúti átjáróban és a síneken tartózkodni csak az áthaladás idejéig szabad, megállni szigorúan tilos és életveszélyes!",
      "Csak ha nem jön vonat",
      "Csak csoportosan szabad"
    ],
    correctAnswer: 1,
    explanation: "A síneken megállni szigorúan tilos! A vonat bármikor feltűnhet, és nagy sebessége miatt másodpercek alatt elérheti az átjárót."
  },
  {
    id: "vas_12",
    category: "vasut",
    difficulty: "hard",
    question: "Ha a vasúti átjárót fénysorompó nem biztosítja (csak András-kereszt tábla van), hol kell megállni a járművel?",
    answers: [
      "A síneken",
      "A vasúti átjáró előtt, a sínpályától megfelelő távolságban (legalább 5 méterre), ahonnan a pálya mindkét irányban jól belátható",
      "Bárhol az úton",
      "Nem kell megállni"
    ],
    correctAnswer: 1,
    explanation: "Nem biztosított átjárónál meg kell állni a sínek előtt, alaposan körülnézni mindkét irányba, és csak teljesen üres pálya esetén áthaladni."
  },
  {
    id: "vas_13",
    category: "vasut",
    difficulty: "easy",
    question: "Miért veszélyes a vasúti átjáróban fülhallgatóval zenét hallgatva sétálni?",
    answers: [
      "Mert lemerül a telefon",
      "Mert nem halljuk meg a vonat közeledő robaját vagy kürtjelzését (dudálását)",
      "Mert kiesik a fülhallgató",
      "Nem veszélyes"
    ],
    correctAnswer: 1,
    explanation: "A vonat vezetője hangos kürttel jelez, ha veszélyt észlel. Ha fülhallgatót viselsz, ezt a figyelmeztetést nem fogod hallani!"
  },
  {
    id: "vas_14",
    category: "vasut",
    difficulty: "medium",
    question: "Mit kell tenned, ha az autó lefullad és megáll a vasúti átjáró közepén, és nem indul be?",
    answers: [
      "Ülj bent és hívj szerelőt",
      "Minden utasnak azonnal ki kell szállnia, biztonságos távolságba kell mennie, és meg kell próbálni letolni a kocsit vagy értesíteni a rendőrséget/vasutat",
      "Húzd fel az ablakokat",
      "Sírj csendben"
    ],
    correctAnswer: 1,
    explanation: "Ha a jármű elakad a síneken, az utasoknak azonnal el kell hagyniuk a kocsit. Az életmentés az első, az autó másodlagos!"
  },
  {
    id: "vas_15",
    category: "vasut",
    difficulty: "easy",
    question: "Megváltoztathatod-e a véleményedet és megfordulhatsz-e (visszafordulás) közvetlenül a vasúti átjáróban?",
    answers: [
      "Igen, ha üres az út",
      "Nem, a vasúti átjáróban megfordulni vagy tolatni szigorúan tilos!",
      "Csak kerékpárral szabad megfordulni",
      "Igen, ha sietünk"
    ],
    correctAnswer: 1,
    explanation: "A vasúti átjáróban a tolatás és megfordulás tilos, mert ezek bonyolult manőverek, amelyek során elakadhatunk a síneken."
  },
  {
    id: "vas_16",
    category: "vasut",
    difficulty: "medium",
    question: "Mennyi az elakadásjelző háromszög kihelyezési távolsága a vasúti síneken elakadt autó esetén?",
    answers: ["1 méter", "Úgy kell elhelyezni az úton az átjáró előtt, hogy a többi autós időben láthassa az elakadt járművet", "A tetőre kell tenni", "Nem kell kitenni"],
    correctAnswer: 1,
    explanation: "A háromszöget jóval az átjáró előtt kell kihelyezni az úttestre, hogy a kanyarban érkező autósok időben le tudjanak fékezni."
  },
  {
    id: "vas_17",
    category: "vasut",
    difficulty: "hard",
    question: "Milyen távolságra a vasúti átjárótól tilos megállni és várakozni az út szélén?",
    answers: ["Közvetlenül mellette", "A vasúti átjáró előtt és után 30 méteres távolságon belül tilos megállni és parkolni", "Legalább 100 méteren belül", "Nincs ilyen szabály"],
    correctAnswer: 1,
    explanation: "Az átjárótól számított 30 méteren belül tilos megállni vagy parkolni, hogy ne takarjuk el a fénysorompót és a beláthatóságot."
  },
  {
    id: "vas_18",
    category: "vasut",
    difficulty: "easy",
    question: "Hogyan kell viselkedni a vasúti peronon, amikor várjuk a vonatot?",
    answers: [
      "A peron szélén egyensúlyozva",
      "A biztonsági sárga vonal mögött várakozva, fegyelmezetten, kerülve a rohangálást és lökdösődést",
      "A sínek közé ugrálva",
      "A vonatra felkapaszkodva haladás közben"
    ],
    correctAnswer: 1,
    explanation: "A peron szélén állni veszélyes, mert a behaladó vonat szele magával ránthat, vagy véletlenül leeshetünk. Mindig állj a sárga biztonsági csík mögött!"
  },
  {
    id: "vas_19",
    category: "vasut",
    difficulty: "medium",
    question: "Mit jelent, ha a félsorompó rúdja piros-fehér csíkos és fényvisszaverő elemek vannak rajta?",
    answers: [
      "Díszítést",
      "Hogy éjszaka, az autók fényszórójánál is messziről jól látható legyen a lecsukott akadály",
      "Hogy nem szabad hozzáérni",
      "Semmit"
    ],
    correctAnswer: 1,
    explanation: "A sorompó rúdjának piros-fehér fényvisszaverő csíkozása biztosítja a kiváló láthatóságot sötétben is, megelőzve az ütközéseket."
  },
  {
    id: "vas_20",
    category: "vasut",
    difficulty: "easy",
    question: "Átkelhetünk-e a vasúti síneken olyan helyen, ahol nincs kijelölt átkelőhely (pl. vadátjáró vagy nyílt pálya)?",
    answers: [
      "Igen, ha rövidebb arra az út",
      "Nem, a vasúti pályán gyalogosan átkelni csak a kijelölt átjárókon (útátjáró, gyalogos alul- vagy felüljáró) szabad és biztonságos!",
      "Csak futva",
      "Csak ha nem látunk vonatot"
    ],
    correctAnswer: 1,
    explanation: "A síneken való illegális átkelés szigorúan tilos és életveszélyes. Mindig használd a kijelölt gyalogos átkelőket vagy aluljárókat!"
  },

  // --- KÖZLEKEDÉSI KULTÚRA (20 questions) ---
  {
    id: "kul_1",
    category: "kultura",
    difficulty: "easy",
    question: "Hogyan kell viselkednünk a többi közlekedővel szemben az utakon?",
    answers: [
      "Türelmetlenül és erőszakosan",
      "Figyelmesen, udvariasan, türelmesen és segítőkészen (partnerség az utakon)",
      "Úgy, mintha egyedül lennénk az úton",
      "Csak a rendőrökkel szemben kell rendesnek lenni"
    ],
    correctAnswer: 1,
    explanation: "A közlekedés társasjáték! Ha figyelmesek és udvariasak vagyunk egymással (pl. elengedjük az elakadt autót), mindenki gyorsabban és biztonságosabban ér célba."
  },
  {
    id: "kul_2",
    category: "kultura",
    difficulty: "easy",
    question: "Miért fontos az idősebb vagy babakocsis gyalogosok elengedése a zebránál?",
    answers: [
      "Mert megbüntet a rendőr",
      "Mert ők nehezebben és lassabban mozognak, udvariasság és kötelesség segíteni nekik az átkelésben",
      "Hogy ne kiabáljanak velünk",
      "Felesleges elengedni őket"
    ],
    correctAnswer: 1,
    explanation: "Az idős, beteg vagy babakocsis gyalogosok fokozott védelmet igényelnek. Adjunk nekik mindig elsőbbséget és várjuk meg türelmesen az átkelésüket."
  },
  {
    id: "kul_3",
    category: "kultura",
    difficulty: "easy",
    question: "Mit érdemes tenned, ha látod, hogy egy autó indexel, mert szeretne besorolni a sávodba a nagy dugóban?",
    answers: [
      "Gyorsítasz, hogy ne tudd beengedni",
      "Lassítasz egy kicsit, helyet hagysz neki és beengeded (cipzár-elv és udvariasság)",
      "Dudálsz rá hangosan",
      "Elfordítod a fejed"
    ],
    correctAnswer: 1,
    explanation: "A sávok egyesülésénél a cipzár-elv szerint egy-egy autót illik beengedni magunk elé. Ez fenntartja a folyamatos forgalmat."
  },
  {
    id: "kul_4",
    category: "kultura",
    difficulty: "easy",
    question: "Szabad-e szemetelni (pl. üveget, papírt, rágót kidobni) az autó ablakán menet közben?",
    answers: [
      "Igen, ha senki sem látja",
      "Nem, a szemetelés környezetszennyező, emellett a kidobott tárgyak (pl. csikk, palack) balesetet is okozhatnak a mögöttünk jövőnek!",
      "Csak bio szemetet szabad kidobni",
      "Csak a leállósávban szabad"
    ],
    correctAnswer: 1,
    explanation: "A szemetelés tilos. A szélvédőnek csapódó flakon vagy papír megijesztheti a mögöttes autóst, ami súlyos tömegbalesetet idézhet elő."
  },
  {
    id: "kul_5",
    category: "kultura",
    difficulty: "medium",
    question: "Hogyan köszönheted meg udvariasan, ha egy autós elengedett a zebrán vagy beengedett a sávjába?",
    answers: [
      "Kiabálással",
      "Egy barátságos kézfeltartással (intéssel) vagy egy enyhe fejbiccentéssel és mosollyal",
      "Nem kell megköszönni, ez kötelessége",
      "Dudálással"
    ],
    correctAnswer: 1,
    explanation: "A barátságos intés vagy mosoly jelzi az autósnak, hogy értékelted az udvariasságát. Ez javítja a közlekedési morált!"
  },
  {
    id: "kul_6",
    category: "kultura",
    difficulty: "easy",
    question: "Mit tegyél, ha vezetés közben elkövettél egy kis hibát (pl. véletlenül eléd kanyarodtál valakinek)?",
    answers: [
      "Mutass dühös jeleket a másiknak",
      "Intéssel vagy vészvillogó rövid villogtatásával jelezz sajnálatot és kérj elnézést (bocsánatkérés az utakon)",
      "Szaladj el",
      "Figyelmen kívül hagyd az egészet"
    ],
    correctAnswer: 1,
    explanation: "A hibázás emberi dolog. Ha intesz vagy jelzel sajnálatot, lecsillapítod a kedélyeket és megelőzöd az agressziót."
  },
  {
    id: "kul_7",
    category: "kultura",
    difficulty: "medium",
    question: "Hogyan kell elhaladni autóval vagy kerékpárral egy nagy eső utáni víztócsa mellett, ha gyalogosok állnak a járdán?",
    answers: [
      "Gyorsan átgázolni a tócsán, lefröcskölve a gyalogosokat",
      "Lassítani kell, hogy ne csapjuk rájuk a piszkos vizet (gyalogosok védelme és udvariasság)",
      "Dudálni, hogy fussanak el",
      "Nincs jelentősége, szárad a ruha gyorsan"
    ],
    correctAnswer: 1,
    explanation: "A gyalogosok szándékos vagy figyelmetlenségből eredő lefröcskölése rendkívül illetlen és büntetendő magatartás. Mindig lassíts tócsák előtt!"
  },
  {
    id: "kul_8",
    category: "kultura",
    difficulty: "easy",
    question: "Használhatod-e a gépjármű dudáját dühünk kifejezésére vagy üdvözlésre?",
    answers: [
      "Igen, bármikor",
      "Nem, a hangjelzés (duda) kizárólag balesetveszély elhárítására szolgál, indokolatlan használata tilos és zavaró!",
      "Csak ismerősöknek dudálhatunk",
      "Csak esküvőn szabad"
    ],
    correctAnswer: 1,
    explanation: "A duda nem játék és nem feszültséglevezető eszköz. Csak akkor használd, ha ezzel közvetlen balesetet akadályozol meg."
  },
  {
    id: "kul_9",
    category: "kultura",
    difficulty: "medium",
    question: "Mit tegyél, ha biciklizés közben azt látod, hogy egy másik kerékpáros elesett az úton?",
    answers: [
      "Nevess egyet és tekerj tovább",
      "Állj meg biztonságosan, kérdezd meg, hogy jól van-e, és ha szükséges, nyújts elsősegélyt vagy kérj felnőtt/mentő segítséget",
      "Kerüld ki messziről",
      "Hagyd ott, majd felkel magától"
    ],
    correctAnswer: 1,
    explanation: "A bajba jutott közlekedőknek való segítségnyújtás erkölcsi és jogi kötelesség (elsősegélynyújtás kötelezettsége)."
  },
  {
    id: "kul_10",
    category: "kultura",
    difficulty: "easy",
    question: "Hogyan kell kinyitnod az autó ajtaját, ha a sofőr mögött ülsz és az út szélén parkoltok?",
    answers: [
      "Lökjük ki teljes erőből",
      "A járdához közelebbi (jobb oldali) ajtón szálljunk ki, alapos hátrapillantás után, vigyázva a gyalogosokra és biciklisekre",
      "A bal oldali ajtót rúgjuk ki",
      "Másszunk ki a tetőablakon"
    ],
    correctAnswer: 1,
    explanation: "Mindig a járdasziget felőli oldalon a legbiztonságosabb kiszállni az autóból, mert ott védve vagyunk az úttest forgalmától."
  },
  {
    id: "kul_11",
    category: "kultura",
    difficulty: "medium",
    question: "Mit jelent a 'defenzív vezetés' fogalma?",
    answers: [
      "Hogy nagyon gyorsan megyünk",
      "Várható veszélyekre előre felkészülő, óvatos vezetési stílus, amikor a mások hibáit is megpróbáljuk kivédeni az ütközések elkerüléséért",
      "Agresszív támadó stílus",
      "A sávunk védelmét bármi áron"
    ],
    correctAnswer: 1,
    explanation: "A defenzív vezetés a legbiztonságosabb stílus: nem keresed a jogodat görcsösen, hanem figyelsz másokra és engedsz, ha ezzel elkerülhető a baleset."
  },
  {
    id: "kul_12",
    category: "kultura",
    difficulty: "easy",
    question: "Szabad-e hangos zenét hallgatni az autóban lehúzott ablakokkal lakott területen belül éjszaka?",
    answers: [
      "Igen, hadd hallja mindenki",
      "Nem, ez zavarja a lakók nyugalmát és csendháborításnak minősül, emellett a sofőr sem hallja a külvilág szirénáit",
      "Csak hétvégén szabad",
      "Csak ha jó a zene"
    ],
    correctAnswer: 1,
    explanation: "A hangos zene elvonja a figyelmet, gátolja a szirénák meghallását, és zavarja a környezetet. Közlekedjünk halkan, kulturáltan!"
  },
  {
    id: "kul_13",
    category: "kultura",
    difficulty: "medium",
    question: "Hogyan kell közeledni a kijelölt gyalogos-átkelőhelyhez (zebrához) autóval vagy biciklivel?",
    answers: [
      "Gyorsítva, hogy még a gyalogos előtt átérjünk",
      "Olyan sebességgel, hogy szükség esetén biztonságosan meg tudjunk állni a zebra előtt, elengedve a gyalogosokat",
      "Dudálással jelezve, hogy jövünk",
      "Nincs külön szabály"
    ],
    correctAnswer: 1,
    explanation: "A zebrát mindig fokozott óvatossággal és csökkentett sebességgel kell megközelíteni, figyelve a járda szélét."
  },
  {
    id: "kul_14",
    category: "kultura",
    difficulty: "easy",
    question: "Mit kell tenned, ha vakvezető kutyával vagy fehér bottal közlekedő gyalogost látsz az úttest szélén?",
    answers: [
      "Meg kell állnod, kiemelt figyelmet szentelve és biztosítva számára a teljesen veszélytelen áthaladást",
      "Dudálással kell figyelmeztetned, hogy jössz",
      "Kikerülöd gyorsan gázzal",
      "Figyelmen kívül hagyod"
    ],
    correctAnswer: 0,
    explanation: "A látássérült gyalogosok fehér bottal vagy vakvezető kutyával közlekednek. Számukra mindig, minden helyzetben elsőbbséget és segítséget kell adni."
  },
  {
    id: "kul_15",
    category: "kultura",
    difficulty: "medium",
    question: "Mit érdemes tenned, ha biciklizés közben egy idős gyalogos lassan halad előtted a gyalog- és kerékpárúton?",
    answers: [
      "Hangosan rákiabálsz, hogy menjen el az útból",
      "Lassítasz, óvatos csengőszóval jelzel, és biztonságos távolságban, lassan kerülöd ki őt",
      "Súrolva mellette suhansz el nagy sebességgel",
      "Meglököd hátulról"
    ],
    correctAnswer: 1,
    explanation: "Az idős emberek nem hallanak vagy reagálnak olyan gyorsan. Udvariasan és lassan kell eljárni a kikerülésükkor."
  },
  {
    id: "kul_16",
    category: "kultura",
    difficulty: "easy",
    question: "Szabad-e csúfolódni vagy mutogatni a másik autósnak/biciklisnek dühünkben?",
    answers: [
      "Igen, ha feldühít",
      "Nem, az agresszív mutogatás dühöt szül és elvonja a figyelmet a vezetésről, növelve a baleset esélyét",
      "Csak ha nem látja a rendőr",
      "Csak ha igazam van"
    ],
    correctAnswer: 1,
    explanation: "Az agresszió szüli az agressziót. Őrizzük meg a nyugalmunkat minden helyzetben, a higgadtság életet menthet."
  },
  {
    id: "kul_17",
    category: "kultura",
    difficulty: "hard",
    question: "Mi az a 'biztonsági folyosó' (mentősáv) az autópályán dugó esetén?",
    answers: [
      "Egy külön sáv a politikusoknak",
      "A sávok széthúzódása a leállósáv felé, hogy a szirénázó mentők/tűzoltók akadálytalanul átjuthassanak a dugó közepén",
      "Ahol a gyerekek játszhatnak",
      "Nincs ilyen"
    ],
    correctAnswer: 1,
    explanation: "Ha az autópályán dugó alakul ki, a belső sávban lévők balra, a külsőben lévők jobbra húzódnak, így középen egy szabad folyosó nyílik a mentőknek."
  },
  {
    id: "kul_18",
    category: "kultura",
    difficulty: "easy",
    question: "Mit tegyen a kerékpáros a szűk kapualjból vagy sűrű bokrok mögül való kihajtáskor?",
    answers: [
      "Száguldjon ki bátran",
      "Lassítson le teljesen, vagy tolja ki a biciklit, nehogy elüsse a járdán haladó gyalogosokat",
      "Csengessen folyamatosan",
      "Hunyja le a szemét"
    ],
    correctAnswer: 1,
    explanation: "A beláthatatlan helyekről való kilépés/kihajtás előtt mindig meg kell győződni arról, hogy nem ütünk-e el egy járdán közlekedőt."
  },
  {
    id: "kul_19",
    category: "kultura",
    difficulty: "medium",
    question: "Mit jelent az, hogy a közlekedésben 'mindenkit hazavárnak'?",
    answers: [
      "Hogy sietni kell haza ebédelni",
      "Emlékeztető arra, hogy a szabályok betartása és az udvariasság biztosítja, hogy mindenki épségben hazaérjen a családjához",
      "Azt, hogy otthon kell maradnunk",
      "Hogy a szüleink aggódnak"
    ],
    correctAnswer: 1,
    explanation: "Ez az elv arra figyelmeztet, hogy az úton mindannyian emberek vagyunk, akiknek szerető családjuk van otthon. Ne siessünk mások élete árán!"
  },
  {
    id: "kul_20",
    category: "kultura",
    difficulty: "easy",
    question: "Hogyan segíthetik a gyerekek a szüleik biztonságos autóvezetését az autóban ülve?",
    answers: [
      "Hangos kiabálással, verekedéssel és a sofőr zavarásával",
      "Csendes játékkal, bekapcsolt biztonsági övvel fegyelmezetten ülve, hogy a szülő a vezetésre koncentrálhasson",
      "A kormány rángatásával",
      "A gombok nyomogatásával menet közben"
    ],
    correctAnswer: 1,
    explanation: "A gyerekek sokat segíthetnek, ha nem vonják el a szülő figyelmét a vezetéstől. A sofőr zavarása komoly balesetveszélyt jelent!"
  }
];
