import { Request } from "express";
import InterfaceUser from "../models/user.model";
import InterfaceFeed from "../models/feed.model";
import InterfaceAnnoucement from "../models/annoucement.model";

export interface createUserRequest extends Request {
  body: InterfaceUser;
}

export interface signInRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export interface createFeedRequest extends Request {
  body: InterfaceFeed;
}

export interface createAnnoucementRequest extends Request {
  body: InterfaceAnnoucement;
}
