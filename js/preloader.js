const preloaderContainer = document.querySelector("#preloader-container");
const mainContent = document.querySelector("#main-content");

const animatePreloader = () => {
  const preloaderElements = document.querySelectorAll(".preloader-element");
  const colors = ["#333", "#ff0000", "#00ff00", "#0000ff", "#ffff00"];
  let currentIndex = 0;

  const changeColor = () => {
    preloaderElements.forEach((item, index) => {
      item.style.backgroundColor =
        colors[(index + currentIndex) % colors.length];
    });
    currentIndex++;
  };

  const animationInterval = setInterval(changeColor, 1000);

  setTimeout(() => {
    clearInterval(animationInterval);

    preloaderContainer.style.display = "none";
    mainContent.style.display = "block";
  }, 5000);
};

document.addEventListener("DOMContentLoaded", () => {
  mainContent.style.display = "none";

  for (let i = 0; i < 5; i++) {
    const preloaderElement = document.createElement("div");
    preloaderElement.classList.add("preloader-element");
    preloaderContainer.appendChild(preloaderElement);
  }

  animatePreloader();
});
