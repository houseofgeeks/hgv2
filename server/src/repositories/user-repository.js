const User = require("../model/user.model");

// Create a new user
const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.log("There is an error in creating user - Repository layer");
    throw error;
  }
};

// Get all users
const getAllUsers = async () => {
  try {
    const users = (await User.find({})).select("-password");
    return users;
  } catch (error) {
    console.log("There is an error in getting all users - Repository layer");
    throw error;
  }
};

// Get a single user
const getUser = async (id) => {
  try {
    const user = await User.findById(id).select("-password");
    return user;
  } catch (error) {
    console.log("There is an error in getting user - Repository layer");
    throw error;
  }
};

// Update a user
const updateUser = async (id, userData) => {
  try {
    const response = await User.findByIdAndUpdate({ _id: id }, userData, {
      new: true,
    });
    return response;
  } catch (error) {
    console.log("There is an error in updating user - Repository layer");
    throw error;
  }
};

// Delete a user
const deleteUser = async (id) => {
  try {
    const response = await User.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("There is an error in deleting user - Repository layer");
    throw error;
  }
};

const getUserByEmail = async (email) => {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      console.log("There is an error in getting user - Repository layer");
      throw error;
    }
}

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserByEmail
};
