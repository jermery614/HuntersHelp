const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users');
// const { ageValidation } = require('../utils/validation');

//normal functions
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getSingleUSer);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUsers);
router.delete('/:id', usersController.deleteUsers);

// Testing Oauth


module.exports = router;