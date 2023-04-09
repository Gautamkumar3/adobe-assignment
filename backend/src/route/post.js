const express = require("express");
const {
  createPost,
  getPostById,
  updatePost,
  deletePost,
  increasePostCount,
  decreasePostCount,
  getTotalPost,
  getTopMostLikedPosts,
} = require("../controller/post");

const PostRouter = express.Router();

PostRouter.post("/posts", createPost);
PostRouter.get("/posts/:id", getPostById);
PostRouter.put("/posts/:id", updatePost);
PostRouter.delete("/posts/:id", deletePost);
PostRouter.post("/posts/:id/like", increasePostCount);
PostRouter.post("/posts/:id/dislike", decreasePostCount);
PostRouter.get("/analytics/posts", getTotalPost);
PostRouter.get("/analytics/posts/top-liked", getTopMostLikedPosts);

module.exports = PostRouter;
