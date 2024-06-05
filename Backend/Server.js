const express = require("express");
const app = express();
const mongoose = require("mongoose");
const projectroute = require("./router/Projectrouter");
const userroute = require("./router/Userrouter");
const cors = require("cors");
require("dotenv").config();

//middleware
app.use(cors());
app.use('/uploads',express.static("uploads"));
app.use(express.json());

//logging middleware
app.use((req, res, next) => {
  console.log(`path ${req.path} method ${req.method}`);
  next();
});

//routes
app.use("/api/project", projectroute);
app.use("/api/project", userroute);

//mongodb connection
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
