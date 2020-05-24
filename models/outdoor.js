var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var outdoorSchema = new Schema({
});

// This creates our model from the above schema, using mongoose's model method
var Outdoor = mongoose.model("Outdoor", outdoorSchema);

// Export the Note model
module.exports = Outdoor;