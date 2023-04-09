const PostModal = require("../modal/Post");

const createPost = async (req, res) => {
  try {
    const post = new PostModal({ ...req.body });
    await post.save();
    res.status(200).send({
      status: "success",
      message: "Post created successfully",
      data: post,
    });
  } catch (er) {
    res.status(404).send({ status: "error", message: er.message });
  }
};

const getPostById = async (req, res) => {
  let { id } = req.params;
  try {
    let singlePost = await PostModal.findOne({ _id: id });
    res.status(200).send({
      status: "success",
      message: "Post get successfully",
      data: singlePost,
    });
  } catch (er) {
    res.status(404).send({ status: "error", message: er.message });
  }
};

const updatePost = async (req, res) => {
  let { id } = req.params;
  let { content } = req.body;
  try {
    let singlePost = await PostModal.findOne({ _id: id });
    if (singlePost) {
      let updatedPost = await PostModal.findByIdAndUpdate(
        id,
        { content },
        { new: true }
      );
      res.status(200).send({
        status: "success",
        message: "Post data updated successfully",
        data: updatedPost,
      });
    } else {
      res.status(404).send({ status: "error", message: "Post not found" });
    }
  } catch (er) {
    res.status(404).send({ status: "error", message: er.message });
  }
};

const deletePost = async (req, res) => {
  let { id } = req.params;
  try {
    let singlePost = await PostModal.findOne({ _id: id });
    if (singlePost) {
      let deletedPost = await PostModal.findByIdAndDelete(id);
      res.status(200).send({
        status: "success",
        message: "Post deleted successfully",
        data: deletedPost,
      });
    } else {
      res.status(404).send({ status: "error", message: "Post not found" });
    }
  } catch (er) {
    res.status(404).send({ status: "error", message: er.message });
  }
};

module.exports = { createPost, getPostById, updatePost, deletePost };
