const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Anna Wheeler');
});

routes.get('/test', (req, res) => {
    res.send('Jermery Wheeler');
});

module.exports = routes;