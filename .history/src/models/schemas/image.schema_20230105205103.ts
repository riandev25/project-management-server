import mongoose from 'mongoose';

export const imageSchema = new mongoose.Schema({
  publicId: String,
  url: String,
});
