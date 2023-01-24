const express = require('express');
const router = express.Router();

router.use('/calibre', require('./calibre'));
router.use('/', require('./swagger'));



module.exports = router;