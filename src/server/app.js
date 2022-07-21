// Imports
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const Customer = require("./customer");

// Database connect.
mongoose.connect('mongodb://localhost:27017/customerDB');

// Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));

app.use(passport.initialize());

app.use(passport.session());

require("./passportConfig")(passport);

// Routes
const port = 4000;

app.get('/', function (req, res) {
  console.log('Hello World!');
});

app.post('/', function (req, res) {
  console.log(req);
});

app.post('/login', function (req, res) {
  console.log(req.body.email, req.body.password);
});

app.post("/signup", (req, res) => {
  console.log(req.body.email, req.body.password);
  Customer.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("E-mail Is Already In Use");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newCustomer = new Customer({ email: req.body.email, password: hashedPassword });
      await newCustomer.save();
      res.send("Account Created");
    }
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});