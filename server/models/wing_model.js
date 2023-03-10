const mongoose = require('mongoose');
const wingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    levels: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Level'
        }
    ]
}, { timestamps: true });

const Wing = mongoose.model('Wing', wingSchema);

module.exports = Wing;

