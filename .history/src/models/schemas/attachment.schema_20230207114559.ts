import { Schema } from 'mongoose';

let today = new Date();
let formattedDate = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
let formattedTime = today.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

export const attachmentSchema = new Schema({
  name: { type: String, required: true },
  idCard: { type: String, required: true },
  type: { type: String, required: true },
  file_url: { type: String, required: true },
  cloudinary_id: { type: String, required: true },
  uploaded_on: {
    type: Date,
    required: true,
    default: formattedDate,
  },
  uploaded_at: {
    type: Date,
    required: true,
    default: formattedTime,
  },
});
