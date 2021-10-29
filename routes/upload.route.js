const router = require("express").Router();

const uploadMulter = require("../middlewares/upload");
const {
  createUpload,
  allUploads,
  deleteById,
  updatePost,
  findAPost,
} = require("../controllers/upload.controller");

router.post("/upload", uploadMulter, createUpload);
router.get("/upload", allUploads);
router.get("/upload/:id", findAPost);
router.delete("/upload/delete/:id", deleteById);
router.put("/update/:id", uploadMulter, updatePost);

module.exports = router;
