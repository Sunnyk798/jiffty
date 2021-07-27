const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (e) {
		console.log(e);
		res.json({ err: e });
	}
});

router.post("/new", async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		res.status(200).send("ok");
	} catch (e) {
		console.log(e);
		res.json({ err: e });
	}
});

module.exports = router;
