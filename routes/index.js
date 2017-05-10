var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
fs = require('fs');
//var cheerio = require('cheerio');
var file =fs.readFileSync( __dirname + '/../public/javascripts/thumbnail_youtube.hbs', 'UTF-8');
 file = file.toString();
 var handlebars = [{file : '/javascripts/thumbnail_youtube.hbs', id : 'thumbnail', data : file 	}];
 res.render('index', { title: 'Express' , handlebars : handlebars  });
});

module.exports = router;
