import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  pan: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  dob: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
  },
  income: {
    type: Number,
    required: true,
  },
  employment: {
    type: String,
    required: true,
    enum: ['salaried', 'self-employed'],
  },
  creditScore: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['approved', 'review', 'rejected'],
    default: 'review',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Waitlist = mongoose.model('Waitlist', waitlistSchema);

export default Waitlist;
