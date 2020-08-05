module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Book model a name of type STRING
    name: DataTypes.STRING
  });

  Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Author;
};


//* Exporting the Author function, Author refers to who wrote the Post, not who wrote the book. Will need to change that path
//* Create tables called Books, Author, 
//* Books table has genre column, title, author
//* Author table has name