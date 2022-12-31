import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const addChecklist = asyncHandler(async (req, res, next) => {
  const idCard = req.query.idCard;
  const name = req.query.name;

  const checklistDb = await Checklist.findByIdAndDelete({
    _id: '63aafd27ef134497df495636',
  });
  res.send(201);
  next();
});
