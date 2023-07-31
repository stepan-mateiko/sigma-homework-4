const isElementInViewport = (item) => {
  const rect = item.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const showWrapper = () => {
  const cards = document.querySelectorAll(".blog__card");
  cards.forEach((item) => {
    item.style.animation = "blog 1s forwards";
  });
};

const hideWrapper = () => {
  const cards = document.querySelectorAll(".blog__card");
  cards.forEach((item) => {
    item.style.removeProperty("animation");
  });
  cards.forEach((item) => {
    item.style.animation = "blog-remove 0.5s forwards";
  });
};

window.addEventListener("scroll", () => {
  const wrapper = document.querySelector(".blog__wrapper");
  if (isElementInViewport(wrapper)) {
    showWrapper();
  } else {
    hideWrapper();
  }
});

const link = document.querySelector('a[href="#blog"]');
link.addEventListener("click", (event) => {
  showWrapper();
});
