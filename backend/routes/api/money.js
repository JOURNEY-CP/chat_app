var express = require('express');
var router = express.Router();

var moneyDb=require('../../db/money');
let moneyDbConnect;

const moneyRouter = DBConnect => {
  moneyDbConnect=moneyDb(DBConnect);
  return router;
};

router.post('/',(req,res)=>{
  moneyDbConnect.
    createNewAccount(req.body.id,req.body.user_id,req.body.pin)
    .then(()=>res.send("created"))
    .catch(err=>res.status(500).send(err));
});

router.get('/:id',(req,res)=>{
  const id = req.params.id;
  moneyDbConnect.
    getAccountDetails(id)
    .then(data=>res.status(200).send(data))
    .catch(err=>res.status(500).send(err));
});

module.exports = moneyRouter;
