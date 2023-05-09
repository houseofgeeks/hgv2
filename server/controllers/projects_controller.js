const projectDB = require('../models/project_model')
const userDb = require('../models/user_model')
const asyncHandler = require("express-async-handler")
const cloudinary = require("../config/cloudinary");
const createProject = asyncHandler(async (req, res) => {
    const { status, leadBy, title, description, peopleInvolved, wingsInvolved, } = req.body
    if (!status || !title || !description) {
        res.status(400).json({ message: "Please fill in all the details" })
    }
    
    const uploadedFile = await cloudinary.uploader.upload(image, {
        folder: "hgv2",
    });
    console.log(uploadedFile);
    const newProject = new projectDB({
        status: status,
        leadBy: leadBy,
        title: title,
        description: description,
        peopleInvolved: [leadBy],
        wingsInvolved: wingsInvolved,
        image: uploadedFile.secure_url,
    })

    try {
        const savedProject = await newProject.save();
        console.log(savedProject)
        const updateUser = await userDb.findByIdAndUpdate({ _id: leadBy }, {
            $push: { projectsInvolved: savedProject._id }
        }, { new: true })
        res.status(200).json({ message: "Saved the project Successfully", savedProject })

    } catch (error) {
        console.log("Error in saving new project")
        console.log(error)
        res.status(400).json({ message: "Error in saving new project" })
    }
})

const getProject = asyncHandler(async (req, res) => {

    try {

        const project = await projectDB.findById({ _id: req.params.id }).populate('leadBy').populate('wingsInvolved').populate('peopleInvolved');
        if (!project) {
            res.status(404).json({ message: "Project not found" });
        }
        else {
            res.status(200).json({ message: "Project Found", project });
        }
    } catch (error) {
        res.status(400).json({ message: "Error occured in finding the project", error })
    }
}
)
const deleteProject = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const project = await projectDB.findById({ _id: id })
        if (!project) {
            res.status(404).json({ message: "Project Not found" })
        }
        else {
            const deletedProject = await projectDB.findByIdAndDelete({ _id: id })
            res.status(200).json({ message: "Project deleted successfully", deletedProject })
        }
    } catch (error) {
        console.log("Error in deleting the project")
        console.log(error);
        res.status(400).json({ message: "Project not deleted" })
    }
}
)

const getAllProjects = asyncHandler(async (req, res) => {
    try {
        const projects = await projectDB.find().populate('wingsInvolved').populate('peopleInvolved').populate('leadBy')
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        console.log("Error in getting all the projects")
        res.status(400).json({ message: "Error in getting all the projects" })
    }


})

const getUpcomingProjects = asyncHandler(async (req, res) => {
    try {
        const project = await projectDB.find({ status: /^upcoming$/i }).populate('wingsInvolved').populate('peopleInvolved').populate('leadBy')
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ message: "Error in geting Upcoming project" })
    }

})
const getOngoingProjects = asyncHandler(async (req, res) => {
    try {
        const project = await projectDB.find({ status: /^ongoing$/i }).populate('wingsInvolved').populate('peopleInvolved').populate('leadBy')
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ message: "Error in geting Ongoing project" })
    }
})
const getPastProjects = asyncHandler(async (req, res) => {
    try {
        const project = await projectDB.find({ status: /^past$/i }).populate('wingsInvolved').populate('peopleInvolved').populate('leadBy')
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ message: "Error in geting Past project" })
    }
})

const updateProjectStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const project = await projectDB.findById({ _id: req.params.id })
    try {
        if (project) {
            const updatedProject = await projectDB.findByIdAndUpdate({ _id: req.params.id }, {
                status: status
            }, { new: true })
            res.status(200).json({ message: "Updated Successfully", updatedProject })
        }
        else {
            res.status(404).json({ message: "Project Not Found" })
        }
    } catch (error) {
        res.status(400).json({ message: "Error in updating projects" })
        console.log(error)
    }
})
const updateProjectPeople = asyncHandler(async (req, res) => {
    const { people } = req.body;
    console.log(people)
    const id = req.params.id
    const project = await projectDB.findById({ _id: req.params.id })
    console.log(project)
    try {
        if (project) {
            const updatedProject = await projectDB.findByIdAndUpdate(id, {
                $push: { peopleInvolved: people }
            }, { new: true })
            const updateUser = await userDb.findByIdAndUpdate({ _id: people }, {
                $push: { projectsInvolved: id }
            }, { new: true })
            res.status(200).json({ message: "Updated Successfully", updatedProject })
        }
        else {
            res.status(404).json({ message: "Project Not Found" })
        }
    } catch (error) {
        res.status(400).json({ message: "Error in updating project people" })
        console.log(error)
    }
})


module.exports = { createProject, getProject, getAllProjects, getUpcomingProjects, updateProjectStatus, updateProjectPeople, getOngoingProjects, getPastProjects, deleteProject }