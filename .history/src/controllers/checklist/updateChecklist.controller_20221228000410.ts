import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const updateChecklist = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, pos } = req.query;
  await Checklist.findByIdAndUpdate(id, req.body);
  res.send(200);
  next();
});
