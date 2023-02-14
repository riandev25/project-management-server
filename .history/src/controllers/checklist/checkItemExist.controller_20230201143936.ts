import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const getCheckItems = asyncHandler(async (req, res, next) => {
  const { checkName, idChecklist } = req.query;
  //

  if (idChecklist && checkName) {
    const checkItem = await CheckItem.find({ idChecklist, checkName });
    res.send(checkItem);
    next();
  } else {
    res.send(404);
  }
});
