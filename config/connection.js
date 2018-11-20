var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'pizzasdb'
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id' + connection.threadId);
});

module.exports = connection;