const express = require('express')
const router = express.Router();
const calibreController = require('../controllers/calibre');
const { ageValidation } = require('../utils/validation');

//normal functions
router.get('/', calibreController.getAll);
router.get('/:id', calibreController.getSingle);
router.post('/', ageValidation ,calibreController.createCalibre);
router.put('/:id',ageValidation, calibreController.updateCalibre);
router.delete('/:id',ageValidation, calibreController.deleteCalibre);

// Testing Oauth


module.exports = router;