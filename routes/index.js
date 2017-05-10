var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var handlebars = [{file : '/javascripts/thumbnail_youtube.hbs', id : 'thumbnail'}];
  res.render('index', { title: 'Express' , handlebars : handlebars  });
});

module.exports = router;
