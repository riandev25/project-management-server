import { Schema } from 'mongoose';

export const cardSchema = new Schema({
  cardName: { type: String, required: true },
  idCard: { type: String, required: true },
});
