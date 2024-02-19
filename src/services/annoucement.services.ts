import annoucementRepository from "../repositories/annoucement.repository";
import InterfaceAnnoucement from "../models/annoucement.model";

const createAnnoucement = async (data: InterfaceAnnoucement) => {
  try {
    const response = await annoucementRepository.createAnnoucement(data);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Annoucement - Services Layer");
    throw error;
  }
};

const getAnnoucementById = async (id: string) => {
  try {
    const response = await annoucementRepository.getAnnoucementById(id);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in getting Annoucement by ID - Services Layer");
    throw error;
  }
};

const updateAnnoucement = async (id: string, data: InterfaceAnnoucement) => {
  try {
    if (!data.announcementDetails || !data.tags) {
      throw new Error("Annoucement Details and Tags are required");
    }

    const response = await annoucementRepository.updateAnnoucement(id, data);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in updating Annoucement - Services Layer");
    throw error;
  }
};

const deleteAnnoucement = async (id: string) => {
  try {
    const response = await annoucementRepository.deleteAnnoucement(id);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in deleting Annoucement - Services Layer");
    throw error;
  }
};

const getAllAnnoucements = async () => {
  try {
    const response = await annoucementRepository.getAllAnnoucements();
    return response;
  } catch (error: unknown) {
    console.log("There is Error in getting all Annoucements - Services Layer");
    throw error;
  }
};

export default {
  createAnnoucement,
  getAnnoucementById,
  updateAnnoucement,
  deleteAnnoucement,
};
