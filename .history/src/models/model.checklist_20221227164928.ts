import mongoose from 'mongoose';
import { checklistSchema } from './schemas/checklistSchema';

const checklistConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Checklist = checklistConn.model(
  'Checklist',
  checklistSchema,
  'checklists'
);
