

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