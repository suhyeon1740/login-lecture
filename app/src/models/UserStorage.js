const fs = require("fs").promises

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data)
    const idx = users.id.indexOf(id)
    return Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx]
      return newUser
    }, {})
  }

  static #getUsers(isAll, fields, data) {
    const users = JSON.parse(data)
    if (isAll) return users
    return fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})
  }

  static async getUsers(isAll, ...fields) {
    const data = await fs.readFile("./src/databases/users.json") // 경로는 app.js 기준
    try {
      return this.#getUsers(isAll, fields, data)
    } catch (err) {
      throw err
    }
  }

  static async getUserInfo(id) {
    const data = await fs.readFile("./src/databases/users.json") // 경로는 app.js 기준
    try {
      return this.#getUserInfo(data, id)
    } catch (err) {
      throw err
    }
  }

  static async save(userInfo) {
    const { id, pw, name } = userInfo
    const users = await this.getUsers(true)
    if (users.id.includes(id)) {
      throw "이미 존재하는 아이디입니다"
    }
    users.id.push(id)
    users.pw.push(pw)
    users.name.push(name)
    fs.writeFile("./src/databases/users.json", JSON.stringify(users))
    return { success: true }
  }
}

module.exports = UserStorage
