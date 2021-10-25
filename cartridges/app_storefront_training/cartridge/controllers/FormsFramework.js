'use strict';

var server = require('server');

var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

server.get(
    'Show',
    server.middleware.https,
    consentTracking.consent,
    csrfProtection.generateToken,
    function (req, res, next) {
        var reportingURLs;

        res.setViewData({ reportingURLs: reportingURLs });

        res.render('forms_framework/forms_framework');
        next();
    }
);