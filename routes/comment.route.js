const router = require("express").Router();

const {
  postAComment,
  findAComment,
} = require("../controllers/comment.controller");

router.post("/", postAComment);
router.get("/:id", findAComment);

module.exports = router;
