const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },

  father_name: { type: String, required: true },
  nid_number: { type: Number, required: true },
  birthday: Date,
  gender: { type: String, enum: ["Male", "Female"], required: true },
  permanent_address: { type: String, required: true },
  present_address: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company_name: {
    type: String,
    required: true,
  },
  bin: { type: String, required: true },
  advance_balance: Number,
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
