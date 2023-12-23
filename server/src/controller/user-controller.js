const UserServices = require("../services/user-services");

const createUser = async (req, res) => {
  try {
    const newUser = await UserServices.createUser(req.body);
    return res.status(201).json({
      data: newUser,
      message: "User created successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log("There is an error in creating user - Controller layer");// for debugging
    return res.status(500).json({
      data: {},
      message: "User not created",
      success: false,
      err: {error},
    });
  }
};


module.exports = {
    createUser,
}