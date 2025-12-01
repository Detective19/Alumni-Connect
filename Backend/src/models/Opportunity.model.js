import mongoose from "mongoose";

const OpportunitySchema = new mongoose.Schema({
    company_name: String,
    role: String,
    location: String,
    description: String,
    type: String,
    salary: String
}, { timestamps: true });

const Opportunity = mongoose.model("Opportunity", OpportunitySchema);

export default Opportunity;