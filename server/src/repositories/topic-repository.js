const Topic = require("../model/topic.model");

// Create a new topic
const createTopic = async (topic) => {
  try {
    const newTopic = await Topic.create(topic);
    return newTopic;
  } catch (error) {
    console.log("There is an error in creating topic - Repository layer");
    throw error;
  }
};

// Get all topics

const getAllTopics = async () => {
    try {
        const topics = await Topic.find({});
        return topics;
    } catch (error) {
        console.log("There is an error in getting all topics - Repository layer");
        throw error;
    }
    }

// Get a single topic

const getTopic = async (id) => {
    try {
        const topic = await Topic.findById(id);
        return topic;   
    } catch (error) {
        console.log("There is an error in getting topic - Repository layer");   
        throw error;
    }
}


// Update a topic

const updateTopic = async (id, topicData) => {
    try {
        const response = await Topic.findOneAndUpdate({_id: id}, topicData, {new: true});
        return response;
    } catch (error) {
        console.log("There is an error in updating topic - Repository layer");
        throw error;
    }
}

// Delete a topic

const deleteTopic = async (id) => {
    try {
        const response = await Topic.findByIdAndDelete(id);
        return response;
    } catch (error) {
        console.log("There is an error in deleting topic - Repository layer");
        throw error;
    }
}   


module.exports = {
    createTopic,
    getAllTopics,
    getTopic,
    updateTopic,
    deleteTopic
}   