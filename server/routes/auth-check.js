const authCheck = (req, res, next) => {
    if (!req.user) {
        res.send({ message: "Please login to view this page" });
    } else {
        next();
    }
}

module.exports = authCheck