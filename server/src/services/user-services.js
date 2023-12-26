const { UserRepository } = require("../repositories");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../config/env.config");

const createUser = async (user) => {
  try {
    const newUser = await UserRepository.createUser(user);
    return newUser;
  } catch (error) {
    console.log("There is an error in creating user - Service layer");
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await UserRepository.getAllUsers();
    return users;
  } catch (error) {
    console.log("There is an error in getting all users - Service layer");
    throw error;
  }
};

const getUser = async (id) => {
  try {
    const user = await UserRepository.getUser(id);
    return user;
  } catch (error) {
    console.log("There is an error in getting user - Service layer");
    throw error;
  }
};

const updateUser = async (id, userData) => {
  try {
    const response = await UserRepository.updateUser(id, userData);
    return response;
  } catch (error) {
    console.log("There is an error in updating user - Service layer");
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await UserRepository.deleteUser(id);
    return response;
  } catch (error) {
    console.log("There is an error in deleting user - Service layer");
    throw error;
  }
};

const signIn = async (email, password) => {
  try {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      console.log("User not found"); // for debugging
      throw new Error("User not found");
    }
    const isMatch = await checkPassword(password, user.password);
    if (!isMatch) {
      console.log("Incorrect password"); // for debugging
      throw new Error("Incorrect password");
    }
    const token = createToken({
      id: user._id,
      email: user.email,
    });
    return token;
  } catch (error) {
    console.log("There is an error in signing in - Service layer"); // for debugging
    throw error;
  }
};

const isAuthenticated = async (token) => {
  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      console.log("Invalid token"); // for debugging
      throw new Error("Invalid token");
    }
    const user = await UserRepository.getUser(decoded.id);
    if (!user) {
      console.log("User not found"); // for debugging
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.log("There is an error in authenticating user - Service layer"); // for debugging
    throw error;
  }
};

const createToken = (user) => {
  try {
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.log("There is an error in creating token - Service layer");
    throw error;
  }
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    console.log("There is an error in verifying token - Service layer");
    throw error;
  }
};

const checkPassword = async (password, userPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, userPassword);
    return isMatch;
  } catch (error) {
    console.log("There is an error in checking password - Service layer");
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
