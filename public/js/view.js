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

function saveBook (event) {
  event.preventDefault();
  const bookToSave = $(this).parents(".card").data();

  $.post("/api/booklist/" + bookToSave);
  console.log("book saved");
  
}

const bookList = () => {
  $(".topFive").hide();
  $("#booklist").show();

    // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + bookSearched, function (data) {
    console.log(data);

    books = data
    initializeRows();
    //$("#booklist").show();

});
}

const onLoad = () => {
  $("#bookList").hide();
  autoComplete();
}

//Function calls
onLoad();
$(".saveBook").on("click", saveBook);
$("#bookListLink").on("click", bookList);


