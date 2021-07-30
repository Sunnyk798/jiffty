const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/User");
const authCheck = require("./auth-check");

router.get("/", authCheck, async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (e) {
        console.log(e);
        res.json({ err: e });
    }
});

router.get("/user", authCheck, (req, res) => {
    res.send(req.user);
});

module.exports = router;