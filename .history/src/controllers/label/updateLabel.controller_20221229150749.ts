import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const updateLabel = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const update = { $set: req.body };

  const label = await Label.findByIdAndUpdate(id, update);
  res.status(201).send(label);
  next();
});
