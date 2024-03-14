const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userBaseSchema = require("./userBaseSchema");

const userSchema = userBaseSchema.discriminator(
  "User",
  mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "manager", "employee"],
      default: "employee",
    },
    password: {
      type: String,
      required: true,
    },
    marital_status: {
      type: String,
      enum: ["married", "unmarried"],
      required: true,
    },
    marriage_date: Date,

    bank_name: { type: String, required: true },
    branch_name: { type: String, required: true },
    account_name: { type: String, required: true },
    account_number: { type: Number, required: true },
    swift_code: { type: String, required: true },
    routing_number: { type: Number, required: true },
    primary_payment_option: {
      type: String,
      enum: ["bank", "bkash", "nogod", "roket"],
      required: true,
    },
    bkash: { type: Number, required: true },
    nogod: { type: Number, required: true },
    roket: { type: Number, required: true },
  })
);

userSchema.pre("Save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
