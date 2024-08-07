import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {

        const swiper = new Swiper('.swiper-test', {
            // Optional parameters
            slidesPerView: 3,
            spaceBetween: 70,

            centeredSlides: true,
            centeredSlidesBounds: false,

            breakpoints: {
                270: {
                    centeredSlides: true,
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                415: {
                    centeredSlides: true,
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                480: {
                    centeredSlides: true,
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                570: {
                    centeredSlides: true,
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1000: {
                    centeredSlides: true,
                    slidesPerView: 3,
                    spaceBetween: 37,
                },
                1170: {
                    centeredSlides: true,
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1350: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1590: {
                    centeredSlides: true,
                    centeredSlidesBounds: false,
                    slidesPerView: 3,
                    spaceBetween: 70,
                },
                1700: {
                    slidesPerView: 3,
                    spaceBetween: 70,

                    centeredSlides: true,
                    centeredSlidesBounds: true,
                }
            },

            direction: 'horizontal',
            loop: true,

            pagination: {
                el: '.swiper-pagination',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    }, 0);
});


