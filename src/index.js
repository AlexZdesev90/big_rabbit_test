// import './assets/css/main.css'
// import mainImg from './assets/img/base_copy_8_50454 (1).png';


//js
document.querySelectorAll('.accordion-item__trigger').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion-item--active')) {
            parent.classList.remove('accordion-item--active');
        } else {
            document.querySelectorAll('.accordion-item').forEach((child) => child.classList.remove('accordion-item--active'))

            parent.classList.add('accordion-item--active')
        }

        
    })
})

//jquery

// $(document).ready(function () {
//     $('.accordion-item__trigger').click(function () {
//         const parent = $(this).parent()

//         if (parent.hasClass('accordion-item--active')) {
//             parent.removeClass('accordion-item--active');
//         } else {
//             $('.accordion-item').removeClass('accordion-item--active')
//             parent.addClass('accordion-item--active')
//         }
//     });
// });

function backToTop(){
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 200) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000)
    })
}

backToTop()

