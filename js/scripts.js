$(function() {
  $("#favorite-things-form").submit(function(event) {

    var favoriteThingsArray = [];

    var movieInput = $("#movie-input").val();
    var bandInput = $("#band-input").val();
    var bookInput = $("#book-input").val();
    var instrumentInput = $("#instrument-input").val();

    function addFavoriteThings() {
      favoriteThingsArray.push(movieInput, bandInput, bookInput, instrumentInput);
      console.log(favoriteThingsArray);
      return favoriteThingsArray;
    }

    function addToNewArray() {
      var newArray = [];
      var secondFavoriteItem = favoriteThingsArray[1];
      var firstFavoriteItem = favoriteThingsArray[0];
      var thirdFavoriteItem = favoriteThingsArray[2];

      newArray.push(secondFavoriteItem, firstFavoriteItem, thirdFavoriteItem);
      console.log(newArray);
      return newArray;
    }

    addFavoriteThings();
    addToNewArray();

    $("#favorite-things-list").append("<li>" + favoriteThingsArray[0] + "</li>", "<li>" + favoriteThingsArray[1] + "</li>", "<li>" + favoriteThingsArray[2] + "</li>");

    event.preventDefault();
  });
});
