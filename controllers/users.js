

const db = require('../config/connection');

const User = require('../models/User');

const Thought = require('../models/Thought');

const userController = {

///--Create a new user
createUser: async (req, res) => {
  try {
    const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
///--GET all users
getAllUsers: async (req, res) => {
  try {
    const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;