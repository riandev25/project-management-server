import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';

export const deleteAttachment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // const query = { idCard };
  const attachment = await Attachment.findById(id);
  if (attachment) {
    res.status(200).send(attachment);
    next();
  } else {
    res.status(404).send({ message: 'Delete failed. Attachment not found.' });
  }
});
