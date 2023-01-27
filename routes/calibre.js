const express = require('express')
const router = express.Router();
const calibreController = require('../controllers/calibre');
const { ageValidation } = require('../utils/validation');

//normal functions
router.get('/', calibreController.getAll);
router.get('/:id', calibreController.getSingle);
router.post('/', calibreController.createCalibre);
router.put('/:id', calibreController.updateCalibre);
router.delete('/:id', calibreController.deleteCalibre);

// Testing Oauth


module.exports = router;