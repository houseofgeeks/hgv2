const { WingRepository } = require('../repositories');


const createWing = async (wing) => {
    try {
        
        const newWing = await WingRepository.createWing(wing);
        return newWing;
    } catch (error) {
        console.log("There is an error in creating wing - Service layer");
        throw error;
    }
}


const getAllWings = async () => {
    try {
        const wings = await WingRepository.getAllWings();
        return wings;
    } catch (error) {
        console.log("There is an error in getting all wings - Service layer");
        throw error;
    }
}

const getWing = async (id) => {
    try {
        const wing = await WingRepository.getWing(id);
        return wing;
    } catch (error) {
        console.log("There is an error in getting wing - Service layer");
        throw error;
    }
}

const updateWing = async (id, wingData) => {
    try {
        const response = await WingRepository.updateWing(id, wingData);
        return response;
    } catch (error) {
        console.log("There is an error in updating wing - Service layer");
        throw error;
    }
}

const deleteWing = async (id) => {
    try {
        const response = await WingRepository.deleteWing(id);
        return response;
    } catch (error) {
        console.log("There is an error in deleting wing - Service layer");
        throw error;
    }
}

module.exports = {
    createWing,
    getAllWings,
    getWing,
    updateWing,
    deleteWing
}


