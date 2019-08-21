var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */

router.get('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}), function(req, res) {
  console.log(req.user)
});

router.get('/login', function(req, res) {
  res.render('login');
});


router.post('/login', function(req, res) {
  passport.authenticate('local',
    function(err, user, info) {
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('/private');
            })
          : res.redirect('/');
    })
});

module.exports = router;
