// const asyncHandler= require('express-async-handler');
const Wing = require('../models/wing_model');

const create = async (req, res) => {
    try {
        const wing = await Wing.create(req.body);
        res.status(201).json(wing);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, unable to create wing',
            status: false,
            error: error
        });
    }
}
const getWing=async(req,res)=>{
    try {
        const wing=await Wing.findById(req.params.id).populate({
            path:'levels',
            populate:{
                path:'topics',
                populate:{
                    path:'subtopics'
                }
            }
    });
        res.status(200).json(wing.levels);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, unable to fetch wing',
            status: false,
            error: error
        });
    }
}
const getAll = async (req, res) => {
    try {
        const wings = await Wing.find().populate('lead').populate('coordinators');
        res.status(200).json(wings);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, unable to fetch wings',
            status: false,
            error: error
        });
    }
}
const getWingLevels = async (req, res) => {
    try {
        const wing = await Wing.findById(req.params.id);
        res.status(200).json(wing.levels);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, unable to fetch wing levels',
            error: error
        });
    }
}
const update = async (req, res) => { 
    try {
        const updatedWing = await Wing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedWing);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, unable to update the wing',
            error: error
        });
    }
}
const destroy = async (req, res) => {
    try {
        const deletedWing = await Wing.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Wing deleted successfully',
            deletedWing
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'Something went wrong, unable to delete the wing',
            error: error
        });
    }
}
module.exports = {
    create,
    getAll,
    getWingLevels,
    update,
    destroy,getWing
}