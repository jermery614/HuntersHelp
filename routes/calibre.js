const express = require('express')
const router = express.Router();
const calibreController = require('../controllers/calibre');

router.get('/', calibreController.getAll);
router.get('/:id', calibreController.getSingle);


module.exports = router;