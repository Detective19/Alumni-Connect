import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String,
    role: String,
    batch: Number,
    cur_role: String,
    company: String,
    location: String,
    pic: String,
    sendMessage: Array,
    receivedMessage: Array,
    lastLogin: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
