const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {  // Change the field name to userId
    type: mongoose.Schema.Types.ObjectId,  // Store the user's ObjectId
    ref: 'User',  // Reference the User model
    required: true,  // Make sure userId is required
  },
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;