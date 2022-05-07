/* feauture */
$(".hover").mouseleave(
	function () {
		$(this).removeClass("hover");
	}
);

// filter
$(document).ready(function () {
	$('.list').click(function () {
		const value = $(this).attr('data-filter');
		if (value == 'all') {
			$('.itemBox').show('1000');
		} else {
			$('.itemBox').not('.' + value).hide('1000');
			$('.itemBox').filter('.' + value).show('1000');
		}
	})

	// add active class on selected item

	$('.list').click(function () {
		$(this).addClass('active').siblings().removeClass('active')
	})
})

// menu
function toggleMenu() {
	const toggleMenu = document.querySelector('.toggleMenu');
	const navigation = document.querySelector('.navigation');
	toggleMenu.classList.toggle('active');
	navigation.classList.toggle('active');
}

/* search */
$(document).on('click','.search', function(){
	$('.search-bar').addClass('search-bar-active')
});

$(document).on('click','.search-cancel', function(){
	$('.search-bar').removeClass('search-bar-active')
});

/* login-sign-up form */
$(document).on('click','.user,.already-acount', function(){
	$('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click','.sign-up-btn', function(){
	$('.form').addClass('sign-up-active').removeClass('login-active')
});

$(document).on('click','.form-cancel', function(){
	$('.form').removeClass('login-active').removeClass('sign-up-active')
});

