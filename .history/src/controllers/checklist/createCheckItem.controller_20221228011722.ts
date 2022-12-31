import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const createCheckItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.query;

  const query = { id, name };

  const checklistDb = await Checklist.findByIdAndUpdate(id, req.body);
  res.send(checklistDb);
  next();
});
