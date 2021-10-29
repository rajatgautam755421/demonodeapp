const UploadModel = require("../models/upload.model");

exports.createUpload = async (req, res, next) => {
  await UploadModel.create({
    title: req.body.title,
    description: req.body.description,
    categoryImage: req.file.originalname,
  });
  try {
    res.status(201).json({
      status: "Success",
      message: "Uploaded",
    });
  } catch (error) {
    next(error);
    res.json(error);
  }
};

exports.allUploads = async (req, res) => {
  const response = await UploadModel.find().sort({ date: -1 });
  try {
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.deleteById = async (req, res) => {
  ID = req.params.id;
  const deletedData = await UploadModel.findByIdAndRemove(ID);
  try {
    res.status(200).json({
      status: "success",
      data: deletedData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.updatePost = async (req, res) => {
  const ID = req.params.id;
  console.log(ID);
  const data = await UploadModel.findByIdAndUpdate(
    { _id: ID },
    {
      title: req.body.title,
      description: req.body.description,
    }
  );
  try {
    res.status(200).json({
      status: "Success",
      message: data,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findAPost = async (req, res) => {
  const Id = req.params.id;
  const response = await UploadModel.findById(Id);
  try {
    res.status(200).json({
      title1: response.title,
      desc1: response.description,
      img1: response.categoryImage,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
