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
});