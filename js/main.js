$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".navbar").addClass("new-nav");
  } else {
    $(".navbar").removeClass("new-nav");
  }
});

$(document).ready(function() {
  $(".indicator").click(function() {
    $(this).toggleClass("active-indicator");
    $(this)
      .siblings()
      .removeClass("active-indicator");
  });

  $(".carousel").carousel({
    interval: 10000
  });
});
