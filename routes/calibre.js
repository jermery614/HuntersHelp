const express = require('express')
const router = express.Router();
const calibreController = require('../controllers/calibre');

router.get('/', calibreController.getAll);
router.get('/:id', calibreController.getSingle);
router.post('/', calibreController.createCalibre);
router.put('/:id', calibreController.updateCalibre);
router.delete('/:id', calibreController.deleteCalibre);

module.exports = router;