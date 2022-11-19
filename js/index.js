// =======> JQuery JS
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $("header").css("background", "#0d0d0d");
        }
        else {
            $("header").css("background", "unset");
        }
    })
})

// =======> AOS
AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
});

// =======> Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 400,
    loop: true,
    slidesPerView: 'auto',

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 80
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 80
        }
    }
});

const swiperTesti = new Swiper('.swiper-testi', {
    direction: 'horizontal',
    speed: 400,
    loop: true,
    slidesPerView: 'auto',

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 60
        }
    }
});