import mongoose from "mongoose";

const ClubsSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Type: String,
    Number_of_Members: Number
}, { timestamps: true });

const Clubs = mongoose.model("Clubs", ClubsSchema);

export default Clubs;