require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require("../models/User");

passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ email: profile.emails[0].value })
        .then((signed_user) => {
            if (signed_user) {
                console.log(`Hey ${profile._json.given_name}, you are already our member!`);
                done(null, signed_user);
            } else {
                const user = { name: profile.displayName, email: profile.emails[0].value, profile_pic_url: profile._json.picture };
                new User(user).save()
                    .then((res) => {
                        console.log(res);
                        done(null, signed_user);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        })
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user)
        })
})