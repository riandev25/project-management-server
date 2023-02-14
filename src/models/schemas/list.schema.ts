import { Schema } from 'mongoose';

export const listCardSchema = new Schema({
  cardName: { type: String, required: true },
});

export const listSchema = new Schema({
  listName: { type: String, required: true },
  idBoard: { type: String, required: true },
  cards: { type: [listCardSchema] },
});
