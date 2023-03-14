const projectDB=require('../models/project_model')

const asyncHandler=require("express-async-handler")

const createProject=asyncHandler(async(req,res)=>{
    const {status,leadBy,title,description,peopleInvolved,wingsInvolved,}=req.body
    if(!status||!title||!description)
    {
        res.status(400).json({message:"Please fill in all the details"})
    }
    const newProject=new projectDB({
        status:status,
        leadBy:leadBy,
        title:title,
        description:description,
        peopleInvolved:peopleInvolved,
        wingsInvolved:wingsInvolved
    })

    try {
        const savedProject=await newProject.save();
        res.status(200).json({message:"Saved the project Successfully",savedProject})

    } catch (error) {
        console.log("Error in saving new project")
        console.log(error)
        res.status(400).json({message:"Error in saving new project"})
    }
})

const getProject=asyncHandler(async(req,res)=>{
    try {
        const id=req.params.id;
        const project=await projectDB.findById({_id:id}).populate('wingsInvolved').populate('peopleInvolved').populate('leadBy')
        
        res.status(200).json({message:"Project found",project})
    } catch (error) {
        console.log("Error in finding the project")
        console.log(error);
        res.status(404).json({message:"Project not found"})
    }
}
)
const deleteProject=asyncHandler(async(req,res)=>{
    try {
        const id=req.params.id;
        const deletedProject=await projectDB.findByIdAndDelete({_id:id})
        res.status(200).json({message:"Deleted project Successfully",deletedProject})
    } catch (error) {
        console.log("Error in finding the project")
        console.log(error);
        res.status(404).json({message:"Project not found"})
    }
}
)

const getAllProjects=asyncHandler(async(req,res)=>{
    try {
        const projects=await projectDB.find().populate('wingsInvolved').populate('peopleInvolved').populate('leadBy')
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        console.log("Error in getting all the projects")
        res.status(400).json({message:"Error in getting all the projects"})
    }


})

const updateProjectStatus=asyncHandler(async(req,res)=>{
   const{status}=req.body;

   try {
    const updatedProject=await projectDB.findByIdAndUpdate({_id:req.params.id},{
        status:status
    },{new:true})
    res.status(200).json({message:"Updated Successfully",updatedProject})
   } catch (error) {
        res.status(400).json({message:"Error in updating projects"})
        console.log(error)
   }
})
const updateProjectPeople=asyncHandler(async(req,res)=>{
   const{people}=req.body;

   try {
    const updatedProject=await projectDB.findByIdAndUpdate({_id:req.params.id},{
        $push:{peopleInvolved:{people}}
    },{new:true})
    res.status(200).json({message:"Updated Successfully",updatedProject})
   } catch (error) {
        res.status(400).json({message:"Error in updating projects"})
        console.log(error)
   }
})


module.exports={createProject,getProject,getAllProjects,updateProjectStatus,updateProjectPeople,deleteProject}