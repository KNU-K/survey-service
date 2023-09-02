const { conn } = require("../config/db");

module.exports = class UserService {
  static async createUser(user) {
    try {
      conn.query("insert into user set ?", user, (err, result) => {
        if (err) throw err;

        return true;
      });
    } catch (err) {
      throw err;
    }
  }
  static async findUser(id) {
    try {
      return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM user WHERE id = '${id}'`, (err, result) => {
          if (err) reject(err);
          if (result.length) {
            resolve(result[0]);
          } else {
            resolve(null);
          }
        });
      });
    } catch (err) {
      throw err;
    }
  }
};
