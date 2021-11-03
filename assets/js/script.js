//global variables//
var inputEl = document.querySelector("#movie-title");
var searchButtonEl = document.querySelector("#searchbutton");
var posterEl = document.querySelector("#poster");
var userReviewEl = document.querySelector("#plot");
var criticsReviewEl = document.querySelector
("#critic-ratings");
var dropdownEl = document.querySelector("#dropdown");
var searchMovies = [];

//search bar function//
//what happens when search is clicked//
searchButtonEl.addEventListener("click", function(event){
   event.preventDefault();
   var movies = inputEl.value.trim(); 
   posterEl.textContent = "";
   userReviewEl.textContent = "";
   criticsReviewEl.textContent = "";
   saveMovies();
   title(movies);
   ratings(movies);

});

//API fetch function for poster and plot from TMDB//
function title(movies){
   fetch('https://api.themoviedb.org/3/search/movie?api_key=74dead5790eecd4db2f834fbf9d66bf7&query=' + movies)

   .then(function(response){
      response.json()
      .then(function(data){
         //dynamic html elements created i.e. poster, plot..//
         console.log(data);
         //getting the value of the user specified movie title//
   var movies = inputEl.value.trim();
   var titleEl = document.createElement("h2")  
   var posterImgEl = document.createElement("img");
   var ratingEl = document.createElement("p")
   posterImgEl.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path);
   titleEl.textContent = data.results[0].title;
   //pathing from data for display//
   userReviewEl.textContent = data.results[0].overview;
   posterEl.append(titleEl)
   posterEl.append(posterImgEl);
   criticsReviewEl.appendChild(ratingEl);
   
   });
});
}
//API fetch function for ratings from OMDB//
function ratings(movies){
fetch("https://www.omdbapi.com/?t=" + movies + "&apikey=f46c4fdd")
.then(function(response){
   response.json()
   .then(function(data){
        console.log(data);
      //var titleEl = document.createElement("h2");
      //dynamic html element created for ratings//
      var ratingEl = document.createElement("p")
      //pathing from data for display//
      criticsReviewEl.textContent = "ImdbRating: " + data.imdbRating;
      ratingEl.textContent = "Internet Movie Database: " + data.Ratings[0].Value;
      //titleEl.textContent = data.Title;
      criticsReviewEl.appendChild(ratingEl);
        
   });
});
}
//function for saving, displaying, and re-displaying old searches//
function saveMovies(){
   var movies = inputEl.value.trim();
   if(searchMovies.indexOf(movies)===-1){
      searchMovies.push(movies);
      //sets the movie title into local storage//
      localStorage.setItem("title", JSON.stringify(searchMovies));
   }
   loadMovies();
   return searchMovies.value;
}
//function for retrieving and displaying saves searches from local storage//
function loadMovies(){
   dropdownEl.innerHTML = []; //retrieves search from local storage//
  var loadMovies =   JSON.parse(localStorage.getItem("title")) || [];
   
   for (let i = 0; i < loadMovies.length; i++) {
       var movietitle = loadMovies[i];
   
   
    //creates a listed item that displays the saved search title//
    var moviesButtonEl = document.createElement("li");
     moviesButtonEl.setAttribute("value", loadMovies[i]);
     moviesButtonEl.textContent =  movietitle;
     moviesButtonEl.className = "list-item";
//an eventlistener that toggles between titles to re-display API pulled data//
     moviesButtonEl.addEventListener("click", function(event){
      event.preventDefault();

       posterEl.innerHTML = "";
       userReviewEl.innerHTML = "";
       criticsReviewEl.innerHTML = "";

       var movies = this.textContent;
       title(movies);
       ratings(movies);
       
   });
   dropdownEl.append(moviesButtonEl);
   }
}
function showHistory() {
   var loadMovies = JSON.parse(localStorage.getItem("title")) || [];
   for (let i = 0; i < loadMovies.length; i++) {
     loadMovies.innerHTML = "li";
     loadMovies.setAttribute("value", loadMovies[i]);
     cityContainerEl.append(loadMovies[i]);
   }//shows movie information from old searches//
   dropdownEl.textContent = loadMovies;
 }
 
 
loadMovies();

//}); 







