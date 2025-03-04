var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    res.render('test', {title: '아주대에 오신걸 환영합니다.'});
});


router.get('/modal', function(req, res, next) {
    res.render('modal', {title: 'HELLO!'});
});

router.get('/instagram', function(req, res, next) {
    res.render('instagram', {title: 'HELLO!'});
});

router.get('/insta', function(req, res, next) {
    res.render('example', {title: 'SHINEE KEY(@bumkeyk)'});
});


router.get('/test0608', function(req, res, next) {
    res.render('test0608', {title: 'asdf'});
});

router.get('/kakaotalk', function(req, res, next) {
    res.render('kakaomain', {title: '카카오톡'});
});

router.get('/kakao', function(req, res, next) {
    res.render('kakaomain', {title: '로그인'});
});

router.get('/kakaofriend', function(req, res, next) {
    res.render('kakaofriend', {title: '카카오톡2'});
});

router.get('/kakaochat', function(req, res, next) {
    res.render('kakaochat', {title: '카카오톡2'});
});

router.get('/kakaosetting', function(req, res, next) {
    res.render('kakaosetting', {title: '카카오톡2'});
});

router.get('/kakaouserchat', function(req, res, next) {
    res.render('kakaouserchat', {title: '카카오톡2'});
});

router.get('/kakaoprofile', function(req, res, next) {
    res.render('kakaoprofile', {title: '카카오톡2'});
});

router.get('/calculator', function(req, res, next) {
    res.render('calculator', {title: '계산기'});
});
router.get('/06test', function(req, res, next) {
    res.render('06test', {title: 'test'});
});

router.get('/jsonfilter', function(req, res, next) {
    res.render('jsonfilter', {title: 'test'});
});

router.get('/kakao-test', function(req, res, next) {
  res.render('kakao-test', {title: 'test'});
});


router.get('/button-test', function(req, res, next) {
  res.render('button-test', {title: 'test'});
});

router.get('/fractal', function(req, res, next) {
  res.render('fractal', {title: 'test'});
});

router.get('/testAlbum', function(req, res, next) {
  res.render('testAlbum', {title: 'test'});
});

router.get('/particle', function(req, res, next) {
  res.render('particle', {title: 'test'});
});

router.get('/new', function(req, res, next) {
  res.render('newFractal', {title: 'test'});
});

router.get('/progress', function(req, res, next) {
  res.render('progresstest', {title: 'test'});
});

router.get('/data', function(req, res, next) {
  res.render('csv', {title: 'test'});
});

router.get('/galleryTest', function(req, res, next) {
  res.render('galleryTest', {title: 'test'});
});

router.get('/afilter', function(req, res, next) {
  res.render('filter', {title: 'test'});
});



module.exports = router;
