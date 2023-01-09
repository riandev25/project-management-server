import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';
import cloudinary from 'cloudinary';

export const addAttachment = asyncHandler(async (req, res, next) => {
  if (req.file) {
    const originalFilename = req.file.originalname;
    const file = req.file.path;
    const filename = { public_id: originalFilename };
    const folder = { folder: 'attachments' };
    const result = await cloudinary.v2.uploader.upload(file, filename, folder);

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