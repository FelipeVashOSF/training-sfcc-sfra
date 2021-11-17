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
        addressForm.clear();
        var creditCardForm = server.forms.getForm('creditCard');
        creditCardForm.clear();
        var currentYear = new Date().getFullYear();
        var creditCardExpirationYears = [];

        for (var j = 0; j < 10; j++) {
            creditCardExpirationYears.push(currentYear + j);
        }
        res.render('forms_framework/forms_framework', {
            addressForm: addressForm,
            creditCardForm: creditCardForm,
            expirationYears: creditCardExpirationYears
        });
        next();
    }
);

module.exports = server.exports();