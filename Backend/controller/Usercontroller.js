const mongoose = require('mongoose');
const usermodel = require('../models/User');


exports.signup = async (req,res,next)=>{
    try {

        const newuser = await usermodel.create(req.body);
        
        
    } catch (error) {
        
    }
}