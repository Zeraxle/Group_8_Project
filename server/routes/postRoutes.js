import express from "express";
import {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  addLike,
  addLove,
  addHug,
} from "../controller/postController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

router.put("/:id/like", addLike);
router.put("/:id/love", addLove);
router.put("/:id/hug", addHug);

export default router;
