var inputEl = document.querySelector("#movie-title");
var searcButtonEl = document.querySelector("#searchbutton");
var posterEl = document.querySelector("#poster");
var userReviewEl = document.querySelector("#user-reviews");
var criticsReviewEl = document.querySelector("#critics-reviews");
var movies = inputEl.value;

fetch(`https://api.themoviedb.org/3/movie/550?movies=` + inputEl.value + `&api_key=74dead5790eecd4db2f834fbf9d66bf7`)
.then(function(response){
   response.json()
   .then(function(data){

      console.log(data);
      var movies = inputEl.value;
      
      var posterImgEl = document.createElement("img");
      var h2El = document.createElement("h2");
      posterImgEl.setAttribute("src","https://image.tmdb.org/t/p/original/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg");
      h2El.textContent = data.title;
      userReviewEl.textContent = data.overview;
      criticsReviewEl.textContent = " Status: " + data.status  + "Genres: " + data.genres[0].name +  " Popularity: " + data.popularity;

      posterEl.append(h2El);
      posterEl.append(posterImgEl);
   });

   });

searcButtonEl.addEventListener = function(event){
   event.preventDefault();
   var movies = inputEl.value;
   
};
