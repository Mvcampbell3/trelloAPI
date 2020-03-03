const router = require('express').Router();
const trello_controller = require('../../controllers/trello');


router.get('/', (req, res) => {
  trello_controller.getMember(process.env.TRELLO_MEMBERID, function(result) {
    res.json(result)
  })
})

router.get('/boards', (req, res) => {
  trello_controller.getMemberBoards(process.env.TRELLO_MEMBERID, function(result) {
    res.json(result)
  })
})

router.get('/cards', (req, res) => {
  trello_controller.getMemberCards(process.env.TRELLO_MEMBERID, function(result) {
    res.json(result)
  })
})

module.exports = router;