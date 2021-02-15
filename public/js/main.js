$(document).ready(function () {
    $("#about-link").on("click", function(event) {
        window.location.pathname = ("/about");
    });

    $("#portfolio-link").on("click", function(event) {
        window.location.pathname = ("/portfolio");
    });

    $("#contact-link").on("click", function(event) {
        window.location.pathname = ("/contact");
    });

    $("#Portfolio-box").on("click", function(event) {
        window.location.pathname = ("/portfolio");
    });

    $("#About-box").on("click", function(event) {
        window.location.pathname = ("/about");
    });

    $("#Contact-box").on("click", function(event) {
        window.location.pathname = ("/contact");
    });
});