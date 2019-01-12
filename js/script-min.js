var page=document.querySelector(".page"),login=Array.prototype.slice.call(document.querySelectorAll(".log-out")),logout=Array.prototype.slice.call(document.querySelectorAll(".log-in"));login.forEach(function(e){e.addEventListener("click",function(){page.classList.add("page-logged"),page.classList.remove("page-not-logged")})}),logout.forEach(function(e){e.addEventListener("click",function(){page.classList.remove("page-logged"),page.classList.add("page-not-logged")})});var slider1=document.querySelector(".slider-1"),slider2=document.querySelector(".slider-2"),slider3=document.querySelector(".slider-3"),sliderButton1=document.querySelector(".button-slider-1"),sliderButton2=document.querySelector(".button-slider-2"),sliderButton3=document.querySelector(".button-slider-3"),servicesSlider1=document.querySelector(".services-slider-1"),servicesSlider2=document.querySelector(".services-slider-2"),servicesSlider3=document.querySelector(".services-slider-3"),servicesButton1=document.querySelector(".services-button-slider-1"),servicesButton2=document.querySelector(".services-button-slider-2"),servicesButton3=document.querySelector(".services-button-slider-3"),mapButton=document.querySelector(".contacts-map-img"),mapModal=document.querySelector(".modal-map"),mapClose=document.querySelector(".modal-map .modal-close"),mailButton=document.querySelector(".contact-us-link"),mailModal=document.querySelector(".modal-mail"),mailClose=document.querySelector(".modal-mail .modal-close"),mailForm=mailModal.querySelector(".mail-form"),mailName=mailModal.querySelector(".mail-name-input"),mailEmail=mailModal.querySelector(".mail-email-input"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem(".mail-name-input")}catch(e){isStorageSupport=!1}sliderButton1.addEventListener("click",function(e){e.preventDefault(),slider1.classList.add("main-slider-slide-active"),slider2.classList.remove("main-slider-slide-active"),slider3.classList.remove("main-slider-slide-active"),sliderButton1.classList.add("slider-controls-button-active"),sliderButton2.classList.remove("slider-controls-button-active"),sliderButton3.classList.remove("slider-controls-button-active")}),sliderButton2.addEventListener("click",function(e){e.preventDefault(),slider1.classList.remove("main-slider-slide-active"),slider2.classList.add("main-slider-slide-active"),slider3.classList.remove("main-slider-slide-active"),sliderButton1.classList.remove("slider-controls-button-active"),sliderButton2.classList.add("slider-controls-button-active"),sliderButton3.classList.remove("slider-controls-button-active")}),sliderButton3.addEventListener("click",function(e){e.preventDefault(),slider1.classList.remove("main-slider-slide-active"),slider2.classList.remove("main-slider-slide-active"),slider3.classList.add("main-slider-slide-active"),sliderButton1.classList.remove("slider-controls-button-active"),sliderButton2.classList.remove("slider-controls-button-active"),sliderButton3.classList.add("slider-controls-button-active")}),servicesButton1.addEventListener("click",function(e){e.preventDefault(),servicesSlider1.classList.add("services-slider-slide-active"),servicesSlider2.classList.remove("services-slider-slide-active"),servicesSlider3.classList.remove("services-slider-slide-active"),servicesButton1.classList.add("services-slider-controls-button-active"),servicesButton2.classList.remove("services-slider-controls-button-active"),servicesButton3.classList.remove("services-slider-controls-button-active")}),servicesButton2.addEventListener("click",function(e){e.preventDefault(),servicesSlider1.classList.remove("services-slider-slide-active"),servicesSlider2.classList.add("services-slider-slide-active"),servicesSlider3.classList.remove("services-slider-slide-active"),servicesButton1.classList.remove("services-slider-controls-button-active"),servicesButton2.classList.add("services-slider-controls-button-active"),servicesButton3.classList.remove("services-slider-controls-button-active")}),servicesButton3.addEventListener("click",function(e){e.preventDefault(),servicesSlider1.classList.remove("services-slider-slide-active"),servicesSlider2.classList.remove("services-slider-slide-active"),servicesSlider3.classList.add("services-slider-slide-active"),servicesButton1.classList.remove("services-slider-controls-button-active"),servicesButton2.classList.remove("services-slider-controls-button-active"),servicesButton3.classList.add("services-slider-controls-button-active")}),mapButton.addEventListener("click",function(e){e.preventDefault(),mapModal.classList.add("modal-open")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapModal.classList.remove("modal-open")}),mailButton.addEventListener("click",function(e){e.preventDefault(),mailModal.classList.add("modal-open"),storage?(mailName.value=storage,mailEmail.focus()):mailName.focus()}),mailClose.addEventListener("click",function(e){e.preventDefault(),mailModal.classList.remove("modal-open"),mailModal.classList.remove("modal-error")}),mailForm.addEventListener("submit",function(e){mailName.value&&mailEmail.value?isStorageSupport&&localStorage.setItem(".mail-name-input",mailName.value):(e.preventDefault(),mailModal.classList.remove("modal-error"),mailModal.offsetWidth=mailModal.offsetWidth,mailModal.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mailModal.classList.contains("modal-open")&&(mailModal.classList.remove("modal-open"),mailModal.classList.remove("modal-error")))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapModal.classList.contains("modal-open")&&mapModal.classList.remove("modal-open"))});