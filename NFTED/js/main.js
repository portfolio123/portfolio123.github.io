$(function(){
    
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.png" alt="img"></button>', 
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.png" alt="img"></button>',
        responsive: [
            {
                breakpoint: 1175,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});

// filter
$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.artwork__items').show('1000');
        } else {
            $('.artwork__items').not('.' + value).hide('1000');
            $('.artwork__items').filter('.' + value).show('1000');
        }
    })

    // add active class on selected item

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
})

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
let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
}