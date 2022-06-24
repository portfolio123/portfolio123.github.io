jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().fadeOut();
    } else {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
      $(this).addClass('open');
      $(this).next().fadeIn();
    }
  });

  $('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
    }
  });
});

/* scroll header */
$(document).ready(function () {

  $('a[href^="#"]').bind("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr("href")).offset().top
    }, 1000);
    e.preventDefault();
  });
  return false;
});


/* slider */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


/* slider-header */
$(document).ready(function () {
  $('.slider-header').slick({

    arrows: false,
    dots: false,
    slidesToShow: 1,
    speed: 3000,
    infinite: true,
    autoplay: true,
    pauseOnFocus: true,
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

/* filter */
$(document).ready(function () {
	$('.list').click(function () {
		const value = $(this).attr('data-filter');
		if (value == 'all') {
			$('.itemBox').show('1000');
		} else {
			$('.itemBox').not('.' + value).hide('1000');
			$('.itemBox').filter('.' + value).show('1000');
		}
	});

	$('.list').click(function () {
		$(this).addClass('active').siblings().removeClass('active')
	});
})

/* slider2 */
$(document).ready(function () {
  $('.slider-slider2').slick({

    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});

/* my_work img hover */
/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);