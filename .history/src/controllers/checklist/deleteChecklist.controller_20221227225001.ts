import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const deleteChecklist = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const checklistDb = await Checklist.findByIdAndDelete({
    _id: id,
  });
  res.send(204);
  next();
});
