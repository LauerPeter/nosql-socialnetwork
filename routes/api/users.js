

const express = require('express');
const router = express.Router();
const { usersController } = require('../../controllers'); 
// //--Get all users
router.get('/', usersController.getAllUsers);

// //--Get a single user by ID
// router.get('/:id', usersController.getUserById);

//--Create a new user
router.post('/', usersController.createUser);

// //--Update a user by ID
// router.put('/:id', usersController.updateUser);

// //--Delete a user by ID
// router.delete('/:id', usersController.deleteUser);

module.exports = router;