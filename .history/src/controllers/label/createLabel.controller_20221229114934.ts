import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const createLabel = asyncHandler(async (req, res, next) => {
  const label = await Label.insertMany({ ...req.body, isChecked: false });
  res.status(201).send(label);
  next();
});
