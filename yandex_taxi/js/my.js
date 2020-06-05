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

/* jquery autocomplete */

$(document).ready(function () {

    $("#city_from,#city_to").autocompleteArray([
        "Патона", "Личаківська", "Зелена", "Підвальна", "Наукова", "В.Великого", "Княгині Ольги",
        "Августина Волошина", "Баштанна", "Пасічна", "Під Голоском", "Ряшівська", "Виговського", "Медової Печери",
        "Грінченка", "Дудаєва", "Дальня", "Варшавська", "Коперника", "Заводська", "Петлюри",
        "Любінська", "Шевченка", "Дозвільна", "Городоцька", "Сяйво", "Широка", "Топольна",
        "Щирецька", "Окружна", "Довженка", "Сигнівка", "Червоної Калини", "Пирогівка", "Японська"
    ], {
        delay: 10,
        minChars: 1,
        matchSubset: 1,
        autoFill: true,
        maxItemsToShow: 10
    });

});

function show_item(id, status) {
    if (status == 0) $('#' + id).animate({
        height: "hide"
    }, "hide");
    else $('#' + id).animate({
        height: "show"
    }, "slow");
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}