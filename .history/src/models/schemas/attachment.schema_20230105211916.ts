import mongoose from 'mongoose';

export const attachmentSchema = new mongoose.Schema({
  name: String,
  file_url: String,
  cloudinary_id: String,
});
