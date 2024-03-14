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

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
