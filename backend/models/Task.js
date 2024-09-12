const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: String,
  schedule: String, // Cron expression
  email: String,
  status: {
    type: String,
    enum: ["Scheduled", "Completed", "Failed"],
    default: "Scheduled",
  },
  lastRunAt: Date,
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
