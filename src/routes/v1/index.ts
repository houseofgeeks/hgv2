import express from "express";
import { createUser, signIn } from "../../controllers/user.controller";
import { validateUserRequest } from "../../middlewares/user-request.middleware";

const router = express.Router();

router.post("/signup", validateUserRequest, createUser);
router.post("/signin", signIn);

export default router;
