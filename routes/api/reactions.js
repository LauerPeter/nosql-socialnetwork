

const express = require('express');
const router = express.Router();
const reactionController = require('../../controllers').reactionController;

// Create a reaction to a thought
router.post('/:thoughtId/reactions', reactionController.createReaction);

// Delete a reaction by reactionId
router.delete('/:thoughtId/reactions/:reactionId', reactionController.deleteReaction);

module.exports = router;