import { Schema } from 'mongoose';

const checkItemSchema = new Schema({
  description: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  isOptionOpen: { type: Boolean, required: true },
});

export const checklistSchema = new Schema({
  name: { type: String, required: true },
  checklist: { type: [checkItemSchema] },
});
