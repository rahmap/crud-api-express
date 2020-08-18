let con = require('../config/db')

module.exports = {
  getAllUser : function (callback) {
    con.query('SELECT * FROM users', callback)
  },
  getUserById : function (id, callback) {
    con.query(`SELECT * FROM users WHERE user_id = ${id}`, callback)
  },
  deleteUser : function (id, callback) {
    con.query(`DELETE FROM users WHERE user_id = ${id}`, callback)
  },
  createUser : function (data, callback) {
    let sql = `INSERT INTO users (user_name, user_address, user_age) VALUES (?,?,?)`
    con.query(sql, [data.name, data.address, data.age], callback)
  },
  editUser : function (data, id, callback) {
    let sql = `UPDATE users SET user_name=?, user_address=?, user_age=? WHERE user_id=?`
    con.query(sql, [data.name, data.address, data.age, id], callback)
  }
}