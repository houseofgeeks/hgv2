const mongoose = require("mongoose")


const projectSchema = mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    leadBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    wingsInvolved: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wing'
        }
    ],
    peopleInvolved:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User' 
        }
    ],
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("Project", projectSchema);