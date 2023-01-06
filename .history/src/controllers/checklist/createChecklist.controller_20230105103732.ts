import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const addChecklist = asyncHandler(async (req, res, next) => {
  const { name, idCard } = req.body;
  if (name && idCard) {
    const checklist = await Checklist.insertMany(req.body);
    res.send(checklist);
    next();
  } else {
    res.send(500);
  }
});
