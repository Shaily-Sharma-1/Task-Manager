import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ assignedTo: req.user._id })
    .populate("project")
    .populate("assignedTo", "name");

  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    task.status = req.body.status || task.status;
    await task.save();
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};