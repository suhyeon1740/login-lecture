const UserStorage = require("./UserStorage")

class User {
  constructor(body) {
    this.body = body
  }
  async login() {
    const body = this.body
    const { id, pw } = await UserStorage.getUserInfo(body.id)
    if (id) {
      if (body.id === id && body.pw === pw) {
        return { success: true }
      }
      return { success: false, message: "로그인에 실패하였습니다" }
    }
    return { success: false, message: "존재하지 않는 아이디입니다" }
  }
  async register() {
    try {
      const response = await UserStorage.save(this.body)
      return response
    } catch (err) {
      return { success: false, message: err}
    }
  }
}

module.exports = User
