const User = require("../models/User")
const UserStorage = require("../models/UserStorage")
const logger = require("../config/logger")

const output = {
  home: (req, res) => {
    logger.info(`GET / 200 home`)
    res.render("home")
  },
  login: (req, res) => {
    logger.info(`GET /login 200 login`)
    res.render("login")
  },
  register: (req, res) => {
    logger.info(`GET /register 200 register`)
    res.render("register")
  },
}

const process = {
  login: async (req, res) => {
    const user = new User(req.body)
    const response = await user.login()
    if (response.err)
      logger.error(`POST /login 200 Response: "success: ${response.success}, ${response.err }"`)
    else
      logger.info(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.message}"`
      )
    return res.json(response)
  },
  register: async (req, res) => {
    const user = new User(req.body)
    const response = await user.register()
    if (response.err)
      logger.error(`POST /register  200 Response: "success: ${response.success}, ${response.err}"`)
    else
      logger.info(
        `POST /register 200 Response: "success: ${response.success}, msg: ${response.message}"`
      )
    return res.json(response)
  },
}

module.exports = { output, process }
