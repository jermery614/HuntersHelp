const express = require('express')
const router = express.Router();

router.use('/calibre', require('./calibre'))




// routes.get('/', (req, res) => {
//   res.send('Anna Wheeler');
// });

// routes.get('/test', (req, res) => {
//     res.send('Jermery Wheeler');
// });

module.exports = router;