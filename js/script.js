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
