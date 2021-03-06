var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var vacationSchema = new Schema({
  tripName: String,
  dateStart: Date,
  dateEnd: Date,
  city: String,
  state: String,
  sightseeing: [Object],
  food: [Object],
  events: [Object],
  outdoors: [Object],
  local: Boolean
});

// This creates our model from the above schema, using mongoose's model method
var Vacation = mongoose.model("Vacation", vacationSchema);

// Export the Note model
module.exports = Vacation;
