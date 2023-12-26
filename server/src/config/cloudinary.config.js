const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const handleUpload =async (file)=>{
    const res = await cloudinary.uploader.upload(file,{
        folder: "HGv2",
        resource_type: "auto",
    });
    return res;
}

module.exports = {handleUpload};