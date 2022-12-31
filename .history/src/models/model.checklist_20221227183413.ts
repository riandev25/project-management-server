import mongoose from 'mongoose';
import { checklistsSchema } from './schemas/checklistSchema';

const checklistConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Checklist = checklistConn.model(
  'Checklist',
  checklistsSchema,
  'checklists'
);
