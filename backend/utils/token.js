const jwt = require("jsonwebtoken");

const generateAccessToken = (userid) => {
  try {
    const token = jwt.sign(
      { id: userid },
      process.env.AUTH_JWT_SECRET,
      { expiresIn: "2h" }
    );

    return token;
  } catch (err) {
    throw new Error(err.message);
  }
};

const decode_access_token = async (token)=>{
  try {
    const decoded = jwt.verify(
      token,
      process.env.AUTH_JWT_SECRET
    );

    return decoded;
  } catch (err) {
    throw new Error("Invalid or expired token");
  }

}

module.exports = {generateAccessToken , decode_access_token}