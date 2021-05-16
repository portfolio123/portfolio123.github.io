
jQuery(document).ready(function() {
	

	$(window).load(function () {
			$(".loaded").fadeOut();
			$(".preloader").delay(1000).fadeOut("slow");
		});
	  
	  
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	 

	/* owlcarousel team */
	$(".main_testimonial").owlCarousel({

	autoPlay: 3000, 
	items : 1,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],

	pagination : true,
	paginationNumbers: false,
	singleItem:true,

	responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window

	});

	/* scrollTop.js */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

	/* scrolldown.js */
	$('.scrolldown a').bind('click', function () {
		$('html , body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 160
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
		
	/* bootstrap scrollspy */
    $('body').scrollspy({
    	target: '.navbar',
    	offset: 160
    });

	/* navbardown.js */
	$('.nav a').bind('click', function () {
		$('html , body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 80
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});			
				
	new WOW().init();
			
});






		
  
 


	