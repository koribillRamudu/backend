const CartItem = require('../models/Cart'); // Import Cart model
const User = require('../models/User'); // Import User model

// Add item to the cart
const addToCart = async (req, res) => {
  const { userId, item_name, price, image } = req.body;

  try {
    const newCartItem = new CartItem({
      item_name,
      price,
      image,
      user_id: userId // Link cart item to the specific user
    });

    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
};

// Get all items in the cart for the logged-in user
const getCartItems = async (req, res) => {
  const userId = req.params.userId;  // Get the user ID from route params

  try {
    const cartItems = await CartItem.find({ user_id: userId });
    if (cartItems.length === 0) {
      return res.status(404).json({ message: 'No items in cart' });
    }
    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve cart items' });
  }
};

// Remove item from the cart
const removeFromCart = async (req, res) => {
  const { userId, itemId } = req.params;

  try {
    await CartItem.findOneAndDelete({ _id: itemId, user_id: userId });
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to remove item from cart' });
  }
};

module.exports = { addToCart, getCartItems, removeFromCart };
