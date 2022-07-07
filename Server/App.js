const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');
const port = 3000;
require("./models/user");


mongoose.connect(MONGOURI,{
    UseNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected', ()=> {
    console.log(("connected to mongo"));
})

mongoose.connection.on('error',(err)=>{
    console.log('err connecting',err);
})

app.listen(port , ()=>{
    console.log("APP is running on ",port);
})