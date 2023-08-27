

const express = require('express');
const router = express.Router();
const usersRoutes = require('./api/users');  
const thoughtsRoutes = require('./api/thoughts');  

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;