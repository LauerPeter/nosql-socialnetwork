

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
// router.delete('/:id', thoughtController.deleteThought);

module.exports = router;