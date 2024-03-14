const express = require("express");
const {
  getAllDataFn,
  createFn,
  getSingleDataFn,
} = require("../lib/handerFunc");
const User = require("../models/userSchema");

const userRouter = express.Router();

userRouter.get("/", getAllDataFn(User));
userRouter.get("/:id", getSingleDataFn(User));
userRouter.post("/", createFn(User));

module.exports = userRouter;
