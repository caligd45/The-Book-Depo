const bookSearched = $("#search-btn").val().trim();


//Functions
function initializeRows() {
  $("#bookList").empty();
  var rowsToAdd = [];
  for (var i = 0; i < books.length; i++) {
    rowsToAdd.push(createNewRow(books[i]));
  }
  $("#bookList").prepend(rowsToAdd);
}

const bookList = () => {
  $(".topFive").hide();
  $("#bookList").attr("style","display:block");
  
    // Make an AJAX get request to our api, including the user's book in the url
//   $.get("/api/" + bookSearched, function (data) {
//     console.log(data);

//     books = data
//     initializeRows();

// });
}

const onLoad = () => {
  $("#bookList").hide();
  
}

//Function calls
onLoad();
$("#bookListLink").on("click", bookList);


