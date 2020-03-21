/* Navbar */
$('.dropdown').on('mouseover', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('mouseleave', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
});
/* Footer */
/* Scrolling to top of page */
$('.scroll-to-top').click(function (e) { //scroll is the Anchor in footer
    $('html, body').animate({
        scrollTop: $('.navbar').offset().top //the navbar is a destination class on the page
    }, parseInt($(this).attr("scroll-to-top-time")));
});
  /* End of Footer */