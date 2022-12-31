import { Schema } from 'mongoose';
import { checklistSchema } from './checklistSchema';
import { labelSchema } from './labelSchema';

const boardSchema = new Schema({
  childTitle: { type: String, required: true },
  desc: { type: String, required: true },
  labels: { type: [labelSchema] },
  checklist: { type: [checklistSchema] },
});

export const boardsSchema = new Schema({
  cardTitle: { type: String, required: true },
  cardChildren: { type: [boardSchema] },
});
