const express = require("express");
const {
  getAllDataFn,
  createFn,
  getSingleDataFn,
  deleteFn,
  updateFn,
} = require("../lib/handlerFn");
const Customer = require("../models/customerSchema");

const customerRouter = express.Router();

customerRouter.get("/", getAllDataFn(Customer));
customerRouter.get("/:id", getSingleDataFn(Customer));
customerRouter.post("/", createFn(Customer));
customerRouter.put("/:id", updateFn(Customer));
customerRouter.delete("/:id", deleteFn(Customer));

module.exports = customerRouter;
