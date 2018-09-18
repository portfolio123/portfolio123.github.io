$(document).ready(function(){
               $("#link1").click(function(){
                    $path=$("#portfolio").offset().top;
                    $('body').animate({scrollTop:$path},1000);
               });
			   $("#link2").click(function(){
                    $path=$("#about").offset().top;
                    $('body').animate({scrollTop:$path},1000);
               });
               $("#link3").click(function(){
                    $path=$("#contact").offset().top;
                    $('body').animate({scrollTop:$path},1000);
               });
            });
			
			
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('#header').addClass("sticky");
}
else{
$('#header').removeClass("sticky");
}
});