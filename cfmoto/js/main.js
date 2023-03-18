$(function(){
	
    // header-slider
    $('.header-slider').slick({
      arrows:false,
      vertical:true,
      dots:true,
      dotsClass:'header-dots',
      responsive: [
        {
            breakpoint: 846,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
    });

    // slider
    $('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 2, 
        slidesToScroll: 1,
		speed: 1000,
		infinite: false,
		autoplay: false,
		autoplaySpeed: 3000, 
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
	});

    // photo
    $('.photo__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


});



// accordion
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
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
