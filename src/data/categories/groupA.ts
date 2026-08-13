import { Question } from "../../types";

export const groupAQuestions: Question[] = [
  // --- SEBESSÉG (20 questions) ---
  {
    id: "seb_1",
    category: "sebesség",
    difficulty: "easy",
    question: "Mennyi a megengedett legnagyobb sebesség kerékpárral lakott területen kívül, ha a kerékpáros fejvédő sisakot visel és utast nem szállít?",
    answers: [
      "30 km/h",
      "40 km/h",
      "50 km/h",
      "60 km/h"
    ],
    correctAnswer: 2,
    explanation: "Ha sisakot viselsz és nem szállítasz utast, lakott területen kívül legfeljebb 50 km/h-val tekerhetsz. Sisak nélkül a határ 40 km/h."
  },
  {
    id: "seb_2",
    category: "sebesség",
    difficulty: "easy",
    question: "Lakott területen belül (városban, faluban) általában mennyi a gépjárművek maximális sebességhatára?",
    answers: [
      "30 km/h",
      "70 km/h",
      "90 km/h",
      "50 km/h"
    ],
    correctAnswer: 3,
    explanation: "Lakott területen belül a gépjárművek általános sebességhatára 50 km/h a biztonságos együttélés érdekében."
  },
  {
    id: "seb_3",
    category: "sebesség",
    difficulty: "medium",
    question: "Mennyi a megengedett legnagyobb sebesség kerékpárral gyalog- és kerékpárúton?",
    answers: [
      "20 km/h",
      "10 km/h",
      "30 km/h",
      "40 km/h"
    ],
    correctAnswer: 0,
    explanation: "Gyalog- és kerékpárúton a kerékpárral közlekedő jármű legfeljebb 20 km/h sebességgel haladhat."
  },
  {
    id: "seb_4",
    category: "sebesség",
    difficulty: "easy",
    question: "Mennyi a kerékpár általános megengedett legnagyobb sebessége kerékpársávon, ha más szabály nem állapít meg eltérő korlátozást?",
    answers: [
      "20 km/h",
      "40 km/h",
      "30 km/h",
      "50 km/h"
    ],
    correctAnswer: 1,
    explanation: "A kerékpár általános megengedett legnagyobb sebessége 40 km/h; a helyi jelzések és az adott útfelület szabályai további korlátozást írhatnak elő."
  },
  {
    id: "seb_5",
    category: "sebesség",
    difficulty: "medium",
    question: "Ha kerékpárral a járdán vagy kénytelen haladni (mert az úttest alkalmatlan), mekkora a megengedett legnagyobb sebességed?",
    answers: [
      "5 km/h",
      "20 km/h",
      "10 km/h",
      "15 km/h"
    ],
    correctAnswer: 2,
    explanation: "A járdán csak a gyalogosok zavarása nélkül, maximum 10 km/h sebességgel szabad kerékpározni, ha az úttest kerékpározásra alkalmatlan."
  },
  {
    id: "seb_6",
    category: "sebesség",
    difficulty: "easy",
    question: "Miért fontos betartani a sebességkorlátozásokat az iskola környékén?",
    answers: [
      "Hogy ne csapjunk zajt",
      "Hogy ne kapjon büntetést az autós",
      "Mert az iskolások nem ismerik a KRESZ-t",
      "A kisebb sebesség csökkenti a fékutat."
    ],
    correctAnswer: 3,
    explanation: "Kisebb sebességnél a reakcióidő alatt megtett út és a fékút is sokkal rövidebb, így elkerülhető a baleset, ha egy kisgyerek hirtelen az útra lép."
  },
  {
    id: "seb_7",
    category: "sebesség",
    difficulty: "easy",
    question: "Melyik közlekedhet szabályosan az alábbiak közül autópályán?",
    answers: [
      "Személygépkocsi",
      "Traktor",
      "Kerékpár",
      "Segédmotoros kerékpár"
    ],
    correctAnswer: 0,
    explanation: "Az autópályára a kerékpár, a segédmotoros kerékpár és a traktor nem hajthat fel; a személygépkocsi igen."
  },
  {
    id: "seb_8",
    category: "sebesség",
    difficulty: "medium",
    question: "Lakott területen kívüli országúton mennyi az autók általános sebességhatára?",
    answers: [
      "50 km/h",
      "90 km/h",
      "70 km/h",
      "110 km/h"
    ],
    correctAnswer: 1,
    explanation: "Országúton, lakott területen kívül a személygépkocsik maximális megengedett sebessége 90 km/h."
  },
  {
    id: "seb_9",
    category: "sebesség",
    difficulty: "easy",
    question: "Mit jelent az 'ajánlott sebesség' jelzőtábla (kék négyzetben fehér szám)?",
    answers: [
      "Kötelező annyival menni",
      "Tilos annál lassabban menni",
      "A megjelölt sebességet javasolja.",
      "Tilos annál gyorsabban menni – a megadott helyzetben"
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
      "Csak a benzin ára",
      "A gépjármű színe",
      "Csak az, hogy sietünk-e – az adott körülmények között",
      "Az időjárás, látási, út- és forgalmi viszonyok."
    ],
    correctAnswer: 3,
    explanation: "A sebességet mindig az útviszonyokhoz (pl. eső, jég, köd) és a forgalomhoz kell igazítani. Rossz időben lassabban kell menni a táblán megengedettnél is!"
  },
  {
    id: "seb_11",
    category: "sebesség",
    difficulty: "medium",
    question: "Mennyivel mehet egy kerékpáros lakott területen kívül fejvédő sisak NÉLKÜL?",
    answers: [
      "30 km/h",
      "40 km/h",
      "50 km/h",
      "60 km/h"
    ],
    correctAnswer: 1,
    explanation: "Lakott területen kívül, ha nem viselsz sisakot, a megengedett legnagyobb sebességed kerékpárral 40 km/h."
  },
  {
    id: "seb_12",
    category: "sebesség",
    difficulty: "easy",
    question: "Mit kell tenned gépjárművel vagy biciklivel a 'Sebességkorlátozás 30' tábla után?",
    answers: [
      "Legalább 30 km/h-val kell haladni",
      "Figyelmen kívül hagyhatod, ha üres az út",
      "Legfeljebb 30 km/h-val szabad haladni",
      "Pontosan 30-cal kell menni, se többel, se kevesebbel"
    ],
    correctAnswer: 2,
    explanation: "A sebességkorlátozó tábla azt jelzi, hogy legfeljebb a táblán megjelölt sebességgel (itt 30 km/h) szabad közlekedni."
  },
  {
    id: "seb_13",
    category: "sebesség",
    difficulty: "hard",
    question: "Mennyi a megengedett legnagyobb sebesség kerékpárral lakott területen?",
    answers: [
      "20 km/h",
      "30 km/h",
      "50 km/h",
      "40 km/h"
    ],
    correctAnswer: 3,
    explanation: "Lakott területen kerékpárral legfeljebb 40 km/h sebességgel szabad közlekedni."
  },
  {
    id: "seb_14",
    category: "sebesség",
    difficulty: "easy",
    question: "Mit csinál az autó fékútja, ha megduplázzuk a sebességet?",
    answers: [
      "Körülbelül négyszeresére nő.",
      "Megduplázódik",
      "Ugyanakkora marad – az adott körülmények között",
      "A felére csökken"
    ],
    correctAnswer: 0,
    explanation: "A fékút a sebesség négyzetével arányos, így kétszeres sebességnél a fékút a négyszeresére nő! Ezért nagyon veszélyes a gyorshajtás."
  },
  {
    id: "seb_15",
    category: "sebesség",
    difficulty: "medium",
    question: "Mennyi a megengedett legnagyobb sebesség gyalogos-övezetbe engedéllyel behajtó járművel?",
    answers: [
      "20 km/h",
      "10 km/h",
      "30 km/h",
      "40 km/h"
    ],
    correctAnswer: 1,
    explanation: "A gyalogos-övezetbe engedéllyel behajtó jármű legfeljebb 10 km/h-val közlekedhet, és a gyalogosoknak elsőbbséget kell adnia."
  },
  {
    id: "seb_16",
    category: "sebesség",
    difficulty: "easy",
    question: "Hogyan mérheti a rendőrség a sebességet?",
    answers: [
      "Csak szemmel követve",
      "A motor hangja alapján",
      "Sebességmérő eszközzel.",
      "Stopperórával mérve a távolságot"
    ],
    correctAnswer: 2,
    explanation: "A rendőrség modern lézeres és radaros sebességmérő eszközöket (trafipaxot) használ a sebesség pontos mérésére a biztonság érdekében."
  },
  {
    id: "seb_17",
    category: "sebesség",
    difficulty: "hard",
    question: "Mennyi a megengedett legnagyobb sebesség lakó-pihenő övezetben?",
    answers: [
      "10 km/h",
      "30 km/h",
      "40 km/h",
      "20 km/h"
    ],
    correctAnswer: 3,
    explanation: "Lakó-pihenő övezetben a megengedett legnagyobb sebesség 20 km/h."
  },
  {
    id: "seb_18",
    category: "sebesség",
    difficulty: "easy",
    question: "Miért veszélyes, ha túl lassan halad egy autó az országúton indokolatlanul?",
    answers: [
      "Veszélyes előzéshez és torlódáshoz vezethet.",
      "Mert elalszik a sofőr",
      "Mert lemerül az akkumulátor",
      "Nem veszélyes, a lassúság mindig biztonságos"
    ],
    correctAnswer: 0,
    explanation: "Az indokolatlanul lassú haladás is balesetveszélyes, mert türelmetlenséget és veszélyes előzési manővereket válthat ki a többi sofőrből."
  },
  {
    id: "seb_19",
    category: "sebesség",
    difficulty: "medium",
    question: "Mennyivel mehet egy autó 'Gyalog- és kerékpárút' tábla után, ha engedéllyel behajthat?",
    answers: [
      "10 km/h",
      "20 km/h",
      "30 km/h",
      "50 km/h"
    ],
    correctAnswer: 1,
    explanation: "Ha egy gépjármű engedéllyel behajthat a gyalog- és kerékpárútra, ott legfeljebb 20 km/h sebességgel közlekedhet."
  },
  {
    id: "seb_20",
    category: "sebesség",
    difficulty: "easy",
    question: "Mi a teendőnk, ha kerékpárral lejtőn lefelé haladunk és nagyon felgyorsulunk?",
    answers: [
      "Óvatosan fékezz mindkét fékkel.",
      "Örülünk a sebességnek és nem fékezünk",
      "Létesszük a lábunkat a földre fék gyanánt",
      "Hirtelen behúzzuk az első féket teljes erőből"
    ],
    correctAnswer: 0,
    explanation: "Lejtőn lefelé mindig óvatosan kell fékezni mindkét fékkel. A hirtelen első fék használat miatt átbukhatunk a kormányon!"
  },
  // --- KERÉKPÁROS KÖZLEKEDÉS (20 questions) ---
  {
    id: "ker_1",
    category: "kerekpar",
    difficulty: "easy",
    question: "Melyik kötelező tartozéka a kerékpárnak a következők közül?",
    answers: [
      "Az előírt világítás és fényvisszaverők.",
      "Kulacstartó",
      "Kilométeróra",
      "Sárvédő és csomagtartó – a megadott helyzetben"
    ],
    correctAnswer: 0,
    explanation: "A kerékpár kötelező felszerelése: egy első fehér és egy hátsó piros lámpa, küllőprizmák, csengő és két egymástól független fék."
  },
  {
    id: "ker_2",
    category: "kerekpar",
    difficulty: "easy",
    question: "Hány éves kortól szabad főútvonalon kerékpározni önállóan?",
    answers: [
      "10 év",
      "12 év",
      "14 év",
      "16 év"
    ],
    correctAnswer: 1,
    explanation: "Főútvonalon csak a 12. életévét betöltött személy kerékpározhat önállóan, mivel a főutak forgalmasak és veszélyesek."
  },
  {
    id: "ker_3",
    category: "kerekpar",
    difficulty: "easy",
    question: "Ha az út mellett kijelölt kerékpárút van, mi a főszabály?",
    answers: [
      "A járdát kell használni",
      "Csak az úttesten szabad haladni",
      "A kerékpárutat kell használni",
      "Bármelyik felület választható"
    ],
    correctAnswer: 2,
    explanation: "Ha a közlekedési szabályok szerint kijelölt kerékpárút áll rendelkezésre, azt kell igénybe venni; a konkrét helyi jelzéseket és kivételeket is figyelembe kell venni."
  },
  {
    id: "ker_4",
    category: "kerekpar",
    difficulty: "medium",
    question: "Hogyan kell jelezni a kerékpárosnak, ha jobbra vagy balra szeretne kanyarodni?",
    answers: [
      "Kiabálással",
      "A fejünk biccentésével",
      "Nem kell jelezni, az autósoknak figyelniük kell ránk",
      "A megfelelő oldali kar vízszintes kinyújtásával"
    ],
    correctAnswer: 3,
    explanation: "Irányváltoztatási szándékunkat mindig időben, jól látható módon kell jeleznünk a megfelelő karunk oldalra kinyújtásával."
  },
  {
    id: "ker_5",
    category: "kerekpar",
    difficulty: "easy",
    question: "Kétkerekű kerékpáron hány éves kortól szállítható legfeljebb egy, 10 évesnél fiatalabb gyermek?",
    answers: [
      "16 éves kortól, gyermeküléssel.",
      "21 éves kortól – az adott körülmények között",
      "14 éves kortól",
      "18 éves kortól"
    ],
    correctAnswer: 0,
    explanation: "Kétkerekű kerékpáron egy legalább 16 éves személy egy, 10 évesnél fiatalabb gyermeket szállíthat megfelelő gyermekülésen."
  },
  {
    id: "ker_6",
    category: "kerekpar",
    difficulty: "easy",
    question: "Milyen színűnek kell lennie a kerékpár első lámpájának?",
    answers: [
      "Kék",
      "Fehér vagy kadmiumsárga.",
      "Zöld",
      "Piros – az adott forgalmi helyzetben"
    ],
    correctAnswer: 1,
    explanation: "A kerékpár első lámpájának fehérnek vagy kadmiumsárgának kell lennie, míg a hátsó lámpa kizárólag piros lehet."
  },
  {
    id: "ker_7",
    category: "kerekpar",
    difficulty: "easy",
    question: "Melyik kötelező hangjelző eszköz a kerékpáron?",
    answers: [
      "Duda",
      "Síp",
      "Csengő",
      "Sziréna"
    ],
    correctAnswer: 2,
    explanation: "A kerékpáron kötelező felszerelés a hangjelzésre szolgáló csengő. A duda vagy síp használata nem helyettesíti ezt."
  },
  {
    id: "ker_8",
    category: "kerekpar",
    difficulty: "medium",
    question: "Mit kell tenni, ha kerékpárral kijelölt gyalogos-átkelőhelyhez (zebrához) érsz, és át akarsz kelni rajta?",
    answers: [
      "Gyorsan áttekersz rajta",
      "Csöngetsz, hogy az autók álljanak meg",
      "Lassan, kanyarogva tekersz át a gyalogosok között",
      "Leszállsz a kerékpárról és gyalogosan tolod át"
    ],
    correctAnswer: 3,
    explanation: "A zebrán a kerékpárosnak nincs elsőbbsége. Le kell szállni a bicikliről és gyalogosan, tolva kell átkelni rajta."
  },
  {
    id: "ker_9",
    category: "kerekpar",
    difficulty: "easy",
    question: "Mikor kötelező a kerékpárosnak fényvisszaverő ruházatot viselnie?",
    answers: [
      "Fényvisszaverő ruházat.",
      "Csak esőben",
      "Csak városban",
      "Mindenhol nappal – az adott forgalmi helyzetben"
    ],
    correctAnswer: 0,
    explanation: "Lakott területen kívül az úttesten éjszaka vagy korlátozott látási viszonyok között a kerékpárosnak fényvisszaverő ruházatot kell viselnie."
  },
  {
    id: "ker_10",
    category: "kerekpar",
    difficulty: "medium",
    question: "Szabad-e elengedett kormánnyal kerékpározni az úton?",
    answers: [
      "Csak akkor, ha nem jön autó",
      "Nem, legalább egy kézzel fogni kell.",
      "Igen, de csak a kerékpárúton",
      "Igen, ha már nagyon jól tudunk egyensúlyozni"
    ],
    correctAnswer: 1,
    explanation: "A KRESZ előírja, hogy a kerékpárt legalább egy kézzel folyamatosan fogni kell. Elengedett kormánnyal tekerni szigorúan tilos és veszélyes!"
  },
  {
    id: "ker_11",
    category: "kerekpar",
    difficulty: "easy",
    question: "Ha az úttest jobb oldalán álló akadályt kell kikerülnöd kerékpárral, hogyan jársz el?",
    answers: [
      "Átvágsz rajta",
      "Jobbról kerülöd ki",
      "Megállsz és mindig leszállsz – a megadott helyzetben",
      "Balra, ellenőrzés és irányjelzés után."
    ],
    correctAnswer: 3,
    explanation: "A jobb oldalon lévő akadály kikerüléséhez a bal oldali irányváltoztatást az előírások szerint jelezni kell, és meg kell győződni a manőver veszélytelenségéről."
  },
  {
    id: "ker_12",
    category: "kerekpar",
    difficulty: "medium",
    question: "Hogyan kell kerékpárral az úttesten haladni, ha nincs erre kijelölt kerékpáros létesítmény?",
    answers: [
      "A menetirány szerinti jobb oldalon.",
      "A járdán",
      "Az úttest bal szélén",
      "Középen, a sáv tengelyében – a megadott helyzetben"
    ],
    correctAnswer: 0,
    explanation: "A kerékpárosra is vonatkozik a jobbra tartási kötelezettség: az úttest menetirány szerinti jobb oldalán, a lehetőséghez képest a széléhez húzódva kell haladni."
  },
  {
    id: "ker_13",
    category: "kerekpar",
    difficulty: "easy",
    question: "Szabad-e kerékpárral autópályán vagy autóúton közlekedni?",
    answers: [
      "Csak nappal, jó időben",
      "Nem.",
      "Igen, ha nincs nagy forgalom",
      "Igen, ha a leállósávban megyünk"
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
      "Csak kis testű kutyát szabad",
      "Nem, állatot vezetni tilos.",
      "Igen, de csak füves területen"
    ],
    correctAnswer: 2,
    explanation: "A KRESZ tiltja, hogy kerékpárral állatot vezessünk. A kutya hirtelen rántása súlyos esést és balesetet okozhat."
  },
  {
    id: "ker_15",
    category: "kerekpar",
    difficulty: "medium",
    question: "Mit jelent a kerékpáros fejvédő sisak viselése?",
    answers: [
      "Melegíti a fejet télen",
      "Csak dísz, nem nyújt védelmet",
      "Csak versenyzőknek kötelező",
      "Védi a fejet."
    ],
    correctAnswer: 3,
    explanation: "Bár lakott területen belül nem kötelező, a sisak viselése erősen ajánlott, mert eséskor életet menthet és megvédi a fejet a sérüléstől."
  },
  {
    id: "ker_16",
    category: "kerekpar",
    difficulty: "easy",
    question: "Hány féknek kell lennie a kerékpáron a szabályok szerint?",
    answers: [
      "Két egymástól független fék.",
      "Egy fék elég",
      "Három féknek",
      "Nem kötelező a fék, ha lábbal tudunk fékezni"
    ],
    correctAnswer: 0,
    explanation: "A kerékpárt fel kell szerelni két, egymástól függetlenül működő (egy első és egy hátsó) fékkel, amelyek biztonságosan lassítják a biciklit."
  },
  {
    id: "ker_17",
    category: "kerekpar",
    difficulty: "hard",
    question: "Hol haladhatnak a kerékpárosok egymás mellett?",
    answers: [
      "Sehol",
      "Kijelölt kerékpáros létesítményen, ahol engedett.",
      "Csak autópályán",
      "Az úttesten minden esetben – a megadott helyzetben"
    ],
    correctAnswer: 1,
    explanation: "Az úttesten általában egy sorban kell kerékpározni; a KRESZ egyes kerékpáros létesítményeken lehetővé teszi az egymás melletti haladást."
  },
  {
    id: "ker_18",
    category: "kerekpar",
    difficulty: "medium",
    question: "Szabad-e kerékpárral mobiltelefont kézben tartva használni menet közben?",
    answers: [
      "Igen, ha lassan megyünk",
      "Csak üzenetírásra szabad",
      "Nem.",
      "Igen, ha fülhallgató van nálunk"
    ],
    correctAnswer: 2,
    explanation: "Menet közben a kézben tartott mobiltelefon elvonja a figyelmet és rontja az egyensúlyt, ezért használata szigorúan tilos és büntetendő."
  },
  {
    id: "ker_19",
    category: "kerekpar",
    difficulty: "hard",
    question: "Mit kell tenni, ha kerékpárúton haladsz, de a kerékpárút keresztezi az úttestet és macskaszem/háromszög tábla van a kerékpárúton?",
    answers: [
      "Leszállva tolni kell",
      "Megállás nélkül kell áthaladni",
      "Neked van elsőbbséged, mert kerékpárúton vagy",
      "A jelzés szerint elsőbbséget kell adni."
    ],
    correctAnswer: 3,
    explanation: "Ha a kerékpárúton elsőbbségadás kötelező tábla van az úttest keresztezése előtt, akkor a biciklisnek kell elsőbbséget adnia az autóknak."
  },
  {
    id: "ker_20",
    category: "kerekpar",
    difficulty: "easy",
    question: "Mit jelez a kerékpár kerekére szerelt borostyánsárga prizma (küllőprizma)?",
    answers: [
      "Egyszerű díszítés",
      "Hogy gyorsabban forogjon a kerék – az adott körülmények között",
      "Oldalirányú láthatóságot biztosít.",
      "Megvédi a kereket a sérülésektől"
    ],
    correctAnswer: 2,
    explanation: "A küllőprizmák (legalább kerekenként 2 db) visszaverik az autók fényét, így a biciklis oldalról is jól láthatóvá válik éjszaka."
  },
  // --- GYALOGOS KÖZLEKEDÉS (20 questions) ---
  {
    id: "gyal_1",
    category: "gyalogos",
    difficulty: "easy",
    question: "Ha van járda, hol kell a gyalogosnak közlekednie?",
    answers: [
      "A parkolósávban",
      "A járdán",
      "A kerékpársávon",
      "Az úttest közepén"
    ],
    correctAnswer: 1,
    explanation: "A gyalogosnak főszabály szerint a járdán kell közlekednie, ha az rendelkezésre áll."
  },
  {
    id: "gyal_2",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hogyan kell a gyalogosnak haladnia az úttest szélén, ha nincs járda lakott területen kívül?",
    answers: [
      "Bárhol, nincs jelentősége",
      "Az út közepén, hogy jól látható legyen",
      "A bal oldalon, a forgalommal szemben",
      "A jobb oldalon, a gépjárműforgalommal megegyező irányban"
    ],
    correctAnswer: 2,
    explanation: "Ha nincs járda, a gyalogosnak a menetirány szerinti bal oldalon (szembe a forgalommal) kell haladnia, hogy időben lássa a felé közeledő autókat."
  },
  {
    id: "gyal_3",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hol a legbiztonságosabb átkelni a gyalogosnak az úton?",
    answers: [
      "Két parkoló autó között",
      "Ahol a leggyorsabban át tud futni",
      "Kanyarban, mert ott lassabban mennek a kocsik",
      "A kijelölt gyalogos-átkelőhelyen (zebrán)"
    ],
    correctAnswer: 3,
    explanation: "A legbiztonságosabb átkelési pont a kijelölt gyalogos-átkelőhely, azaz a zebra, vagy a közlekedési lámpával irányított kereszteződés."
  },
  {
    id: "gyal_4",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mit tegyél a zebránál, mielőtt az úttestre lépsz?",
    answers: [
      "Az átkelés veszélytelenségét ellenőrizni kell.",
      "Lépj le azonnal",
      "Fuss át minél gyorsabban",
      "Fordíts hátat a forgalomnak – a megadott helyzetben"
    ],
    correctAnswer: 0,
    explanation: "A gyalogos az úttestre csak akkor léphet, ha az áthaladás veszélytelen, és a járműforgalmat nem zavarja."
  },
  {
    id: "gyal_5",
    category: "gyalogos",
    difficulty: "easy",
    question: "Milyen színű gyalogos lámpánál szabad átkelni az úton?",
    answers: [
      "Piros",
      "Zöld",
      "Sárga",
      "Villogó piros"
    ],
    correctAnswer: 1,
    explanation: "Kizárólag a folyamatos zöld jelzésnél szabad megkezdeni az átkelést a gyalogos-átkelőhelyen."
  },
  {
    id: "gyal_6",
    category: "gyalogos",
    difficulty: "medium",
    question: "Mi a teendő, ha átkelés közben villogni kezd a zöld gyalogosjelzés?",
    answers: [
      "Fordulj vissza",
      "Fuss vissza a járdára",
      "Folytasd az átkelést.",
      "Állj meg az úttest közepén"
    ],
    correctAnswer: 2,
    explanation: "A villogó zöld az áthaladásra engedélyezett idő végét jelzi; aki már megkezdte az átkelést, fejezze be biztonságosan."
  },
  {
    id: "gyal_7",
    category: "gyalogos",
    difficulty: "easy",
    question: "Szabad-e fülhallgatót viselni és a telefont nézni az úton való átkelés közben?",
    answers: [
      "Igen, ha gyorsan futunk",
      "Igen, ha halljuk a zenét",
      "Csak akkor, ha nincs forgalom",
      "Nem, elvonja a figyelmet."
    ],
    correctAnswer: 3,
    explanation: "Átkeléskor teljes figyelemre van szükség. A telefonozás és fülhallgató használata életveszélyes, mert kizárja a külvilág hangjait."
  },
  {
    id: "gyal_8",
    category: "gyalogos",
    difficulty: "medium",
    question: "Gyalogosként léphetünk-e az úttestre, ha megkülönböztető fény- és hangjelzést használó jármű (sziréna, pl. mentő, rendőr, tűzoltó) közeledik?",
    answers: [
      "Nem, a megkülönböztetett járműnek utat kell adni.",
      "Csak akkor, ha piros a lámpájuk",
      "Igen, ha gyorsan át tudunk futni előttük",
      "Igen, mert nekünk van elsőbbségünk a zebrán – a megadott helyzetben"
    ],
    correctAnswer: 0,
    explanation: "A megkülönböztető jelzéseket használó járműveknek minden helyzetben abszolút elsőbbségük van. Tilos eléjük lépni, segíteni kell a haladásukat."
  },
  {
    id: "gyal_9",
    category: "gyalogos",
    difficulty: "medium",
    question: "Milyen távolságon belül található kijelölt gyalogos-átkelőhely esetén kell azt igénybe venni az úttesten történő átkeléshez?",
    answers: [
      "20 méteren belül",
      "50 méteren belül.",
      "100 méteren belül",
      "200 méteren belül"
    ],
    correctAnswer: 1,
    explanation: "Kijelölt gyalogos-átkelőhely hiányában a gyalogos akkor kelhet át máshol, ha a közelben 50 méteren belül nincs kijelölt átkelőhely vagy az átkelést szolgáló alul- vagy felüljáró."
  },
  {
    id: "gyal_10",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hogyan kell az úttesten átkelni kijelölt gyalogos-átkelőhely hiányában, ha az átkelés egyébként megengedett?",
    answers: [
      "Csak futva",
      "Cikkcakkban",
      "A legrövidebb úton, lehetőleg merőlegesen.",
      "Átlósan, minél hosszabb úton – a megadott helyzetben"
    ],
    correctAnswer: 2,
    explanation: "Az úttesten a legrövidebb útvonalon, lehetőleg merőlegesen kell áthaladni, és az átkelés során nem szabad indokolatlanul megállni."
  },
  {
    id: "gyal_11",
    category: "gyalogos",
    difficulty: "easy",
    question: "Miért veszélyes hirtelen kilépni egy parkoló vagy álló autó mögül az úttestre?",
    answers: [
      "Az álló jármű takarja a gyalogost.",
      "Mert piszkos lesz a ruhánk",
      "Mert megkarcoljuk a parkoló autót",
      "Nem veszélyes, ha óvatosak vagyunk"
    ],
    correctAnswer: 0,
    explanation: "Az álló jármű kitakarja a gyalogost az autósok elől. Hirtelen kilépésnél a sofőrnek esélye sincs megállni. Ezért ezt kerülni kell!"
  },
  {
    id: "gyal_12",
    category: "gyalogos",
    difficulty: "medium",
    question: "Hol közlekedhet a gyalogosok zárt csoportja az úttesten?",
    answers: [
      "Bármelyik oldalon – az adott körülmények között",
      "Az úttest menetirány szerinti jobb szélén.",
      "Az út bal szélén",
      "Az úttest közepén"
    ],
    correctAnswer: 1,
    explanation: "A gyalogosok zárt csoportja az úttesten annak menetirány szerinti jobb szélén közlekedhet."
  },
  {
    id: "gyal_13",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mikor kötelező a gyalogosnak fényvisszaverő ruházatot viselnie?",
    answers: [
      "Mindig",
      "Csak esőben",
      "Fényvisszaverő ruházat.",
      "Lakott területen nappal"
    ],
    correctAnswer: 2,
    explanation: "Lakott területen kívül éjszaka vagy korlátozott látási viszonyok között az úttesten közlekedő vagy az út szélén tartózkodó gyalogosnak fényvisszaverő ruházatot kell viselnie."
  },
  {
    id: "gyal_14",
    category: "gyalogos",
    difficulty: "medium",
    question: "Mit ír elő a KRESZ a gyalogos számára a gyalog- és kerékpárúton?",
    answers: [
      "Kötelező középen haladnia",
      "Kerékpárral kell közlekednie",
      "Mindig a kerékpárosok előtt haladhat",
      "Nem akadályozhatja a kerékpárosokat."
    ],
    correctAnswer: 3,
    explanation: "A gyalog- és kerékpárúton a gyalogos a kerékpáros forgalmat nem akadályozhatja és nem veszélyeztetheti."
  },
  {
    id: "gyal_15",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mi a teendőnk gyalogosként, ha a járdát jég vagy hó borítja és csúszik?",
    answers: [
      "Óvatosan, lassan haladunk.",
      "Az úttesten megyünk inkább",
      "Csúszkálunk rajta, hátha elesünk",
      "Futunk, hogy hamarabb túl legyünk rajta"
    ],
    correctAnswer: 0,
    explanation: "Csúszós járdán lassan, apró léptekkel kell haladni. Inkább tartsuk a kezünket szabadon (ne a zsebünkben), hogy segítsen az egyensúlyozásban."
  },
  {
    id: "gyal_16",
    category: "gyalogos",
    difficulty: "easy",
    question: "Szabad-e gyalogosnak az autópályán gyalogolnia?",
    answers: [
      "Csak nappal",
      "Nem.",
      "Igen, a leállósáv szélén",
      "Igen, ha lerobbant a családi autó"
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
      "Senki más",
      "Bármelyik autós",
      "A szabály szerint kijelölt forgalomirányító személy.",
      "Egy felnőtt járókelő – az adott forgalmi helyzetben"
    ],
    correctAnswer: 2,
    explanation: "A rendőrön kívül bizonyos esetekben a polgárőrök, katonák, vasúti átjárónál a vasutasok, vagy útmunkáknál a jelzőőrök is irányíthatják a forgalmat."
  },
  {
    id: "gyal_18",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hogyan kell leszállni a buszról vagy villamosról, ha az úttestre lépünk?",
    answers: [
      "A busz mögé bújunk",
      "Megállunk a busz előtt beszélgetni",
      "Hirtelen leugrunk és futunk az út túloldalára",
      "Óvatosan kell körülnézni és a járdára lépni."
    ],
    correctAnswer: 3,
    explanation: "Ha a buszról az úttestre kell leszállnunk, fokozottan kell figyelnünk a busz mellett elhaladó autókra, és azonnal a járdára kell lépnünk."
  },
  {
    id: "gyal_19",
    category: "gyalogos",
    difficulty: "medium",
    question: "Gyalogosként mikor van elsőbbségünk az irányt változtató gépjárművel szemben?",
    answers: [
      "Ha arra az útra kanyarodik, amelyen átkelsz.",
      "Soha",
      "Csak akkor, ha integet a sofőr",
      "Minden esetben, függetlenül mindentől – a megadott helyzetben"
    ],
    correctAnswer: 0,
    explanation: "A bekanyarodó járműnek elsőbbséget kell adnia annak a gyalogosnak, aki azon az úton kel át, amelyre a jármű rákanyarodik (még ha nincs is ott zebra)."
  },
  {
    id: "gyal_20",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mit csinálj, ha labdázás közben a labda kigurul az úttestre?",
    answers: [
      "Azonnal utánafutva elkapod",
      "Sírni kezdesz az út közepén",
      "Megkéred a kutyádat, hogy hozza ki",
      "Nem futsz utána az úttestre."
    ],
    correctAnswer: 3,
    explanation: "Soha nem szabad a kiguruló labda után futni! Az autósok nem számítanak a hirtelen kirohanó gyerekre. Mindig állj meg, nézz körül és várj!"
  }
];
