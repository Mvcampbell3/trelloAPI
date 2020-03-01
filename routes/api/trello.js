const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ ok: true, trello: true })
})

module.exports = router;