// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
/* 
BELOW : 

The automatically generated code above has been restructured below so the Express package can be 
imported and the ROUTER object can then be exported. Adding ROUTER functions are done in the same 
way wether they are a CommonJS or an ES6 module. The ROUTER callback funciton above has been made 
into an async function because it is async code that will be used from here on out. 
*/
import { defualt as express } from "express";
export const router = express.Router();

router.get("/", async (req, res, next) => {
  //..Placeholder for Notes home page code
  res.render("index", { title: "Notes" });
});

/* KEY CONCEPTS: Architecting an Express application in the MVC(Model, View, and Controller) Paradigm

(Model, View, and Controller - The MVC pattern is widely used and involves three main architectural pieces. 
The Controller accepts inputs or requests from the user, converting that into commands sent to the model. 
The Model contains the data, logic, and rules by which the application operates. The Veiw is used to present 
results to the user.)

The blank application created by the Express generator (npx express-generator@4.x --view=hbs --git .)
provides two aspects of the MVC:

1. The Views directory contains template files, constrolling the display portion, corresponding to the view. 

2. The Routes directory contains code implementing the URLs recognized by the application and coordinates 
the data mainipulation required to generate the response to each URL. This corresponds to the controller. 

  THE APPROACH TO THIS APLLICATIONS MODEL OF THE MVC THROUGH THE USE OF API'S

The approach used is to create a MODELS directory as a sibling of the VEIWS and ROUTS directories. The MODELS 
directory will hold modules to handle data storage and other code that might be called BUSINESS LOGIC. The API
 of the modules in the MODELS directory will provide functions to create, read, update, or delete data items 
 -- a CREATE, READ, UPDATE, and  DELETE/DESTROY (CRUD) model - and other functions necesarry for the veiw code 
to do its thing. 

  CONCEPT OF THIS NOTES APPLICATION

  The CRUD MODEL includes the four basic operations of persistent data storage - (Persistence is "the continuance of an effect after its cause is removed". In the context of storing data in a computer system, this means that the data survives after the process with which it was created has ended. In other words, for a data store to be considered persistent, it must write to non-volatile storage.).
  
  This NOTES application is structured 
  as a CRUD application to demonstrate the implementation of each of these operations. 

  Functions named CREATE, READ, UPDATE, and DESTROY will be used to implement each of the basic operations. 
  (DESTROY verb is being used, rather than DELETE, because delete is a reserved word in JavaScript )

  We use CROSS-ENV in start for package.json and install the newst version of cross-env from npm install -g cross-env

  FACT SIDE NOTE: The simplest way for a module to be recognized as an ES6 module is to use the .mjs extension. 
*/
