import { Question } from "../../types";

export const groupAQuestions: Question[] = [
  // --- SEBESSÉG (20 questions) ---
  {
    id: "seb_1",
    category: "sebesség",
    difficulty: "easy",
    question: "Mennyi a megengedett legnagyobb sebesség kerékpárral lakott területen kívül, ha a kerékpáros fejvédő sisakot visel és utast nem szállít?",
    answers: [
      "50 km/h, amennyiben fejvédő sisakot visel és utast sem szállít a járművön.",
      "40 km/h, mert lakott területen kívül a kerékpárosokra ez az általános határ.",
      "60 km/h, ha az útvonal teljesen belátható és nincsenek gyalogosok a közelben.",
      "30 km/h, mivel a kerékpárosok biztonsága érdekében a sebesség szigorúan limitált."
    ],
    correctAnswer: 0,
    explanation: "Ha sisakot viselsz és nem szállítasz utast, lakott területen kívül legfeljebb 50 km/h-val tekerhetsz. Sisak nélkül a határ 40 km/h."
  },
  {
    id: "seb_2",
    category: "sebesség",
    difficulty: "easy",
    question: "Lakott területen belül (városban, faluban) általában mennyi a gépjárművek maximális sebességhatára?",
    answers: [
      "60 km/h, amennyiben az úttest legalább két forgalmi sávval rendelkezik az adott irányba.",
      "40 km/h, ha nincsen külön sebességet szabályozó jelzőtábla kihelyezve az útszakaszon.",
      "50 km/h, ez az általános megengedett sebességhatár a biztonságos közlekedés érdekében.",
      "70 km/h, amennyiben a forgalom ritmusa ezt megkívánja és a látási viszonyok kedvezőek."
    ],
    correctAnswer: 2,
    explanation: "Lakott területen belül a gépjárművek általános sebességhatára 50 km/h a biztonságos együttélés érdekében."
  },
  {
    id: "seb_3",
    category: "sebesség",
    difficulty: "medium",
    question: "Mennyi a megengedett legnagyobb sebesség kerékpárral gyalog- és kerékpárúton?",
    answers: [
      "10 km/h, pontosan ugyanannyi, mint amennyivel a járdán szabadna haladnia a kerékpárosnak.",
      "30 km/h, abban az esetben, ha a kerékpárúton éppen nem tartózkodnak gyalogosok.",
      "40 km/h, megegyezően az úttesten megengedett maximális kerékpáros sebességhatárral.",
      "20 km/h, a gyalogosok biztonsága és a közös felület zavartalan használata érdekében."
    ],
    correctAnswer: 3,
    explanation: "Gyalog- és kerékpárúton a kerékpárral közlekedő jármű legfeljebb 20 km/h sebességgel haladhat."
  },
  {
    id: "seb_4",
    category: "sebesség",
    difficulty: "easy",
    question: "Mennyi a kerékpár megengedett legnagyobb sebessége kerékpársávon (amely az úttest része lakott területen), ha más szabály nem állapít meg eltérő korlátozást?",
    answers: [
      "50 km/h, mivel a kerékpársáv az úttest része, így a gépjárművekkel azonos határ érvényes.",
      "40 km/h, ez a kerékpárosokra vonatkozó általános sebességhatár lakott területen belül.",
      "30 km/h, a szorosan mellettük haladó gépjárművek okozta balesetveszély csökkentése miatt.",
      "20 km/h, megegyezően a gyalog- és kerékpárutakon előírt biztonságos maximális tempóval."
    ],
    correctAnswer: 1,
    explanation: "A kerékpár általános megengedett legnagyobb sebessége lakott területen 40 km/h. Mivel a kerékpársáv az úttest része, ez az érték a mérvadó."
  },
  {
    id: "seb_5",
    category: "sebesség",
    difficulty: "medium",
    question: "Ha kerékpárral a járdán vagy kénytelen haladni (mert az úttest kerékpározásra alkalmatlan), mekkora a megengedett legnagyobb sebességed?",
    answers: [
      "Legfeljebb 10 km/h, és a kerékpáros a gyalogosok forgalmát egyáltalán nem zavarhatja.",
      "Maximum 5 km/h, vagyis szigorúan csak a gyalogosok szokásos sétatempójában haladhat.",
      "Legfeljebb 15 km/h, amennyiben a járda kellően széles és nincsenek rajta járókelők.",
      "Maximum 20 km/h, ahogyan az a kijelölt gyalog- és kerékpárutakon is szabályos lenne."
    ],
    correctAnswer: 0,
    explanation: "A járdán csak a gyalogosok zavarása nélkül, maximum 10 km/h sebességgel szabad kerékpározni, ha az úttest kerékpározásra alkalmatlan."
  },
  {
    id: "seb_6",
    category: "sebesség",
    difficulty: "easy",
    question: "Miért kritikus fontosságú betartani a sebességkorlátozásokat az iskola és óvoda környékén?",
    answers: [
      "Azért, hogy a szülők kényelmesen és nyugodtan tudjanak parkolni a reggeli csúcsforgalomban.",
      "Hogy a gépjárművek motorzaja ne zavarja a pedagógusokat és a diákokat a tanítási órák alatt.",
      "A kisebb sebesség drasztikusan csökkenti a fékutat, így elkerülhető egy esetleges baleset.",
      "Kizárólag azért, mert ezeken a területeken a leggyakoribb a rendőrségi sebességmérés."
    ],
    correctAnswer: 2,
    explanation: "Kisebb sebességnél a reakcióidő alatt megtett út és a fékút is sokkal rövidebb, így elkerülhető a baleset, ha egy kisgyerek hirtelen az útra lép."
  },
  {
    id: "seb_7",
    category: "sebesség",
    difficulty: "easy",
    question: "Melyik jármű közlekedhet szabályosan a felsoroltak közül az autópályán?",
    answers: [
      "Lassú jármű és mezőgazdasági vontató, ha a szállított rakomány ezt szükségessé teszi.",
      "Személygépkocsi, valamint minden olyan motoros jármű, ami sík úton legalább 60 km/h-val képes haladni.",
      "Segédmotoros kerékpár és kerékpár, de kizárólag a leállósávban és fényvisszaverő mellényben.",
      "Minden olyan gépjármű, amely képes önerőből tartósan legalább 50 km/h sebességgel haladni."
    ],
    correctAnswer: 1,
    explanation: "Az autópályára csak olyan gépjármű hajthat fel, amely sík úton legalább 60 km/h sebességgel képes haladni. A kerékpár és a traktor ki van tiltva."
  },
  {
    id: "seb_8",
    category: "sebesség",
    difficulty: "medium",
    question: "Lakott területen kívüli egyéb úton (országúton) mennyi a személygépkocsik általános maximális sebességhatára?",
    answers: [
      "110 km/h, abban az esetben, ha az út fizikailag osztott (például szalagkorláttal elválasztott).",
      "80 km/h, ami megegyezik a tehergépkocsikra és autóbuszokra vonatkozó országúti limittel.",
      "90 km/h, amennyiben az időjárási, út- és látási viszonyok ezt biztonságosan lehetővé teszik.",
      "70 km/h, ha az útszakasz minősége nem megfelelő, vagy a forgalom sűrűsége megkívánja."
    ],
    correctAnswer: 2,
    explanation: "Országúton, lakott területen kívül a személygépkocsik és motorkerékpárok maximális megengedett sebessége általánosan 90 km/h."
  },
  {
    id: "seb_9",
    category: "sebesség",
    difficulty: "easy",
    question: "Mit jelent pontosan az 'Ajánlott sebesség' jelzőtábla (kék négyzetben fehér szám)?",
    answers: [
      "A táblán megjelölt sebességgel kötelező haladni, az annál gyorsabb vagy lassabb tempó szabálytalan.",
      "A táblán lévő sebességet javasolja a biztonságos haladás érdekében, de jogilag nem kötelező érvényű.",
      "A megjelölt sebességnél gyorsabban haladni tilos, ez gyakorlatilag egy sebességkorlátozó tábla.",
      "Tilos annál lassabban menni, ha a forgalom és az útviszonyok egyébként engednék a gyorsabb haladást."
    ],
    correctAnswer: 1,
    explanation: "Az ajánlott sebesség tábla nem kötelez, de azt javasolja, hogy kedvező viszonyok között a megjelölt sebességgel közlekedj a biztonság érdekében."
  },
  {
    id: "seb_10",
    category: "sebesség",
    difficulty: "medium",
    question: "Mi befolyásolja leginkább a biztonságos sebesség megválasztását (a relatív sebességtúllépés elkerülése érdekében)?",
    answers: [
      "Kizárólag az útburkolat minősége, az évszakok változása és a gépjármű műszaki állapota.",
      "Az aktuális időjárási, látási, út- és forgalmi viszonyok folyamatos és együttes mérlegelése.",
      "A megengedett maximális sebességhatár táblája és a sofőr személyes vezetési rutinja.",
      "Csak az a tény, hogy az adott útszakaszon telepítettek-e rögzített sebességmérő kamerákat."
    ],
    correctAnswer: 1,
    explanation: "A sebességet mindig az útviszonyokhoz (pl. eső, jég, köd) és a forgalomhoz kell igazítani. Rossz időben lassabban kell menni a táblán megengedettnél is!"
  },
  {
    id: "seb_11",
    category: "sebesség",
    difficulty: "medium",
    question: "Mennyivel közlekedhet egy kerékpáros lakott területen kívül, ha NEN visel fejvédő sisakot?",
    answers: [
      "30 km/h, mivel a sisak hiánya fokozott balesetveszélyt jelent a nagyobb sebességeknél.",
      "25 km/h, ahogyan az elektromos rásegítésű kerékpárok motoros hajtására is vonatkozik.",
      "50 km/h, ugyanannyival, mint azok a kerékpárosok, akik rendelkeznek bukósisakkal.",
      "40 km/h, ez az előírt sebességlimit a fejvédő sisak nélkül közlekedő biciklisek számára."
    ],
    correctAnswer: 3,
    explanation: "Lakott területen kívül, ha nem viselsz sisakot, a megengedett legnagyobb sebességed kerékpárral 40 km/h."
  },
  {
    id: "seb_12",
    category: "sebesség",
    difficulty: "easy",
    question: "Mit kell tenned gépjárművel vagy biciklivel a 'Sebességkorlátozás 30' tábla észlelése után?",
    answers: [
      "Kereken 30 km/h-val kell haladnod, se többel, se kevesebbel, hogy ne tartsd fel a forgalmat.",
      "Legfeljebb 30 km/h-val szabad haladnod az adott útszakaszon a tábla hatályának végéig.",
      "Legalább 30 km/h-val kötelező haladnod a forgalom folyamatosságának fenntartása érdekében.",
      "Figyelmen kívül hagyhatod, ha éppen nincsenek gyalogosok vagy más zavaró tényezők az úton."
    ],
    correctAnswer: 1,
    explanation: "A sebességkorlátozó tábla (piros karikában lévő szám) azt jelzi, hogy legfeljebb a táblán megjelölt sebességgel szabad közlekedni."
  },
  {
    id: "seb_13",
    category: "sebesség",
    difficulty: "hard",
    question: "Mennyi a megengedett legnagyobb sebesség kerékpárral lakott területen belül (városokban)?",
    answers: [
      "50 km/h, amennyiben a gépjárműforgalom is ekkora sebességgel haladhat a főútvonalon.",
      "20 km/h, megegyezően a kijelölt gyalog- és kerékpárutakon érvényes sebességkorlátozással.",
      "40 km/h, ez a kerékpárosokra vonatkozó legfelső megengedett határ lakott területen.",
      "30 km/h, a gyalogosok fokozott védelme és a kereszteződések beláthatósága érdekében."
    ],
    correctAnswer: 2,
    explanation: "Lakott területen kerékpárral - még az úttesten is - legfeljebb 40 km/h sebességgel szabad közlekedni."
  },
  {
    id: "seb_14",
    category: "sebesség",
    difficulty: "easy",
    question: "Hogyan változik meg egy jármű fékútja, ha a haladási sebességét a kétszeresére növeljük (pl. 40-ről 80-ra)?",
    answers: [
      "Pontosan a kétszeresére nő, mivel az egyenes arányosság törvényei érvényesülnek a fizikában.",
      "Nagyjából a felére csökken a modern, blokkolásgátlóval (ABS) felszerelt fékrendszerek miatt.",
      "Nem változik jelentősen, ha jó állapotúak az abroncsok és száraz az aszfaltburkolat.",
      "Körülbelül a négyszeresére nő, mivel a fékút a sebesség négyzetével arányosan növekszik."
    ],
    correctAnswer: 3,
    explanation: "A fékút a sebesség négyzetével arányos, így kétszeres sebességnél a fékút a négyszeresére nő! Ezért nagyon veszélyes a gyorshajtás."
  },
  {
    id: "seb_15",
    category: "sebesség",
    difficulty: "medium",
    question: "Mennyi a megengedett legnagyobb sebesség a 'Gyalogos övezet' (sétálóutca) területére engedéllyel behajtó járművel?",
    answers: [
      "Maximum 5 km/h, vagyis szigorúan csak a gyalogosok sétatempójában szabad haladni.",
      "Legfeljebb 10 km/h, és a jármű a gyalogosok forgalmát egyáltalán nem veszélyeztetheti.",
      "20 km/h, ami pontosan megegyezik a lakó-pihenő övezetben alkalmazott sebességlimittel.",
      "30 km/h, a járműforgalom zavartalansága és a terület gyors elhagyása érdekében."
    ],
    correctAnswer: 1,
    explanation: "A gyalogos övezetbe engedéllyel behajtó jármű legfeljebb 10 km/h-val közlekedhet, és a gyalogosoknak minden körülmények között elsőbbséget kell adnia."
  },
  {
    id: "seb_16",
    category: "sebesség",
    difficulty: "easy",
    question: "Milyen módon mérheti és rögzítheti a rendőrség hivatalosan a közlekedők sebességét?",
    answers: [
      "Hitelesített, modern radaros vagy lézeres sebességmérő berendezések (trafipax) alkalmazásával.",
      "A rendőrautó sebességmérő műszerének leolvasásával és annak fedélzeti kamerás rögzítésével.",
      "Kizárólag vizuális becsléssel, abban az esetben, ha a sebességtúllépés mértéke egyértelmű.",
      "Kézi stopperórával mérve az időt két előre meghatározott és felfestett útburkolati jel között."
    ],
    correctAnswer: 0,
    explanation: "A rendőrség hitelesített lézeres és radaros sebességmérő eszközöket használ a sebesség pontos, jogilag elfogadott mérésére."
  },
  {
    id: "seb_17",
    category: "sebesség",
    difficulty: "hard",
    question: "Mennyi a megengedett legnagyobb sebesség a kék táblával jelzett lakó-pihenő övezetben?",
    answers: [
      "Maximum 10 km/h, mivel itt az úttesten a gyermekek is játszhatnak és szaladgálhatnak.",
      "30 km/h, ahogyan az a csillapított forgalmú, egyenrangú útkereszteződésekben is megszokott.",
      "Legfeljebb 20 km/h sebességgel szabad az ilyen zónákban bármilyen járművel közlekedni.",
      "40 km/h, feltéve, hogy a sofőr meggyőződött arról, hogy nincsenek gyalogosok a közelben."
    ],
    correctAnswer: 2,
    explanation: "Lakó-pihenő övezetben (ahol a gyalogosok az úttestet teljes szélességében használhatják) a megengedett legnagyobb sebesség 20 km/h."
  },
  {
    id: "seb_18",
    category: "sebesség",
    difficulty: "easy",
    question: "Miért veszélyes, ha egy autó ok nélkül, indokolatlanul lassan halad az országúton?",
    answers: [
      "Mert a motor túlzottan felmelegedhet a megfelelő menetszél és hűtés hiánya miatt.",
      "Egyáltalán nem hordoz veszélyt, a lassú haladás minden körülmények között biztonságos.",
      "Mivel az indokolatlanul lassú haladás torlódást és veszélyes, agresszív előzéseket válthat ki.",
      "A modern gépjárművek biztonsági elektronikája letilthat a tartósan alacsony tempótól."
    ],
    correctAnswer: 2,
    explanation: "Az indokolatlanul lassú haladás balesetveszélyes, mert feltartja a forgalmat, türelmetlenséget és meggondolatlan előzési manővereket válthat ki a többi sofőrből."
  },
  {
    id: "seb_19",
    category: "sebesség",
    difficulty: "medium",
    question: "Mekkora sebességgel mehet egy gépjármű a 'Gyalog- és kerékpárút' tábla után, ha kivételes engedéllyel oda behajthat?",
    answers: [
      "Maximum 10 km/h sebességgel, csak gyalogos tempóban, a forgalmat nem zavarva.",
      "30 km/h sebességgel, ha az útburkolat szélessége és minősége ezt megengedi számára.",
      "Ugyanannyival, mint a lakott területen belüli utakon általában megengedett (50 km/h).",
      "Legfeljebb 20 km/h sebességgel haladhat a gyalogosok és kerékpárosok veszélyeztetése nélkül."
    ],
    correctAnswer: 3,
    explanation: "Ha egy gépjármű engedéllyel behajthat a gyalog- és kerékpárútra, ott legfeljebb 20 km/h sebességgel közlekedhet."
  },
  {
    id: "seb_20",
    category: "sebesség",
    difficulty: "easy",
    question: "Mi a helyes teendő, ha kerékpárral egy meredek lejtőn lefelé haladunk és a jármű túlságosan felgyorsul?",
    answers: [
      "Kizárólag a hátsó féket használjuk a lassításra, mivel az első fék behúzása szigorúan tilos.",
      "Mindkét fék (első és hátsó) egyidejű és óvatos adagolásával folyamatosan lassítjuk a kerékpárt.",
      "Kizárólag az első féket húzzuk be hirtelen és teljes erőből a maximális fékhatás eléréséhez.",
      "A cipőtalpunkat szorosan a talajhoz dörzsölve próbáljuk megfékezni a felgyorsult biciklit."
    ],
    correctAnswer: 1,
    explanation: "Lejtőn lefelé mindig mindkét féket egyszerre, óvatosan kell használni. A hirtelen első fék használata miatt átbukhatunk a kormányon!"
  },

  // --- KERÉKPÁROS KÖZLEKEDÉS (20 questions) ---
  {
    id: "ker_1",
    category: "kerekpar",
    difficulty: "easy",
    question: "Melyik felsorolás tartalmazza helyesen a kerékpár KRESZ által előírt kötelező tartozékait?",
    answers: [
      "Kilométeróra, visszapillantó tükör, láncvédő burkolat és legalább egy darab fék.",
      "Láthatósági mellény, sárvédő, csomagtartó és egy akkumulátoros, erős fényű első lámpa.",
      "Két független fék, csengő, fehér és piros lámpa, valamint a megfelelő fényvisszaverők.",
      "Bukósisak, kulacstartó, első kosár és két darab, egymástól teljesen független fékrendszer."
    ],
    correctAnswer: 2,
    explanation: "A kerékpár kötelező felszerelése: egy első fehér és egy hátsó piros lámpa, küllőprizmák, csengő és két egymástól függetlenül működő fék."
  },
  {
    id: "ker_2",
    category: "kerekpar",
    difficulty: "easy",
    question: "Hány éves kortól szabad főútvonalon (lakott területen kívül vagy belül) kerékpározni teljesen önállóan?",
    answers: [
      "10 éves kortól, feltéve, hogy a gyermek már biztonságosan ismeri a közlekedési szabályokat.",
      "14 éves kortól, amikor a fiatal már jogosult lehet megszerezni a segédmotoros jogosítványt.",
      "12 éves kortól megengedett az önálló kerékpározás a forgalmasabb főútvonalakon is.",
      "Bármilyen életkorban, ha a kerékpár megfelelően fel van szerelve és jó műszaki állapotú."
    ],
    correctAnswer: 2,
    explanation: "Főútvonalon csak a 12. életévét betöltött személy kerékpározhat önállóan, mivel a főutak forgalmasak és összetettebb helyzeteket teremtenek."
  },
  {
    id: "ker_3",
    category: "kerekpar",
    difficulty: "easy",
    question: "Mi a teendő, ha az úttest mellett egyértelműen kijelölt és táblával jelzett kerékpárút fut?",
    answers: [
      "A kerékpáros választhat, hogy a kerékpárúton vagy az úttest jobb szélén szeretne-e haladni.",
      "Kötelező a kerékpárutat használni, az úttesten ilyen esetben kerékpárral közlekedni tilos.",
      "A járdát kell használnia, mert az sokszor biztonságosabb a kiépített kerékpárutaknál is.",
      "Csak akkor kötelező ráhajtani, ha a kerékpárúton egyáltalán nincsen zavaró gyalogosforgalom."
    ],
    correctAnswer: 1,
    explanation: "Ha az úttest mellett kijelölt kerékpárút áll rendelkezésre, azt a kerékpárosoknak kötelező használniuk, az úttesten nem haladhatnak."
  },
  {
    id: "ker_4",
    category: "kerekpar",
    difficulty: "medium",
    question: "Hogyan kell szabályosan jeleznie a kerékpárosnak, ha a kereszteződésben jobbra vagy balra szeretne kanyarodni?",
    answers: [
      "Az irányváltoztatást a megfelelő oldali kar jól látható, vízszintes kinyújtásával kell jelezni.",
      "Hangjelzéssel (folyamatos csengőhasználattal) kell felhívnia a figyelmet a bekanyarodásra.",
      "A fejének és felsőtestének megfelelő irányba történő erőteljes elfordításával jelzi a szándékot.",
      "Nem kötelező jeleznie, de a kanyarodás előtt köteles hátranézni, hogy ellenőrizze a forgalmat."
    ],
    correctAnswer: 0,
    explanation: "Irányváltoztatási szándékunkat mindig időben, jól látható módon kell jeleznünk a megfelelő karunk oldalra (vízszintesen) kinyújtásával."
  },
  {
    id: "ker_5",
    category: "kerekpar",
    difficulty: "easy",
    question: "Milyen feltételekkel szállítható gyermek kétkerekű kerékpáron a KRESZ előírásai szerint?",
    answers: [
      "Bármilyen felnőtt személy szállíthat két gyermeket is, ha van elég hely a hátsó csomagtartón.",
      "Legalább 14 éves személy szállíthat egy kisgyermeket a kormányra rögzített fonott kosárban.",
      "Egy legalább 16 éves személy szállíthat egyetlen, 10 évnél fiatalabb gyermeket a pótülésen.",
      "Kizárólag 18 éves kortól megengedett, és a gyermeknek is viselnie kell a láthatósági mellényt."
    ],
    correctAnswer: 2,
    explanation: "Kétkerekű kerékpáron kizárólag a 16. életévét betöltött személy szállíthat egy darab, 10 évesnél fiatalabb gyermeket megfelelő gyermekülésen."
  },
  {
    id: "ker_6",
    category: "kerekpar",
    difficulty: "easy",
    question: "Milyen színűnek kell lennie a szabályosan felszerelt kerékpár ELSŐ lámpájának?",
    answers: [
      "Bármilyen színű lehet, a legfontosabb, hogy sötétben jól látható villogó fényt bocsásson ki.",
      "Kizárólag fehér vagy kadmiumsárga fényt adó világítóberendezés használata engedélyezett.",
      "Zöld vagy kék színűnek, hogy a kerékpáros egyértelműen megkülönböztethető legyen az autóktól.",
      "Piros színűnek kell lennie, hogy sűrű ködben vagy esőben is a lehető legmesszebbről látszódjon."
    ],
    correctAnswer: 1,
    explanation: "A kerékpár első lámpájának előre fehér vagy kadmiumsárga fényt kell adnia, míg a hátsó lámpa kizárólag piros fényt sugározhat."
  },
  {
    id: "ker_7",
    category: "kerekpar",
    difficulty: "easy",
    question: "Mi a kerékpáron hivatalosan elfogadott, kötelezően előírt hangjelző eszköz?",
    answers: [
      "Egy kellően hangos tülkölő vagy duda, amely képes elnyomni a városi forgalom zaját.",
      "Elektronikus sziréna berendezés, amely folyamatos sípoló hangot ad a veszély jelzésére.",
      "Kizárólag a jól hallható, mechanikus csengő használata szabályos a hangjelzés leadására.",
      "Egy sportbírói síp, amelyet a kerékpárosnak a nyakában kell hordania a biztonság kedvéért."
    ],
    correctAnswer: 2,
    explanation: "A kerékpáron kötelező felszerelés a hangjelzésre szolgáló csengő. A hangos duda, kürt vagy síp használata szabálytalan."
  },
  {
    id: "ker_8",
    category: "kerekpar",
    difficulty: "medium",
    question: "Mit kell tenned, ha kerékpárral egy kijelölt gyalogos-átkelőhelyhez (zebrához) érsz, és az úttest túloldalára szeretnél átjutni?",
    answers: [
      "Folyamatos csengetés mellett, lassított tempóban szabályosan áttekerhetsz az úttesten a zebrán.",
      "Le kell szállnod a kerékpárról, és gyalogosként, a biciklit magad mellett tolva kell áthaladnod.",
      "Gyalogos tempóban, a járókelőket gondosan kerülgetve megengedett az áttekerés az autók előtt.",
      "Ugyanolyan sebességgel haladhatsz át, mintha egyszerűen az úttesten haladnál tovább egyenesen."
    ],
    correctAnswer: 1,
    explanation: "A zebrán a kerékpárosnak nincs elsőbbsége. Le kell szállni a bicikliről és gyalogosan, tolva kell átkelni rajta, ekkor már gyalogosnak számítasz."
  },
  {
    id: "ker_9",
    category: "kerekpar",
    difficulty: "easy",
    question: "Mely esetekben teszi kötelezővé a KRESZ a kerékpáros számára a fényvisszaverő ruházat (pl. sárga mellény) viselését?",
    answers: [
      "Minden esetben, ha a kerékpáros felhajt az úttestre, függetlenül a lakott területtől és napszaktól.",
      "Kizárólag sűrű ködben vagy heves esőzés esetén, de csak abban az esetben, ha a kerékpár lámpája rossz.",
      "Csak a 18 év alatti, kezdő kerékpárosok számára előírás a viselése sötétedés után az úttesten.",
      "Lakott területen kívül az úttesten vagy leállósávban éjszaka, illetve korlátozott látási viszonyok között."
    ],
    correctAnswer: 3,
    explanation: "A fényvisszaverő mellény (ruházat) lakott területen kívül, éjszaka és rossz látási viszonyok között kötelező a kerékpárosnak."
  },
  {
    id: "ker_10",
    category: "kerekpar",
    difficulty: "medium",
    question: "Megengedi-e a KRESZ, hogy elengedett kormánnyal, úgynevezett 'kéz nélkül' kerékpározzunk az úttesten?",
    answers: [
      "Igen, de kizárólag a kiépített kerékpárutakon, ahol egyáltalán nincsenek gépjárművek a közelben.",
      "Nem, a szabályok szerint a kerékpárt legalább az egyik kézzel folyamatosan és stabilan fogni kell.",
      "Kizárólag lakott területen kívüli, teljesen egyenes és messziről belátható aszfaltos útszakaszokon.",
      "Igen, abban az esetben, ha a kerékpárosnak éppen kétkezes karjelzést kell adnia a mögöttes forgalomnak."
    ],
    correctAnswer: 1,
    explanation: "A KRESZ szigorúan előírja, hogy a kerékpárt legalább egy kézzel folyamatosan fogni kell. Elengedett kormánnyal tekerni balesetveszélyes és tilos."
  },
  {
    id: "ker_11",
    category: "kerekpar",
    difficulty: "easy",
    question: "Ha az úttest jobb oldalán egy parkoló autó vagy egyéb akadály állja utadat, hogyan kell szabályosan kikerülnöd azt?",
    answers: [
      "Balra tartva kerülöd ki, miután hátratekintettél és karjelzéssel jelezted a sávváltási szándékodat.",
      "Lassítás nélkül felhajtasz a mellette lévő járdára, és onnan kerülöd ki a parkoló járművet.",
      "Meg kell állnod, és türelmesen megvárni, amíg a sofőr eláll az autóval, vagy valaki eltávolítja az akadályt.",
      "Szorosan az akadály mellett, irányjelzés nélkül húzódsz el mellette, nehogy megzavard az autókat."
    ],
    correctAnswer: 0,
    explanation: "A kikerülés egy balra történő irányváltoztatás, amit hátranézéssel ellenőrizni, majd kinyújtott karral jelezni kell a mögöttes forgalomnak."
  },
  {
    id: "ker_12",
    category: "kerekpar",
    difficulty: "medium",
    question: "Hol kell haladni a kerékpárral az úttesten, ha nincsen kijelölt kerékpárút vagy kerékpársáv?",
    answers: [
      "Pontosan a forgalmi sáv legközepén, hogy az autósok véletlenül se tudjanak veszélyesen megelőzni.",
      "Az úttest menetirány szerinti jobb szélén, a lehetőséghez képest minél jobban oda húzódva.",
      "Mindig a járdán kell haladni, kivéve, ha az túlságosan zsúfolt a gyalogosforgalom miatt.",
      "Az úttest bal oldalán, hogy a kerékpáros szemből is jól láthassa a feléje közeledő gépjárműveket."
    ],
    correctAnswer: 1,
    explanation: "A kerékpárosra is vonatkozik a jobbra tartási kötelezettség: az úttest menetirány szerinti jobb oldalán, szorosan a széléhez húzódva kell haladni."
  },
  {
    id: "ker_13",
    category: "kerekpar",
    difficulty: "easy",
    question: "Szabad-e kerékpárral autópályán vagy autóúton közlekedni a hazai szabályozás szerint?",
    answers: [
      "Igen, de kizárólag a leállósávban, folyamatosan fényvisszaverő mellényt viselve a láthatóságért.",
      "Igen, abban az esetben, ha a kerékpáros képes tartósan legalább 40 km/h sebességgel haladni.",
      "Szigorúan tilos, az autópályákon és az autóutakon tilos bármilyen kerékpárral közlekedni.",
      "Csak vasárnapokon és nemzeti ünnepnapokon, amikor a nehéz tehergépjárművek forgalma korlátozott."
    ],
    correctAnswer: 2,
    explanation: "Autópályán és autóúton tilos kerékpározni, mert a járművek nagy sebessége miatt az életveszélyes lenne."
  },
  {
    id: "ker_14",
    category: "kerekpar",
    difficulty: "medium",
    question: "Szabad-e kerékpárral tekerés közben háziállatot (például kutyát pórázon) sétáltatni?",
    answers: [
      "Igen, de csak abban az esetben, ha a kutya kisméretű és nagyon fegyelmezetten halad a bicikli mellett.",
      "Kizárólag a forgalomtól elzárt, kijelölt kerékpárutakon, ha a kutyapóráz kellően hosszú és rugalmas.",
      "Igen, amennyiben a kerékpáros a jobb kezében stabilan tartja a pórázt, a balban pedig a kormányt.",
      "Nem, a jogszabályok szerint kerékpározás közben bármilyen állatot vezetni balesetveszélyes és tilos."
    ],
    correctAnswer: 3,
    explanation: "A KRESZ tiltja, hogy kerékpárral állatot vezessünk. A kutya hirtelen irányváltása vagy rántása súlyos esést és balesetet okozhat."
  },
  {
    id: "ker_15",
    category: "kerekpar",
    difficulty: "medium",
    question: "Mik a pontos szabályok a kerékpáros fejvédő bukósisak viselésével kapcsolatban?",
    answers: [
      "Használata lakott területen kívül 40 km/h feletti tempónál kötelező, egyébként erősen ajánlott védelem.",
      "Minden kerékpáros számára életkortól függetlenül szigorúan kötelező lakott területen belül és kívül is.",
      "Csak a sportkerékpárokat (pl. országúti versenybringákat) használók számára előírás a viselése.",
      "Viselése teljesen felesleges, amennyiben a kerékpár fel van szerelve a megfelelő világítóberendezésekkel."
    ],
    correctAnswer: 0,
    explanation: "Lakott területen kívül 40 km/h felett (max 50 km/h-ig) a sisak kötelező. Egyéb esetben nem kötelező, de az esések során szerzett fejsérülések ellen erősen ajánlott."
  },
  {
    id: "ker_16",
    category: "kerekpar",
    difficulty: "easy",
    question: "Hány darab működőképes fékkel kell felszerelni a kerékpárt a közúti közlekedéshez?",
    answers: [
      "Elegendő egyetlen, megfelelően karbantartott és erős fékhatású hátsó fék a kerékpár lassításához.",
      "Csak az elektromos rásegítésű (e-bike) kerékpárokon teszi kötelezővé a jogszabály a dupla fékrendszert.",
      "Két darab, egymástól teljesen függetlenül működtethető (egy első és egy hátsó) fékberendezéssel.",
      "Nem kötelező egyetlen fék sem, amennyiben a kerékpáros örökhajtós (fixi) biciklit használ az utakon."
    ],
    correctAnswer: 2,
    explanation: "A kerékpárt kötelező felszerelni két, egymástól függetlenül működő (egy első és egy hátsó) fékkel."
  },
  {
    id: "ker_17",
    category: "kerekpar",
    difficulty: "hard",
    question: "Mely esetekben haladhatnak szabályosan egymás mellett (párhuzamosan) a kerékpárosok?",
    answers: [
      "Bármelyik kisforgalmú utcában megtehetik, feltéve, hogy a beszélgető kerékpárosok nem zavarják az autókat.",
      "Önálló kerékpárúton, illetve ott, ahol ezt kiegészítő jelzőtábla az úttesten kifejezetten megengedi.",
      "Szigorúan tilos, a kerékpárosok soha, semmilyen körülmények között nem haladhatnak egymás mellett.",
      "Az úttest jobb szélén bármikor nyugodtan megtehetik, ha ezzel nem lépik át a felezővonalat."
    ],
    correctAnswer: 1,
    explanation: "Az úttesten egy sorban kell haladni. Egymás mellett csak kerékpárúton, illetve olyan helyen (pl. kerékpáros nyom) haladhatnak, ahol a jelzések ezt lehetővé teszik."
  },
  {
    id: "ker_18",
    category: "kerekpar",
    difficulty: "medium",
    question: "Szabad-e kerékpárral közlekedés közben mobiltelefont a kézben tartva használni?",
    answers: [
      "Igen, ha a kerékpáros kihangosítón beszél, és közben legalább az egyik kezével folyamatosan fogja a kormányt.",
      "Csak a GPS-navigáció megtekintése céljából tartható kézben az okostelefon egy-két másodpercig.",
      "Igen, de kizárólag a lakó-pihenő övezetekben és a teljesen elzárt kerékpárutakon megengedett a nyomkodása.",
      "Szigorúan tilos, a kézben tartott mobiltelefon használata kerékpározás közben jogilag is szabálytalan."
    ],
    correctAnswer: 3,
    explanation: "A kézben tartott mobiltelefon elvonja a figyelmet és rontja a jármű irányítását, így a KRESZ alapján kerékpáron is szigorúan tilos."
  },
  {
    id: "ker_19",
    category: "kerekpar",
    difficulty: "hard",
    question: "Mit kell tenned, ha kerékpárúton haladsz, de a kerékpárút keresztezi az úttestet, és a kerékpárúton 'Elsőbbségadás kötelező' (fordított háromszög) tábla van elhelyezve?",
    answers: [
      "A kerékpárosnak van abszolút elsőbbsége, mivel az épített kerékpárút a gépjárműforgalom felett áll.",
      "A jelzőtábla utasítása szerint a kerékpárosnak kell elsőbbséget adnia a keresztező járműveknek.",
      "Le kell szállnod a kerékpárról, és gyalogosként, tolva kell a zebrán átmenned a túloldalra.",
      "Ilyen tábla hivatalosan nem vonatkozhat kerékpárosra, így minden esetben a jobbkéz-szabály érvényesül."
    ],
    correctAnswer: 1,
    explanation: "A jelzőtábla kötelezése mindenkire vonatkozik. Ha a kerékpárúton 'Elsőbbségadás kötelező' tábla áll, meg kell adni az elsőbbséget a keresztirányú forgalomnak."
  },
  {
    id: "ker_20",
    category: "kerekpar",
    difficulty: "easy",
    question: "Mi a szerepe és mennyi a kötelező mennyisége a kerékpár kerekére szerelt borostyánsárga küllőprizmának?",
    answers: [
      "Kizárólag esztétikai célokat szolgálnak, hogy a kerékpár jobban nézzen ki sötétben, felszerelésük opcionális.",
      "A gumiabroncs defektjének elkerülése érdekében fizikai védelmet és stabilitást adnak a kerék küllőinek.",
      "Jelzi a kerékpáros aktuális sebességét a közeledő autósok számára a villogás ritmusának gyorsasága alapján.",
      "Oldalirányú láthatóságot biztosítanak az éjszakai sötétségben, és kerekekenként legalább két darab kötelező."
    ],
    correctAnswer: 3,
    explanation: "A küllőprizmák a kerékpáros oldalirányú láthatóságát biztosítják, és mindkét keréken kötelező legalább 2-2 darabot elhelyezni."
  },

  // --- GYALOGOS KÖZLEKEDÉS (20 questions) ---
  {
    id: "gyal_1",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hol kell a gyalogosnak közlekednie, ha az úttest mellett megfelelő minőségű járda áll rendelkezésre?",
    answers: [
      "A kerékpárúton is nyugodtan haladhat, ha a járda valamilyen oknál fogva nem szimpatikus a számára.",
      "A gyalogosnak minden esetben kötelező a járdán közlekednie, amennyiben az rendelkezésre áll.",
      "Az úttest menetirány szerinti bal szélén, ha nincsen nagy és veszélyes autóforgalom a szakaszon.",
      "Bármelyik felületen közlekedhet, ahol a személyes megítélése szerint a legnagyobb biztonságban van."
    ],
    correctAnswer: 1,
    explanation: "A gyalogosnak főszabály szerint a járdán kell közlekednie, ha van, függetlenül attól, hogy van-e kerékpárút vagy úttest mellette."
  },
  {
    id: "gyal_2",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hogyan kell a gyalogosnak szabályosan haladnia az úttest szélén lakott területen kívül, ha nincsen járda?",
    answers: [
      "Az úttest menetirány szerinti jobb szélén, a járművekkel megegyező irányban haladva a padkán.",
      "Az úttest legközepén, feltűnő fényvisszaverő ruházatban, hogy a lehető legjobban látható legyen.",
      "Az úttest menetirány szerinti bal szélén, a gépjárműforgalommal szemben kell gyalogolnia.",
      "Mindig az út menti vízelvezető árokban vagy a szántóföldön kell gyalogolni a biztonság okán."
    ],
    correctAnswer: 2,
    explanation: "Ha nincs járda, a gyalogosnak az út bal szélén (a forgalommal szemben) kell haladnia, hogy időben észrevegye a vele szemben, az ő oldalán közeledő járműveket."
  },
  {
    id: "gyal_3",
    category: "gyalogos",
    difficulty: "easy",
    question: "Melyik a legbiztonságosabb és legszabályosabb hely a gyalogos számára az úttesten való átkelésre?",
    answers: [
      "Bármelyik parkoló jármű mögül hirtelen kilépve, ha előtte meggyőződött róla, hogy nem jön autó.",
      "Egy éles útkanyarulatban, mert ott a járművek a centrifugális erő miatt amúgy is kénytelenek lelassítani.",
      "A kijelölt gyalogos-átkelőhelyen (zebrán) vagy a fényjelző készülékkel irányított útkereszteződésben.",
      "Két kereszteződés között pontosan félúton, mert ott általában sokkal kevesebb a zavaró közlekedési tényező."
    ],
    correctAnswer: 2,
    explanation: "A legbiztonságosabb és szabályos átkelési pont a kijelölt gyalogos-átkelőhely (zebra) vagy egy lámpás kereszteződés."
  },
  {
    id: "gyal_4",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mit kell kötelezően megtenned, mielőtt a zebrához érve lelépsz az úttestre?",
    answers: [
      "Határozottan és gyorsan le kell lépned, mert a gyalogosnak a zebrán mindig és feltétel nélkül elsőbbsége van.",
      "Jelezned kell a határozott szándékodat a karod felemelésével az érkező gépjárművek sofőrjei felé.",
      "Alapos körültekintéssel meg kell győződnöd arról, hogy az áthaladás a közeledő járművek miatt veszélytelen-e.",
      "Meg kell várnod az út szélén, amíg minden közeledő gépjármű motorja teljesen leáll a közeledésed láttán."
    ],
    correctAnswer: 2,
    explanation: "Bár a zebrán elsőbbséged van, az úttestre csak akkor léphetsz le, ha meggyőződtél róla, hogy a közeledő autók meg tudnak (és meg is fognak) állni."
  },
  {
    id: "gyal_5",
    category: "gyalogos",
    difficulty: "easy",
    question: "Milyen színű gyalogos lámpajelzésnél szabad megkezdeni az úttesten való átkelést?",
    answers: [
      "Villogó zöld jelzésnél is bátran megkezdhető az átkelés, ha elég gyorsan szedjük a lábunkat a túloldalig.",
      "Sárga jelzésnél, mivel az időben felkészít minket az azonnali megindulásra az úttest széle felől.",
      "Piros jelzésnél is szabad átkelni, amennyiben a közelben egyáltalán nincs zavaró gépjárműforgalom.",
      "Kizárólag a folyamatos zöld jelzést mutató gyalogos lámpa esetén szabad lelépni a járdáról az úttestre."
    ],
    correctAnswer: 3,
    explanation: "Kizárólag a folyamatos zöld jelzésnél szabad megkezdeni az átkelést a gyalogos-átkelőhelyen."
  },
  {
    id: "gyal_6",
    category: "gyalogos",
    difficulty: "medium",
    question: "Mi a teendő, ha az úttesten való átkelés közben egyszer csak villogni kezd a zöld gyalogosjelzés?",
    answers: [
      "Aki már lelépett, fejezze be biztonságosan az átkelést, de a járdáról újat megkezdeni már tilos.",
      "Azonnal meg kell fordulni, és a lehető legrövidebb úton, futva vissza kell térni a kiindulási járdára.",
      "Meg kell állni a két sáv között az úttest közepén, és ott megvárni a következő biztonságos zöld jelzést.",
      "Lassabb tempóban kell megkezdeni az átkelést a járdáról a zebrára lépve, hogy felhívjuk az autósok figyelmét."
    ],
    correctAnswer: 0,
    explanation: "A villogó zöld jelzés az áthaladásra engedélyezett idő végét jelzi. Aki az úttesten van, fejezze be az átkelést, de aki még a járdán van, már ne lépjen le!"
  },
  {
    id: "gyal_7",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mennyire biztonságos fülhallgatót viselni és a telefon képernyőjét nézni az úton való átkelés közben?",
    answers: [
      "Igen biztonságos, a KRESZ kifejezetten megengedi a zenehallgatást és üzenetírást a gyalogosok számára is.",
      "Életveszélyes, mivel erősen elvonja a vizuális figyelmet és teljesen kizárja a forgalom fontos zajait.",
      "Csak abban az esetben biztonságos, ha a telefonon lévő térképes és hangalapú navigációt követjük éppen.",
      "Teljesen mindegy, ha a zebrán kelünk át, hiszen ott úgyis nekünk van abszolút elsőbbségünk a forgalommal szemben."
    ],
    correctAnswer: 1,
    explanation: "Átkeléskor teljes figyelemre van szükség. A telefonozás és a fülhallgató használata életveszélyes, mert megszünteti a környezet érzékelését."
  },
  {
    id: "gyal_8",
    category: "gyalogos",
    difficulty: "medium",
    question: "Gyalogosként leléphetünk-e az úttestre (akár a zebrán), ha megkülönböztető fény- és hangjelzést használó jármű (szirénázó mentő, rendőr) közeledik?",
    answers: [
      "Igen, ha a gyalogos már a zebrán tartózkodik, a szirénázó mentőnek is kötelessége megállni és elengedni őt.",
      "Kizárólag akkor tehetjük meg, ha a megkülönböztetett jármű piros lámpát kapott a közeledő kereszteződésben.",
      "Nem, a megkülönböztető jelzést használó járműnek minden esetben, még a zebrán is abszolút elsőbbséget kell adni.",
      "Igen, feltéve, hogy úgy ítéljük meg, hogy elég gyorsan át tudunk szaladni a sebesen közeledő rendőrautó előtt."
    ],
    correctAnswer: 2,
    explanation: "A szirénázó (megkülönböztető jelzést használó) járműveknek minden helyzetben abszolút elsőbbségük van. Tilos eléjük lépni, segíteni kell a gyors haladásukat."
  },
  {
    id: "gyal_9",
    category: "gyalogos",
    difficulty: "medium",
    question: "Milyen távolságon belül található kijelölt gyalogos-átkelőhely (zebra) esetén kötelező azt igénybe venni az úttesten történő átkeléshez?",
    answers: [
      "Csak akkor kötelező a zebrát használni, ha az kevesebb mint 10 méterre helyezkedik el a tartózkodási helyünktől.",
      "Ha 100 méteren belül látható a zebra, akkor már szigorúan tilos máshol áthaladni az úttest ellentétes oldalára.",
      "Ha 50 méteren belül van kijelölt gyalogos-átkelőhely vagy aluljáró, akkor a gyalogosnak kötelező azt használnia.",
      "Nincsen semmilyen konkrét távolsági szabály, a gyalogos bárhol szabadon átkelhet az úttesten, ha eléggé óvatos."
    ],
    correctAnswer: 2,
    explanation: "Ha 50 méteren belül van zebra (vagy gyalogos alul-/felüljáró), a gyalogos csak azon kelhet át az úttesten."
  },
  {
    id: "gyal_10",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hogyan kell szabályosan átkelni az úttesten olyan helyen, ahol nincs zebra a közelben, de az átkelés egyébként nem tilos?",
    answers: [
      "Ferde vonalban, az érkező járművek mozgását folyamatosan figyelve, nagyon lassú és óvatos, tyúklépésekkel.",
      "Futva és minél sűrűbb cikkcakkban, hogy a lehető legkevesebb ideig tartózkodjunk a veszélyes zónában az úton.",
      "Az átkelés zebra hiányában minden esetben, minden úttípuson szigorúan tilos és keményen büntetendő cselekmény.",
      "A legrövidebb úton, indokolatlan megállás és késedelem nélkül, az úttest szélére lehetőleg merőleges irányban."
    ],
    correctAnswer: 3,
    explanation: "Zebra hiányában a legrövidebb úton (merőlegesen) kell átkelni, és az úttesten nem szabad indokolatlanul megállni vagy késlekedni."
  },
  {
    id: "gyal_11",
    category: "gyalogos",
    difficulty: "easy",
    question: "Miért kifejezetten életveszélyes hirtelen kilépni egy parkoló jármű vagy busz mögül az úttestre?",
    answers: [
      "Mert a parkoló autók kipufogócsövéből kiáramló mérgező gáz közvetlenül a gyalogos arcába csapódhat be.",
      "Mivel az álló jármű kitakarja a gyalogost az autósok elől, így a közeledő sofőrnek esélye sincs időben lefékezni.",
      "Mivel a hosszan parkoló autók hirtelen, jelzés nélküli tolatásba kezdhetnek, ami könnyen elütheti a járókelőt.",
      "Igazából nem hordoz különösebb veszélyt a művelet, feltéve, ha előtte alaposan meghallgatjuk a motorhangokat."
    ],
    correctAnswer: 1,
    explanation: "Az álló jármű teljesen kitakarja a gyalogost a forgalom elől. Hirtelen kilépésnél a közeledő sofőr nem tud elég gyorsan reagálni."
  },
  {
    id: "gyal_12",
    category: "gyalogos",
    difficulty: "medium",
    question: "Hol közlekedhet szabályosan a gyalogosok zárt csoportja (pl. óvodás csoport, katonai alakulat) az úttesten?",
    answers: [
      "Mindig a járda teljes szélességét és az úttest felét elfoglalva, hogy a nagylétszámú csoport biztosan együtt maradjon.",
      "Az úttest menetirány szerinti bal szélén, folyamatosan szemben a közeledő, szemből érkező gépjárműforgalommal.",
      "Az úttest legközepén (a felezővonalon) haladva, hogy a csoport mindkét irányból jól észrevehető legyen az autósoknak.",
      "Az úttest menetirány szerinti jobb szélén, a forgalmat a legkevésbé zavaró módon és kellő fegyelemmel haladva."
    ],
    correctAnswer: 3,
    explanation: "A gyalogosok zárt csoportja az úttesten annak menetirány szerinti jobb szélén közlekedhet (kivéve a gyermekcsoportot, nekik a járdán vagy a bal szélen kell)."
  },
  {
    id: "gyal_13",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mikor és hol kötelező a gyalogosnak fényvisszaverő ruházatot (pl. sárga mellényt) viselnie a KRESZ szerint?",
    answers: [
      "Lakott területen kívül, az úttesten vagy útpadkán tartózkodva, éjszaka vagy korlátozott látási viszonyok között.",
      "Mindig és mindenhol kötelező, ha a gyalogos heves esőzésben vagy sűrű havazásban közlekedik a városi járdán haladva.",
      "Kizárólag az autópályák és a kiépített autóutak közvetlen közelében tartózkodó gyalogosok számára teszik kötelezővé.",
      "Minden egyes lakott területen kívüli útszakaszon, teljesen függetlenül az aktuális időjárástól, valamint a napszaktól."
    ],
    correctAnswer: 0,
    explanation: "Lakott területen kívül éjszaka vagy korlátozott látási viszonyok (köd, eső) között az út szélén haladó gyalogosnak fényvisszaverő ruházatot kell viselnie."
  },
  {
    id: "gyal_14",
    category: "gyalogos",
    difficulty: "medium",
    question: "Mit ír elő a KRESZ a gyalogos számára, ha az egy kijelölt 'Gyalog- és kerékpárúton' kénytelen közlekedni?",
    answers: [
      "A gyalogosnak az ilyen úton abszolút elsőbbsége van, így a kerékpárosoknak minden esetben ki kell kerülniük őt.",
      "Szigorúan a bal oldalon kell haladnia, míg a kerékpárosok a jobb oldalt használják a gyorsabb haladásuk miatt.",
      "Közlekedhet rajta, de a kerékpárosok zavartalan haladását semmilyen módon nem akadályozhatja és nem veszélyeztetheti.",
      "Ilyen speciális úton a gyalogos egyáltalán nem közlekedhet, mert az kizárólag a kerékpárosok számára van fenntartva."
    ],
    correctAnswer: 2,
    explanation: "A gyalog- és kerékpárúton a gyalogos a kerékpáros forgalmat nem akadályozhatja és nem veszélyeztetheti."
  },
  {
    id: "gyal_15",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mi a legbiztonságosabb teendő gyalogosként, ha a téli időszakban a járdát jég vagy vastag, letaposott hó borítja?",
    answers: [
      "Inkább az úttest közepére húzódunk, mert ott az elhaladó gépkocsik abroncsai általában már leolvasztották a havat.",
      "Futólépésben próbálunk minél gyorsabban, lendületből túljutni a leginkább jeges és ezáltal nagyon veszélyes szakaszon.",
      "Lassan, óvatos apró léptekkel haladunk, lehetőleg nem zsebre tett kézzel, hogy tudjunk egyensúlyozni, ha megcsúszunk.",
      "Bármilyen rendelkezésre álló kerékpárra pattanunk, mert a vastag gumiabroncsok jobban tapadnak a jeges felületen is."
    ],
    correctAnswer: 2,
    explanation: "Csúszós járdán lassan, apró léptekkel kell haladni. A kezünket vegyük ki a zsebünkből, hogy egy esetleges megcsúszásnál egyensúlyozni vagy tompítani tudjunk."
  },
  {
    id: "gyal_16",
    category: "gyalogos",
    difficulty: "easy",
    question: "Szabad-e gyalogosnak az autópályán vagy az autóúton gyalogosan közlekednie?",
    answers: [
      "Igen, a széles leállósáv legszélén gyalogolhat, amennyiben folyamatosan viseli az előírt sárga fényvisszaverő mellényt.",
      "Szigorúan tilos. Jármű meghibásodása esetén is a szalagkorláton kívül kell várakozni a segítség vagy az autómentő érkezéséig.",
      "Kizárólag napközben megengedett, és csak abban az esetben, ha a legközelebbi benzinkút nincs messzebb egyetlen kilométernél.",
      "Igen, de csak szigorúan a forgalommal szemben haladva, hogy a gyalogos idejében lássa a feléje hatalmas sebességgel közeledő kamionokat."
    ],
    correctAnswer: 1,
    explanation: "Autópályán gyalogosan közlekedni szigorúan tilos és életveszélyes. Lerobbanás esetén azonnal el kell hagyni az útpályát a szalagkorláton túlra."
  },
  {
    id: "gyal_17",
    category: "gyalogos",
    difficulty: "hard",
    question: "A rendőrön és a közlekedési lámpán kívül ki jogosult még hivatalosan irányítani a gyalogosok forgalmát az úton?",
    answers: [
      "Bármelyik felnőtt korú, határozott fellépésű gyalogos, ha a kereszteződésben lévő lámpa valamilyen műszaki okból meghibásodott.",
      "Kizárólag a rendőrség hivatalos állományába tartozó, teljes egyenruhát viselő személy teheti meg a forgalomirányítást.",
      "A helyi busz- vagy villamosvezetők is bármikor leállíthatják a keresztirányú forgalmat a leszálló gyalogosok átkeléséhez.",
      "Többek között a polgárőr, a katona, a vasutas, vagy egy útmunkálatoknál hivatalosan kijelölt, jelzőtárcsás jelzőőr is megteheti."
    ],
    correctAnswer: 3,
    explanation: "A KRESZ felhatalmazza a polgárőröket, katonákat, vasúti átjárónál a vasutasokat, útmunkáknál a jelzőőröket, és a katasztrófavédelem tagjait is a forgalom irányítására."
  },
  {
    id: "gyal_18",
    category: "gyalogos",
    difficulty: "easy",
    question: "Hogyan kell a legbiztonságosabban leszállni a menetrend szerinti buszról vagy villamosról, ha közvetlenül az úttestre kell lépnünk?",
    answers: [
      "Hirtelen át kell rohanni a busz orra előtt a túloldalra, amíg a nagy jármű úgyis teljesen feltartja a mögöttes forgalmat az utcában.",
      "Szorosan a tömegközlekedési eszköz hátulja mögött kell azonnal átkelni az úton, mert ott a legkisebb a szélárnyék és a balesetveszély.",
      "Körültekintően kell le- és az úttestre lépni, alaposan figyelve a busz vagy villamos mellett párhuzamosan elhaladó egyéb gépjárművekre.",
      "Türelmesen várni kell a járművön a leszállással egészen addig, amíg a busz motorja teljesen le nem áll és a sofőr jelt nem ad a távozásra."
    ],
    correctAnswer: 2,
    explanation: "Ha az úttestre kell leszállni (pl. nincs kiemelt megállósziget), a gyalogosnak fokozott óvatossággal kell körülnéznie a jármű mellett elhaladó forgalom miatt."
  },
  {
    id: "gyal_19",
    category: "gyalogos",
    difficulty: "medium",
    question: "Gyalogosként mikor és hol van elsőbbségünk egy kanyarodó (irányt változtató) gépjárművel szemben?",
    answers: [
      "A gyalogosnak soha nincsen elsőbbsége az autókkal szemben, hacsak nem egy egyértelműen felfestett, kijelölt zebrán halad éppen át.",
      "Minden olyan esetben, amikor az autós letérve a főútról az indexét használja, köteles azonnal megállni a járdán várakozó gyalogosnak.",
      "Kizárólag csak akkor, ha a gyalogos egy nálánál jóval kisebb jármű (például kerékpár vagy elektromos roller) elé szeretne kilépni.",
      "Ha a gyalogos éppen azon az úton kel át (még ha nincs is ott zebra), amelyikre a szóban forgó gépjármű be szeretne kanyarodni."
    ],
    correctAnswer: 3,
    explanation: "A bekanyarodó járműnek (akár jobbra, akár balra kanyarodik) elsőbbséget kell adnia annak a gyalogosnak, aki azon az úton kel át, amelyre a jármű rákanyarodik."
  },
  {
    id: "gyal_20",
    category: "gyalogos",
    difficulty: "easy",
    question: "Mit kell tenned feltétlenül, ha a parkban vagy járdán való labdázás közben a labda hirtelen kigurul a forgalmas úttestre?",
    answers: [
      "Soha nem szabad a kiguruló labda után futni az úttestre, meg kell állni a járda szélén, mert a közeledő autósok nem számítanak a hirtelen kilépésre.",
      "Azonnal utána kell sprintelni minden körültekintés nélkül, hogy a guruló labda semmiképpen ne okozzon súlyos balesetet az arra haladó autók között.",
      "Meg kell kérni egy éppen arra sétáló, magasabb felnőttet, hogy a kezét felemelve a forgalmat leállítva, biztonságosan hozza vissza a játékszert.",
      "Lassan, jól láthatóan feltett kezekkel ki kell menni a labdáért a sávok közé, hogy az érkező gépjárművek sofőrjei már nagyon messziről lássanak téged."
    ],
    correctAnswer: 0,
    explanation: "Soha nem szabad a kiguruló labda után futni! Az autósok nem számítanak a hirtelen kirohanó gyerekre. Mindig meg kell állni a járda szélén, és megvárni, amíg teljesen biztonságos."
  }
];
