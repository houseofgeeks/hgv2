import feedServices from "../services/feed.services";
import type { createFeedRequest } from "../typeDefs/app-request";
import { Response, Request } from "express";

const createFeed = async (req: createFeedRequest, res: Response) => {
  try {
    const feed = await feedServices.createFeed(req.body);
    return res.status(201).json({
      data: feed,
      message: "Feed created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error?.message || "Feed creation failed",
      success: false,
      err: error,
    });
  }
};

const upvotesFeed = async (req: Request, res: Response) => {
  try {
    const response = await feedServices.upvotesFeed(
      req.params.id,
      req.body.userId,
    );
    return res.status(200).json({
      data: response.upvote,
      message: response.message,
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error?.message || "Feed Upvote Failed",
      success: false,
      err: error,
    });
  }
};

const getFeed = async (req: Request, res: Response) => {
  try {
    const response = await feedServices.getFeedById(req.params.id);
    return res.status(200).json({
      data: response,
      message: "Feed Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error.message || "Failed to retrieve Feed",
      success: false,
      err: error,
    });
  }
};

const getAllFeeds = async (req: Request, res: Response) => {
  try {
    const response = await feedServices.getAllFeeds();
    return res.status(200).json({
      data: response,
      message: "Feeds Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error?.message || "Failed to retrieve Feeds",
      success: false,
      err: error,
    });
  }
};

const deleteFeed = async (req: Request, res: Response) => {
  try {
    const response = await feedServices.deleteFeed(req.params.id);

    return res.status(200).json({
      data: response,
      message: "Feed Successfully Deleted",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error?.message || "Failed to delete Feed",
      success: false,
      err: error,
    });
  }
};

export { createFeed, upvotesFeed, deleteFeed, getAllFeeds, getFeed };
