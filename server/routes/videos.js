const express = require("express");
const router = express.Router();

const dummy_videos = [
	{
		id: 1,
		name: "NodeJs",
	},
	{
		id: 2,
		name: "React",
	},
];

router.get("/", (req, res) => {
	res.json(dummy_videos);
});

module.exports = router;
