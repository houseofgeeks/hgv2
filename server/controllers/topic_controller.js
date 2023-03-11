const asyncHandler = require("express-async-handler");
const Level = require("../models/level_model");
const Topic = require("../models/topic_model");

const createTopic = asyncHandler(async (req, res) => {
    const{title,levelId}=req.body;
    if(!title||!levelId){
        res.status(400).json({message:"Please fill all the fields"});
    }
    const newTopic=new Topic({
        title:title
    })
    const result=await newTopic.save();
    const linkLevel=await Level.findByIdAndUpdate(levelId,{$push:{topics:newTopic._id}},{new:true})
    if(result){
        res.status(201).json({newTopic,linkLevel});}
    else{
        res.status(400).json({message:"Invalid Topic data"});
    }
});
const getTopics=asyncHandler(async(req,res)=>{
    const topics=await Level.findById(req.params._id).populate("topics");
    res.status(200).json({msg:"all topics are",topics});
})
module.exports={createTopic,getTopics}
