var orm = require('../config/orm');

var pizza = {
  all: (cb) => {
    orm.all('pizzas', (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
    orm.insertData('pizzas', cols, vals).then((res) => {
      var data = res;
      cb(data);
    })
      .catch(err => {
        throw err;
      });
  },
  delete: (condition, cb) => {
    orm.delete('pizzas', condition, (res) => {
      cb(res);
    });
  }
};

module.exports = pizza;