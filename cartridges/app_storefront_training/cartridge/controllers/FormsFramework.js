'use strict';

var server = require('server');

var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

server.get(
    "Form",
    server.middleware.https,
    function (req, res, next) {
        var addressForm = server.forms.getForm('address');
        var shippingForm = server.forms.getForm('shipping')
        addressForm.clear();
        res.render('forms_framework/forms_framework', {
            addressForm: addressForm,
            shippingForm: shippingForm
        });
        next();
    }
);

module.exports = server.exports();