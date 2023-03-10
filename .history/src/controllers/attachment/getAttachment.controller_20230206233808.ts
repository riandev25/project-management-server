import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';

export const getAttachment = asyncHandler(async (req, res, next) => {
  const { idCard } = req.query;
  const query = { idCard };
  const attachment = await Attachment.find(query);
  if (attachment.length !== 0) {
    res.status(200).send(attachment);
    next();
  } else {
    res.status(404).send({ message: 'Attachment not found' });
  }
});
