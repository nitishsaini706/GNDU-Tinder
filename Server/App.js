const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const mongoose = require("mongoose");
// const {MONGOURI} = require('./keys')
const port = 3000;
// require("./models/user");

dotenv.config();


// middleware 

app.use(express.json());  // it parses post request for use
app.use(helmet());
app.use(morgan("common"));

// app.use("./routes/auth");

mongoose.connect(process.env.mongo_url,{UseNewUrlParser:true,useUnifiedTopology:true} , ()=> {
    console.log("connected to mongo db")
});

// mongoose.connection.on('connected', ()=> {
//     console.log(("connected to mongo"));
// })

// mongoose.connection.on('error',(err)=>{
//     console.log('err connecting',err);
// })

app.listen(port , ()=>{
    console.log("APP is running on ",port);
})