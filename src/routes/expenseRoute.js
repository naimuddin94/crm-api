const express = require("express");
const {
  getAllDataFn,
  createFn,
  getSingleDataFn,
  updateFn,
  deleteFn,
} = require("../lib/handlerFn");
const Expense = require("../models/expenseSchema");

const expenseRouter = express.Router();

expenseRouter.get("/", getAllDataFn(Expense));
expenseRouter.get("/:id", getSingleDataFn(Expense));
expenseRouter.post("/", createFn(Expense));
expenseRouter.put("/:id", updateFn(Expense));
expenseRouter.delete("/:id", deleteFn(Expense));

module.exports = expenseRouter;
