import { Question } from "../../types";

export const groupDQuestions: Question[] = [
  // --- LÁTHATÓSÁG (20 questions) ---
  {
    id: "lat_1",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen színű ruházatot a legkönnyebb észrevennie a gépjárművezetőknek sötétben?",
    answers: [
      "A fekete vagy nagyon sötét árnyalatokat, mivel ezek élesen elütnek az autók fényszórójának színétől.",
      "Világos, kontrasztos, illetve élénk fluoreszkáló ruházatot, amely messziről felhívja magára a figyelmet.",
      "A sötétkék és méregzöld színeket, amelyek az aszfalt nedves felületén jól tükröződnek éjszaka is.",
      "A szürke minden árnyalatát, amely természetes módon illeszkedik a városi környezet esti fényeihez."
    ],
    correctAnswer: 1,
    explanation: "A világos és fluoreszkáló színeket sokkal messzebbről észreveszik az autósok, míg a sötét vagy szürke ruhás gyalogosok szinte láthatatlanok éjszaka a fényszórók ellenére is."
  },
  {
    id: "lat_2",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen messziről látható egy sötét ruhás gyalogos sötétben tompított fényszóró mellett?",
    answers: [
      "Tompított fényszóró használatakor mindig legalább 200 méterről egyértelműen észlelhető a gyalogos.",
      "A sötét ruházat teljesen elnyeli a fényt, így a gyalogos tompított fényszóróval egyáltalán nem látható.",
      "Környezettől függően nagyon rövid távolságról, gyakran csak 20-30 méterről észlelhető, ami túl kevés a megálláshoz.",
      "A gyalogos kivilágítatlan úton is mindig pontosan 150 méterről látható, ha a fényszórók tiszták."
    ],
    correctAnswer: 2,
    explanation: "Sötét ruházatban a gyalogosok beleolvadnak a környezetbe. Tompított fényszóróval gyakran csak 25-30 méterről vehetők észre, miközben 50 km/h sebességnél a fékút (reakcióidővel) ennél sokkal hosszabb!"
  },
  {
    id: "lat_3",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mire szolgál a fényvisszaverő (retroreflexív) anyag a gyalogos ruházatán?",
    answers: [
      "A járművek fényszórójának fényét a fényforrás irányába veri vissza, így jelentősen javítja a gyalogos láthatóságát.",
      "Kizárólag esztétikai szerepe van, a sportruházatok dizájnjának javítását szolgálja nappali és éjszakai fényben.",
      "Arra szolgál, hogy a gyalogos a sötét utcákon haladva maga is jobban lássa a járdát maga előtt.",
      "Hőtükörként funkcionál, így a hideg téli éjszakákon a ruházatot melegebbé és kényelmesebbé teszi a viselőjének."
    ],
    correctAnswer: 0,
    explanation: "A retroreflexív anyag különlegessége, hogy a beeső fényt fókuszáltan a fényforrás (pl. az autó fényszórója, így a sofőr szeme) felé veri vissza, ezért sötétben, megvilágítva rendkívül erős fényt ad."
  },
  {
    id: "lat_4",
    category: "lathatosag",
    difficulty: "easy",
    question: "Kötelező-e a fényvisszaverő mellény (vagy ruházat) viselése a kerékpárosnak lakott területen kívül éjszaka?",
    answers: [
      "Nem, a KRESZ szerint a kerékpárosnak sosem kötelező a mellény, a megfelelően működő lámpák önmagukban elegendőek.",
      "Csak abban az esetben kötelező a mellény felvétele, ha a kerékpáron nincs felszerelve az első és hátsó lámpa.",
      "Kizárólag a téli hónapokban (novembertől márciusig) kötelező az országúti kerékpározás során sötétedés után.",
      "Igen, lakott területen kívül, éjszaka vagy korlátozott látási viszonyok között a KRESZ szerint kötelező viselni."
    ],
    correctAnswer: 3,
    explanation: "A KRESZ szigorúan kötelezővé teszi a láthatósági mellény (vagy fényvisszaverő ruházat) viselését lakott területen kívül sötétben vagy korlátozott látási viszonyok között (ködben, esőben)."
  },
  {
    id: "lat_5",
    category: "lathatosag",
    difficulty: "easy",
    question: "Hogyan kell működniük a kerékpár első és hátsó lámpáinak sötétben, tiszta időben?",
    answers: [
      "A KRESZ szerint az első lámpának mindig folyamatosan, a hátsónak pedig kötelezően villogva kell működnie.",
      "Úgy kell működniük (folyamatosan vagy villogva), hogy a fényük tiszta időben legalább 150 méterről jól látható legyen.",
      "Csak halványan szabad világítaniuk, nehogy a nagy fényerejű LED-ek elvakítsák a szembejövő gépjárművezetőket.",
      "Mindkét lámpának szigorúan sárga vagy piros színben, egyszerre villogva kell jeleznie a kerékpáros jelenlétét."
    ],
    correctAnswer: 1,
    explanation: "A kerékpár lámpái (elöl fehér/kadmiumsárga, hátul piros) folyamatos fénnyel vagy villogó üzemmódban is működhetnek. A jogszabályi előírás, hogy tiszta időben legalább 150 méter távolságról észlelhetőek legyenek."
  },
  {
    id: "lat_6",
    category: "lathatosag",
    difficulty: "medium",
    question: "Mit kell tenned a kerékpár lámpáival és prizmáival, ha sáros vagy poros úton közlekedtél?",
    answers: [
      "Semmi különöset, a modern eszközök öntisztítóak, és az eső vagy a menetszél hamarosan úgyis lemossa őket.",
      "Mivel a kosz jelentősen csökkenti a fényerőt és a visszaverődést, indulás előtt meg kell tisztítani az összes lámpát és prizmát.",
      "Poros út után biztonsági okokból le kell szerelni őket a bicikliről, amíg az alkatrészeket szakszervizben ki nem tisztítják.",
      "Érdemes őket sötét fóliával letakarni vagy lefesteni, hogy a sár ne tudjon rátapadni a fényvisszaverő felületre."
    ],
    correctAnswer: 1,
    explanation: "A sár és a por drasztikusan lerontja a lámpák fényerejét és a prizmák fényvisszaverő képességét, így sötétben szinte láthatatlanná válik a jármű. Rendszeresen töröld tisztára őket!"
  },
  {
    id: "lat_7",
    category: "lathatosag",
    difficulty: "easy",
    question: "Melyik eszköz segít leginkább a kerékpáros láthatóságában oldalirányból?",
    answers: [
      "A kerékküllők közé szerelt borostyánsárga prizmák (küllőprizmák), vagy a gumiabroncs oldalán lévő fényvisszaverő csík.",
      "A kormányon lévő csengő rendszeres, folyamatos használata, amely hangjelzéssel hívja fel az autósok figyelmét.",
      "Az első, erős fényű fehér lámpa, amely bevilágítja a kerékpár melletti teljes aszfaltot is oldalirányban.",
      "A kerékpár láncvédőjének világos színe, amely a sötét aszfalton minden irányból magas kontrasztot biztosít."
    ],
    correctAnswer: 0,
    explanation: "Az oldalirányú láthatóság kritikus a kereszteződésekben! Ezt biztosítja az első keréken kötelezően elhelyezett (legalább 2 db) sárga küllőprizma, vagy a gumiabroncs oldalán végigfutó, gyári reflexcsík."
  },
  {
    id: "lat_8",
    category: "lathatosag",
    difficulty: "medium",
    question: "Mit érdemes tennie az iskolásnak az iskolatáskájával a láthatóság javítása érdekében sötét téli reggeleken?",
    answers: [
      "Mindenképpen egyszínű, sötét (fekete vagy sötétkék) táskát kell venni, hogy a szennyeződések ne látsszanak meg rajta.",
      "A táskát teljesen le kell takarni egy esővédő huzattal, hogy a fényvisszaverő felületek ne csillogjanak zavaróan.",
      "Nem kell semmit tenni, a táskák anyagát eleve úgy tervezik, hogy visszaverjék az összes utcai lámpa fényét.",
      "Olyan táskát érdemes választani (vagy arra prizmákat erősíteni), amely nagy fényvisszaverő felületekkel rendelkezik."
    ],
    correctAnswer: 3,
    explanation: "A téli hónapokban a gyerekek sokszor sötétben indulnak iskolába. A fényvisszaverő elemekkel ellátott hátizsák, vagy a ráaggatott prizmák életet menthetnek a zebrán történő átkeléskor."
  },
  {
    id: "lat_9",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mi a teendőnk a kerékpár lámpáival nappal, ha hirtelen sűrű ködbe vagy szakadó esőbe kerülünk?",
    answers: [
      "Mivel nappal van, semmilyen lámpát nem kell bekapcsolni, elég, ha a kerékpáros felveszi a láthatósági mellényt.",
      "Azonnal le kell szállni a kerékpárról, letolni azt az úttestről, és megvárni egy fedett helyen, amíg kiderül az idő.",
      "Korlátozott látási viszonyok között nappal is kötelező azonnal bekapcsolni az első fehér és a hátsó piros lámpát.",
      "Csak a csengőt kell használni, és folyamatos csengetéssel kell jelezni a ködben, hogy merre haladunk."
    ],
    correctAnswer: 2,
    explanation: "A KRESZ egyértelműen előírja: a járműveket éjszaka és korlátozott látási viszonyok (köd, hóesés, szakadó eső) között kivilágítva kell tartani. Ez nappal is érvényes, ha a látótávolság jelentősen lecsökken."
  },
  {
    id: "lat_10",
    category: "lathatosag",
    difficulty: "medium",
    question: "Hogyan segítheti a kutyasétáltató a saját és kutyája láthatóságát lakott területen kívül sötétben?",
    answers: [
      "A saját részére fényvisszaverő mellény viselésével, a kutya számára pedig világító nyakörv vagy fényvisszaverő hám használatával.",
      "Szigorúan sötét, vékony póráz használatával, hogy az autósok ne akadjanak fenn rajta, ha a kutya elfutna.",
      "Éjszaka kizárólag póráz nélkül sétáltatva a kutyát, így a kedvenc szabadon el tud menekülni a közeledő autók elől.",
      "Semmilyen eszközzel, elég, ha a sétáltató folyamatosan maga elé világít a mobiltelefonja zseblámpájával az út szélén."
    ],
    correctAnswer: 0,
    explanation: "Lakott területen kívül sötétben a gazdának kötelező a láthatósági mellény viselése, a kutyára pedig erősen ajánlott egy világító nyakörvet vagy reflexcsíkos hámot adni, nehogy az autós csak az embert lássa meg, a mellette haladó sötét kutyát nem."
  },
  {
    id: "lat_11",
    category: "lathatosag",
    difficulty: "easy",
    question: "Miért hívják a fényvisszaverő mellényt 'passzív' biztonsági eszköznek?",
    answers: [
      "Mert a beépített apró LED-ek miatt folyamatosan mozog benne a fény, még akkor is, ha a viselője teljesen mozdulatlan.",
      "Passzív eszköz, mert önmagában nem bocsát ki fényt, de a rá eső fénysugarakat visszatükrözve teszi láthatóvá viselőjét.",
      "Mert belső akkumulátorral rendelkezik, így gombnyomásra magától kezd el világítani, elkerülve a baleseteket.",
      "A KRESZ szaknyelve nem ismeri ezt a kifejezést, a mellény minden esetben aktív, radarjeleket visszaverő eszköznek számít."
    ],
    correctAnswer: 1,
    explanation: "A passzív eszközök (mint a macskaszem, prizma, láthatósági mellény) nem rendelkeznek saját energiaforrással (nem világítanak), csupán a rájuk vetülő külső fényt verik vissza."
  },
  {
    id: "lat_12",
    category: "lathatosag",
    difficulty: "medium",
    question: "Milyen színűnek kell lennie a kerékpár hátsó részén kötelezően elhelyezett fényvisszaverő prizmának?",
    answers: [
      "Fehér színűnek, és minden esetben kerek vagy ovális kialakításúnak kell lennie, hogy a lámpával együtt hasson.",
      "Borostyánsárgának, mert ez a szín jelzi a forgalom többi résztvevője számára a lassú járművek jelenlétét.",
      "Élénk zöld színűnek, hogy élesen elváljon a féklámpák és a helyzetjelzők piros színétől az éjszakai forgalomban.",
      "Piros színűnek, és nem lehet háromszög alakú (mivel a piros háromszög prizma a pótkocsik megjelölésére szolgál)."
    ],
    correctAnswer: 3,
    explanation: "A kerékpár hátulján egy (vagy két) piros színű, szimmetrikusan elhelyezett, nem háromszög alakú fényvisszaverő prizma kötelező. A piros háromszög a pótkocsik (utánfutók) egyezményes jelzése."
  },
  {
    id: "lat_13",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen színűnek kell lennie a kerékpár elején elhelyezett fényvisszaverő prizmának?",
    answers: [
      "A kerékpár elején egy fehér színű fényvisszaverő prizmát kell kötelezően elhelyezni, amely előre mutat.",
      "Kötelezően piros színűnek kell lennie, hogy harmonizáljon a jármű hátulján elhelyezett fényvisszaverőkkel.",
      "Borostyánsárgának kell lennie, mint amilyen a küllők között és a pedálokon is található a KRESZ előírásai szerint.",
      "Kék vagy zöld színű is lehet, a kerékpáros ízlésének megfelelően, a jogszabály erre nem ad megkötést."
    ],
    correctAnswer: 0,
    explanation: "A járművek elején a fehér (vagy kadmiumsárga) szín a szabvány. Így a kerékpár elejére is egy fehér fényvisszaverő prizmát kell felszerelni."
  },
  {
    id: "lat_14",
    category: "lathatosag",
    difficulty: "medium",
    question: "Mi a szabály a kerékpár pedáljain lévő fényvisszaverőkkel kapcsolatban?",
    answers: [
      "Szigorúan tilos a pedálra prizmát szerelni, mert a forgó mozgás zavarhatja és elvakíthatja a mögöttes forgalmat.",
      "Kötelező felszerelés: mindkét pedálon, előre és hátra mutató borostyánsárga fényvisszaverőnek kell lennie.",
      "Csak egy opcionális, esztétikai dísz, amelyet a gyermekkerékpárokon szoktak alkalmazni a jobb kinézet miatt.",
      "Kizárólag a professzionális versenybicikliken kötelező a használatuk az éjszakai edzések biztonsága érdekében."
    ],
    correctAnswer: 1,
    explanation: "A pedálprizma (borostyánsárga) kötelező tartozék. A pedálozás közben fel-le mozgó sárga fényvisszaverőből az autósok éjszaka már messziről egyértelműen felismerik, hogy egy kerékpáros halad előttük."
  },
  {
    id: "lat_15",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mit tegyen a gyalogos lakott területen kívül, kivilágítatlan úton, sötétben, ha nincs nála fényvisszaverő mellény?",
    answers: [
      "Haladjon szorosan az úttest jobb szélén, a forgalommal megegyező irányban, és kapcsolja be a telefonja zenelejátszóját.",
      "Feküdjön le az út menti árokba, és várja meg a reggelt, hogy biztonságosan folytathassa az útját a napfényben.",
      "Mivel tilosban jár, fusson át az úton keresztbe-kasul, hogy a járművek fényszórói gyorsan észrevegyék a mozgást.",
      "Húzódjon le teljesen az útpadkára, haladjon a bal oldalon (a forgalommal szemben), és világítson a mobiljával, ha jön egy autó."
    ],
    correctAnswer: 3,
    explanation: "Bár a mellény hiánya szabálysértés, az életben maradás a legfontosabb. Ilyenkor a bal oldalon (szemből látva az autót) a padkán kell haladni, és minden eszközzel (pl. mobiltelefon kijelzője/vakuja) jelezni a jelenlétünket a közeledő sofőrnek."
  },
  {
    id: "lat_16",
    category: "lathatosag",
    difficulty: "medium",
    question: "Melyik állítás igaz a biztonsági láthatósági mellényre?",
    answers: [
      "A KRESZ minden mellényhez egyetlen, általános, milliméterre pontos csíkszélességet határoz meg kötelező jelleggel.",
      "Kizárólag a mellény rikító sárga színe számít, a rajta lévő fényvisszaverő csíkok jelenléte nem kötelező.",
      "Elegendő egyetlen, gombostűfejnyi apró fényvisszaverő pontot viselni a kabáton a jogszabályi megfeleléshez.",
      "A megfelelő láthatósági mellények kialakítására uniós szabványok vonatkoznak (pl. EN ISO 20471), amelyek garantálják a megfelelő fényvisszaverő felületet."
    ],
    correctAnswer: 3,
    explanation: "A KRESZ 'fényvisszaverő mellényt vagy ruházatot' ír elő. A boltokban kapható, szabványosított mellények garantálják a megfelelő fluoreszkáló háttéranyagot és a kellően széles fényvisszaverő csíkokat."
  },
  {
    id: "lat_17",
    category: "lathatosag",
    difficulty: "hard",
    question: "Mi a kerékpár első lámpájának a két legfontosabb feladata sötétben?",
    answers: [
      "Az úttest megfelelő megvilágítása a kerékpáros számára (látni), és a jármű láthatóvá tétele a szembejövők számára (látszani).",
      "Kizárólag a hátulról érkező, gyorsan haladó gépjárművek figyelmeztetése, hogy a kerékpár az úttest szélén halad.",
      "A kerékpár egyedi megjelenésének, díszítésének biztosítása a városi forgalomban, hogy esztétikailag kitűnjön.",
      "Nappali fényviszonyok között a kötelező csengő helyettesítése a villogó üzemmód folyamatos használatával."
    ],
    correctAnswer: 0,
    explanation: "A 'látni és látszani' elv! Az első lámpa (ha megfelelő fényerejű) bevilágítja az utat a kátyúk elkerüléséhez, miközben folyamatosan jelzi a szembejövő forgalomnak a kerékpáros jelenlétét."
  },
  {
    id: "lat_18",
    category: "lathatosag",
    difficulty: "easy",
    question: "Milyen veszélyt jelent a sötétben az eső és a vizes aszfalt a gyalogosok láthatósága szempontjából?",
    answers: [
      "Semmilyet, sőt, a sűrű eső lemosta a koszt az útról, így a kontraszt miatt a gyalogosok sokkal jobban látszanak.",
      "Mivel esik az eső, a gépjárművezetők reflexből sokkal lassabban mennek, így a balesetveszély ilyenkor a legalacsonyabb.",
      "A vizes aszfalt úgy működik, mint egy tükör: a fényszórók fényét elnyeli vagy rossz irányba veri vissza, csillogása pedig elvakítja a sofőrt, aki így alig látja meg a gyalogost.",
      "Az esernyőt tartó gyalogosok nagyobb felületet képeznek a radarok számára, így az autók automatikus fékrendszerei előbb megállnak."
    ],
    correctAnswer: 2,
    explanation: "Esős éjszakákon a láthatóság drasztikusan leromlik. A nedves, sötét aszfalt szinte teljesen elnyeli a fényt, a pocsolyák és a szembejövők fénye pedig tükröződik rajta, megvakítva a sofőrt, így a sötét ruhás gyalogos észlelhetetlenné válik."
  },
  {
    id: "lat_19",
    category: "lathatosag",
    difficulty: "hard",
    question: "Lakott területen belül, éjszaka, jól kivilágított úton kötelező-e a kerékpárosnak fényvisszaverő mellényt viselnie?",
    answers: [
      "Igen, a KRESZ szerint éjszaka mindenhol (lakott területen belül és kívül is) szigorúan kötelező a mellény viselése.",
      "Nem, lakott területen belül a mellény soha nem kötelező, még sötétben és kivilágítatlan útszakaszokon sem.",
      "Csak akkor kötelező lakott területen belül, ha a kerékpár sebessége tartósan meghaladja a 30 km/h-t a forgalomban.",
      "Nem, a KRESZ csak lakott területen kívül, éjszaka vagy korlátozott látási viszonyok között teszi kötelezővé a mellény viselését."
    ],
    correctAnswer: 3,
    explanation: "A láthatósági mellény viselése a kerékpárosok (és gyalogosok) számára lakott területen kívül kötelező éjszaka/rossz látási viszonyok között. Lakott területen belül nem kötelező, de az egyéni biztonság érdekében erősen ajánlott!"
  },
  {
    id: "lat_20",
    category: "lathatosag",
    difficulty: "easy",
    question: "Mit érdemes tenni a házi kedvencek (pl. kutyák) láthatóságával kapcsolatban az esti séták során?",
    answers: [
      "Érdemes őket szabadon, póráz nélkül rohangálni hagyni, így gyorsabban kitérhetnek a közeledő autók elől.",
      "Nem kell tenni semmit, az állatok szeme foszforeszkál a sötétben, ami bőségesen elég az autósok tájékoztatására.",
      "Éjszakai séta során egy sötét, zárható dobozban (hordozóban) kell őket szállítani a közterületen a saját érdekükben.",
      "Feltétlenül érdemes őket világító nyakörvvel, LED-es medállal vagy fényvisszaverő hámokkal felszerelni."
    ],
    correctAnswer: 3,
    explanation: "A kutyusok a kis méretük és gyakran sötét bundájuk miatt óriási veszélyben vannak este az utak mentén. A világító nyakörv vagy a reflexcsíkos hám megelőzheti, hogy egy arra járó autó elüsse őket."
  },

  // --- VASÚTI ÁTJÁRÓ (20 questions) ---
  {
    id: "vas_1",
    category: "vasut",
    difficulty: "easy",
    question: "Mit kell tenned, ha a vasúti átjáró fénysorompója villogó PIROS jelzést mutat?",
    answers: [
      "A berendezés villogó piros fénye szigorú megállási parancs; az átjáró előtt azonnal meg kell állni, mert jön a vonat.",
      "A sebesség növelésével gyorsan át kell hajtani az átjárón, hogy még a vonat odaérése előtt elhagyjuk a veszélyzónát.",
      "Ha lehúzott ablaknál nem hallod a vonat kürtjét, és nem is látod jönni, óvatosan átmehetsz a síneken.",
      "A piros jelzés csak a gépjárművekre vonatkozik, kerékpárral és gyalogosan bátran át lehet haladni ilyenkor is."
    ],
    correctAnswer: 0,
    explanation: "A villogó piros fény szigorú és kötelező megállási parancs minden közlekedő (így a gyalogosok és kerékpárosok) számára! A vonatok fékútja több száz méter, ha a tilos ellenére a sínekre lépsz, az életeddel játszol."
  },
  {
    id: "vas_2",
    category: "vasut",
    difficulty: "easy",
    question: "Mit jelent a fénysorompó villogó FEHÉR jelzése?",
    answers: [
      "Azt jelzi, hogy a vasúti szerelvény már a közelben van, ezért a felkészülés érdekében azonnal lassítani kell.",
      "A berendezés működik, a megközelítési szakaszon nincs vonat, de az áthaladás így is csak fokozott óvatossággal történhet.",
      "Azt jelzi, hogy a fénysorompó elromlott (üzemzavar), ezért a síneken való áthaladás előtt kötelező megállni a STOP táblánál.",
      "Feltétlen megállási kötelezettséget ír elő a gyalogosok számára, miközben az autósok szabadon áthaladhatnak a síneken."
    ],
    correctAnswer: 1,
    explanation: "A villogó fehér fény azt mutatja, hogy a fénysorompó üzembiztos, és a rendszer nem érzékel közeledő vonatot. Ugyanakkor ez NEM jelent 'zöld utat': az átjárón csak fokozott óvatossággal és szétnézés után szabad áthaladni."
  },
  {
    id: "vas_3",
    category: "vasut",
    difficulty: "easy",
    question: "Szabad-e áthaladni a vasúti átjárón, ha a félsorompó rúdja lefelé mozog vagy már le van csukva?",
    answers: [
      "Igen, ha a járművünk elég alacsony ahhoz, hogy a rúd érintése nélkül átférjünk alatta, a manőver megengedett.",
      "Csak kerékpárral vagy motorral szabad a lecsukott félsorompót megkerülve átszlalomozni, autók számára tilos.",
      "Szigorúan tilos. A mozgó vagy lezárt sorompó (és a villogó piros fény) egyértelmű tiltást jelent mindenki számára.",
      "Csak gyalogosan szabad átbújni a csukott sorompó alatt, amennyiben sietünk a túloldalon lévő buszmegállóba."
    ],
    correctAnswer: 2,
    explanation: "A lecsukott vagy mozgásban lévő sorompónál (amit ráadásul mindig villogó piros fény is kísér) áthaladni szigorúan tilos és életveszélyes minden közlekedő számára!"
  },
  {
    id: "vas_4",
    category: "vasut",
    difficulty: "medium",
    question: "Mit kell tenni, ha a vasúti átjáró fénysorompója 'sötét' (nem ad sem fehér, sem piros fényjelzést)?",
    answers: [
      "Azt jelenti, hogy szabad az út, így lassítás nélkül, a korábbi sebességet megtartva gyorsan át kell haladni.",
      "Hangjelzéssel (dudálással) kell felhívni a vasutasok figyelmét a hibára, majd azonnal át kell hajtani a síneken.",
      "Vissza kell fordulni, és a járművet ott hagyva gyalogosan kell megkeresni egy másik, működő vasúti átjárót.",
      "A berendezés üzemzavarát jelzi; ilyenkor megállással kell meggyőződni arról, hogy nem jön vonat, mielőtt áthajtunk."
    ],
    correctAnswer: 3,
    explanation: "A sötét fénysorompó üzemzavart jelent, NEM szabad jelzést. Ilyenkor a vasúti átjárót biztosítatlan átjáróként kell kezelni: a sínek előtt meg kell állni (ha a kilátás ezt indokolja), és csak akkor szabad átmenni, ha 100%-ig biztosak vagyunk benne, hogy nem jön vonat."
  },
  {
    id: "vas_5",
    category: "vasut",
    difficulty: "easy",
    question: "Hogyan kell megközelíteni a vasúti átjárót járművel a KRESZ előírásai szerint?",
    answers: [
      "Fokozott óvatossággal és olyan sebességgel, hogy a járművel a vasúti átjáró előtt biztonságosan meg lehessen állni.",
      "Lehetőség szerint minél nagyobb sebességgel, hogy a jármű a lehető legkevesebb időt töltse a veszélyes síneken.",
      "Cikkcakkban, a sávok között folyamatosan váltakozva haladva, hogy a vonatvezető messziről észrevegye a mozgásunkat.",
      "A fényszórókat folyamatosan fel-le kapcsolgatva és dudálva, hogy elkerüljük az állatok sínekre tévedését az átjáróban."
    ],
    correctAnswer: 0,
    explanation: "A vasúti átjárót mindig fokozott óvatossággal, a sebességet jelentősen csökkentve kell megközelíteni, hogy ha a fénysorompó hirtelen pirosra vált, azonnal és biztonságosan meg tudjunk állni előtte."
  },
  {
    id: "vas_6",
    category: "vasut",
    difficulty: "medium",
    question: "Mely jelzések figyelmeztetnek lakott területen kívül a vasúti átjáró közeledtére?",
    answers: [
      "Kizárólag a kék, kör alakú tájékoztató táblák, amelyeken egy vonat vagy villamos fehér piktogramja látható.",
      "A vasúti átjárót jelző veszélyjelző tábla (mozdony vagy kerítés ábra), és az alatta elhelyezett (3, 2, 1 sávos) előjelző táblák.",
      "Csak egy nyolcszögletű STOP tábla, amelyet közvetlenül a sínek elé, a fénysorompó oszlopára szerelnek fel.",
      "Lakott területen kívül a KRESZ szerint nincs szükség külön előjelzésre, a sofőrnek a síneket vizuálisan kell észlelnie."
    ],
    correctAnswer: 1,
    explanation: "A vasúti átjárót veszélyt jelző tábla (piros háromszög) jelzi előre. Lakott területen kívül kötelezően használnak sávos (piros csíkos) előjelző táblákat is (általában 240, 160 és 80 méterre a sínektől), amelyek fokozatosan mutatják a távolságot."
  },
  {
    id: "vas_7",
    category: "vasut",
    difficulty: "easy",
    question: "Mit ábrázol és mit jelent az 'András-kereszt' (két egymást keresztező fehér rúd, piros végekkel) közvetlenül a vasúti átjáró előtt?",
    answers: [
      "Egy repülőgépet szimbolizál, és arra utal, hogy a közelben egy alacsonyan szálló repülőgépek által használt reptér található.",
      "Egy módosított 'Elsőbbségadás kötelező' táblát helyettesít azokon a helyeken, ahol a sínek forgalma csekély.",
      "A vasúti átjáró pontos helyét jelöli (ha több vágány van, dupla keresztet használnak), a megállás határát mutatva.",
      "Azt a területet határolja le, ahová a vasúti járműveken kívül bármilyen más gépjárművel szigorúan tilos a behajtás."
    ],
    correctAnswer: 2,
    explanation: "A piros-fehér András-kereszt közvetlenül az átjáró (a sínek) előtt áll. Ez jelöli ki magát a vasúti átjárót. Ha piros a jelzés (vagy nincs fénysorompó, de jön a vonat), eddig a tábláig kell előregurulni és megállni."
  },
  {
    id: "vas_8",
    category: "vasut",
    difficulty: "medium",
    question: "Melyik állítás igaz a vasúti átjáróban és közvetlenül előtte történő előzésre?",
    answers: [
      "Mivel a vasúti átjáró egyenes és jól belátható, a gépjárművek ott minden esetben akadálytalanul megelőzhetik egymást.",
      "Csak a lassú haladású mezőgazdasági vontatókat és a kerékpárosokat tilos megelőzni a síneken áthaladva.",
      "Kizárólag éjszaka, rossz látási viszonyok között tilos az előzés, nappal a sávváltás szabadon engedélyezett.",
      "Főszabály szerint vasúti átjáróban és közvetlenül előtte tilos előzni, kivéve például a kétkerekű motorkerékpárt vagy kerékpárt."
    ],
    correctAnswer: 3,
    explanation: "A KRESZ szigorúan tiltja az előzést a vasúti átjáróban és közvetlenül előtte. A kivételek szigorúak: például egy nyomon haladó járművet (motor, bicikli) meg lehet előzni, de autót autóval előzni tilos."
  },
  {
    id: "vas_9",
    category: "vasut",
    difficulty: "easy",
    question: "Hogyan kell a járművel az átjáróban a síneken áthaladni a KRESZ szerint?",
    answers: [
      "Az átjárón folyamatosan (megállás nélkül), legalább 5 km/h átlagsebességgel kell áthaladni.",
      "Az átjáróban a járműnek kötelezően el kell érnie a legalább 50 km/h-s sebességet a gyors kiürítés érdekében.",
      "A sínek között a rázkódás miatt maximum 5 km/h sebességgel (lépésben) szabad csak átgurulni a járművel.",
      "A KRESZ erre vonatkozóan nem fogalmaz meg elvárást, a sofőr saját belátása szerint választhatja meg a tempót."
    ],
    correctAnswer: 0,
    explanation: "A KRESZ előírja, hogy az átjárón folyamatosan (megállás, váltás vagy a motor leállása nélkül) és legalább 5 km/h átlagsebességgel kell áthaladni. Korábban volt 30/40 km/h-s sebességlimit, de azt eltörölték, a hangsúly a biztonságos, folyamatos haladáson van."
  },
  {
    id: "vas_10",
    category: "vasut",
    difficulty: "medium",
    question: "Mi a teendőnk, ha kerékpárral a vasúti síneken való áthaladáskor sár vagy csúszós falevelek borítják a fém síneket, vagy esik az eső?",
    answers: [
      "Dőljünk erősen oldalra a kerékpárral, mintha kanyarodnánk, és így a külső gumibütykök könnyebben megkapaszkodnak a sínen.",
      "A síneket a lehető leginkább merőlegesen keresztezve kell áttekerni, kerülve a fékezést vagy a hirtelen kormánymozdulatot.",
      "Szigorúan csak az első fék erős behúzásával, csúszó kerékkel szabad áthaladni a síneken az egyensúly megőrzése miatt.",
      "A kerékpárról leugorva, azt magunk előtt tolva kell közvetlenül rálépni a sínekre, hogy ne essünk el a járművel."
    ],
    correctAnswer: 1,
    explanation: "A nedves, saras fém sínek olyanok a bicikliguminak, mint a jég. Ha lapos szögben próbálsz átmenni rajtuk, a kerék azonnal kicsúszik. A síneket mindig merőlegesen (derékszögben) kell keresztezni."
  },
  {
    id: "vas_11",
    category: "vasut",
    difficulty: "easy",
    question: "Szabad-e vasúti átjáróban (vagy a nyílt vasúti pályán) gyalogosan megállni, például fotózni, szelfizni?",
    answers: [
      "Igen, mivel a vasúti sínek különleges atmoszférája kiváló hátteret biztosít a kreatív fotózáshoz a közösségi médiába.",
      "Csak akkor engedélyezett, ha az átjáró egyenes szakaszán a távolban egyértelműen nem látszik közeledő vonat.",
      "Szigorúan tilos és életveszélyes. A vasúti átjáróban és a nyílt pályán engedély nélkül tartózkodni, megállni nem szabad.",
      "Kizárólag akkor szabad, ha legalább egy három fős csoport végzi a fotózást, és egyikük folyamatosan figyeli a síneket."
    ],
    correctAnswer: 2,
    explanation: "A síneken (és az átjáróban) megállni, sétálgatni vagy fotózni szigorúan tilos! A modern vonatok nagyon csendesek és óriási sebességgel (akár 120-160 km/h) közlekednek, másodpercek alatt a helyszínre érnek."
  },
  {
    id: "vas_12",
    category: "vasut",
    difficulty: "hard",
    question: "Mit kell tenni olyan vasúti átjárónál, amelyet sem fénysorompó, sem teljes vagy félsorompó nem biztosít (biztosítatlan vasúti átjáró)?",
    answers: [
      "Mivel nincs tiltó jelzés, a sebesség csökkentése és megállás nélkül haladéktalanul át kell hajtani az átjárón.",
      "Kizárólag akkor kell lassítani és körülnézni, ha a közeledő vonat mozdonyvezetője hangjelzést (kürtölést) ad a távolból.",
      "A járművel kötelezően a sínek közé hajtva kell megállni, hogy onnan mindkét irányba tökéletes legyen a kilátás a pályára.",
      "A vasúti pályán való áthaladás előtt az átjáró (András-kereszt) előtt meg kell állni, és meg kell győződni a veszélytelenségről."
    ],
    correctAnswer: 3,
    explanation: "A biztosítatlan (vagy üzemzavaros) vasúti átjárónál az áthaladás előtt a jogszabály kötelezővé teszi a megállást, amennyiben a kilátás korlátozott (legtöbbször az), és csak alapos szétnézés után szabad a sínekre hajtani."
  },
  {
    id: "vas_13",
    category: "vasut",
    difficulty: "easy",
    question: "Miért rendkívül veszélyes a vasúti átjáróban zajszűrős fülhallgatóval zenét hallgatva sétálni vagy kerékpározni?",
    answers: [
      "Mert a fülhallgató kizárja a külvilág zajait, így a gyalogos nem hallja meg a közeledő vonat hangját vagy a mozdony vészjelzését.",
      "Mert a hideg téli időben a Bluetooth fülhallgatók akkumulátora a sínek körüli mágneses mező miatt hirtelen lemerülhet.",
      "Mert a fülhallgató könnyen kieshet a fülből, és ha a gyalogos lehajol érte a sínek között, feltartja a mögötte haladó autókat.",
      "Egyáltalán nem veszélyes, a vasúti fénysorompó piros villogó fénye vizuálisan tökéletesen elegendő a biztonságos átkeléshez."
    ],
    correctAnswer: 0,
    explanation: "A látásunkat és hallásunkat egyszerre kell használni a biztonsághoz. Ha fülhallgató (és/vagy telefonnézés) miatt kizárod a külvilágot, nem fogod meghallani a fénysorompó csengőjét vagy a vonat kürtjét!"
  },
  {
    id: "vas_14",
    category: "vasut",
    difficulty: "medium",
    question: "Mit kell tenned, ha az autód lefullad, elakad a vasúti átjáró közepén a síneken, és többszöri próbálkozásra sem indul be?",
    answers: [
      "A sofőr és az utasok maradjanak becsatolva az autóban, zárják be az ajtókat, és azonnal hívjanak egy autómentőt a helyszínre.",
      "Minden utasnak azonnal el kell hagynia az autót és a síneket! Az élet védelme az első, a jármű mentése csak másodlagos lehet.",
      "Húzzuk fel az összes ablakot, nehogy a vonat menetszele betörje az üvegeket, és a sofőr folyamatosan nyomja a dudát segítségért.",
      "A sofőrnek azonnal ki kell szállnia, és egyedül, puszta kézzel kell megpróbálnia letolni az üresen két tonnás járművet a sínekről."
    ],
    correctAnswer: 1,
    explanation: "Ha az autó elakad a síneken, egyetlen másodpercet sem szabad vesztegetni a bent ülve történő próbálkozással. Azonnal ki kell szállni, elhagyni az átjárót, és távolról, biztonságos helyről (pl. 112 hívásával) intézkedni."
  },
  {
    id: "vas_15",
    category: "vasut",
    difficulty: "easy",
    question: "Megváltoztathatod-e a haladási irányt, és megfordulhatsz-e (visszafordulás) járműveddel közvetlenül a vasúti átjáróban?",
    answers: [
      "Igen, amennyiben az átjáró elegendően széles, és a fénysorompó éppen villogó fehér jelzést mutat a manőver megkezdésekor.",
      "Kizárólag kerékpárral és segédmotoros kerékpárral szabad megfordulni, mert azoknak sokkal kisebb a fordulóköre, mint az autóknak.",
      "Nem, a KRESZ alapján vasúti átjáróban szigorúan tilos a megfordulás és a tolatás is a fokozott balesetveszély miatt.",
      "Igen, ha a sofőr eltévedt és siet, akkor az elsőbbség megadása után egy gyors manőverrel visszafordulhat a síneken."
    ],
    correctAnswer: 2,
    explanation: "A vasúti átjáróban a tolatás és megfordulás szigorúan tilos! Ezek időigényes, bonyolult manőverek, amelyek során könnyen lefulladhat az autó motorja, így a síneken ragadhatunk."
  },
  {
    id: "vas_16",
    category: "vasut",
    difficulty: "medium",
    question: "Hogyan kell elhelyezni az elakadásjelző háromszöget, ha a jármű vasúti átjáróban akad el?",
    answers: [
      "A háromszöget az elakadt jármű tetejére (a tetőlemezre) kell helyezni, hogy a mozdonyvezető messziről, magasan lássa.",
      "Mivel az átjáró fokozottan veszélyes övezet, a sofőrnek nem szabad elhagynia az autót a háromszög kihelyezése céljából.",
      "A háromszöget a két vasúti sín közé kell helyezni, kb. 5 méter távolságra az autótól, hogy a vonat kerekét ne rongálja meg.",
      "Úgy kell az úton elhelyezni (jellemzően az átjáró előtt), hogy a közeledő járművezetők kellő távolságból észlelhessék az akadályt."
    ],
    correctAnswer: 3,
    explanation: "Ha a jármű az átjáróban ragad, az elakadásjelző háromszöget a közúton, az átjáró előtt kell kihelyezni, hogy a közeledő autósok ne hajtsanak be a lezárt, bedugult átjáróba."
  },
  {
    id: "vas_17",
    category: "vasut",
    difficulty: "hard",
    question: "Milyen távolságra a vasúti átjárótól tilos megállni és várakozni az út szélén lakott területen kívül?",
    answers: [
      "A vasúti átjáró előtt és után 30 méteren belül (lakott területen kívül pedig 50 méteren belül) szigorúan tilos megállni.",
      "Kizárólag közvetlenül az András-kereszt mellett, a sínektől számított 1-2 méteres sávon belül tiltott a járművek parkolása.",
      "A fénysorompótól számított legalább 100 méteren belül minden jármű számára tilos a megállás és a várakozás.",
      "A KRESZ nem határoz meg konkrét métereket, a sofőrnek a józan eszére van bízva, hogy hol parkolja le az autóját a síneknél."
    ],
    correctAnswer: 0,
    explanation: "A KRESZ szerint a vasúti átjáró előtt és után lakott területen 30, lakott területen kívül 50 méter távolságon belül tilos megállni (és várakozni is). Ezzel biztosítják, hogy a parkoló autók ne takarják el a fénysorompót és a közeledő vonatot a többiek elől."
  },
  {
    id: "vas_18",
    category: "vasut",
    difficulty: "easy",
    question: "Hogyan kell viselkedni a vasúti peronon (állomáson), amikor várjuk a vonat beérkezését?",
    answers: [
      "A peron legszélén egyensúlyozva érdemes figyelni a vonat közeledtét, hogy elsőként tudjunk felszállni a szerelvényre.",
      "Mindig a padlóra festett sárga biztonsági sáv (vagy domború vezetősáv) mögött, az attól távolabbi területen kell várakozni.",
      "A vágányok (sínek) közé ugrálva lehet a leggyorsabban megközelíteni a szemközti peront, ha a mi oldalunkon nagy a tömeg.",
      "A peronon engedélyezett a még lassan mozgó, fékező vonatra való felkapaszkodás az időnyereség és a jobb ülőhely érdekében."
    ],
    correctAnswer: 1,
    explanation: "A biztonsági (általában sárga, vagy érdesített) sáv mögött állni életbe vágó. Az áthaladó (vagy fékező) gyorsvonatok erős menetszele vagy egy kiálló alkatrész könnyen a vonat alá ránthatja azt, aki túl közel áll a peron széléhez."
  },
  {
    id: "vas_19",
    category: "vasut",
    difficulty: "medium",
    question: "Mit jelent, ha a félsorompó rúdja piros-fehér csíkos és fényvisszaverő elemek vannak rajta?",
    answers: [
      "Kizárólag hagyományőrző díszítést jelent, amelyet a vasúttársaságok a régi idők emlékére alkalmaznak a sorompókon.",
      "Azt a szabályt jelképezi, hogy a sorompó rúdja magas feszültség alatt áll, így ahhoz kézzel szigorúan tilos hozzáérni.",
      "Azt a célt szolgálja, hogy éjszaka, az autók fényszórójának fényében is maximálisan látható és feltűnő legyen az útakadály.",
      "Nincs különösebb jelentősége, a gyártók véletlenszerűen választják ki a színeket a sorompók festésekor."
    ],
    correctAnswer: 2,
    explanation: "A piros-fehér sávozás a nemzetközi standard a veszélyt jelző fizikai akadályoknál. A fényvisszaverő fóliázás pedig garantálja, hogy az éjszaka, kivilágítatlan úton érkező autós fényszórója már messziről megvilágítsa a lezárt sorompót."
  },
  {
    id: "vas_20",
    category: "vasut",
    difficulty: "easy",
    question: "Átkelhetünk-e a vasúti síneken olyan helyen (pl. az állomás végénél, vagy erdőben), ahol nincs kijelölt átkelőhely?",
    answers: [
      "Igen, ha a fülünket a sínre téve nem halljuk a vonat közeledtét, akkor biztonságosan átsétálhatunk a töltésen.",
      "Kizárólag éjszaka engedélyezett, mert olyankor a vonatok fényszóróját már kilométerekről észre lehet venni a sötétben.",
      "Igen, amennyiben kerékpárral vagy motorral vagyunk, mivel azokkal a járművekkel gyorsan el lehet hagyni a veszélyes zónát.",
      "Nem, a KRESZ és a vasúti szabályzat értelmében a vasúti pályán nem kijelölt helyen átkelni szigorúan tilos és életveszélyes."
    ],
    correctAnswer: 3,
    explanation: "A nyílt vasúti pályán, az állomások peronjain kívüli vágányokon vagy bárhol, ahol nincs kijelölt vasúti átjáró, a síneken való átkelés illegális (birtokháborítás és szabálysértés) és a csendes, gyors vonatok miatt rendkívül veszélyes."
  },

  // --- KÖZLEKEDÉSI KULTÚRA (20 questions) ---
  {
    id: "kul_1",
    category: "kultura",
    difficulty: "easy",
    question: "Hogyan kell (és érdemes) viselkednünk a többi közlekedővel szemben az utakon a mindennapokban?",
    answers: [
      "Figyelmesen, udvariasan, türelmesen és segítőkészen, hogy megelőzzük a konfliktusokat és a baleseteket.",
      "Türelmetlenül és erőszakosan, mivel a modern forgalomban csak az jut előre, aki kikényszeríti az elsőbbségét.",
      "Úgy, mintha egyedül lennénk az úton, figyelmen kívül hagyva a többi, nálunk esetleg lassabb sofőr hibáit.",
      "Kizárólag a rendőrökkel és a hatóságokkal szemben kell rendesnek lenni, a többi sofőrrel szemben mindent szabad."
    ],
    correctAnswer: 0,
    explanation: "A közlekedés egy társasjáték! A KRESZ alapelve is kimondja, hogy úgy kell közlekedni, hogy mások biztonságát ne veszélyeztessük, és feleslegesen ne akadályozzuk. Az udvariasság (pl. a cipzár-elv) felgyorsítja a forgalmat."
  },
  {
    id: "kul_2",
    category: "kultura",
    difficulty: "easy",
    question: "Miért kiemelten fontos az idős, mozgásukban korlátozott vagy babakocsis gyalogosok előzékeny elengedése a zebránál?",
    answers: [
      "Kizárólag azért, mert a rendőrök a gyalogátkelőhelyeknél állva súlyos pénzbírsággal büntetik a megállás elmulasztását.",
      "Mivel ők lassabban reagálnak a veszélyre és nehezebben, lassabban mozognak, így fokozott védelmet és türelmet igényelnek.",
      "Azért, hogy elkerüljük, hogy hangosan utánunk kiabáljanak, vagy a botjukkal rácsapjanak a járművünk karosszériájára.",
      "Teljesen felesleges őket elengedni, mivel a lassú áthaladásukkal feltartják a mögöttünk torlódó gépjárműforgalmat."
    ],
    correctAnswer: 1,
    explanation: "A KRESZ külön kiemeli, hogy az idősekkel, gyerekekkel és fogyatékkal élőkkel szemben fokozott óvatossággal kell eljárni. Nekik több idő kell az átkeléshez, a feladatunk vigyázni rájuk és türelmesen megvárni őket."
  },
  {
    id: "kul_3",
    category: "kultura",
    difficulty: "easy",
    question: "Mit érdemes tenned, ha látod, hogy egy autó indexel, mert egy sávlezárás miatt szeretne besorolni a sávodba a nagy dugóban?",
    answers: [
      "Határozott gázadással felgyorsítasz, hogy lezárd az előtted lévő rést, nehogy be tudjon furakodni eléd a sorba.",
      "Folyamatos, hangos dudálással hozod a tudtára, hogy a te sávodban neked van elsőbbséged, és várja meg a sor végét.",
      "Enyhén lassítasz és udvariasan beengeded (cipzár-elv), mert ez segíti a forgalom folyamatosságát és csökkenti a stresszt.",
      "Elfordítod a fejed, mintha nem vennéd észre az indexelést, és mereven csak az előtted álló autó lökhárítóját nézed."
    ],
    correctAnswer: 2,
    explanation: "A cipzár-elv (egy autót a saját sávunkból, egyet a megszűnő sávból engedünk) a leghatékonyabb módszer a dugók kezelésére. Az erőszakos sávzárás csak fokozza a balesetveszélyt és a torlódást."
  },
  {
    id: "kul_4",
    category: "kultura",
    difficulty: "easy",
    question: "Szabad-e szemetet (pl. üdítős flakont, papírzsebkendőt, csikket) kidobni az autó ablakán menet közben?",
    answers: [
      "Igen, amennyiben az úton éppen nincs nagy forgalom, és senki sem látja a szemetelést a sötétben.",
      "Kizárólag az autópályák leállósávjába szabad kidobni a hulladékot, mivel azt a közútkezelő rendszeresen takarítja.",
      "Csak az olyan gyorsan lebomló, bio szemetet (pl. alma csutkája) szabad kidobni, ami a természetben hamar megsemmisül.",
      "Szigorúan tilos és balesetveszélyes, mivel a kirepülő tárgy megijesztheti a mögöttes autóst és károsítja a környezetet."
    ],
    correctAnswer: 3,
    explanation: "Az ablakon kidobott szemét (még egy égő cigarettacsikk is) óriási balesetveszélyt jelent. Rácsapódhat a mögöttes autós szélvédőjére, vagy bepattanhat a bukósisak alá egy motorosnál, halálos balesetet okozva. Ráadásul komoly környezetszennyezés is."
  },
  {
    id: "kul_5",
    category: "kultura",
    difficulty: "medium",
    question: "Hogyan köszönheted meg udvariasan, ha egy autós elengedett a zebrán vagy előzékenyen beengedett a sávjába?",
    answers: [
      "Gyalogosként egy barátságos intés vagy bólintás, autósok között pedig az elakadásjelző (vészvillogó) 1-2 másodperces felvillantása.",
      "Lehúzott ablakon keresztüli, hangos kiabálással, hogy a forgalom zajában biztosan meghallja a másik sofőr a köszönetet.",
      "Nem kell megköszönni, hiszen a KRESZ alapján az elsőbbségadás a legtöbb esetben amúgy is a jogszabályi kötelessége volt.",
      "A kürt (duda) többszöri, hosszú és hangos megnyomásával, ami a leggyakoribb nemzetközi jelzés az autósok között."
    ],
    correctAnswer: 0,
    explanation: "Egy mosoly, egy apró intés, vagy az autós 'köszönő villogás' (az elakadásjelző 1-2 villanása) emberibbé és élhetőbbé teszi a közlekedést. Ha pozitív visszacsatolást kap, a sofőr máskor is udvarias lesz."
  },
  {
    id: "kul_6",
    category: "kultura",
    difficulty: "easy",
    question: "Mit tegyél, ha vezetés közben elkövettél egy kisebb hibát (pl. véletlenül bevágódtál valaki elé a sávváltáskor)?",
    answers: [
      "Ha rád dudálnak, mutass dühös és agresszív kézjeleket a másiknak, hogy megvédjed a saját igazadat a szituációban.",
      "Egy bocsánatkérő kézfeltartással vagy a vészvillogó rövid használatával jelezd a másik sofőrnek, hogy elismered a hibádat.",
      "Azonnal adj gázt és szaladj el a helyszínről, nehogy a másik sofőr kérdőre vonjon a következő piros lámpánál.",
      "Teljesen hagyd figyelmen kívül az egészet, és csinálj úgy, mintha mi sem történt volna a sávváltás során."
    ],
    correctAnswer: 1,
    explanation: "A hibázás elismerése a leggyorsabb módja egy forgalmi konfliktus (road rage) elsimításának. Egy őszinte, bocsánatkérő intés az esetek 99%-ában azonnal megnyugtatja a dühös, megrémült másik felet."
  },
  {
    id: "kul_7",
    category: "kultura",
    difficulty: "medium",
    question: "Hogyan kell elhaladni autóval egy nagy eső után kialakult, útszéli víztócsa mellett, ha a járdán gyalogosok tartózkodnak?",
    answers: [
      "Nagy gázzal, a megengedett sebesség túllépése nélkül átgázolni a tócsán, mert a gyalogosnak amúgy is számítania kell erre esőben.",
      "Már messziről folyamatosan dudálni kell, hogy a gyalogosoknak legyen idejük elfutni a közeledő vízpermet elől a házfalakhoz.",
      "A sebességet jelentősen csökkentve (lassítva) kell áthajtani a vízen, vagy ha lehetséges, kikerülni azt, hogy ne fröcsköljük le a gyalogosokat.",
      "A probléma elkerülése érdekében ilyen esetben indokolt felhajtani a szembejövő sávba, függetlenül az ottani forgalomtól."
    ],
    correctAnswer: 2,
    explanation: "A gyalogosok (és kerékpárosok) lefröcskölése rendkívül udvariatlan dolog. Mindig kötelességünk lassítani a pocsolyák előtt. Sőt, ha a szándékosság bizonyítható, ez a cselekedet akár szabálysértésnek (vagy kártérítésre alapot adónak) is minősülhet."
  },
  {
    id: "kul_8",
    category: "kultura",
    difficulty: "easy",
    question: "Használhatod-e a gépjármű dudáját (hangjelzését) a dugóban ülve dühöd kifejezésére, vagy egy ismerős üdvözlésére az utcán?",
    answers: [
      "Igen, a duda használata bármikor megengedett, ha a sofőr úgy érzi, hogy ezzel javíthatja a forgalom haladási tempóját.",
      "Kizárólag lakodalmi meneteknél (esküvőn) vagy nemzeti ünnepeken, sportesemények után szabad indokolatlanul dudálni.",
      "Csak az út szélén sétáló ismerősök üdvözlésére használható egy-két rövid, barátságos dudaszó formájában.",
      "Nem, szigorúan tilos. Hangjelzést adni a KRESZ szerint csak balesetveszély megelőzése érdekében (figyelmeztetésül) szabad."
    ],
    correctAnswer: 3,
    explanation: "A hangjelzés (duda) egy vészjelző eszköz. Indokolatlan használata (dühből, türelmetlenségből, köszöntésből) tilos, mert indokolatlanul megijesztheti a gyalogosokat, a kerékpárosokat, és zajszennyezést okoz a lakóknak."
  },
  {
    id: "kul_9",
    category: "kultura",
    difficulty: "medium",
    question: "Mit tegyél, ha biciklizés vagy vezetés közben azt látod, hogy egy közlekedőtársad (pl. motoros, rolleres) elesett az úton?",
    answers: [
      "Biztonságosan állj meg a helyszínen, győződj meg az állapotáról, és nyújts segítséget, szükség esetén hívj mentőt (112).",
      "Közömbösen haladj tovább, hiszen valószínűleg a saját figyelmetlensége miatt esett el, így egyedül is képes felállni.",
      "Kerüld ki a baleset helyszínét a lehető legnagyobb ívben és gázt adva hagyd el a környéket, nehogy téged hibáztassanak.",
      "Dudálással hívd fel rá a többiek figyelmét, majd anélkül, hogy megállnál, haladj tovább a dolgodra."
    ],
    correctAnswer: 0,
    explanation: "A segítségnyújtás nem csak morális kötelesség! A Btk. szerint a segítségnyújtás elmulasztása (ha valaki sérült) bűncselekmény. Minden balesetet szenvedett mellett meg kell állni és meg kell kérdezni, hogy jól van-e."
  },
  {
    id: "kul_10",
    category: "kultura",
    difficulty: "easy",
    question: "Hogyan kell biztonságosan és kulturáltan kinyitnod az autó ajtaját, ha a jobb hátsó ülésen utazol, és az út jobb szélén parkoltok (párhuzamos parkolás)?",
    answers: [
      "Lökjük ki teljes erőből a jobb oldali ajtót, hogy minél hamarabb ki tudjunk pattanni a járműből és felhívjuk magunkra a figyelmet.",
      "Körülnézés után óvatosan, a járdához közelebbi (jobb oldali) ajtón szálljunk ki, vigyázva a járdán közlekedő gyalogosokra.",
      "Az úttest felőli (bal oldali) ajtón érdemes kiszállni, mert a járda túl szűk lehet a kényelmes mozgáshoz.",
      "Ha lehetséges, a csomagtartón vagy a lehúzott ablakon keresztül másszunk ki, hogy az ajtónyitással ne zavarjunk senkit."
    ],
    correctAnswer: 1,
    explanation: "Az úttest (forgalom) felé kiszállni életveszélyes (az érkező autók vagy biciklisek letéphetik az ajtót és elüthetnek). Az utasoknak mindig a védett oldal, azaz a járda felé (jobb oldal) kell elhagyniuk a gépkocsit."
  },
  {
    id: "kul_11",
    category: "kultura",
    difficulty: "medium",
    question: "Mit jelent a 'defenzív vezetés' fogalma a közlekedéspszichológiában?",
    answers: [
      "Azt jelenti, hogy a sebességhatárokat maximálisan kihasználva, a többieket folyamatosan megelőzve gyorsan haladunk a célunk felé.",
      "Agresszív, támadó vezetési stílus, amellyel a sofőr tudatosan kényszeríti rá az akaratát a többi közlekedőre a forgalomban.",
      "Előrelátó, a várható veszélyekre és a többi sofőr hibáira felkészülő, engedékeny, a baleseteket mindenáron elkerülni igyekvő vezetési stílus.",
      "Olyan vezetési taktika, amely során a sofőr a saját elsőbbségét és sávját bármi áron, akár ütközés árán is megvédi a betolakodóktól."
    ],
    correctAnswer: 2,
    explanation: "A defenzív (védekező) vezetés lényege a megelőzés. Nem bízol vakon abban, hogy a másik megadja az elsőbbséget, hanem figyeled a forgalmat, számítasz a hibákra, és inkább lemondasz az elsőbbségedről a biztonság kedvéért."
  },
  {
    id: "kul_12",
    category: "kultura",
    difficulty: "easy",
    question: "Kulturált viselkedés-e hangos, dübörgő zenét hallgatni az autóban, teljesen lehúzott ablakokkal a nyári estéken lakott területen belül?",
    answers: [
      "Igen, kifejezetten ajánlott, hiszen így a fiatalok megoszthatják a zenei ízlésüket a járókelőkkel, javítva a város hangulatát.",
      "Kizárólag akkor engedélyezett és elfogadott, ha az éppen játszott zene a legújabb slágerlistákon az első helyen szerepel.",
      "Péntek és szombat este megengedett, mivel a hétvégén a lakók amúgy is később fekszenek le aludni a pihenőnapok miatt.",
      "Nem, kifejezetten tilos és udvariatlan. Zavarja a lakók nyugalmát, és a sofőr nem hallja meg tőle a mentők szirénáját."
    ],
    correctAnswer: 3,
    explanation: "A bömbölő zene (zavaró zajkeltés) egyrészt bunkóság az utcán lakókkal szemben, másrészt komoly közlekedésbiztonsági kockázat: a sofőr teljesen elveszíti a kapcsolatot a külvilággal, nem hallja a szirénákat vagy a dudálást."
  },
  {
    id: "kul_13",
    category: "kultura",
    difficulty: "medium",
    question: "Hogyan kell (és illik) közeledni a kijelölt gyalogos-átkelőhelyhez (zebrához) autóval vagy biciklivel a belvárosban?",
    answers: [
      "Fokozott óvatossággal és olyan csökkentett sebességgel, hogy a járművel szükség esetén az átkelőhely előtt biztonságosan meg lehessen állni.",
      "Gázt adva (gyorsítva) kell megközelíteni, hogy még azelőtt átsuhanjunk a zebrán, mielőtt a gyalogos odaérne a járdáról.",
      "A KRESZ nem ír elő különleges szabályokat a zebrára; elegendő, ha rövidet dudálunk, hogy a gyalogos tudja, hogy közeledünk.",
      "Megállás nélkül kell áthajtani a zebrán, mivel az úton haladó gépjárműnek és kerékpárnak (a nagyobb tömeg miatt) mindig elsőbbsége van."
    ],
    correctAnswer: 0,
    explanation: "A zebrát mindig úgy kell megközelíteni, mintha számítanál rá, hogy valaki lelép. A jogszabály 'fokozott óvatosságot' és olyan sebességet ír elő, amivel a zebra előtt bármikor biztonságosan meg tudsz állni."
  },
  {
    id: "kul_14",
    category: "kultura",
    difficulty: "easy",
    question: "Mit kell tenned, ha vakvezető kutyával vagy fehér bottal közlekedő, látássérült gyalogost látsz az úttest szélén várakozni?",
    answers: [
      "Hangos dudálással kell jelezned neki, hogy ott vagy, így tudni fogja, hogy egy autó áll a közelében, és nem lép le az útra.",
      "Azonnal meg kell állnod, függetlenül attól, hogy van-e ott kijelölt gyalogos-átkelőhely (zebra), és biztosítani kell az átkelését.",
      "Nagy gázzal, a lehető leggyorsabban és legcsendesebben kikerülöd őt, hogy a motor hangja ne zavarja meg a tájékozódásban.",
      "Figyelmen kívül hagyod a helyzetet, hiszen a látássérültek kiképzése során megtanulják, hogyan kell önállóan, segítség nélkül átkelniük."
    ],
    correctAnswer: 1,
    explanation: "A KRESZ szerint a fehér bottal, vagy vakvezető kutyával közlekedő vak személyeknek MINDENHOL (nem csak a zebrán!) elsőbbséget kell adni, és megállással kell biztosítani a biztonságos átkelésüket."
  },
  {
    id: "kul_15",
    category: "kultura",
    difficulty: "medium",
    question: "Mit érdemes tenned, ha biciklizés közben egy nagyon idős gyalogos (pl. bottal) lassan halad előtted a közös gyalog- és kerékpárúton?",
    answers: [
      "Hangosan rákiabálsz a háta mögül, hogy azonnal húzódjon félre a kerékpárutadról, mert akadályoz a gyors haladásban.",
      "Szorosan, centikre a válla mellett suhansz el nagy sebességgel, hogy a menetszélből érezze, legközelebb jobban le kell húzódnia.",
      "Lassítasz, időben egy finom, óvatos csengőszóval jelzel neki, és nagy, biztonságos oldaltávolságot tartva kerülöd ki őt.",
      "A kormánnyal finoman meglököd hátulról, hogy érezze az érkezésedet, és gyorsabb tempóra kényszeríted az idős személyt."
    ],
    correctAnswer: 2,
    explanation: "Az idős emberek hallása, reakcióideje és egyensúlyérzéke már nem a régi. Egy hirtelen, agresszív csengetéstől vagy egy közeli elsuhanástól megijedhetnek és eleshetnek. Ilyenkor a türelem és a nagy oldaltávolság a kulcs."
  },
  {
    id: "kul_16",
    category: "kultura",
    difficulty: "easy",
    question: "Kulturált dolog-e gúnyolódni, agresszíven gesztikulálni vagy vulgárisan mutogatni a másik autósnak/biciklisnek, ha felbosszantott minket a forgalomban?",
    answers: [
      "Igen, az ilyen gesztusok a feszültséglevezetés elfogadott, hasznos formái, amelyek segítenek elkerülni a fizikai konfliktust.",
      "Kizárólag akkor megengedett, ha teljesen egyértelmű, hogy a közlekedési szituációban nekünk volt igazunk, és a másik hibázott.",
      "Csak akkor szabad így viselkedni, ha biztosak vagyunk benne, hogy nincs a közelben rendőr vagy térfigyelő kamera, ami rögzítené.",
      "Nem, kifejezetten tilos és veszélyes. Az agresszív mutogatás tovább rontja a helyzetet (road rage), és súlyos tettlegességhez vezethet."
    ],
    correctAnswer: 3,
    explanation: "Az agresszív, trágár mutogatás sosem old meg semmit. Ellenkezőleg, a másik sofőrből is ellenséges reakciót vált ki (akár büntetőfékezést vagy verekedést). Maradjunk higgadtak, engedjük el a dolgot, a béke többet ér."
  },
  {
    id: "kul_17",
    category: "kultura",
    difficulty: "hard",
    question: "Mi az a 'biztonsági folyosó' (vagy mentősáv) az autópályákon és autóutakon, amit dugó esetén kell alkalmazni?",
    answers: [
      "A torlódó autók a belső sávban teljesen balra, a külső sávban pedig jobbra (akár a leállósávra is) húzódnak, középen utat nyitva a mentőknek.",
      "Egy kizárólag a miniszterek és a politikusok megkülönböztetett járművei számára fenntartott, titkosított sáv az autópálya közepén.",
      "A dugóban álló autók közötti terület, ahol a hosszabb várakozás alatt a gyerekek biztonságosan kiszállhatnak és játszhatnak.",
      "A magyar KRESZ nem ismeri ezt a fogalmat; a mentőautók ilyenkor kötelezően csak a leállósávon vagy az árokparton haladhatnak előre."
    ],
    correctAnswer: 0,
    explanation: "A mentősáv kialakítása kötelező! Autópályán (és több sávos úton) torlódás esetén a belső sáv a bal oldali szalagkorlát felé, a többi sáv (és a külső) a jobb oldal felé húzódik le. Így a sávok között egy széles folyosó jön létre a tűzoltóknak és a mentőknek."
  },
  {
    id: "kul_18",
    category: "kultura",
    difficulty: "easy",
    question: "Mit tegyen a kerékpáros vagy rolleres, amikor egy szűk kapualjból, mélygarázsból vagy sűrű bokrok mögül hajt ki a járdára/úttestre?",
    answers: [
      "Nagy lendülettel, a pedálra állva száguldjon ki bátran az útra, bízva abban, hogy a gyalogosok és az autósok időben észreveszik.",
      "Lassítson le teljesen (akár lépésben haladva vagy megállva), és nagyon óvatosan hajoljon ki, hogy belássa a járdát és az utat a kihajtás előtt.",
      "Még a kapualjban kezdjen el folyamatosan, nagyon hangosan csengetni, hogy minden gyalogos azonnal ugráljon el a kapu elől az útból.",
      "Hunyja le a szemét egy pillanatra, hogy jobban koncentrálhasson a motorhangokra, és csukott szemmel guruljon ki a vakfoltból."
    ],
    correctAnswer: 1,
    explanation: "A beláthatatlan, szűk helyekről (kapualj, garázs) való kihajtás fokozottan balesetveszélyes. A kapu előtt elhaladó gyalogosnak esélye sincs reagálni, ha valaki lendületből kihajt. Csak lassan, kukucskálva szabad kihajtani."
  },
  {
    id: "kul_19",
    category: "kultura",
    difficulty: "medium",
    question: "Mit fejez ki az az ismert közlekedésbiztonsági szlogen, miszerint 'Mindenkit hazavárnak'?",
    answers: [
      "Arra utal, hogy a munkanap végén mindenkinek igyekeznie (sietnie) kell hazafelé, hogy a család időben együtt tudjon vacsorázni az asztalnál.",
      "Egy kijárási korlátozásra vonatkozó régi KRESZ-szabály, ami azt jelentette, hogy este 10 óra után az embereknek otthon kell tartózkodniuk.",
      "Egy erős érzelmi emlékeztető arra, hogy a forgalomban lévő sofőrök mögött családok, gyerekek állnak; ne kockáztassuk mások életét a sietséggel.",
      "Azt jelenti, hogy a rendőrségi igazoltatás során minden szabálytalankodót azonnal hazakísérnek, és elveszik a járműve kulcsát."
    ],
    correctAnswer: 2,
    explanation: "Ez a szlogen arra hívja fel a figyelmet, hogy a közlekedés nem verseny. A 'másik autós', akire dühösek vagyunk, szintén valakinek az apja, anyja, gyermeke. A legfontosabb cél nem az 5 perccel korábbi érkezés, hanem hogy mindenki épségben hazaérjen a szeretteihez."
  },
  {
    id: "kul_20",
    category: "kultura",
    difficulty: "easy",
    question: "Hogyan segíthetik a leginkább a gyermekek a szüleik biztonságos autóvezetését az utastérben ülve?",
    answers: [
      "Hangos kiabálással, folyamatos verekedéssel és a szülők kérdésekkel való fárasztásával, hogy a sofőr ébren maradjon az úton.",
      "Ha a hátsó ülésről megpróbálják elérni a rádiót, vagy menet közben különböző gombokat nyomogatnak az autó műszerfalán.",
      "Azzal, ha hirtelen előrehajolnak és megpróbálják rángatni a kormányt, ha úgy érzik, hogy az autó letér az útról a kanyarban.",
      "Csendes, nyugodt viselkedéssel, biztonságosan bekötve, hogy a sofőr minden idegszálával az útra és a forgalomra tudjon koncentrálni."
    ],
    correctAnswer: 3,
    explanation: "A hátulról érkező hirtelen zajok, sikoltozás vagy verekedés óriási stresszt jelent a sofőrnek, aki ösztönösen hátrafordul. A gyerekek azzal segítenek a legtöbbet, ha csendben vannak és nem vonják el anya vagy apa figyelmét a vezetéstől."
  }
];
