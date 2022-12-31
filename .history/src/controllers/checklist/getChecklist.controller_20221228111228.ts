import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const getChecklist = asyncHandler(async (req, res, next) => {
  const idCard = req.query.idCard;
  const name = req.query.name;

  const query = { idCard: idCard };

  const checklistDb = await Checklist.find(query);
  res.send(checklistDb);
  next();
});
