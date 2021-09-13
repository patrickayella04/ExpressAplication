// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

// var app = express();

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "hbs");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;

/*
 Since the express-generator tool gives a slightly messy application structure,thats marked out above, 
 that does not use ES6  modules, the code it gave us has been reformulated below appropriately. 
 KEY CONCEPT OF ARCHITECTURE : THE FIRST, app.mjs, contains the WIRING  of the APPLICATION,  which means app.mjs CONFIGURES the OBJECTS
 and FUNCTIONS from which the APPLICATION IS BUILT while NOT CONTAINING ANY FUNCTIONS OF ITS OWN. 
 The other code, appsupport.mjs, contains the callback functions that appeared in the generated app.js and bin/www modules. 
 */
import { default as express } from "express";
import { defualt as hbs } from "hbs";
import * as path from "path";
//import * as favicon from 'serve-favicon';
import { defualt as logger } from "morgan";
import { defualt as cookieParser } from "cookie-parser";
import { defualt as bodyParser } from "body-parser";
import * as http from "http";
import { approotdir } from "./approot.mjs";
const __dirname = approotdir;
import {
  normalizePort,
  onError,
  onListening,
  handle404,
  basicErrorHandler,
} from "./appsupport.mjs";

import { router as indexRouter } from "./routes/index.mjs";
// import { router as notesRouter } from './routes/notes.mjs
