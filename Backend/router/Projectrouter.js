const express = require("express");
const router = express.Router();

const {
  createTask,
  uploadHandler,
  getProjects
} = require("../controller/Projectcontroller.js");
const Formcontroller = require("../controller/Formcotroller");

router.post("/", uploadHandler, createTask);
router.get("/", getProjects);
router.post("/form",Formcontroller.postForm,Formcontroller.ratingMail);
router.post("/ratingsub/:id",Formcontroller.ratingSubmit);

module.exports = router;
