$(document).ready(function () {
  //Variables
  // var instance = M.FormSelect.getInstance(elem);

  // Function Calls 
  $('select').formSelect();
  // instance.getSelectedValues();

  if ($(".category") === "Book") {
    bookSearch();
  } else if ($(".category") === "Author") {
    authorSearch();
  } else {
    genreSearch();
  }

  // Functions 
    //search by book
  const bookSearch = () => {

    $("#search-btn").on("submit", function (event) {
      event.preventDefault();

      // Save the book they typed into the book-search input
      const bookSearched = $(".query").val().trim();

      // Make an AJAX get request to our api, including the user's book in the url
      $.get("/api/" + bookSearched, function (data) {

        console.log(data);
        // Call our renderBooks function to add our books to the page
        renderBook(data);

      });

    });
  }

  // Search by author
  const authorSearch = () => {
    $("#search-btn").on("submit", function () {

      // Save the author they typed into the author-search input
      const authorSearched = $("#author-search").val().trim();

      // Make an AJAX get request to our api, including the user's author in the url
      $.get("/api/author/" + authorSearched, function (data) {

        // Log the data to the console
        console.log(data);
        // Call our renderBooks function to add our books to the page
        renderBook(data);

      });

    });

  }

  // Search by genre
  const genreSearch = () => {
    $("#genre-search-btn").on("submit", function () {

      // Save the book they typed into the genre-search input
      const genreSearched = $("#genre-search").val().trim();

      // Make an AJAX get request to our api, including the user's genre in the url
      $.get("/api/genre/" + genreSearched, function (data) {

        console.log(data);
        // Call our renderBooks function to add our books to the page
        renderBook(data);

      });

    });

  }

  function renderBook(data) {
    if (data.length !== 0) {

      $("#stats").empty();
      $("#stats").show();

      for (let i = 0; i < data.length; i++) {

        const div = $("<div>");

        div.append("<h2>" + data[i].title + "</h2>");
        div.append("<p>Author: " + data[i].author + "</p>");
        div.append("<p>Genre: " + data[i].genre + "</p>");

        $("#stats").append(div);

      }
    }
  };
})