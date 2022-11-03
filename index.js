const express = require('express');
const path = require('path');
const morg = require('morgan');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', function(req, res) {
  res.send('error');
});

app.listen(port);
console.log('Server started at http://localhost:' + port);