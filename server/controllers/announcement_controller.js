const asyncHandler = require("express-async-handler");
const Announcement = require("../models/announcement_model");
// const announcement = require('../models/announcement_model');
const User = require("../models/user_model");

// Creating an announcement
const createAnnouncement = asyncHandler(async (req, res) => {
  const { announcementDetails, tags } = req.body;
  const user = req.user._id;
  console.log(user);
  if (!announcementDetails || !tags) {
    res.status(400).json({ message: "Please fill all the fields" });
  }
  const newAnnouncement = new Announcement({
    announcementDetails: announcementDetails,
    user,
  });
  const result = await newAnnouncement.save();
  if (result) {
    res.status(201).json({
      _id: newAnnouncement._id,
      announcementDetails: newAnnouncement.announcementDetails,
      userId: newAnnouncement.user,
      createdAt: newAnnouncement.createdAt,
      userName: user.name,
      userImage: user.image,
      tags: tags
    });
  } else {
    res.status(400).json({ message: "Invalid Announcement data" });
  }
});

// Update Announcement
const updateAnnouncement = asyncHandler(async (req, res) => {
  try {
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res
      .status(200)
      .json({ msg: "updated announcement is", updatedAnnouncement });
  } catch (err) {
    res.status(400).json({ message: "Error in updating announcement" + err });
  }
});

// get all announcements
const getAllAnnouncements = asyncHandler(async (req, res) => {
  const { tag } = req.query;
  const queryObj = {query:{}};
  if (tag) {
    queryObj.query = { $in: { tags: tag } }
  }
  try {
    const announcements = await Announcement.find(queryObj.query).populate("user");
    res.status(200).json(announcements);
  } catch (err) {
    res.status(400).json({ message: "Error in getting announcement" + err });
  }
});

// Delete Announcement
const deleteAnnouncement = asyncHandler(async (req, res) => {
  try {
    const deletedAnnouncement = await Announcement.findByIdAndDelete(
      req.params.id
    );
    res
      .status(200)
      .json({ msg: "deleted announcement is", deletedAnnouncement });
  } catch (err) {
    res.status(400).json({ message: "Error is deleting announcement" + err });
  }
});

module.exports = {
  createAnnouncement,
  getAllAnnouncements,
  updateAnnouncement,
  deleteAnnouncement
};
