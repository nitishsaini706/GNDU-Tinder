const mongoose = require('mongoose');

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
    followings:{
        type:Array,
        defualt:[]
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    },
    department:{
        type:String,
        max:50
    }
},
// will create time stamps everytime schema is updated or created
{timestamps:true}
)

module.export = mongoose.model("User",userSchema);