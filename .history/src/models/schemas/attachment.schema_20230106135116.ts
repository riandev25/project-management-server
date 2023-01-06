import { Schema } from 'mongoose';

export const attachmentSchema = new Schema({
  name: String,
  file_url: String,
  cloudinary_id: String,
});
