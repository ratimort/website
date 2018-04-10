$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});


 $(window).scroll(function(){
         if ($(this).scrollTop() >= 650) {
             $('.menu-fixed').fadeIn(500);
          } else {
             $('.menu-fixed').fadeOut(500);
          }
      });

$(document).ready(function(){
    $(".m-nav").click(function(){
        $("#menu-toggle").fadeIn(400);
        $("body").css("overflow","hidden");
        $(".menu-fixed").css("top","-57px");
    });
    $(".o-nav").click(function(){
        $("#menu-toggle").fadeOut(400);
        $("body").css("overflow","inherit");
        $(".menu-fixed").css("top","0");
    });

});