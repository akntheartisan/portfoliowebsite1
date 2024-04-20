const express = require("express");
const router = express.Router();

const {
  createTask,
  uploadHandler,
} = require("../controller/Projectcontroller.js");

router.post("/", uploadHandler, createTask);

module.exports = router;
