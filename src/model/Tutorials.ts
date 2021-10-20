import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TutorialSchema = new Schema({
    title: {
        type: String,
        required: "Title required"
    },
    description: {
        type: String,
        required: "Description required"
    },
    published: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})