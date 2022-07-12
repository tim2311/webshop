var express = require('express');
var cors = require('cors');
var app = express();
const bodyParser = require('body-parser');

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const port = 4000;

app.get('/', function (req, res) {
  console.log('Hello World!');
});

app.post('/', function (req, res) {
  console.log(req);
});

app.post('/signup', function (req, res) {
  console.log(req.body.email, req.body.password);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});