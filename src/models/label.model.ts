import mongoose from 'mongoose';
import { labelSchema } from './schemas/label.schema';

const labelConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Label = labelConn.model('Label', labelSchema, 'labels');
