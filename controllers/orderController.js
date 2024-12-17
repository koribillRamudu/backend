const Order = require('../models/Order');
const Cart = require('../models/Cart');

// Create a new order
const createOrder = async (req, res) => {
  const { userId, items, totalAmount } = req.body;

  if (!userId || !items || items.length === 0 || !totalAmount) {
    return res.status(400).json({ success: false, message: 'Invalid order details' });
  }

  try {
    const newOrder = new Order({
      user_id: userId,
      items,
      totalAmount,
    });

    await newOrder.save();

    // Clear user's cart after successful order
    await Cart.deleteMany({ user_id: userId });

    res.status(201).json({ success: true, message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, message: 'Failed to place order' });
  }
};

// Get orders for a specific user
const getOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ user_id: userId });

    if (!orders.length) {
      return res.status(404).json({ success: false, message: 'No orders found' });
    }

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
};

module.exports = { createOrder, getOrders };
