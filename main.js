


var swiper = new Swiper(".astraSwipper", {
 
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});