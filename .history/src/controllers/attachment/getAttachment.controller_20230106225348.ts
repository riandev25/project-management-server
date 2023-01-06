import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';

export const getAttachment = asyncHandler(async (req, res, next) => {
  // const { id } = req.params;
  if (req.file) {
    const { idCard } = req.query;
    const query = { idCard };
    const attachment = await Attachment.find(query);
    attachment.length === 0
      ? res.status(200).send(attachment)
      : res.status(500).send({ message: 'Attachment not found' });
  }
  next();
});
