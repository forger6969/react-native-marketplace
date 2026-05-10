const Product = require("../models/product.model")

const addNewProduct = async (req, res, next) => {
    try {
        const { title, describe, price, category, params } = req.body

        if (!title || !price || !category) {
            return res.status(400).json({ success: false, message: "validation error" })
        }

        const images = req.images
        console.log(images);
        
        const product = Product.create({
            title,
            describe: describe ? describe : null,
            price,
            category:category ? category : null,
            params:params ? params : [],
            images
        })

    } catch (err) {
        next(err)
    }
}

module.exports = {addNewProduct}