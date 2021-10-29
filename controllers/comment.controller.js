const CommentModel = require("../models/comment.model");

const postAComment = async (req, res) => {
  const response = await CommentModel.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const findAComment = async (req, res) => {
  const ID = req.params.id;
  const response = await CommentModel.find({ post: ID }).sort({ date: -1 });
  try {
    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { postAComment, findAComment };
