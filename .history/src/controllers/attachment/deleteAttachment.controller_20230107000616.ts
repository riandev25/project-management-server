import asyncHandler from 'express-async-handler';
import cloudinary from 'cloudinary';
import { Attachment } from '../../models/attachment.model';

export const deleteAttachment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  // Find attachment by id
  const attachment = await Attachment.findById(id);
  if (attachment) {
    await cloudinary.v2.uploader.destroy(attachment.cloudinary_id);
    res.status(204).send(attachment);
    next();
  }

  // else {
  //   res.status(404).send({ message: 'Delete failed. Attachment not found.' });
  // }
});
