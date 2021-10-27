window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');

$(document).ready(function () {
    processInclude(require('./carousels/carousels'));
});

require("slick-carousel/slick/slick.js");
