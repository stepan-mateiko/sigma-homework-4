const form = document.querySelector(".subscribe__form");
const subscribeDate = document.querySelector("#subscribe-date");
const greetings = document.querySelector(".subscribe__greet");
const today = new Date();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = document.querySelector("#user-name").value;
  const userSurname = document.querySelector("#user-surname").value;
  const userEmail = document.querySelector("#user-email").value;

  const userData = {
    name: userName,
    surname: userSurname,
    email: userEmail,
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  if (userName === "Sigma") {
    subscribeDate.innerText = `${today.getDate()}.${
      today.getMonth() + 1
    }.${today.getFullYear()}`;
    greetings.style.display = "block";
  }

  setTimeout(function () {
    greetings.style.display = "none";
  }, 10000);

  form.reset();
});
