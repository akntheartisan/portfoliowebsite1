const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

app.use(cors());

app.use((req, res, next) => {
  console.log(`path ${req.path} method ${req.method}`);
  next();
});

app.use(express.static("./public"));
app.use(express.json());

let stroage = multer.diskstroage({
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

let upload = multer({
  storage: storage,
  limits: {
    filesize: 2 * 1000 * 1000,
  },
});

let uploadHandler = upload.single("image");

app.post("/upload", (req, res) => {
  uploadHandler(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      if (err.code == "LIMIT_FILE_SIZE") {
        return res.status(413).json("File size too large");
      } else if (!req.file) {
        return res.status(400).json("no file uploaded");
      } else {
        return res.status(200).json("file successfully uploaded");
      }
    }
  });
});

const MONGO_URI =
  "mongodb+srv://aravinthkumaran410:weor61fbFSWw5Gb6@cluster0.l5xhzbs.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log(`listening to ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
