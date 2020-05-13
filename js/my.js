$(document).ready(function(){
			// Фикмированная шапка при скролле
			$("#header").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$("#header").addClass("default").fadeIn('fast');
				} else {
					$("#header").removeClass("default").fadeIn('fast');
				};
			});

			// Плавный скролл по якорям
			//Работающий при любых jquery
			$('a[href^="#"]').bind("click", function(e){
			  var anchor = $(this);
			  $('html, body').stop().animate({
			   scrollTop: $(anchor.attr("href")).offset().top
			  }, 1000);
			  e.preventDefault();
			 });
			 return false;﻿
		});

		
/* Burger*/

(function(){
    const burgerItem=document.querySelector('.burger');
    const menu=document.querySelector('.header_nav');
    const menuCloseItem=document.querySelector('.header_nav-close');
    burgerItem.addEventListener('click',()=>{
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click',()=>{
        menu.classList.remove('header_nav_active');
    });
}());