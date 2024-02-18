import { userServices } from "../services";
import type { createUserRequest } from "../typeDefs/app-request";
import { Response } from "express";

const createUser = async (req: createUserRequest, res: Response) => {
  try {
    // console.log(req);
    console.log("This is requestBody ", req.body);
    const user = await userServices.createUser(req.body);
    res.status(201).json({
      data: { user },
      message: "User created successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    res.status(400).json({
      data: {},
      message: "User creation failed",
      success: false,
      err: error,
    });
  }
};

export { createUser };
