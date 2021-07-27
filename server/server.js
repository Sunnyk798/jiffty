const express = require("express");

const connectDB = require("./db");
const userRouter = require("./routes/users");
const videoRouter = require("./routes/videos");
const authRouter = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");

const app = express();
const PORT = process.env.PORT || 5050;

connectDB();

app.use(express.json());

app.use("/users", userRouter);
app.use("/videos", videoRouter);
app.use('/auth', authRouter);

app.listen(PORT, err => {
    if (err) console.log("Server failed ...");
    else console.log(`Server running on ${PORT}`);
});