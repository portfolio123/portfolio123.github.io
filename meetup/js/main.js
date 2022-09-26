$(function(){

    // menu
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    // slider
    $('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 2, 
        slidesToScroll: 1,
		speed: 1000,
		infinite: false,
		autoplay: true,
		autoplaySpeed: 3000, 
        variableWidth: true,
        adaptiveHeight: true,
	});

    // schedules
    $('.schedules-tabs__item').on('click', function (e) {
        e.preventDefault();

        $('.schedules-tabs__item').removeClass('schedules-tabs__item--active');
        $(this).addClass('schedules-tabs__item--active');

        $('.schedules-tabs__content').removeClass('schedules-tabs__content--active');
        $($(this).attr('href')).addClass('schedules-tabs__content--active');
    });

    // speakers
    $('.speakers__name').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        asNavFor: '.speakers__content',
        arrows: false,
        responsive: [
            {
                breakpoint: 1050, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.speakers__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.speakers__name',
        prevArrow: '<button type="button" class="speakers-prev"><img src="images/arrow-left.png" alt="img"></button>', 
        nextArrow: '<button type="button" class="speakers-next"><img src="images/arrow-right.png" alt="img"></button>',
    });

    // gallery popup
    $('.gallery__item-inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] 
        },
    });
      
});