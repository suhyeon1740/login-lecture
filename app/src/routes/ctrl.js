const UserStorage = require("../models/UserStorage")

const output = {
  home: (req, res) => res.render("home"),
  login: (req, res) => res.render("login"),
}

const process = {
  login: (req, res) => {
    const { id, pw } = req.body
    const response = {}
    const users = UserStorage.getUsers("id", "pw")
    const idx = users.id.indexOf(id)
    if (idx > -1) {
      if (users.pw[idx] === pw) {
        response.success = true
        return res.json(response)
      }
    }

    response.success = false
    response.message = "로그인에 실패하였습니다"
    return res.json(response)
  },
}

module.exports = { output, process }
