import { ObjectId } from 'mongodb';
import { Schema } from 'mongoose';

export const checkItemSchema = new Schema({
  // _id: { type: ObjectId, required: true },
  name: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  pos: { type: Number, required: true },
  idChecklist: { type: String, required: true },
});

export const checklistSchema = new Schema({
  name: { type: String, required: true },
  idCard: { type: String, required: true },
});
