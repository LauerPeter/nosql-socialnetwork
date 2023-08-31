

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

//////// DELETE REQUEST FOR THOUGHT BY ITS ID
  deleteThoughtById: async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedThought = await Thought.findByIdAndDelete(id);
  
      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      await User.findByIdAndUpdate(deletedThought.userId, { $pull: { thoughts: id } });
  
      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  ////// POST REQUEST FOR CREATING A REACTION TO A THOUGHT
  createReaction: async (req, res) => {
    try {
      const { reactionBody, username } = req.body;
      const { thoughtId } = req.params;

      console.log("Creating reaction...");
      console.log("Reaction Body:", reactionBody);
      console.log("Username:", username);
      console.log("Thought ID:", thoughtId);

      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $push: { reactions: { reactionBody, username } } }, // Add the reaction to the reactions array
        { new: true }
      );

      console.log("Updated Thought:", updatedThought);

      res.json(updatedThought);
    } catch (err) {
      console.error("Error creating reaction:", err);
      res.status(400).json(err);
    }
  },
  //////DELETE REQUEST FOR A REACTION TO A THOUGHT
  deleteReactionById: async (req, res) => {
    try {
      const { thoughtId, reactionId } = req.params;
  
      await Reaction.findByIdAndDelete(reactionId);
  
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $pull: { reactions: { reactionId } } },
        { new: true }
      );
  
      res.json(updatedThought);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};




module.exports = thoughtController;