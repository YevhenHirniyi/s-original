$(function () {
    $('.slider__items').slick({
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow:'<div class="arrow--flex-end"><div class="arrow-right"><p class="arrow-right--text">Жіночий одяг</p><img src="images/arrow-right.svg" alt=""></div></div>',
        nextArrow:'<div class="container-arrow arrow--flex-start"><img class="arrow-left" src="images/arrow-left.svg" alt=""></div>',
    });
})