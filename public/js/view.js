//Initialization
M.AutoInit();
// Function Calls 
$('select').formSelect();

 $("#submitBtn").on("click", (event)=>{
   event.preventDefault();
    const bookSearched = $(".query").val().trim();
    $.get("/api/" + bookSearched, function (data) {
      console.log(data);
      renderBook(data);
 })
 })

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