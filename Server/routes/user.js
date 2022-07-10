const router = require('express').Router();

router.get("/" , (req,res)=>{
    res.send("users homepage");
})

module.exports = router;