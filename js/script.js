$(document).ready(function () {
    $(".blue-text").click(function () {
        $("#car-hidden").fadeIn().toggle();
        $("#car-showing").fadeOut().toggle();
    });

    $(".clickable").click(function () {
     $(".nike-hidden").toggle().slideIn();
     $(".nike-showing").toggle().slideOut();
    })
});