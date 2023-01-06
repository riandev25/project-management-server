import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';
import cloudinary from 'cloudinary';

export const addAttachment = asyncHandler(async (req, res, next) => {
  if (req.file) {
    const file = req.file.path;
    const folder = { folder: 'attachments' };
    const result = await cloudinary.v2.uploader.upload(file, folder);

    // Add a new attachment

    const { name, idCard } = req.body;

    const attachment = new Attachment({
      name: name,
      idCard: idCard,
      file_url: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await attachment.save();
    res.status(201).send({ attachment });
    next();
  }
});
