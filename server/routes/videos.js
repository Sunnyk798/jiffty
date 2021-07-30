const express = require("express");
const router = express.Router();

const Video = require("../models/Video");

const dummy = [
	{
		id: 1,
		name: "NodeJS Tutorial",
	},
	{
		id: 2,
		name: "React Tutorial",
	},
	{
		id: 3,
		name: "Figma Tutorial",
	},
];

router.post("/upload", async (req, res) => {
	try {
		const videoData = req.body;
		const video = new Video(videoData);
		await video.save();
		res.send("ok");
	} catch (e) {
		console.log(e);
		res.json({ err: e });
	}
});

router.get("/", async (req, res) => {
	try {
		const videos = await Video.find();
		res.json(dummy);
		// res.json(videos);
	} catch (e) {
		console.log(e);
		res.json({ err: e });
	}
});

router.get("/:id", (req, res) => {
	res.send(id);
});

module.exports = router;
