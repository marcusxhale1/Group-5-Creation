var extraImgEl = document.querySelector("#extra-img");
var inputEl = document.querySelector("#movie-title");
var searcButtonEl = document.querySelector("#searchbutton");
var posterEl = document.querySelector("#poster");
var userReviewEl = document.querySelector("#plot");
var criticsReviewEl = document.querySelector("#critic-ratings");


//fetch('https://api.themoviedb.org/3/search/movie?api_key=74dead5790eecd4db2f834fbf9d66bf7&query=' + inputEl.value)



//fetch(`https://api.themoviedb.org/3/movie/551?movies=` + inputEl.value + `&poster_path&title&imdb_id&api_key=74dead5790eecd4db2f834fbf9d66bf7`)
// .then(function(response){
//    response.json()
//    .then(function(data){

//       console.log(data);
//       var movies = inputEl.value.trim();
//       var posterImgEl = document.createElement("img");
//       var h2El = document.createElement("h2");
//       var reviewsEl = document.createElement("img");
//       // posterImgEl.setAttribute("src","https://image.tmdb.org/t/p/original/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg");
//       h2El.textContent = "";
//       posterImgEl.textContent = "";
//       reviewsEl.textContent = "";
//       userReviewEl.textContent = "";
//       criticsReviewEl.textContent = "";

      //posterEl.append(h2El);
      //posterEl.append(posterImgEl);
   
searcButtonEl.addEventListener("click", function(event){
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
         // posterImgEl.setAttribute("src","https://image.tmdb.org/t/p/original/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg");
         h2El.textContent = "";
         posterImgEl.textContent = "";
         reviewsEl.textContent = "";
         userReviewEl.textContent = "";
         criticsReviewEl.textContent = "";
   
         //posterEl.append(h2El);
         //posterEl.append(posterImgEl);
   var idEl = data.results[0].id
   var movies = inputEl.value.trim();
   console.log(movies);
   var h2El = document.createElement("h2");
   var posterImgEl = document.createElement("img");
   var reviewsEl = document.createElement("img");
   //var overviewEl = document.createElement("p");
   posterImgEl.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path);
   reviewsEl.setAttribute("src", "https://image.tmdb.org/t/p/original/" + data.results[0].backdrop_path);
   h2El.textContent = movies;
   //overviewEl.textContent = data.results[0].poster_path //data.overview; 
   userReviewEl.textContent = data.results[0].overview;
   criticsReviewEl.textContent = "Released date: "  + data.results[0].release_date +  " Popularity: " + data.results[0].popularity + " Votes Average: " + data.results[0].vote_average + " Vote Count: " + data.results[0].vote_count;
   posterEl.append(h2El);
   posterEl.append(posterImgEl);
   extraImgEl.append(reviewsEl);
   
   
});
   });
});










