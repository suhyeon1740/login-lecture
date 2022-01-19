const db = require("../config/db")
const fs = require("fs").promises

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?"
      db.query(query, [id], (err, rows) => {
        if (err) reject(err)
        resolve(rows[0])
      })
    })
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const { id, pw, name } = userInfo
      const query = "INSERT INTO users(id,pw,name) VALUES(?,?,?)"
      db.query(query, [id, pw, name], (err, rows) => {
        if (err) reject(`${err}`)
        resolve({ success: true })
      })
    })
  }
}

module.exports = UserStorage
