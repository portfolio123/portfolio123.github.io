/*1. play video */
$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/vIEtEnr_5m0?version=3&loop=1&autoplay=1&modestbranding=0&showinfo=0&rel=0&end=78" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video().click; }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

/*2. filter */

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/*3. tabs */
$(document).ready(function() {
	$("#content div").hide(); // Скрываем содержание
	$("#tabs li:first").attr("id","current"); // Активируем первую закладку
	$("#content div:first").fadeIn(); // Выводим содержание
    
    $('#tabs a').click(function(e) {
        e.preventDefault();        
        $("#content div").hide(); //Скрыть все сожержание
        $("#tabs li").attr("id",""); //Сброс ID
        $(this).parent().attr("id","current"); // Активируем закладку
        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
    });
});
/*4. tab2 */
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
/*5.  resize the navbar's padding */

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "14px 0";
  } else {
    document.getElementById("header").style.padding = "24px 0";
  }
}