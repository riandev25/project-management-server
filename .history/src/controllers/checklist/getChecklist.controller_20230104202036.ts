import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const getChecklist = asyncHandler(async (req, res, next) => {
  const idCard = req.query.idCard;

  if (idCard) {
    const checklistDb = await Checklist.find({ idCard });
    res.send(checklistDb);
    next();
  } else {
    res.send(404);
  }
});
