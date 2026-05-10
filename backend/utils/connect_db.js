require("dotenv").config()
const mongoose = require("mongoose")

const connect_db = async ()=>{
    try {
        
        mongoose.connect(process.env.MONGODB_URI)
        console.log("data base is connected");
        

    } catch (err) {
        console.log("error to connect to database");
        
    }
}

module.exports = connect_db