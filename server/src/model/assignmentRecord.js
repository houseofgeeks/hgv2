const mongoose=require("mongoose");


const recordeSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    assignmentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Assignment"
    },
    levelId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Level"
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    projectUrl:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
},{timestamps:true});

const AssignmentRecord=mongoose.model("AssignmentRecord",recordeSchema);