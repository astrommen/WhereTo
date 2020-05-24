var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var foodSchema = new Schema({
    name: String,
    image: String,
    phone: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    link: String,
    rating: Double,
    reviews: String,
    latitude: Double,
    longitude: Double,
    transactions: Array,
});

// This creates our model from the above schema, using mongoose's model method
var Food = mongoose.model("Food", foodSchema);

// Export the Note model
module.exports = Food;