$(document).ready(function () {

  $(".circle").each( function() {
    $(this).height($(this).width())
  });

  $(".circle").hover(function() {
    $(this).children("a").children(".afterhover").fadeIn( "slow" );
  },function() {
    $(this).children("a").children(".afterhover").fadeOut( "slow" );
  });

  $(window).resize(function(){
    $(".circle").each( function() {
      $(this).height($(this).width())
    });
  });
});
