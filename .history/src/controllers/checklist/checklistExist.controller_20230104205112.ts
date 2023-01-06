import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const getChecklist = asyncHandler(async (req, res, next) => {
  const { idCard, checkName } = req.query;

  if (idCard && checkName) {
    const checklistDb = await Checklist.find({ idCard, checkName });
    res.send(checklistDb);
    next();
  } else {
    res.send(404);
  }
});
