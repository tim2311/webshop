var express = require('express');
var app = express();

const port = 4000;

app.get('/', function (req, res) {
  console.log('Hello World!');
});

app.post('/', function (req, res) {
    console.log(req);
  });
  

app.listen(port, function () {
    console.log(`Listening on port ${port}.`);
});