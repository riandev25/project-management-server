import { Schema } from 'mongoose';

export const boardSchema = new Schema({
  boardName: { type: String, required: true },
  apiKey: { type: String, required: true },
});
