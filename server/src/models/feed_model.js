const mongoose=require('mongoose');
const feedSchema=mongoose.Schema({
    feedDetails:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    upVotes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]
},
{
    timestamps:true
}
)

const Feed=mongoose.model('Feed',feedSchema);
module.exports=Feed;
