import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const deleteCheckItems = asyncHandler(async (req, res, next) => {
  const { id} = req.params;

  const query = { id };

  const checkItem = await CheckItem.findOneAndDelete(query);
  res.status(204).send(checkItem);
  next();
});