import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';
import cloudinary from 'cloudinary';

export const addAttachment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (req.file) {
    const attachment = await Attachment.findById(id);
    attachment
      ? res.status(200).send(attachment)
      : res.status(404).send({ message: 'Attachment not found' });
  }
  next();
});
