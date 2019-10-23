const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
require('dotenv').config();

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        938333565907 -
        hvsc5165tkonkgt9nj6g0697nr04mrl6.apps.googleusercontent.com,
      clientSecret: q3lOixhfsptj4qdM4Uba1uPG,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //Find the user id
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) return done(null, existingUser);
      //Store the new user id
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
