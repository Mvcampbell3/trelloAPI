const router = require('express').Router();
const api_routes = require('./api');

router.use('/api', api_routes);

router.get('/', (req, res) => {
  res.render('home');
})

module.exports = router;