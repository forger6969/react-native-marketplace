require("dotenv").config()
const jwt = require("jsonwebtoken")

const adminMiddleware = async (req , res, next)=>{

    try {

const decoded = await jwt.verify(token , process.env.ADMIN_JWT_SECRET)


    } catch (err) {
        
    }

}