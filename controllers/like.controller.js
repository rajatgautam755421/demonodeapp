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

const likedPosts = async (req, res) => {
  const response = await LikeModel.aggregate([
    {
      $group: {
        _id: "$post",
        totalLikes: { $sum: "$likes" },
      },
    },
  ]);
  try {
    res.status(200).json({
      status: "Success",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { likeAPost, likedPosts };
