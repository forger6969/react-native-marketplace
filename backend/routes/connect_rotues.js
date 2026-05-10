const authRouter = require("./auth.routes")

const connect_routes = (app)=>{

    app.use("/api/auth" , authRouter)

}

module.exports = connect_routes