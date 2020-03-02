$(document).ready(function() {
  console.log('linked');
  getMemberInfo()
})

function getMemberInfo() {
  fetch('/api/trello')
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))
}