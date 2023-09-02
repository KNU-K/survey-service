const mysql = require("mysql");
const mysql_config = {
  user: "root",
  password: "root",
  database: "exam",
  port: 3306,
  host: "localhost",
};

module.exports = {
  conn: mysql.createConnection(mysql_config),
};
