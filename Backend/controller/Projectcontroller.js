const mongoose = require("mongoose");
const projectmodel = require("../models/Project");
const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    
    cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 6 * 1000 * 1000,
  },
});

let uploadHandler = upload.single("image");

const createTask = async function (req, res) {

  const {link,desc,title} = req.body; 
  const imagepath = req.file.filename;
  console.log(req.file);

  try {

    const project = await projectmodel.create({
      image:imagepath,
      desc,
      link,
      title
    });

    res.status(200).json({
       status:"success",
       data:{project:project}
    });
    
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async (req,res,next)=>{
  
  try {
    const allprojects = await projectmodel.find();
    res.status(200).json(allprojects);
  } catch (error) {
    console.log(error);
  }

}

module.exports = { uploadHandler, createTask, getProjects };