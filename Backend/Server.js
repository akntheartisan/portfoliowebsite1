const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


app.use((req,res,next)=>{

    console.log(`path ${req.path} method ${req.method}`);
    next();
});

app.get('/', function (req, res) { 
  res.send('Hello World')
});

const MONGO_URI = 'mongodb+srv://aravinthkumaran410:weor61fbFSWw5Gb6@cluster0.l5xhzbs.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(MONGO_URI).then(()=>{
    app.listen(4000,()=>{
        console.log(`listening to ${process.env.PORT}`);
    });
}).catch((err)=>console.log(err)); 

