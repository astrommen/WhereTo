const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  vacations: [{
    type: Schema.Types.ObjectId,
    ref: "Vacation"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
