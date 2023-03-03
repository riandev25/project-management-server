import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const getChecklist = asyncHandler(async (req, res, next) => {
  const { idCard } = req.query;
  // const encodedIdCard = encodeURIComponent(String(idCard));

  if (idCard) {
    const checklistDb = await Checklist.find({ idList: idCard });
    res.status(200).send(checklistDb);
    next();
  } else {
    res.send(404);
  }
});
