import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const addChecklist = asyncHandler(async (req, res, next) => {
  const { name, idCard } = req.body;
  // if (name && idCard) {

  // } else {
  //   res.send(500);
  // }
  const checklist = await Checklist.insertMany(req.body);
  res.send(checklist);
  next();
});
