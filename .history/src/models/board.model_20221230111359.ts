import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
// import { checklistsSchema } from './schemas/checklistSchema';
// import { labelsSchema } from './schemas/labelSchema';
import { boardSchema } from './schemas/board.schema';

const BoardConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Board = BoardConn.model('Board', boardSchema, 'board');
