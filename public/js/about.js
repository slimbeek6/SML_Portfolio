$(document).ready(function () {
    $("#contact-link").on("click", function(event) {
        window.location.pathname = ("/contact");
    });

    $("#portfolio-link").on("click", function(event) {
        window.location.pathname = ("/portfolio");
    });

    $("#home-link").on("click", function(event) {
        window.location.pathname = ("/");
    });
});