//Initialization
M.AutoInit();
// Function Calls 
$('select').formSelect();

const bookSearch = () => {

  event.preventDefault();

  // Save the book they typed into the book-search input
  const bookSearched = $(".query").val().trim();
  console.log(bookSearched);

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + bookSearched, function (data) {
    console.log(data);


  });
};

$("#submitBtn").on("click", bookSearch);



