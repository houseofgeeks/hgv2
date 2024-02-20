import { userServices } from "../services";
import type { createUserRequest, signInRequest } from "../typeDefs/app-request";
import { Response, Request } from "express";
import { uploadImage } from "../config/cloudinary.config";

const createUser = async (req: createUserRequest, res: Response) => {
  try {
    if (req.file) {
      const imageUrl = await uploadImage(req.file);
      req.body.profile_image = imageUrl;
    }
    const user = await userServices.createUser(req.body);
    return res.status(201).json({
      data: { user },
      message: "User created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error.message || "User creation failed",
      success: false,
      err: error,
    });
  }
};

const signIn = async (req: signInRequest, res: Response) => {
  try {
    const response = await userServices.signIn(req.body);
    return res.status(200).json({
      data: response,
      message: "User Login Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error.message || "Token Invalid",
      success: false,
      err: error,
    });
  }
};

export { createUser, signIn };
