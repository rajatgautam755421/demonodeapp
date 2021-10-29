const router = require("express").Router();
const { likeAPost, likedPosts } = require("../controllers/like.controller");

router.post("/", likeAPost);

router.get("/", likedPosts);

module.exports = router;
