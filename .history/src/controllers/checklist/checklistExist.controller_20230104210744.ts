import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const getChecklist = asyncHandler(async (req, res, next) => {
  const { idCard, name } = req.query;

  if (idCard && name) {
    const checklistDb = await Checklist.find({ idCard, name });
    res.send(checklistDb);
    next();
  } else {
    res.send(404);
  }
});
