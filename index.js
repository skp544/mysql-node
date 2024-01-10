const express = require("express");
const userRoute = require("./routes/userRoute");
const User = require("./models/userModel");

const app = express();

require("./config/sql");
const PORT = 8000;

app.use(express.json());
User.sync({ force: false });

app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log("Server is running");
});
