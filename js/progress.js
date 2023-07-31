document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".header__progress");
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  window.addEventListener("scroll", () => {
    const scrollPercentage = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
  });
});
