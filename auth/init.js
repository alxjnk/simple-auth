const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const user = require('./user')

passport.use(new LocalStrategy(
    function(username, password, done) {
            if (username !== user.username) {
                return done(null, false, { message: 'Invalid username or password' })
            }
            if (password !== user.password ) {
                return done(null, false, { message: 'Invalid username or password' })
            }
            return done(null, username)
    }
))

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
  });