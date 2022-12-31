import { Schema } from 'mongoose';

const checklistItemSchema = new Schema({
  id: { type: Number, required: true },
  description: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  isOptionOpen: { type: Boolean, required: true },
});

const checklistItemsSchema = new Schema({
  checklistItems: { type: [checklistItemSchema], required: true },
});

export const checklistSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  // percentage: { type: Number, required: true },
  checklistItems: { type: [checklistItemsSchema] },
});

// export const checklistsSchema = new Schema({
//   checklist: { type: [checklistSchema] },
// });
