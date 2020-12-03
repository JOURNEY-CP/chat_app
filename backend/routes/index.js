var express = require('express');
var router = express.Router();

/* GET home page. */
const indexRouter = dbClient => {
  indexDb = indexDb(dbClient);
  return router;
};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = indexRouter;
