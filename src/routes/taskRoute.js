const express = require("express");
const {
  getAllDataFn,
  createFn,
  getSingleDataFn,
  updateFn,
  deleteFn,
} = require("../lib/handerFunc");
const Task = require("../models/taskSchema");

const taskRouter = express.Router();

taskRouter.get("/", getAllDataFn(Task));
taskRouter.get("/:id", getSingleDataFn(Task));
taskRouter.post("/", createFn(Task));
taskRouter.put("/:id", updateFn(Task));
taskRouter.delete("/:id", deleteFn(Task));

module.exports = taskRouter;
