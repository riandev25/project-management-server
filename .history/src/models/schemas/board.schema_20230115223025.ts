import { Schema } from 'mongoose';

const apiKeySchema = new Schema({
  apiKey: { type: String, required: true },
});

export const boardSchema = new Schema({
  boardName: { type: String, required: true },
  apiKey: { type: Array<String>, required: true },
});
