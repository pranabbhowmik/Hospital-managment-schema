import mongoose from 'mongoose';

const hospitaltschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincord: {
      type: String,
      required: true,
    },
    specilagition: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitaltschema);
