// menu
$(function(){

  $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
  });

});

// insight-slider
var swiper = new Swiper(".insight-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 50,
    centeredSlides: false,
    /*autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },*/
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
    },
});

// testimonials-slider
var swiper = new Swiper(".testimonials-slider", {
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: ".swiper-button-left",
  },
});

// faq
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
  accordion.onclick = () =>{
      accordion.classList.toggle('active');
  }
});