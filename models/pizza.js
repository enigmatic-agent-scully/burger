var orm = require('../config/orm');

var pizza = {
  all: (cb) => {
    orm.all('pizzas', (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
    orm.create('pizzas', cols, vals, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete('cats', condition, (res) => {
      cb(res);
    });
  }
};

module.exports = pizza;