import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EquipmentSchema = new Schema({
    equipment: {
        type: String,
        required: "fullName required"
    },
    qte: {
        type: String,
        required: "userName require",
    },
})