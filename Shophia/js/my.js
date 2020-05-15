$(document).ready(function(){
	$('.slider').slick({
		/* вставляем код */
		
		arrows:true,/* false -если стрелок не надо*/
		dots:true, /* false -если точек не надо*/
		slidesToShow:1, /* показуються 3 картинки, а не 1 */
		/* slidesToScroll:3 для скролла сразу 3 картинок*/
		speed:1000, /* по умолчанию 300, а с 1000 будет листаться медленее*/
		infinite: false, /* true - будет слайдер листаться беcконечно */
		/* autoplay: true, чтобы автоматически слайды листались */
		/* autoplaySpeed:1000, по умолчанию 1000=1с скорость автопроигривателя */
		/* pauseOnFocus:true,*/
		/* pauseOnHover:true,*/
		/* pauseOnDotsHover:true,*/
		/* waitForAnimate:false, будет быстро скролиться, если быстро нажимать на стрелки или точки*/
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