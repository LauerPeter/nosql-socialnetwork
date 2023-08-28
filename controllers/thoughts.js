

const db = require('../config/connection');
const Thought = require('../models/Thought');
const User = require('../models/User');


const thoughtController = {
  createThought: async (req, res) => {
    try {
      const { thoughtText, userId } = req.body;

      // Finds the user by userId 
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Create the thought with the user's userId
      const thought = await Thought.create({
        thoughtText,
        userId: user._id,
      });

      // Update the user's thoughts array
      user.thoughts.push(thought._id);
      await user.save();

      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

module.exports = thoughtController;