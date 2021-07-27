const router = require("express").Router();
const passport = require("passport")

router.get("/google", passport.authenticate('google', {
    scope: ['profile']
}));

router.get("/google/redirect", (req, res) => {
    res.send("Great! You are signed in. Tell me what your interests are!");
})

module.exports = router;