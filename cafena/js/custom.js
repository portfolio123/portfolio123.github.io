(function ($) {

  // reviews-carousel
  $('.reviews-carousel').owlCarousel({
    center: true,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 300,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 100,
      },
      1280: {
        items: 2,
        margin: 100,
      }
    }
  });

  // tabs
  $("#tabs").tabs();

})(window.jQuery);


// search-form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
};