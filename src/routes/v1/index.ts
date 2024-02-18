import express from "express";
import { createUser, signIn } from "../../controllers/user.controller";
import { upload } from "../../config/multer.config";
import {
  createFeed,
  upvotesFeed,
  deleteFeed,
  getAllFeeds,
  getFeed,
} from "../../controllers/feed.controller";
import { validateUserRequest } from "../../middlewares/user-request.middleware";

const router = express.Router();

// We will separate each route to its own file

// User Routes
router.post("/signup", upload.single("image"), validateUserRequest, createUser);
router.post("/signin", signIn);

// Feed Routes
router.post("/feeds", createFeed);

// Upvote Feed
router.post("/feeds/upvote/:id", upvotesFeed);

// Delete Feed
router.delete("/feeds/:id", deleteFeed);

// Get Feed
router.get("/feeds/:id", getFeed);

// Get All Feeds
router.get("/feeds", getAllFeeds);

export default router;
