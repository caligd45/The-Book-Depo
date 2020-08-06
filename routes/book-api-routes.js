var { Book }= require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  module.exports = function(app) {
    // Get all books
    app.get("/api/all", function(req, res) {
      Book.findAll({}).then(function(results) {
        res.json(results);
      });
    });
  
    // Get a specific book
    app.get("/api/:book", function(req, res) {
      Book.findAll({
        where: {
          title: req.params.book
        }
      }).then(function(results) {
        res.json(results);
      });
    });
  
    // Get all books of a specific genre
    app.get("/api/genre/:genre", function(req, res) {
      Book.findAll({
        where: {
          genre: req.params.genre
        }
      }).then(function(results) {
        res.json(results);
      });
    });
  
    // Get all books from a specific author
    app.get("/api/author/:author", function(req, res) {
      Book.findAll({
        where: {
          author: req.params.author
        }
      }).then(function(results) {
        res.json(results);
      });
    });  
  }
};
