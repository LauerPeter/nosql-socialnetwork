

const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers').thoughtController;

// //--Get all users thoughts
 router.get('/', thoughtController.getAllThoughts);

// //--Get a single thought of a user by ID
router.get('/:id', thoughtController.getThoughtById);

// //--Get all thoughts of a single user by ID
router.get('/user/:userId', thoughtController.getThoughtsByUser);

//--Create a new thought
router.post('/', thoughtController.createThought);

// //--Update a thought by ID
router.put('/:id', thoughtController.updateThoughtById);

// //--Delete a thought by ID
router.delete('/:id', thoughtController.deleteThoughtById);

//--Create a reaction to a thought
router.post('/:thoughtId/reactions', thoughtController.createReaction);

//--Delete a reaction by reactionId
// router.delete('/:thoughtId/reactions/:reactionId', reactionController.deleteReaction);


module.exports = router;