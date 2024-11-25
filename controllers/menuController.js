const Menu = require('../models/Menu'); // Make sure this import is correct

// Create a new item
const createMenu = async (req, res) => {
  const { id, restaurant_id, item_name, category, image, price } = req.body;

  try {
    const newMenuitem = new Menu({
      id,
      restaurant_id,
      item_name,
      category,
      image,
      price,
    });

    await newMenuitem.save();
    res.status(201).json({ message: 'Menu item added successfully', Menu: newMenuitem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all menu items
const getAllmenuitems = async (req, res) => {
  try {
    const items = await Menu.find(); // Ensure you're querying the correct model
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createMenu, getAllmenuitems };
