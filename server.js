//pull in the various libraries and such
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyparser = require("body-parser");

//pull in the routes for the server from the route directory
const route_view = require("./route/view");
const route_api = require("./route/api");

//make the express app and create the port
const app = express();
const PORT = process.env.PORT || 7000;

//make the mongoose connection to connect to mongodb