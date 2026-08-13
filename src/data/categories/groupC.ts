import { Question } from "../../types";

export const groupCQuestions: Question[] = [
  // --- MIKROMOBILITÁSI ESZKÖZÖK (20 questions) ---
  {
    id: "mik_1",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mi igaz az elektromos rollerről a jelenlegi magyar szabályozás alapján?",
    answers: [
      "Minden esetben segédmotoros kerékpárnak tekintendő, függetlenül a végsebességétől.",
      "Kizárólag gyalogosnak minősül, ezért az úttesten semmilyen körülmények között nem használható.",
      "A KRESZ jelenleg külön nem nevesíti az elektromos rollert, azonban járműnek minősül.",
      "Minden paraméterétől függetlenül kerékpárnak minősül, és a kerékpáros szabályok érvényesek rá."
    ],
    correctAnswer: 2,
    explanation: "A KRESZ jelenleg nem tartalmaz külön „elektromos roller” kategóriát. Ugyanakkor járműnek minősül, így a konkrét közlekedési és műszaki szabályok megítélésénél az eszköz jellemzői és teljesítménye a mérvadóak."
  },
  {
    id: "mik_2",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Melyik állítás helyes az elektromos roller járdán történő használatáról?",
    answers: [
      "Bármilyen sebességgel használható a járdán, amennyiben a vezető hangjelzéssel figyelmezteti a gyalogosokat.",
      "Az elektromos rollerek járdahasználatának szabályai jelenleg nem egységesek, mivel a KRESZ nem nevesíti az eszközt.",
      "A gyalogosoknak minden esetben félre kell állniuk és elsőbbséget kell adniuk a járdán haladó rollernek.",
      "Kizárólag a járdán szabad velük közlekedni, az úttestre hajtani szigorúan tilos és balesetveszélyes."
    ],
    correctAnswer: 1,
    explanation: "Az elektromos roller jogi besorolása jelenleg nem egységesen, külön KRESZ-kategóriában szabályozott. Ezért nem helyes általános KRESZ-szabályként azt állítani, hogy járdán korlátozás nélkül, vagy automatikusan használható."
  },
  {
    id: "mik_3",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Hány ember utazhat egyszerre egy elektromos rollerrel?",
    answers: [
      "Kizárólag egyetlen személy utazhat rajta, utast szállítani az eszközön szigorúan tilos és balesetveszélyes.",
      "Két személy is utazhat rajta, amennyiben a hátul álló utas mindkét kezével stabilan kapaszkodik a vezetőbe.",
      "Egy felnőtt és egy 10 éven aluli gyermek utazhat rajta egyszerre, ha a gyermek elöl áll és kapaszkodik.",
      "A teherbírásától függően akár két felnőtt is utazhat rajta, ha a fellépő mérete ezt biztonságosan lehetővé teszi."
    ],
    correctAnswer: 0,
    explanation: "Az elektromos rolleren szigorúan csak egyetlen személy (a vezető) utazhat! A jármű egyensúlyozása és a fékút miatt utast szállítani rajta rendkívül balesetveszélyes."
  },
  {
    id: "mik_4",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Mi igaz az elektromos roller vezetőjének fejvédő használatára?",
    answers: [
      "Minden elektromos roller esetében, sebességtől függetlenül kötelező a bukósisak viselése a vezető számára.",
      "A bukósisak viselése soha nem kötelező, mivel ezek az eszközök kis sebességgel haladnak és biztonságosak.",
      "Kizárólag éjszaka vagy rossz látási viszonyok között kötelező a fényvisszaverő sisak viselése lakott területen kívül.",
      "A sisakhasználati kötelezettség az adott elektromos eszköz jogi besorolásától és annak végsebességétől függ."
    ],
    correctAnswer: 3,
    explanation: "Az elektromos rollerre nem létezik egyetlen, minden típusra azonos KRESZ-besorolás. Ha egy erősebb roller mopednek minősül, kötelező a sisak, míg ha a szabályozás szerint kerékpár kategóriába esik, akkor nem kötelező, de erősen ajánlott."
  },
  {
    id: "mik_5",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Milyen lámpákkal kell felszerelni az elektromos rollert sötétben való közlekedéshez?",
    answers: [
      "Kizárólag egy sárga villogó lámpa szükséges, amely felhívja a többi közlekedő figyelmét a lassú járműre.",
      "Előre fehér vagy kadmiumsárga, hátra pedig piros fényt adó lámpával kell kivilágítani, hasonlóan a kerékpárhoz.",
      "Semmilyen világítás nem kötelező, elegendő, ha a vezető fényvisszaverő mellényt visel sötétedés után.",
      "Előre és hátra is zöld vagy kék színű helyzetjelző lámpákat kell felszerelni az éjszakai láthatóság érdekében."
    ],
    correctAnswer: 1,
    explanation: "Ugyanúgy, mint a biciklinél, a forgalomban részt vevő e-rolleren is kötelező az első fehér (vagy kadmiumsárga) és a hátsó piros lámpa sötétben vagy rossz látási viszonyok között."
  },
  {
    id: "mik_6",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Szabad-e kézben tartott telefonnal e-rollert vezetni?",
    answers: [
      "Igen, amennyiben a vezető csak a járdán halad, és a sebessége nem haladja meg a gyalogosok tempóját.",
      "Igen, ha a telefonon lévő térképet használja navigációra, és csak az egyik kezével fogja a roller kormányát.",
      "Kizárólag akkor engedélyezett, ha a vezető megállás nélkül videót rögzít a környező forgalomról.",
      "Nem, vezetés közben kézben tartott mobiltelefont használni szigorúan tilos és rendkívül balesetveszélyes."
    ],
    correctAnswer: 3,
    explanation: "Az e-roller kerekeinek mérete miatt nagyon érzékeny az úthibákra. Mindkét kézzel fogni kell a kormányt, ráadásul a KRESZ minden járművezető számára tiltja a kézben tartott mobiltelefon használatát."
  },
  {
    id: "mik_7",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Mi az az e-bike (pedelec) a KRESZ szerint?",
    answers: [
      "Olyan segédmotoros kerékpár, amely gázkarral rendelkezik, és pedálozás nélkül is képes 40 km/h sebességgel haladni.",
      "Olyan elektromos rásegítésű kerékpár, amelynél a motor kizárólag pedálozás közben segít, legfeljebb 25 km/h sebességig.",
      "Olyan akkumulátoros jármű, amely kizárólag járdán használható, és pedálok nélkül, csak gombnyomással működik.",
      "Egy teljesen önvezető kerékpár, amely beépített GPS alapján önállóan eljuttatja az utasát a megadott célállomásra."
    ],
    correctAnswer: 1,
    explanation: "A pedelec olyan kerékpár, amelynél az elektromos motor csak a hajtás megkönnyítése érdekében, pedálozás közben segít rá a haladásra (maximum 25 km/h-ig). Ez jogilag hagyományos kerékpárnak minősül."
  },
  {
    id: "mik_8",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Hol kell hagynunk a bérelt e-rollert a használat után (pl. Budapesten)?",
    answers: [
      "Bármelyik kapualjban vagy parkoló autó mellett szabályosan otthagyható, amíg nem akadályozza az autósokat.",
      "Bárhol otthagyhatjuk a járdán vagy az úttest szélén, feltéve, hogy a roller beépített kitámasztóját használjuk.",
      "Kizárólag a buszmegállók és gyalogátkelőhelyek közvetlen közelében, a padokon vagy azok mellett szabad letenni.",
      "A bérlést követően a rollereket a kijelölt mikromobilitási pontokon (például Mobi-pontokon) kell szabályosan leparkolni."
    ],
    correctAnswer: 3,
    explanation: "Sok városban (így Budapesten is) bevezették a kötelező mikromobilitási parkolókat (Mobi-pontok). A szanaszét hagyott rollerek balesetveszélyesek, akadályozzák a babakocsisokat, kerekesszékeseket és a vakokat."
  },
  {
    id: "mik_9",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Szabad-e gördeszkával vagy hagyományos rollerrel (nem elektromossal) az úttesten haladni?",
    answers: [
      "Ezekkel az eszközökkel az úttesten haladni tilos; használójuk gyalogosnak minősül, így a járdán kell közlekednie.",
      "Igen, amennyiben a vezető irányjelzést ad, és szigorúan az úttest jobb szélén, a forgalom irányában közlekedik.",
      "Csak abban az esetben megengedett, ha az úton éppen nincs gépjárműforgalom, és jók a látási viszonyok.",
      "Igen, ha a használó sebessége eléri a 15 km/h-t, akkor az úttest jobb oldalát köteles igénybe venni a haladáshoz."
    ],
    correctAnswer: 0,
    explanation: "A lábbal hajtós roller, gördeszka és görkorcsolya a KRESZ szerint nem minősül járműnek. Aki ilyet használ, gyalogosnak minősül, így a járdán kell haladnia, anélkül, hogy a többi gyalogost zavarná."
  },
  {
    id: "mik_10",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Milyen sebességhatár vonatkozik az elektromos rollerre kerékpárúton a jelenlegi KRESZ alapján?",
    answers: [
      "Az elektromos rollerek maximális sebessége kerékpárúton lakott területen belül és kívül is egységesen 10 km/h.",
      "A jelenlegi KRESZ még nem tartalmaz külön, általános sebességhatárt az elektromos rollerek kerékpárúton történő használatára.",
      "Minden elektromos roller esetében egységesen 25 km/h a megengedett legnagyobb sebesség a kijelölt kerékpárutakon.",
      "A kerékpárutakon az elektromos rollerek egységesen legfeljebb 40 km/h sebességgel közlekedhetnek, ha a forgalom engedi."
    ],
    correctAnswer: 1,
    explanation: "Mivel az e-roller jelenleg nem rendelkezik különálló KRESZ-kategóriával, jogilag nem létezik rá egyetlen dedikált, egységes sebességhatár sem a kerékpárutakon."
  },
  {
    id: "mik_11",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mit kell tudni az e-roller gyermek általi használatáról közúton?",
    answers: [
      "Bármely életkorban szabad közúton önállóan használni, feltéve, hogy a gyermek visel bukósisakot és térdvédőt.",
      "Kizárólag akkor használhatja gyermek, ha egy felnőtt is a rolleren tartózkodik, és ő kezeli a fékeket és a gázt.",
      "Gyermekek számára kizárólag a járdán, felnőtt kíséretében, 14 éves korig megengedett a rollerezés közterületen.",
      "A KRESZ nem állapít meg külön, egységes korhatárt az e-rollerekre; a szabályozás az eszköz jogi besorolásától függ."
    ],
    correctAnswer: 3,
    explanation: "A KRESZ nem állapít meg egységes korhatár-szabályt az elektromos rollerekre. Ha az eszköz segédmotoros kerékpárnak minősül, jogosítvány kell hozzá (ami korhoz kötött), ha pedig kerékpárnak, akkor az arra vonatkozó szabályok érvényesek."
  },
  {
    id: "mik_12",
    category: "mikromobilitas",
    difficulty: "hard",
    question: "Milyen járműnek minősül az a kétkerekű eszköz, amely gázkarral van felszerelve és motorja 25 km/h-nál nagyobb sebességre képes önállóan felgyorsítani?",
    answers: [
      "Minden esetben elektromos rásegítésű kerékpárnak (pedelec) minősül, és kerékpárúton is haladhat.",
      "Legalább segédmotoros kerékpárnak minősül, így vezetéséhez jogosítvány és bukósisak szükséges.",
      "Gyalogosnak minősülő eszköz, így kizárólag a járdán vagy sétálóutcában lehet vele közlekedni.",
      "Mivel nincs rajta ülés, a KRESZ szabályai szerint sporteszköznek számít, és nem vehet részt a közúti forgalomban."
    ],
    correctAnswer: 1,
    explanation: "A 25 km/h feletti önálló haladásra képes, gázkaros elektromos eszközök (pl. erős e-rollerek) a KRESZ alapján már segédmotoros kerékpárnak (vagy teljesítménytől függően motorkerékpárnak) minősülnek, így kötelező a bukósisak, a biztosítás és az érvényes vezetői engedély."
  },
  {
    id: "mik_13",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Miért fontos a lassítás az e-rollerrel a kanyarok előtt?",
    answers: [
      "Mert a fékezés visszatölti az akkumulátort, így kanyarodás közben is folyamatosan tölthető a jármű rendszere.",
      "Egyáltalán nem fontos lassítani, a korszerű elektromos rollerek elektronikája automatikusan beveszi a kanyart.",
      "Azért, mert nagy sebességgel haladva a kanyarban a rolleren lévő elektronikus sebességmérő elveszíti a jelet.",
      "Mert a rollerek kis méretű kerekei a kanyarokban rosszabbul tapadnak, és nagy sebességnél könnyen kicsúszhatnak."
    ],
    correctAnswer: 3,
    explanation: "Az e-roller kis kerekei sokkal rosszabbul tolerálják az oldalirányú erőket és az úthibákat, mint a biciklik. Ha túl gyorsan kanyarodunk, a kerekek könnyen elvesztik a tapadást, és kicsúsznak alólunk."
  },
  {
    id: "mik_14",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Szabad-e e-rollerrel vagy kerékpárral ittasan (alkohol hatása alatt) közlekedni?",
    answers: [
      "Szigorúan tilos és életveszélyes, mivel az alkohol rontja az egyensúlyérzéket, a reflexeket és a koncentrációt.",
      "Igen, mivel ezek nem gépjárművek, így a KRESZ ittas vezetésre vonatkozó szigorú szabályai nem vonatkoznak rájuk.",
      "Kizárólag abban az esetben megengedett, ha az illető a kijelölt kerékpárúton halad, messze a gépjárműforgalomtól.",
      "Megengedett, feltéve, hogy a vezető sebessége nem haladja meg a 10 km/h-t, és fokozott óvatossággal közlekedik."
    ],
    correctAnswer: 0,
    explanation: "Az alkohol lassítja a reflexeket, rontja a térlátást és az egyensúlyérzéket. Kétkerekű járműveket ittasan vezetni szigorúan tilos és rendkívül magas baleseti kockázattal jár."
  },
  {
    id: "mik_15",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Milyen cipőben a legbiztonságosabb e-rollerezni vagy kerékpározni?",
    answers: [
      "Laza, nyitott papucsban vagy szandálban, amely biztosítja a láb megfelelő szellőzését a nyári melegben.",
      "Magas sarkú cipőben, mivel a sarokrész jól beakasztható a roller fellépőjének szélébe, növelve a stabilitást.",
      "Zárt, lapos talpú sportcipőben, amely stabilan tartja a lábat a roller deszkáján és nem csúszik le a pedálról.",
      "Vastag talpú bakancsban vagy gumicsizmában, amely megvédi a bokát a felcsapódó víztől és sártól minden időben."
    ],
    correctAnswer: 2,
    explanation: "A zárt, csúszásmentes sportcipő biztosítja a legmegfelelőbb tapadást és stabilitást a pedálokon vagy a roller fellépőjén, elkerülve a láb lecsúszását és az ebből adódó baleseteket."
  },
  {
    id: "mik_16",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Mit kell tenni az e-rollerrel, ha gyalogos zónába (sétálóutcába) érünk, ahol tábla tiltja a járműforgalmat?",
    answers: [
      "Mivel a járműforgalom tilos, kötelező leszállni az elektromos rollerről, és gyalogosan magunk mellett kell tolni azt.",
      "Fokozott sebességgel, minél hamarabb át kell hajtani a zónán, hogy a lehető legkevesebb ideig zavarjuk a gyalogosokat.",
      "A zóna szélén, a kirakatok és a házfalak mellett közvetlenül kell elhaladni, figyelve a boltokból kilépő emberekre.",
      "Folyamatos csengőhasználat mellett a gyalogosokat félreállásra kell kényszeríteni, és lassan át lehet gurulni."
    ],
    correctAnswer: 0,
    explanation: "A sétálóutcákban (ahol a járműforgalmat tábla tiltja) a gyalogosok biztonsága az első. Mivel az e-roller járműnek minősül, tilos vele ilyen helyen hajtani, csak leszállva, tolva szabad áthaladni."
  },
  {
    id: "mik_17",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mit jelez a roller hátsó sárvédőjén lévő piros prizma?",
    answers: [
      "Azt jelzi, hogy a roller beépített fékrendszerrel rendelkezik, amely a sárvédő lenyomásával mechanikusan működik.",
      "Kizárólag esztétikai szerepe van, és azt mutatja, hogy az e-roller prémium kategóriájú és megfelel az uniós szabványnak.",
      "Arra szolgál, hogy a hátulról érkező gépjárművek radaros sávtartó rendszerei könnyebben felismerjék az akadályt.",
      "Egy rendkívül fontos passzív biztonsági eszköz, amely a mögöttes forgalom számára láthatóvá teszi a járművet sötétben."
    ],
    correctAnswer: 3,
    explanation: "A hátsó piros fényvisszaverő prizma arra szolgál, hogy a sötétben vagy rossz látási viszonyok között mögöttünk haladó autós fényszórója megvilágítsa azt, így időben észrevegyen minket."
  },
  {
    id: "mik_18",
    category: "mikromobilitas",
    difficulty: "medium",
    question: "Szabad-e e-rollerrel vagy kerékpárral kapaszkodni egy haladó gépjárműbe (pl. autóba vagy traktorba) vontatás céljából?",
    answers: [
      "Igen, amennyiben a gépjármű vezetője ebbe előzetesen beleegyezett, és a sebesség nem haladja meg a 20 km/h-t.",
      "Szigorúan tilos és életveszélyes, mivel egy hirtelen fékezés vagy irányváltás esetén a kétkerekű vezetője eleshet.",
      "Kizárólag hegyvidéki vagy meredek útszakaszokon engedélyezett, hogy a kerékpáros energiát spóroljon a feljutáshoz.",
      "Csak olyan esetekben megengedett, amikor a járművek a forgalomtól elzárt magánterületen vagy földúton közlekednek."
    ],
    correctAnswer: 1,
    explanation: "Más, mozgó járműbe kapaszkodva haladni kifejezetten tiltja a KRESZ. Egy apró kormánymozdulat vagy hirtelen lassítás azonnal bukást okoz, ráadásul könnyen az autó kerekei alá lehet esni."
  },
  {
    id: "mik_19",
    category: "mikromobilitas",
    difficulty: "hard",
    question: "Melyik állítás helyes az elektromos roller járdán történő sebességéről?",
    answers: [
      "Minden e-roller egységesen legfeljebb 10 km/h sebességgel haladhat a járdán a gyalogosok mellett.",
      "A KRESZ szerint a járdán maximum 25 km/h sebességgel szabad közlekedni, ha a gyalogosforgalom gyér.",
      "Kizárólag lépésben, azaz maximum 5 km/h sebességgel szabad velük haladni a járdán, bármilyen körülmények között.",
      "Mivel az elektromos roller nem szerepel külön kategóriaként a KRESZ-ben, nincs rá egységes járdasebesség-határ előírva."
    ],
    correctAnswer: 3,
    explanation: "A KRESZ jelenleg nem tartalmaz külön, minden elektromos rollerre alkalmazható járdai sebességhatárt, így a jogszabály általánosan nem ír elő 10 vagy 25 km/h-s limitet kifejezetten rollerekre a járdán."
  },
  {
    id: "mik_20",
    category: "mikromobilitas",
    difficulty: "easy",
    question: "Mi a teendőnk, ha e-rollerrel elütünk egy gyalogost a járdán?",
    answers: [
      "Azonnal elhagyjuk a helyszínt, nehogy a gyalogos felelősségre vonjon minket a roller esetleges illegális járdahasználata miatt.",
      "Félretoljuk a sérültet az útból, nehogy akadályozza a további forgalmat, majd a lehető leghamarabb folytatjuk az utunkat.",
      "Azonnal meg kell állni, segítséget kell nyújtani a sérültnek, és szükség esetén értesíteni kell a mentőket és a rendőrséget.",
      "Kizárólag akkor kell megállni, ha a gyalogos eszméletlen, egyébként a felelősség megállapítása nélkül továbbhajthatunk."
    ],
    correctAnswer: 2,
    explanation: "Baleset részeseiként vagy okozóiként a KRESZ kötelezően előírja az azonnali megállást. Kötelességünk a helyszínen maradni, meggyőződni a sérülésekről, elsősegélyt nyújtani és indokolt esetben értesíteni a hatóságokat (112)."
  },

  // --- HALADÁS AZ ÚTON (20 questions) ---
  {
    id: "hal_1",
    category: "haladas",
    difficulty: "easy",
    question: "Melyik oldalon kell haladnunk a járművekkel (autó, bicikli) Magyarországon?",
    answers: [
      "Magyarországon baloldali közlekedés van érvényben, tehát szorosan az úttest bal szélén kell haladni.",
      "Hazánkban jobboldali közlekedés van, így a gépjárművekkel és kerékpárokkal is az úttest jobb széléhez tartva kell haladni.",
      "A járművekkel minden esetben az úttest felezővonalához húzódva, az út közepén kell a forgalomban részt venni.",
      "Szabadon megválaszthatjuk, hogy melyik oldalon haladunk, feltéve, hogy a szembejövő forgalmat nem zavarjuk."
    ],
    correctAnswer: 1,
    explanation: "Magyarországon (és a kontinentális Európa legnagyobb részén) jobboldali közlekedés van érvényben, így minden járművel az úttest jobb széléhez tartva (jobbra tartási kötelezettség) kell közlekedni."
  },
  {
    id: "hal_2",
    category: "haladas",
    difficulty: "easy",
    question: "Hogyan kell a kerékpárosnak kikerülnie az úttest szélén álló autót?",
    answers: [
      "Sebességcsökkentés nélkül, a parkoló autóhoz a lehető legközelebb húzódva kell elhaladni, hogy a belső sávot ne zavarja.",
      "Minden esetben le kell szállni a kerékpárról, és a járdán tolva kell kikerülni az akadályt képező gépjárművet.",
      "Folyamatos csengetéssel jelezni kell az érkezést, majd hirtelen kormánymozdulattal ki kell kerülni a várakozó autót.",
      "A kikerülés megkezdése előtt hátrapillantással ellenőrizni kell a forgalmat, irányt jelezni, és megfelelő oldaltávolságot tartani."
    ],
    correctAnswer: 3,
    explanation: "A parkoló autók kikerülése előtt mindig meg kell győződni a mögöttes forgalomról (hátrapillantás), irányjelezni kell, és olyan oldaltávolságot kell tartani, hogy egy hirtelen kinyíló ajtó se okozzon balesetet (ajtónyitásos baleset elkerülése)."
  },
  {
    id: "hal_3",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tenned, ha az úttest szélén haladsz és egy busz indexel, hogy elindulna a buszmegállóból lakott területen?",
    answers: [
      "Hangjelzést adsz, és a sebességedet növelve gyorsan elhaladsz mellette, nehogy a busz beszorítson a járdaszegélyhez.",
      "Figyelmen kívül hagyod az indexelést, mivel az egyenesen haladó járműnek mindig elsőbbsége van az elinduló busszal szemben.",
      "Lassítással, vagy szükség esetén megállással kötelező segítened a menetrend szerinti autóbusz elindulását a megállóból.",
      "Átmész a szembejövő sávba, hogy zökkenőmentesen kikerülhesd, miközben a busz lassan kihajt a megállóöbölből."
    ],
    correctAnswer: 2,
    explanation: "Lakott területen belül a járművek kötelesek segíteni a megállóból elindulni szándékozó menetrend szerinti autóbusz, illetve trolibusz elindulását – sebességük csökkentésével vagy akár megállással is."
  },
  {
    id: "hal_4",
    category: "haladas",
    difficulty: "medium",
    question: "Mit jelent a követési távolság megtartása az úton?",
    answers: [
      "Olyan távolságot kell tartani az előttünk haladó mögött, hogy annak hirtelen fékezése esetén is biztonságosan meg tudjunk állni.",
      "Azt jelenti, hogy a járműveknek legalább 100 méter távolságot kell tartaniuk egymástól, függetlenül a haladási sebességtől.",
      "Az előttünk haladó jármű szélárnyékába kell húzódni, hogy csökkentsük a légellenállást és üzemanyagot takarítsunk meg.",
      "A követési távolság azt jelenti, hogy a sorban haladó járművek sebességének megegyezőnek kell lennie a műszerek alapján."
    ],
    correctAnswer: 0,
    explanation: "A követési távolság biztonsági elem: akkora távolságot kell tartanunk az előttünk haladó járműtől, hogy ha az hirtelen vészfékezést hajt végre, mi is képesek legyünk ütközés nélkül megállni (reakcióidő + fékút)."
  },
  {
    id: "hal_5",
    category: "haladas",
    difficulty: "easy",
    question: "Szabad-e segédmotoros kerékpárral kerékpárúton közlekedni?",
    answers: [
      "Igen, mivel a segédmotoros kerékpár is kétkerekű, így az összes kerékpárra vonatkozó szabály automatikusan érvényes rá.",
      "Csak lakott területen belül engedélyezett, amennyiben a segédmotoros kerékpár sebessége nem haladja meg a 20 km/h-t.",
      "Igen, de kizárólag abban az esetben, ha a kerékpárúton éppen nem közlekednek gyalogosok vagy hagyományos kerékpárosok.",
      "Lakott területen belüli kerékpárúton tilos, de lakott területen kívül megengedett, amennyiben azt jelzőtábla nem tiltja."
    ],
    correctAnswer: 3,
    explanation: "A KRESZ egyértelműen fogalmaz: lakott területen lévő kerékpárúton segédmotoros kerékpárral közlekedni tilos. Lakott területen kívül viszont szabad, legfeljebb 30 km/h sebességgel, ha tábla másként nem rendelkezik."
  },
  {
    id: "hal_6",
    category: "haladas",
    difficulty: "medium",
    question: "Mit kell tennie a kerékpárosnak, ha az úton 'Kerékpársáv' (sárga vonallal leválasztott sáv az úttesten) van kijelölve?",
    answers: [
      "Szabadon eldöntheti, hogy a kerékpársávot vagy a gépjárművek számára fenntartott sávokat használja a haladásához.",
      "Köteles a kerékpársávot használni a haladásra, és azt csak indokolt esetben (pl. kikerüléskor, bekanyarodás előtt) hagyhatja el.",
      "A kerékpársáv csak ajánlott útvonal, így a kerékpáros biztonsági okokból választhatja a járdán történő közlekedést is.",
      "Csak abban az esetben kell a kerékpársávban haladnia, ha a sebessége nem éri el a 20 km/h-t, egyébként a külső sávot kell használnia."
    ],
    correctAnswer: 1,
    explanation: "Ha az úton kerékpársáv (vagy az út mellett kerékpárút) van kijelölve, a kerékpáros köteles azt használni. Az autók sávjába csak kanyarodás, vagy a sávot elzáró akadály kikerülése céljából hajthat be."
  },
  {
    id: "hal_7",
    category: "haladas",
    difficulty: "easy",
    question: "Melyik irányból kell előzni a szabályok szerint az úton (főszabályként)?",
    answers: [
      "Minden esetben jobbról, mivel az út jobb szélén haladó járművek a leglassabbak, így őket könnyebb ott megelőzni.",
      "Az útviszonyoktól és a forgalomtól függően mindkét oldalról szabályosan megengedett az előzés végrehajtása.",
      "Főszabály szerint balról kell előzni. Kivételt képez például a balra bekanyarodni szándékozó jármű, amelyet jobbról kell előzni.",
      "Kizárólag ott szabad előzni, ahol legalább három forgalmi sáv áll rendelkezésre egyazon haladási irányban."
    ],
    correctAnswer: 2,
    explanation: "Magyarországon a jobboldali közlekedés miatt az előzést balról kell végrehajtani. A balra kanyarodó (és besorolt) jármű, vagy a síneken haladó villamos képezhet kivételt, amiket jobbról kell megelőzni."
  },
  {
    id: "hal_8",
    category: "haladas",
    difficulty: "medium",
    question: "Szabad-e kerékpárral egyirányú utcába a forgalommal szemben behajtani?",
    answers: [
      "Alapvetően tilos. Csak akkor szabad behajtani, ha a kiegészítő tábla (kivéve kerékpár piktogram) ezt kifejezetten engedélyezi.",
      "Bármikor szabad, mivel a kerékpárosokra az egyirányú forgalmat jelző KRESZ táblák hatálya nem terjed ki a gyakorlatban.",
      "Csak akkor szabad, ha a kerékpáros a járdán tolja a biciklit, majd az út felénél felül rá és úgy halad tovább.",
      "Igen, amennyiben az utcában parkoló autók nem takarják el a kilátást, és a kerékpáros szorosan a bal oldalon halad."
    ],
    correctAnswer: 0,
    explanation: "Az egyirányú utcába a forgalommal szemben behajtani járművel (így kerékpárral is) tilos, KIVÉVE, ha a Behajtani tilos tábla alatt lévő kiegészítő tábla ezt a kerékpárosoknak külön engedélyezi."
  },
  {
    id: "hal_9",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tennie a járművezetőnek, ha a mögötte haladó autó megkülönböztető jelzéseket használ (villog és szirénázik)?",
    answers: [
      "Növelnie kell a sebességét, hogy a megkülönböztető jelzést használó jármű ne torlódjon fel a háta mögött az úton.",
      "Hirtelen vészfékezéssel megállnia a sávja közepén, hogy a mentő vagy rendőrautó a szembejövő sávon kikerülhesse.",
      "Csak abban az esetben kell félrehúzódnia, ha a szirénázó jármű vezetője fényszóró villantással vagy hangosbeszélőn erre felszólítja.",
      "Lehúzódással, lassítással, vagy szükség esetén megállással köteles biztosítani a jármű akadálytalan továbbhaladását."
    ],
    correctAnswer: 3,
    explanation: "A megkülönböztető fény- és hangjelzést együttesen használó járműveknek (mentő, tűzoltó, rendőrség) minden helyzetben elsőbbséget kell adni, és az akadálytalan továbbhaladásukat félrehúzódással, lehúzódással biztosítani kell."
  },
  {
    id: "hal_10",
    category: "haladas",
    difficulty: "medium",
    question: "Hová kell a járművezetőnek besorolnia kanyarodás előtt?",
    answers: [
      "Függetlenül a kanyarodás irányától, mindig az úttest jobb szélére kell húzódni, hogy a mögöttes forgalom balról előzhessen.",
      "Jobbra kanyarodás előtt az úttest jobb szélére, balra kanyarodás előtt pedig az úttest felezővonala mellé (vagy az egyirányú utca bal szélére).",
      "Minden kanyarodás előtt a menetirány szerinti legbelső (bal oldali) sávba kell besorolni, függetlenül attól, hogy merre akarunk menni.",
      "A kanyarodás irányától függetlenül az út legszélesebb pontjánál, a kanyar külső ívére kell helyezkedni a stabilitás érdekében."
    ],
    correctAnswer: 1,
    explanation: "A KRESZ alapján irányváltoztatás (kanyarodás) előtt időben be kell sorolni az úttest megfelelő oldalára. Jobbra kanyarodáshoz jobbra, balra kanyarodáshoz pedig a felezővonalhoz, vagy egyirányú utcában a bal szélre."
  },
  {
    id: "hal_11",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tenned, ha az úton 'Útszűkület' táblát látsz?",
    answers: [
      "Fokozott tempóban kell áthaladni a szűk részen, hogy minél hamarabb elhagyjuk a szakaszt, mielőtt a szembeforgalom megérkezik.",
      "Minden esetben azonnal meg kell állni, és megvárni, amíg az útszűkületet okozó akadályt elhárítják a hatóságok.",
      "Csökkenteni kell a sebességet, és elsőbbséget kell adni a szemből érkezőnek, ha az akadály vagy a szűkület a mi sávunkban van.",
      "Nincs különösebb teendő, az 'Útszűkület' tábla csak tájékoztató jellegű, és nem befolyásolja az elsőbbségi viszonyokat."
    ],
    correctAnswer: 2,
    explanation: "Az útszűkületnél (ha nincs külön elsőbbséget szabályozó tábla) annak van elsőbbsége, akinek a sávja zavartalanul halad tovább. Akinek az oldalán az akadály/szűkület van, annak le kell lassítania és elsőbbséget kell adnia."
  },
  {
    id: "hal_12",
    category: "haladas",
    difficulty: "medium",
    question: "Melyik állítás igaz a kerékpáros kereszteződésben történő előzésére?",
    answers: [
      "Kereszteződésben az előzés főszabály szerint tilos, kivéve például ha a forgalmat rendőr vagy fényjelző készülék irányítja.",
      "A kerékpáros bármilyen típusú kereszteződésben akadálytalanul megelőzheti a gépjárműveket, mivel keskeny helyen is elfér.",
      "Kizárólag akkor szabad előzni a kereszteződésben, ha a kerékpáros a manővert a gyalogátkelőhelyen hajtja végre.",
      "Csak a több sávos utakon található körforgalmakban tiltott az előzés, minden más kereszteződésben szabadon megengedett."
    ],
    correctAnswer: 0,
    explanation: "A KRESZ az útkereszteződésekben általános előzési tilalmat ír elő, de ez alól vannak kivételek: pl. lámpás vagy rendőr által irányított kereszteződésben szabad előzni, vagy a kétkerekű motorkerékpárt, kerékpárt."
  },
  {
    id: "hal_13",
    category: "haladas",
    difficulty: "easy",
    question: "Mi a teendőnk, ha az úton gödröt vagy olajfoltot veszünk észre?",
    answers: [
      "A kormány hirtelen rántásával megpróbáljuk elkerülni az akadályt, függetlenül attól, hogy van-e mellettünk másik jármű.",
      "Gázt adunk és sebességet növelünk, mivel a nagyobb lendülettel a kerekek könnyebben áthaladnak az úthibán.",
      "Azonnal satuféket alkalmazunk, hogy a jármű még az úthiba előtt teljesen megálljon, majd a helyszínen megvárjuk a közútkezelőt.",
      "Hátrapillantással ellenőrizzük a forgalmat, szükség esetén irányt jelzünk, és megfelelő lassítás után óvatosan kikerüljük az akadályt."
    ],
    correctAnswer: 3,
    explanation: "Az úthibákat óvatos manőverezéssel, a visszapillantó tükrök és a holttér ellenőrzése (hátrapillantás) után szabad kikerülni. A hirtelen rántott kormány komoly ütközést okozhat a mellettünk vagy mögöttünk jövőkkel."
  },
  {
    id: "hal_14",
    category: "haladas",
    difficulty: "hard",
    question: "Mi lehet biztonságos megoldás kerékpárral balra kanyarodáskor forgalmas, többsávos úton?",
    answers: [
      "Nagy lendülettel, a sávokat határozottan átlósan keresztezve kell balra hajtani, hogy az autósok észrevegyék a szándékunkat.",
      "A közvetett kanyarodás, amikor a kereszteződésen egyenesen áthaladva megállunk a túloldalon, majd onnan merőlegesen keresztezzük az utat.",
      "A járdára felhajtva, a gyalogosok között szlalomozva keresztezni az úttestet, majd a zebrán áttekerve haladni tovább.",
      "Kerékpárral szigorúan tilos többsávos úton balra kanyarodni, ezért minden esetben egy sarokkal tovább kell menni és ott visszafordulni."
    ],
    correctAnswer: 1,
    explanation: "Forgalmas vagy többsávos úton sokszor biztonságosabb a 'közvetett kanyarodás': egyenesen átmegyünk a kereszteződésen a jobb szélen, majd ott megállva beállunk a keresztirányú forgalom elé, és azzal haladunk tovább az új irányba."
  },
  {
    id: "hal_15",
    category: "haladas",
    difficulty: "easy",
    question: "Mit kell tenned, ha az úton sűrű köd van és alig látsz?",
    answers: [
      "Kapcsold be a távolsági fényszórót (reflektort), hogy a ködön áthatolva minél messzebbre elláss az úton előtted.",
      "Azonnal állj meg a sávod közepén, és várd meg, amíg a köd felszáll és a látási viszonyok ismét biztonságosak lesznek.",
      "Csökkentsd a sebességet a látótávolságnak megfelelően, növeld meg a követési távolságot, és használd a tompított fényszórót vagy a ködlámpát.",
      "Kapcsold ki az összes külső világítást a járművön, mert a fényszórók visszaverődő fénye sűrű ködben elvakíthatja a sofőrt."
    ],
    correctAnswer: 2,
    explanation: "Ködben a reflektor használata rontja a látási viszonyokat (fehér falat képez). Lassítani kell, bekapcsolni a tompított fényszórót és szükség esetén a ködlámpákat, valamint jelentősen növelni kell a követési távolságot."
  },
  {
    id: "hal_16",
    category: "haladas",
    difficulty: "medium",
    question: "Mit jelez a fehér színű, folyamatos záróvonal az úttest szélén (útpadka mellett)?",
    answers: [
      "Az úttest szélét jelzi (szegélyvonal), amelyet a járművek megállás, várakozás vagy lehúzódás céljából szabályosan átléphetnek.",
      "Azt jelzi, hogy az adott útszakaszon minden jármű számára szigorúan tilos a megállás és a várakozás.",
      "A tömegközlekedési sávot választja el a normál forgalmi sávoktól, így azon az autósok nem haladhatnak.",
      "Azt jelöli, hogy az útpadka puha vagy veszélyes, ezért arra gépjárművel semmilyen esetben nem szabad ráhajtani."
    ],
    correctAnswer: 0,
    explanation: "Az úttest szélét jelző, menetirány szerinti jobb oldalon lévő vonalat szegélyvonalnak nevezzük. Ezt megállás, várakozás, vagy a lassú járművekkel történő lehúzódás céljából át szabad lépni (szemben az elválasztó záróvonallal)."
  },
  {
    id: "hal_17",
    category: "haladas",
    difficulty: "easy",
    question: "Mit jelent a villogó irányjelző (index) használata kanyarodás előtt?",
    answers: [
      "Arra szolgál, hogy sötétben jobban megvilágítsa a kanyar ívét, így könnyebbé téve a sofőr számára a tájékozódást.",
      "Jelzi a többi közlekedőnek, hogy a jármű műszaki hibás, ezért csökkentett sebességgel fog haladni a továbbiakban.",
      "A mögöttünk és szemből érkező közlekedők számára ad egyértelmű tájékoztatást a jármű tervezett irányváltoztatásáról.",
      "Kizárólag a városi forgalomban kötelező a használata, autópályán a sávváltások során az indexelés elhagyható."
    ],
    correctAnswer: 2,
    explanation: "Az irányjelző kötelező eszköz, amellyel időben, a manőver megkezdése előtt tájékoztatjuk a többi résztvevőt a kanyarodási vagy sávváltási szándékunkról, megelőzve ezzel a baleseteket."
  },
  {
    id: "hal_18",
    category: "haladas",
    difficulty: "medium",
    question: "Mi az a 'kapubejáró' a KRESZ haladási szabályai szerint?",
    answers: [
      "A kapubejáró mindig egyenrangú útkereszteződésnek minősül, így a jobbkéz-szabály érvényes az onnan kihajtó járművekre.",
      "Olyan magánterület vagy ingatlan kijárata, ahonnan az úttestre hajtó járműnek mindig elsőbbséget kell adnia a közúton haladóknak.",
      "Olyan kijelölt várakozóhely, amelyet a környék lakói ingyenesen használhatnak parkolás céljából a nap 24 órájában.",
      "A kapubejáróból kiforduló járműnek mindig elsőbbsége van az úttesten közlekedő gyalogosokkal és kerékpárosokkal szemben."
    ],
    correctAnswer: 1,
    explanation: "A kapubejáró, az út menti ingatlan kijárata vagy a földút nem minősül útkereszteződésnek az elsőbbségi szabályok szempontjából. Az onnan közútra hajtóknak mindig elsőbbséget kell adniuk az úton haladóknak."
  },
  {
    id: "hal_19",
    category: "haladas",
    difficulty: "hard",
    question: "Ha kerékpárosként lakott területen kívül haladsz egy keskeny úton, és egy nagy teherautó akar megelőzni, mit érdemes tenned a biztonságodért?",
    answers: [
      "Húzódj a sávod bal szélére, ezzel kényszerítve a teherautó vezetőjét, hogy csak a szembejövő sáv átlépésével tudjon megelőzni.",
      "Állj fel a pedálra és próbálj meg minél jobban felgyorsítani, hogy a teherautónak egyáltalán ne kelljen megelőznie téged.",
      "Lassíts le és húzódj minél közelebb az úttest jobb széléhez vagy az útpadkához, hogy biztonságosan és minél távolabb tudjon elhaladni.",
      "Hirtelen kormánymozdulatokkal jelezd, hogy az út keskeny, és akadályozd meg az előzést, amíg szélesebb útszakaszhoz nem értek."
    ],
    correctAnswer: 2,
    explanation: "Bár a kerékpáros is jogosan használja a sávot, a nagy teherautók menetszele és mérete komoly veszélyt jelent. Egy keskeny úton a saját testi épséged érdekében mindig érdemes a jobb szélre húzódni, sőt, akár lehajtani az útpadkára, hogy a jármű biztonságos oldaltávolsággal előzhessen."
  },
  {
    id: "hal_20",
    category: "haladas",
    difficulty: "easy",
    question: "Miért nem szabad hirtelen, indokolatlanul fékezni az úton?",
    answers: [
      "Mert az indokolatlan satufékezés megnöveli a jármű fogyasztását és túlzottan koptatja a gumiabroncsokat, ami gazdaságtalan.",
      "A fékezés bármikor megengedett, mivel a követési távolság betartásával a mögöttünk jövőnek minden esetben meg kell tudnia állni.",
      "Mert az ABS fékrendszer a hirtelen pedálnyomásra kikapcsol, ezáltal a kerekek blokkolnak és a jármű irányíthatatlanná válik.",
      "Mert a hirtelen vészfékezéssel ráfutásos balesetet idézhetünk elő, mivel a mögöttünk haladónak nem biztos, hogy marad ideje reagálni."
    ],
    correctAnswer: 3,
    explanation: "Az indokolatlan, hirtelen fékezés szigorúan tilos a KRESZ szerint, mert a mögöttünk haladó sofőr reakcióideje miatt könnyen belénk hajthat, ami láncreakciós ráfutásos baleseteket eredményezhet."
  },

  // --- KRESZ TÁBLÁK (20 questions) ---
  {
    id: "tab_1",
    category: "tablak",
    difficulty: "easy",
    question: "Milyen alakú és színű az 'Állj! Elsőbbségadás kötelező' (STOP) tábla?",
    answers: [
      "Kerek, piros szegéllyel rendelkező tábla, amelynek a közepén a STOP felirat látható, fekete betűkkel.",
      "Piros alapszínű, nyolcszögletű tábla, fehér kerettel és középen fehér STOP felirattal, ami a formája miatt hátulról is felismerhető.",
      "Csúcsára állított, fehér alapszínű háromszög alakú tábla, vastag piros szegéllyel és középen egy felkiáltójellel.",
      "Kék alapú négyzet alakú tábla, amelyen fehér betűkkel szerepel a STOP felirat a kereszteződés közeledtét jelezve."
    ],
    correctAnswer: 1,
    explanation: "A STOP tábla az egyetlen nyolcszögletű tábla a KRESZ-ben. A jellegzetes forma biztosítja, hogy a szembejövők hátulról, vagy a hóval borított tábla esetén is azonnal tudják, hogy az adott iránynak megállási kötelezettsége van."
  },
  {
    id: "tab_2",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a piros körben kék alapon piros X-szel áthúzott tábla?",
    answers: [
      "Azt jelzi, hogy az adott útszakaszon mindkét irányból behajtani tilos minden jármű számára.",
      "A Várakozni tilos tábla, amely megengedi a rövid ideig tartó megállást, de a hosszabb parkolást tiltja.",
      "A Megállni tilos jelzőtábla, amely azt jelenti, hogy az adott oldalon a járművel megállni és várakozni is szigorúan tilos.",
      "Az útszűkület végét jelzi, innentől kezdve újra az eredeti forgalmi sávok állnak rendelkezésre a haladáshoz."
    ],
    correctAnswer: 2,
    explanation: "A piros körben lévő kék alapon elhelyezett piros X jelzi a 'Megállni tilos' táblát. Ennél a táblánál még az utas ki- és beszállásának vagy az árukodásnak az idejére sem szabad a járművel megállni."
  },
  {
    id: "tab_3",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a piros körben kék alapon egyetlen átlós piros vonallal ellátott tábla?",
    answers: [
      "Azt jelzi, hogy az adott útszakaszon a sebességhatár feloldásra került, és az általános korlátozások lépnek érvénybe.",
      "A Megállni tilos tábla, vagyis sem az utasok ki- és beszállása, sem az árukodás idejére nem szabad megállni.",
      "A Kötelező haladási irány tábla megváltozott formája, ami arra utal, hogy csak egyenesen szabad továbbhaladni.",
      "A Várakozni tilos tábla, ami azt jelenti, hogy megállni rövid időre (pl. utas kiszállásához) szabad, de parkolni tilos."
    ],
    correctAnswer: 3,
    explanation: "A kék alapon egyetlen átlós piros vonallal rendelkező kerek tábla a 'Várakozni tilos'. Megállni szabad (pl. ki-beszállás idejére), de az autó leállítása és ott hagyása (várakozás/parkolás) tilos."
  },
  {
    id: "tab_4",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent az a kerek, piros keretű tábla, aminek a közepe teljesen fehér?",
    answers: [
      "Azt jelzi, hogy az adott útszakaszra minden járművel mindkét irányból tilos behajtani.",
      "A lakó-pihenő övezet kezdetét jelöli, ahol fokozott óvatossággal és maximum 20 km/h-val szabad közlekedni.",
      "Arra figyelmeztet, hogy az útszakaszon nincsenek felfestve az útburkolati jelek, így a sávtartás nehezebb lehet.",
      "Csak a nehéz tehergépjárművek számára tiltja a behajtást, a személyautók és a motorkerékpárok szabadon közlekedhetnek."
    ],
    correctAnswer: 0,
    explanation: "A fehér közepű, piros keretes kerek tábla a 'Mindkét irányból behajtani tilos'. Általában parkoknál, sétálóutcáknál, vagy forgalom elől elzárt területeknél alkalmazzák."
  },
  {
    id: "tab_5",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent az a kerek piros tábla, aminek a közepén egy vízszintes fehér csík van?",
    answers: [
      "A Behajtani tilos tábla, amely azt jelzi, hogy abból az irányból tilos behajtani az utcába (egyirányú utca végén).",
      "Egyirányú forgalmú út kezdetét jelzi, amelybe bármilyen járművel biztonságosan és szabályosan be lehet hajtani.",
      "A vámvizsgálat vagy fizetőkapu közeledtét jelöli, ahol a továbbhaladás előtt kötelező a megállás.",
      "A magánterület határát jelzi, amelyre csak az ott lakóknak és a külön engedéllyel rendelkezőknek szabad behajtaniuk."
    ],
    correctAnswer: 0,
    explanation: "Ez a klasszikus 'Behajtani tilos' tábla, amelyet a hétköznapokban gyakran 'hóhér' vagy 'tégla' táblának is hívnak. Általában az egyirányú utcák forgalommal szembeni végénél találkozhatunk vele."
  },
  {
    id: "tab_6",
    category: "tablak",
    difficulty: "easy",
    question: "Mit ábrázol a 'Gyalogosok' veszélyt jelző tábla?",
    answers: [
      "Egy kerek kék alapon elhelyezett sétáló felnőtt és gyermek piktogramját, ami a kijelölt gyalogutat jelzi.",
      "Fehér alapon, vastag piros keretű háromszögben egy fekete, sétáló gyalogos alakot, figyelmeztetve az úttesten lévő gyalogosokra.",
      "Két egymás kezét fogó, futó gyermek fekete sziluettjét, ami fokozott óvatosságra inti a járművezetőket.",
      "Egy fekete-fehér csíkos zebra átkelőhelyet, amely felhívja a figyelmet a biztonságos áthaladás kötelezettségére."
    ],
    correctAnswer: 1,
    explanation: "A piros keretű háromszög veszélyre hívja fel a figyelmet. A sétáló fekete gyalogos alak arra figyelmeztet, hogy azon az útszakaszon az úttesten haladó vagy áthaladó gyalogosok megjelenésére fokozottan számítani kell."
  },
  {
    id: "tab_7",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a kerek, kék alapon fehér kerékpárt ábrázoló tábla?",
    answers: [
      "Azt jelzi, hogy az adott útszakaszon a kerékpáros forgalom tilos, és a kerékpárosoknak alternatív útvonalat kell keresniük.",
      "Kerékpáros pihenőhely és szervizállomás található a közelben, ahol az utazók megjavíthatják járműveiket.",
      "A kijelölt kerékpárutat jelöli, amelyet a kerékpárosok kötelesek használni, és ahol gépjárművel alapszabályként tilos közlekedni.",
      "Figyelmeztet a kerékpárosok gyakori felbukkanására a közúton, arra ösztönözve a sofőröket, hogy lassítsanak."
    ],
    correctAnswer: 2,
    explanation: "A kerek kék tábla utasítást, kötelezettséget fejez ki. A fehér bicikli piktogram a kijelölt kerékpárutat jelöli, amelynek használata a kerékpárosok számára kötelező."
  },
  {
    id: "tab_8",
    category: "tablak",
    difficulty: "medium",
    question: "Mit ábrázol és mit jelent az 'Iskola, gyermekek' veszélyt jelző tábla?",
    answers: [
      "Egy kék négyzetben elhelyezett hintázó gyermeket ábrázol, ami a lakó-pihenő övezetet és a megengedett játékot jelenti.",
      "Fehér alapon, piros háromszögben két futó, fekete gyermekalakot ábrázol, ami fokozott figyelmet és sebességcsökkentést követel meg.",
      "Sárga alapú háromszögben egy kinyitott könyvet ábrázol, amely az iskolák környékén lévő 30 km/h-s zónákat jelöli.",
      "Kerek, fehér alapon piros keretben egy gyermeket ábrázol, ami azt jelenti, hogy 14 éven aluliak nem közlekedhetnek egyedül."
    ],
    correctAnswer: 1,
    explanation: "A piros keretű háromszögben lévő két futó gyerek (általában egy nagyobb, aki egy kisebb kezét fogja) figyelmeztet az iskola, óvoda, vagy játszótér közelségére, ahol bármikor az útra szaladhat egy gyermek."
  },
  {
    id: "tab_9",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a kék, kerek tábla, amelyen gyalogos és kerékpár piktogramja látható, köztük elválasztó vonallal?",
    answers: [
      "Olyan közös felületű gyalog- és kerékpárutat, ahol a vonal hiánya miatt a két forgalom szabadon keveredhet egymással.",
      "Osztott gyalog- és kerékpárutat jelöl, ahol a vonal elkülöníti a gyalogosok és a kerékpárosok által kötelezően használandó sávokat.",
      "Azt jelzi, hogy az út csak bizonyos napszakokban használható gyalogosan, máskor pedig kizárólag kerékpáros forgalomra fenntartott.",
      "Egy forgalomtól elzárt sétálóutcát jelöl, ahol a kerékpárosoknak kötelező leszállniuk, és csak tolva vihetik tovább a járművüket."
    ],
    correctAnswer: 1,
    explanation: "Az elválasztó vonallal rendelkező tábla az 'Elválasztott gyalog- és kerékpárút'. Itt mindkét félnek a rá vonatkozó, felfestéssel kijelölt sávban kell közlekednie, anélkül, hogy egymást zavarnák."
  },
  {
    id: "tab_10",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a kerek, fehér tábla piros kerettel, benne egy fekete kerékpárral?",
    answers: [
      "Kijelölt kerékpárutat jelöl, ahová a zavartalan és biztonságos közlekedés érdekében gépjárművekkel szigorúan tilos a behajtás.",
      "Azt az útszakaszt jelzi, ahová (gyakran nagy gépjárműforgalom vagy a domborzat miatt) kerékpárral tilos behajtani.",
      "Turisztikai szempontból kiemelt, különlegesen szép és ezért kerékpárosok számára kifejezetten ajánlott panoráma útvonal.",
      "Egy olyan speciális sávot jelez a forgalomban, amelyet a buszok és a kerékpárosok egyaránt, közösen használhatnak."
    ],
    correctAnswer: 1,
    explanation: "A piros keretű kerek táblák tilalmat fejeznek ki. A benne lévő kerékpár ábra egyértelműsíti, hogy 'Kerékpárral behajtani tilos' (például autóutakon vagy felüljárókon találkozhatunk vele)."
  },
  {
    id: "tab_11",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent a kék alapon fehér P betűt ábrázoló négyszögletű tábla?",
    answers: [
      "A Rendőrség ('Police') közeli épületét jelöli, ahol szükség esetén a közlekedők feljelentést tehetnek vagy segítséget kérhetnek.",
      "Azt jelzi, hogy az adott terület magánbirtok (Privát), így az áthaladás és a megállás mindenki más számára szigorúan tilos.",
      "Kijelölt várakozóhelyet (parkolót) jelez, ahol a járművek szabályosan, a felfestéseknek vagy kiegészítő tábláknak megfelelően parkolhatnak.",
      "Egy speciális Posta állomást jelez, amely előtt csak az áruszállítás és a hivatalos ügyintézés idejére megengedett a megállás."
    ],
    correctAnswer: 2,
    explanation: "A 'P' betű a Parking szóra utal, a kék négyszögletes tábla pedig tájékoztató jellegű, tehát a szabályos várakozóhely (parkoló) kezdetét és meglétét jelöli."
  },
  {
    id: "tab_12",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a piros keretű háromszögben lévő felkiáltójel tábla?",
    answers: [
      "Azt jelzi, hogy az adott útszakaszon minden esetben kötelező hangjelzést adni, hogy felhívjuk a figyelmet az érkezésünkre.",
      "Azonnali megállási kötelezettséget ír elő egy közeli vámvizsgálat, vagy fokozott rendőri ellenőrzés miatt.",
      "Olyan egyéb, váratlan veszélyre (pl. útbeszakadás, sárfelhordás) figyelmeztet, amelynek jelzésére nincs külön, specifikus KRESZ-tábla.",
      "Az útburkolat végleges elfogyására és földút kezdetére figyelmezteti az autósokat, hogy csökkentsék a sebességüket."
    ],
    correctAnswer: 2,
    explanation: "A felkiáltójel tábla az 'Egyéb veszély'. Amikor egy hirtelen fellépő vagy ritka úthibát/veszélyt nem tudnak egy dedikált táblával jelezni, ezzel a táblával és alatta lévő szöveges kiegészítéssel figyelmeztetnek."
  },
  {
    id: "tab_13",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a fehér alapú, piros keretű háromszög alakú tábla, benne egy fekete villamossal?",
    answers: [
      "Kijelölt villamosmegállót jelez, ahol a le- és felszálló utasok miatt a gépjárműveknek kötelező azonnal megállniuk.",
      "Villamospályával való szintbeli kereszteződésre figyelmeztet, ahol fokozott óvatossággal kell eljárni a villamos elsőbbsége miatt.",
      "Azt a zónát jelöli, ahová a villamosok zajterhelése miatt a személygépkocsik és motorkerékpárok nem hajthatnak be.",
      "Ipari vasúti átjárót jelez, amelynél a vonatok közlekedése csak ritkán, előre meghatározott időpontokban várható."
    ],
    correctAnswer: 1,
    explanation: "A háromszög alakú veszélyjelző táblában lévő villamos arra hívja fel a figyelmet, hogy az utat egy villamospálya keresztezi, és a villamosnak az elsőbbségi szabályok értelmében szinte mindig elsőbbsége van az autókkal szemben."
  },
  {
    id: "tab_14",
    category: "tablak",
    difficulty: "easy",
    question: "Mit jelent az a tábla, ami kék alapon fehér házat, játszó gyereket és autót ábrázol?",
    answers: [
      "Iskolaövezet kezdetét jelzi, ahol a megengedett legnagyobb sebesség reggel 7 és délután 4 óra között egységesen 30 km/h.",
      "Családbarát kempinghelyet és szabadidőparkot jelöl, ahol a parkolás az odalátogatók számára korlátozott ideig ingyenes.",
      "Lakó-pihenő övezet kezdetét jelöli, ahol a gyalogosok (és játszó gyerekek) az utat teljes szélességében használhatják, a max. sebesség 20 km/h.",
      "Kizárólag célforgalom számára fenntartott útszakaszt jelez, amelyre csak az ott lakók hajthatnak be járműveikkel."
    ],
    correctAnswer: 2,
    explanation: "A Lakó-pihenő övezetben a gyalogosok fokozott védelmet élveznek, az úttesten is tartózkodhatnak. A járművek csak az ott lakók vagy célforgalom esetén hajthatnak be, legfeljebb 20 km/h sebességgel."
  },
  {
    id: "tab_15",
    category: "tablak",
    difficulty: "hard",
    question: "Mit jelent a piros keretű, fehér alapú háromszögben lévő fekete gőzmozdony ábra?",
    answers: [
      "Fokozott veszélyre figyelmeztet: sorompó nélküli vasúti átjáró közeledik, ahol különös figyelemmel kell áthaladni az úton.",
      "Teljes vagy félsorompóval biztosított vasúti átjárót jelez, ahol a fénysorompó piros jelzése esetén tilos az áthaladás.",
      "Vasúti múzeumot vagy kiállítást jelöl a közelben, ami turisztikai célpont lehet az arra érdeklődő utazók számára.",
      "Azt jelzi, hogy az út egy ipartelepre vezet, ahol a mozdonyok számára kötelező elsőbbséget kell biztosítani az autósoknak."
    ],
    correctAnswer: 0,
    explanation: "A gőzmozdony piktogramja a 'Sorompó nélküli vasúti átjáró' veszélyt jelző tábla. (A sorompóval biztosított átjárót egy kerítés ábra jelzi)."
  },
  {
    id: "tab_16",
    category: "tablak",
    difficulty: "medium",
    question: "Mit jelent a kerek kék tábla, benne egy fehér, jobbra mutató nyíllal?",
    answers: [
      "Egyirányú utca kezdetét jelöli, ahol a forgalom csak a nyíl által mutatott irányba, azaz jobbra haladhat végig a szakaszon.",
      "Kötelező haladási irányt jelez: a kereszteződésben kizárólag a nyíl által mutatott irányba, azaz jobbra szabad továbbhaladni.",
      "Azt mutatja, hogy az út jobb oldalán fizetős vagy ingyenes parkolóhelyek lettek kialakítva a személygépkocsik számára.",
      "Kikerülési irányt mutat egy akadály (pl. járdasziget vagy útfelbontás) esetén, amit szigorúan a jobb oldalról kell megkerülni."
    ],
    correctAnswer: 1,
    explanation: "A kék kerek táblák utasítást (kötelezettséget) adnak. A fehér nyíl a Kötelező haladási irányt mutatja: a kereszteződésben csak a jelölt irányba (jobbra) szabad haladni, minden más irány (egyenes, balra, megfordulás) tilos."
  },
  {
    id: "tab_17",
    category: "tablak",
    difficulty: "easy",
    question: "Milyen táblát látsz a körforgalom előtt?",
    answers: [
      "Mindig egy kék négyzet alakú táblát látunk, rajta egy fehér 'P' betűvel és egy kör alakú kiegészítő szimbólummal alatta.",
      "Kötelezően egy nyolcszögletű STOP táblát, amely megköveteli, hogy a körforgalomba történő behajtás előtt teljesen álljunk meg.",
      "Egy kerek, kék alapú táblát, amelyen három fehér, körbefutó nyíl jelzi a körforgalomban kötelező haladási irányt.",
      "Egy fehér alapú, piros keretes háromszöget, amelynek a közepén két szembemutató nyíl figyelmeztet a megváltozott elsőbbségre."
    ],
    correctAnswer: 2,
    explanation: "A 'Körforgalom' tábla egy kerek kék tábla, három körkörös fehér nyíllal. Ez utasít arra, hogy a behajtás után az óramutató járásával ellentétes irányban (jobbra) kell megkezdeni a haladást."
  },
  {
    id: "tab_18",
    category: "tablak",
    difficulty: "hard",
    question: "Mit jelent a kék alapon fehér autóbuszt ábrázoló négyszögletű tábla?",
    answers: [
      "Kijelölt autóbusz-sávot jelez az úttesten, amelyet a személygépkocsik csak jobbra kanyarodás céljából használhatnak.",
      "Autóbusz-parkolót jelöl, ahol a turistabuszok és a menetrend szerinti járatok hosszú ideig biztonságosan várakozhatnak.",
      "A helyi menetrend szerinti autóbusz megállóhelyét jelöli, ahol a járművek számára a tábla előtt és után 15 méteren belül megállni tilos.",
      "Egy speciális útszakaszt jelez, ahová kizárólag a 3,5 tonna össztömeget meghaladó autóbuszok és tehergépkocsik hajthatnak be."
    ],
    correctAnswer: 2,
    explanation: "A kék négyszögletes tábla benne a busszal a megállóhelyet jelöli. Itt a menetrend szerinti járatok megállását akadályozni szigorúan tilos, ezért a tábla előtt és után 15 méterrel tilos megállni és várakozni."
  },
  {
    id: "tab_19",
    category: "tablak",
    difficulty: "medium",
    question: "Melyik KRESZ-tábla jelzi Magyarországon egy lakott terület kezdetét?",
    answers: [
      "Egy kék alapszínű négyzetes tábla, amelyen fehér betűkkel szerepel a falu vagy város neve.",
      "Fehér alapszínű, téglalap alakú tábla, amely fekete betűkkel tünteti fel a település nevét.",
      "Egy sárga alapszínű tábla, amin fekete házak sziluettje látható, alatta a megengedett legnagyobb sebességgel.",
      "Egy piros keretű háromszög alakú veszélyjelző tábla, benne a 'Lakott terület' felirattal."
    ],
    correctAnswer: 1,
    explanation: "Magyarországon a lakott terület kezdetét a település nevét fekete betűkkel feltüntető, fehér alapú tábla jelöli. Ettől a ponttól kezdve automatikusan érvénybe lép a lakott területre vonatkozó 50 km/h-s sebességkorlátozás és számos más szabály."
  },
  {
    id: "tab_20",
    category: "tablak",
    difficulty: "easy",
    question: "Mit kell tenned, ha az út szélén 'Gyalogos-átkelőhely' (kék négyzetben fehér háromszög, rajta zebrán sétáló ember) táblát látsz?",
    answers: [
      "A sebességet olyan mértékben kell csökkenteni, hogy az átkelőhelyen lévő, vagy oda lelépő gyalogosoknak elsőbbséget tudjunk adni.",
      "Folyamatos, jól hallható hangjelzéssel kell figyelmeztetni a zebrán áthaladó gyalogosokat, hogy mielőbb hagyják el az úttestet.",
      "A sebességet növelve, minél hamarabb el kell hagyni a kijelölt gyalogátkelőhely területét, nehogy feltartsuk a mögöttünk haladókat.",
      "Kizárólag abban az esetben kell megállni, ha a gyalogos a mi haladási sávunkban tartózkodik, a szembesávban haladókat nem kell megvárni."
    ],
    correctAnswer: 0,
    explanation: "A tábla és az útfestés (zebra) együttese a gyalogos-átkelőhelyet jelöli. Ide járművel csak fokozott óvatossággal és olyan sebességgel szabad megközelíteni, hogy szükség esetén a gyalogosok áthaladása biztonságosan biztosítható legyen."
  }
];
