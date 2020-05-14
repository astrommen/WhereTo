var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var vacationSchema = new Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  location: String,
  activities: Array
});

// This creates our model from the above schema, using mongoose's model method
var Vacation = mongoose.model("Vacation", vacationSchema);

// Export the Note model
module.exports = Vacation;
