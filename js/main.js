$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".transp-nav").addClass("new-nav");
    } else {
        $(".transp-nav").removeClass("new-nav");
    }
});