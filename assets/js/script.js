var inputEl = document.querySelector("#movies");
var searcButtonEl = document.querySelector("#searchbutton");
var posterEl = document.querySelector("#poster");
var userReviewEl = document.querySelector("#user-reviews");
var criticsReviewEl = document.querySelector("#critics-reviews");
fetch(`https://api.themoviedb.org/3/movie/550?&poster_path&title&api_key=74dead5790eecd4db2f834fbf9d66bf7`)
.then(function(response){
   response.json()
   .then(function(data){
      console.log(data);
      var title = inputEl;
      var posterImgEl = document.createElement("img");
      var h2El = document.createElement("h2");
      
      posterImgEl.setAttribute("src","https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg")
      h2El.textContent = data.title;
      userReviewEl.textContent = data.overview;
      criticsReviewEl.textContent = " Status: " + data.status  + "Genres: " + data.genres[0].name +  " Popularity: " + data.popularity;
      posterEl.append(posterImgEl);
      posterEl.append(h2El);
    
   });
});



searcButtonEl.addEventListener("click", function(event){
   var title = inputEl;
     console.log(title);
});