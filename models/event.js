var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var eventSchema = new Schema({
    name: String,
    url: String,
    image: String,
    localDate: Date,
    localStartTime: String,
    seatmapLink: String,
    venueName: String,
    venueUrl: String,
    venueCity: String,
    venueState: String,
    venueStreet: String,
    venuePostal: String
});

// This creates our model from the above schema, using mongoose's model method
var Event = mongoose.model("Event", eventSchema);

// Export the Note model
module.exports = Event;
