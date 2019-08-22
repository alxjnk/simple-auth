var express = require('express');
var router = express.Router();
const passport = require('passport')
const user = require('../auth/user')


router.get('/', function(req, res) {
  if (req.user) {
    res.render('change', {user: req.user})
  } else {
    res.redirect('/login');
  }
});

router.get('/login', function(req, res) {
  const error = req.flash('error')[0]
  res.render('login', { message: error});
});


router.post('/', function(req, res) {
  user.username = req.body.username;
  res.redirect('/login');
});

router.post('/login', passport.authenticate('local', {
     successRedirect: '/',
     failureRedirect: '/login',
     failureFlash: true
  }));


module.exports = router;
