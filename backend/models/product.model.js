const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    describe: { type: String, default: null },
    price: { type: Number, required: true },
    category: { type: String, default: null },
    images:[
        {
            imageUrl:{type:String}
        }
    ],

    params: [
        {
            key: { type: String },
            value: { type: String }
        }
    ],

    reviews: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: { type: String },
            rating: { type: Number, min: 0, max: 5 }
        }
    ],
    rating:{type:Number , min:0 , max:5 , default:0}
})

const Product = mongoose.model("Product" , productSchema)
module.exports = Product