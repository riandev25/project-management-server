import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const getCheckItem = asyncHandler(async (req, res, next) => {
  const { idCheckItem } = req.params;

  const checkItem = await CheckItem.findById(idCheckItem);
  res.status(200).send(checkItem);
  next();
});
