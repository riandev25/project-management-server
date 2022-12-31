import mongoose from 'mongoose';
import { cardSchema } from './schemas/card.schema';

const cardConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Label = cardConn.model('Card', cardSchema, 'cards');
