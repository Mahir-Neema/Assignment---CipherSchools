const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

module.exports = {
  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, password: hash });
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.status(200).json({ token });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  async updateProfile(req, res) {
    try {
      const { username, email } = req.body;
      const user = await User.findByIdAndUpdate(
        req.user.id,
        { username, email },
        { new: true }
      );
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async updatePassword(req, res) {
    try {
      const { currentPassword, newPassword } = req.body;
      const user = await User.findById(req.user.id);
      const match = await bcrypt.compare(currentPassword, user.password);
      if (!match) {
        return res.status(401).json({ message: 'Invalid current password' });
      }
      const hash = await bcrypt.hash(newPassword, 10);
      user.password = hash;
      await user.save();
      res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async updateInterests(req, res) {
    try {
      const { interests } = req.body;
      const user = await User.findByIdAndUpdate(
        req.user.id,
        { interests },
        { new: true }
      );
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async getFollowers(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const followers = await User.find({ following: req.user.id })
        .select('-password -email -__v')
        .skip((page - 1) * limit)
        .limit(limit);
      res.status(200).json(followers);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
