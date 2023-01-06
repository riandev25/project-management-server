import mongoose from 'mongoose';
import { attachmentSchema } from './schemas/attachment.schema';

const attachmentConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const Attachment = attachmentConn.model(
  'Attachment',
  attachmentSchema,
  'attachments'
);
