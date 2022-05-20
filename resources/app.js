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
                items: 4,
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
                items: 1.7,
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
                items: 3,
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
                items: 1.1,
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
    $('#OwlDemo4').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.7,
                nav: false,
                dots: false
            },
            600: {
                items: 3,
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
    $('#OwlDemo5').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.6,
                nav: false,
                dots: false
            },
            600: {
                items: 3,
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
    $('#OwlDemo6').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.6,
                nav: false,
                dots: false
            },
            600: {
                items: 3,
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
    $('#OwlDemo7').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.6,
                nav: false,
                dots: false
            },
            600: {
                items: 3,
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
    $('#OwlDemo8').owlCarousel({
        loop: true,
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
                items: 3,
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
});


// Menu Start
var tabButton = document.getElementsByClassName('tab'),
    tabContent = document.getElementsByClassName('tab-content');
// var tabMenu = document.getElementById('Menu');
tabButton[0].classList.add('active');
tabContent[0].style.display = 'block';

function city(e, x) {
    var i;
    for (i = 0; i < tabButton.length; i++) {
        tabContent[i].style.display = 'none';
        tabButton[i].classList.remove('active');
    }
    document.getElementById(x).style.display = 'block';
    e.currentTarget.classList.add('active');
}
// Menu End





// Search Input Start
$(document).ready(function() {

    var $searchTrigger = $('[data-ic-class="search-trigger"]'),
        $searchInput = $('[data-ic-class="search-input"]'),
        $searchClear = $('[data-ic-class="search-clear"]');

    $searchTrigger.click(function() {

        var $this = $('[data-ic-class="search-trigger"]');
        $this.addClass('active');
        $searchInput.focus();

    });

    $searchInput.blur(function() {

        if ($searchInput.val().length > 0) {

            return false;

        } else {

            $searchTrigger.removeClass('active');

        }

    });

    $searchClear.click(function() {
        $searchInput.val('');
    });

    $searchInput.focus(function() {
        $searchTrigger.addClass('active');
    });

});
// Search Input Start