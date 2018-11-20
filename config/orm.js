var connection = require('../config/connection');

const qMarks = (num) => {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
};

// const objToSql = (ob) => {
//   for (var key in ob) {
//     var value = ob[key];

//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === 'string' && value.indexOf(' ') >= 0) {
//         value = `'${value}'`;
//       }

//       arr.push(`${key} = ${value}`);
//     }
//   }
//   return arr.toString();
// };

var orm = {
  all: (table, cb) => {
    var qString = `SELECT * FROM ${table};`;
    connection.query(qString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertData: (table, cols, vals, cb) => {
    var qString = `INSERT INTO ${table}`;
    var colsS = cols.toString();
    var qS = qMarks(vals.length);

    qString += ` (${colsS}) VALUES (${qS}) `

    console.log(qString);

    connection.query(qString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  delete: (table, condition, cb) => {
    var qString = `DELETE FROM ${table} WHERE ${condition}`;

    console.log(qString);

    connection.query(qString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;