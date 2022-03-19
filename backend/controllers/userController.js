const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// register new user
// route POST /api/users
// access public
const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hassedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    name,
    password: hassedPassword
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    })
  } else {
    res.status(404);
    throw new Error("Invalid user data")
  }
});

// authenticate user
// route POST /api/goals/login
// access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    })
  } else {
    res.status(404);
    throw new Error("Invalid credential")
  }
});

// get user data
// route GET /api/goals/me
// access public
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = req.user;
  res.status(200).json({
    id: _id,
    name,
    email
  });
});

// generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe
};
