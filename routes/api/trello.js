const router = require('express').Router();
const baseUrl = 'https://api.trello.com/1'
const fetch = require('node-fetch');


router.get('/', (req, res) => {
  fetch(`${baseUrl}/members/${process.env.TRELLO_MEMBERID}/boards?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`, {
    method: "GET"
  })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(answer => {
      console.log(answer)
      res.json(answer)

    })
    .catch(err => res.json(err))
})

module.exports = router;