// history swiper slider
var swiper = new Swiper(".history-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        510: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
    },
});

// gallery
document.querySelectorAll('.small-image-1').forEach(images =>{
  images.onclick = () =>{
      document.querySelector('.big-image-1').src = images.getAttribute('src');
  }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
  images.onclick = () =>{
      document.querySelector('.big-image-2').src = images.getAttribute('src');
  }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
  images.onclick = () =>{
      document.querySelector('.big-image-3').src = images.getAttribute('src');
  }
});

// seller swiper slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

// popup
$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 100,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});

// menu
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.menu__list');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
