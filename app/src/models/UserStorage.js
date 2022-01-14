const fs = require("fs").promises

class UserStorage {
  static #users = {
    id: ["admin", "user"],
    pw: ["1111", "1234"],
    name: ["a", "b"],
  }

  static #getUserInfo(data, id) {
    const users = JSON.parse(data)
    const idx = users.id.indexOf(id)
    return Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx]
      return newUser
    }, {})
  }

  static getUsers(...fields) { // 미사용
    return fields.reduce((newUsers, field) => {
      newUsers[field] = this.#users[field]
      return newUsers
    }, {})
  }

  static async getUserInfo(id) {
    const data = await fs.readFile("./src/databases/users.json")
    try {
      return this.#getUserInfo(data, id)
    } catch (err) {
      throw err
    }
  }

  static save(userInfo) {
    const { id, pw, name } = userInfo
    const users = this.#users
    users.id.push(id)
    users.pw.push(pw)
    users.name.push(name)
    return { success: true }
  }
}

module.exports = UserStorage
