import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';

export const deleteAllAttachments = asyncHandler(async (req, res, next) => {
  const { idCard, idBoard } = req.query;

  const query = { idCard, idBoard };

  await Attachment.deleteMany(query);
  res.status(204).send({ message: 'Attachments successfully deleted' });
  next();
});
