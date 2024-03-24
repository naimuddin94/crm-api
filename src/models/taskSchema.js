const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  task_date: {
    type: Date,
    required: true,
  },
  task_alert_date: {
    type: Date,
    required: true,
  },
  alert_by: {
    type: String,
    enum: ["SMS", "Mail", "Both"],
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer", // Reference to the Customer model
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project", // Reference to the Project model
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
