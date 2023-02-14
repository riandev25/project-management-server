import mongoose from 'mongoose';
import { listSchema } from './schemas/list.schema';

const listConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const List = listConn.model('List', listSchema, 'lists');
