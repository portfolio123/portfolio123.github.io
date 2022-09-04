$(function(){
    
    $('.slider, .slider-testimonial').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<img class="slick-left" src="../images/slider-arrow-left.png" alt="img">',
        nextArrow: '<img class="slick-right" src="../images/slider-arrow-right.png" alt="img">',
    });
});

/* tab */
function openProduct(evt, productName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(productName).style.display = "block";
    evt.currentTarget.className += " active";
}