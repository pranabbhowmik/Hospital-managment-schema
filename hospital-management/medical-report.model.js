import mongoose from 'mongoose';

const medicalreportschema = mongoose.Schema({}, { timestamps: true });

export const Medical = mongoose.model('Medical', medicalreportschema);
