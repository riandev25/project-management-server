import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const getChecklist = asyncHandler(async (req, res, next) => {
  const { idCard, description } = req.query;

  if (idCard) {
    const checklistDb = await Checklist.find({ idCard, description });
    res.send(checklistDb);
    next();
  } else {
    res.send(404);
  }
});
