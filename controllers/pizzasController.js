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

router.post('/api/pizzas', (req, res) => {
  pizza.create([
    'name'
  ], [
      req.body.name
    ], result => {
      res.json({ id: result.insertId })
    });
});

router.delete('/api/pizzas/:id', (req, res) => {
  var conditon = `id = ${req.params.id}`;

  pizza.delete(condition, result => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    }
    else {
      res.status(200).end();
    }
  });
});

module.exports = router;