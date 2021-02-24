//pull in the various libraries and such
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const bodyparser = require("body-parser");

//pull in the routes for the server from the route directory
const route_view = require("./route/view");
const route_api = require("./route/api");

//make the express app and create the port
const app = express();
const PORT = process.env.PORT || 7000;

//do all the necessary app.use parts
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//use the routes created
app.use(route_view);
app.use(route_api);

//make the mongoose connection to connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//then have the server start to listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});