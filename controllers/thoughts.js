


const db = require('../config/connection');

const Thought = require('../models/Thought');

const User = require('../models/User');

const thoughtController = {

///--Create a new thought
createThought: async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    await User.findByIdAndUpdate(thought.username, { $push: { thoughts: thought._id } });
    res.json(thought);
  } catch (err) {
    res.status(400).json(err);
    }
  },
}

module.exports = thoughtController;