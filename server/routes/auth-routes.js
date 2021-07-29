const router = require("express").Router();
const passport = require("passport")

router.get("/google", passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get("/google/redirect", passport.authenticate('google'), (req, res) => {
    res.redirect("/users/user");
})


router.get("/logout", (req, res) => {
    req.logout();
    res.send("You are logged out");
});

module.exports = router;