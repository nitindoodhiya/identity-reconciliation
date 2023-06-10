var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/identify', function(req, res, next) {
  res.render('identify', { title: 'Express' });
});

router.post('/identify', function(req, res, next) {
  const { email, phoneNumber } = req.body;
  res.send({ email, phoneNumber});
});

module.exports = router;
