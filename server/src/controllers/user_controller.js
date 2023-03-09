const asyncHandler = require('express-async-handler');
const User = require('../models/user_model');
const generateToken = require('../config/jwt');
const bcrypt = require('bcryptjs');
const createUser=asyncHandler(async(req,res)=>{
    const {name,email,isAdmin,password,rollNo,linkedin_url,github_username,resume_url,portfolio_url,twitter_url,instagram_url,leetcode_username,codeforces_username}=req.body;
    if(!name || !email || !password){
        res.status(400).json({message: "Please fill all the fields"});
    }
    const checkUser=await User.findOne({email});
    if(checkUser){
        res.status(400).json({message: "User with this email already exists"});
    }
    var salt=await bcrypt.genSalt(10);
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
        image: null,
        isAdmin: isAdmin!==undefined?isAdmin:false,        
    })
    const result=await newUser.save();
    if(result){
        res.status(201).json(
            {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                rollNo: newUser.rollNo,
                linkedin_url: newUser.linkedin_url,
                github_username: newUser.github_username,
                resume_url: newUser.resume_url,
                portfolio_url: newUser.portfolio_url,
                twitter_url: newUser.twitter_url,
                instagram_url: newUser.instagram_url,
                leetcode_username: newUser.leetcode_username,
                codeforces_username: newUser.codeforces_username,
                image: newUser.image,
                isAdmin: newUser.isAdmin,
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
        res.status(200).json(
            {
                _id: user._id,
                name: user.name,
                email: user.email,
                rollNo: user.rollNo,
                linkedin_url: user.linkedin_url,
                github_username: user.github_username,
                resume_url: user.resume_url,
                portfolio_url: user.portfolio_url,
                twitter_url: user.twitter_url,
                instagram_url: user.instagram_url,
                leetcode_username: user.leetcode_username,
                codeforces_username: user.codeforces_username,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            }
        );
    }else {
        res.status(401).json({message: "Invalid email or password"});
    }
})

module.exports={createUser,loginUser};