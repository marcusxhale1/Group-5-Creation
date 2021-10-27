var inputEl = document.querySelector("#movie-title");
var searcButtonEl = document.querySelector("#searchbutton");
var posterEl = document.querySelector("#poster");
var userReviewEl = document.querySelector("#user-reviews");
var criticsReviewEl = document.querySelector("#critics-reviews");

fetch(`https://api.themoviedb.org/3/movie/550?movies=` + inputEl.value + `&api_key=74dead5790eecd4db2f834fbf9d66bf7`)
.then(function(response){
   response.json()
   .then(function(data){

      console.log(data);
      var movies = inputEl.value.trim();
      
      var posterImgEl = document.createElement("img");
      var h2El = document.createElement("h2");
      // posterImgEl.setAttribute("src","https://image.tmdb.org/t/p/original/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg");
      h2El.textContent = "";
      posterImgEl.textContent = "";
      userReviewEl.textContent = data.overview;
     criticsReviewEl.textContent = " Status: " + data.status  + "Genres: " + data.genres[0].name +  " Popularity: " + data.popularity;

      //posterEl.append(h2El);
      //posterEl.append(posterImgEl);
   });
});

searcButtonEl.addEventListener("click", function(event){
   event.preventDefault();
   
   var movies = inputEl.value.trim();
   console.log(movies);
   var h2El = document.createElement("h2");
   var posterImgEl = document.createElement("img");
   posterImgEl.setAttribute("src","https://image.tmdb.org/t/p/original/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg");
   h2El.textContent = movies;
   posterEl.append(h2El);
   posterEl.append(posterImgEl);
});
