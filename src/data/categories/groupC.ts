import { Question } from "../../types";

export const groupCQuestions: Question[] = [
  // --- MIKROMOBILITÁSI ESZKÖZÖK (20 questions) ---
  {
    id: "mik_1",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Milyen eszköznek számít az elektromos roller (e-roller) a jelenlegi szabályozás alapján, ha kis teljesítményű (max 25 km/h)?",
    answers: [
      "Gyalogosnak",
      "Hasonló szabályok vonatkoznak rá, mint a kerékpárra",
      "Személygépkocsinak",
      "Játékszernek, bárhol használható korlátlanul"
    ],
    correctAnswer: 1,
    explanation: "A kis teljesítményű (legfeljebb 25 km/h végsebességű) elektromos rollerekre alapvetően a kerékpáros közlekedés szabályai érvényesek."
  },
  {
    id: "mik_2",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Szabad-e elektromos rollerrel a járdán száguldozni?",
    answers: [
      "Igen, ha sietünk",
      "Nem, a járdán alapvetően tilos e-rollerrel közlekedni (kivéve ha az út alkalmatlan, de akkor is csak lépésben, max 10 km/h-val)",
      "Igen, a gyalogosoknak el kell ugraniuk előlünk",
      "Csak éjszaka"
    ],
    correctAnswer: 1,
    explanation: "Az e-rollerrel is az úttesten, kerékpárúton vagy kerékpársávban kell haladni. Járdán csak kivételes esetben, legfeljebb 10 km/h-val szabad menni."
  },
  {
    id: "mik_3",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Hány ember utazhat egyszerre egy elektromos rollerrel?",
    answers: ["Csak egy ember", "Két ember, ha kapaszkodnak", "Három ember is", "Bármennyi, ha elférnek a deszkán"],
    correctAnswer: 0,
    explanation: "Az elektromos rolleren szigorúan csak egyetlen személy (a vezető) utazhat! Utast szállítani rajta tilos és rendkívül balesetveszélyes."
  },
  {
    id: "mik_4",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Kötelező-e a bukósisak viselése nagy teljesítményű (25 km/h feletti sebességre képes) e-roller vezetése közben?",
    answers: [
      "Nem, felesleges",
      "Igen, kötelező a motoros vagy kerékpáros fejvédő sisak viselése",
      "Csak lányoknak",
      "Csak sötétben"
    ],
    correctAnswer: 1,
    explanation: "A gyorsabb és nehezebb elektromos rollerek és e-bike-ok használatakor a bukósisak viselése kötelező a súlyos fejsérülések elkerülése érdekében."
  },
  {
    id: "mik_5",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Milyen lámpákkal kell felszerelni az elektromos rollert sötétben való közlekedéshez?",
    answers: [
      "Nem kell rá lámpa",
      "Egy első fehér és egy hátsó piros lámpával, valamint fényvisszaverőkkel",
      "Kék villogóval",
      "Zöld fénnyel"
    ],
    correctAnswer: 1,
    explanation: "Ugyanúgy, mint a biciklinél, az e-rolleren is kötelező az első fehér és a hátsó piros lámpa sötétben vagy rossz látási viszonyok között."
  },
  {
    id: "mik_6",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Szabad-e kézben tartott telefonnal e-rollert vezetni?",
    answers: [
      "Igen, ha csak az egyik kezünkkel fogjuk a kormányt",
      "Nem, az e-rolleren mindkét kézzel fogni kell a kormányt a stabilitás miatt, telefonozni tilos!",
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
      "Olyan elektromos rásegítésű kerékpár, amelynél a motor csak akkor segít, ha tekerjük a pedált",
      "Egy akkumulátoros roller pótüléssel",
      "Egy önvezető bicikli"
    ],
    correctAnswer: 1,
    explanation: "A pedelec olyan kerékpár, amelynél az elektromos motor csak pedálozás közben segít rá a haladásra (max 25 km/h-ig). Ez kerékpárnak minősül."
  },
  {
    id: "mik_8",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Hol kell hagynunk a bérelt e-rollert a használat után?",
    answers: [
      "Az út vagy a zebra közepén eldöntve",
      "Kijelölt mikromobilitási pontokon (parkolókban), vagy a járdán úgy, hogy ne akadályozza a gyalogosokat",
      "Be kell dobni a bokorba",
      "Bárhol otthagyhatjuk"
    ],
    correctAnswer: 1,
    explanation: "A rollereket kulturáltan, a kijelölt pontokon kell leparkolni. A szanaszét hagyott rollerek akadályozzák a babakocsisokat és a vakokat."
  },
  {
    id: "mik_9",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Szabad-e gördeszkával vagy hagyományos rollerrel (nem elektromossal) az úttesten haladni?",
    answers: [
      "Igen, ha nincs autó",
      "Nem, a hagyományos gördeszka, roller és görkorcsolya gyalogos sporteszköz, csak járdán használható",
      "Csak autópályán",
      "Igen, ha nagyon gyorsan megyünk"
    ],
    correctAnswer: 1,
    explanation: "A lábbal hajtós roller, gördeszka és görkorcsolya gyalogosnak minősül, így ezekkel a járdán kell haladni, a gyalogosok zavarása nélkül."
  },
  {
    id: "mik_10",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Mennyi az e-roller maximális megengedett sebessége kerékpárúton haladva?",
    answers: ["10 km/h", "25 km/h", "40 km/h", "Nincs korlátozás"],
    correctAnswer: 1,
    explanation: "Az e-rollerekre vonatkozó ajánlott maximális sebesség kerékpárúton és egyéb felületeken is legfeljebb 25 km/h."
  },
  {
    id: "mik_11",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Használhatja-e az e-rollert gyermek egyedül forgalmas úton?",
    answers: [
      "Igen, bármilyen korban",
      "Nem, gyermekeknek e-roller használata forgalmas utakon nem ajánlott és bizonyos kor alatt tilos",
      "Csak szülővel a kormányon",
      "Csak ha van rajta csengő"
    ],
    correctAnswer: 1,
    explanation: "Az elektromos roller irányítása nagy egyensúlyérzéket igényel. Fiatal gyermekeknek a forgalomban való rollerezés rendkívül veszélyes."
  },
  {
    id: "mik_12",
    category: "mikromobilitas",
    difficulty: "hard",
    question: "Ha egy elektromos eszköz gázkarral rendelkezik és pedálozás nélkül is képes önállóan 35 km/h sebességgel haladni, minek minősül?",
    answers: ["Kerékpárnak", "Segédmotoros kerékpárnak (moped)", "Gyalogosnak", "E-rollernek"],
    correctAnswer: 1,
    explanation: "Az olyan kétkerekű elektromos jármű, amely pedálozás nélkül is gyorsan halad, segédmotoros kerékpárnak minősül. Vezetéséhez jogosítvány és bukósisak szükséges!"
  },
  {
    id: "mik_13",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Miért fontos a lassítás az e-rollerrel a kanyarok előtt?",
    answers: [
      "Mert lemerül a gép",
      "Mert a kis kerekek miatt a roller könnyen megcsúszhat és eleshetünk a kanyarban",
      "Mert elszédülünk",
      "Nem kell lassítani"
    ],
    correctAnswer: 1,
    explanation: "Az e-roller kis kerekei rosszabbul tapadnak a kanyarokban. Ha túl gyorsan kanyarodunk, a kerekek könnyen kicsúsznak alólunk."
  },
  {
    id: "mik_14",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Szabad-e e-rollerrel vagy e-bike-kal ittasan (alkohol hatása alatt) közlekedni?",
    answers: [
      "Igen, mert ez nem autó",
      "Nem, járművet (beleértve a biciklit és rollert is) alkoholos állapotban vezetni szigorúan tilos és életveszélyes!",
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
    answers: ["Papucsban", "Zárt, sportos cipőben", "Magas sarkú cipőben", "Mezítláb"],
    correctAnswer: 1,
    explanation: "A zárt sportcipő stabilan tartja a lábat a roller deszkáján vagy a bicikli pedálján, elkerülve a lecsúszást."
  },
  {
    id: "mik_16",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Mit kell tenni az e-rollerrel, ha gyalogos zónába (sétálóutcába) érünk, ahol tábla tiltja a járműforgalmat?",
    answers: [
      "Gyorsan áttekerünk rajta",
      "Le kell szállni és gyalogosan tolni kell az eszközt",
      "Folyamatosan csöngetünk",
      "Kikerüljük a házakat"
    ],
    correctAnswer: 1,
    explanation: "A sétálóutcákban a gyalogosok biztonsága az első. Ha tilos a járműforgalom, az e-rollert is csak tolva szabad vinni."
  },
  {
    id: "mik_17",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mit jelez a roller hátsó sárvédőjén lévő piros prizma?",
    answers: [
      "Hogy szép legyen",
      "A roller éjszakai láthatóságát segíti, mert visszaveri a mögöttünk jövő autók fényét",
      "Hogy ne fröcsköljön a víz",
      "Semmit"
    ],
    correctAnswer: 1,
    explanation: "A hátsó piros fényvisszaverő prizma rendkívül fontos passzív biztonsági eszköz, amely láthatóvá tesz minket hátulról sötétben is."
  },
  {
    id: "mik_18",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Szabad-e e-rollerrel vagy kerékpárral kapaszkodni egy haladó gépjárműbe (pl. autóba vagy traktorba) vontatás céljából?",
    answers: [
      "Igen, ha fáradtak vagyunk",
      "Nem, ez rendkívül életveszélyes és szigorúan tilos!",
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
    question: "Mennyi az e-rollerrel megengedett legnagyobb sebesség a járdán (ha nincs más lehetőség)?",
    answers: ["5 km/h", "10 km/h", "15 km/h", "20 km/h"],
    correctAnswer: 1,
    explanation: "A járdán (ha az úttest kerékpározásra teljesen alkalmatlan) legfeljebb 10 km/h-val szabad haladni, a gyalogosokat nem zavarva."
  },
  {
    id: "mik_20",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mi a teendőnk, ha e-rollerrel elütünk egy gyalogost a járdán?",
    answers: [
      "Gyorsan elmenekülünk a helyszínről",
      "Megállunk, segítséget nyújtunk, bocsánatot kérünk, és ha megsérült, értesítjük a mentőket (112) és a szüleinket/rendőrséget",
      "Rákiabálunk, hogy miért nem figyelt",
      "Eldobjuk a rollert a folyóba"
    ],
    correctAnswer: 1,
    explanation: "Baleset okozása vagy részesei esetén kötelező azonnal megállni, segíteni és szükség esetén hívni a segélyhívót (112)."
  },

  // --- HALADÁS AZ ÚTON (20 questions) ---
  {
    id: "hal_1",
    category: "haladas",
    difficulty: "easy",
    question: "Melyik oldalon kell haladnunk a járművekkel (autó, bicikli) Magyarországon?",
    answers: ["A bal oldalon", "A jobb oldalon (jobb tartási kötelezettség)", "Az út közepén", "Ahol kevesebb a gödör"],
    correctAnswer: 1,
    explanation: "Magyarországon jobboldali közlekedés van érvényben, így minden járművel az úttest jobb széléhez közel kell haladni."
  },
  {
    id: "hal_2",
    category: "haladas",
    difficulty: "easy",
    question: "Hogyan kell a kerékpárosnak kikerülnie az úttest szélén álló autót?",
    answers: [
      "Megállás nélkül, szorosan elsuhanva mellette",
      "Mögötte elhaladva a járdán",
      "Hátrapillantással ellenőrizni a forgalmat, balra irányjelezni, majd megfelelő biztonsági oldaltávolságot tartva kikerülni",
      "Hangosan dudálva"
    ],
    correctAnswer: 2,
    explanation: "A parkoló autók kikerülése előtt mindig hátra kell nézni, irányjelezni kell, és akkora távolságot kell tartani, hogy egy hirtelen kinyíló autóajtó se okozzon balesetet."
  },
  {
    id: "hal_3",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tenned, ha az úttest szélén haladsz és egy busz indexel, hogy elindulna a buszmegállóból lakott területen?",
    answers: [
      "Gyorsan megelőzöd",
      "Segítened kell a busz elindulását (lassítással vagy megállással), ha ez biztonságos",
      "Figyelmen kívül hagyod",
      "Dudálsz, hogy álljon meg"
    ],
    correctAnswer: 1,
    explanation: "Lakott területen belül a járművek kötelesek segíteni a megállóból elindulni szándékozó menetrend szerinti autóbusz elindulását."
  },
  {
    id: "hal_4",
    category: "haladas",
    difficulty: "medium",
    question: "Mit jelent a követési távolság megtartása az úton?",
    answers: [
      "Azt, hogy minél közelebb kell menni az előttünk lévőhöz, hogy lássuk",
      "Olyan távolságot kell tartani az előttünk haladó mögött, hogy az hirtelen fékezése esetén is biztonságosan meg tudjunk állni",
      "Hogy mindig el kell engedni a mögöttünk jövőt",
      "A GPS távolságot"
    ],
    correctAnswer: 1,
    explanation: "A követési távolság azért fontos, hogy ha az előttünk lévő hirtelen satuféket nyom, legyen elég időnk és fékutunk megállni ütközés nélkül."
  },
  {
    id: "hal_5",
    category: "haladas",
    difficulty: "easy",
    question: "Szabad-e a kerékpárúton motorral vagy segédmotorral közlekedni?",
    answers: [
      "Igen, mert kétkerekű",
      "Nem, a kerékpárút alapvetően csak a kerékpárosok és e-rollerek számára van fenntartva",
      "Csak éjszaka",
      "Igen, ha sietnek"
    ],
    correctAnswer: 1,
    explanation: "A kerékpárúton gépjárművek (autó, motor) nem közlekedhetnek, kivéve bizonyos nagyon lassú segédmotorokat kivételes esetekben, de általában tilos."
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
    explanation: "Ha az úton van kerékpársáv, a biciklisnek kötelező abban haladnia, nem tekerhet az autók sávjában."
  },
  {
    id: "hal_7",
    category: "haladas",
    difficulty: "easy",
    question: "Melyik irányból kell előzni a szabályok szerint az úton (főszabályként)?",
    answers: ["Jobbról", "Balról", "Amelyik oldalon üresebb az út", "Középen átrepülve"],
    correctAnswer: 1,
    explanation: "Főszabály szerint előzni csak balról szabad. Jobbról előzni szigorúan tilos és rendkívül balesetveszélyes."
  },
  {
    id: "hal_8",
    category: "haladas",
    difficulty: "medium",
    question: "Szabad-e kerékpárral egyirányú utcába a forgalommal szemben behajtani?",
    answers: [
      "Igen, mert a bicikli kicsi",
      "Alapvetően tilos, kivéve ha ezt kiegészítő tábla ('Kivéve kerékpár') kifejezetten megengedi",
      "Bármikor szabad, ha óvatosak vagyunk",
      "Csak nappal"
    ],
    correctAnswer: 1,
    explanation: "Egyirányú utcába szembe behajtani tilos, kivéve ha a tábla alatt ott van a 'Kivéve kerékpár' felirat vagy piktogram. Ekkor is szorosan az út szélén kell haladni."
  },
  {
    id: "hal_9",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tennie a járművezetőnek, ha a mögötte haladó autó megkülönböztető jelzéseket használ (villog és szirénázik)?",
    answers: [
      "Gyorsítani kell, hogy lehagyja",
      "Lehúzódással, lassítással, vagy szükség esetén megállással szabaddá kell tenni az utat a szirénázó járműnek",
      "Hirtelen le kell fékezni",
      "Nem kell tenni semmit"
    ],
    correctAnswer: 1,
    explanation: "A szirénázó kocsik elől mindig azonnal, biztonságosan le kell húzódni, hogy mielőbb elhaladhassanak az életet menteni."
  },
  {
    id: "hal_10",
    category: "haladas",
    difficulty: "medium",
    question: "Hogyan kell besorolni kanyarodás előtt a kereszteződésben?",
    answers: [
      "Mindegy honnan kanyarodunk",
      "Jobbra kanyarodás előtt jobbra, balra kanyarodás előtt pedig az úttest felezővonala mellé kell besorolni",
      "Mindig az út legszélére kell húzódni",
      "Keresztbe kell állni az úton"
    ],
    correctAnswer: 1,
    explanation: "Kanyarodás előtt időben be kell sorolni a megfelelő sávba vagy az úttest megfelelő részére, jelezve az irányt a többi autósnak."
  },
  {
    id: "hal_11",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tenned, ha az úton 'Útszűkület' táblát látsz?",
    answers: [
      "Gyorsítani kell, hogy te érj oda először",
      "Lassítani kell, és felkészülni az elsőbbségadásra, ha a te oldalad szűkül",
      "Meg kell állni és visszafordulni",
      "Felesleges figyelni rá"
    ],
    correctAnswer: 1,
    explanation: "Útszűkületnél az út elkeskenyedik. Ha a te oldaladon van az akadály vagy szűkület, neked kell elengedned a szembejövőt."
  },
  {
    id: "hal_12",
    category: "haladas",
    difficulty: "medium",
    question: "Szabad-e kerékpárral autót előzni egy kereszteződésben?",
    answers: [
      "Igen, bármikor",
      "Nem, a kereszteződésekben előzni általában tilos és rendkívül veszélyes a kanyarodó járművek miatt",
      "Csak ha zöld a lámpa",
      "Csak piros autónál"
    ],
    correctAnswer: 1,
    explanation: "Útkereszteződésekben előzni szigorúan tilos és veszélyes, mert a kanyarodó vagy elsőbbséget kapó járművek elüthetik az előzőt."
  },
  {
    id: "hal_13",
    category: "haladas",
    difficulty: "easy",
    question: "Mi a teendőnk, ha az úton gödröt vagy olajfoltot veszünk észre?",
    answers: [
      "Keresztülhajtunk rajta gyorsan",
      "Biztonságos lassítás és hátrapillantás után óvatosan kikerüljük",
      "Hirtelen rarántjuk a kormányt",
      "Lehunyjuk a szemünket"
    ],
    correctAnswer: 1,
    explanation: "Az úthibákat óvatosan, hátrapillantás után szabad kikerülni. A hirtelen kormányrántás esést vagy ütközést okozhat a mellettünk haladóval."
  },
  {
    id: "hal_14",
    category: "haladas",
    difficulty: "hard",
    question: "Hogyan kell végrehajtani a kerékpárosnak a balra kanyarodást egy többsávos, forgalmas főútvonalon lakott területen belül?",
    answers: [
      "Bátran be kell kanyarodni a sávok között",
      "Közvetett kanyarodással: egyenesen áthalad a kereszteződésen, megáll a túloldalon, és ott a gyalogosok között tolva kel át",
      "A járdán kell átrepülni",
      "Tilos balra kanyarodni biciklivel"
    ],
    correctAnswer: 1,
    explanation: "Többsávos vagy nagyon forgalmas főutakon a biciklisnek tilos a belső sávból kanyarodnia. Biztonságosabb közvetett módon, leszállva és tolva átkelni."
  },
  {
    id: "hal_15",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tenned, ha az úton sűrű köd van és alig látsz?",
    answers: [
      "Kapcsold be a távolsági fényszórót és száguldj",
      "Csökkentsd a sebességedet, kapcsold be a világítást, és tarts nagyobb követési távolságot",
      "Állj meg az út közepén",
      "Kapcsold ki a lámpákat, hogy ne zavard a ködöt"
    ],
    correctAnswer: 1,
    explanation: "Ködben nagyon rosszak a látási viszonyok. Lassabban kell menni, tompított fényszórót kell használni és nagy követési távolságot kell tartani."
  },
  {
    id: "hal_16",
    category: "haladas",
    difficulty: "medium",
    question: "Mit jelez a fehér színű záróvonal az úttest szélén (útpadka mellett)?",
    answers: [
      "Hogy ott tilos megállni",
      "Az úttest szélét jelzi, amelyen túl az útpadka található (ezt a vonalat át szabad lépni pl. megálláshoz)",
      "Zebra kezdetét",
      "Hogy ott sín fut"
    ],
    correctAnswer: 1,
    explanation: "Az úttest szélét jelző vonal (szegélyvonal) átléphető megállás vagy az útról való lehúzódás céljából."
  },
  {
    id: "hal_17",
    category: "haladas",
    difficulty: "easy",
    question: "Mit jelent a villogó irányjelző (index) használata kanyarodás előtt?",
    answers: [
      "Hogy szép sárga lámpánk van",
      "Egyértelmű jelzés a többi közlekedőnek arról, hogy merre szándékozunk kanyarodni vagy sávot váltani",
      "Azt, hogy sietünk",
      "Hogy elromlott az autó"
    ],
    correctAnswer: 1,
    explanation: "Az indexelés kötelező jelzés, amellyel tudatjuk a többi sofőrrel és gyalogossal, hogy merre fogunk kanyarodni."
  },
  {
    id: "hal_18",
    category: "haladas",
    difficulty: "medium",
    question: "Mi az a 'kapubejáró' a KRESZ haladási szabályai szerint?",
    answers: [
      "Egy szép kapu",
      "Olyan magánút vagy ingatlan kijárat, ahonnan az útra ráhajtva mindig elsőbbséget kell adni az úton lévőknek",
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
      "Lehúzódni a jobb szélre, vagy szükség esetén teljesen megállni az útpadkán, segítve a biztonságos előzését",
      "Gyorsítani és versenyezni vele",
      "Kiabálni a sofőrnek"
    ],
    correctAnswer: 1,
    explanation: "A biztonság az első. Ha keskeny az út, érdemes félrehúzódni az útpadkára és elengedni a nagy teherautót, elkerülve a menetszél miatti esést."
  },
  {
    id: "hal_20",
    category: "haladas",
    difficulty: "easy",
    question: "Miért nem szabad hirtelen, indokolatlanul fékezni az úton?",
    answers: [
      "Mert kopik a gumi",
      "Mert a mögöttünk haladó járműnek nem lesz ideje lefékezni és hátulról belénk rohanhat",
      "Mert lemerül az akkumulátor",
      "Nyugodtan szabad fékezni bármikor"
    ],
    correctAnswer: 1,
    explanation: "Indokolatlan satuféket nyomni tilos és veszélyes, mert láncreakciós ráfutásos balesetet okozhatunk az úton."
  },

  // --- KRESZ TÁBLÁK (20 questions) ---
  {
    id: "tab_1",
    category: "tablak",
    difficulty: "easy",
    question: "Milyen alakú és színű az 'Állj! Elsőbbségadás kötelező' (STOP) tábla?",
    answers: [
      "Kerek, piros kerettel",
      "Nyolcszögletű, piros alapon fehér felirattal",
      "Háromszög alakú, csúcsára állítva",
      "Négyzet alakú, kék"
    ],
    correctAnswer: 1,
    explanation: "A STOP tábla az egyetlen nyolcszögletű tábla a KRESZ-ben, hogy hátulról vagy hóval borítva is azonnal felismerhető legyen."
  },
  {
    id: "tab_2",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a piros körben kék alapon piros X-szel áthúzott tábla?",
    answers: ["Várakozni tilos", "Megállni tilos", "Főútvonal", "Autópálya vége"],
    correctAnswer: 1,
    explanation: "A piros körben lévő kék alapon elhelyezett piros X jelzi a 'Megállni tilos' parancsot."
  },
  {
    id: "tab_3",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a piros körben kék alapon egyetlen átlós piros vonallal ellátott tábla?",
    answers: ["Megállni tilos", "Várakozni (parkolni) tilos", "Behajtani tilos", "Kötelező haladási irány"],
    correctAnswer: 1,
    explanation: "A kék alapon egyetlen átlós piros vonallal rendelkező kerek tábla jelöli a 'Várakozni tilos' tilalmat."
  },
  {
    id: "tab_4",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent az a kerek, piros keretű tábla, aminek a közepe teljesen fehér?",
    answers: [
      "Minden jármű mindkét irányból való behajtása tilos (Behajtani tilos)",
      "Gyalogosoknak tilos az átkelés",
      "Behajtani szabad",
      "Üres utat jelöl"
    ],
    correctAnswer: 0,
    explanation: "A fehér közepű piros kerek tábla azt jelzi, hogy az utcába mindkét irányból tilos behajtani minden járművel."
  },
  {
    id: "tab_5",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent az a kerek piros tábla, aminek a közepén egy vízszintes fehér csík van?",
    answers: [
      "Megállni tilos",
      "Mindkét irányból behajtani tilos",
      "Egyirányú utca bejárata, ahonnan ebbe az irányba behajtani tilos",
      "Gyalogút"
    ],
    correctAnswer: 2,
    explanation: "Ez a klasszikus 'Behajtani tilos' tábla egyirányú utcák végén. Ebbe az irányba tilos behajtani, de a túloldalról jöhetnek járművek."
  },
  {
    id: "tab_6",
    category: "tablak",
    difficulty: "easy",
    question: "Mit ábrázol a 'Gyalogosok' veszélyt jelző tábla (piros keretű háromszög)?",
    answers: [
      "Egy biciklit",
      "Két futó gyermeket (iskola, óvoda veszélyt jelző tábla)",
      "Egy sétáló gyalogos alakot",
      "Egy zebrát"
    ],
    correctAnswer: 2,
    explanation: "A piros háromszögben sétáló gyalogos figura arra figyelmeztet, hogy az úton gyalogosok megjelenésére kell számítani."
  },
  {
    id: "tab_7",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a kerek, kék alapon fehér kerékpárt ábrázoló tábla?",
    answers: [
      "Kerékpározni tilos",
      "Kerékpárút (kizárólag kerékpárral és e-rollerrel szabad rajta közlekedni)",
      "Bicikliüzlet",
      "Veszélyes útszakasz"
    ],
    correctAnswer: 1,
    explanation: "A kerek kék tábla fehér biciklivel a kijelölt kerékpárutat jelöli, ahol a biciklisek biztonságosan tekerhetnek."
  },
  {
    id: "tab_8",
    category: "tablak",
    difficulty: "medium",
    question: "Mit ábrázol és mit jelent az 'Iskola, gyermekek' veszélyt jelző tábla?",
    answers: [
      "Egy könyvet ábrázol",
      "Piros háromszögben két futó gyereket ábrázol; azt jelzi, hogy az úttesten gyermekek megjelenésére kell számítani",
      "Egy játszóteret ábrázol",
      "Hogy itt szabad játszani az úton"
    ],
    correctAnswer: 1,
    explanation: "A piros keretű háromszögben lévő két futó gyerek figura figyelmeztet az iskola vagy óvoda közelségére, ahol fokozottan kell lassítani."
  },
  {
    id: "tab_9",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a kék alapú, fehér gyalogost és kerékpárt ábrázoló kerek tábla, aminek a közepén egy függőleges fehér vonal van?",
    answers: [
      "Gyalog- és kerékpárút, ahol a gyalogosok és kerékpárosok a vonallal elválasztott külön részeken közlekednek",
      "Sétálóutca",
      "Tilos a biciklizés",
      "Autópálya kezdete"
    ],
    correctAnswer: 0,
    explanation: "A függőleges vonallal elválasztott gyalog- és kerékpárút tábla jelzi, hogy az út egyik felén csak gyalogosok, a másikon csak biciklisek haladhatnak."
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
    answers: ["Megállni tilos", "Várakozóhely (Parkoló), ahol szabályosan szabad parkolni", "Rendőrség", "Pékség"],
    correctAnswer: 1,
    explanation: "A kék négyszögletes tábla a fehér 'P' betűvel a szabályos parkolóhelyet (várakozóhelyet) jelöli."
  },
  {
    id: "tab_12",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a piros keretű háromszögben lévő felkiáltójel tábla?",
    answers: [
      "Hogy kiabálni kell",
      "Egyéb veszély, amelyet más tábla nem jelöl (fokozott figyelemmel kell haladni)",
      "Az út végét jelzi",
      "Hogy meg kell állni"
    ],
    correctAnswer: 1,
    explanation: "A felkiáltójel tábla 'Egyéb veszély'-re figyelmeztet (pl. omlás, balesetveszély, különleges útviszonyok), amit más táblával nem tudtak jelölni."
  },
  {
    id: "tab_13",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a sárga alapú háromszög piros kerettel, benne egy fekete villamossal?",
    answers: [
      "Hogy itt ingyen lehet utazni villamoson",
      "Villamospálya kereszteződés közeledtét jelző veszélytábla",
      "Hogy tilos villamossal menni",
      "Vasúti átjárót"
    ],
    correctAnswer: 1,
    explanation: "Ez a tábla arra figyelmeztet, hogy az úttestet villamospálya keresztezi, és a villamosnak általában elsőbbsége lesz."
  },
  {
    id: "tab_14",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent az a tábla, ami kék alapon fehér házat, játszó gyereket és autót ábrázol?",
    answers: [
      "Autópálya",
      "Lakó-pihenő övezet (ahol a gyalogosok az egész úton sétálhatnak, és a sebességhatár max 20 km/h)",
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
      "Vasúti átjáró közeledik (fénysorompóval vagy anélkül)",
      "Vasútállomást",
      "Hogy a vonatnak kell megállnia"
    ],
    correctAnswer: 1,
    explanation: "A gőzmozdonyt vagy sorompót ábrázoló piros háromszög veszélytábla a vasúti átjáró közeledtére hívja fel a figyelmet."
  },
  {
    id: "tab_16",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a kerek kék tábla, benne egy fehér, jobbra mutató nyíllal?",
    answers: [
      "Csak jobbra szabad kanyarodni (Kötelező haladási irány)",
      "Jobb oldalon parkoló van",
      "Tilos jobbra kanyarodni",
      "Egyirányú utca"
    ],
    correctAnswer: 0,
    explanation: "A kék kerek táblák fehér nyíllal a Kötelező haladási irányt jelölik. Csak a nyíl által mutatott irányba szabad továbbhaladni."
  },
  {
    id: "tab_17",
    category: "tablak",
    difficulty: "easy",
    question: "Milyen táblát látsz a körforgalom előtt?",
    answers: [
      "Kék körben három fehér, egymásba futó nyilat kör alakban",
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
      "Fehér alapon fekete házak sziluettje, vagy a település nevét tartalmazó fehér téglalap tábla",
      "Egy kék kör",
      "Egy piros háromszög",
      "Nincs ilyen tábla"
    ],
    correctAnswer: 0,
    explanation: "A település nevét mutató fehér tábla jelzi a lakott terület kezdetét, ami egyben azt is jelenti, hogy életbe lép az 50 km/h-s sebességkorlátozás."
  },
  {
    id: "tab_20",
    category: "tablak",
    difficulty: "easy",
    question: "Mit kell tenned, ha az út szélén 'Gyalogos-átkelőhely' (kék négyzetben fehér háromszög, rajta zebrán sétáló ember) táblát látsz?",
    answers: [
      "Gyorsítani kell, hogy átérj a zebra előtt",
      "Lassítani kell, és felkészülni arra, hogy elsőbbséget adj az átkelni szándékozó gyalogosoknak",
      "Dudálni folyamatosan",
      "Biciklivel felmenni a járdára"
    ],
    correctAnswer: 1,
    explanation: "Ez a tábla a kijelölt gyalogos-átkelőhelyet jelzi. Arra inti a sofőröket, hogy lassítsanak és adják meg az elsőbbséget a gyalogosoknak."
  }
];
