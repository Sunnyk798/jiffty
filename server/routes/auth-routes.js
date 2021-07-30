const router = require("express").Router();
const passport = require("passport")

router.get("/google", passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get("/google/redirect", passport.authenticate('google'), (req, res) => {
    res.redirect("/user/profile");
});

module.exports = router;