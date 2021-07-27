require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require("../models/User");

passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
}, async(accessToken, refreshToken, profile, done) => {
    const user = { name: profile.displayName, email: profile.emails[0].value };
    await new User(user).save();
}));