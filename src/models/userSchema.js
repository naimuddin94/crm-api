// userSchema.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
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
  gender: { type: String, enum: ["Male", "Female"], required: true },
  permanent_address: { type: String, required: true },
  present_address: { type: String, required: true },

  username: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Manager", "Employee"],
    default: "Employee",
  },
  password: {
    type: String,
    required: true,
  },
  marital_status: {
    type: String,
    enum: ["Married", "Unmarried"],
    required: true,
  },
  marriage_date: Date,
  bank_name: { type: String, required: true },
  branch_name: { type: String, required: true },
  account_name: { type: String, required: true },
  account_number: { type: Number, required: true },
  swift_code: { type: String, required: true },
  routing_number: { type: Number, required: true },
  mobile: { type: String, required: true },
  primary_payment_option: {
    type: String,
    enum: ["Bank", "Bkash", "Nogod", "Roket"],
    required: true,
  },
  bkash: { type: Number },
  nogod: { type: Number },
  roket: { type: Number },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Define unique indexes
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
