import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const addChecklist = asyncHandler(async (req, res, next) => {
  const checklist = await Checklist.insertMany(req.body);
  res.send(checklist);
  next();
});
