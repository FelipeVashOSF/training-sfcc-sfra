'use strict';

var processInclude = require('./util');
var textArea = $('.js-comment-textarea');
var maxLength = textArea.attr('maxlength');

function checkMaxLength() {
    var value = maxLength - textArea.val().length;
    $('.js-comment-value').text(value);
}

textArea.on('keyup', checkMaxLength);

checkMaxLength();
