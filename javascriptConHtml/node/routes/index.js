var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
console.log("hola");
  res.render('index', { title: 'Expasdasdaress' });
});







module.exports = router;

