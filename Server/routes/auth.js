const router = require('express').Router();

// const mongoose = require('mongoose');
// const user = mongoose.model('User')
// const bcrypt =require('bcryptjs');

// router.post('/signup',(req,res)=>{
//     const {name,email,password} =req.body;
//     if(!email || !name || !password)
//     {
//         req.status(442).json({error:"please add all fields"})
//     }
//     user.findOne({email:email}).then((savedUser)=>{
//         if(savedUder){
//             return res.status(422).json({error:"user already exist with this email"})
//         }
//         bcrypt.hash(password,32)
//         .then(hashedpassword=>{
//             const user =  new User({
//                 email,password:hashedpassword,name
//             })
//         })
        

//         user.svae()
//         .then(user => {
//             res.json({message:"Saved credentials"})
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })

router.get("/" , (req,res)=>{
    res.send("Auth homepage");
})

module.exports = router;