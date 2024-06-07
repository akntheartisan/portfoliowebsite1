const mongoose = require("mongoose");
const usermodel = require("../models/User");
const jwt = require("jsonwebtoken");

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

exports.signin = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);

  //validation for getting email and password. if there is anyone is missing error message will shown.

  if (!username || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Email and Password are required",
    });
  }

  //after getting username and password check if it is correct by comparing token original token and test token

  const userCheck = await usermodel.findOne({ username }).select("+password");
  console.log(userCheck);

  if (
    !userCheck ||
    !(await userCheck.correctPassword(password, userCheck.password))
  ) {
    return res.status(401).json({
      status: "fail",
      message: "Authentication failed",
    });
  }
  // if correct proceed signin operation
  const token = jwt.sign({ id: userCheck._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });

  res.cookie("jwt", token, {
    expires: new Date(Date.now(90 * 24 * 3600 * 1000)),
    httpsOnly: true,
  });

  res.status(200).json({
    status: "success",
    token,
  });

};

exports.protect = async (req, res, next) => {
    console.log('thisistriggered');
    //1) get the token from the header
  let token;

  if (
    req.header("Authorization") &&
    req.header("Authorization").split(" ")[1]
  ) {
    token = req.header("Authorization").split(" ")[1];
  } else {
    res.status(401).json({
      status: "fail",
      message: "Not authenticated",
    });
  }

  //2)verify token

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_Secret);
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "Token expired please login again",
    });
  }

  console.log(decoded.id);

  //3) check if user still exists

  const checkUser = await usermodel.findById(decoded.id);

  if (!checkUser) {
    return res.status(401).json({
      status: "fail",
      message: "This user is no longer exists",
    });
  }
};
