module.exports = function() {
    $('.clickCode').on('click', function() {
        $('.hidden-promo').toggle();
        $('.clickCode').toggle();
    });
};