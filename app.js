var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");

var indexRouter = require("./routes/index");
var placesRouter = require("./routes/places");
var keywordsRouter = require("./routes/keywords");

var app = express();
var db = require("./database/mongo");
var init = require("./database/initialdata");
db.connectDatabase();
init.addData();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/places", placesRouter);
app.use("/keywords", keywordsRouter);

// catch 404 and forward to error handler
/*app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
/*app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});*/

module.exports = app;
