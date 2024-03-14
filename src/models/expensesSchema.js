const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project", // Reference to the Project model
    required: true,
  },
  payment_method: {
    type: String,
    enum: ["cash", "bkash", "roket", "nogod", "bank"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Expenses = mongoose.model("Expenses", expensesSchema);

module.exports = Expenses;
