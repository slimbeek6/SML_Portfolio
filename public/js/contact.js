$(document).ready(function () {
    $("#about-link").on("click", function(event) {
        window.location.pathname = ("/about");
    });

    $("#portfolio-link").on("click", function(event) {
        window.location.pathname = ("/portfolio");
    });

    $("#home-link").on("click", function(event) {
        window.location.pathname = ("/");
    });

    $("#send-email").on("click", function(event) {
        var email = $("#InputEmail").val().trim();
        var message = $("#InputMessage").val().trim();
        window.open(`mailto:${email}?subject="Reaching Out"&body=${message}`);
    });
});