const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../models/User");
const Video = require("../models/Video");
const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("../jiffty-service-account.json");

// ---- Firebase Setup ----
initializeApp({
	credential: cert(serviceAccount),
	storageBucket: "jiffty.appspot.com",
});
const db = getFirestore();
const bucket = getStorage().bucket();

// ---- Multer Setup ----
const storage = multer.memoryStorage({
	destination: (req, file, cb) => {
		cb(null, "");
	},
	filename: (req, file, cb) => {
		const { originalname } = file;
		cb(null, `${Date.now()}-${originalname}`);
	},
});

const upload = multer({ storage });
const videoQueue = [];
var isUploaderFree = true;

router.post("/upload", upload.single("video"), async (req, res) => {
	try {
		if (!req.file) {
			console.log("No file");
			return res.json({ err: "No file" });
		}

        const blob = bucket.file(req.file.filename);
        const blobWriter = blob.createWriteStream({
            metadata: {
               contentType: req.file.mimetype
            }
         })
         blobWriter.on('error', (err) => {
            res.send(err)
         })

         blobWriter.on('finish', () => {
             console.log("uploaded");
            // res.status(200).send("File uploaded.")
         })
         blobWriter.end(req.file.buffer);

		const videoData = req.body;
		videoData.videoPath = req.file.filename;
        // videoQueue.push(videoData.videoPath);
	    // if (isUploaderFree) uploadToCloud(videoQueue);
		const video = new Video(videoData);
		await video.save();
		res.send("ok");
	} catch (e) {
		console.log(e);
		res.status(400).json({ err: e });
	}
});

// cloud uploading
// async function uploadToCloud(videoQueue) {
// 	while (videoQueue.length > 0) {
//         try{
//             console.log("Uploading " + videoQueue[0]);
//             await bucket.upload("media/" + videoQueue[0], {
//                 resumable: false,
//                 gzip: true,
//             });

//             videoQueue.shift();
//         } catch(e){
//             console.log(e);
//         }
// 	}
// }


router.get("/", async (req, res) => {
	try {
		const videos = await Video.find();
		res.json(videos);
	} catch (e) {
		console.log(e);
		res.status(400).json({ err: e });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const video = await Video.findById(req.params.id);
		var result = video._doc;
        const author = await User.findById(result.author);
        result.author = author._doc;
        res.json(result);
	} catch (e) {
		console.log(e);
		res.status(400).json({ err: e });
	}
});

// setInterval(() => {
//     if (isUploaderFree && videoQueue.length > 0) {
//         isUploaderFree = false;
//         uploadToCloud(videoQueue);
//         isUploaderFree = true;
//     }
// }, 60000);

module.exports = router;