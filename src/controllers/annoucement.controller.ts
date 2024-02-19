import annoucementServices from "../services/annoucement.services";
import type { createAnnoucementRequest } from "../typeDefs/app-request";
import { Request, Response } from "express";

const createAnnoucement = async (
  req: createAnnoucementRequest,
  res: Response,
) => {
  try {
    // const user = req.user._id;
    // console.log(user);

    const response = await annoucementServices.createAnnoucement(req.body);

    return res.status(201).json({
      data: response,
      message: "Annoucement created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to create Annoucement",
      success: false,
      err: { error },
    });
  }
};

const getAnnoucementById = async (req: Request, res: Response) => {
  try {
    const response = await annoucementServices.getAnnoucementById(
      req.params.id,
    );
    return res.status(200).json({
      data: response,
      message: "Annoucement Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Annoucement",
      success: false,
      err: { error },
    });
  }
};

const updateAnnoucement = async (req: Request, res: Response) => {
  try {
    const response = await annoucementServices.updateAnnoucement(
      req.params.id,
      req.body,
    );
    return res.status(200).json({
      data: response,
      message: "Annoucement Updated Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to update Annoucement",
      success: false,
      err: { error },
    });
  }
};

const deleteAnnoucement = async (req: Request, res: Response) => {
  try {
    const response = await annoucementServices.deleteAnnoucement(req.params.id);
    return res.status(200).json({
      data: response,
      message: "Annoucement Deleted Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to delete Annoucement",
      success: false,
      err: { error },
    });
  }
};

// const getAllAnnoucements = async (req: Request, res: Response) => {
//   try {
//     const response = await annoucementServices.getAllAnnoucements();
//     return res.status(200).json({
//       data: response,
//       message: "Annoucements Retrieved Successfully",
//       success: true,
//       err: {},
//     });
//   } catch (error: any) {
//     return res.status(501).json({
//       message: error.message || "Failed to retrieve Annoucements",
//       success: false,
//       err: { error },
//     });
//   }
// };

export {
  createAnnoucement,
  getAnnoucementById,
  updateAnnoucement,
  deleteAnnoucement,
  //   getAllAnnoucements,
};
