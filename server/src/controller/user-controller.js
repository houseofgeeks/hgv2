const UserServices = require("../services/user-services");
const { success, error } = require("../utils/response");
const { handleUpload } = require("../config/cloudinary.config");

const createUser = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    req.body.image = cldRes.secure_url;

    const newUser = await UserServices.createUser(req.body);
    return success(res, newUser, "User created successfully", 201);
  } catch (err) {
    console.log("There is an error in creating user - Controller layer"); // for debugging
    return error(res, err, 500);
  }
};

module.exports = {
  createUser,
};
