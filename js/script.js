
$(document).ready(function() {
  $(" .carousel").slick({
    arrows: true, // Show navigation arrows
    dots: true, // Show navigation dots
    fade: true, // Enable cross-fade effect
    swipe: true, // Enable touch swipe
    speed: 500,
    cssEase:  'linear',
    autoplay: false, // Disable autoplay
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });
});