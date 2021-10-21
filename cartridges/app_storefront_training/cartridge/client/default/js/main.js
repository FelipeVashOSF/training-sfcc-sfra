window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');

$(document).ready(function () {
    processInclude(require('./cart'));
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
});