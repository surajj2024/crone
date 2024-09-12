require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const cron = require("node-cron");
const Task = require("./models/Task");
const sendEmail = require("./utils/sendEmail"); // Function to send emails

// Load tasks from DB and schedule them
async function scheduleTasks() {
  const tasks = await Task.find({ status: "Scheduled" });
  tasks.forEach((task) => {
    cron.schedule(task.schedule, async () => {
      try {
        await sendEmail(task.email);
        task.status = "Completed";
        task.lastRunAt = new Date();
      } catch (error) {
        task.status = "Failed";
      }
      await task.save();
    });
  });
}
scheduleTasks();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
