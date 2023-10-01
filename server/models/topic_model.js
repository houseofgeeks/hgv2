const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtopics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subtopic",
    },
  ],
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
