const authCheck = (req, res, next) => {
    if (!req.user) {
        res.send("You are logged out");
    } else {
        next();
    }
}

module.exports = authCheck