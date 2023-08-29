

const db = require('../config/connection');
const Thought = require('../models/Thought');
const User = require('../models/User');


const thoughtController = {

//// POST REQUEST TO CREATE THOUGHT-----------------------------------
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


  ////GET REQUEST TO VIEW ALL THOUGHTS --------------------------------------
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },


/////GET REQUEST TO VIEW SINGLE THOUGHT BY ID ----------------------------
getThoughtById: async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: err.message }); 
  }
},


/////GET REQUEST TO VIEW ALL THOUGHTS OF A USER BY ID ------------------------
  getThoughtsByUser: async (req, res) => {
    try {
      const thoughts = await Thought.find({ userId: req.params.userId });
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
/////PUT REQUEST FOR UPDATING A THOUGHT BY ITS ID--------------------
updateThoughtById: async (req, res) => {
  try {
    const { id } = req.params;
    const { thoughtText } = req.body;

    // Find the thought by ID
    const thought = await Thought.findByIdAndUpdate(
      id,
      { thoughtText }, // Update the thoughtText property
      { new: true } // Return the updated thought
    );

    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    res.json(thought);
  } catch (err) {
    res.status(400).json(err);
   }
  },
};




module.exports = thoughtController;