import { Schema } from 'mongoose';

export const childTitleSchema = new Schema({
  childTitle: { type: String, required: true },
});
