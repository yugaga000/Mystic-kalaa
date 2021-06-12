var express = require('express');
var router = express.Router();
let fs = require('fs')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/submit', function(req, res, next) {
  res.render('finalpg')
});

router.get('/artWork', function(req, res, next) {
  res.render('artWork');
});

router.get('/keychain', function(req, res, next) {
  res.render('keychain');
});
router.get('/books', function(req, res, next) {
  res.render('books');
});

router.get('/posters', function(req, res, next) {
  res.render('posters');
});

router.get('/stickers', function(req, res, next) {
  res.render('stickers');
});

router.get('/bwd', function(req, res, next) {
  res.render('bwd');
});

router.get('/wk', function(req, res, next) {
  res.render('wk');
});

router.get('/bookmark', function(req, res, next) {
  res.render('bookmark');
});
module.exports = router;
