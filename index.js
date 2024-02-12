const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/Black-Mo-Events', { useNewUrlParser: true }),

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
