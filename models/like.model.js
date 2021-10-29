const { Schema, model } = require("mongoose");

const likeSchema = new Schema({
  likes: {
    type: Number,
    default: 1,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "UploadModel",
    required: true,
  },
});

module.exports = new model("LikeModel", likeSchema);
