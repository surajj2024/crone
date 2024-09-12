const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Add a new task
router.post("/tasks", async (req, res) => {
  const { name, schedule, email } = req.body;
  const task = new Task({ name, schedule, email });
  await task.save();
  res.status(201).send(task);
});

// Get all tasks
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

module.exports = router;
