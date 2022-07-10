const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        requried:true
    },
    desc:{
        type:String,
        max:500
    },
    img:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    }
},
// will create time stamps everytime schema is updated or created
{timestamps:true}
)

module.export = mongoose.model("Post",postSchema);