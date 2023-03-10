const mongoose = require('mongoose');

const subtopicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    resources: [
        {
            type: String
        }
    ],
    compltetdBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subtopic',
            index:true
        }
    ]
});

const Subtopic = mongoose.model('Subtopic', subtopicSchema);

module.exports = Subtopic;