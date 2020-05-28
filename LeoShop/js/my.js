$(document).ready(function () {
	$('.carousel').slick({

		arrows: true,
		dots: false,
		slidesToShow: 1,
		speed: 1000,
		infinite: true,
		autoplay: true,
		pauseOnHover: true,
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 320,
				settings: {
					slidesToShow: 1
				}
			}

		]
	});
});