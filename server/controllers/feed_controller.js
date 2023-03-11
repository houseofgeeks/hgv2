const asyncHandler = require("express-async-handler");
const Feed = require("../models/feed_model");
const User = require("../models/user_model");

// create feed
const createFeed = asyncHandler(async (req, res) => {
  const { feedDetails } = req.body;
  const user = req.user._id;

  if (!feedDetails) {
    res.status(400).json({ message: "Please fill all the fields" });
  }

  const newFeed = new Feed({
    feedDetails: feedDetails,
    user,
  });

  const result = await newFeed.save();

  if (result) {
    res.status(201).json({ message: "Feed created successfully", result });
  } else {
    res.status(400).json({ message: "Invalid feed data" });
  }
});

// update feed
const updateFeed = asyncHandler(async (req, res) => {
  try {
    const updatedFeed = await Feed.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ msg: "updated feed is", updatedFeed });
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete feed
const deleteFeed = asyncHandler(async (req, res) => {
  try {
    const deleted = await Feed.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Feed successfully deleted",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all feeds
const getAllFeeds = asyncHandler(async (req, res) => {
  try {
    const feeds = await Feed.find().populate("user");
    res.status(200).json({ msg: "all feeds are", feeds });
  } catch (err) {
    res.status(500).json(err);
  }
});

// upVote the particular feed
const upVoteFeed = asyncHandler(async (req, res) => {
  try {
    const feed = await Feed.findById(req.params.id);
    if (feed.upVotes.includes(req.user._id)) {
      await feed.updateOne({ $pull: { upVotes: req.user._id } });
      res.status(200).json({ msg: "upvote removed" });
    } else {
      await feed.updateOne({ $push: { upVotes: req.user._id } });
      res.status(200).json({ msg: "upvote added" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
  createFeed,
  updateFeed,
  deleteFeed,
  getAllFeeds,
  upVoteFeed,
};
