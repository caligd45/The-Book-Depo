var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html as a starting page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // view route leads to the view.html but with the requested search data
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // book route loads book.html, that shows the book data that was searched
  app.get("/book", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/book.html"));
  });

  // author route loads author-manager.html, that shows the author data that was searched
  app.get("/author", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

};
