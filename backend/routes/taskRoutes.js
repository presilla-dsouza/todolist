const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET all
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

// UPDATE
router.put("/update/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, {
    title: req.body.title
  });
  res.send("Updated");
});

module.exports = router;