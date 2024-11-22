const User = require('../models/User');

// Register new user
const registerUser = async (req, res) => {
  const { username, email, password, phoneNumber, address } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    const newUser = new User({
      username,
      email,
      password,
      phoneNumber,
      address
    });

    // Save the user
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser };
