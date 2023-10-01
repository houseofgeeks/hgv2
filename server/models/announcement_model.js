const mongoose = require("mongoose");
const announncementSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
      default: true,
    },
    announcementDetails: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Announcement = mongoose.model("Announcement", announncementSchema);
module.exports = Announcement;
