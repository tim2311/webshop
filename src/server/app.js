var express = require('express');
var cors = require('cors');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

mongoose.connect('mongodb://localhost:27017/customerDB');

const customerSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Customer = mongoose.model('Customer', customerSchema);

async function main() {
    
   
    
    // const newCustomer = new Customer({ email: 'user@email.com', password: '123' });
    // console.log(newCustomer.name); // 'Silence'
    // // NOTE: methods must be added to the schema before compiling it with mongoose.model()
    // customerSchema.methods.speak = function speak() {
    //     const greeting = this.name
    //         ? "Meow name is " + this.name
    //         : "I don't have a name";
    //     console.log(greeting);
    // };
  
    // await newCustomer.save();
    // const customers = await Customer.find();
    // console.log(customers);

}

app.use(cors({ origin: 'http://localhost:3000' }));
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
  const newCustomer = new Customer({ email: req.body.email, password: req.body.password});
  newCustomer.save();
});

app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});