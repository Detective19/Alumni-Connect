import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    message: String,
}, { timestamps: true });

const Message = mongoose.model("Message", MessageSchema);

export default Message;