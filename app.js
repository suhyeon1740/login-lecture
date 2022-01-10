const express = require("express")
const app = express()
app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/login", (req, res) => res.render("login"))
module.exports = app
