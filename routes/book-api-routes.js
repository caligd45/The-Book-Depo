var { Book }= require("../models");

// Routes
// =============================================================
  module.exports = (app) => {
    // Get all books
    app.get("/api/all", (req, res) => {
      Book.findAll({}).then((results) => {
        res.json(results);
      }).catch((err) => {
        res.json(err);
        });
    });
  
    // Get a specific book
    app.get("/api/:book", (req, res) => {
      console.log("hit")
      Book.findAll({
        where: {
          title: req.params.book
        }
      }).then((results) => {
        res.json(results);
      }).catch((err) => {
        res.json(err);
        });
    });
  
    // Get all books of a specific genre
    app.get("/api/genre/:genre", (req, res)  => {
      Book.findAll({
        where: {
          genre: req.params.genre
        }
      }).then( (results) => {
        res.json(results);
      }).catch((err) => {
        res.json(err);
        });
    });
  
    // Get all books from a specific author
    app.get("/api/author/:author", (req, res) => {
      Book.findAll({
        where: {
          author: req.params.author
        }
      }).then( (results)  => {
        res.json(results);
      }).catch((err) => {
        res.json(err);
        });
    });  

    app.post("/api/booklist", function (req,res) {

        BookList.create(req.body)
        .then(book => {
          res.json(book)
        })

    })
  };
