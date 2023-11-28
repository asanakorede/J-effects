$(document).ready(function () {
    $(".blue-text").click(function () {
        $("#car-hidden").slideToggle().slideDown().toggle();
        $("#car-showing").slideToggle().slideUp().toggle();
    });
})