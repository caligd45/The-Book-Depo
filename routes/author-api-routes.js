var { Author, Book } = require("../models");

// Routes
// =============================================================
module.exports = (app) => {
  app.get("/api/author", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    Author.findAll({
      include: [Book]
    }).then((Author) => {
      res.json(Author);
    }).catch((err) => {
      res.json(err)
      });
  });

  // app.get("/api/authors/:id", (req, res) => {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   Author.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [Book]
  //   }).then((Author) => {
  //     res.json(Author);
  //   }).catch((err) => {
  //     res.json(err);
  //     });
  // });
};