const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const mongoose = require("mongoose");
const port = 8800;
// require("./models/user");
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const multer = require('multer');
const path = require("path");
dotenv.config();


// middleware 

app.use(express.json());  // it parses post request for use
app.use(helmet());
app.use(morgan("common"));

app.use('/images',express.static(path.join(__dirname,"public/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
const upload = multer({ storage: storage });
app.post( "api/upload", upload.single('file') ,(req,res)=>{
    try{
        return res.status(200).json("FILe uploaded successfully");
    }
    catch(err)
    {
        console.log(err);
    }
})

// routes 
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

mongoose.connect(process.env.mongo_url,{UseNewUrlParser:true,useUnifiedTopology:true} , ()=> {
    console.log("connected to mongo db")
});

app.get("/",(req,res) =>{
    res.send("home page");
})

app.listen(port , ()=>{
    console.log("APP is running on ",port);
})