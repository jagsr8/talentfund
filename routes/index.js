var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Students = mongoose.model('Student')
var Sponsors = mongoose.model('Sponsor');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/student/:id', function(req, res, next){
  Students.findById(req.params.id, function(err, get){
    if (err) {
      return next(err);
    }
    res.json(get);
  });
});

router.get('/student', function(req, res, next){
  Students.find(function(err, get){
    if (err) {
      return next(err);
    }
    res.json(get);
  });
});

router.post('/student', function(req, res, next){
  Students.create(req.body, function(err, post){
    if (err) {
      return next(err);
    }
    res.json({ message: 'Bear created!' });
    res.json(post);
  });

});

router.get('/sponsors/:id', function(req, res, next){
  Sponsors.findById(req.params.id, function(err, get){
    if (err) {
      return next(err);
    }
    res.json(get);
  });
});

router.post('/sponsors', function(req, res, next){
  Sponsors.create(req.body, function(err, post){
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});

module.exports = router;
