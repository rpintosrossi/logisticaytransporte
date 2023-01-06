var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:param', function(req, res, next) {
    res.render('logistica', { title: req.params.param,test:"Logistica" });
});

module.exports = router;



