const asyncHandler = require("express-async-handler");
const Topic = require("../models/topic_model");
const Subtopic = require("../models/subtopic_model");
const createSubtopic = asyncHandler(async (req, res) => {
  const { title, topicId } = req.body;
  if (!title || !topicId ) {
    res.status(400).json({ message: "Please fill all the fields" });
  }
  const newSubtopic = new Subtopic({
    title: title,
  });
  const result = await newSubtopic.save();
  const linkTopic = await Topic.findByIdAndUpdate(
    topicId,
    { $push: { subtopics: newSubtopic._id } },
    { new: true }
  );
  if (result) {
    res.status(201).json({ newSubtopic, linkTopic });
  } else {
    res.status(400).json({ message: "Invalid Subtopic data" });
  }
});
const addResource=asyncHandler(async(req,res)=>{
    const {url,type,subtopicId}=req.body;
    const subtopic=await Subtopic.findByIdAndUpdate(subtopicId,{$push:{resources:{url,type}}},{new:true})
    if(subtopic){
        res.status(201).json({subtopic})
    }else{
        res.status(400).json({message:"Invalid Resource data"})
    }
})
module.exports = { createSubtopic,addResource };