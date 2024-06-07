const mongoose = require("mongoose");
const schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require('bcrypt');

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

user.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmpassword = undefined;
  next();
});

user.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model('user',user);
