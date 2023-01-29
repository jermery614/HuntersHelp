const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users');
const { isAdmin } = require('../utils/validation');
// const { ageValidation } = require('../utils/validation');

//normal functions
router.get('/',isAdmin, usersController.getAllUsers);
router.get('/:id',isAdmin, usersController.getSingleUSer);
router.post('/',isAdmin, usersController.createUser);
router.put('/:id',isAdmin, usersController.updateUsers);
router.delete('/:id',isAdmin, usersController.deleteUsers);

// Testing Oauth


module.exports = router;