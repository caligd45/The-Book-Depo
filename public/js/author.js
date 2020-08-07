
$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#author-name");
  var authorList = $("tbody");
  var authorContainer = $(".author-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#author-form", handleAuthorFormSubmit);
  //$(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the initial list of Authors
  getAuthors();

  //When the user searches for an Author it creates a data row for that search request
  
  function createAuthorRow(authorData) {
    var newTr = $("<tr>");
    newTr.data("author", authorData);
    newTr.append("<td>" + authorData.name + "</td>");
    if (authorData.Book) {
      newTr.append("<td> " + authorData.Book.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }

    // This links to go back to the homepage
    newTr.append("<td><a style='cursor:pointer;color:blue' class='home'>Home</a></td>");
    
    return newTr;
  }

    // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/authors", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList.children().not(":last").remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }
});
