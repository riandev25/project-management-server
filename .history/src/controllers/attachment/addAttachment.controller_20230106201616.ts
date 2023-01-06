import asyncHandler from 'express-async-handler';
import cloudinary from 'cloudinary';
import { parse } from 'path';
import { Attachment } from '../../models/attachment.model';

export const addAttachment = asyncHandler(async (req, res, next) => {
  if (req.file) {
    const file = req.file.path;
    const originalFilename = req.file.originalname;
    const options = { public_id: originalFilename, folder: 'attachments' };
    const result = await cloudinary.v2.uploader.upload(file, options);

    // Add a new attachment

    const { idCard } = req.body;
    const baseFilename = parse(originalFilename).name;

    const attachment = new Attachment({
      name: baseFilename,
      idCard: idCard,
      file_url: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await attachment.save();
    res.status(201).send({ attachment });
    next();
  }
});
