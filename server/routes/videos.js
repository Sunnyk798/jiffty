const express = require("express");
const router = express.Router();
const multer = require("multer");
const Video = require("../models/Video");

var upload = multer({
	dest: "media/",
});

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
	{
		id: 4,
		name: "HTML CSS Tutorial",
	},
];

router.post("/upload", upload.single("video"), async (req, res) => {
	try {
		const videoData = req.body;
		videoData.videoPath = req.file.filename;
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
		res.json(videos);
	} catch (e) {
		console.log(e);
		res.json({ err: e });
	}
});

router.get("/:id", (req, res) => {
	res.send(id);
});

module.exports = router;
