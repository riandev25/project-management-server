import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { checklistsSchema } from './schemas/checklistsSchema';
import { labelsSchema } from './schemas/labelSchema';
import { boardsSchema } from './schemas/boardsSchema';
dotenv.config();

// const checklistItemSchema = new Schema({
//   id: { type: Number, required: true },
//   description: { type: String, required: true },
//   isChecked: { type: Boolean, required: true },
//   isOptionOpen: { type: Boolean, required: true },
// });

// const checklistItemsSchema = new Schema({
//   checklistItems: { type: [checklistItemSchema], required: true },
// });

// const checklistSchema = new Schema({
//   id: { type: Number, required: true },
//   title: { type: String, required: true },
//   percentage: { type: Number, required: true },
//   checklistItems: { type: [checklistItemsSchema] },
// });

const BoardConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Board = BoardConn.model('Board', checklistsSchema, 'boards');
