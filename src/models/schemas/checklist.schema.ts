import { Schema } from 'mongoose';

export const checkItemSchema = new Schema({
  description: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  pos: { type: Number, required: true },
  idChecklist: { type: String, required: true },
  // isOptionOpen: { type: Boolean, required: true },
});

export const checklistSchema = new Schema({
  name: { type: String, required: true },
  idCard: { type: String, required: true },
  // checklist: { type: [checkItemSchema] },
});
