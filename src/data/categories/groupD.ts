import { Question } from "../../types";

export const groupDQuestions: Question[] = [
  // --- LÁTHATÓSÁG (20 questions) ---
  {
    id: "lat_1",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen színű ruházatot a legkönnyebb észrevennie a gépjárművezetőknek sötétben?",
    answers: [
      "Világos vagy élénk ruházatot",
      "Sötétkék",
      "Fekete",
      "Szürke"
    ],
    correctAnswer: 0,
    explanation: "A világos és fluoreszkáló színeket sokkal messzebbről észreveszik az autósok, míg a sötét ruhás gyalogosok szinte láthatatlanok éjszaka."
  },
  {
    id: "lat_2",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen messziről látható egy sötét ruhás gyalogos sötétben?",
    answers: [
      "Mindig legalább 200 méterről",
      "A láthatósága a körülményektől függ",
      "Mindig pontosan 25 méterről",
      "Sötétben egyáltalán nem látható"
    ],
    correctAnswer: 1,
    explanation: "A tényleges észlelési távolságot több tényező befolyásolja, ezért egyetlen, minden helyzetre érvényes méterérték nem adható meg."
  },
  {
    id: "lat_3",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mire szolgál a fényvisszaverő anyag a gyalogos ruházatán?",
    answers: [
      "Csak díszítésre",
      "Arra, hogy a gyalogos saját maga jobban lásson",
      "A járművek fényszórójának fényét visszaverve javítja.",
      "A ruházat melegebbé tételére"
    ],
    correctAnswer: 2,
    explanation: "A retroreflexív anyag a járművek fényszórójának fényét a fényforrás irányába veri vissza, ezért sötétben jelentősen javítja a láthatóságot."
  },
  {
    id: "lat_4",
    category: "lathatosag",
    difficulty: "easy",
    question: "Kötelező-e a fényvisszaverő mellény viselése a kerékpárosnak lakott területen kívül éjszaka?",
    answers: [
      "Nem, csak ajánlott",
      "Csak télen",
      "Csak akkor, ha nincs lámpája",
      "Igen."
    ],
    correctAnswer: 3,
    explanation: "A KRESZ kötelezővé teszi a láthatósági mellény viselését lakott területen kívül sötétben vagy ködben, mert az országutakon nagy sebességgel mennek az autók."
  },
  {
    id: "lat_5",
    category: "lathatosag",
    difficulty: "easy",
    question: "Hogyan kell működniük a kerékpár lámpáinak sötétben?",
    answers: [
      "Úgy, hogy jól láthatóak legyenek",
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
      "Meg kell tisztítani őket",
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
    answers: [
      "A csengő",
      "Az első fehér lámpa",
      "A kerékküllők közé szerelt sárga prizmák.",
      "A láncvédő"
    ],
    correctAnswer: 2,
    explanation: "A küllőprizmák és a reflexcsíkos gumik gondoskodnak arról, hogy a biciklis oldalról (pl. egy kereszteződésben) is jól látható legyen."
  },
  {
    id: "lat_8",
    category: "lathatosag",
    difficulty: "medium",
    question: "Mit érdemes tennie az iskolásnak az iskolatáskájával a láthatóság javítása érdekében?",
    answers: [
      "Hogy fekete legyen",
      "Nem kell tenni semmit",
      "A táskát a kosárba tenni és letakarni",
      "Olyan táskát választani"
    ],
    correctAnswer: 3,
    explanation: "Sok modern iskolatáskán nagy fényvisszaverő felületek vannak, így a gyerekek hátulról is kitűnően látszanak a sötét téli reggeleken."
  },
  {
    id: "lat_9",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mi a teendőnk a kerékpár lámpáival nappal, ha hirtelen sűrű köd vagy szakadó eső nehezíti a látást?",
    answers: [
      "Azonnal be kell kapcsolni az első.",
      "Nem kell bekapcsolni őket, mert nappal van",
      "Meg kell állni és megvárni a jó időt",
      "Csak a csengőt kell használni"
    ],
    correctAnswer: 0,
    explanation: "Korlátozott látási viszonyok között (köd, eső, hóesés) nappal is kötelező a kerékpárok kivilágítása."
  },
  {
    id: "lat_10",
    category: "lathatosag",
    difficulty: "medium",
    question: "Hogyan segítheti a kutyasétáltató a saját és kutyája láthatóságát sötétben?",
    answers: [
      "Fekete póráz használatával",
      "Fényvisszaverő mellény viselésével",
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
      "Mert világít magától",
      "Passzív biztonsági eszköz",
      "Nincs ilyen elnevezés"
    ],
    correctAnswer: 2,
    explanation: "A láthatósági mellény passzív eszköz, mert önmagában nem világít, de visszatükrözi a beeső fényt, így megelőzi a gázolást."
  },
  {
    id: "lat_12",
    category: "lathatosag",
    difficulty: "medium",
    question: "Milyen színűnek kell lennie a kerékpár hátsó részén kötelezően elhelyezett fényvisszaverő prizmának?",
    answers: [
      "Fehér",
      "Sárga",
      "Zöld",
      "Piros (és nem háromszög alakú)"
    ],
    correctAnswer: 3,
    explanation: "A kerékpár hátulján kötelező egy piros színű, nem háromszög alakú fényvisszaverő prizma elhelyezése (a lámpa mellett)."
  },
  {
    id: "lat_13",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen színűnek kell lennie a kerékpár elején elhelyezett fényvisszaverő prizmának?",
    answers: [
      "Fehér",
      "Piros",
      "Borostyánsárga",
      "Kék"
    ],
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
      "Kötelező Mindkét pedálon kell lennie előre.",
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
    question: "Mit tegyen a gyalogos lakott területen kívül, sötétben, ha nincs fényvisszaverő ruházata?",
    answers: [
      "Az út közepén haladjon",
      "Feküdjön le az út szélére",
      "A szabályos közlekedési helyen haladjon",
      "Fusson a járművek felé"
    ],
    correctAnswer: 2,
    explanation: "A mobiltelefon kijelzője nem helyettesíti a jogszabályban előírt fényvisszaverő ruházatot. Ilyen helyzetben is a szabályos haladás és a láthatóság növelése a cél."
  },
  {
    id: "lat_16",
    category: "lathatosag",
    difficulty: "medium",
    question: "Melyik állítás igaz a láthatósági mellényre?",
    answers: [
      "A KRESZ minden mellényhez egyetlen, általános csíkszélességet határoz meg",
      "Csak a szín számít, a fényvisszaverő felület nem",
      "Elég egy apró fényvisszaverő pont",
      "A mellény kialakítására szabványok vonatkozhatnak"
    ],
    correctAnswer: 3,
    explanation: "A láthatósági mellény műszaki kialakítását nem célszerű egyetlen, általános KRESZ-ben rögzített csíkszélességként tanítani."
  },
  {
    id: "lat_17",
    category: "lathatosag",
    difficulty: "hard",
    question: "Mi a kerékpár első lámpájának egyik lényeges feladata?",
    answers: [
      "Csak a hátsó járművek figyelmeztetése",
      "Az úttest megvilágítása és a kerékpáros láthatóvá tétele",
      "Csak a kerékpár díszítése",
      "Nappal a csengő helyettesítése"
    ],
    correctAnswer: 0,
    explanation: "Az első lámpa a kerékpáros előtti útfelületet világítja meg, és a megfelelő kivilágítás részeként a kerékpáros láthatóságát is szolgálja."
  },
  {
    id: "lat_18",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen veszélyt jelent a sötétben az eső és a vizes aszfalt a láthatóság szempontjából?",
    answers: [
      "Semmilyet, az eső lemossa a koszt",
      "A vizes aszfalt elnyeli az autó.",
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
    question: "Mikor kötelező a fényvisszaverő mellény viselése kerékpárosnak?",
    answers: [
      "Soha",
      "Lakott területen belül mindig",
      "Lakott területen kívül",
      "Csak télen"
    ],
    correctAnswer: 2,
    explanation: "A KRESZ szerint lakott területen kívül, éjszaka vagy korlátozott látási viszonyok között a kerékpárosnak fényvisszaverő mellényt vagy ruházatot kell viselnie."
  },
  {
    id: "lat_20",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mit érdemes tenni a házi kedvencek (pl. kutyák) láthatóságával kapcsolatban sötétben?",
    answers: [
      "Hagyni őket szabadon rohangálni",
      "Semmit, a kutya lát a sötétben",
      "Bezárni őket egy dobozba",
      "Láthatósági elemekkel felszerelni őket"
    ],
    correctAnswer: 3,
    explanation: "A kutyusok biztonsága is fontos. A világító vagy fényvisszaverő hám megelőzheti, hogy egy autó elüsse őket az út szélén."
  },
  // --- VASÚTI ÁTJÁRÓ (20 questions) ---
  {
    id: "vas_1",
    category: "vasut",
    difficulty: "easy",
    question: "Mit kell tenned, ha a vasúti átjáró fénysorompója villogó PIROS jelzést mutat?",
    answers: [
      "Azonnal meg kell állni, mert jön.",
      "Gyorsan átfutni vagy áthajtani előtte",
      "Ha nem hallod a vonatot, átmehetsz",
      "Csak kerékpárral szabad átmenni"
    ],
    correctAnswer: 0,
    explanation: "A villogó piros fény szigorú és kötelező megállási parancs! A vonat nem tud hirtelen megállni, így a tiltás megszegése életveszélyes."
  },
  {
    id: "vas_2",
    category: "vasut",
    difficulty: "easy",
    question: "Mit jelent a fénysorompó villogó FEHÉR jelzése?",
    answers: [
      "Azt, hogy jön a vonat",
      "A berendezés működik",
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
      "Csak kerékpárral szabad áttolni alatta",
      "Nem, tilos.",
      "Csak gyalogosan szabad átbújni alatta"
    ],
    correctAnswer: 2,
    explanation: "A lecsukott vagy mozgásban lévő sorompónál áthaladni szigorúan tilos! A vonatok féktávolsága több száz méter, esélyük sincs megállni előtted."
  },
  {
    id: "vas_4",
    category: "vasut",
    difficulty: "medium",
    question: "Mit kell tenni, ha a vasúti átjáró fénysorompója nem ad fényjelzést?",
    answers: [
      "Gyorsan áthaladni",
      "Dudálni, majd áthaladni",
      "Visszafordulni és ott hagyni a járművet",
      "A KRESZ szerint a berendezés működésképtelenségét úgy kell kezelni"
    ],
    correctAnswer: 3,
    explanation: "A sötét fénysorompó nem igazolja a szabad áthaladást. Az átjárón csak a KRESZ szerinti fokozott óvatossággal, a vasúti forgalom kizárása után szabad áthaladni."
  },
  {
    id: "vas_5",
    category: "vasut",
    difficulty: "easy",
    question: "Hogyan kell megközelíteni a vasúti átjárót járművel?",
    answers: [
      "Fokozott óvatossággal",
      "Nagy sebességgel, hátha hamarabb átérünk",
      "Cikkcakkban haladva",
      "Dudálva"
    ],
    correctAnswer: 0,
    explanation: "A vasúti átjárót mindig lassan, óvatosan, felkészülten kell megközelíteni, figyelve a lámpákat és a síneket."
  },
  {
    id: "vas_6",
    category: "vasut",
    difficulty: "medium",
    question: "Mely jelzések figyelmeztetnek a vasúti átjáró közeledtére?",
    answers: [
      "Csak kék kör alakú táblák",
      "Veszélyt jelző tábla",
      "Csak STOP tábla",
      "Nincs előjelzés"
    ],
    correctAnswer: 1,
    explanation: "A vasúti átjárót veszélyt jelző tábla és a hozzá kapcsolódó távolságjelző táblák is előre jelezhetik."
  },
  {
    id: "vas_7",
    category: "vasut",
    difficulty: "easy",
    question: "Mit ábrázol az András-kereszt alakú tábla közvetlenül a vasúti átjáró előtt?",
    answers: [
      "Egy repülőgépet",
      "Elsőbbségadás kötelező táblát",
      "A vasúti átjáró pontos helyét",
      "Hogy tilos a behajtás"
    ],
    correctAnswer: 2,
    explanation: "Az András-kereszt közvetlenül a sínek előtt áll, és jelzi a vasúti átjáró helyét. A piros-fehér kereszt kötelező figyelmet ír elő."
  },
  {
    id: "vas_8",
    category: "vasut",
    difficulty: "medium",
    question: "Melyik állítás igaz a vasúti átjáróban és közvetlenül előtte történő előzésre?",
    answers: [
      "Mindig szabad előzni",
      "Csak kerékpárral tilos",
      "Csak éjszaka tilos",
      "Főszabály szerint tilos"
    ],
    correctAnswer: 3,
    explanation: "A KRESZ a vasúti átjáróban és közvetlenül előtte főszabályként tiltja az előzést, de meghatározott kivételt is tartalmaz."
  },
  {
    id: "vas_9",
    category: "vasut",
    difficulty: "easy",
    question: "Mennyi az autók megengedett sebessége a vasúti átjáróban a KRESZ szerint?",
    answers: [
      "Az átjárón folyamatosan",
      "Legalább 50 km/h",
      "Maximum 5 km/h",
      "Nincs szabályozva"
    ],
    correctAnswer: 0,
    explanation: "A síneken egyenletes tempóban kell áthaladni, hogy elkerüljük a motor lefulladását vagy a kerekek megcsúszását."
  },
  {
    id: "vas_10",
    category: "vasut",
    difficulty: "medium",
    question: "Mi a teendőnk, ha kerékpárral a vasúti síneken való áthaladáskor sár vagy csúszós falevelek borítják a fém síneket?",
    answers: [
      "Dőljünk oldalra kanyarodva",
      "A síneket merőlegesen keresztezve kell áttekerni",
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
      "Csak ha nem jön vonat",
      "Nem, tilos.",
      "Csak csoportosan szabad"
    ],
    correctAnswer: 2,
    explanation: "A síneken megállni szigorúan tilos! A vonat bármikor feltűnhet, és nagy sebessége miatt másodpercek alatt elérheti az átjárót."
  },
  {
    id: "vas_12",
    category: "vasut",
    difficulty: "hard",
    question: "Mit kell tenni olyan vasúti átjárónál, amelyet nem biztosít fénysorompó vagy sorompó?",
    answers: [
      "Megállás nélkül áthaladni",
      "Csak akkor kell figyelni, ha csengőt hallunk",
      "A sínen kell megállni",
      "A vasúti pályán való áthaladás előtt."
    ],
    correctAnswer: 3,
    explanation: "Biztosítatlan vasúti átjárónál az áthaladás előtt meg kell győződni arról, hogy vasúti jármű nem közeledik, és az áthaladás biztonságos."
  },
  {
    id: "vas_13",
    category: "vasut",
    difficulty: "easy",
    question: "Miért veszélyes a vasúti átjáróban fülhallgatóval zenét hallgatva sétálni?",
    answers: [
      "Mert nem halljuk meg a vonat.",
      "Mert lemerül a telefon",
      "Mert kiesik a fülhallgató",
      "Nem veszélyes"
    ],
    correctAnswer: 0,
    explanation: "A vonat vezetője hangos kürttel jelez, ha veszélyt észlel. Ha fülhallgatót viselsz, ezt a figyelmeztetést nem fogod hallani!"
  },
  {
    id: "vas_14",
    category: "vasut",
    difficulty: "medium",
    question: "Mit kell tenned, ha az autó lefullad és megáll a vasúti átjáró közepén, és nem indul be?",
    answers: [
      "Ülj bent és hívj szerelőt",
      "Minden utasnak azonnal ki kell szállnia",
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
      "Csak kerékpárral szabad megfordulni",
      "Nem, tilos.",
      "Igen, ha sietünk"
    ],
    correctAnswer: 2,
    explanation: "A vasúti átjáróban a tolatás és megfordulás tilos, mert ezek bonyolult manőverek, amelyek során elakadhatunk a síneken."
  },
  {
    id: "vas_16",
    category: "vasut",
    difficulty: "medium",
    question: "Hogyan kell elhelyezni az elakadásjelző háromszöget, ha a jármű vasúti átjáró közelében akad el?",
    answers: [
      "A jármű tetejére kell tenni",
      "Nem kell használni",
      "A sínek közé kell tenni",
      "Úgy kell elhelyezni"
    ],
    correctAnswer: 3,
    explanation: "Az elakadásjelző háromszöget úgy kell elhelyezni, hogy a közeledő járművezetők kellő távolságból észlelhessék az akadályt; a helyszín sajátosságai meghatározzák a pontos elhelyezést."
  },
  {
    id: "vas_17",
    category: "vasut",
    difficulty: "hard",
    question: "Milyen távolságra a vasúti átjárótól tilos megállni és várakozni az út szélén?",
    answers: [
      "A vasúti átjáró előtt és után.",
      "Közvetlenül mellette",
      "Legalább 100 méteren belül",
      "Nincs ilyen szabály"
    ],
    correctAnswer: 0,
    explanation: "Az átjárótól számított 30 méteren belül tilos megállni vagy parkolni, hogy ne takarjuk el a fénysorompót és a beláthatóságot."
  },
  {
    id: "vas_18",
    category: "vasut",
    difficulty: "easy",
    question: "Hogyan kell viselkedni a vasúti peronon, amikor várjuk a vonatot?",
    answers: [
      "A peron szélén egyensúlyozva",
      "A biztonsági sárga vonal mögött várakozva",
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
      "Hogy nem szabad hozzáérni",
      "Hogy éjszaka, az autók fényszórójánál is.",
      "Semmit"
    ],
    correctAnswer: 2,
    explanation: "A sorompó rúdjának piros-fehér fényvisszaverő csíkozása biztosítja a kiváló láthatóságot sötétben is, megelőzve az ütközéseket."
  },
  {
    id: "vas_20",
    category: "vasut",
    difficulty: "easy",
    question: "Átkelhetünk-e a vasúti síneken olyan helyen, ahol nincs kijelölt átkelőhely?",
    answers: [
      "Igen, ha nem hallunk vonatot",
      "Csak éjszaka",
      "Igen, ha kerékpárral vagyunk",
      "Nem, tilos."
    ],
    correctAnswer: 3,
    explanation: "A vasúti pálya nem kijelölt átkelőhelyen történő keresztezése veszélyes és nem megengedett."
  },
  // --- KÖZLEKEDÉSI KULTÚRA (20 questions) ---
  {
    id: "kul_1",
    category: "kultura",
    difficulty: "easy",
    question: "Hogyan kell viselkednünk a többi közlekedővel szemben az utakon?",
    answers: [
      "Figyelmesen, udvariasan, türelmesen és segítőkészen",
      "Türelmetlenül és erőszakosan",
      "Úgy, mintha egyedül lennénk az úton",
      "Csak a rendőrökkel szemben kell rendesnek lenni"
    ],
    correctAnswer: 0,
    explanation: "A közlekedés társasjáték! Ha figyelmesek és udvariasak vagyunk egymással (pl. elengedjük az elakadt autót), mindenki gyorsabban és biztonságosabban ér célba."
  },
  {
    id: "kul_2",
    category: "kultura",
    difficulty: "easy",
    question: "Miért fontos az idősebb vagy babakocsis gyalogosok elengedése a zebránál?",
    answers: [
      "Mert megbüntet a rendőr",
      "Mert ők nehezebben és lassabban mozognak",
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
      "Dudálsz rá hangosan",
      "Lassítasz egy kicsit",
      "Elfordítod a fejed"
    ],
    correctAnswer: 2,
    explanation: "A sávok egyesülésénél a cipzár-elv szerint egy-egy autót illik beengedni magunk elé. Ez fenntartja a folyamatos forgalmat."
  },
  {
    id: "kul_4",
    category: "kultura",
    difficulty: "easy",
    question: "Szabad-e szemetelni (pl. üveget, papírt, rágót kidobni) az autó ablakán menet közben?",
    answers: [
      "Igen, ha senki sem látja",
      "Csak a leállósávban szabad",
      "Csak bio szemetet szabad kidobni",
      "Nem, tilos."
    ],
    correctAnswer: 3,
    explanation: "A szemetelés tilos. A szélvédőnek csapódó flakon vagy papír megijesztheti a mögöttes autóst, ami súlyos tömegbalesetet idézhet elő."
  },
  {
    id: "kul_5",
    category: "kultura",
    difficulty: "medium",
    question: "Hogyan köszönheted meg udvariasan, ha egy autós elengedett a zebrán vagy beengedett a sávjába?",
    answers: [
      "Egy barátságos kézfeltartással vagy egy enyhe.",
      "Kiabálással",
      "Nem kell megköszönni, ez kötelessége",
      "Dudálással"
    ],
    correctAnswer: 0,
    explanation: "A barátságos intés vagy mosoly jelzi az autósnak, hogy értékelted az udvariasságát. Ez javítja a közlekedési morált!"
  },
  {
    id: "kul_6",
    category: "kultura",
    difficulty: "easy",
    question: "Mit tegyél, ha vezetés közben elkövettél egy kis hibát (pl. véletlenül eléd kanyarodtál valakinek)?",
    answers: [
      "Mutass dühös jeleket a másiknak",
      "Intéssel vagy vészvillogó rövid villogtatásával jelezz.",
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
      "Dudálni, hogy fussanak el",
      "Lassítani kell, hogy ne csapjuk rájuk.",
      "Nincs jelentősége, szárad a ruha gyorsan"
    ],
    correctAnswer: 2,
    explanation: "A gyalogosok szándékos vagy figyelmetlenségből eredő lefröcskölése rendkívül illetlen és büntetendő magatartás. Mindig lassíts tócsák előtt!"
  },
  {
    id: "kul_8",
    category: "kultura",
    difficulty: "easy",
    question: "Használhatod-e a gépjármű dudáját dühünk kifejezésére vagy üdvözlésre?",
    answers: [
      "Igen, bármikor",
      "Csak esküvőn szabad",
      "Csak ismerősöknek dudálhatunk",
      "Nem, tilos."
    ],
    correctAnswer: 3,
    explanation: "A duda nem játék és nem feszültséglevezető eszköz. Csak akkor használd, ha ezzel közvetlen balesetet akadályozol meg."
  },
  {
    id: "kul_9",
    category: "kultura",
    difficulty: "medium",
    question: "Mit tegyél, ha biciklizés közben azt látod, hogy egy másik kerékpáros elesett az úton?",
    answers: [
      "Állj meg biztonságosan",
      "Nevess egyet és tekerj tovább",
      "Kerüld ki messziről",
      "Hagyd ott, majd felkel magától"
    ],
    correctAnswer: 0,
    explanation: "A bajba jutott közlekedőknek való segítségnyújtás erkölcsi és jogi kötelesség (elsősegélynyújtás kötelezettsége)."
  },
  {
    id: "kul_10",
    category: "kultura",
    difficulty: "easy",
    question: "Hogyan kell kinyitnod az autó ajtaját, ha a sofőr mögött ülsz és az út szélén parkoltok?",
    answers: [
      "Lökjük ki teljes erőből",
      "A járdához közelebbi ajtón szálljunk ki",
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
      "Agresszív támadó stílus",
      "Várható veszélyekre előre felkészülő",
      "A sávunk védelmét bármi áron"
    ],
    correctAnswer: 2,
    explanation: "A defenzív vezetés a legbiztonságosabb stílus: nem keresed a jogodat görcsösen, hanem figyelsz másokra és engedsz, ha ezzel elkerülhető a baleset."
  },
  {
    id: "kul_12",
    category: "kultura",
    difficulty: "easy",
    question: "Szabad-e hangos zenét hallgatni az autóban lehúzott ablakokkal lakott területen belül éjszaka?",
    answers: [
      "Igen, hadd hallja mindenki",
      "Csak ha jó a zene",
      "Csak hétvégén szabad",
      "Nem, tilos."
    ],
    correctAnswer: 3,
    explanation: "A hangos zene elvonja a figyelmet, gátolja a szirénák meghallását, és zavarja a környezetet. Közlekedjünk halkan, kulturáltan!"
  },
  {
    id: "kul_13",
    category: "kultura",
    difficulty: "medium",
    question: "Hogyan kell közeledni a kijelölt gyalogos-átkelőhelyhez (zebrához) autóval vagy biciklivel?",
    answers: [
      "Olyan sebességgel",
      "Gyorsítva, hogy még a gyalogos előtt átérjünk",
      "Dudálással jelezve, hogy jövünk",
      "Nincs külön szabály"
    ],
    correctAnswer: 0,
    explanation: "A zebrát mindig fokozott óvatossággal és csökkentett sebességgel kell megközelíteni, figyelve a járda szélét."
  },
  {
    id: "kul_14",
    category: "kultura",
    difficulty: "easy",
    question: "Mit kell tenned, ha vakvezető kutyával vagy fehér bottal közlekedő gyalogost látsz az úttest szélén?",
    answers: [
      "Dudálással kell figyelmeztetned, hogy jössz",
      "Meg kell állnod",
      "Kikerülöd gyorsan gázzal",
      "Figyelmen kívül hagyod"
    ],
    correctAnswer: 1,
    explanation: "A látássérült gyalogosok fehér bottal vagy vakvezető kutyával közlekednek. Számukra mindig, minden helyzetben elsőbbséget és segítséget kell adni."
  },
  {
    id: "kul_15",
    category: "kultura",
    difficulty: "medium",
    question: "Mit érdemes tenned, ha biciklizés közben egy idős gyalogos lassan halad előtted a gyalog- és kerékpárúton?",
    answers: [
      "Hangosan rákiabálsz, hogy menjen el az útból",
      "Súrolva mellette suhansz el nagy sebességgel",
      "Lassítasz, óvatos csengőszóval jelzel, és biztonságos.",
      "Meglököd hátulról"
    ],
    correctAnswer: 2,
    explanation: "Az idős emberek nem hallanak vagy reagálnak olyan gyorsan. Udvariasan és lassan kell eljárni a kikerülésükkor."
  },
  {
    id: "kul_16",
    category: "kultura",
    difficulty: "easy",
    question: "Szabad-e csúfolódni vagy mutogatni a másik autósnak/biciklisnek dühünkben?",
    answers: [
      "Igen, ha feldühít",
      "Csak ha igazam van",
      "Csak ha nem látja a rendőr",
      "Nem, tilos."
    ],
    correctAnswer: 3,
    explanation: "Az agresszió szüli az agressziót. Őrizzük meg a nyugalmunkat minden helyzetben, a higgadtság életet menthet."
  },
  {
    id: "kul_17",
    category: "kultura",
    difficulty: "hard",
    question: "Mi az a 'biztonsági folyosó' (mentősáv) az autópályán dugó esetén?",
    answers: [
      "A sávok széthúzódása a leállósáv felé",
      "Egy külön sáv a politikusoknak",
      "Ahol a gyerekek játszhatnak",
      "Nincs ilyen"
    ],
    correctAnswer: 0,
    explanation: "Ha az autópályán dugó alakul ki, a belső sávban lévők balra, a külsőben lévők jobbra húzódnak, így középen egy szabad folyosó nyílik a mentőknek."
  },
  {
    id: "kul_18",
    category: "kultura",
    difficulty: "easy",
    question: "Mit tegyen a kerékpáros a szűk kapualjból vagy sűrű bokrok mögül való kihajtáskor?",
    answers: [
      "Száguldjon ki bátran",
      "Lassítson le teljesen",
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
      "Azt, hogy otthon kell maradnunk",
      "Emlékeztető arra",
      "Hogy a szüleink aggódnak"
    ],
    correctAnswer: 2,
    explanation: "Ez az elv arra figyelmeztet, hogy az úton mindannyian emberek vagyunk, akiknek szerető családjuk van otthon. Ne siessünk mások élete árán!"
  },
  {
    id: "kul_20",
    category: "kultura",
    difficulty: "easy",
    question: "Hogyan segíthetik a gyerekek a szüleik biztonságos autóvezetését az autóban ülve?",
    answers: [
      "Hangos kiabálással, verekedéssel és a sofőr zavarásával",
      "A gombok nyomogatásával menet közben",
      "A kormány rángatásával",
      "Csendes játékkal"
    ],
    correctAnswer: 3,
    explanation: "A gyerekek sokat segíthetnek, ha nem vonják el a szülő figyelmét a vezetéstől. A sofőr zavarása komoly balesetveszélyt jelent!"
  },
];
