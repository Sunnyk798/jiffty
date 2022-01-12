const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
require("dotenv").config()
const User = require("../models/User");
const authorize = require("../middlewares/auth")

router.post("/register", async(req, res) => {
    try {
        var result = await User.findOne({email: req.body.email});
        if(!result){
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                profilePicture: req.body.photoURL
            })
            result = await newUser.save();
        }
        const {updatedAt, ...user} = result._doc;
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.status(200).json({...user, token});
    } catch (err) {
        res.status(500).send(err);
    }
})

router.put("/:id", async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {$set:req.body});
        res.status(200).json({status:"Success"});
    } catch(err){
        res.send(err);
    }
})

router.get("/:id", authorize, async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {updatedAt, ...other} = user._doc;
        const response = {profile: other};
        if(other.followers.includes(req.authUser.id)){
            response.isfollowing = true;
        } else {
            response.isfollowing = false;
        }
        res.status(200).json(response);
    } catch(err) {
        console.log(err)
        res.status(500).send(err);
    }
})

router.get("/:id/follow", async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $push: {following: []}
        });
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.get("/:id/unfollow", async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: {following: []}
        });
        res.status(200).json(other);
    } catch(err) {
        res.status(500).json(err);
    }
})



module.exports = router;