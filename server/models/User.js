const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    profile_pic_url: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);