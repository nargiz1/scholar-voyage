const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 1000
    },
    slidesPerView: 2,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
  });