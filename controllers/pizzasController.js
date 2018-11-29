var express = require('express');
var router = express.Router();
var pizza = require('../models/pizza');

router.get('/', (req, res) => {
  pizza.all(data => {
    var hbsObj = {
      pizzas: data
    };
    console.log(hbsObj);
    res.render('index', hbsObj);
  });
});

router.get('/api/pizzas', (req, res) => {
  pizza.all(data => {
    var hbsObj = {
      pizzas: data
    };
    res.json(hbsObj);
  });
});

router.post('/api/pizzas', (req, res) => {
  pizza.create('pizza', req.body.pizza, result => {
    res.json(result);
  })
});

router.put('/api/pizzas/:id', (req, res) => {
  var condition = `id = ${req.params.id}`;
  pizza.update(
    'devoured', req.body.devoured, condition, (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      }
      else {
        res.status(200).end();
      }
    });
});

router.delete('/api/pizzas/:id', (req, res) => {
  var column = `id`;
  var id = req.params.id;

  pizza.delete(column, id, result => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    }
    else {
      res.status(200).end();
    }
  });
});

module.exports = router;