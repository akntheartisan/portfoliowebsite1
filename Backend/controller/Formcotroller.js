const formModel = require("../models/Form");
const sendMail = require('../utils/sendMail');

exports.postForm = async (req, res) => {
  console.log(req.body);
  try {
    // Data storing in database
    const newForm = await formModel.create(req.body);
    console.log(newForm);

    res.status(200).json({
      status: "success",
      data: { form: newForm },
    });

    // Mail send
    await sendMail({
      mail: req.body.mail,
      subject: 'Company Contacted',
      text: `This ${req.body.companyname} tried to contact you`,
    });

  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
