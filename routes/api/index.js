const router = require('express').Router();
const trello_routes = require('./trello');

router.use('/trello', trello_routes);

router.get('/', (req, res) => {
  res.json({ ok: true })
})

module.exports = router;