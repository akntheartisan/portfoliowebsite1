const mongoose = require("mongoose");
const schema = mongoose.Schema;
const validator = require("validator");

const user = new schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: 8,
    },
    confirmpassword: {
      type: String,
      required: true,
      validate: {
        validator: function (el) {
          return el === this.password;
        },
      },
      message: "password should be match",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('user',user);
