jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());


}); // JQuery end

new WOW().init();

var options = {
  strings: ["", "I am a coder", "I am a web developer", "I am an app developer", "I am hard-working", "I am a team player", "I love technology", "I am a wolverine"],
  typeSpeed: 80,
  loop: true,
  showCursor: true,
  backSpeed: 100,
}

var typed = new Typed("#typed", options);