const asyncHandler = require("express-async-handler");
const goals = require("../models/goalModel");

// desc Get goals
// route GET /api/goals
// access Private
const getGoals = asyncHandler(async (req, res) => {
  const goal = await goals.find();
  res.status(200).json(goal);
});

// desc POST goals
// route GET /api/goals
// access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error("Missing text field");
  }
  const goal = await goals.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// desc Update goals
// route PUT /api/goal/:id
// access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await goals.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("goal not found");
  }
  const updatedGoal = await goals.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// desc Delete goals
// route DELETE /api/goal/:id
// access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await goals.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("goal not founded");
  }
  goal.remove();
  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
