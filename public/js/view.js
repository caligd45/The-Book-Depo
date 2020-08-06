// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var bookSearched = $("#book-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + bookSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBook(data);

  });

});

// When user hits the author-search-btn
$("#author-search-btn").on("click", function() {

  // Save the author they typed into the author-search input
  var authorSearched = $("#author-search").val().trim();

  // Make an AJAX get request to our api, including the user's author in the url
  $.get("/api/author/" + authorSearched, function(data) {

    // Log the data to the console
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBook(data);

  });

});

// When user hits the genre-search-btn
$("#genre-search-btn").on("click", function() {

  // Save the book they typed into the genre-search input
  var genreSearched = $("#genre-search").val().trim();

  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/genre/" + genreSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBook(data);

  });

});

function renderBook(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].title + "</h2>");
      div.append("<p>Author: " + data[i].author + "</p>");
      div.append("<p>Genre: " + data[i].genre + "</p>");
     
      $("#stats").append(div);

    }
  }
}