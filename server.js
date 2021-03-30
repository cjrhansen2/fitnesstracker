//pull in the various libraries and such
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const bodyparser = require("body-parser");

//make the express app and create the port
const app = express();
const PORT = process.env.PORT || 7000;

//do all the necessary app.use parts
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//make the mongoose connection to connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//pull in the routes for the server from the route directory
require("./route/view")(app);
require("./route/api")(app);

//then have the server start to listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});