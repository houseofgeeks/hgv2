import InterfaceAnnoucement, { Annoucement } from "../models/annoucement.model";

const createAnnoucement = async (data: InterfaceAnnoucement) => {
  try {
    const response = await Annoucement.create(data);
    return response.toObject();
  } catch (error) {
    console.log("There is Error in Annoucement - Repository Layer", error);
    throw error;
  }
};

const getAnnoucementById = async (id: string) => {
  try {
    const response = await Annoucement.findById(id)
      .populate("user", "-password")
      .lean()
      .exec();
    return response;
  } catch (error) {
    console.log("There is Error in Annoucement - Repository Layer", error);
    throw error;
  }
};

const updateAnnoucement = async (id: string, data: any) => {
  try {
    const response = await Annoucement.findByIdAndUpdate(id, data, {
      new: true,
    })
      .lean()
      .exec();
    return response;
  } catch (error) {
    console.log("There is Error in Annoucement - Repository Layer", error);
    throw error;
  }
};

const deleteAnnoucement = async (id: string) => {
  try {
    const response = await Annoucement.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("There is Error in Annoucement - Repository Layer", error);
    throw error;
  }
};

const getAllAnnoucements = async () => {
  try {
    const response = await Annoucement.find({})
      .populate("user", "-password")
      .lean()
      .exec();
    return response;
  } catch (error) {
    console.log("There is Error in Annoucement - Repository Layer", error);
    throw error;
  }
};

export default {
  createAnnoucement,
  getAnnoucementById,
  updateAnnoucement,
  getAllAnnoucements,
  deleteAnnoucement,
};
