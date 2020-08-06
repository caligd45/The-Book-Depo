//* Change this code to get books

$(document).ready(function() {
  /* global moment */

  // blogContainer holds all of our posts
  var bookContainer = $(".book-container");
    
  // Variable to hold our book
  var book;

  // The code below handles the case where we want to get books for a specific author
  // Looks for a query param in the url for author_id
  var url = window.location.search;
  var authorId;
  if (url.indexOf("?author_id=") !== -1) {
    authorId = url.split("=")[1];
    getBook(authorId);
  }
  // If there's no authorId we just get all posts as usual
  else {
    getBook();
  }

  
  // This function grabs books from the database and updates the view
  function getBook(author) {
    authorId = author || "";
    if (authorId) {
      authorId = "/?author_id=" + authorId;
    }
    $.get("/api/book" + authorId, function(data) {
      console.log("Book", data);
      book = data;
      if (!book || !book.length) {
        displayEmpty(author);
      }
      else {
        initializeRows();
      }
    });
  }
  // InitializeRows handles appending all of our constructed post HTML inside bookContainer
  function initializeRows() {
    bookContainer.empty();
    var bookToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      bookToAdd.push(createNewRow(posts[i]));
    }
    bookContainer.append(bookToAdd);
  }

  //* Alter this to create new book card ?
  // This function constructs a book's HTML
  function createNewRow(post) {
    var newBookCard = $("<div>");
    newBookCard.addClass("card");
    var newBookCardHeading = $("<div>");
    newBookCardHeading.addClass("card-header");
    var newBookTitle = $("<h2>");
    var newBookAuthor = $("<h5>");
    newBookAuthor.text("Written by: " + book.Author.name);
    // newBookAuthor.css({
    //   float: "right",
    //   color: "blue",
    //   "margin-top":
    //   "-10px"
    // });
    var newBookCardBody = $("<div>");
    newBookCardBody.addClass("card-body");
    var newBookBody = $("<p>");
    newBookTitle.text(book.title + " ");
    newBookBody.text(book.body);
    newBookTitle.append(newPostDate);
        newBookCardHeading.append(newBookTitle);
    newBookCardHeading.append(newBookAuthor);
    newBookCardBody.append(newBookBody);
    newBookCard.append(newBookCardHeading);
    newBookCard.append(newBookCardBody);
    newBookCard.data("book", book);
    return newBookCard;
  }

   
  // This function displays a message when there are no books
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Author #" + id;
    }
    bookContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No books found" + partial + ", navigate <a href='/view" + query +"'>here</a> in order to get started.");
    bookContainer.append(messageH2);
  }

});
