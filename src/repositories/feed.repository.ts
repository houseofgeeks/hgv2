import InterfaceFeed, { Feed } from "../models/feed.model";
const createFeed = async (
  data: InterfaceFeed,
): Promise<InterfaceFeed | null> => {
  try {
    const response = await Feed.create(data);
    return response.toObject();
  } catch (error: unknown) {
    console.log("There is Error in Feed - Repository Layer");
    throw error;
  }
};
const getFeedById = async (id: string): Promise<InterfaceFeed | null> => {
  try {
    const response = await Feed.findById(id).lean().exec();
    console.log(response);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Feed - Repository Layer");
    throw error;
  }
};
const updateFeed = async (
  id: string,
  data: any,
): Promise<InterfaceFeed | null> => {
  try {
    const response = await Feed.findByIdAndUpdate(id, data, { new: true })
      .lean()
      .exec();
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Feed - Repository Layer");
    throw error;
  }
};
const deleteFeed = async (id: string): Promise<object | null> => {
  try {
    const response = await Feed.findByIdAndDelete(id);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Feed - Repository Layer");
    throw error;
  }
};
const getAllFeeds = async (): Promise<InterfaceFeed[] | null> => {
  try {
    const response = await Feed.find({}).lean();
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Feed - Repository Layer");
    throw error;
  }
};

export default { createFeed, getFeedById, updateFeed, getAllFeeds, deleteFeed };
