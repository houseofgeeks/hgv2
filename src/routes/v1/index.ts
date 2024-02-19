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
import { createAnnoucement } from "../../controllers/annoucement.controller";
import { checkAdmin } from "../../middlewares/auth.middleware";

const router = express.Router();

// We will separate each route to its own file

// User Routes
router.post("/signup", upload.single("image"), validateUserRequest, createUser);
router.post("/signin", signIn);

// Feed Routes
router.post("/feeds", createFeed);

router.post("/feeds/upvote/:id", upvotesFeed);

router.delete("/feeds/:id", deleteFeed);

router.get("/feeds/:id", getFeed);

router.get("/feeds", checkAdmin, getAllFeeds);

// Annoucement Routes
router.post("/announcements", checkAdmin, createAnnoucement);

export default router;
