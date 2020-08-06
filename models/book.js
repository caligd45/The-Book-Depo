module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
      title:DataTypes.STRING,
      author: DataTypes.STRING,
      genre: DataTypes.STRING,
    },
  );

  Book.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Book.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Book;
};


//* Need to change this to associate Books to Author, Post would become Book