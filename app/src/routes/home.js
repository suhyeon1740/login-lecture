const express = require("express")
const route = express.Router()
route.get("/login", (req, res) => res.render("login"))
module.exports = route
