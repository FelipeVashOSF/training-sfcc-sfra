'use strict';

var server = require('server');

var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

server.get(
    "Form",
    server.middleware.https,
    function (req, res, next) {
        res.render('forms_framework/forms_framework');
        next();
    }
);

module.exports = server.exports();