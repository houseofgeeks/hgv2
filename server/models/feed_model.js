const mongoose = require("mongoose");
const feedSchema = new mongoose.Schema(
  {
    staus: {
      type: Boolean,
      default: true,
    },
    feedDetails: {
      type: String,
      required: true,
    },
    upVotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Feed = mongoose.model("Feed", feedSchema);
module.exports = Feed;
