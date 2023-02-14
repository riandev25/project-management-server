import { Schema } from 'mongoose';

export const attachmentSchema = new Schema({
  name: { type: String, required: true },
  idCard: { type: String, required: true },
  type: { type: String, required: true },
  file_url: { type: String, required: true },
  cloudinary_id: { type: String, required: true },
  uploaded_on: {
    type: Date,
    required: true,
  },
  uploaded_at: {
    type: Date,
    required: true,
  },
});
