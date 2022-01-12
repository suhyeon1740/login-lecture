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
}

module.exports = UserStorage
