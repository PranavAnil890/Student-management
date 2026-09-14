const express = require('express');
const router = express.Router();
const userModels = require('../models/usermodels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
router.use(express.json);

function verifyToken(req, res, next) {
  let token = req.headers.token || req.headers.authorization?.replace('Bearer ', '');

  try {
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized request' });
    }

    const payload = jwt.verify(token, 'secret');
    if (!payload) {
      return res.status(401).json({ message: 'Unauthorized request' });
    }

    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}


// Get all users
router.get('/',verifyToken, async (req, res) => {
  try {
    const users = await userModels.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user by roll number
router.get('/:rollnumber', verifyToken, async (req, res) => {
  try {
    const user = await userModels.findOne({
      rollnumber: req.params.rollnumber
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Register user (PASSWORD HASHING)
router.post('/add', async (req, res) => {
  try {
    const {
      rollnumber,
      candidatename,
      course,
      email,
      marks,
      password
    } = req.body;

    // Check if email already exists
    const existingUser = await userModels.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: 'Email already exists'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModels({
      rollnumber,
      candidatename,
      course,
      email,
      marks,
      password: hashedPassword
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: 'Registration Successful',
      data: savedUser
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// Login user (BCRYPT COMPARE)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await userModels.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid Email or Password'
      });
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid Email or Password'
      });
    }

    // Create JWT payload
    const payload = {
      id: user._id,
      email: user.email
    };

    // Generate JWT token
    const token = jwt.sign(payload, 'secret', {
      expiresIn: '1h'
    });

    res.status(200).json({
      message: 'Login Successful',
      token: token,
      data: user
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

// Update user
router.put('/:rollnumber', verifyToken, async (req, res) => {
  try {
    const updateUser = await userModels.findOneAndUpdate(
      { rollnumber: req.params.rollnumber },
      req.body,
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json(updateUser);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Delete user
router.delete('/:rollnumber', verifyToken, async (req, res) => {
  try {
    const deleteUser = await userModels.findOneAndDelete({
      rollnumber: req.params.rollnumber
    });

    if (!deleteUser) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json(deleteUser);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;