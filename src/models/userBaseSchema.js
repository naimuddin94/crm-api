const mongoose = require("mongoose");

const userBaseSchema = mongoose.Schema({
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

  father_name: String,
  nid_number: { type: Number, required: true },
  birthday: Date,
  gender: { type: String, enum: ["male", "female"], required: true },
  permanent_address: { type: String, required: true },
  present_address: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userBaseSchema;
