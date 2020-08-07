module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
      title:DataTypes.STRING,
      author: DataTypes.STRING,
      genre: DataTypes.STRING,
    },
  );

  Book.associate = function(models) {
    // We're saying that a book should belong to an Author
    // A Book can't be associated without an Author
    Book.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Book;
};