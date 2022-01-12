class UserStorage {
  static #users = {
    id: ["admin", "user"],
    pw: ["1111", "1234"],
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
}

module.exports = UserStorage
