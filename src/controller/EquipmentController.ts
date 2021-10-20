import mongoose from 'mongoose';
import { EquipmentSchema } from '../model/Equipment';

const Equipment = mongoose.model('Equipment', EquipmentSchema);

