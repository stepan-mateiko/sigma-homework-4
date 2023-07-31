# sigma-homework-4

1. My body tag is divided into main-content and preloader div. It was done for preloading animation, that we see at the beginning. And then main content is displayed.

2. In this application I changed nav menu buttons, according to my structure of project:
   Start - first section;
   Statistics - section done without static image
   Testimonials - section with Swiper
   Subscribe - section with form
   Contact - Footer

3. For API section (Services) I used The Movie DataBase API (https://www.themoviedb.org/?language=uk)
   I got 20 results of upcoming films. I've made copy of results, using JSON Parse JSON Stringify, after that I got
   three filtered arrays - Comedy movies, Drama movies, Horror movies.
   Then, depending on what filter button is active, I render three last movies from each list. Or, if it is active, i render the last one
   movie from each list.
   If there is some error with fetch - it renders error message in this section

4. Testimonial section I've done, using Swiper.js, that I connected in head tag

5. For confirmation message I used "window.close()". I've heard that many students complained it was not working, but in my app, it worked well.
