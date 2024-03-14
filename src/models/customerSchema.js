const mongoose = require("mongoose");

const customerSchema = mongoose.discriminator(
  "customer",
  mongoose.Schema({
    company_name: {
      type: String,
      required: true,
    },
    bin: { type: String, required: true },
    advance_balance: Number,
  })
);

module.exports = customerSchema;
