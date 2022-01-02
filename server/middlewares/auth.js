const jwt = require("jsonwebtoken");
const User = require("../models/User")
require("dotenv").config();

exports.authenticate = async (req, res, next) => {
    try {
        const token = req.header.Authorization.split()[1];
        const {id} = jwt.verify(token, process.env.JWT_SECRET);
        if(!email) {
            return res.status(403).send("Not Authorized");
        }
        const authUser = await User.findById(id);
        if(!authUser){
            return res.status(403).send("Not Authorized");
        }
        req.authUser = authUser;

    } catch(e){
        res.status(403).send(e);
    }
}