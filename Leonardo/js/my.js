/* menu */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* slick slider */
$(document).ready(function () {
    $('.slider').slick({

        arrows: false,
        dots: false,
        slidesToShow: 1,
        speed: 3000,
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

/* slick slider1 */
$(document).ready(function () {
    $('.slider1').slick({

        arrows: true,
        dots: false,
        slidesToShow: 3,
        speed: 1000,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 650,
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

/* tab */
function openFact(evt, factName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(factName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

/* modal */
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* tab 2 */
(function() {

    var $imgs = $('#gallery img');
    var $buttons = $('#buttons');
    var tagged = {};
    
    $imgs.each(function() {
      var img = this;
      var tags = $(this).data('tags');
    
      if (tags) {
        tags.split(',').forEach(function(tagName) {
          if (tagged[tagName] == null) {
            tagged[tagName] = [];
          }
          tagged[tagName].push(img);
        });
      }
    });
    
    $('<button/>', {
      text: 'Show All',
      class: 'active',
      click: function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
        $imgs.show();
      }
    }).appendTo($buttons);
    
    $.each(tagged, function(tagName) {
      $('<button/>', {
        text: tagName + ' (' + tagged[tagName].length + ')',
        click: function() {
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
          $imgs
            .hide()
            .filter(tagged[tagName])
            .show();
        }
      }).appendTo($buttons);
    });
    
    }());