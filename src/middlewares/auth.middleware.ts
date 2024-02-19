import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index";
import InterfaceUser, { User } from "../models/user.model";

// interface CustomRequest extends Request {
//   body: any;
// }

// const checkLogin = (req: CustomRequest, res: Response, next: NextFunction) => {
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res
//         .status(401)
//         .json({ success: false, message: "No token, authorization denied" });
//     }

//     try {
//       const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
//       req.id = decoded.id;
//       next();
//     } catch (error) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Token is not valid" });
//     }
//   } else {
//     return res
//       .status(401)
//       .json({ success: false, message: "No token, authorization denied" });
//   }
// };

const checkAdmin = async (req: any, res: Response, next: NextFunction) => {
  var token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      req.body.user = (await User.findById(decoded.id as any)
        .select("-password")
        .lean()) as InterfaceUser & Document;
      if (
        req.body.user.userType === "lead" ||
        req.body.user.userType === "coordinator"
      ) {
        next();
      } else {
        return res.status(401).json({
          success: false,
          message: "Unauthorized, user is not an admin",
        });
      }
    } catch (err) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized, token failed" });
    }
  } else {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }
};

export { checkAdmin };
