const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
        
    },
    password:{
        type:String,
    },
    // location:{
    //     type:String,
    // },
    // avator:{
    //     type:String,
    // },
    date:{
        type:Date,
        default:Date.now()
    },
    // address:{
    //     type:String,
    // }
})


module.exports = mongoose.model('User',userSchema)