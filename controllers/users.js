

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
/////- GET user by there id
getUserById: async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
     } catch (err) {
    res.status(500).json(err);
    }
  },
////-PUT request to update a user by an id
  updateUserById: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },
///////- DELETE a user by id
deleteUserById: async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.updateMany(
      { friends: id },
      { $pull: { friends: id } }
    );

    // removes all thoughts associated with the user
    await Thought.deleteMany({ userId: id });

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json(err);
    }
  },

  ////POST to add a friend to a user
  addFriendById: async (req, res) => {
    try {
      const { userId, friendId } = req.params;
  
      const user = await User.findById(userId);
      const friend = await User.findById(friendId);
  
      if (!user || !friend) {
        return res.status(404).json({ message: 'User or friend not found' });
      }
  
      user.friends.push(friendId);
      await user.save();
  
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  /////DELETE a friend from user list
  deleteFriendById: async (req, res) => {
    try {
      const { userId, friendId } = req.params;
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const friendIndex = user.friends.indexOf(friendId);
  
      if (friendIndex === -1) {
        return res.status(404).json({ message: 'Friend not found in user\'s friends list' });
      }
  
      user.friends.splice(friendIndex, 1);
      await user.save();
  
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};


module.exports = userController;