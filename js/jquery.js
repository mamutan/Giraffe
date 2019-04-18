$(function() {

  //slick
  $('.slick1').slick({
    infinite: true,
    speed: 1700,
    autoplaySpeed: 4000,
    fade: true,
    cssEase:'linear',
    autoplay: true,
  });


  $(window).on('scroll load', function() {

    //revealEffect
    $('.revealEffect_wrapper').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight) {
        $('.revealEffect_wrapper').each(function(i) {
          $(this).delay(500*i).queue(function() {
            $(this).addClass('show').dequeue();
          });
        });
      }
    });

    //fadeIn
    $('.fadeIn').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });

  });

})
