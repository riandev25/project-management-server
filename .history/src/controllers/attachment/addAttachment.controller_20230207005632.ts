import asyncHandler from 'express-async-handler';
import cloudinary from 'cloudinary';
import { parse } from 'path';
import { Attachment } from '../../models/attachment.model';

export const addAttachment = asyncHandler(async (req, res, next) => {
  if (req.file) {
    const file = req.file.path;
    const options = { folder: 'attachments' };
    const result = await cloudinary.v2.uploader.upload(file, options);

    const { idCard } = req.body;
    const baseFilename = parse(req.file.originalname).name;

    // Check if file exist
    const query = { name: baseFilename, idCard };
    const attachmentExist = await Attachment.find(query);
    console.log(baseFilename);

    if (attachmentExist.length == 0) {
      const attachment = new Attachment({
        name: baseFilename,
        idCard: idCard,
        type: 'image',
        file_url: result.secure_url,
        cloudinary_id: result.public_id,
      });
      await attachment.save();
      res.status(201).send({ attachment });
      next();
    } else {
      res.status(400).send({
        message: 'Filename already exist. Please provide another filename.',
      });
    }
  }
});
