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
const FacebookStrategy = require('passport-facebook').Strategy;
// const GoogleStrategy = require('passport-google').Strategy;
const mongo = require("mongodb");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const routes = require("./routes");
const app = express();
const keys = require("./config/keys");
const PORT = process.env.PORT || 3001;
const jwt = require("jsonwebtoken");

const User = require("./models/user");
// passport facebook
passport.use(new FacebookStrategy({
  clientID: keys.facebook.clientID,
  clientSecret: keys.facebook.clientSecret,
  callbackURL: 'http://localhost:3001/auth/facebook/callback',
  profileFields: ['id', 'email', 'name', 'picture.type(large)'] 

  },
  function(accessToken, refreshToken, profile, cb) {
    const userProfile = profile._json;
    console.log("unique", accessToken, profile);
    console.log(userProfile.picture.data.url);
    // app.post("/register", (req, res) => {
      User.findOne({ email: userProfile.email }).then(user => {
        console.log("this is user", user);
        if (user) {
          console.log({email: "Email already exists "});
          const token = jwt.sign(profile._json, keys.secretOrKey);
          console.log("JWT", token);
          return cb(null, user);
        } else {
          const pic = `https://graph.facebook.com/${profile.id}/picture?width=200&height=200&access_token=${accessToken}`;
          console.log(pic);
          const newUser = new User({
            name: userProfile.first_name + " " + userProfile.last_name,
            email: userProfile.email,
            password: Date.now()+userProfile.id,
            profle_pic: pic
          });
          newUser.save(function(err){
            if(err) {
              throw err;
            }
            const token = jwt.sign(profile._json, keys.secretOrKey);
            return document(null, {success: true, token: "JWT" + token});
            // newUser.jwtoken = newUser.generateJWT();
            // console.log("jwt", jwtoken);
          })
          // .then(user => res.json(user)).catch(err => console.log(err));
          console.log("user added");
        }
      });
    // });
  // User.findOrCreate({ facebook})
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
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());
// app.use(passport.session());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }), function(req,res){
  
});

// { 
//     failureRedirect: "/NoMatch"
//   }), function(req, res){
//     console.log("here we are");
//     res.redirect("/");
//   }
// );
// import { loginUser } from "../../actions/authActions";
//step 1. save user info to db
//step 2. set and check for jwt: base64hash the combined userid+email to create jw
app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', {session:false,
   successRedirect: 'http://localhost:3000/profile',failureRedirect: '/login' },

  ),
    app.get('/profile', function(req, res){
      this.history.push("/profile");
    }));
      
    
  // );

// app.get('/auth/facebook/callback', 
//   function(req,res){
//     console.log("redirected");
//   }
// );

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
