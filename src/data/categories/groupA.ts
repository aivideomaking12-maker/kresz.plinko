import { Question } from "../../types";

export const groupAQuestions: Question[] = [
  // --- SEBESSÉG (20 questions) ---
  {
    id: "seb_1",
    category: "sebesség",
    difficulty: "easy",
    question: "Mennyi a megengedett legnagyobb sebesség kerékpárral lakott területen kívül, ha a kerékpáros fejvédő sisakot visel és utast nem szállít?",
    answers: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    correctAnswer: 2,
    explanation: "Ha sisakot viselsz és nem szállítasz utast, lakott területen kívül legfeljebb 50 km/h-val tekerhetsz. Sisak nélkül a határ 40 km/h."
  },
  {
    id: "seb_2",
    category: "sebesség",
    difficulty: "easy",
    question: "Lakott területen belül (városban, faluban) általában mennyi a gépjárművek maximális sebességhatára?",
    answers: ["30 km/h", "50 km/h", "70 km/h", "90 km/h"],
    correctAnswer: 1,
    explanation: "Lakott területen belül a gépjárművek általános sebességhatára 50 km/h a biztonságos együttélés érdekében."
  },
  {
    id: "seb_3",
    category: "sebesség",
    difficulty: "medium",
    question: "Hány km/h-val szabad közlekedni kerékpárral a gyalog- és kerékpárúton, ha a gyalogosok biztonsága nincs veszélyeztetve?",
    answers: ["10 km/h", "20 km/h", "30 km/h", "40 km/h"],
    correctAnswer: 2,
    explanation: "Gyalog- és kerékpárúton maximum 30 km/h-val szabad haladni kerékpárral a gyalogosok védelmében."
  },
  {
    id: "seb_4",
    category: "sebesség",
    difficulty: "easy",
    question: "Mennyivel tekerhetsz maximum a kerékpársávban?",
    answers: ["20 km/h", "30 km/h", "40 km/h", "Nincs korlátozás"],
    correctAnswer: 2,
    explanation: "Kerékpársávban és kerékpárúton is általában legfeljebb 40 km/h sebességgel szabad tekerni."
  },
  {
    id: "seb_5",
    category: "sebesség",
    difficulty: "medium",
    question: "Ha kerékpárral a járdán vagy kénytelen haladni (mert az úttest alkalmatlan), mekkora a megengedett legnagyobb sebességed?",
    answers: ["5 km/h", "10 km/h", "15 km/h", "20 km/h"],
    correctAnswer: 1,
    explanation: "A járdán csak a gyalogosok zavarása nélkül, maximum 10 km/h sebességgel szabad kerékpározni, ha az úttest kerékpározásra alkalmatlan."
  },
  {
    id: "seb_6",
    category: "sebesség",
    difficulty: "easy",
    question: "Miért fontos betartani a sebességkorlátozásokat az iskola környékén?",
    answers: [
      "Hogy ne kapjon büntetést az autós",
      "Mert a gyerekek hirtelen kiszaladhatnak az útra, és kisebb sebességnél rövidebb a fékút",
      "Mert az iskolások nem ismerik a KRESZ-t",
      "Hogy ne csapjunk zajt"
    ],
    correctAnswer: 1,
    explanation: "Kisebb sebességnél a reakcióidő alatt megtett út és a fékút is sokkal rövidebb, így elkerülhető a baleset, ha egy kisgyerek hirtelen az útra lép."
  },
  {
    id: "seb_7",
    category: "sebesség",
    difficulty: "easy",
    question: "Melyik jármű haladhat a leggyorsabban az autópályán?",
    answers: ["Segédmotoros kerékpár", "Személygépkocsi", "Kerékpár", "Traktor"],
    correctAnswer: 1,
    explanation: "A személygépkocsik autópályán legfeljebb 130 km/h-val mehetnek. Biciklivel, traktorral és segédmotorral tilos autópályára hajtani!"
  },
  {
    id: "seb_8",
    category: "sebesség",
    difficulty: "medium",
    question: "Lakott területen kívüli országúton mennyi az autók általános sebességhatára?",
    answers: ["50 km/h", "70 km/h", "90 km/h", "110 km/h"],
    correctAnswer: 2,
    explanation: "Országúton, lakott területen kívül a személygépkocsik maximális megengedett sebessége 90 km/h."
  },
  {
    id: "seb_9",
    category: "sebesség",
    difficulty: "easy",
    question: "Mit jelent az 'ajánlott sebesség' jelzőtábla (kék négyzetben fehér szám)?",
    answers: [
      "Kötelező annyival menni",
      "Tilos annál gyorsabban menni",
      "Azt a sebességet javasolják, amellyel biztonságosan lehet haladni",
      "Tilos annál lassabban menni"
    ],
    correctAnswer: 2,
    explanation: "Az ajánlott sebesség tábla nem kötelez, de azt javasolja, hogy a megjelölt sebességgel (pl. 40 km/h) közlekedj a biztonság érdekében."
  },
  {
    id: "seb_10",
    category: "sebesség",
    difficulty: "medium",
    question: "Mi befolyásolja a biztonságos sebesség megválasztását (relatív sebességtúllépés elkerülése)?",
    answers: [
      "Csak az, hogy sietünk-e",
      "Az időjárás, a látási viszonyok, az út állapota és a forgalom nagysága",
      "A gépjármű színe",
      "Csak a benzin ára"
    ],
    correctAnswer: 1,
    explanation: "A sebességet mindig az útviszonyokhoz (pl. eső, jég, köd) és a forgalomhoz kell igazítani. Rossz időben lassabban kell menni a táblán megengedettnél is!"
  },
  {
    id: "seb_11",
    category: "sebesség",
    difficulty: "medium",
    question: "Mennyivel mehet egy kerékpáros lakott területen kívül fejvédő sisak NÉLKÜL?",
    answers: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    correctAnswer: 1,
    explanation: "Lakott területen kívül, ha nem viselsz sisakot, a megengedett legnagyobb sebességed kerékpárral 40 km/h."
  },
  {
    id: "seb_12",
    category: "sebesség",
    difficulty: "easy",
    question: "Mit kell tenned gépjárművel vagy biciklivel a 'Sebességkorlátozás 30' tábla után?",
    answers: [
      "Pontosan 30-cal kell menni, se többel, se kevesebbel",
      "Legfeljebb 30 km/h-val szabad haladni",
      "Legalább 30 km/h-val kell haladni",
      "Figyelmen kívül hagyhatod, ha üres az út"
    ],
    correctAnswer: 1,
    explanation: "A sebességkorlátozó tábla azt jelzi, hogy legfeljebb a táblán megjelölt sebességgel (itt 30 km/h) szabad közlekedni."
  },
  {
    id: "seb_13",
    category: "sebesség",
    difficulty: "hard",
    question: "Ha kerékpárral egy másik kerékpárt vagy utánfutót vontatsz, mennyi a maximális sebességed?",
    answers: ["10 km/h", "20 km/h", "30 km/h", "40 km/h"],
    correctAnswer: 1,
    explanation: "Ha kerékpárral kerékpár-utánfutót vontatsz, vagy más okból korlátozott a stabilitásod, a maximális sebességed 20 km/h."
  },
  {
    id: "seb_14",
    category: "sebesség",
    difficulty: "easy",
    question: "Mit csinál az autó fékútja, ha megduplázzuk a sebességet?",
    answers: [
      "Ugyanakkora marad",
      "Megduplázódik",
      "Körülbelül a négyszeresére nő",
      "A felére csökken"
    ],
    correctAnswer: 2,
    explanation: "A fékút a sebesség négyzetével arányos, így kétszeres sebességnél a fékút a négyszeresére nő! Ezért nagyon veszélyes a gyorshajtás."
  },
  {
    id: "seb_15",
    category: "sebesség",
    difficulty: "medium",
    question: "Mi a megengedett legnagyobb sebesség lakott területen belül kijelölt gyalogos-övezetben (sétálóutca)?",
    answers: ["10 km/h", "20 km/h", "30 km/h", "A járműforgalom itt tilos"],
    correctAnswer: 0,
    explanation: "A gyalogos-övezetbe engedéllyel behajtó járművek (és a kerékpárosok is) maximum 10 km/h-val haladhatnak, teljesen elsőbbséget adva a gyalogosoknak."
  },
  {
    id: "seb_16",
    category: "sebesség",
    difficulty: "easy",
    question: "Hogyan mérheti a rendőrség a sebességet?",
    answers: [
      "Csak szemmel követve",
      "Sebességmérő eszközzel (trafipax)",
      "Stopperórával mérve a távolságot",
      "A motor hangja alapján"
    ],
    correctAnswer: 1,
    explanation: "A rendőrség modern lézeres és radaros sebességmérő eszközöket (trafipaxot) használ a sebesség pontos mérésére a biztonság érdekében."
  },
  {
    id: "seb_17",
    category: "sebesség",
    difficulty: "hard",
    question: "Lakott területen kívül 'Lakó-pihenő övezet' tábla esetén mennyi a sebességhatár?",
    answers: ["10 km/h", "20 km/h", "30 km/h", "Nincs ilyen övezet lakott területen kívül"],
    correctAnswer: 1,
    explanation: "A lakó-pihenő övezetben a megengedett legnagyobb sebesség minden jármű számára 20 km/h."
  },
  {
    id: "seb_18",
    category: "sebesség",
    difficulty: "easy",
    question: "Miért veszélyes, ha túl lassan halad egy autó az országúton indokolatlanul?",
    answers: [
      "Mert elalszik a sofőr",
      "Mert veszélyes előzésekre kényszerítheti a mögötte haladókat, és torlódást okoz",
      "Mert lemerül az akkumulátor",
      "Nem veszélyes, a lassúság mindig biztonságos"
    ],
    correctAnswer: 1,
    explanation: "Az indokolatlanul lassú haladás is balesetveszélyes, mert türelmetlenséget és veszélyes előzési manővereket válthat ki a többi sofőrből."
  },
  {
    id: "seb_19",
    category: "sebesség",
    difficulty: "medium",
    question: "Mennyivel mehet egy autó 'Gyalog- és kerékpárút' tábla után, ha engedéllyel behajthat?",
    answers: ["10 km/h", "20 km/h", "30 km/h", "50 km/h"],
    correctAnswer: 1,
    explanation: "Ha egy gépjármű engedéllyel behajthat a gyalog- és kerékpárútra, ott legfeljebb 20 km/h sebességgel közlekedhet."
  },
  {
    id: "seb_20",
    category: "sebesség",
    difficulty: "easy",
    question: "Mi a teendőnk, ha kerékpárral lejtőn lefelé haladunk és nagyon felgyorsulunk?",
    answers: [
      "Örülünk a sebességnek és nem fékezünk",
      "A hátsó és első fék óvatos, váltakozó használatával biztonságos sebességre lassítunk",
      "Hirtelen behúzzuk az első féket teljes erőből",
      "Létesszük a lábunkat a földre fék gyanánt"
    ],
    correctAnswer: 1,
    explanation: "Lejtőn lefelé mindig óvatosan kell fékezni mindkét fékkel. A hirtelen első fék használat miatt átbukhatunk a kormányon!"
  },

  // --- KERÉKPÁROS KÖZLEKEDÉS (20 questions) ---
  {
    id: "ker_1",
    category: "kerekpar",
    difficulty: "easy",
    question: "Melyik kötelező tartozéka a kerékpárnak a következők közül?",
    answers: [
      "Sárvédő és csomagtartó",
      "Első fehér és hátsó piros lámpa, valamint fényvisszaverők",
      "Kilométeróra",
      "Kulacstartó"
    ],
    correctAnswer: 1,
    explanation: "A kerékpár kötelező felszerelése: egy első fehér és egy hátsó piros lámpa, küllőprizmák, csengő és két egymástól független fék."
  },
  {
    id: "ker_2",
    category: "kerekpar",
    difficulty: "easy",
    question: "Hány éves kortól szabad főútvonalon kerékpározni önállóan?",
    answers: ["10 év", "12 év", "14 év", "16 év"],
    correctAnswer: 1,
    explanation: "Főútvonalon csak a 12. életévét betöltött személy kerékpározhat önállóan, mivel a főutak forgalmasak és veszélyesek."
  },
  {
    id: "ker_3",
    category: "kerekpar",
    difficulty: "easy",
    question: "Szabad-e kerékpárral a járdán közlekedni, ha van kerékpárút?",
    answers: [
      "Igen, ha a járdán kevesen vannak",
      "Nem, kötelező a kerékpárutat használni",
      "Igen, ha sietünk",
      "Igen, ha nincs kedvünk a kerékpárúton menni"
    ],
    correctAnswer: 1,
    explanation: "Ha van kerékpárút vagy kerékpársáv, a biciklisnek kötelező azt használnia, a járdán tekerni ilyenkor szigorúan tilos."
  },
  {
    id: "ker_4",
    category: "kerekpar",
    difficulty: "medium",
    question: "Hogyan kell jelezni a kerékpárosnak, ha jobbra vagy balra szeretne kanyarodni?",
    answers: [
      "Kiabálással",
      "A megfelelő oldali kar vízszintes kinyújtásával",
      "A fejünk biccentésével",
      "Nem kell jelezni, az autósoknak figyelniük kell ránk"
    ],
    correctAnswer: 1,
    explanation: "Irányváltoztatási szándékunkat mindig időben, jól látható módon kell jeleznünk a megfelelő karunk oldalra kinyújtásával."
  },
  {
    id: "ker_5",
    category: "kerekpar",
    difficulty: "easy",
    question: "Szabad-e kerékpáron utast szállítani a KRESZ szerint?",
    answers: [
      "Igen, bárkit a csomagtartón",
      "Csak 18. életévét betöltött személy szállíthat legfeljebb 10 éves gyereket pótülésen",
      "Nem, semmilyen körülmények között sem szabad utast vinni",
      "Igen, a kormányon ülve"
    ],
    correctAnswer: 1,
    explanation: "Kerékpáron csak felnőtt (18 év feletti) személy szállíthat egy darab, 10 évnél fiatalabb gyereket, biztonságos pótülésen."
  },
  {
    id: "ker_6",
    category: "kerekpar",
    difficulty: "easy",
    question: "Milyen színűnek kell lennie a kerékpár első lámpájának?",
    answers: ["Piros", "Fehér vagy kadmiumsárga", "Zöld", "Kék"],
    correctAnswer: 1,
    explanation: "A kerékpár első lámpájának fehérnek vagy kadmiumsárgának kell lennie, míg a hátsó lámpa kizárólag piros lehet."
  },
  {
    id: "ker_7",
    category: "kerekpar",
    difficulty: "easy",
    question: "Melyik kötelező hangjelző eszköz a kerékpáron?",
    answers: ["Duda", "Csengő", "Síp", "Sziréna"],
    correctAnswer: 1,
    explanation: "A kerékpáron kötelező felszerelés a hangjelzésre szolgáló csengő. A duda vagy síp használata nem helyettesíti ezt."
  },
  {
    id: "ker_8",
    category: "kerekpar",
    difficulty: "medium",
    question: "Mit kell tenni, ha kerékpárral kijelölt gyalogos-átkelőhelyhez (zebrához) érsz, és át akarsz kelni rajta?",
    answers: [
      "Gyorsan áttekersz rajta",
      "Leszállsz a kerékpárról és gyalogosan tolod át",
      "Lassan, kanyarogva tekersz át a gyalogosok között",
      "Csöngetsz, hogy az autók álljanak meg"
    ],
    correctAnswer: 1,
    explanation: "A zebrán a kerékpárosnak nincs elsőbbsége. Le kell szállni a bicikliről és gyalogosan, tolva kell átkelni rajta."
  },
  {
    id: "ker_9",
    category: "kerekpar",
    difficulty: "easy",
    question: "Mit kell viselnie a kerékpárosnak lakott területen kívül, sötétben vagy korlátozott látási viszonyok között?",
    answers: ["Fényvisszaverő mellényt", "Fehér pólót", "Sapkát", "Napszemüveget"],
    correctAnswer: 0,
    explanation: "Éjszaka vagy rossz látási viszonyok között lakott területen kívül kötelező a fényvisszaverő mellény (vagy ruházat) viselése a kerékpárosoknak."
  },
  {
    id: "ker_10",
    category: "kerekpar",
    difficulty: "medium",
    question: "Szabad-e elengedett kormánnyal kerékpározni az úton?",
    answers: [
      "Igen, ha már nagyon jól tudunk egyensúlyozni",
      "Nem, a kormányt legalább egy kézzel folyamatosan fogni kell",
      "Csak akkor, ha nem jön autó",
      "Igen, de csak a kerékpárúton"
    ],
    correctAnswer: 1,
    explanation: "A KRESZ előírja, hogy a kerékpárt legalább egy kézzel folyamatosan fogni kell. Elengedett kormánnyal tekerni szigorúan tilos és veszélyes!"
  },
  {
    id: "ker_11",
    category: "kerekpar",
    difficulty: "easy",
    question: "Melyik irányból szabad kikerülni az álló akadályt kerékpárral az úton?",
    answers: ["Csak jobbról", "Balról, a mögöttes forgalom ellenőrzése és irányjelzés után", "Ahogy éppen kényelmes", "Középen átugorva"],
    correctAnswer: 1,
    explanation: "Akadály kikerülése előtt mindig hátra kell nézni, jelezni kell a balra kanyarodást, és biztonságosan, balról kell kikerülni az akadályt."
  },
  {
    id: "ker_12",
    category: "kerekpar",
    difficulty: "medium",
    question: "Hogyan kell a kerékpárosnak haladnia az úttesten, ha nincs kerékpárút?",
    answers: [
      "Az úttest közepén",
      "Az úttest jobb széléhez húzódva (szorosan az út szélén)",
      "A bal oldalon, szembe a forgalommal",
      "Cikkcakkban haladva az egész sávban"
    ],
    correctAnswer: 1,
    explanation: "Kerékpárral az úttest jobb széléhez húzódva kell haladni (jobb tartási kötelezettség), ügyelve az útpadkára és a parkoló autókra."
  },
  {
    id: "ker_13",
    category: "kerekpar",
    difficulty: "easy",
    question: "Szabad-e kerékpárral autópályán vagy autóúton közlekedni?",
    answers: [
      "Igen, ha a leállósávban megyünk",
      "Nem, ezeken a gyors utakon tilos kerékpárral közlekedni",
      "Csak nappal, jó időben",
      "Igen, ha nincs nagy forgalom"
    ],
    correctAnswer: 1,
    explanation: "Autópályán és autóúton tilos kerékpározni, mert a járművek nagy sebessége miatt ez életveszélyes."
  },
  {
    id: "ker_14",
    category: "kerekpar",
    difficulty: "medium",
    question: "Szabad-e kerékpárral kutyát sétáltatni pórázon tekerés közben?",
    answers: [
      "Igen, ha a kutya fegyelmezett",
      "Nem, kerékpárhoz állatot kötni vagy vezetni tilos",
      "Csak kis testű kutyát szabad",
      "Igen, de csak füves területen"
    ],
    correctAnswer: 1,
    explanation: "A KRESZ tiltja, hogy kerékpárral állatot vezessünk. A kutya hirtelen rántása súlyos esést és balesetet okozhat."
  },
  {
    id: "ker_15",
    category: "kerekpar",
    difficulty: "medium",
    question: "Mit jelent a kerékpáros fejvédő sisak viselése?",
    answers: [
      "Csak dísz, nem nyújt védelmet",
      "Nagyon fontos védőeszköz, ami megvédi a fejet esésnél a súlyos sérülésektől",
      "Csak versenyzőknek kötelező",
      "Melegíti a fejet télen"
    ],
    correctAnswer: 1,
    explanation: "Bár lakott területen belül nem kötelező, a sisak viselése erősen ajánlott, mert eséskor életet menthet és megvédi a fejet a sérüléstől."
  },
  {
    id: "ker_16",
    category: "kerekpar",
    difficulty: "easy",
    question: "Hány féknek kell lennie a kerékpáron a szabályok szerint?",
    answers: ["Egy fék elég", "Két darab, egymástól függetlenül működő féknek (első és hátsó)", "Nem kötelező a fék, ha lábbal tudunk fékezni", "Három féknek"],
    correctAnswer: 1,
    explanation: "A kerékpárt fel kell szerelni két, egymástól függetlenül működő (egy első és egy hátsó) fékkel, amelyek biztonságosan lassítják a biciklit."
  },
  {
    id: "ker_17",
    category: "kerekpar",
    difficulty: "hard",
    question: "Két kerékpáros haladhat-e egymás mellett az úttesten?",
    answers: [
      "Igen, hogy tudjanak beszélgetni",
      "Nem, a kerékpárosoknak egymás mögött, egy sorban kell haladniuk",
      "Igen, ha nincs mögöttük autó",
      "Igen, de csak ha piros lámpához érnek"
    ],
    correctAnswer: 1,
    explanation: "Az úttesten a kerékpárosoknak szigorúan egymás mögött, libasorban kell haladniuk. Egymás mellett haladni tilos és akadályozza a forgalmat."
  },
  {
    id: "ker_18",
    category: "kerekpar",
    difficulty: "medium",
    question: "Szabad-e kerékpárral mobiltelefont kézben tartva használni menet közben?",
    answers: [
      "Igen, ha lassan megyünk",
      "Nem, menet közben kézben tartott mobiltelefont használni szigorúan tilos",
      "Igen, ha fülhallgató van nálunk",
      "Csak üzenetírásra szabad"
    ],
    correctAnswer: 1,
    explanation: "Menet közben a kézben tartott mobiltelefon elvonja a figyelmet és rontja az egyensúlyt, ezért használata szigorúan tilos és büntetendő."
  },
  {
    id: "ker_19",
    category: "kerekpar",
    difficulty: "hard",
    question: "Mit kell tenni, ha kerékpárúton haladsz, de a kerékpárút keresztezi az úttestet és macskaszem/háromszög tábla van a kerékpárúton?",
    answers: [
      "Neked van elsőbbséged, mert kerékpárúton vagy",
      "Elsőbbséget kell adnod a keresztező úttest forgalmának",
      "Megállás nélkül kell áthaladni",
      "Leszállva tolni kell"
    ],
    correctAnswer: 1,
    explanation: "Ha a kerékpárúton elsőbbségadás kötelező tábla van az úttest keresztezése előtt, akkor a biciklisnek kell elsőbbséget adnia az autóknak."
  },
  {
    id: "ker_20",
    category: "kerekpar",
    difficulty: "easy",
    question: "Mit jelez a kerékpár kerekére szerelt borostyánsárga prizma (küllőprizma)?",
    answers: [
      "Hogy gyorsabban forogjon a kerék",
      "A kerékpár oldalról való láthatóságát segíti sötétben",
      "Megvédi a kereket a sérülésektől",
      "Egyszerű díszítés"
    ],
    correctAnswer: 1,
    explanation: "A küllőprizmák (legalább kerekenként 2 db) visszaverik az autók fényét, így a biciklis oldalról is jól láthatóvá válik éjszaka."
  },

  // --- GYALOGOS KÖZLEKEDÉS (20 questions) ---
  {
    id: "gyal_1",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hol kell haladnia a gyalogosnak, ha van járdasziget vagy járda?",
    answers: ["Az úttest szélén", "A járdán", "A kerékpárúton", "Az út közepén"],
    correctAnswer: 1,
    explanation: "A gyalogosoknak elsősorban a járdán kell közlekedniük. Csak járda hiányában szabad az út szélén haladni."
  },
  {
    id: "gyal_2",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hogyan kell a gyalogosnak haladnia az úttest szélén, ha nincs járda lakott területen kívül?",
    answers: [
      "A jobb oldalon, a gépjárműforgalommal megegyező irányban",
      "A bal oldalon, a forgalommal szemben",
      "Az út közepén, hogy jól látható legyen",
      "Bárhol, nincs jelentősége"
    ],
    correctAnswer: 1,
    explanation: "Ha nincs járda, a gyalogosnak a menetirány szerinti bal oldalon (szembe a forgalommal) kell haladnia, hogy időben lássa a felé közeledő autókat."
  },
  {
    id: "gyal_3",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hol a legbiztonságosabb átkelni a gyalogosnak az úton?",
    answers: [
      "Két parkoló autó között",
      "A kijelölt gyalogos-átkelőhelyen (zebrán)",
      "Ahol a leggyorsabban át tud futni",
      "Kanyarban, mert ott lassabban mennek a kocsik"
    ],
    correctAnswer: 1,
    explanation: "A legbiztonságosabb átkelési pont a kijelölt gyalogos-átkelőhely, azaz a zebra, vagy a közlekedési lámpával irányított kereszteződés."
  },
  {
    id: "gyal_4",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mit kell tenned az úttestre lépés előtt a zebránál?",
    answers: [
      "Azonnal lépj le, mert a zebrán neked van elsőbbséged",
      "Állj meg, nézz balra, nézz jobbra, majd újra balra, és győződj meg róla, hogy az autók megállnak",
      "Csukott szemmel szaladj át",
      "Integess az autósoknak, majd fuss át"
    ],
    correctAnswer: 1,
    explanation: "Mindig meg kell állni és alaposan körülnézni (balra-jobbra-balra) a lelépés előtt, megvárva, hogy a járművek teljesen megálljanak."
  },
  {
    id: "gyal_5",
    category: "gyalogos",
    difficulty: "easy",
    question: "Milyen színű gyalogos lámpánál szabad átkelni az úton?",
    answers: ["Piros", "Villogó piros", "Zöld", "Sárga"],
    correctAnswer: 2,
    explanation: "Kizárólag a folyamatos zöld jelzésnél szabad megkezdeni az átkelést a gyalogos-átkelőhelyen."
  },
  {
    id: "gyal_6",
    category: "gyalogos",
    difficulty: "medium",
    question: "Mit kell tenned, ha az átkelés közben villogni kezd a zöld gyalogos lámpa?",
    answers: [
      "Azonnal fordulj vissza a kiindulási oldalra",
      "Igyekezz mielőbb, de nyugodtan átérni a túloldalra vagy a legközelebbi járdaszigetre",
      "Állj meg az út közepén",
      "Ülj le a zebrára"
    ],
    correctAnswer: 1,
    explanation: "A villogó zöld jelzés azt jelenti, hogy hamarosan pirosra vált a lámpa. Ha már elindultál, tempósan át kell érned a túloldalra."
  },
  {
    id: "gyal_7",
    category: "gyalogos",
    difficulty: "easy",
    question: "Szabad-e fülhallgatót viselni és a telefont nézni az úton való átkelés közben?",
    answers: [
      "Igen, ha halljuk a zenét",
      "Nem, mert elvonja a figyelmünket és nem halljuk a közeledő járműveket vagy a szirénát",
      "Igen, ha gyorsan futunk",
      "Csak akkor, ha nincs forgalom"
    ],
    correctAnswer: 1,
    explanation: "Átkeléskor teljes figyelemre van szükség. A telefonozás és fülhallgató használata életveszélyes, mert kizárja a külvilág hangjait."
  },
  {
    id: "gyal_8",
    category: "gyalogos",
    difficulty: "medium",
    question: "Gyalogosként léphetünk-e az úttestre, ha megkülönböztető fény- és hangjelzést használó jármű (sziréna, pl. mentő, rendőr, tűzoltó) közeledik?",
    answers: [
      "Igen, mert nekünk van elsőbbségünk a zebrán",
      "Nem, tilos az úttestre lépni, az úttesten lévőknek pedig azonnal szabaddá kell tenniük az utat",
      "Igen, ha gyorsan át tudunk futni előttük",
      "Csak akkor, ha piros a lámpájuk"
    ],
    correctAnswer: 1,
    explanation: "A megkülönböztető jelzéseket használó járműveknek minden helyzetben abszolút elsőbbségük van. Tilos eléjük lépni, segíteni kell a haladásukat."
  },
  {
    id: "gyal_9",
    category: "gyalogos",
    difficulty: "medium",
    question: "Átkelhet-e a gyalogos olyan helyen, ahol nincs zebra, ha a közelben (100 méteren belül) van kijelölt átkelőhely?",
    answers: [
      "Igen, ha lusta elgyalogolni a zebráig",
      "Nem, ha 100 méteren belül van zebra, kötelező azt használni",
      "Igen, de csak futva",
      "Igen, ha nincs nagy forgalom"
    ],
    correctAnswer: 1,
    explanation: "Ha 100 méteren belül található kijelölt gyalogos-átkelőhely (zebra), akkor a gyalogos köteles azt igénybe venni a biztonsága érdekében."
  },
  {
    id: "gyal_10",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hogyan kell átkelni az úttesten, ha nincs a közelben kijelölt átkelőhely?",
    answers: [
      "Cikkcakkban, lassan",
      "A legrövidebb úton (merőlegesen), megállás nélkül, tempósan",
      "Átlósan haladva, hogy több autót lássunk",
      "Tilos átkelni, ha nincs zebra"
    ],
    correctAnswer: 1,
    explanation: "Zebra hiányában az úttesten merőlegesen (a legrövidebb úton), alapos körülnézés után, folyamatosan haladva kell átkelni."
  },
  {
    id: "gyal_11",
    category: "gyalogos",
    difficulty: "easy",
    question: "Miért veszélyes hirtelen kilépni egy parkoló vagy álló autó mögül az úttestre?",
    answers: [
      "Mert megkarcoljuk a parkoló autót",
      "Mert a közeledő autósok nem látnak minket az álló járműtől, így nem tudnak időben lefékezni",
      "Mert piszkos lesz a ruhánk",
      "Nem veszélyes, ha óvatosak vagyunk"
    ],
    correctAnswer: 1,
    explanation: "Az álló jármű kitakarja a gyalogost az autósok elől. Hirtelen kilépésnél a sofőrnek esélye sincs megállni. Ezért ezt kerülni kell!"
  },
  {
    id: "gyal_12",
    category: "gyalogos",
    difficulty: "medium",
    question: "Hogyan kell a gyalogosoknak csoportban haladniuk az úttesten, ha nincs járda?",
    answers: [
      "Egymás mellett, minél szélesebben",
      "Egy sorban, szorosan a jobb szélén",
      "Az út jobb szélén, legfeljebb egymás mellett ketten haladva",
      "Cikkcakkban, szétszóródva"
    ],
    correctAnswer: 2,
    explanation: "Gyalogosok csoportja az út jobb szélén, legfeljebb két egymás melletti sorban haladhat, sötétben pedig lámpával kell világítaniuk."
  },
  {
    id: "gyal_13",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mit kell viselnie a gyalogosnak éjszaka vagy rossz látási viszonyok között lakott területen kívül az út szélén?",
    answers: ["Kabátot", "Fényvisszaverő mellényt vagy fényvisszaverő elemet", "Kalapot", "Esernyőt"],
    correctAnswer: 1,
    explanation: "Sötétben vagy ködben lakott területen kívül a gyalogosnak kötelező fényvisszaverő mellényt vagy ruházatot viselnie, hogy látható legyen az autósoknak."
  },
  {
    id: "gyal_14",
    category: "gyalogos",
    difficulty: "medium",
    question: "Szabad-e gyalogosnak a kerékpárúton gyalogolnia, ha van mellette járda?",
    answers: [
      "Igen, mert ott simább az aszfalt",
      "Nem, ha van járda, a gyalogosnak tilos a kerékpárutat használnia",
      "Igen, ha siet",
      "Igen, ha kutyát sétáltat"
    ],
    correctAnswer: 1,
    explanation: "Ha van járda, a gyalogos nem használhatja a kerékpárutat, mert akadályozza és veszélyezteti a kerékpárosokat."
  },
  {
    id: "gyal_15",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mi a teendőnk gyalogosként, ha a járdát jég vagy hó borítja és csúszik?",
    answers: [
      "Az úttesten megyünk inkább",
      "Fokozott óvatossággal, apróbb lépésekkel, figyelve haladunk a járdán",
      "Futunk, hogy hamarabb túl legyünk rajta",
      "Csúszkálunk rajta, hátha elesünk"
    ],
    correctAnswer: 1,
    explanation: "Csúszós járdán lassan, apró léptekkel kell haladni. Inkább tartsuk a kezünket szabadon (ne a zsebünkben), hogy segítsen az egyensúlyozásban."
  },
  {
    id: "gyal_16",
    category: "gyalogos",
    difficulty: "easy",
    question: "Szabad-e gyalogosnak az autópályán gyalogolnia?",
    answers: [
      "Igen, a leállósáv szélén",
      "Nem, autópályán gyalogos nem tartózkodhat, ez rendkívül életveszélyes és tilos!",
      "Igen, ha lerobbant a családi autó",
      "Csak nappal"
    ],
    correctAnswer: 1,
    explanation: "Autópályán gyalogosan közlekedni szigorúan tilos. Ha az autó lerobbant, a szalagkorláton kívül kell várakozni láthatósági mellényben."
  },
  {
    id: "gyal_17",
    category: "gyalogos",
    difficulty: "hard",
    question: "Ki irányíthatja a gyalogosok forgalmát a jelzőlámpán és a rendőrön kívül?",
    answers: [
      "Egy felnőtt járókelő",
      "A polgárőr vagy a katona is, ha a forgalmat irányítja",
      "Senki más",
      "Bármelyik autós"
    ],
    correctAnswer: 1,
    explanation: "A rendőrön kívül bizonyos esetekben a polgárőrök, katonák, vasúti átjárónál a vasutasok, vagy útmunkáknál a jelzőőrök is irányíthatják a forgalmat."
  },
  {
    id: "gyal_18",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hogyan kell leszállni a buszról vagy villamosról, ha az úttestre lépünk?",
    answers: [
      "Hirtelen leugrunk és futunk az út túloldalára",
      "Körülnézünk, óvatosan lépünk le az úttestre, és azonnal a járdára húzódunk",
      "Megállunk a busz előtt beszélgetni",
      "A busz mögé bújunk"
    ],
    correctAnswer: 1,
    explanation: "Ha a buszról az úttestre kell leszállnunk, fokozottan kell figyelnünk a busz mellett elhaladó autókra, és azonnal a járdára kell lépnünk."
  },
  {
    id: "gyal_19",
    category: "gyalogos",
    difficulty: "medium",
    question: "Gyalogosként mikor van elsőbbségünk az irányt változtató gépjárművel szemben?",
    answers: [
      "Soha",
      "Ha a jármű arról az útról kanyarodik le, amelyen mi át akarunk kelni",
      "Csak akkor, ha integet a sofőr",
      "Minden esetben, függetlenül mindentől"
    ],
    correctAnswer: 1,
    explanation: "A bekanyarodó járműnek elsőbbséget kell adnia annak a gyalogosnak, aki azon az úton kel át, amelyre a jármű rákanyarodik (még ha nincs is ott zebra)."
  },
  {
    id: "gyal_20",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mit csinálj, ha labdázás közben a labda kigurul az úttestre?",
    answers: [
      "Azonnal utánafutva elkapod",
      "Megállsz az úttest szélén, megvárod, amíg elmegy a forgalom, és csak biztonságban, szülői segítséggel vagy óvatosan hozod vissza",
      "Sírni kezdesz az út közepén",
      "Megkéred a kutyádat, hogy hozza ki"
    ],
    correctAnswer: 1,
    explanation: "Soha nem szabad a kiguruló labda után futni! Az autósok nem számítanak a hirtelen kirohanó gyerekre. Mindig állj meg, nézz körül és várj!"
  }
];
