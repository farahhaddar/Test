$(document).ready(function () {
    $('.slickSlider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        prevArrow: "<span class='prev_arrow'><i class='fas fa-angle-left'></i></span>",
        nextArrow: "<span class='next_arrow'><i class='fas fa-angle-right'></i></span>",
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '80px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '80px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});