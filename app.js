var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");

var placesRouter = require("./routes/places");
var keywordsRouter = require("./routes/keywords");

var app = express();
var db = require("./database/mongo");
var init = require("./database/initialdata");
db.connectDatabase();
init.addData();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/places", placesRouter);
app.use("/keywords", keywordsRouter);

module.exports = app;
