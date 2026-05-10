require("dotenv").config()
const app = require("./app")
const connect_db = require("./utils/connect_db")

app.listen(process.env.PORT , ()=>{
    console.log(`server running at http://localhost:${process.env.PORT}`);
connect_db()
})