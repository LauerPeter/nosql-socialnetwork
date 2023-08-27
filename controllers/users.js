

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


}
module.exports = userController;