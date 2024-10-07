import mongoose from 'mongoose';

const doctorschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    experienceYear: {
      type: Number,
      default: 0,
    },
    qualification: {
      type: String,
      required: true,
    },
    workInhospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorschema);
