var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res) {
  res.render('index', { 
    status: 'Ready to upload',
    newImage: 'http://placehold.it/175x175'
  });
});

module.exports = router;
