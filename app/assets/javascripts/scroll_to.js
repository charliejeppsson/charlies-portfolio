
$(document).ready(function () {
    $("#about-scroll").click(function () {
        $('html, body').animate({
            scrollTop: $(".about-wrapper").offset().top
        }, 500);
    });

    $("#skills-scroll").click(function () {
        $('html, body').animate({
            scrollTop: $(".skills-wrapper").offset().top
        }, 500);
    });

    $("#my-work-scroll").click(function () {
        $('html, body').animate({
            scrollTop: $(".portfolio-wrapper").offset().top
        }, 500);
    });

    $("#connect-scroll").click(function () {
        $('html, body').animate({
            scrollTop: $(".connect-wrapper").offset().top
        }, 500);
    });
});
