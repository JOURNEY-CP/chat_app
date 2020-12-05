var express = require('express');
var router = express.Router();

const moneyRouter = DBConnect => {
  return router;
};

router.get('/', function(req, res, next) {
  res.send("hello");
});

module.exports = moneyRouter;
