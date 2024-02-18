import { Request } from "express";
import InterfaceUser from "../models/user.model";

export interface createUserRequest extends Request {
  body: InterfaceUser;
}
