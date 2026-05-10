const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email:{type:String , required:true , unique:true},
    password:{type:String , required:true , select:false},
    firstname:{type:String , required:true},
    lastname:{type:String , default:null},
    location:{
        lat:{type:String},
        ing:{type:String}
    }
})

const User = mongoose.model("User" ,userSchema)
module.exports = User