'use strict';

var button1 = $(".button1");
var button2 = $(".button2");
var option = $(".option");
var returningCustomerImage = $(".returning-customer");
var checkOrderImage = $(".check-order");
var loginOption = $(".js-login-option");
var orderOption = $(".js-order-option");


function grayScale(selected, deselect) {
    deselect.addClass('grayscale');
    selected.removeClass('grayscale');
}

function hideOption(selected, deselect) {
    selected.removeClass('hide');
    deselect.addClass('hide');
};

returningCustomerImage.on('click', function() {
    button2.removeAttr('checked');
    button1.attr('checked', 'true')
    grayScale(returningCustomerImage, checkOrderImage);
    hideOption(loginOption, orderOption);
})

checkOrderImage.on('click', function() {
    button1.removeAttr('checked');
    button2.attr('checked', 'true')
    grayScale(checkOrderImage, returningCustomerImage);
    hideOption(orderOption, loginOption);
})

grayScale(returningCustomerImage, checkOrderImage);
hideOption(loginOption, orderOption);
