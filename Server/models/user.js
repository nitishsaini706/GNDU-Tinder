const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:3,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profilPicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followins:{
        type:Array,
        defualt:[]
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model("User",userSchema);