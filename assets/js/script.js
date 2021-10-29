var extraImgEl = document.querySelector("#extra-img");
var inputEl = document.querySelector("#movie-title");
var searchButtonEl = document.querySelector("#searchbutton");
var posterEl = document.querySelector("#poster");
var userReviewEl = document.querySelector("#plot");
var criticsReviewEl = document.querySelector("#critic-ratings");

var searchMovies = [];
   
searchButtonEl.addEventListener("click", function(event){
   event.preventDefault();
   fetch('https://api.themoviedb.org/3/search/movie?api_key=74dead5790eecd4db2f834fbf9d66bf7&query=' + inputEl.value)

   .then(function(response){
      response.json()
      .then(function(data){
   
         console.log(data);
         var movies = inputEl.value.trim();
         var posterImgEl = document.createElement("img");
         var h2El = document.createElement("h2");
         var reviewsEl = document.createElement("img");
         
   var movies = inputEl.value.trim();
   console.log(movies);
   var h2El = document.createElement("h2");
   var posterImgEl = document.createElement("img");
   var reviewsEl = document.createElement("img");
   var ratingEl = document.createElement("p")
   posterImgEl.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path);
   reviewsEl.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[0].backdrop_path);
   h2El.textContent = movies;
   userReviewEl.textContent = data.results[0].overview;
  
   posterEl.append(h2El);
   posterEl.append(posterImgEl);
   criticsReviewEl.appendChild(ratingEl);
   
   });
});
fetch("http://www.omdbapi.com/?t=" + inputEl.value + "&apikey=f46c4fdd")
.then(function(response){
   response.json()
   .then(function(data){
        console.log(data);
      
      
      var ratingEl = document.createElement("p")
         criticsReviewEl.textContent = "ImdbRating: " + data.imdbRating;
         ratingEl.textContent = "Internet Movie Database: " + data.Ratings[0].Value;
         criticsReviewEl.appendChild(ratingEl);
        
   })
   saveMovies();
})

function saveMovies(){
   var movies = inputEl.value.trim();
   if(searchMovies.indexOf(movies)===-1){
      searchMovies.push(movies);
      localStorage.setItem("title", JSON.stringify(searchMovies));
   }
   return searchMovies.value;
}
function loadMovies(){
   posterEl.innerHTML = "";
   var loadMovies =   JSON.parse(localStorage.getItem("title")) || [];
   
   for (let i = 0; i < loadMovies.length; i++) {
       
   var movies = loadMovies[i];

   
   searchButtonEl.addEventListener("click", function(event){
       posterEl.innerHTML = "";
       $(loadMovies);
       event.preventDefault();
       
   })

   }
}
loadMovies();

}); 







