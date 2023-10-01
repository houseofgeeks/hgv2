const asyncHandler = require("express-async-handler");
const Level = require("../models/level_model");
const Wing = require("../models/wing_model");
const createLevel = asyncHandler(async (req, res) => {
  const { title,wingId } = req.body;
  if (!title||!wingId) {
    res.status(400).json({ message: "Please fill all the fields" });
  }
  const newLevel = new Level({
    title: title,
  });
  const result = await newLevel.save();
  const wing=await Wing.findByIdAndUpdate(wingId,{$push:{levels:newLevel._id}},{new:true})
  if (result) {
    res.status(201).json({ newLevel,wing });
  } else {
    res.status(400).json({ message: "Invalid Level data" });
  }
});
module.exports = {createLevel}
