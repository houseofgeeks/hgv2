const asyncHandler = require("express-async-handler");
const Feed = require("../models/feed_model");
const User = require("../models/user_model");

// createFeed
const createFeed = asyncHandler(async (req, res) => {
    const { feedDetails } = req.body;
    // const user=await User.findById(req.user._id);
    // fetching the user from the token
    const user = req.user;
    console.log(user);

    if (!feedDetails) {
        res.status(400).json({ message: "Please fill all the fields" });
    }
    const newFeed = new Feed({
        feedDetails: feedDetails,
        user
    });
    const result = await newFeed.save();
    if(result){
        const result = await newFeed.save();
        res.status(201).json(result);
    }else {
        res.status(400).json({ message: "Error in creating feed" });
    }
})

// getAllFeeds
const getAllFeeds = asyncHandler(async (req, res) => {
    try{
        const feeds = await Feed.find({}).populate("user");
        res.status(200).json(feeds);
    }catch(err){
        res.status(400).json({ message: "Error in fetching feeds" });
    }    
});

// Update feed
const updateFeed = asyncHandler(async (req, res) => {
    try{
        const updatedFeed=await Feed.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json({msg:"updated feed is",updatedFeed});
    }catch(err){
        res.status(400).json({ message: "Error in updating feed" });
    }
})

// Delete feed
const deleteFeed = asyncHandler(async (req, res) => {
    try{
        const deletedFeed=await Feed.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"deleted feed is",deletedFeed});
    }catch(err){
        res.status(400).json({ message: "Error in deleting feed" });
    }
})

// Upvote feed
const upvoteFeed = asyncHandler(async (req, res) => {
    try{
        const feed=await Feed.findById(req.params.id);
        if(feed.upVotes.includes(req.user._id)){
            await feed.updateOne({$pull:{upVotes:req.user._id}});
            res.status(200).json({msg:"upvote removed"});
        }else{
            await feed.updateOne({$push:{upVotes:req.user._id}});
            res.status(200).json({msg:"upvote added"});
        }
    }catch(err){
        res.status(400).json({ message: "Error in upvoting feed" });
    }
})


module.exports={ createFeed, getAllFeeds, updateFeed, deleteFeed, upvoteFeed}
