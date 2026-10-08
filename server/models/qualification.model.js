import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    completion: {
        type: Date
    },
    description: {
        type: String
    }
}, {
    collection: "qualifications"
});

const Qualification = mongoose.model("Qualification", qualificationSchema);

export default Qualification;