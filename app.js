var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

/* KEY CONCEPTS: Architecting an Express application in the MVC paradigm

The blank application created by the Express generator (npx express-generator@4.x --view=hbs --git .)
provides two aspects of the MVC:

(Model, View, and Controller - The MVC pattern is widely used and involves three main architectural pieces. The Controller accepts inputs or requests from the user, converting that into commands sent to the model. The Model contains the data, logic, and rules by which the application operates. The Veiw is used to present results to the user.)

1. The Views directory contains template files, constrolling the display portion, corresponding to the view. 

2. The Routes directory contains code implementing the URLs recognized by the application and coordinates the data mainipulation required to generate the response to each URL. This corresponds to the controller. 

  THE APPROACH TO THIS APLLICATIONS MODEL OF THE MVC THROUGH THE USE OF API'S

The approach used is to create a MODELS directory as a sibling of the VEIWS and ROUTS directories. The MODELS directory will hold modules to handle data storage and other code that might be called BUSINESS LOGIC. The API of the modules in the MODELS directory will provide functions to create, read, update, or delete data items -- a CREATE, READ, UPDATE, and  DELETE/DESTROY (CRUD) model - and other functions necesarry for the veiw code to do its thing. 

  CONCEPT OF THIS NOTES APPLICATION

  The CRUD MODEL includes the four basic operations of persistent data storage. This NOTES application is structured as a CRUD application to demonstrate the implementation of  each of these operations. 

  Functions named CREATE, READ, UPDATE, and DESTROY will be used to implement each of the basic operations. (DESTROY verb is being used, rather than DELETE, because delete )
*/
