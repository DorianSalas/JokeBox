// Here we'll do the actual carousel action
$(document).ready(function () {

    const carousel = $('#carouselContainer');

    carousel.slick({
        vertical: true,
        draggable: false,
        arrows: false,
        dots: true,
        appendDots: $('#carouselDots')
    });

    $('#carouselArrowUp').click(() => {
        carousel.slick('slickPrev');
    })

    $('#carouselArrowDown').click(()=> {
        carousel.slick('slickNext');
    })



});