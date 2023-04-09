const express = require("express");
const {
  createPost,
  getPostById,
  updatePost,
  deletePost,
} = require("../controller/post");

const PostRouter = express.Router();

PostRouter.post("/posts", createPost);
PostRouter.get("/posts/:id", getPostById);
PostRouter.put("/posts/:id", updatePost);
PostRouter.delete("/posts/:id", deletePost);

module.exports = PostRouter;
