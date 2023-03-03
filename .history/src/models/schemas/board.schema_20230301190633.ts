import { Schema } from 'mongoose';

export const boardSchema = new Schema({
  boardName: { type: String, required: true },
  owner: { type: Array<string>, required: true },
});
