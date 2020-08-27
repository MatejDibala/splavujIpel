

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
    kontakty: 'Kontakty',
    slideshow_big_text_1: 'Ipeľ pre rodičov s deťmi',
    slideshow_small_text_1: 'Poďte s nami!',
    slideshow_big_text_2: 'Už ste boli na Ipli?',
    slideshow_small_text_2: 'Požičajte si lode a vyrazte!',
    slideshow_big_text_3: 'Požičovňa je v provoze',
    slideshow_small_text_3: 'Najvyšší čas vyraziť na vodu!',
    welcome_sign: 'Sezóna splavu je v plnom prúde!',
    ako_to_funguje_nadpis: 'Ako to funguje:',
    krok_1: 'Vyberte si, či by ste chceli ísť na kanoe alebo paddleboard.',
    krok_2: 'Zistite, kto s vami pôjde (počet ľudí).',
    krok_3: 'Rozhodnite sa pre dátum a čas a skontrolujte ',
    dostupnost_2: 'dostupnosť.',
    krok_4: 'Odošlite ',
    rezervacny_formular: 'rezervačný formulár.',
    podme_na_to: 'Poďme na to!',
    zakladny_cennik: 'Základný cenník:',
    cennik_nadpis: 'Cenník požičovne',
    cennik_kanoe: 'Kanoe: 10€/hodina. Obvyklý splav: 2 hodiny.',
    cennik_paddleboard: 'Paddleboard: 5€/hodina.',
    uplny_cennik_download: 'Úplný cenník na stiahnutie.',
    cennik_nakladov: 'Cenník nákladov na obstaranie.',
    disclaimer: 'V prípade straty, odcudzenia alebo zničenia športových potrieb – kanoe, paddleboardov, pádiel, prilieb, viest, vodných vakov alebo barelov, je klient povinný uhradiť prenajímateľovi obstarávaciu cenu každého jednotlivého kusu príslušenstva uvedenú v cenníku.',
    meno_priezvisko: 'Vaše meno a priezvisko',
    pocet_ludi: 'Počet ľudí',
    pocet_kanoe: 'Počet kanoe',
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
    kontakty_2: 'Kontakty.',
    pozicovna_sportoveho_naradia: 'Požičovňa športového náradia',
    uspesna_rezervacia: 'Ďakujeme za rezerváciu!',
    first_reason: 'Meno a priezvisko má menej ako 7 alebo viac ako 70 znakov',
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
    kontakty: 'Contacts',
    slideshow_big_text_1: 'Ipeľ for parents with children',
    slideshow_small_text_1: 'Come with us!',
    slideshow_big_text_2: 'Have you paddled Ipeľ?',
    slideshow_small_text_2: 'Rent kanoes and float out!',
    slideshow_big_text_3: 'Boat rental is in operation',
    slideshow_small_text_3: 'High time to float out!',
    welcome_sign: 'Paddling season is underway!',
    ako_to_funguje_nadpis: 'How it works:',
    krok_1: 'Choose whether you want to borrow a kanoe or a paddleboard.',
    krok_2: 'Find out who is coming with you (number of people).',
    krok_3: 'Choose the date and check the ',
    dostupnost_2: 'availability.',
    krok_4: 'Send the ',
    rezervacny_formular: 'reservation form.',
    podme_na_to: 'Let\'s go!',
    zakladny_cennik: 'Basic price list:',
    cennik_nadpis: 'Rental price list',
    cennik_kanoe: 'Kanoe: 10€/hour. Usual water trail: 2 hours.',
    cennik_paddleboard: 'Paddleboard: 5€/hour.',
    uplny_cennik_download: 'Complete price list (downloadable only in Slovak).',
    cennik_nakladov: 'Cost list of equipment.',
    disclaimer: 'In case of losing, stealing or destroying sport equipment – kanoe, paddleboards, paddles, helmets, life vests, water bags or barrells, the client has to pay the rental company the acquisition price of each piece listed in the cost list (only available in Slovak).',
    meno_priezvisko: 'Your first name and last name',
    pocet_ludi: 'Number of people',
    pocet_kanoe: 'Number of kanoes',
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
    kontakty_2: 'Contacts.',
    pozicovna_sportoveho_naradia: 'Sport equipment rental',
    uspesna_rezervacia: '',
    first_reason: '',
    second_reason: '',
    third_reason: '',
    fourth_reason: ''
  }
};

let language = languages['sk']; // tady podle toho co si vybere v tom prepinaci

for (const element of document.querySelectorAll('[data-language-key]')) {
  const translationKey = element.getAttribute('data-language-key');
  element.textContent = language[translationKey];
}

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
  pocetKanoe:document.getElementById('pocet-kanoe').value,
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
  
  if (o.pocetKanoe == 0 && o.pocetPaddleboardov == 0) {
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
    xhttp.open("POST", "https://script.google.com/macros/s/AKfycbz3YTgnfCiAmqexj787aa9cbvR1bbpPrnhDdULy9Q/exec", true);
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