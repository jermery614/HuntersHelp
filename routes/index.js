const express = require('express');
const router = express.Router();

router.use('/calibre', require('./calibre'));
router.use('/', require('./swagger'));
router.use('/users', require('./users'));



module.exports = router;