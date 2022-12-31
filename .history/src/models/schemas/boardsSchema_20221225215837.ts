import { Schema } from 'mongoose';
import { checklistsSchema } from './checklistsSchema';
import { childTitleSchema } from './childTitleSchema';
import { descriptionSchema } from './descriptionSchema';
import { labelsSchema } from './labelSchema';

const boardSchema = new Schema({
  childTitle: childTitleSchema,
  desc: descriptionSchema,
  labels: labelsSchema,
  checklist: checklistsSchema,
});

export const boardsSchema = new Schema({
  cardTitle: { type: String, required: true },
  cardChildren: { type: [boardSchema], required: true },
});
