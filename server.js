const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require('./controllers/index.js'));

app.listen(3000, function () {
  console.log(`App running on port ${this.address().port}`);
});
