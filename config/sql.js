const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("realestate", "root", "india@123#", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("my sql is connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
