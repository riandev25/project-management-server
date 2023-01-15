import { Schema } from 'mongoose';

export const boardSchema = new Schema({
  boardName: { type: String, required: true },
  apiKey: { type: Array<string>, required: true },
});
