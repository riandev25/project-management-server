import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';
import cloudinary from 'cloudinary';

export const addAttachment = asyncHandler(async (req, res, next) => {
  if (req.file) {
    const file = req.file.path;
    const folder = 'attachments';
    const result = await cloudinary.v2.uploader.upload(
      req.file.path,
      { tags: [folder] },
      (result, err) => {
        if (result) res.send({ result });
        else res.status(500).send({ err });
      }
    );

    // Add a new attachment
    const attachment = new Attachment({
      name: req.body.name,
      file_url: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await attachment.save();
    res.status(200).send({ attachment });
    next();
  }
});
