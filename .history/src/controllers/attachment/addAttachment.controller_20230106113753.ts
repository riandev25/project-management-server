import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';
import { cloudinary } from '../../utils/cloudinary';


export const addAttachment = asyncHandler(async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.file?.path);

  // Add a new attachment
  const attachment = new Attachment({
    name: req.body.name,
    file_url: result.secure_url,
    cloudinary_id: result.public_id,
  });
  await attachment.save();
  res.status(200).send({ attachment });
});
