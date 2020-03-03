const fetch = require('node-fetch');
const baseUrl = 'https://api.trello.com/1'

module.exports = {
  getMember: function(memberId, cb) {
    fetch(`${baseUrl}/members/${memberId}?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`)
      .then(response => response.json())
      .then(result => cb(result))
      .catch(err => cb(err))
  },

  getMemberBoards: function(memberId, cb) {
    fetch(`${baseUrl}/members/${memberId}/boards?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`)
      .then(response => response.json())
      .then(result => cb(result))
      .catch(err => cb(err))
  },

  getMemberCards: function(memberId, cb) {
    fetch(`${baseUrl}/members/${memberId}/cards?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`)
      .then(response => response.json())
      .then(result => cb(result))
      .catch(err => cb(err))
  }
}