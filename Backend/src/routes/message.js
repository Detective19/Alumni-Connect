import express from "express";
import Message from "../models/Message.model.js";

const router = express.Router();

// Create a new message
router.post("/", async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all messages
router.get("/", async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get messages between two users
router.get("/:sender/:receiver", async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [
                { sender: req.params.sender, receiver: req.params.receiver },
                { sender: req.params.receiver, receiver: req.params.sender }
            ]
        }).sort({ createdAt: 1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get specific message by ID
router.get("/:id", async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.json(message);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a message
router.delete("/:id", async (req, res) => {
    try {
        const deletedMessage = await Message.findByIdAndDelete(req.params.id);
        if (!deletedMessage) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.json({ message: "Message deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
