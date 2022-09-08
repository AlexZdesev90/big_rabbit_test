// import './assets/css/main.css' //тестирование webpack
// import mainImg from './assets/img/base_copy_8_50454 (1).png';

document.querySelectorAll(".accordion-item__trigger").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (parent.classList.contains("accordion-item--active")) {
      parent.classList.remove("accordion-item--active");
    } else {
      document
        .querySelectorAll(".accordion-item")
        .forEach((child) => child.classList.remove("accordion-item--active"));
      parent.classList.add("accordion-item--active");
    }
  });
});

function backToTop() {
  let button = $(".back-to-top");

  $(window).on("scroll", () => {
    if ($(this).scrollTop() >= 200) {
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
