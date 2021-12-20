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
    autoplay: false,
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


/* VIDEO */
const videoFile = document.getElementById('video-file'),
  videoButton = document.getElementById('video-button'),
  videoIcon = document.getElementById('video-icon')

function playPause() {
  if (videoFile.paused) {
    // Play video
    videoFile.play()
    // We change the icon
    videoIcon.classList.add('ri-pause-line')
    videoIcon.classList.remove('ri-play-line')
  } else {
    // Pause video
    videoFile.pause();
    // We change the icon
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')

  }
}
videoButton.addEventListener('click', playPause)

function finalVideo() {
  // Video ends, icon change
  videoIcon.classList.remove('ri-pause-line')
  videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)