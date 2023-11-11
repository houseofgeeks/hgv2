const asyncHandler = require("express-async-handler");
const Level = require("../models/level_model");
const Wing = require("../models/wing_model");
const createLevel = asyncHandler(async (req, res) => {
  const { title, wingId } = req.body;
  if (!title || !wingId) {
    res.status(400).json({ message: "Please fill all the fields" });
  }
  const newLevel = new Level({
    title: title,
  });
  const result = await newLevel.save();
  const wing = await Wing.findByIdAndUpdate(wingId, { $push: { levels: newLevel._id } }, { new: true })
  if (result) {
    res.status(201).json({ newLevel, wing });
  } else {
    res.status(400).json({ message: "Invalid Level data" });
  }
});


//level by wing id
const getLevelsByWingId = asyncHandler(async (req, res) => {
  const { wingId } = req.params;
  if (wingId == ":wingId") {
    return res.status(400).json({ message: "Cannot get levels without the id" });
  }
  const findWing = await Wing.findById({ _id: wingId });
  if (!findWing) {
    return res.status(404).json({ message: "Cannot find the wing" });
  }
  const findLevels = await Level.find({ $in: { _id: findWing.levels } });
  if (!findLevels) {
    return res.status(501).json({ message: "Internal server error" });
  }
  res.status(200).json({ findLevels });
})

const getParticularLevel=asyncHandler(async(req,res)=>{
  const{levelId}=req.params;
  if(levelId==":levelId"){
    return res.status(402).json({message:"Cannnot get the level without the level id"});
  }
  const findLevel=await Level.findById({_id:levelId}).populate("enrolled").populate("topics").populate("assignments");
  if(!findLevel){
    return res.status(404).json({message:"Cannot find the level"});
  }
  return res.status(200).json(findLevel);
})
module.exports = { createLevel ,getLevelsByWingId,getParticularLevel}
