import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';
import { cloudinary } from '../../utils/cloudinary';

export const createLabel = asyncHandler(async (req, res, next) => {
  console.log(cloudinary);
  const label = await Label.insertMany({ ...req.body, isChecked: false });
  res.status(201).send(label);
  next();
});
