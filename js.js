const mainBannerSwiper = new Swiper("#mainBannerSection", {
  loop: true,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
});