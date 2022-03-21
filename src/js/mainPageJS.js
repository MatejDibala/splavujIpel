

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n, true);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, wasCalledFromArrow) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  //for (i = 0; i < dots.length; i++) {
    //  dots[i].className = dots[i].className.replace(" active", "");
  //}
  
  if (slideIndex > slides.length) {slideIndex = 1}

  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";

  if (wasCalledFromArrow) {
    return;
  }
  
  setTimeout(showSlides, 8000);
  slideIndex++;
  
}

if (screen.availWidth > 640) {
  var ulDropDownMenu = document.getElementById("ul-dropdown-menu");
  ulDropDownMenu.classList.toggle("toggle-dropdown-menu");
}

function showUlDropdown() {
  if (screen.availWidth > 640) { 
    return;
  }
  var ulDropDownMenu = document.getElementById("ul-dropdown-menu");
  ulDropDownMenu.classList.toggle("toggle-dropdown-menu");
  console.log("the method is called\n");
}

/******** Language settings
 * Available languages:
 * sk == Slovak
 * hu == Hungarian
 * en == English
 * de == German
 */


languages = {
  sk: {
    ako_to_funguje: 'Ako to funguje',
    dostupnost: 'Dostupnosť',
    cennik: 'Cenník',
    rezervacia: 'Rezervácia',
    information_button: 'Info',
    kontakty: 'Kontakty',
    slideshow_big_text_1: 'Ipeľ pre rodičov s deťmi',
    slideshow_small_text_1: 'Poďte s nami!',
    slideshow_big_text_2: 'Už ste boli na Ipli?',
    slideshow_small_text_2: 'Požičajte si lode a vyrazte!',
    slideshow_big_text_3: 'Požičovňa je v provoze',
    slideshow_small_text_3: 'Najvyšší čas vyraziť na vodu!',
    welcome_sign: 'Sezóna splavu je v plnom prúde!',
    ako_to_funguje_nadpis: 'Ako to funguje:',
    krok_0: 'Vyberte si zážitok: 1) splav Ipľa (trvanie cca 3 hodiny), 2) kanoe pre začiatočníkov - kľudná voda na Kalonde 3) splav na rafte',
    krok_1: 'Vyberte si, či by ste chceli ísť na dvojmiestnom kanoe vydra alebo trojmiestnom kanoe lochness (odporúčanie je 2 dospelí + dieťa)',
    krok_2: 'Zistite, kto s vami pôjde (počet ľudí).',
    krok_3: 'Rozhodnite sa pre dátum a skontrolujte ',
    dostupnost_2: 'dostupnosť.',
    krok_4: 'Odošlite ',
    rezervacny_formular: 'rezervačný formulár.',
    podme_na_to: 'Poďme na to!',
    zakladny_cennik: 'Základný cenník:',
    cennik_nadpis: 'Cenník požičovne',
    cennik_trvanie: 'Kanoe: Obvyklá dĺžka splavu Holiša - Kalonda na kanoe: 3 hodiny',
    cennik_trvanie2: 'Raft: Obvyklá dĺžka splavu Rapovce - Kalonda na rafte: 1,5 hodiny',
    splav_vikend: 'Dospelá osoba: 15€',
    splav_deti: 'Deti do 15 rokov: 10€',
    splav_kanoe: 'Kanoe na Kalonde: Prenájom kanoe na vodnom diele Kalonda pre začiatočníkov: 10€/osoba',
    cennik_paddleboard: 'Paddleboard: Prenájom paddleboardu na VD Kalonda: 10€/osoba',
    splav_tyzden: 'Raft (Gumotex Colorado 450) 6 miestny Rapovce - Kalonda (4 km): 50€',
    //uplny_cennik_download: 'Úplný cenník na stiahnutie.',
    cennik_nakladov: 'Cenník nákladov na obstaranie.',
    poznamka_k_cenniku: 'Poznámky:',
    poznamka_k_cenniku_1: 'Ceny sú uvedené v hodinovej sadzbe, ak nie je uvedené inak.',
    poznamka_k_cenniku_2: 'V cene prenájmu je zahrnutá inštruktáž a kompletné vybavenie: certifikované prilby, vesty, pádla, vodotesné vaky, barely.',
    poznamka_k_cenniku_3: 'Kanoe na Kalonde je varianta vhodná pre začiatočníkov, ktorí ešte nenabrali dostatočnú odvahu na splav Ipľa. Na kľudnom úseku rieky si splav môžete vyskúšať, aby Vás Ipeľ nezaskočil nepripravených.',
    poznamka_k_cenniku_4: 'Kanoe Vydra,ktoré prenajímame, je dvojmiestne kanoe určené na vodnú turistiku.',
    poznamka_k_cenniku_5: 'Kanoe Lochness je trojmiestne kanoe určené na vodnú turistiku.',
    poznamka_k_cenniku_6: 'Splavuj Ipeľ je atrakcia na trase dlhej 10km, z Holiše prechádza cez obce Trebeľovce, Rapovce a končí v Kalonde na vodnom diele, v trvaní zhruba 3 hodiny.',
    poznamka_k_cenniku_7: 'V prípade záujmu je po dohode možné doporučiť aj iné trasy splavu, v celkovej dĺžke 25km.',
    disclaimer: 'V prípade straty, odcudzenia alebo zničenia športových potrieb – kanoe, paddleboardov, pádiel, prilieb, viest, vodných vakov alebo barelov, je klient povinný uhradiť prenajímateľovi obstarávaciu cenu každého jednotlivého kusu príslušenstva.',
    meno_priezvisko: 'Vaše meno a priezvisko',
    pocet_ludi: 'Počet ľudí',
    pocet_kanoe_vydra: 'Počet dvojmiestnych kanoe vydra',
    pocet_kanoe_lochness: 'Počet trojmiestnych kanoe lochness',
    pocet_paddleboardov: 'Počet paddleboardov',
    datum_splavu: 'Dátum splavu',
    januar: 'Január',
    februar: 'Február',
    marec: 'Marec',
    april: 'Apríl',
    maj: 'Máj',
    jun: 'Jún',
    jul: 'Júl',
    august: 'August',
    september: 'September',
    oktober: 'Október',
    november: 'November',
    december: 'December',
    zaciatok_splavu: 'Začiatok splavu',
    email_rezervacia: 'Váš e-mail',
    telefonne_cislo: 'Vaše telefónne číslo',
    expresna_rezervacia: 'Pre expresnú rezerváciu, alebo v prípade otázok, prosím použite',
    informacie_faq: 'Informácie a často kladené otázky',
    priprava_nadpis: 'Príprava',
    priprava_text_1: 'Zbaľte si náhradné oblečenie. Počasie môže rýchlo meniť, preto je dobré mať so sebou aj dostatok náhradného oblečenia.',
    priprava_text_2: 'Zoberte si topánky, s ktorými môžete vstúpiť aj do vody a nezraníte sa (napríklad pevné sandále či uzatvorenú plážovú obuv). Okrem toho majte so sebou aj pevnú obuv, ktorá sa vám zase zíde v teréne.',
    priprava_text_3: 'Pri balení potravín buďte praktickí a ekonomickí. Neberte so sebou ťažké veci, nezabúdajte na pitný režim. Rátajte s minimom 1,5 litra vody na osobu za deň.',
    priprava_text_4: 'V blízkosti vodných tokov sa páči nielen ľuďom, ale aj nepríjemnému bodavému hmyzu, nevynechajte preto repelent.',
    priprava_text_5: 'V lete je namieste myslieť aj na ochranu proti slnku, určite si pribaľte opaľovací krém, šiltovku, klobúk a slnečné okuliare.',
    priprava_text_6: 'Pre cennosti si zaobstarajte vodotesné obaly, ktoré sú súčasťou prenajímaného vybavenia, vďaka čomu predídete možným poškodeniam mobilov, fotoaparátov či iných zariadení. Vodáci často používajú nepremokavé tašky alebo uzatváracie plastové sudy (rôznych veľkostí).',
    bezpecnost_nadpis: 'Bezpečnostný manuál',
    bezpecnost_text_1: 'Na vodu radšej nikdy nechoďte sami, vždy je potrebné splavovať v skupine aspoň 2 lodí. Dôvod je celkom jednoduchý, v prípade potreby si vzájomne pomôžete.',
    bezpecnost_text_2: 'Pre vodáka je najdôležitejšie pádlo, ktorým ovláda loď, a preto ho na vode nepúšťajte z ruky.',
    bezpecnost_text_3: 'Nikdy nepodceňujte bezpečnosť na vode. Aj na stojatej vode majte na sebe plávaciu vestu, ktorá je riadne zapnutá a taktiež pevne upevnenú prilbu.',
    bezpecnost_text_4: 'V lodi je potrebné mať stabilné sedenie, ktoré je nastavené práve pre vás. To platí najmä v kanoe. Je potrebné, aby ste mali dostatočnú stabilitu, ale aj aby ste sa cítili pohodlne. Najstabilnejší posed v kanoe je, ak kľačíte na dne nohami pod lavičkou.',
    bezpecnost_text_5: 'Snažte sa vyhnúť nárazu do kameňov či iných lodí. Pri narazení do kameňa alebo inej prekážky je potrebné, ak sa dá, nakloniť sa smerom na prekážku tak, aby prúd vody narážal do dna lode, v opačnom prípade voda zaleje palubu a prevráti ju.',
    faq: 'Často kladené otázky',
    question_1: 'Sme začiatočníci - nevadí to?',
    answer_1: 'Nie, vôbec nie! Väčšinou sú naši klienti začiatočníci, ktorých si pred vstupom na divokú vodu zaškolíme a vysvetlíme im ako sa treba správať na divokej vode, preto neváhajte a poďte sa s nami vydať na dobrodružstvo a Splavuj Ipeľ :-).',
    question_2: 'Čím je horný tok Ipľa špecifický, čím sa odlišuje od ostatných riek?',
    answer_2: 'Horný tok Ipľa je pomerne pokojný a preto je vhodný pre začiatočníkov. Prostredie na vode je krásne, príroda rozmanitá, okrem toho sa nachádzame v Chránenom vtáčom území, teda je úplne bežné vidieť chránené druhy živočíchov.',
    question_3: 'Splavuj Ipeľ– ako to prebieha?',
    answer_3: 'Začiatok pre Splavuj Ipeľ začína v Holiši, kde sa stretneme v dohodnutom čase. Najprv si zaparkujete auto a dostanete od nás sudy na suché veci. Potom sa prezlečiete a zbalíte na splav podľa našich odporúčaní. Nakoniec vyfasujete plávacie vesty a samozrejme lode. Následne sa presunieme k rieke na dohodnuté miesto. Až tam prebehne rýchlokurz a popis trasy. Nakoniec vás nasadíme do kanoe a pustíme dolu Ipľom.',
    question_4: 'Bude ma niekto počas plavby sprevádzať?',
    answer_4: 'Nie. Každý splavuje Ipeľ sám, bez sprievodcu v lodi. Počas splavu si užívate radostné chvíle na vode, navštevujete rôzne oddychové miesta, o ktorých vás vopred informujeme a ktoré budú zakreslené v mape, ktorú vám poskytneme.',
    question_5: 'Deti v kanoe',
    answer_5: 'Nebojte sa skúsiť splaviť Ipeľ s deťmi. Je to pre deti veľká zábava. Jedinou podmienkou je, aby dieťa obsedelo v lodi. Záchranné vesty a prilby u detí sú povinnosťou. V ponuke máme veľkosti od najmenších viest pre päť ročné deti až po modely pre mládež. Ak so sebou beriete deti, vždy to povedzte, aj s vekom detí, aby sme im vedeli pripraviť vesty. Hlavne deti musia mať v slnečných dňoch klobúk, či šiltovku a mali by byť poriadne natreté krémom.',
    question_6: 'Najčastejšie problémy na vode',
    answer_6: 'Je potrebné mať dostatok vody na pitie, nezabudnúť na klobúk, alebo šiltovku, natierať sa krémom na opaľovanie. Každému odporúčame vziať si do lode vrece na odpadky – tie nepatria do Ipľa, ani do prírody,  ale do koša.  Vždy si u nás v Splavuj Ipeľ vravíme, že ak si dokážeme doniesť 10 plných plechoviek, tak odniesť 10 prázdnych nemôže byť problém :-).',
    question_7: 'Je potrebné si urobiť rezerváciu vopred?',
    answer_7: 'Áno. Môže sa totižto stať, že kým ku nám dorazíte, my už pre vás nebudeme mať voľné vybavenie. Preto odporúčame aspoň deň alebo viac dní dopredu telefonicky alebo emailom kontaktovať našich správcov s tým, kedy by ste chceli prísť splaviť Ipeľ, koľko z vás bude dospelých a koľko detí a pod.',
    question_8: 'Kde presne nás nájdete?',
    answer_8: 'Adresa začiatku splavu: Holiša. Adresa konca splavu: Kalonda pri vodnom diele. V Holiši nás nájdete v strede obce pri vodnom diele, bývalej prečerpávacej stanici, ktorú istotne neprehliadnete. Určite nás neváhajte vopred kontaktovať na telefónnych číslach +421948429625 +421907667287 +421949811809 a my vám pomôžeme sa bezstarostne dostať k nám. V obciach máme aj farebné značenie, takže nás určite neprehliadnete. V spodnej časti stránky nájdete taktiež našu polohu na Google Maps.',
    question_9: 'Kde môžem zaparkovať?',
    answer_9: 'Svoje auto si môžete odparkovať priamo u nás v Holiši. Poskytujeme vám parkovanie zdarma. Každopádne po telefonickom dohovore ohľadom dĺžky splavu vás informujeme, kde auto zaparkovať.',
    question_10: 'Koľko trvá splav Ipľa?',
    answer_10: 'Trvanie splavu závisí od výšky vodnej hladiny v daný deň a taktiež aj od aktivity účastníkov na kanoe. Avšak máme odskúšané, že priemerné trvanie splavu z Holiše do Kalondy pri normálnych podmienkach je zhruba dve a pol hodiny. (Hlavná trasa splavovania je dlhá 11km a začína v obci Holiša s koncom v obci Kalonda.) Na vyžiadanie je možné zákazníkom ponúknuť až 25km dlhý úsek. Pripomíname, že vždy je lepšie splavovať Ipeľ cez týždeň. Všade je menej ľudí, personál je menej nervózny, priemerné promile nižšie a koniec koncov je to aj lacnejšie.',
    question_11: 'Ako mám prísť vybavený?',
    answer_11: 'Nájdete v Splavuj Ipeľ-príprava.',
    question_12: 'Splavuj Ipeľ so psom',
    answer_12: 'Každé domáce zviera má u nás na splave dvere otvorené.',
    question_13: 'Čo je v cene?',
    answer_13: 'Kanoe, pádla, vesty, prilby, vodotesné vaky, barely, parkovanie, inštruktáž.',
    question_14: 'Ako sa dostanem po splave naspäť k autu?',
    answer_14: 'Zatiaľ, kým vám vysvetlíme všetky náležitosti ohľadom požičania vybavenia a splavovania, šoféri odvezú autá do obce Kalonda na parkovisko pri konci splavu, vzdialené autom zhruba 15min, pričom naspäť ich odvezieme už my, aby vás vaše auto čakalo pohodlne na konci splavu.',
    question_15: 'Je Ipeľ náročný na splavovanie?',
    answer_15: 'Nie, rieka nie je náročná ani nebezpečná. Z bezpečnostných dôvodov majú všetci účastníci splavu oblečené vesty a na hlave majú prilby. Pred splavom vám náš skúsený inštruktor všetko vysvetlí. Fungujeme ako požičovňa športového náradia, čo značí, že na vode budete sami. Nie je sa ale čoho obávať, Ipeľ zvládli splaviť už aj dôchodcovia s vnúčatami.',
    question_16: 'Nenašli ste odpoveď na svoju otázku?',
    answer_16: 'Kontaktujte nás.',
    
    kontakty_2: 'Kontakty.',
    pozicovna_sportoveho_naradia: 'Požičovňa športového náradia',
    uspesna_rezervacia: 'Ďakujeme za rezerváciu!',
    first_reason: 'Meno a priezvisko má menej ako 7 alebo viac ako 70 znakov.',
    second_reason: 'Je potrebné rezervovať si aspoň jedno kanoe alebo paddleboard.',
    third_reason: 'Nesprávny formát e-mailovej adresy.',
    fourth_reason: 'Vložte platné telefónne číslo (mobilné)'
  },
  hu: {
    cennik: 'Buy Now'
  },
  en: {
    ako_to_funguje: 'How it works',
    dostupnost: 'Availability',
    cennik: 'Price list',
    rezervacia: 'Reservation',
    information_button: 'Info',
    kontakty: 'Contacts',
    slideshow_big_text_1: 'Ipeľ for parents with children',
    slideshow_small_text_1: 'Come with us!',
    slideshow_big_text_2: 'Have you paddled Ipeľ?',
    slideshow_small_text_2: 'Rent kanoes and float out!',
    slideshow_big_text_3: 'Boat rental is in operation',
    slideshow_small_text_3: 'High time to float out!',
    welcome_sign: 'Paddling season is underway!',
    ako_to_funguje_nadpis: 'How it works:',
    krok_0: 'Choose your experience: 1) paddle Ipeľ (duration cca 3 hours), 2) kanoe for beginners - still water on Kalonda 3) raft experience',
    krok_1: 'Choose whether you want to borrow a 2 person kanoe "otter" or a 3 person kanoe "lochness" (recommendation: 2 adults and 1 child)',
    krok_2: 'Find out who is coming with you (number of people).',
    krok_3: 'Choose the date and check the ',
    dostupnost_2: 'availability.',
    krok_4: 'Send the ',
    rezervacny_formular: 'reservation form.',
    podme_na_to: 'Let\'s go!',
    zakladny_cennik: 'Basic price list:',
    cennik_nadpis: 'Rental price list',
    cennik_trvanie: 'Canoe: Usual duration of paddling from Holiša to Kalonda on canoe: 3 hours',
    cennik_trvanie2: 'Raft: Usual duration of paddling from Rapovce to Kalonda on a raft: 1.5 hours',
    splav_vikend: 'Adult: 15€',
    splav_deti: 'Children up to 15 years: 10€',
    splav_kanoe: 'Kalonda Canoe: Canoe rental on hydraulic structure Kalonda for beginners: 10€/person',
    cennik_paddleboard: 'Paddleboard: Paddleboard on hydraulic structure Kalonda: 10€/hour',
    splav_tyzden: 'Raft (Gumotex Colorado 450) for 6 people, Rapovce - Kalonda (4 km): 50€',
    //uplny_cennik_download: 'Úplný cenník na stiahnutie.',
    cennik_nakladov: 'Cost list of equipment.',
    poznamka_k_cenniku: 'Notes:',
    poznamka_k_cenniku_1: 'Prices are hourly rates, if not specified otherwise.',
    poznamka_k_cenniku_2: 'Complete gear: certified helmet, life jacket, waterproof bag, barrel is included in rental price as well as instructions and training.',
    poznamka_k_cenniku_3: 'Kalonda Canoe is an option for beginners who do not have courage to paddle down Ipeľ yet. You can try paddling in a calm part of the river, so that you are not caught off guard by Ipeľ.',
    poznamka_k_cenniku_4: 'Vydra Canoe is suitable for 2 people for water tourism.',
    poznamka_k_cenniku_5: 'Lochness Canoe is suitable for 3 people for water tourism.',
    poznamka_k_cenniku_6: 'Paddle on Ipeľ is an attraction on 10 km long route, from Holiša through Trebeľovce, Rapovce and ends in Kalonda on hydraulic structure and takes approximatelly 3 hours.',
    poznamka_k_cenniku_7: 'If you are interested, it is possible to recommend alternative routes in total length of 25 km.',
    disclaimer: 'In case of losing, stealing or destroying sport equipment – kanoe, paddleboards, paddles, helmets, life vests, water bags or barrells, the client has to pay the rental company the acquisition price of each piece.',
    meno_priezvisko: 'Your first name and last name',
    pocet_ludi: 'Number of people',
    pocet_kanoe_vydra: 'Number of 2 person kanoes "Otter"',
    pocet_kanoe_lochness: 'Number of 3 person kanoes "Lochness"',
    pocet_paddleboardov: 'Number of paddleboards',
    datum_splavu: 'Date of paddling',
    januar: 'January',
    februar: 'February',
    marec: 'March',
    april: 'April',
    maj: 'May',
    jun: 'June',
    jul: 'July',
    august: 'August',
    september: 'September',
    oktober: 'October',
    november: 'November',
    december: 'December',
    zaciatok_splavu: 'Beginning of paddling',
    email_rezervacia: 'Your e-mail',
    telefonne_cislo: 'Your phone number',
    expresna_rezervacia: 'For express reservation or if you have any questions, please use ',
    informacie_faq: 'Information and FAQ',
    priprava_nadpis: 'Preparation',
    priprava_text_1: 'Pack spare clothes. The weather can change fast, so it is a good idea to have spare clothes to change.',
    priprava_text_2: 'Bring shoes that you can wear in water without injury (firm sandals or closed beach footwear). Bring sturdy shoes as well, it will come in handy in terrain..',
    priprava_text_3: 'When packing groceries, be practical and economical. Don’t bring heavy things and don’t forget about staying hydrated. Count with a minimum of 1.5 litres of water per person a day.',
    priprava_text_4: 'Not just humans, but biting insects like water areas as well, so bring repellent also.',
    priprava_text_5: 'In summer, it is also advisable to protect oneself from the sun, so be sure to pack sunscreen, a hat and sunglasses.',
    priprava_text_6: 'To protect valuables, ask for waterproof containers which are part of rented gear, which will allow you to prevent damaging your phones, cameras or other equipment. Paddlers often use waterproof bags or sealable plastic barrels of different sizes.',
    bezpecnost_nadpis: 'Safety manual',
    bezpecnost_text_1: 'It’s better not to go alone, it’s always necessery to paddle in a group of at least 2 boats. The reason is simple, in time of need you can help each other.',
    bezpecnost_text_2: 'The most important thing for a paddler is a paddle, with which you control the boat and therefore don’t let go of it while in water.',
    bezpecnost_text_3: 'Never understimate the safety while on the river. Even in still waters, wear a life jacket, which is properly fastened and a firmly attached helmet.',
    bezpecnost_text_4: 'It is necessary to sit stably in the boat, in the way that fits you, especially in a canoe. It is necessary to have enough stability, but to be comfortable as well. The most stable sitting position in a canoe is when you kneel on the bottom with your legs under the seat.',
    bezpecnost_text_5: 'Try to avoid hitting rocks and other boats. When hitting a rock or other obstacle, i tis necessary, if possible, to lean in the direction of obstacle, so that the water flow hits the bottom of the boat. Otherwise the water pours in and reverses the boat.',
    faq: 'Frequently asked questions',
    question_1: 'We are beginners, is it an issue?',
    answer_1: 'No, absolutely not! Majority of our clients are beginners, whom we instruct before letting them down the river and we explain them how to act on a wild river, so don’t hesitate and come and join us on a journey and paddle Ipeľ :-).',
    question_2: 'Why is upstream of Ipeľ specific, how is it different from other rivers?',
    answer_2: 'The upstream of Ipeľ is relatively calm, therefore suitable for beginners. The environment on the river is beautiful, the nature is diverse, and we find ourselves in a protected area for birds, so it is very common to see protected species of animals.',
    question_3: 'Paddle Ipeľ – how do you do it?',
    answer_3: 'The beginning for paddling Ipeľ is in Holiša, where we meet at set time. First, you park your car and receive barrels from us to keep your things dry. for dry. Afterwards, you change and pack for paddling according to our recommendations. Finally, you receive life jackets and boats, of course. Then we all move to the river to an arranged place. There, you will get instructed and description of route. At last, we will put you into canoe and let you down the Ipeľ.',
    question_4: 'Will anyone accompany me during paddling?',
    answer_4: 'No. Everyone paddles Ipeľ on their own, without a guide in the boat. During paddling you enjoy happy moments on the water, stop by different resting places, which we will inform you about in advance and which are tracked in the map that we provide for you.',
    question_5: 'Children in a canoe',
    answer_5: 'Don’t be afraid to try to paddle Ipeľ with children. It is a lot of fun for them. The only condition is that the child needs to stay put in the boat. Life jackets and helmets are obligatory for children. We offer all sizes of life jackets, with sizes ranging from five-year-old ones up to teenage-fitting models. If you are bringing the children with you, always make sure to tell us, along with their ages, so that we can prepare the life jackets. Mainly children should be wearing a hat in sunny days and they should properly put on sunscreen.',
    question_6: 'The most common problems on the river',
    answer_6: 'It is necessary to have enough water to drink, not to forget a hat, to put on sunscreen. We recommend everyone to take a bag for trash to the boat – it does not belong in Ipeľ nor to nature, but inside a trash can. We always tell ourselves in Paddling Ipeľ that if we can bring 10 full cans in the boat, then it cannot be a problem to take the 10 empty cans out the boat after landing :-).',
    question_7: 'Is it necessary to make a reservation in advance?',
    answer_7: 'Yes. It can happen that when you arrive without it, we will not have enough equipment for you. That’s why we recommend to contact our administrators by telephone or e-mail at least one day in advance and to tell us when you would like to paddle Ipeľ, how many of adults and children will come etc.',
    question_8: 'Where exactly can you find us?',
    answer_8: 'The address of beginning of paddling: Holiša. The address of end of paddling: Kalonda, by the hydraulic structure. In Holiša, you will find us in the middle of the village near the hydraulic structure, former pumping station, which you cannot miss. Don’t hesitate to contact us beforehand on the numbers +421948429625 +421907667287 +421949811809 and we will help you get to us effortlessly. In the villages we also have colour marks, so that you surely won’t miss us. At the bottom of the page you will also find our location in Google Maps.',
    question_9: 'Where can I park my car?',
    answer_9: 'You can park your car directly at our place in Holiša. We provide parking for free. After telephonic conversation arranging the duration of paddling we will provide you information specifying where you can park your car.',
    question_10: 'How much time does it take to paddle Ipeľ?',
    answer_10: 'The duration of paddling depends on water level on a given day and also on activity of participants in a canoe. However, we know from our experience that on average, it takes approximately two and half hours to paddle from Holiša to Kalonda, under normal conditions. (The main route of paddling is 11km long, starts in Holiša and ends in Kalonda). Upon a request from customers, it is possible to provide a route up to 25 km of length. We’d like to remind that it is better to paddle Ipeľ on a business day. There are fewer people everywhere, staff is more pleasant and average “influence” lower and after all, it is cheaper as well.',
    question_11: 'How prepared should I come?',
    answer_11: 'You will find the information in Preparation section.',
    question_12: 'Paddle Ipeľ with a dog',
    answer_12: 'Every pet is welcome at our place.',
    question_13: 'What is included in the price?',
    answer_13: 'Canoe, paddles, life jackets, helmets, waterproof bags, barrels, parking, instructions.',
    question_14: 'How do I get back to my car after paddling?',
    answer_14: 'While we are explaining all the ins and outs of rental and paddling, the drivers take the cars to Kalonda car park at the end of paddling route, which takes about 15 min by car. On the way back, we will drive the cars so that they wait you at the end of the paddling route at your convenience.',
    question_15: 'Is Ipeľ difficult to paddle?',
    answer_15: 'No, it is neither difficult nor dangerous. For safety reasons, all the participants of paddling wear life jackets and helmets. Before paddling, our experiences instructor will explain everything to you. We provide sport equipment rental, which means that you are alone on the water. However, there is nothing to worry about, even seniors with their grandchildren have already managed to paddle Ipeľ.',
    question_16: 'You haven\'t found an answer to your question?',
    answer_16: 'Contact us.',
    kontakty_2: 'Contacts.',
    pozicovna_sportoveho_naradia: 'Sport equipment rental',
    uspesna_rezervacia: 'Thank you for reservation!',
    first_reason: 'Your name contains fewer than 7 or more than 70 characters.',
    second_reason: 'It\'s necessary to rent at least one kanoe or paddleboard.',
    third_reason: 'Wrong e-mail address format.',
    fourth_reason: 'Insert valid phone number (cell phone)'
  }
};

