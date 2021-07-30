const express = require("express");
const router = express.Router();

const User = require("../models/User");
const authCheck = require("./auth-check");

router.get("/profile", authCheck, (req, res) => {
    res.send(req.user);
});

router.get("/logout", (req, res) => {
    req.logout();
    res.send("You are logged out");
});

router.patch("/update", authCheck, async(req, res) => {
    try {
        const userID = req.user.id;
        const updated_data = req.body;
        const result = await User.findByIdAndUpdate(userID, updated_data);
        res.json({ updates: updated_data });
    } catch (err) {
        res.json({ error: err });
    }
})

module.exports = router;