import { ObjectId } from 'mongodb';
import { Schema } from 'mongoose';

export const checkItemSchema = new Schema({
  // _id: { type: ObjectId, required: true },
  name: { type: String, required: true },
  isChecked: { type: Boolean },
  pos: { type: Number, required: true },
  idChecklist: { type: String, required: true },
  idCard: { type: String, required: true },
  remainingDays: { type: Number },
  remainingHours: { type: Number },
});

export const checklistSchema = new Schema({
  name: { type: String, required: true },
  idCard: { type: String, required: true },
});
