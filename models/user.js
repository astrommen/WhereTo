const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  vacations: [{
    type: Schema.Types.ObjectId,
    ref: "Vacation"
  }]
});

var User = mongoose.model("users", UserSchema)

module.exports = User;

// module.exports.createUser = function(newUser, callBack){
//   bcrypt.genSalt(10, function(err, salt){
//     bcrypt.hash(newUser.password, salt, function(err, hash){
//       // Store hash as password in DB
//       newUser.password = hash;
//       newUser.save(callback);
//     });
//   });
// }

// module.exports = User;
