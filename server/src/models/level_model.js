const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    enrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    topics: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Topic'
        }
    ]
}, { timestamps: true });

const Level = mongoose.model('Level', levelSchema);

module.exports = Level;