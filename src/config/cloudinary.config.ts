import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handleUpload = async (file: any) => {
  const res = await cloudinary.uploader.upload(file, {
    folder: "HGv2",
    resource_type: "auto",
  });
  return res;
};

export const uploadImage = async (data: any) => {
  const b64 = Buffer.from(data.buffer).toString("base64");
  let dataURI = "data:" + data.mimetype + ";base64," + b64;
  const cldRes = await handleUpload(dataURI);
  const imageUrl = cldRes.secure_url;
  return imageUrl;
};
