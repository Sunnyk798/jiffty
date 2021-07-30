require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");
const cors = require('cors');




const connectDB = require("./db");
const usersRouter = require("./routes/users");
const userRouter = require("./routes/user");
const videoRouter = require("./routes/videos");
const authRouter = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const cookieSession = require("cookie-session");
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({
    cors: true,
    origins: ["http://127.0.0.1:3000"],
    method: ["GET", "POST", "PUT"],
    header: true
}));

connectDB();

app.use(cookieSession({
    maxAge: 60 * 60 * 1000,
    keys: [process.env.SESSION_COOKIE_KEY]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/users", usersRouter);
app.use("/user", userRouter);
app.use("/videos", videoRouter);
app.use('/auth', authRouter);

app.listen(PORT, err => {
    if (err) console.log("Server failed ...");
    else console.log(`Server running on ${PORT}`);
});