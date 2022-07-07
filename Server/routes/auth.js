const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.send("Hello");
})

router.post('/signup',(req,res)=>{
    const {name,email,password} =req.body;
    if(!email || !name || !password)
    {
        req.json({error:"please add all fields"})
    }
})

module.exports = router;