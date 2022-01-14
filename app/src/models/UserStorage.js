class UserStorage {
  static #users = {
    id: ["admin", "user"],
    pw: ["1111", "1234"],
    name: ["a", "b"],
  }

  static getUsers(...fields) {
    return fields.reduce((newUsers, field) => {
      newUsers[field] = this.#users[field]
      return newUsers
    }, {})
  }

  static getUserInfo(id) {
    const users = this.#users
    const idx = users.id.indexOf(id)
    return Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx]
      return newUser
    }, {})
  }

  static save(userInfo) {
    const { id, pw, name } = userInfo
    const users = this.#users
    users.id.push(id)
    users.pw.push(pw)
    users.name.push(name)
    console.log(users)
    return { success: true }
  }
}

module.exports = UserStorage
