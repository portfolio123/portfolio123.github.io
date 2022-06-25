/* login-sign-up form */
$(document).on('click', '.user,.already-acount', function () {
  $('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click', '.sign-up-btn', function () {
  $('.form').addClass('sign-up-active').removeClass('login-active')
});

$(document).on('click', '.form-cancel', function () {
  $('.form').removeClass('login-active').removeClass('sign-up-active')
});


/* slick-slider */
$(document).ready(function () {
  $('.slider').slick({

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
