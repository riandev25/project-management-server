import mongoose from 'mongoose';
// import * as dotenv from 'dotenv';
import { boardSchema } from './schemas/board.schema';

const BoardConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Board = BoardConn.model('Board', boardSchema, 'board');
