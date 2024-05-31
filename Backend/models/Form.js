const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Form = new schema({
    name:{
        type:String,
    },
    companyname:{
        type:String
    },
    mail:{
        type:String,
        // unique:true
    },
    location:{
        type:String,
    },
    rating:{
        type:Number
    }
},{timestamps:true});

module.exports = mongoose.model('form',Form);