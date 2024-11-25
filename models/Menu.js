const mongoose = require('mongoose');

// Define the menu schema
const menuSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
  restaurant_id: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'Restaurant', 
  },
  item_name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensure the price is non-negative
  },
}, { timestamps: true });

// Create the model based on the schema
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
