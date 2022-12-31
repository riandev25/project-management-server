import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const deleteLabel = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const label = await Label.findByIdAndDelete(id);
  res.status(204).send(label);
  next();
});
