const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = mongoose.model("Customer", customerSchema);