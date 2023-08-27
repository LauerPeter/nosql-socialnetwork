

const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers').thoughtController;

// Get all thoughts
router.get('/', thoughtController.getAllThoughts);

// Get a single thought by ID
router.get('/:id', thoughtController.getThoughtById);

// Create a new thought
router.post('/', thoughtController.createThought);

// Update a thought by ID
router.put('/:id', thoughtController.updateThought);

// Delete a thought by ID
router.delete('/:id', thoughtController.deleteThought);

module.exports = router;