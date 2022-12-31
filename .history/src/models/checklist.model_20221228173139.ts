import mongoose from 'mongoose';
import { checkItemSchema, checklistSchema } from './schemas/checklist.schema';

const checklistConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);
const checkItemConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Checklist = checklistConn.model(
  'Checklist',
  checklistSchema,
  'checklists'
);

export const CheckItem = checkItemConn.model(
  'CheckItem',
  checkItemSchema,
  'check-item'
);
