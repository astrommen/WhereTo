const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongo = require("mongodb");
const mongoose = require("mongoose");

// const routes = require("./routes/index");
const users = require("./routes/api/users");

// Initialize the app
const app = express();
// const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieParser);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const PORT = process.env.PORT || 3000;
// Express session
// app.use(session({
//   secret: "secret",
//   saveUninitialized: true,
//   resave: true
// }));

// // Passport Init
// app.use(passport.initialize());
// app.use(passport.session());

// // Express Validator
// app.use(expressValidator({
//   errorFormatter: function(param, msg, value) {
//     const namespace = param.split(".")
//     , root = namespace.shift()
//     , formParam = root;

//     while(namespace.length) {
//       formParam += "[" + namespace.shift() + "]";
//     }
//     return {
//       param : formParam,
//       msg: msg,
//       value: value
//     }
//   }
// }));

// Connect Flash
// app.use(flash());

// Global Vars
// app.use(function (req, res, next) {
//   res.locals.success_msg = req.flash("success_msg");
//   res.locals.error_msg = req.flash("error_msg");
//   res.locals.error = req.flash("error");
//   next();
// });


// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/whereto";
mongoose.connect(MONGODB_URI, { useNewURLParser: true });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
