$(document).ready(function () {
  var swiper1 = new Swiper(".swiper1", {

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
  // $('.swiper1').on('mouseenter', function() {
  //   swiper1.autoplay.stop();
  // }).on('mouseleave', function() {
  //   swiper1.autoplay.start();
  // });
  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
  });

  var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
  });
});