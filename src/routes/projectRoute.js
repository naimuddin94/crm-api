const express = require("express");
const {
  getAllDataFn,
  createFn,
  getSingleDataFn,
  deleteFn,
  updateFn,
} = require("../lib/handerFunc");
const Project = require("../models/projectSchema");

const projectRouter = express.Router();

projectRouter.get("/", getAllDataFn(Project));
projectRouter.get("/:id", getSingleDataFn(Project));
projectRouter.post("/", createFn(Project));
projectRouter.put("/:id", updateFn(Project));
projectRouter.delete("/:id", deleteFn(Project));

module.exports = projectRouter;
