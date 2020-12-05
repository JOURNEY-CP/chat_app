var express = require('express');
var router = express.Router();

var indexDb = require('../db/index');
let indexDbConnect;
const indexRouter = DBConnect => {
  indexDbConnect = indexDb(DBConnect);
  return router;
};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = indexRouter;
