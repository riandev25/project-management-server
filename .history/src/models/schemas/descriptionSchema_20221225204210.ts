import { Schema } from 'mongoose';

export const descriptionSchema = new Schema({
  desc: { type: String, required: true },
});
