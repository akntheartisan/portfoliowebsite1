const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const projectschema = new Schema({
    Image: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
    Link: {
      type: String,
      required: true
    }
  }, { timestamps: true });
  

module.exports = mongoose.model("Project",projectschema);