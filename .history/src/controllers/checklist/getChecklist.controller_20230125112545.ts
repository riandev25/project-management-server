import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const getChecklist = asyncHandler(async (req, res, next) => {
  const { idList } = req.query;
  const encodedIdCard = encodeURIComponent(String(idList));

  if (idList) {
    const checklistDb = await Checklist.find({ idList: encodedIdCard });
    res.send(checklistDb);
    next();
  } else {
    res.send(404);
  }
});
