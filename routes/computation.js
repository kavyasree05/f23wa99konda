var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 if(req.query.x==undefined) {
    munna = Math.random();
 } 
 else {
    munna = req.query.x;
 }
 var result = Math.abs(munna);
  res.render('computation', { bonusresult: `Math.abs(${munna}) is ${result}` });
});

module.exports = router;