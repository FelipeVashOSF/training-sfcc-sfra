window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');
var cart = require('./cart');

$(document).ready(function () {
    processInclude(cart);
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
});
