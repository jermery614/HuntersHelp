const express = require('express')
const router = express.Router();
const calibreController = require('../controllers/calibre');
const {ageValidation}= require('../utils/validation');

router.get('/', calibreController.getAll);
router.get('/:id', calibreController.getSingle);
router.post('/', ageValidation ,calibreController.createCalibre);
router.put('/:id',ageValidation, calibreController.updateCalibre);
router.delete('/:id', calibreController.deleteCalibre);

module.exports = router;