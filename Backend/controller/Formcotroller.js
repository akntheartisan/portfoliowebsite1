const formModel = require("../models/Form");
const sendMail = require("../utils/sendMail");
const mongoose = require("mongoose");

exports.postForm = async (req, res, next) => {
  let newForm;
  try {
    // Data storing in database
    newForm = await formModel.create(req.body);
    req.body.newId = newForm._id.toHexString();

    res.status(200).json({
      status: "success",
      data: { form: newForm },
    });

    //Mail sent to me
    await sendMail({
      mail: "aravinthkumaran410@gmail.com",
      subject: "Company Contacted",
      text: `This  tried to contact you`,
    });

    // Call next middleware
    next();
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.ratingMail = async (req, res, next) => {
  const formId = req.body.newId;
  console.log("The new form ID is:", formId);

  const url = `http://localhost:3000/${formId}`;

  // Mail send to company
  await sendMail({
    mail: req.body.mail,
    subject: "Company Contacted",
    text: `Thank you for visit my website. please click the link ${url} to rate my website`,
  });

  next();
};

exports.ratingSubmit = async (req, res, next) => {
  const { rating } = req.body;
  const id = req.params.id;
  console.log(id);
  const findUser = await formModel.findById(id);
  if (!findUser) {
    console.log("invalid user");
    return res.status(400).json({
      status: "fail",
      message: "Invalid user",
    });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  try {
    const findUserAndUpdate = await formModel.findByIdAndUpdate(id, {
      rating: rating,
    });
    res.status(200).json({
      status: "success",
      data: { form: findUserAndUpdate },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
