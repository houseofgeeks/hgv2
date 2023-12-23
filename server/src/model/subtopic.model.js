const mongoose = require("mongoose");

const subtopicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    resources: [
        {
            url: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
                enum: ["read", "watch"],
            },
        },
    ],
    completedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            index: true,
        },
    ],
    topicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
    }
});

const Subtopic = mongoose.model("Subtopic", subtopicSchema);

module.exports = Subtopic;