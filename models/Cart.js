const mongoose = require('mongoose');

// Define the cart schema
const cartItemSchema = new mongoose.Schema(
  {
    item_name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Referencing the User model
      required: true,
    },
  },
  { timestamps: true }
);

// Create the CartItem model based on the schema
const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
