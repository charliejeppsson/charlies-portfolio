$(document).ready(function () {
    // Click animation for show-info button
    $(".show-info").click(function () {
        $(".active figcaption").addClass("slide-up-caption");
        $(".show-info").addClass("hidden");
        $(".hide-info").removeClass("hidden");
    });

    // Click animation for hide-info button
    $(".hide-info").click(function () {
        $(".active figcaption").removeClass("slide-up-caption");
        $(".hide-info").addClass("hidden");
        $(".show-info").removeClass("hidden");
    });

    // Reset the info buttons when sliding right or left
    $(".carousel-control").click(function () {
        $(".active figcaption").removeClass("slide-up-caption");
        $(".show-info").removeClass("hidden");
        $(".hide-info").addClass("hidden");
    });
});

