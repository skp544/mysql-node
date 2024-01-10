const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/sql");

const User = sequelize.define("User", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
