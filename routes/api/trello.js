const router = require('express').Router();
const axios = require('axios');

const baseUrl = 'https//api.trello.com/1'
const test = `${baseUrl}/members/${process.env.TRELLO_MEMBERID}?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`;


router.get('/', (req, res) => {
  // res.json({ ok: true, trello: true })
  console.log(test)
  console.log(process.env.TRELLO_KEY)
  axios.get(`${baseUrl}/members/${process.env.TRELLO_MEMBERID}?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`)
    .then(result => {
      console.log(result);
      res.json(result.data)
    })
    .catch(err => res.json(err))
})

module.exports = router;