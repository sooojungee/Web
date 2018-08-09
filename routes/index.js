var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/firebase', function(req, res, next) {
  res.render('Drive', {title: 'test'});
});

router.get('/babel', function(req, res, next) {
  res.render('babelTest', {title: 'test'});
});



module.exports = router;
