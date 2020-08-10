//Initialization
M.AutoInit();
// Function Calls 
$('select').formSelect();

const bookSearch = () => {

    event.preventDefault();
    console.log("clicked");

    // Save the book they typed into the book-search input
    const bookSearched = $(".query").val().trim();
    console.log(bookSearched);

    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/" + bookSearched, function (data) {
      console.log(data);

      // Call our renderBooks function to add our books to the page
      renderBook(data);

    });

  };

  $("#submitBtn").on("click", bookSearch);



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