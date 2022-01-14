const User = require("../models/User")
const UserStorage = require("../models/UserStorage")

const output = {
  home: (req, res) => res.render("home"),
  login: (req, res) => res.render("login"),
  register: (req, res) => res.render("register"),
}

const process = {
  login: (req, res) => {
    const user = new User(req.body)
    const response = user.login()
    return res.json(response)
  },
  register: (req, res) => {
    const user = new User(req.body)
    const response = user.register()
    return res.json(response)
  },
}

module.exports = { output, process }
