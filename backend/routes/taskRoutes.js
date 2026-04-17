const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// ADD
router.post("/add", async (req, res) => {
  const newTask = new Task({ title: req.body.title });
  await newTask.save();
  res.json(newTask);
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

// UPDATE TEXT
router.put("/update/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, {
    title: req.body.title
  });
  res.send("Updated");
});

// TOGGLE COMPLETE
router.put("/toggle/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

module.exports = router;