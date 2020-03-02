const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const cors = require('cors');

app.use(cors())

require('dotenv').config();

const exphbs = require('express-handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(routes)

app.listen(PORT, () => {
  console.log(`server is live on http://localhost:${PORT}`);
})