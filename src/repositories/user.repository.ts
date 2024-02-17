import InterfaceUser, { User } from "../models/user.model";

const createUser = async (
  data: InterfaceUser,
): Promise<InterfaceUser | null> => {
  try {
    const response = await User.create(data);
    return response.toObject();
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

const getUserById = async (id: string): Promise<InterfaceUser | null> => {
  try {
    const response = await User.findById(id)
      .select("-password")
      .populate("projectsInvolved")
      .lean()
      .exec();
    return response;
  } catch (error) {
    console.log("There is Error in Repository Layer");
    throw error;
  }
};

const updateUser = async (
  id: string,
  data: InterfaceUser,
): Promise<InterfaceUser | null> => {
  try {
    const response = await User.findByIdAndUpdate(id, data, {
      new: true,
    })
      .lean()
      .exec();
    return response;
  } catch (error) {
    console.log("There is Error in Repository Layer");
    throw error;
  }
};

const deleteUser = async (id: string): Promise<Object | null> => {
  try {
    const response = await User.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("There is Error in Repository Layer");
    throw error;
  }
};

const getAllUsers = async (): Promise<InterfaceUser[] | null> => {
  try {
    const response = await User.find({})
      .select("-password")
      .populate("projectsInvolved")
      .lean();
    return response;
  } catch (error) {
    console.log("There is Error in Repository Layer");
    throw error;
  }
};

const getUserByEmail = async (email: string): Promise<InterfaceUser | null> => {
  try {
    const response = await User.findOne({ email }).lean();
    return response;
  } catch (error) {
    console.log("There is Error in Repository Layer");
    throw error;
  }
};
export default {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserByEmail,
};
