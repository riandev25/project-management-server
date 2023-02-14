import { Schema } from 'mongoose';

export const listSchema = new Schema({
  listName: { type: String, required: true },
  idBoard: { type: String, required: true },
  listChildrenNames: { type: Array<string>, required: true },
});
