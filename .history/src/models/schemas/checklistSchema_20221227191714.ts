import { Schema } from 'mongoose';

export const checklistSchema = new Schema({
  description: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  isOptionOpen: { type: Boolean, required: true },
});

// export const checklistSchema = new Schema({
//   title: { type: String, required: true },
//   checklist: { type: [checkItemSchema] },
// });
