// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 200) {
//         $(".transp-nav").addClass("new-nav");
//     } else {
//         $(".transp-nav").removeClass("new-nav");
//     }
// });




$(document).ready(function () {
    $('.indicator').click(function () {
        $(this).toggleClass('active-indicator');
        $(this).siblings().removeClass('active-indicator');
    });
});



