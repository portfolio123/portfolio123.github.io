$(document).ready(function(){

	$('.slider').on('init', function(event, slick){
  console.log('.slider init');

        AOS.init({
            easing: 'ease-out-back',
            duration: 1000
        });
	});
	
	$('.slider').slick({
		
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		speed:1000,
		infinite: true,
		autoplay: false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow:1
				}
			},{
				breakpoint: 320,
				settings: {
					slidesToShow:1
				}
			}
			
		]
	});
});