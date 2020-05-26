const express = require("express");
require("dotenv").config();
const path = require("path");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Strategy = require('passport-facebook').Strategy;
const mongo = require("mongodb");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const routes = require("./routes");
const app = express();
const keys = require("./config/keys");
const PORT = process.env.PORT || 3001;

// passport facebook
passport.use(new Strategy({
  clientID: keys.facebook.clientID,
  clientSecret: keys.facebook.clientSecret,
  callbackURL: '/return'
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieParser);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// passport facebook stuff
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use(routes);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:dbpass@ds237196.mlab.com:37196/heroku_4dg9rzs9";
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/whereto";
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
