// import './assets/css/main.css' //тестирование webpack
// import mainImg from './assets/img/base_copy_8_50454 (1).png';

$(document).ready(function () {
    $('.accordion-item__trigger').click(function () {
        $(this).next('.accordion-item__content').slideToggle();
    })
});


function backToTop() {
  let button = $(".back-to-top");

  $(window).on("scroll", () => {
    if ($(this).scrollTop() >= 400) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on("click", (e) => {
    e.preventDefault();
    $("html").animate({ scrollTop: 500 }, 1000);
  });
}

backToTop();
