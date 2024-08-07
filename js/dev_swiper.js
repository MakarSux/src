import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {

        // const swiper = new Swiper('.swiper', {
        //     speed: 400,
        //     spaceBetween: 100,
        // });
        // const swiper = document.querySelector('.swiper').swiper
        // // Now you can use all slider methods like
        // swiper.slideNext();

        const swiper = new Swiper('.swiper-test', {
            // Optional parameters
            slidesPerView: 3,
            spaceBetween: 70,

            centeredSlides: true,
            centeredSlidesBounds: true,


            // breakpoints: {
            //     // when window width is >= 320px
            //     320: {
            //       slidesPerView: 2,
            //       spaceBetween: 20
            //     },
            //     // when window width is >= 480px
            //     480: {
            //       slidesPerView: 3,
            //       spaceBetween: 30
            //     },
            //     // when window width is >= 640px
            //     640: {
            //       slidesPerView: 4,
            //       spaceBetween: 40
            //     }
            //   }

            direction: 'horizontal',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        });

    }, 0);
});


