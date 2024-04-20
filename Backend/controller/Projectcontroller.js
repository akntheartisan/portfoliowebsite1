const mongoose = require("mongoose");
const projectmodel = require("../models/Project");
const multer = require("multer");
const path = require("path");

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1000 * 1000,
  },
}).single("image");

// Middleware function to handle file upload
const uploadHandler = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      if (err.code == "LIMIT_FILE_SIZE") {
        return res.status(413).json("File size too large");
      } else {
        return res.status(400).json("File upload error");
      }
    } else if (err) {
      return res.status(500).json("Internal server error");
    }
    next();
  });
};

// Controller function to create a task (handle form data)
const createTask = async (req, res) => {
  console.log(req.file);
  const { link, desc } = req.body;
  const imagePath = req.file.path;

  try {
    const myObj = new projectmodel({
      image: imagePath,
      link,
      desc,
    });
    await myObj.save();
    return res.status(200).json(myObj);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { uploadHandler, createTask };
