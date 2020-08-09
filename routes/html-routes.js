var path = require("path");

// Routes
// =============================================================
module.exports = (app) => {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html as a starting page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  // view route leads to the view.html but with the requested search data
  app.get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  // book route loads book.html, that shows the book data that was searched
  app.get("/book", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/book.html"));
  });

  // author route loads author-manager.html, that shows the author data that was searched
  app.get("/author", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/author.html"));
  });

  app.get("/booklist", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/booklist.html"));
  });
  //genre route loads the genre searches
  app.get("/genre", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/genre.html"));
  });
});
}
