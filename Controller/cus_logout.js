$(function() {

    Parse.$ = jQuery;
Parse.initialize("MY CODE HERE", "MY CODE HERE");

    $('.form-logout').on('submit', function(e) {

    // Prevent Default Submit Event
    e.preventDefault();

    //logout current user
    var currentUser = Parse.User.current();
        if (currentUser) {
            Parse.User.logout();
            window.location="index.html";
        } else {
            window.location="index.html";
        }

    });

});