import express from "express";
import { getFeedPosts, getUserPosts, likePosts } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

//read
router.post("/", verifyToken, getFeedPosts);
router.post("/:userId/posts", verifyToken, getUserPosts);

//update
router.patch("/:id/like", verifyToken, likePosts);

export default router;
