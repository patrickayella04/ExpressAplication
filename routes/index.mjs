// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

import { defualt as express } from "express";
export const router = express.Router();

router.get("/", async (req, res, next) => {
  //..Placeholder for Notes home page code
  res.render("index", { title: "Notes" });
});

/* KEY CONCEPTS: Architecting an Express application in the MVC paradigm

The blank application created by the Express generator (npx express-generator@4.x --view=hbs --git .)
provides two aspects of the MVC:

(Model, View, and Controller - The MVC pattern is widely used and involves three main architectural pieces. The Controller accepts inputs or requests from the user, converting that into commands sent to the model. The Model contains the data, logic, and rules by which the application operates. The Veiw is used to present results to the user.)

1. The Views directory contains template files, constrolling the display portion, corresponding to the view. 

2. The Routes directory contains code implementing the URLs recognized by the application and coordinates the data mainipulation required to generate the response to each URL. This corresponds to the controller. 
*/
