import InterfaceFeed from "../models/feed.model";
import feedRepository from "../repositories/feed.repository";
import logger from "../utils/logger.utils";

const createFeed = async (data: InterfaceFeed) => {
  try {
    if (!data.feedDetails || !data.tags) {
      throw new Error("Feed Details and Tags are required");
    }

    const response = await feedRepository.createFeed(data);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Feed - Services Layer");
    throw error;
  }
};

const getFeedById = async (id: string) => {
  try {
    const response = await feedRepository.getFeedById(id);
    if (!response) {
      throw new Error("Feed Not Found");
    }
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Feed - Services Layer", error);
    throw error;
  }
};

const updateFeed = async (id: string, data: InterfaceFeed) => {
  try {
    const response = await feedRepository.updateFeed(id, data);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Feed - Services Layer");
    throw error;
  }
};

const deleteFeed = async (id: string) => {
  try {
    const response = await feedRepository.deleteFeed(id);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Feed - Services Layer");
    throw error;
  }
};

const getAllFeeds = async () => {
  try {
    const response = await feedRepository.getAllFeeds();

    return response;
  } catch (error: unknown) {
    logger.error("There is Error in Feed - Services Layer", error);
    throw error;
  }
};

const upvotesFeed = async (id: string, userId: string) => {
  try {
    const data: any = {
      message: null,
      upvote: null,
    };

    const feed = await feedRepository.getFeedById(id);
    const upVotesAsString = feed?.upVotes.map((userId) => userId.toString());

    if (upVotesAsString?.includes(userId)) {
      data.upvote = await feedRepository.updateFeed(id, {
        $pull: { upVotes: userId },
      });
      data.message = "Feed Upvoted Removed Successfully";
    } else {
      data.upvote = await feedRepository.updateFeed(id, {
        $push: { upVotes: userId },
      });
      data.message = "Feed Upvoted Successfully";
    }

    return data;
  } catch (error: unknown) {
    throw error;
  }
};

export default {
  createFeed,
  getFeedById,
  updateFeed,
  getAllFeeds,
  deleteFeed,
  upvotesFeed,
};
