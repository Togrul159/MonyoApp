// $(function() {
//     // Owl Carousel
//     var owl = $(".owl-carousel");
//     owl.owlCarousel({
//         items: 2,
//         margin: 10,
//         loop: true,
//         nav: true,
//         responsive: {
//             0: {
//                 option1: value,
//                 option2: value,
//                 ...
//             },
//             480: {
//                 option1: value,
//                 option2: value,
//                 ...
//             },
//             768: {
//                 option1: value,
//                 option2: value,
//                 ...
//             }
//         },
//     });
// });
$(document).ready(function() {
    $('#OwlDemo').owlCarousel({
        loop: true,
        infinite: true,
        nav: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.2,
                nav: false,
                dots: false
            },
            600: {
                items: 2.5,
                nav: false,
                dots: false

            },
            1000: {
                items: 3,
                nav: false,
                loop: false,
                dots: false

            }
        }
    });
    $('#OwlDemo2').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.8,
                loop: true,
                nav: false,
                dots: false
            },
            600: {
                items: 2.5,
                nav: false,
                dots: false

            },
            1000: {
                items: 4,
                nav: false,
                loop: false,
                dots: false

            }
        }
    });
    $('#OwlDemo3').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.3,
                nav: false,
                dots: false
            },
            600: {
                items: 3,
                nav: false,
                dots: false

            },
            1000: {
                items: 3,
                nav: false,
                loop: false,
                dots: false

            }
        }
    });
});