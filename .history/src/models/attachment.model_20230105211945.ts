import mongoose from 'mongoose';
import { attachmentSchema } from './schemas/attachment.schema';

export const Attachment = mongoose.model(
  'Attachment',
  attachmentSchema,
  'attachments'
);
