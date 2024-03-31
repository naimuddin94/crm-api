const express = require("express");
const {
  getAllDataFn,
  createFn,
  getSingleDataFn,
  updateFn,
  deleteFn,
  getUserRoleFn,
} = require("../lib/handlerFn");
const User = require("../models/userSchema");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

const userRouter = express.Router();

userRouter.get("/", verifyToken, verifyAdmin, getAllDataFn(User));
userRouter.get("/:id", verifyToken, verifyAdmin, getSingleDataFn(User));
userRouter.get("/role/:email", verifyToken, verifyAdmin, getUserRoleFn(User));
userRouter.post("/", verifyToken, verifyAdmin, createFn(User));
userRouter.put("/:id", verifyToken, verifyAdmin, updateFn(User));
userRouter.delete("/:id", verifyToken, verifyAdmin, deleteFn(User));

module.exports = userRouter;
