$(document).ready(function(){

  $(".card").hover(function () {
      $(this).addClass("shadow-lg");
    }, function () {
      $(this).removeClass("shadow-lg");
    }
  );

  // On recupere la position du bloc par rapport au haut du site
  var position_top_raccourci = $("#navigation").offset().top;

  //Au scroll dans la fenetre on déclenche la fonction
  $(window).scroll(function () {

    //si on a defile de plus de 150px du haut vers le bas
    if ($(this).scrollTop() > position_top_raccourci) {

      //on ajoute la classe "fixNavigation" a <div id="navigation">
      $('#navigation').addClass("fixNavigation");
      $('#navigation').addClass("shadow-sm");
    } else {

      //sinon on retire la classe "fixNavigation" a <div id="navigation">
      $('#navigation').removeClass("fixNavigation");
      $('#navigation').removeClass("shadow-sm");

    }

  });

});
