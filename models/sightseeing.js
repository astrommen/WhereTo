var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var sightseeingSchema = new Schema({
    address: String,
    description: String,
    latitude: Double,
    longitude: Double,
    name: String,
    phone: String,
    openNow: String,
    rank: String,
    website: String,
    image: String
});

// This creates our model from the above schema, using mongoose's model method
var Sightseeing = mongoose.model("Sightseeing", sightseeingSchema);

// Export the Note model
module.exports = Sightseeing;