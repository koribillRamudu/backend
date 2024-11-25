const mongoose = require('mongoose');

// Define the restaurant schema
const restaurantSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  } ,
  location: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
}, { timestamps: true });

// Create the model based on the schema
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
