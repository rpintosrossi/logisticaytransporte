var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('contacto', { title: 'Contacto De Prueba',test:"Transportes" });
});

module.exports = router;


