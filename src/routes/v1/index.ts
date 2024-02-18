import express from "express";
import { createUser } from "../../controllers/user.controller";
import { validateUserRequest } from "../../middlewares/user-request.middleware";

const router = express.Router();

router.post("/signup", validateUserRequest, createUser);

export default router;
