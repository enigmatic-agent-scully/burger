var connection = require('../config/connection');
var mysql = require('mysql');


const objToSql = (ob) => {
  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }

      arr.push(`${key} = ${value}`);
    }
  }
  return arr.toString();
};

var orm = {
  all: (table, cb) => {
    var sql = `SELECT * FROM ${table};`;
    connection.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertData: (table, cols, vals, cb) => {
    var sql = `INSERT INTO ${table}`;
    var colsS = cols.toString();
    sql += ` (${colsS}) VALUES ('${vals}');`;
    console.log(sql);

    connection.query(sql, vals, (err, result) => {
      if (err) throw (err);
      cb(result);
    });
  },
  update: (table, objColVals, condition, cb) => {
    var sql = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
    console.log(sql);

    connection.query(swl, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  delete: (table, col, val, cb) => {
    var sql = `DELETE FROM ?? WHERE ?? = ?`;
    var values = [table, col, val];
    sql = mysql.format(sql, values);
    console.log(sql);

    connection.query(sql, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;