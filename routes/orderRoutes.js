const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const router = express.Router();

// Create an order
router.post('/', createOrder);

// Get orders by user ID
router.get('/:userId', getOrders);

module.exports = router;
