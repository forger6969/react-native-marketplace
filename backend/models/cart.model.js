const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId , ref:"User" , unique:true},
    products:[
        {type:mongoose.Schema.Types.ObjectId , ref:"Product"}
    ],
    price:{type:Number ,default:0 }
})

const Cart = mongoose.model("Cart" ,cartSchema )
module.exports = Cart