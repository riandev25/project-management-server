import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const deleteCheckItem = asyncHandler(async (req, res, next) => {
  const { id, idCheckItem } = req.params;
  // const { name, pos, checked } = req.query;

  const query = idCheckItem;

  const checkItem = await CheckItem.findByIdAndDelete(query);
  res.status(204).send(checkItem);
  next();
});
