var orm = require('../config/orm');

var pizza = {
  all: (cb) => {
    orm.all('pizzas', (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
    orm.insertData('pizzas', cols, vals, (res) => {
      var data = res;
      cb(data);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update('pizzas', objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (col, val, cb) => {
    orm.delete('pizzas', col, val, (res) => {
      cb(res);
    });
  }
};

module.exports = pizza;