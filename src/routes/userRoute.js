const express = require("express");
const {
  getAllDataFn,
  createFn,
  getSingleDataFn,
  updateFn,
  deleteFn,
  getUserRoleFn,
} = require("../lib/handlerFn");

const {userLoginFn} = require("../controller/authentication");
const User = require("../models/userSchema");

const userRouter = express.Router();

userRouter.get("/", getAllDataFn(User));
userRouter.get("/:id", getSingleDataFn(User));
userRouter.get("/role/:email", getUserRoleFn(User));
userRouter.post("/", createFn(User));
userRouter.put("/:id", updateFn(User));
userRouter.delete("/:id", deleteFn(User));

module.exports = userRouter;
