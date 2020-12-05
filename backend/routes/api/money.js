var express = require('express');
var router = express.Router();

var moneyDb=require('../../db/money');
let monetDbConnect;

const moneyRouter = DBConnect => {
  moneyDbConnect=moneyDb(DBConnect);
  return router;
};

router.get('/', function(req, res, next) {
  res.send("hello");
});
router.post('/',(req,res)=>{
  moneyDbConnect.
    createNewAccount(req.body.id,req.body.user_id,req.body.pin)
    .then(()=>res.send("created"))
    .catch(err=>res.status(500).send(err));
})

module.exports = moneyRouter;
