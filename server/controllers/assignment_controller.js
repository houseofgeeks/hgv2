const Assignment = require("../models/assignment_model");
const Level = require("../models/level_model");
const asyncHandler=require("express-async-handler");
const create = async (req, res) => {
    try {
        const newAssignment = await Assignment.create({
            name: req.body.name,
            description: req.body.description
        });
        const assignment = await Level.findByIdAndUpdate(req.body.levelId, { $push: { assignments: newAssignment._id } }, { new: true });
        res.status(201).json({
            message: "Assignment added successfully",
            assignment
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong, unable to add assignment",
            status: false,
            error: error,
        });
    }
};

const submitAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        assignment.submitted.push({
            user: req.user._id,
            projectURL: req.body.projectURL,
        });
        await assignment.save();
        res.status(200).json(assignment);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong, unable to submit assignment",
            status: false,
            error: error,
        });
    }
};
const verifyAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        assignment.submitted.forEach((submission) => {
            if (submission.projectURL == req.body.projectURL) {
                submission.verified = true;
            }
        });
        await assignment.save();
        res.status(200).json({
            message: "Assignment URL verified successfully",
            assignment
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong, unable to verify assignment",
            status: false,
            error: error,
        });
    }
};

//get assignment by level id 
// const getAssignmentbyLevelId=asyncHandler(async(req,res)=>{
//     const {levelId}=req.params;
//     if(levelId==":levelId"){
//         return res.status(401).json({message:"Cannot find the assignment without the level id"});
//     }
//     //doubt here
// })

module.exports = {
    create,
    submitAssignment,
    verifyAssignment
};