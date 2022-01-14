const express = require("express")
const route = express.Router()
const ctrl = require('./ctrl')
route.get("/", ctrl.output.home)
route.get("/login", ctrl.output.login)
route.get("/register", ctrl.output.register)
route.post("/login", ctrl.process.login)
module.exports = route
