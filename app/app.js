const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const logger = require("./src/config/logger")
dotenv.config()

const app = express()

const home = require("./src/routes")

app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/src/public`))
app.use(express.json())
app.use(morgan("tiny", { stream: logger.stream }))

app.use("/", home)

module.exports = app
