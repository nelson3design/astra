


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
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,

        },

        480: {
            slidesPerView: 1,

        },

        640: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 4,

        },
        1280: {
            slidesPerView: 4,

        }
    }
});