let timer;

const resetTimer = () => {
  clearTimeout(timer);
  timer = setTimeout(showConfirmation, 60000);
};

const closePage = () => {
  window.close();
};

const showConfirmation = () => {
  if (confirm("Are you still here?")) {
    resetTimer();
  } else {
    closePage();
  }
};

document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);

resetTimer();
