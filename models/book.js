module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title:DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    },
  );
  Book.push = function(models) {
   
    Book.belongsTo(models.Book, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Book;
 // Book.sync();
};
