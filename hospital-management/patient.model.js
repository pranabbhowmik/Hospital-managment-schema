import mongoose from 'mongoose';

const patientschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodgroup: {
      type: String,
      enum: ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'],
      required: true,
    },
    gender: {
      type: String,
      enum: ['M', 'F', 'Others'],
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientschema);
