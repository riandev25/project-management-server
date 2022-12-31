import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const addChecklist = asyncHandler(async (req, res, next) => {
  const idCard = req.query.idCard;
  // const name = req.query?.name;
  // const pos = req.query.pos
  // const idChecklistSource = req.query.idChecklistSource

  // const query = { idCard: idCard };

  const checklistDb = await Checklist.insertMany({ ...req.body, idCard });
  res.send(checklistDb);
  next();
});
