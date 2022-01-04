const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		views: {
			type: Number,
			default: 92,
		},
        author: {
            type: String,
            required: true
        },
		videoPath: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);