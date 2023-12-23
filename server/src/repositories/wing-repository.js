const Wing = require("../model/wing.model");

// Create a new wing
const createWing = async (wing) => {
  try {
    const newWing = await Wing.create(wing);
    return newWing;
  } catch (error) {
    console.log("There is an error in creating wing - Repository layer");
    throw error;
  }
};

// Get all wings
const getAllWings = async () => {
  try {
    const wings = await Wing.find({});
    return wings;
  } catch (error) {
    console.log("There is an error in getting all wings - Repository layer");
    throw error;
  }
};

// Get a single wing
const getWing = async (id) => {
  try {
    const wing = await Wing.findById(id);
    return wing;
  } catch (error) {
    console.log("There is an error in getting wing - Repository layer");
    throw error;
  }
};

// Update a wing

const updateWing = async (id, wingData) => {
  try {
    const reponse = await Wing.findByIdAndUpdate({ _id: id }, wingData, {
      new: true,
    });
    return reponse;
  } catch (error) {
    console.log("There is an error in updating wing - Repository layer");
    throw error;
  }
};

// Delete a wing

const deleteWing = async (id) => {
  try {
    const response = await Wing.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("There is an error in deleting wing - Repository layer");
    throw error;
  }
};

module.exports = {
  createWing,
  getAllWings,
  getWing,
  updateWing,
  deleteWing,
};
