const Level = require("../model/level.model");

// Create a new level

const createLevel = async (level) => {
  try {
    const newLevel = await Level.create(level);
    return newLevel;
  } catch (error) {
    console.log("There is an error in creating level - Repository layer");
    throw error;
  }
};

// Get all levels

const getAllLevels = async () => {
  try {
    const levels = await Level.find({});
    return levels;
  } catch (error) {
    console.log("There is an error in getting all levels - Repository layer");
    throw error;
  }
};

// Get a single level

const getLevel = async (id) => {
  try {
    const level = await Level.findById(id);
    return level;
  } catch (error) {
    console.log("There is an error in getting level - Repository layer");
    throw error;
  }
};

// Update a level

const updateLevel = async (id, levelData) => {
  try {
    const response = await Level.findOneAndUpdate({ _id: id }, levelData, {
      new: true,
    });
    return response;
  } catch (error) {
    console.log("There is an error in updating level - Repository layer");
    throw error;
  }
};

// Delete a level

const deleteLevel = async (id) => {
  try {
    const response = await Level.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("There is an error in deleting level - Repository layer");
    throw error;
  }
};

module.exports = {
  createLevel,
  getAllLevels,
  getLevel,
  updateLevel,
  deleteLevel,
};
