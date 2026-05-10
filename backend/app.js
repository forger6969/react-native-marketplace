const express = require("express")
const cors = require("cors")
const connect_routes = require("./routes/connect_rotues")
const errorHandler = require("./middlewares/errorhandler")

const app = express()

app.use(express.json())
app.use(cors())

connect_routes(app)

app.use(errorHandler)

module.exports = app