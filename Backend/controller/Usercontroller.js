const mongoose = require("mongoose");
const usermodel = require("../models/User");
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    console.log(req.body);
  try {
    const newuser = await usermodel.create(req.body);

    const token = jwt.sign({ id: newuser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    console.log(token);

    res.status(200).json({
      status: "success",
      token,
      data: { user: newuser },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
