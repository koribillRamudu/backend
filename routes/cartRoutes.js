const express = require('express');
const { addToCart, getCartItems, removeFromCart } = require('../controllers/cartController');
const router = express.Router();

// Route to get all cart items for a user
router.get('/cart/:userId', getCartItems);

// Route to add an item to the cart
router.post('/cart', addToCart);

// Route to remove an item from the cart
router.delete('/cart/:userId/:itemId', removeFromCart);

module.exports = router;
