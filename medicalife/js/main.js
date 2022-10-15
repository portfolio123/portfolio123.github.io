// menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu__list');

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
};
window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
};

// swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

// accordion
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
  accordion.onclick = () =>{
      accordion.classList.toggle('active');
  }
})