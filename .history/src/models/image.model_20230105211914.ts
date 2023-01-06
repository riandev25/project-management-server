import mongoose from 'mongoose';
import { attachmentSchema } from './schemas/attachment.schema';

const Attachment = mongoose.model(
  'Attachment',
  attachmentSchema,
  'attachments'
);
