const express = require("express");

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello from Jiffty");
});

app.listen(PORT, err => {
	if (err) console.log("Server failed ...");
	else console.log(`Server running on ${PORT}`);
});
