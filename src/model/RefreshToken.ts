import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RefreshTokenSchema = new Schema ({
    token: String,
    expiryDate: Date
}, {
    timestamps: true
});