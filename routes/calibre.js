const express = require('express')
const router = express.Router();
const calibreController = require('../controllers/cartridge');

router.get('/', calibreController.getAll);
router.get('/:id', calibreController.getSingle);


module.exports = router;