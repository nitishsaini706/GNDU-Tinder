const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = mongoose.model('User')

router.get('/', (req,res)=>{
    res.send("Hello");
})

router.post('/signup',(req,res)=>{
    const {name,email,password} =req.body;
    if(!email || !name || !password)
    {
        req.status(442).json({error:"please add all fields"})
    }
    user.findOne({email:email}).then((savedUser)=>{
        if(savedUder){
            return res.status(422).json({error:"user already exist with this email"})
        }
        const user =  new User({
            email,password,name
        })

        user.svae()
        .then(user => {
            res.json({message:"Saved credentials"})
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;