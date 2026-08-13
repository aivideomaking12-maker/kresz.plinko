import { Question } from "../../types";

export const groupCQuestions: Question[] = [
  // --- MIKROMOBILITÁSI ESZKÖZÖK (20 questions) ---
  {
    id: "mik_1",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mi igaz az elektromos rollerről a jelenlegi magyar szabályozás alapján?",
    answers: [
      "Minden esetben kerékpárnak minősül",
      "A KRESZ külön nem nevesíti, de járműnek minősül",
      "Minden esetben gyalogosnak minősül",
      "Minden esetben személygépkocsinak minősül"
    ],
    correctAnswer: 0,
    explanation: "A KRESZ jelenleg nem tartalmaz külön „elektromos roller” kategóriát. Az elektromos roller ugyanakkor járműnek minősül; a konkrét közlekedési és műszaki szabályok megítélésénél az eszköz jellemzői és más jogszabályok is számíthatnak."
  },
  {
    id: "mik_2",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Melyik állítás helyes az elektromos roller járdán történő használatáról?",
    answers: [
      "Minden esetben szabad, ha lassan haladunk",
      "A járdahasználat szabályait nem lehet általánosan.",
      "A gyalogosoknak minden esetben elsőbbséget kell adniuk a rollernek",
      "Járdán korlátozás nélkül használható"
    ],
    correctAnswer: 1,
    explanation: "Az elektromos roller jogi besorolása jelenleg nem egységesen, külön KRESZ-kategóriában szabályozott. Ezért nem helyes általános KRESZ-szabályként azt állítani, hogy járdán 10 km/h-val automatikusan használható."
  },
  {
    id: "mik_3",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Hány ember utazhat egyszerre egy elektromos rollerrel?",
    answers: [
      "Három ember is",
      "Két ember, ha kapaszkodnak",
      "Csak egy ember",
      "Bármennyi, ha elférnek a deszkán"
    ],
    correctAnswer: 2,
    explanation: "Az elektromos rolleren szigorúan csak egyetlen személy (a vezető) utazhat! Utast szállítani rajta tilos és rendkívül balesetveszélyes."
  },
  {
    id: "mik_4",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Mi igaz az elektromos roller vezetőjének fejvédő használatára?",
    answers: [
      "Minden e-rollernél kötelező a sisak",
      "Csak éjszaka kötelező",
      "E-rollernél soha nem kell sisak",
      "A sisak kötelezettsége az eszköz jogi."
    ],
    correctAnswer: 3,
    explanation: "Az elektromos rollerre nem létezik egyetlen, minden típusra azonos KRESZ-besorolás. A sisak kötelezettségét ezért az adott eszköz jogi kategóriája és a rá vonatkozó szabályok alapján kell megítélni."
  },
  {
    id: "mik_5",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Milyen lámpákkal kell felszerelni az elektromos rollert sötétben való közlekedéshez?",
    answers: [
      "Egy első fehér és egy hátsó.",
      "Nem kell rá lámpa",
      "Kék villogóval",
      "Zöld fénnyel"
    ],
    correctAnswer: 0,
    explanation: "Ugyanúgy, mint a biciklinél, az e-rolleren is kötelező az első fehér és a hátsó piros lámpa sötétben vagy rossz látási viszonyok között."
  },
  {
    id: "mik_6",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Szabad-e kézben tartott telefonnal e-rollert vezetni?",
    answers: [
      "Igen, ha csak az egyik kezünkkel fogjuk a kormányt",
      "Nem, tilos.",
      "Csak videózásra szabad",
      "Csak ha lassan megyünk"
    ],
    correctAnswer: 1,
    explanation: "Az e-roller kerek anyaga és mérete miatt nagyon érzékeny az úthibákra. Mindkét kézzel fogni kell a kormányt, különben azonnal elesünk egy kis bukkanónál is."
  },
  {
    id: "mik_7",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Mi az az e-bike (pedelec) a KRESZ szerint?",
    answers: [
      "Egy elektromos motorbicikli",
      "Egy akkumulátoros roller pótüléssel",
      "Olyan elektromos rásegítésű kerékpár",
      "Egy önvezető bicikli"
    ],
    correctAnswer: 2,
    explanation: "A pedelec olyan kerékpár, amelynél az elektromos motor csak pedálozás közben segít rá a haladásra (max 25 km/h-ig). Ez kerékpárnak minősül."
  },
  {
    id: "mik_8",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Hol kell hagynunk a bérelt e-rollert a használat után?",
    answers: [
      "Az út vagy a zebra közepén eldöntve",
      "Bárhol otthagyhatjuk",
      "Be kell dobni a bokorba",
      "Kijelölt mikromobilitási pontokon"
    ],
    correctAnswer: 3,
    explanation: "A rollereket kulturáltan, a kijelölt pontokon kell leparkolni. A szanaszét hagyott rollerek akadályozzák a babakocsisokat és a vakokat."
  },
  {
    id: "mik_9",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Szabad-e gördeszkával vagy hagyományos rollerrel (nem elektromossal) az úttesten haladni?",
    answers: [
      "Nem, tilos.",
      "Igen, ha nincs autó",
      "Csak autópályán",
      "Igen, ha nagyon gyorsan megyünk"
    ],
    correctAnswer: 0,
    explanation: "A lábbal hajtós roller, gördeszka és görkorcsolya gyalogosnak minősül, így ezekkel a járdán kell haladni, a gyalogosok zavarása nélkül."
  },
  {
    id: "mik_10",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Milyen sebességhatár vonatkozik az elektromos rollerre kerékpárúton a jelenlegi KRESZ alapján?",
    answers: [
      "Egységesen 10 km/h",
      "Egységesen 25 km/h",
      "Egységesen 40 km/h",
      "Nincs külön, általános e-roller-sebességhatár a KRESZ-ben"
    ],
    correctAnswer: 1,
    explanation: "A KRESZ jelenleg nem határoz meg külön, általános 25 vagy 40 km/h-s sebességhatárt az elektromos rollerekre."
  },
  {
    id: "mik_11",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mit kell tudni az e-roller gyermek általi használatáról?",
    answers: [
      "Bármely életkorban szabad közúton használni",
      "Csak szülővel a kormány mögött szabad",
      "A KRESZ nem állapít meg külön",
      "Csak csengővel felszerelve szabad"
    ],
    correctAnswer: 2,
    explanation: "Az elektromos rollerre nincs a KRESZ-ben külön, minden típusra alkalmazható egységes korhatár-szabály. A közúti használat megítélésénél az eszköz jogi besorolása is lényeges."
  },
  {
    id: "mik_12",
    category: "mikromobilitas",
    difficulty: "hard",
    question: "Mit lehet megállapítani pusztán abból, hogy egy elektromos eszköz gázkarral és 35 km/h-s önálló haladási képességgel rendelkezik?",
    answers: [
      "Biztosan kerékpár",
      "Önmagában ezekből az adatokból nem állapítható meg minden jogi besorolási kérdés",
      "Gyalogosnak minősül",
      "Biztosan segédmotoros kerékpár"
    ],
    correctAnswer: 3,
    explanation: "A jármű kategóriáját nem egyetlen adat, hanem az alkalmazandó jogszabályok és a jármű műszaki jellemzői alapján kell megítélni."
  },
  {
    id: "mik_13",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Miért fontos a lassítás az e-rollerrel a kanyarok előtt?",
    answers: [
      "Mert a kis kerekek miatt a.",
      "Mert lemerül a gép",
      "Mert elszédülünk",
      "Nem kell lassítani"
    ],
    correctAnswer: 0,
    explanation: "Az e-roller kis kerekei rosszabbul tapadnak a kanyarokban. Ha túl gyorsan kanyarodunk, a kerekek könnyen kicsúsznak alólunk."
  },
  {
    id: "mik_14",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Szabad-e e-rollerrel vagy e-bike-kal ittasan (alkohol hatása alatt) közlekedni?",
    answers: [
      "Igen, mert ez nem autó",
      "Nem, tilos.",
      "Csak akkor, ha a kerékpárúton megyünk",
      "Csak sör fogyasztása után"
    ],
    correctAnswer: 1,
    explanation: "Az alkohol rontja a reflexeket és az egyensúlyérzéket. Ittasan rollerezni vagy biciklizni is szigorúan tilos és balesetveszélyes."
  },
  {
    id: "mik_15",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Milyen cipőben a legbiztonságosabb e-rollerezni vagy kerékpározni?",
    answers: [
      "Papucsban",
      "Magas sarkú cipőben",
      "Zárt, sportos cipőben",
      "Mezítláb"
    ],
    correctAnswer: 2,
    explanation: "A zárt sportcipő stabilan tartja a lábat a roller deszkáján vagy a bicikli pedálján, elkerülve a lecsúszást."
  },
  {
    id: "mik_16",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Mit kell tenni az e-rollerrel, ha gyalogos zónába (sétálóutcába) érünk, ahol tábla tiltja a járműforgalmat?",
    answers: [
      "Gyorsan áttekerünk rajta",
      "Kikerüljük a házakat",
      "Folyamatosan csöngetünk",
      "Le kell szállni és gyalogosan tolni."
    ],
    correctAnswer: 3,
    explanation: "A sétálóutcákban a gyalogosok biztonsága az első. Ha tilos a járműforgalom, az e-rollert is csak tolva szabad vinni."
  },
  {
    id: "mik_17",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mit jelez a roller hátsó sárvédőjén lévő piros prizma?",
    answers: [
      "A roller éjszakai láthatóságát segíti",
      "Hogy szép legyen",
      "Hogy ne fröcsköljön a víz",
      "Semmit"
    ],
    correctAnswer: 0,
    explanation: "A hátsó piros fényvisszaverő prizma rendkívül fontos passzív biztonsági eszköz, amely láthatóvá tesz minket hátulról sötétben is."
  },
  {
    id: "mik_18",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Szabad-e e-rollerrel vagy kerékpárral kapaszkodni egy haladó gépjárműbe (pl. autóba vagy traktorba) vontatás céljából?",
    answers: [
      "Igen, ha fáradtak vagyunk",
      "Nem, ez életveszélyes és tilos",
      "Csak ha ismeri a sofőrünket",
      "Csak kerékpárúton"
    ],
    correctAnswer: 1,
    explanation: "Haladó járműbe kapaszkodni tilos! Egy hirtelen fékezés vagy kanyarodás miatt azonnal az autó alá eshetünk."
  },
  {
    id: "mik_19",
    category: "mikromobilitas",
    difficulty: "hard",
    question: "Melyik állítás helyes az elektromos roller járdán történő sebességéről?",
    answers: [
      "A KRESZ minden e-rollerre 10 km/h-s felső határt ír elő",
      "A KRESZ minden e-rollerre 25 km/h-s felső határt ír elő",
      "A KRESZ minden e-rollerre 20 km/h-s felső határt ír elő",
      "Nincs egységes, külön e-rolleres járdasebesség-határ a KRESZ-ben"
    ],
    correctAnswer: 2,
    explanation: "A KRESZ jelenleg nem tartalmaz külön, minden elektromos rollerre alkalmazható járdai sebességhatárt."
  },
  {
    id: "mik_20",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mi a teendőnk, ha e-rollerrel elütünk egy gyalogost a járdán?",
    answers: [
      "Gyorsan elmenekülünk a helyszínről",
      "Eldobjuk a rollert a folyóba",
      "Rákiabálunk, hogy miért nem figyelt",
      "Megállunk, segítséget nyújtunk, bocsánatot kérünk, és."
    ],
    correctAnswer: 3,
    explanation: "Baleset okozása vagy részesei esetén kötelező azonnal megállni, segíteni és szükség esetén hívni a segélyhívót (112)."
  },
  // --- HALADÁS AZ ÚTON (20 questions) ---
  {
    id: "hal_1",
    category: "haladas",
    difficulty: "easy",
    question: "Melyik oldalon kell haladnunk a járművekkel (autó, bicikli) Magyarországon?",
    answers: [
      "A jobb oldalon",
      "A bal oldalon",
      "Az út közepén",
      "Ahol kevesebb a gödör"
    ],
    correctAnswer: 0,
    explanation: "Magyarországon jobboldali közlekedés van érvényben, így minden járművel az úttest jobb széléhez közel kell haladni."
  },
  {
    id: "hal_2",
    category: "haladas",
    difficulty: "easy",
    question: "Hogyan kell a kerékpárosnak kikerülnie az úttest szélén álló autót?",
    answers: [
      "Megállás nélkül, szorosan elsuhanva mellette",
      "Hátrapillantással ellenőrizni a forgalmat",
      "Mögötte elhaladva a járdán",
      "Hangosan dudálva"
    ],
    correctAnswer: 1,
    explanation: "A parkoló autók kikerülése előtt mindig hátra kell nézni, irányjelezni kell, és akkora távolságot kell tartani, hogy egy hirtelen kinyíló autóajtó se okozzon balesetet."
  },
  {
    id: "hal_3",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tenned, ha az úttest szélén haladsz és egy busz indexel, hogy elindulna a buszmegállóból lakott területen?",
    answers: [
      "Gyorsan megelőzöd",
      "Figyelmen kívül hagyod",
      "Segítened kell a busz elindulását",
      "Dudálsz, hogy álljon meg"
    ],
    correctAnswer: 2,
    explanation: "Lakott területen belül a járművek kötelesek segíteni a megállóból elindulni szándékozó menetrend szerinti autóbusz elindulását."
  },
  {
    id: "hal_4",
    category: "haladas",
    difficulty: "medium",
    question: "Mit jelent a követési távolság megtartása az úton?",
    answers: [
      "Azt, hogy minél közelebb kell menni az előttünk lévőhöz, hogy lássuk",
      "A GPS távolságot",
      "Hogy mindig el kell engedni a mögöttünk jövőt",
      "Olyan távolságot kell tartani az előttünk."
    ],
    correctAnswer: 3,
    explanation: "A követési távolság azért fontos, hogy ha az előttünk lévő hirtelen satuféket nyom, legyen elég időnk és fékutunk megállni ütközés nélkül."
  },
  {
    id: "hal_5",
    category: "haladas",
    difficulty: "easy",
    question: "Szabad-e segédmotoros kerékpárral kerékpárúton közlekedni?",
    answers: [
      "Főszabály szerint nem",
      "Igen, mert kétkerekű",
      "Csak éjszaka",
      "Igen, ha nincs más jármű"
    ],
    correctAnswer: 0,
    explanation: "A segédmotoros kerékpárra a kerékpárosokra vonatkozó szabályok egy része alkalmazandó, de kerékpárúton való közlekedése nem azonos a kerékpár használatával; a konkrét útvonal és jelzések szabályait kell figyelembe venni."
  },
  {
    id: "hal_6",
    category: "haladas",
    difficulty: "medium",
    question: "Mit kell tennie a kerékpárosnak, ha az úton 'Kerékpársáv' (sárga vonallal leválasztott sáv az úttesten) van kijelölve?",
    answers: [
      "Haladhat az autók között is bárhol",
      "Köteles a kerékpársávot használni a haladásra",
      "A járdán kell mennie inkább",
      "Nincs jelentősége"
    ],
    correctAnswer: 1,
    explanation: "A kijelölt kerékpársáv a kerékpáros közlekedésre kijelölt útfelület. A kerékpárosnak főszabály szerint ezt kell használnia, kivéve, ha a közúti jelzések vagy az adott helyzet másként rendelkezik."
  },
  {
    id: "hal_7",
    category: "haladas",
    difficulty: "easy",
    question: "Melyik irányból kell előzni a szabályok szerint az úton (főszabályként)?",
    answers: [
      "Jobbról",
      "Amelyik oldalon üresebb az út",
      "Balról",
      "Középen átrepülve"
    ],
    correctAnswer: 2,
    explanation: "Főszabály szerint előzni csak balról szabad. Jobbról előzni szigorúan tilos és rendkívül balesetveszélyes."
  },
  {
    id: "hal_8",
    category: "haladas",
    difficulty: "medium",
    question: "Szabad-e kerékpárral egyirányú utcába a forgalommal szemben behajtani?",
    answers: [
      "Igen, mert a bicikli kicsi",
      "Csak nappal",
      "Bármikor szabad, ha óvatosak vagyunk",
      "Alapvetően tilos"
    ],
    correctAnswer: 3,
    explanation: "Egyirányú utcába szembe behajtani tilos, kivéve ha a tábla alatt ott van a 'Kivéve kerékpár' felirat vagy piktogram. Ekkor is szorosan az út szélén kell haladni."
  },
  {
    id: "hal_9",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tennie a járművezetőnek, ha a mögötte haladó autó megkülönböztető jelzéseket használ (villog és szirénázik)?",
    answers: [
      "Lehúzódással, lassítással, vagy szükség esetén megállással.",
      "Gyorsítani kell, hogy lehagyja",
      "Hirtelen le kell fékezni",
      "Nem kell tenni semmit"
    ],
    correctAnswer: 0,
    explanation: "A szirénázó kocsik elől mindig azonnal, biztonságosan le kell húzódni, hogy mielőbb elhaladhassanak az életet menteni."
  },
  {
    id: "hal_10",
    category: "haladas",
    difficulty: "medium",
    question: "Hová kell a járművezetőnek besorolnia kanyarodás előtt?",
    answers: [
      "Nem számít, honnan kanyarodik",
      "Jobbra kanyarodáskor jobbra",
      "Mindig az úttest jobb szélére kell húzódni",
      "A kereszteződésben keresztbe kell állni"
    ],
    correctAnswer: 1,
    explanation: "Kanyarodás előtt a menetirány és az út kialakítása szerint kell a megfelelő helyre besorolni, és az irányváltoztatást jelezni kell."
  },
  {
    id: "hal_11",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tenned, ha az úton 'Útszűkület' táblát látsz?",
    answers: [
      "Gyorsítani kell, hogy te érj oda először",
      "Meg kell állni és visszafordulni",
      "Lassítani kell, és felkészülni az elsőbbségadásra.",
      "Felesleges figyelni rá"
    ],
    correctAnswer: 2,
    explanation: "Útszűkületnél az út elkeskenyedik. Ha a te oldaladon van az akadály vagy szűkület, neked kell elengedned a szembejövőt."
  },
  {
    id: "hal_12",
    category: "haladas",
    difficulty: "medium",
    question: "Melyik állítás igaz a kerékpáros kereszteződésben történő előzésére?",
    answers: [
      "Minden kereszteződésben szabad előzni",
      "Csak álló személygépkocsit szabad előzni",
      "Csak zöld lámpánál szabad előzni",
      "Kereszteződésben az előzés főszabály szerint tilos"
    ],
    correctAnswer: 3,
    explanation: "A KRESZ a kereszteződésekben általános előzési tilalmat állapít meg, ugyanakkor meghatározott esetekben kivételeket is tartalmaz."
  },
  {
    id: "hal_13",
    category: "haladas",
    difficulty: "easy",
    question: "Mi a teendőnk, ha az úton gödröt vagy olajfoltot veszünk észre?",
    answers: [
      "Biztonságos lassítás és hátrapillantás után óvatosan.",
      "Keresztülhajtunk rajta gyorsan",
      "Hirtelen rarántjuk a kormányt",
      "Lehunyjuk a szemünket"
    ],
    correctAnswer: 0,
    explanation: "Az úthibákat óvatosan, hátrapillantás után szabad kikerülni. A hirtelen kormányrántás esést vagy ütközést okozhat a mellettünk haladóval."
  },
  {
    id: "hal_14",
    category: "haladas",
    difficulty: "hard",
    question: "Mi lehet biztonságos megoldás kerékpárral balra kanyarodáskor forgalmas, többsávos úton?",
    answers: [
      "Közvetlenül keresztezzük a sávokat körültekintés nélkül",
      "Szükség esetén közvetett kanyarodással",
      "Felmegyünk a járdára és gyorsan áthajtunk",
      "Kerékpárral soha nem szabad balra kanyarodni"
    ],
    correctAnswer: 1,
    explanation: "Bizonyos útviszonyoknál, illetve a KRESZ-ben meghatározott esetekben a kerékpáros közvetett kanyarodással, a kerékpárról leszállva és azt tolva haladhat tovább."
  },
  {
    id: "hal_15",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tenned, ha az úton sűrű köd van és alig látsz?",
    answers: [
      "Kapcsold be a távolsági fényszórót és száguldj",
      "Állj meg az út közepén",
      "Csökkentsd a sebességedet",
      "Kapcsold ki a lámpákat, hogy ne zavard a ködöt"
    ],
    correctAnswer: 2,
    explanation: "Ködben nagyon rosszak a látási viszonyok. Lassabban kell menni, tompított fényszórót kell használni és nagy követési távolságot kell tartani."
  },
  {
    id: "hal_16",
    category: "haladas",
    difficulty: "medium",
    question: "Mit jelez a fehér színű záróvonal az úttest szélén (útpadka mellett)?",
    answers: [
      "Hogy ott tilos megállni",
      "Hogy ott sín fut",
      "Zebra kezdetét",
      "Az úttest szélét jelzi"
    ],
    correctAnswer: 3,
    explanation: "Az úttest szélét jelző vonal (szegélyvonal) átléphető megállás vagy az útról való lehúzódás céljából."
  },
  {
    id: "hal_17",
    category: "haladas",
    difficulty: "easy",
    question: "Mit jelent a villogó irányjelző (index) használata kanyarodás előtt?",
    answers: [
      "Egyértelmű jelzés a többi közlekedőnek arról",
      "Hogy szép sárga lámpánk van",
      "Azt, hogy sietünk",
      "Hogy elromlott az autó"
    ],
    correctAnswer: 0,
    explanation: "Az indexelés kötelező jelzés, amellyel tudatjuk a többi sofőrrel és gyalogossal, hogy merre fogunk kanyarodni."
  },
  {
    id: "hal_18",
    category: "haladas",
    difficulty: "medium",
    question: "Mi az a 'kapubejáró' a KRESZ haladási szabályai szerint?",
    answers: [
      "Egy szép kapu",
      "Olyan magánút vagy ingatlan kijárat",
      "Egy új sáv",
      "Ahol ingyen lehet parkolni"
    ],
    correctAnswer: 1,
    explanation: "A kapubejáró nem minősül kereszteződésnek. Az onnan kihajtó járműnek nincs elsőbbsége a főúton haladókkal szemben."
  },
  {
    id: "hal_19",
    category: "haladas",
    difficulty: "hard",
    question: "Ha kerékpárosként lakott területen kívül haladsz egy keskeny úton, és egy nagy teherautó akar megelőzni, mit érdemes tenned a biztonságodért?",
    answers: [
      "Középre húzódni, hogy ne tudjon megelőzni",
      "Gyorsítani és versenyezni vele",
      "Lehúzódni a jobb szélre",
      "Kiabálni a sofőrnek"
    ],
    correctAnswer: 2,
    explanation: "A biztonság az első. Ha keskeny az út, érdemes félrehúzódni az útpadkára és elengedni a nagy teherautót, elkerülve a menetszél miatti esést."
  },
  {
    id: "hal_20",
    category: "haladas",
    difficulty: "easy",
    question: "Miért nem szabad hirtelen, indokolatlanul fékezni az úton?",
    answers: [
      "Mert kopik a gumi",
      "Nyugodtan szabad fékezni bármikor",
      "Mert lemerül az akkumulátor",
      "Mert a mögöttünk haladó járműnek nem."
    ],
    correctAnswer: 3,
    explanation: "Indokolatlan satuféket nyomni tilos és veszélyes, mert láncreakciós ráfutásos balesetet okozhatunk az úton."
  },
  // --- KRESZ TÁBLÁK (20 questions) ---
  {
    id: "tab_1",
    category: "tablak",
    difficulty: "easy",
    question: "Milyen alakú és színű az 'Állj! Elsőbbségadás kötelező' (STOP) tábla?",
    answers: [
      "Nyolcszögletű, piros-fehér STOP feliratú tábla",
      "Kerek, piros szegélyű tábla",
      "Háromszög alakú, csúcsára állított tábla",
      "Kék négyzet alakú tábla"
    ],
    correctAnswer: 0,
    explanation: "A STOP tábla az egyetlen nyolcszögletű tábla a KRESZ-ben, hogy hátulról vagy hóval borítva is azonnal felismerhető legyen."
  },
  {
    id: "tab_2",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a piros körben kék alapon piros X-szel áthúzott tábla?",
    answers: [
      "Várakozni tilos",
      "Megállni tilos",
      "Főútvonal",
      "Autópálya vége"
    ],
    correctAnswer: 1,
    explanation: "A piros körben lévő kék alapon elhelyezett piros X jelzi a 'Megállni tilos' parancsot."
  },
  {
    id: "tab_3",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a piros körben kék alapon egyetlen átlós piros vonallal ellátott tábla?",
    answers: [
      "Megállni tilos",
      "Behajtani tilos",
      "Várakozni (parkolni) tilos",
      "Kötelező haladási irány"
    ],
    correctAnswer: 2,
    explanation: "A kék alapon egyetlen átlós piros vonallal rendelkező kerek tábla jelöli a 'Várakozni tilos' tilalmat."
  },
  {
    id: "tab_4",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent az a kerek, piros keretű tábla, aminek a közepe teljesen fehér?",
    answers: [
      "Üres utat jelöl",
      "Gyalogosoknak tilos az átkelés",
      "Behajtani szabad",
      "Minden jármű mindkét irányból való behajtása."
    ],
    correctAnswer: 3,
    explanation: "A fehér közepű piros kerek tábla azt jelzi, hogy az utcába mindkét irányból tilos behajtani minden járművel."
  },
  {
    id: "tab_5",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent az a kerek piros tábla, aminek a közepén egy vízszintes fehér csík van?",
    answers: [
      "Egyirányú utca bejárata",
      "Mindkét irányból behajtani tilos",
      "Megállni tilos",
      "Gyalogút"
    ],
    correctAnswer: 0,
    explanation: "Ez a klasszikus 'Behajtani tilos' tábla egyirányú utcák végén. Ebbe az irányba tilos behajtani, de a túloldalról jöhetnek járművek."
  },
  {
    id: "tab_6",
    category: "tablak",
    difficulty: "easy",
    question: "Mit ábrázol a 'Gyalogosok' veszélyt jelző tábla (piros keretű háromszög)?",
    answers: [
      "Egy biciklit",
      "Egy sétáló gyalogos alakot",
      "Két futó gyermeket (iskola, óvoda veszélyt jelző tábla)",
      "Egy zebrát"
    ],
    correctAnswer: 1,
    explanation: "A piros háromszögben sétáló gyalogos figura arra figyelmeztet, hogy az úton gyalogosok megjelenésére kell számítani."
  },
  {
    id: "tab_7",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a kerek, kék alapon fehér kerékpárt ábrázoló tábla?",
    answers: [
      "Kerékpározni tilos",
      "Kerékpárüzlet",
      "Kerékpárút",
      "Veszélyes útszakasz"
    ],
    correctAnswer: 2,
    explanation: "A kerek kék tábla fehér biciklivel a kijelölt kerékpárutat jelöli, ahol a biciklisek biztonságosan tekerhetnek."
  },
  {
    id: "tab_8",
    category: "tablak",
    difficulty: "medium",
    question: "Mit ábrázol és mit jelent az 'Iskola, gyermekek' veszélyt jelző tábla?",
    answers: [
      "Egy könyvet ábrázol",
      "Hogy itt szabad játszani az úton",
      "Egy játszóteret ábrázol",
      "Piros háromszögben két futó gyereket ábrázol"
    ],
    correctAnswer: 3,
    explanation: "A piros keretű háromszögben lévő két futó gyerek figura figyelmeztet az iskola vagy óvoda közelségére, ahol fokozottan kell lassítani."
  },
  {
    id: "tab_9",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a kék, kerek tábla, amelyen gyalogos és kerékpár piktogramja látható, köztük elválasztó vonallal?",
    answers: [
      "Gyalog- és kerékpárutat",
      "Sétálóutcát",
      "Kerékpárral behajtani tilos",
      "Autópályát"
    ],
    correctAnswer: 0,
    explanation: "A jelzőtábla a gyalog- és kerékpárutat jelzi; az elválasztó vonal az elkülönített gyalogos- és kerékpáros részt mutatja."
  },
  {
    id: "tab_10",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a kerek, fehér tábla piros kerettel, benne egy fekete kerékpárral?",
    answers: [
      "Kerékpárút",
      "Kerékpárral behajtani tilos",
      "Bicikli kölcsönző",
      "Ajánlott kerékpáros útvonal"
    ],
    correctAnswer: 1,
    explanation: "A piros körben lévő fekete bicikli ábra azt jelzi, hogy az útra kerékpárral behajtani szigorúan tilos."
  },
  {
    id: "tab_11",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a kék alapon fehér P betűt ábrázoló négyszögletű tábla?",
    answers: [
      "Megállni tilos",
      "Rendőrség",
      "Várakozóhely, ahol szabályosan szabad parkolni",
      "Pékség"
    ],
    correctAnswer: 2,
    explanation: "A kék négyszögletes tábla a fehér 'P' betűvel a szabályos parkolóhelyet (várakozóhelyet) jelöli."
  },
  {
    id: "tab_12",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a piros keretű háromszögben lévő felkiáltójel tábla?",
    answers: [
      "Hogy kiabálni kell",
      "Hogy meg kell állni",
      "Az út végét jelzi",
      "Egyéb veszély, amelyet más tábla nem."
    ],
    correctAnswer: 3,
    explanation: "A felkiáltójel tábla 'Egyéb veszély'-re figyelmeztet (pl. omlás, balesetveszély, különleges útviszonyok), amit más táblával nem tudtak jelölni."
  },
  {
    id: "tab_13",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a sárga alapú háromszög piros kerettel, benne egy fekete villamossal?",
    answers: [
      "Villamospálya kereszteződésének veszélyére figyelmeztető táblát",
      "Villamosmegállót",
      "Villamossal behajtani tilos táblát",
      "Vasúti átjárót jelző táblát"
    ],
    correctAnswer: 0,
    explanation: "Ez a tábla arra figyelmeztet, hogy az úttestet villamospálya keresztezi, és a villamosnak általában elsőbbsége lesz."
  },
  {
    id: "tab_14",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent az a tábla, ami kék alapon fehér házat, játszó gyereket és autót ábrázol?",
    answers: [
      "Autópálya",
      "Lakó-pihenő övezet",
      "Iskolaövezet",
      "Kempinghely"
    ],
    correctAnswer: 1,
    explanation: "A Lakó-pihenő övezet tábla nagyon barátságos: a gyerekek az úttesten is játszhatnak, az autók pedig csak nagyon lassan (max 20 km/h) mehetnek."
  },
  {
    id: "tab_15",
    category: "tablak",
    difficulty: "hard",
    question: "Mit jelent a piros keretű háromszögben lévő fekete mozdony vagy fénysorompó ábra?",
    answers: [
      "Hogy itt lehet vonatjegyet venni",
      "Vasútállomást",
      "Vasúti átjáró közeledik",
      "Hogy a vonatnak kell megállnia"
    ],
    correctAnswer: 2,
    explanation: "A gőzmozdonyt vagy sorompót ábrázoló piros háromszög veszélytábla a vasúti átjáró közeledtére hívja fel a figyelmet."
  },
  {
    id: "tab_16",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a kerek kék tábla, benne egy fehér, jobbra mutató nyíllal?",
    answers: [
      "Egyirányú utca",
      "Jobb oldalon parkoló van",
      "Tilos jobbra kanyarodni",
      "Csak jobbra szabad kanyarodni"
    ],
    correctAnswer: 3,
    explanation: "A kék kerek táblák fehér nyíllal a Kötelező haladási irányt jelölik. Csak a nyíl által mutatott irányba szabad továbbhaladni."
  },
  {
    id: "tab_17",
    category: "tablak",
    difficulty: "easy",
    question: "Milyen táblát látsz a körforgalom előtt?",
    answers: [
      "Kék körben három fehér",
      "Egy piros kört",
      "Egy kék négyzetet",
      "STOP táblát mindig"
    ],
    correctAnswer: 0,
    explanation: "A körforgalmat jelző kék táblán három fehér nyíl mutatja a kötelező haladási irányt a körforgalomban (óramutató járásával ellentétesen)."
  },
  {
    id: "tab_18",
    category: "tablak",
    difficulty: "hard",
    question: "Mit jelent a kék alapon fehér autóbuszt ábrázoló négyszögletű tábla?",
    answers: [
      "Hogy itt buszt lehet vásárolni",
      "Autóbusz-megállóhelyet jelöl",
      "Autóbusz sávot",
      "Hogy csak buszok járhatnak az úton"
    ],
    correctAnswer: 1,
    explanation: "A kék négyszögletes tábla a fehér busz ábrával a menetrend szerinti autóbusz megállóhelyét jelöli."
  },
  {
    id: "tab_19",
    category: "tablak",
    difficulty: "medium",
    question: "Melyik tábla jelzi a lakott terület (város vagy falu) kezdetét?",
    answers: [
      "Egy piros háromszög",
      "Egy kék kör",
      "Fehér alapon fekete házak sziluettje",
      "Nincs ilyen tábla"
    ],
    correctAnswer: 2,
    explanation: "A település nevét mutató fehér tábla jelzi a lakott terület kezdetét, ami egyben azt is jelenti, hogy életbe lép az 50 km/h-s sebességkorlátozás."
  },
  {
    id: "tab_20",
    category: "tablak",
    difficulty: "easy",
    question: "Mit kell tenned, ha az út szélén 'Gyalogos-átkelőhely' (kék négyzetben fehér háromszög, rajta zebrán sétáló ember) táblát látsz?",
    answers: [
      "Gyorsítani kell, hogy átérj a zebra előtt",
      "Biciklivel felmenni a járdára",
      "Dudálni folyamatosan",
      "Lassítani kell, és felkészülni arra, hogy."
    ],
    correctAnswer: 3,
    explanation: "Ez a tábla a kijelölt gyalogos-átkelőhelyet jelzi. Arra inti a sofőröket, hogy lassítsanak és adják meg az elsőbbséget a gyalogosoknak."
  },
];
