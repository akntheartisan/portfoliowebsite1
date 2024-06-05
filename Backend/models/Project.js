const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectschema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title:{
      type:String,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectschema);
