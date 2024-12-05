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

const updateMenu = async (req, res) => {
  const { id } = req.params; // Get the menu item ID from the URL parameters
  const { restaurant_id, item_name, category, image, price } = req.body; // Get updated values from the request body

  try {
    const updatedMenuItem = await Menu.findByIdAndUpdate(
      id, // Find the menu item by its ID
      {
        restaurant_id,
        item_name,
        category,
        image,
        price,
      },
      { new: true } // Return the updated document
    );

    if (!updatedMenuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.status(200).json({ message: 'Menu item updated successfully', menuItem: updatedMenuItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMenuItem = await Menu.findByIdAndDelete(id);

    if (!deletedMenuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createMenu, getAllmenuitems, updateMenu, deleteMenu };