let language = '';

if (/^sk\b/.test(navigator.language)) {       
  language= 'sk'; 
  //document.getElementById("submit-button").value = "Odoslať";
} else if (/^cs\b/.test(navigator.language)) {       
  language= 'sk'; 
  //document.getElementById("submit-button").value = "Odoslať";
} else if (/^hu\b/.test(navigator.language)) {       
  language= 'en'; 
  //document.getElementById("submit-button").value = "Send";
} else if (/^de\b/.test(navigator.language)) {       
  language= 'en'; 
  //document.getElementById("submit-button").value = "Send";
} else  {       
  language= 'en'; 
 // document.getElementById("submit-button").value = "Send";
}
 // tady podle toho co si vybere v tom prepinaci

console.log(navigator.language);

function setLanguage(languageChosen) {

  if (languageChosen == 'sk') {
    //document.getElementById("submit-button").value = "Odoslať";
  } else {
   // document.getElementById("submit-button").value = "Send";
  }

  language = languages[languageChosen];
  for (const element of document.querySelectorAll('[data-language-key]')) {
    const translationKey = element.getAttribute('data-language-key');
    element.textContent = language[translationKey];
  }
}


setLanguage(language);



function onFormSubmit(){

  // FIRST the children from previous attempt are deleted
  let oldResponseText = document.getElementById('form-response-message');
  oldResponseText.innerHTML = '';

  let formIsValid = 0;
  let formIsInvalidReason = [];
  let numberOfInvalidFields = 0;
  formIsInvalidReason[numberOfInvalidFields] = '';
  const o ={
  MenoPriezvisko : document.getElementById('meno-priezvisko').value,
  pocetLudi:document.getElementById('pocet-ludi').value,
  pocetKanoeVydra:document.getElementById('pocet-kanoe-vydra').value,
  pocetKanoeLochness:document.getElementById('pocet-kanoe-lochness').value,
  pocetPaddleboardov:document.getElementById('pocet-paddleboardov').value,
  datum:document.getElementById('datum-splavu').value,
  mesiac:document.getElementById('mesiac').value,
  zaciatok:document.getElementById('zaciatok-splavu').value,
  email:document.getElementById('e-mail-klienta').value,
  telefon:document.getElementById('telefonne-cislo').value,
  }

  if (o.MenoPriezvisko.length <= 6 || o.MenoPriezvisko.length >= 70) {
    //Meno a priezvisko má menej ako 7 alebo viac ako 70 znakov
    formIsInvalidReason[numberOfInvalidFields] = 'first_reason';
    formIsValid = 1;
    numberOfInvalidFields += 1;
    formIsInvalidReason[numberOfInvalidFields] = '';
  } 
  
  if (o.pocetKanoeVydra == 0 && o.pocetPaddleboardov == 0 && o.pocetKanoeLochness == 0) {
    //Je potrebné rezervovať si aspoň jedno kanoe alebo paddleboard.
    formIsInvalidReason[numberOfInvalidFields] = 'second_reason';
    numberOfInvalidFields += 1;
    formIsInvalidReason[numberOfInvalidFields] = '';
  }
  
  if (!ValidateEmail(o.email)) {
    //Nesprávny formát e-mailovej adresy.
    formIsInvalidReason[numberOfInvalidFields] = 'third_reason'
    numberOfInvalidFields += 1;
    formIsInvalidReason[numberOfInvalidFields] = '';
  }
  
  if (o.telefon.length <=8 || o.telefon.toString().length >= 17) {
    //Vložte platné telefónne číslo (mobilné)
    formIsInvalidReason[numberOfInvalidFields] = 'fourth_reason';
  }
  
  if (formIsInvalidReason[0] == '' ) {
    // reservation is a success
    const params = new URLSearchParams(o).toString();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this)
        //if (this.readyState == 4 && this.status == 200) {
        //  document.getElementById("demo").innerHTML = this.responseText;
        //}
      };
    xhttp.open("GET", "https://script.google.com/macros/s/AKfycbwo-ljhA4diYHED7VnIaCyuVQ9DjZrJp5sPoZXzq89j0qUpm43h/exec", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(params);
      
    const submitMessageSuccess = document.createElement('div');
    submitMessageSuccess.className = 'reservation-response';
    submitMessageSuccess.innerHTML = `
      <div>
        <h1 id="reservation-sucess" class="reservation-response-success" data-language-key="uspesna_rezervacia"></h1>
      </div>
    `
    let reservationResponse = document.getElementById('form-response-message');
    reservationResponse.appendChild(submitMessageSuccess);
    
    reservationResponse.style.display = 'block';

    let successMessageTranslated = document.getElementById('reservation-sucess');

    let translationKey = successMessageTranslated.getAttribute('data-language-key');
    successMessageTranslated.textContent = language[translationKey];
    

    setTimeout(hideReservationResponse, 5000);
  } else {
    // display all the reasons why reservation did not get send
    let iterator = 0;
    while (formIsInvalidReason.length > iterator) {
      if (formIsInvalidReason[iterator] == '') {
        break;
      }
      let submitMessageFailure = document.createElement('div');
      submitMessageFailure.className = 'reservation-response';
      //
      submitMessageFailure.innerHTML = `
        <div>
          <h1 class="reservation-response-failure" data-language-key="${formIsInvalidReason[iterator]}">${iterator + 1}. </h1>
        </div>
      `
      document.getElementById('form-response-message').appendChild(submitMessageFailure);
      iterator += 1;
    }
    let reservationResponse = document.getElementById('form-response-message');
    reservationResponse.style.display = 'block';

    for (const element of document.querySelectorAll('h1.reservation-response-failure')) {
      const translationKey = element.getAttribute('data-language-key');
      element.textContent = language[translationKey];
    }

    /*let failedMessageTranslated = document.getElementById('reservation-fail');

    let translationKey = successMessageTranslated.getAttribute('data-language-key');
    failedMessageTranslated.textContent = language[translationKey]; */
    
  }
  console.log(formIsInvalidReason);
  
  function hideReservationResponse() {
    let reservationResponse = document.getElementById('form-response-message');
    reservationResponse.style.display = 'none';
  }
  /*
  */


 // This is copied from  
 // https://www.w3resource.com/javascript/form/email-validation.php
 function ValidateEmail(mail) 
 {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
   {
     return (true)
   }
    
     return (false)
 }


}
/*

*/