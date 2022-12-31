import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const deleteChecklist = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const checklistDb = await Checklist.findByIdAndDelete(id);
  res.send(204);
  // res.send(req.params.id);
  next();
});
