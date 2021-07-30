const authCheck = (req, res, next) => {
    if (!req.user) {
        res.send("Please login to view this page");
    } else {
        next();
    }
}

module.exports = authCheck