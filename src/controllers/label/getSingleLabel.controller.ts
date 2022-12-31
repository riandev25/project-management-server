import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const getSingleLabel = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const label = await Label.findById(id);
  res.status(200).send(label);
  next();
});
