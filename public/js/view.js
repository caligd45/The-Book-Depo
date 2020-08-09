
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
    const authorSearched = $(".query").val().trim();

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
  $("#search-btn").on("submit", function () {

    // Save the book they typed into the genre-search input
    const genreSearched = $(".query").val().trim();

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

      const res = data.items[i];

      const bookCard = $("<div class='col s12 m6 l4 xl3' id='bookSearchResults'>")
      const cardDiv = $("<div class='card large'> ");
      const imgDiv = $("<div class= 'card-image'>");
      const bookImage = $(`<img data-code="${res.imageLinks.smallThumbnail}" class='imgOfbook' src=''/>`);
      // const bookTitle = $(`<span class = 'card-title'>${res.volumeInfo.title}<span>`);
      const desDiv = $("<div class='card-content'>");
      const description = $(`<p> ${res.description}</p>`);

      bookCard.append(`<h2 class='card-title'>  ${res.volumeInfo.title} </h2>`);
      bookCard.append(`<p>Author: ${res.volumeInfo.authors}</p>`);
      // bookCard.append(`<p>Genre: ${res.genre}</p>`);

      imgDiv.append(bookImage);
      desDiv.append(description);
      cardDiv.append(imgDiv, desDiv);
      BookCard.append(cardDiv);

      $("#stats").append(bookCard);

    }
  }
};