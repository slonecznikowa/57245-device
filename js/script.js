var page = document.querySelector('.page');
var login = Array.prototype.slice.call(document.querySelectorAll('.log-out'));
var logout = Array.prototype.slice.call(document.querySelectorAll('.log-in'));

login.forEach(function (a) {
  a.addEventListener('click', function () {
    page.classList.add('page-logged');
    page.classList.remove('page-not-logged');
  });
});

logout.forEach(function (b) {
  b.addEventListener('click', function () {
    page.classList.remove('page-logged');
    page.classList.add('page-not-logged');
  });
});

var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");
var slider3 = document.querySelector(".slider-3");

var sliderButton1 = document.querySelector(".button-slider-1");
var sliderButton2 = document.querySelector(".button-slider-2");
var sliderButton3 = document.querySelector(".button-slider-3");

var servicesSlider1 = document.querySelector(".services-slider-1");
var servicesSlider2 = document.querySelector(".services-slider-2");
var servicesSlider3 = document.querySelector(".services-slider-3");

var servicesButton1 = document.querySelector(".services-button-slider-1");
var servicesButton2 = document.querySelector(".services-button-slider-2");
var servicesButton3 = document.querySelector(".services-button-slider-3");

var mapButton = document.querySelector(".contacts-map-img");
var mapModal = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-close");

var mailButton = document.querySelector(".contact-us-link");
var mailModal = document.querySelector(".modal-mail");
var mailClose = document.querySelector(".modal-mail .modal-close");

var mailForm = mailModal.querySelector(".mail-form");
var mailName = mailModal.querySelector(".mail-name-input");
var mailEmail = mailModal.querySelector(".mail-email-input");

var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem(".mail-name-input");
  } catch (err) {
    isStorageSupport = false;
  }

sliderButton1.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  slider1.classList.add("main-slider-slide-active");
  slider2.classList.remove("main-slider-slide-active");
  slider3.classList.remove("main-slider-slide-active");
  sliderButton1.classList.add("slider-controls-button-active");
  sliderButton2.classList.remove("slider-controls-button-active");
  sliderButton3.classList.remove("slider-controls-button-active");
} );

sliderButton2.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  slider1.classList.remove("main-slider-slide-active");
  slider2.classList.add("main-slider-slide-active");
  slider3.classList.remove("main-slider-slide-active");
  sliderButton1.classList.remove("slider-controls-button-active");
  sliderButton2.classList.add("slider-controls-button-active");
  sliderButton3.classList.remove("slider-controls-button-active");
} );

sliderButton3.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  slider1.classList.remove("main-slider-slide-active");
  slider2.classList.remove("main-slider-slide-active");
  slider3.classList.add("main-slider-slide-active");
  sliderButton1.classList.remove("slider-controls-button-active");
  sliderButton2.classList.remove("slider-controls-button-active");
  sliderButton3.classList.add("slider-controls-button-active");
} );

servicesButton1.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  servicesSlider1.classList.add("services-slider-slide-active");
  servicesSlider2.classList.remove("services-slider-slide-active");
  servicesSlider3.classList.remove("services-slider-slide-active");
  servicesButton1.classList.add("services-slider-controls-button-active");
  servicesButton2.classList.remove("services-slider-controls-button-active");
  servicesButton3.classList.remove("services-slider-controls-button-active");
} );

servicesButton2.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  servicesSlider1.classList.remove("services-slider-slide-active");
  servicesSlider2.classList.add("services-slider-slide-active");
  servicesSlider3.classList.remove("services-slider-slide-active");
  servicesButton1.classList.remove("services-slider-controls-button-active");
  servicesButton2.classList.add("services-slider-controls-button-active");
  servicesButton3.classList.remove("services-slider-controls-button-active");
} );

servicesButton3.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  servicesSlider1.classList.remove("services-slider-slide-active");
  servicesSlider2.classList.remove("services-slider-slide-active");
  servicesSlider3.classList.add("services-slider-slide-active");
  servicesButton1.classList.remove("services-slider-controls-button-active");
  servicesButton2.classList.remove("services-slider-controls-button-active");
  servicesButton3.classList.add("services-slider-controls-button-active");
} );


mapButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-open");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-open");
} );


mailButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mailModal.classList.add("modal-open");
  if (storage) {
      mailName.value = storage;
      mailEmail.focus();
    }
    else {
      mailName.focus();
    }
});

mailClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mailModal.classList.remove("modal-open");
  mailModal.classList.remove("modal-error");
});

mailForm.addEventListener("submit", function (evt) {
    if (!mailName.value || !mailEmail.value) {
      evt.preventDefault();
      mailModal.classList.remove("modal-error");
      mailModal.offsetWidth = mailModal.offsetWidth;
      mailModal.classList.add("modal-error");
      /*alert("Нужно ввести имя и e-mail");*/
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem(".mail-name-input", mailName.value);
        }
    }
  });


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mailModal.classList.contains("modal-open")) {
        mailModal.classList.remove("modal-open");
        mailModal.classList.remove("modal-error");
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapModal.classList.contains("modal-open")) {
        mapModal.classList.remove("modal-open");
      }
    }
  });
