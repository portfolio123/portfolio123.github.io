// slider
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
				breakpoint: 800,
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

// burger
(function(){
    const burgerItem=document.querySelector('.burger');
    const menu=document.querySelector('.header__nav');
    const menuCloseItem=document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click',()=>{
        menu.classList.add('header__nav-active');
    });
    menuCloseItem.addEventListener('click',()=>{
        menu.classList.remove('header__nav-active');
    });
}());

// more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}