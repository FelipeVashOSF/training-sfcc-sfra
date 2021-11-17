require("../thirdyParty/slick-1.8.1/slick/slick");

$(document).ready(function(){
    $('.js-first-carousel').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 1
    });

    $('.js-second-carousel').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
              }
            }
          ]
    });
    
    $('.item').css("display", "flex");
});
