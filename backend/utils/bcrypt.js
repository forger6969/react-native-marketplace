const bcrypt = require("bcrypt")

const hash_password = async (password)=>{

    try {
        
        const hashed_password = await bcrypt.hash(password , 10)

        return hashed_password

    } catch (err) {
        throw new Error(err.message);
    }

}

const compare_password = async (password_hash , password)=>{

    try {
        
        const isMatch = await bcrypt.compare(password,password_hash)

        return isMatch

    } catch (err) {
        throw new Error(err.message);
    }

}

module.exports = {
    hash_password , compare_password
}