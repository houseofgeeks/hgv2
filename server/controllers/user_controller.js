const asyncHandler = require('express-async-handler');
const User = require('../models/user_model');
const generateToken = require('../config/jwt');
const bcrypt = require('bcryptjs');
const cloudinary =require("../config/cloudinary")

const { formatFileSize } = require("../config/multer");
const createUser=asyncHandler(async(req,res)=>{
    const {name,email,isAdmin,password,rollNo,linkedin_url,github_username,resume_url,portfolio_url,twitter_url,instagram_url,leetcode_username,codeforces_username}=req.body;
    if(!name || !email || !password||!req.file){
        res.status(400).json({message: "Please fill all the fields"});
    }
    const checkUser=await User.findOne({email});
    if(checkUser){
        res.status(400).json({message: "User with this email already exists"});
    }
    var salt=await bcrypt.genSalt(10);
    let uploadedFile={}
    let fileData={}
    if(req.file)
    {
        try {
            uploadedFile=await cloudinary.uploader.upload(req.file.path,{
                folder:"hgv2",
                resource_type:"image"
            }   )
            
        } catch (error) {
            res.status(500).json({message:"Error in uploading profile pic."
            
            })
        } 
        fileData={
            filename:req.file.originalname,
            filePath:uploadedFile.secure_url,
            fileType:req.mimetype,
            fileSize:formatFileSize(req.file.size,2)
        }
    }
    const newUser=new User({
        name: name,
        email: email,
        password: bcrypt.hashSync(password,salt),
        rollNo: rollNo!==undefined?rollNo:null,
        linkedin_url: linkedin_url!==undefined?linkedin_url:null,
        github_username: github_username!==undefined?github_username:null,
        resume_url: resume_url!==undefined?resume_url:null,
        portfolio_url: portfolio_url!==undefined?portfolio_url:null,
        twitter_url: twitter_url!==undefined?twitter_url:null,
        instagram_url: instagram_url!==undefined?instagram_url:null,
        leetcode_username: leetcode_username!==undefined?leetcode_username:null,
        codeforces_username: codeforces_username!==undefined?codeforces_username:null,
        image: fileData,
        isAdmin: isAdmin!==undefined?isAdmin:false,        
    })
    const result=await newUser.save();
    if(result){
        res.status(201).json(
            {
                newUser,
                token: generateToken(newUser._id),
            }
        );
    }else{
        res.status(400).json({message: "Invalid user data"});
    }
});

const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        res.status(400).json({message: "Please fill all the fields"});
    }

    const user=await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const {password,...docs} = user.toObject();
        res.status(200).json(
            {
                user:docs,
                token: generateToken(user._id),
            }
        );
    }else {
        res.status(401).json({message: "Invalid email or password"});
    }
})

module.exports={createUser,loginUser};
