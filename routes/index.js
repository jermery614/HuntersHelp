const express = require('express');
const router = express.Router();

router.use('/calibre', require('./calibre'));
// router.use('/users', require('./users'));
router.use('/', require('./swagger'));



module.exports = router;