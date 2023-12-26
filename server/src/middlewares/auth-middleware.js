const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.config");

const authMiddleware = (req, res, next) => {
  const token = req.header["x-auth-token"];
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.id = decoded.id;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
