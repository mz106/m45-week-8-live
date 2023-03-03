const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Author = connection.define("Author", {
  authorName: {
    type: DataTypes.STRING,
  },
  isAwesome: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Author;
