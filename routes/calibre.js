const express = require('express')
const router = express.Router();
const calibreController = require('../controllers/calibre');
const {ageValidation}= require('../utils/validation');

router.get('/',ageValidation, calibreController.getAll);
router.get('/:id', ageValidation, calibreController.getSingle);
router.post('/', ageValidation ,calibreController.createCalibre);
router.put('/:id',ageValidation, calibreController.updateCalibre);
router.delete('/:id',ageValidation, calibreController.deleteCalibre);

module.exports = router;