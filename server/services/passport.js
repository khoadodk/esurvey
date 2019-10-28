const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
require('dotenv').config();

const User = mongoose.model('users');

// NOTE: user.id is the ID of the record in the DB. NOT the googleId.
// it will take the user.id from the db, serialize it into a token, then run 'done()' to signal completion.
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// will take the serialized 'id' (token) and deserialize it, to obtain their id
// then run 'User.findById(id)' to find user in the db,
// then run 'done()' to signal completion.
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// now we must tell passport that we want it to use cookies in order to keep track of user's session/authentication state.
// this is b/c passport is a very general way of managing authentication
// will do this in index.js

// http://www.passportjs.org/docs/ search for 'new google' and make sure it's for oauth2.0
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //Find the user id
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) return done(null, existingUser);
      //Store the new new user with googleId as profileid
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
// MONGOOSE ASYNCHRONOUS CALLBACKS
// Anytime we access mongo database, no matter what function we use, it is always an asychronous action. To deal with this we must assume that it returns a promise which will be resolved after a user with the given id is found
