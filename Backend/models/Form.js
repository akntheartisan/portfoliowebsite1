const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Form = new schema({
    name:{
        type:String
    },
    companyname:{
        type:String
    },
    mail:{
        type:String,
        unique:true
    },
    location:{
        type:String,
    }
},{timestamps:true});

module.exports = mongoose.model('form',Form);