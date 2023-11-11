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

//get subtopic by topic id
const getSubtopics=asyncHandler(async(req,res)=>{
    const topicId=req.params.topicId;
    if(topicId==":topicId"){
      return res.status(401).json({message:"Invalid input data"});
    }
    const findTopic=await Topic.findById({_id:topicId});
    if(!findTopic){
      return res.status(404).json({message:"Not found error"});
    }
    const findSubtopics=await Subtopic.find({$in:{_id:findTopic.subtopics}}).populate("completedBy");
    if(!findSubtopics){
      return res.json(400).json({message:"INTERNAL SERVER ERROR"});
    }
    return res.json(200).json(findSubtopics);

})

module.exports = { createSubtopic,addResource ,getSubtopics};