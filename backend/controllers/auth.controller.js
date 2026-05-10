const User = require("../models/user.model")
const { hash_password, compare_password } = require("../utils/bcrypt")
const { generateAccessToken } = require("../utils/token")

const register = async (req, res, next) => {
    try {

        const { email, password, lastname, firstname } = req.body

        if (!email || !password || !firstname) {
            return res.status(400).json({ success: false, message: "add a required fields" })
        }

        const hashed_password = await hash_password(password)

        const user = await User.create({
            email,
            password: hashed_password,
            firstname,
            lastname: lastname ? lastname : null
        })

      const token =   generateAccessToken(user._id)

      res.json({success:true , token})

    } catch (err) {
next(err)
    }
}

const login = async (req , res ,next)=>{
try {
    
    const {email , password} = req.body

    if (!email || !password) {
        return res.status(400).json({success:false , message:"email and password is required"})
    }

    const user = await User.findOne({email}).select("+password")

    if (!user) {
        return res.status(401).json({success:false , message:"invalid email or password"})
    }

    const isMatch = await compare_password(user.password , password)

    if(!isMatch){
        return res.status(401).json({success:false , message:"invalid email or password"})
    }

    const token = generateAccessToken(user._id)

    res.json({success:true , token})

} catch (err) {
    next(err)
}
}


module.exports = {
    register,
    login
}