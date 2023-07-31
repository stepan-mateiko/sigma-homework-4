let itemsList = document.querySelector("#items-list");
const filterAllButton = document.querySelector("#filter-all");
const filterComedyButton = document.querySelector("#filter-comedy");
const filterDramaButton = document.querySelector("#filter-drama");
const filterHorrorButton = document.querySelector("#filter-horror");
const buttons = document.querySelectorAll(".services__btn");

const apiKey = "614c22e977107c144c20d638028ab956";
const apiUrl = "https://api.themoviedb.org/3/movie/upcoming";

let activeFilter = "all";
filterAllButton.classList.add("services__active-btn");

const fetchMovies = async () => {
  try {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
    const data = await response.json();

    const allMovies = JSON.parse(JSON.stringify(data.results));
    const comedyMovies = allMovies.filter((item) =>
      item.genre_ids.includes(35)
    );
    const dramaMovies = allMovies.filter((item) => item.genre_ids.includes(18));
    const horrorMovies = allMovies.filter((item) =>
      item.genre_ids.includes(27)
    );

    const renderMovies = () => {
      let moviesToRender = [];

      if (activeFilter === "all") {
        moviesToRender.push(...comedyMovies.slice(-1));
        moviesToRender.push(...dramaMovies.slice(-1));
        moviesToRender.push(...horrorMovies.slice(-1));
      } else if (activeFilter === "comedy") {
        moviesToRender = comedyMovies.slice(-3);
      } else if (activeFilter === "drama") {
        moviesToRender = dramaMovies.slice(-3);
      } else if (activeFilter === "horror") {
        moviesToRender = horrorMovies.slice(-3);
      }

      itemsList.innerHTML = "";

      moviesToRender.forEach((movie) => {
        const movieElement = document.createElement("div");
        const movieTitle = document.createElement("h4");
        const movieImage = document.createElement("img");
        const movieDate = document.createElement("p");
        const movieDescription = document.createElement("p");
        const movieRate = document.createElement("span");

        movieElement.classList.add("services__card");
        movieTitle.classList.add("services__card-title");
        movieImage.classList.add("services__card-img");
        movieDate.classList.add("services__card-date");
        movieDescription.classList.add("services__card-text");
        movieRate.classList.add("services__card-rate");

        movieTitle.textContent = movie.title;
        movieImage.src = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
        movieImage.alt = `${movie.title} poster`;
        movieDate.textContent = movie.release_date;
        movieDescription.textContent = movie.overview;
        movieRate.textContent = movie.vote_average;

        movieElement.appendChild(movieTitle);
        movieElement.appendChild(movieImage);
        movieElement.appendChild(movieDate);
        movieElement.appendChild(movieRate);
        movieElement.appendChild(movieDescription);

        itemsList.appendChild(movieElement);
      });
    };

    filterAllButton.addEventListener("click", () => {
      buttons.forEach((button) =>
        button.classList.remove("services__active-btn")
      );
      activeFilter = "all";
      filterAllButton.classList.add("services__active-btn");
      renderMovies();
    });

    filterComedyButton.addEventListener("click", () => {
      buttons.forEach((button) =>
        button.classList.remove("services__active-btn")
      );
      activeFilter = "comedy";
      filterComedyButton.classList.add("services__active-btn");
      renderMovies();
    });

    filterDramaButton.addEventListener("click", () => {
      buttons.forEach((button) =>
        button.classList.remove("services__active-btn")
      );
      activeFilter = "drama";
      filterDramaButton.classList.add("services__active-btn");
      renderMovies();
    });

    filterHorrorButton.addEventListener("click", () => {
      buttons.forEach((button) =>
        button.classList.remove("services__active-btn")
      );
      activeFilter = "horror";
      filterHorrorButton.classList.add("services__active-btn");
      renderMovies();
    });

    renderMovies();
  } catch (error) {
    const errorMessage = document.createElement("p");
    const errorTitle = document.createElement("h3");
    const errorText = document.createElement("p");

    errorMessage.classList.add("error-message");

    errorTitle.textContent = `Sorry, some error occured:`;
    errorText.textContent = error;

    errorMessage.appendChild(errorTitle);
    errorMessage.appendChild(errorText);
    itemsList.appendChild(errorMessage);
  }
};

fetchMovies();
