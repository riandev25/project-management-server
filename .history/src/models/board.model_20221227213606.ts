import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
// import { checklistsSchema } from './schemas/checklistSchema';
// import { labelsSchema } from './schemas/labelSchema';
import { boardsSchema } from './schemas/board.schema';
dotenv.config();

const BoardConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Board = BoardConn.model('Board', boardsSchema, 'main-board');
