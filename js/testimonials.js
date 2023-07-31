const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
  slidesPerGroup: 2,
});
