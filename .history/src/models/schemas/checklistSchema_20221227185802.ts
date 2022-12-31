import { Schema } from 'mongoose';

const checkItemSchema = new Schema({
  // id: { type: Number, required: true },
  description: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  isOptionOpen: { type: Boolean, required: true },
});

const checkItemArraySchema = new Schema({
  checklistItems: { type: [checkItemSchema], required: true },
});

export const checklistSchema = new Schema({
  // id: { type: Number, required: true },
  title: { type: String, required: true },
  checklistItems: { type: [checkItemArraySchema] },
});

// export const checklistsSchema = new Schema({
//   checklist: { type: [checklistSchema] },
// });
