const LikeModel = require("../models/like.model");

const likeAPost = async (req, res) => {
  const response = await LikeModel.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = likeAPost;
