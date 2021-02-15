$(document).ready(function () {
    $("#about-link").on("click", function(event) {
        window.location.pathname = ("/about");
    });

    $("#contact-link").on("click", function(event) {
        window.location.pathname = ("/contact");
    });

    $("#home-link").on("click", function(event) {
        window.location.pathname = ("/");
    });
});