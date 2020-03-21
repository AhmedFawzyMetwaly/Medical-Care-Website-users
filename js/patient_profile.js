$('.dropdown .toggle').click(function(){
    $(".dropdown-menu-part").slideUp(200);
    if($(this).parent().hasClass('is-active')) {
      $(this).parent().removeClass('is-active');
      console.log("has active");
    }
    else {
      $(".dropdown").removeClass('is-active');
      $(this).next(".dropdown-menu-part").slideDown(200);
      $(this).parent().addClass("is-active");
      console.log("has no active");
    }
  });
  